import { createHash } from 'node:crypto';
import type { Pool, PoolClient } from 'pg';
import type { FixedStarter } from '@modules/fixed-starter/public';
import type { ProjectStore } from '@modules/project/ports';
import type { CommandResult, CreateProjectInput, Principal, ProjectSummary, ProjectView, SaveFirstGoalInput } from '@modules/project/public';
import { inTransaction } from './transactions';
import { uuidv7 } from './uuidv7';

type ProjectRow = { id: string; title: string; description: string | null; content_locale: string; starter_id: string; starter_version: number; specification_id: string; section_ids: string[] };
type GoalRow = { id: string; canonical_section_id: string; title: string; content: string; lifecycle_status: 'Active'; revision_id: string; saved_at: Date };

const fingerprint = (value: unknown) => createHash('sha256').update(JSON.stringify(value)).digest('hex');
const isUniqueViolation = (error: unknown) => typeof error === 'object' && error !== null && 'code' in error && error.code === '23505';

export class PostgresProjectStore implements ProjectStore {
  constructor(private readonly pool: Pool, private readonly starter: FixedStarter) {}

  async list(ownerUserId: string): Promise<readonly ProjectSummary[]> {
    const result = await this.pool.query<ProjectSummary>(`
      SELECT p.id, p.title, p.description, count(g.id)::integer AS "goalCount"
      FROM app.projects p
      LEFT JOIN app.goals g ON g.project_id = p.id
      WHERE p.owner_user_id = $1
      GROUP BY p.id
      ORDER BY p.created_at DESC`, [ownerUserId]);
    return result.rows;
  }

  async load(ownerUserId: string, projectId: string): Promise<ProjectView | null> {
    return this.loadWith(this.pool, ownerUserId, projectId);
  }

  async create(owner: Principal, input: CreateProjectInput, starter: FixedStarter): Promise<CommandResult<ProjectView>> {
    const projectId = uuidv7();
    const specificationId = uuidv7();
    const requestFingerprint = fingerprint({ title: input.title, description: input.description ?? null, contentLocale: input.contentLocale });
    try {
      return await inTransaction(this.pool, async (client) => {
        const claimed = await client.query<{ project_id: string }>(`
          INSERT INTO app.command_operations (owner_user_id, operation_id, command_type, request_fingerprint, project_id)
          VALUES ($1, $2, 'create_project', $3, $4)
          ON CONFLICT (owner_user_id, operation_id) DO NOTHING
          RETURNING project_id`, [owner.userId, input.operationId, requestFingerprint, projectId]);
        if (claimed.rowCount === 0) return this.replayCreate(client, owner.userId, input.operationId, requestFingerprint);

        await client.query(`INSERT INTO app.projects (id, owner_user_id, title, description, content_locale, starter_id, starter_version)
          VALUES ($1, $2, $3, $4, $5, $6, $7)`, [projectId, owner.userId, input.title, input.description ?? null, input.contentLocale, starter.id, starter.version]);
        await client.query(`INSERT INTO app.specifications (id, project_id, section_ids) VALUES ($1, $2, $3::jsonb)`, [specificationId, projectId, JSON.stringify(starter.sections.map((section) => section.id))]);
        const project = await this.loadWith(client, owner.userId, projectId);
        return project ? { ok: true, value: project } : { ok: false, code: 'temporary_unavailable' };
      });
    } catch {
      return { ok: false, code: 'temporary_unavailable' };
    }
  }

  async saveFirstGoal(owner: Principal, projectId: string, input: SaveFirstGoalInput): Promise<CommandResult<ProjectView>> {
    const goalId = uuidv7();
    const revisionId = uuidv7();
    const requestFingerprint = fingerprint({ projectId, title: input.title, content: input.content });
    try {
      return await inTransaction(this.pool, async (client) => {
        const claimed = await client.query(`
          INSERT INTO app.command_operations (owner_user_id, operation_id, command_type, request_fingerprint, project_id, goal_id, revision_id)
          VALUES ($1, $2, 'save_first_goal', $3, $4, $5, $6)
          ON CONFLICT (owner_user_id, operation_id) DO NOTHING
          RETURNING operation_id`, [owner.userId, input.operationId, requestFingerprint, projectId, goalId, revisionId]);
        if (claimed.rowCount === 0) return this.replayGoal(client, owner.userId, input.operationId, requestFingerprint);

        const specification = await client.query<{ id: string }>(`SELECT s.id FROM app.specifications s JOIN app.projects p ON p.id = s.project_id WHERE s.project_id = $1 AND p.owner_user_id = $2`, [projectId, owner.userId]);
        if (specification.rowCount !== 1) {
          throw new NotFoundError();
        }
        const createdAt = new Date().toISOString();
        const sectionId = 'goals-and-success-criteria';
        const snapshot = { id: goalId, projectId, specificationId: specification.rows[0].id, sectionId, artifactType: 'goal', title: input.title, content: input.content, lifecycleStatus: 'Active', creatorUserId: owner.userId, createdAt };
        await client.query(`INSERT INTO app.goals (id, project_id, specification_id, canonical_section_id, artifact_type, title, content, lifecycle_status, creator_user_id, created_at, current_revision_id)
          VALUES ($1, $2, $3, $4, 'goal', $5, $6, 'Active', $7, $8, $9)`, [goalId, projectId, specification.rows[0].id, sectionId, input.title, input.content, owner.userId, createdAt, revisionId]);
        await client.query(`INSERT INTO app.goal_revisions (id, goal_id, version, saved_by_user_id, saved_at, snapshot)
          VALUES ($1, $2, 1, $3, $4, $5::jsonb)`, [revisionId, goalId, owner.userId, createdAt, JSON.stringify(snapshot)]);
        const project = await this.loadWith(client, owner.userId, projectId);
        return project ? { ok: true, value: project } : { ok: false, code: 'temporary_unavailable' };
      });
    } catch (error) {
      if (error instanceof NotFoundError) return { ok: false, code: 'not_found' };
      if (isUniqueViolation(error)) return { ok: false, code: 'validation', fieldErrors: { form: 'The first Goal is already saved for this Project.' } };
      return { ok: false, code: 'temporary_unavailable' };
    }
  }

  private async replayCreate(client: PoolClient, ownerUserId: string, operationId: string, requestFingerprint: string): Promise<CommandResult<ProjectView>> {
    const existing = await client.query<{ command_type: string; request_fingerprint: string; project_id: string }>(`SELECT command_type, request_fingerprint, project_id FROM app.command_operations WHERE owner_user_id = $1 AND operation_id = $2`, [ownerUserId, operationId]);
    const row = existing.rows[0];
    if (!row || row.command_type !== 'create_project' || row.request_fingerprint !== requestFingerprint) return { ok: false, code: 'operation_mismatch' };
    const project = await this.loadWith(client, ownerUserId, row.project_id);
    return project ? { ok: true, value: project } : { ok: false, code: 'temporary_unavailable' };
  }

  private async replayGoal(client: PoolClient, ownerUserId: string, operationId: string, requestFingerprint: string): Promise<CommandResult<ProjectView>> {
    const existing = await client.query<{ command_type: string; request_fingerprint: string; project_id: string }>(`SELECT command_type, request_fingerprint, project_id FROM app.command_operations WHERE owner_user_id = $1 AND operation_id = $2`, [ownerUserId, operationId]);
    const row = existing.rows[0];
    if (!row || row.command_type !== 'save_first_goal' || row.request_fingerprint !== requestFingerprint) return { ok: false, code: 'operation_mismatch' };
    const project = await this.loadWith(client, ownerUserId, row.project_id);
    return project ? { ok: true, value: project } : { ok: false, code: 'temporary_unavailable' };
  }

  private async loadWith(queryable: Pick<Pool, 'query'> | PoolClient, ownerUserId: string, projectId: string): Promise<ProjectView | null> {
    const projectResult = await queryable.query<ProjectRow>(`
      SELECT p.id, p.title, p.description, p.content_locale, p.starter_id, p.starter_version, s.id AS specification_id, s.section_ids
      FROM app.projects p JOIN app.specifications s ON s.project_id = p.id
      WHERE p.id = $1 AND p.owner_user_id = $2`, [projectId, ownerUserId]);
    const project = projectResult.rows[0];
    if (!project) return null;
    const goals = await queryable.query<GoalRow>(`
      SELECT g.id, g.canonical_section_id, g.title, g.content, g.lifecycle_status, r.id AS revision_id, r.saved_at
      FROM app.goals g JOIN app.goal_revisions r ON r.id = g.current_revision_id
      WHERE g.project_id = $1 ORDER BY g.created_at`, [projectId]);
    return {
      id: project.id, title: project.title, description: project.description, contentLocale: project.content_locale,
      starter: { id: project.starter_id, version: project.starter_version as 1, templateName: this.starter.templateName, presetName: this.starter.presetName },
      specification: { id: project.specification_id, sectionIds: project.section_ids },
      goals: goals.rows.map((goal) => ({ id: goal.id, sectionId: goal.canonical_section_id, title: goal.title, content: goal.content, lifecycleStatus: goal.lifecycle_status, revision: { id: goal.revision_id, version: 1, savedAt: goal.saved_at.toISOString() } })),
    };
  }
}

class NotFoundError extends Error {}
