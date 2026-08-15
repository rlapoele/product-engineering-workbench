import { execFile } from 'node:child_process';
import { resolve } from 'node:path';
import { promisify } from 'node:util';
import { Pool } from 'pg';
import { GenericContainer, Wait } from 'testcontainers';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { PostgresProjectStore } from '@adapters/postgres/project-store';
import { postgresLedger } from '@adapters/operations/postgres-ledger';
import { fixedStarter } from '@modules/fixed-starter/standard-web-app-v1';
import { projectApi } from '@modules/project';

const execFileAsync = promisify(execFile);
const operation = (suffix: string) => `01987b06-cfc7-7000-8000-00000000000${suffix}`;
let pool: Pool;
let stop: () => Promise<void>;

beforeAll(async () => {
  const container = await new GenericContainer('postgres:17-alpine')
    .withEnvironment({ POSTGRES_DB: 'workbench', POSTGRES_USER: 'workbench', POSTGRES_PASSWORD: 'workbench' })
    .withExposedPorts(5432)
    .withWaitStrategy(Wait.forLogMessage(/database system is ready to accept connections/, 2))
    .start();
  stop = async () => { await container.stop(); };
  const url = `postgresql://workbench:workbench@${container.getHost()}:${container.getMappedPort(5432)}/workbench`;
  const cli = resolve(process.cwd(), 'node_modules/.bin/node-pg-migrate');
  const args = [cli, 'up', '--migrations-dir', 'migrations', '--schema', 'app', '--create-schema', '--migrations-schema', 'migration', '--create-migrations-schema', '--migrations-table', 'pgmigrations', '--verbose', 'false'];
  await execFileAsync(process.execPath, args, { env: { ...process.env, DATABASE_URL: url } });
  await execFileAsync(process.execPath, args, { env: { ...process.env, DATABASE_URL: url } });
  pool = new Pool({ connectionString: url });
  await pool.query(`INSERT INTO auth."user" (id, name, email, "emailVerified", "updatedAt") VALUES ('owner-a', 'Owner A', 'owner-a@example.test', true, now()), ('owner-b', 'Owner B', 'owner-b@example.test', true, now())`);
}, 60_000);

afterAll(async () => { await pool?.end(); await stop?.(); });

describe('PostgresProjectStore', () => {
  it('creates starter-only Project state once and replays the exact Operation ID result', async () => {
    const store = new PostgresProjectStore(pool, fixedStarter.active());
    const input = { operationId: operation('1'), title: 'MealLoop', description: 'A synthetic test Project.', contentLocale: 'en-GB' };
    const created = await store.create({ userId: 'owner-a' }, input, fixedStarter.active());
    const replayed = await store.create({ userId: 'owner-a' }, input, fixedStarter.active());
    expect(created).toMatchObject({ ok: true, value: { title: 'MealLoop', goals: [], starter: { version: 1 } } });
    expect(replayed).toEqual(created);
    const mismatch = await store.create({ userId: 'owner-a' }, { ...input, title: 'Changed' }, fixedStarter.active());
    expect(mismatch).toEqual({ ok: false, code: 'operation_mismatch' });
    expect(await store.load('owner-b', (created as { ok: true; value: { id: string } }).value.id)).toBeNull();
  });

  it('atomically saves one Active Goal with immutable Revision 1', async () => {
    const store = new PostgresProjectStore(pool, fixedStarter.active());
    const created = await store.create({ userId: 'owner-a' }, { operationId: operation('2'), title: 'Atlas', contentLocale: 'en' }, fixedStarter.active());
    if (!created.ok) throw new Error('Project creation failed in test setup');
    const input = { operationId: operation('3'), title: 'Reduce uncertainty', content: 'Help a product owner capture an initial outcome.' };
    const saved = await store.saveFirstGoal({ userId: 'owner-a' }, created.value.id, input);
    const replayed = await store.saveFirstGoal({ userId: 'owner-a' }, created.value.id, input);
    expect(saved).toMatchObject({ ok: true, value: { goals: [{ title: input.title, lifecycleStatus: 'Active', revision: { version: 1 } }] } });
    expect(replayed).toEqual(saved);
    const counts = await pool.query(`SELECT (SELECT count(*)::int FROM app.goals WHERE project_id = $1) AS goals, (SELECT count(*)::int FROM app.goal_revisions r JOIN app.goals g ON g.id = r.goal_id WHERE g.project_id = $1) AS revisions`, [created.value.id]);
    expect(counts.rows[0]).toEqual({ goals: 1, revisions: 1 });
  });

  it('records a content-free hourly command outcome after a successful authoritative command', async () => {
    const ledger = postgresLedger(pool);
    const recorded: unknown[] = [];
    const projects = projectApi(new PostgresProjectStore(pool, fixedStarter.active()), fixedStarter, { record: async (input) => { recorded.push(input); await ledger.record(input); } }, 'integration-test');
    const result = await projects.createProject({ userId: 'owner-a' }, { operationId: operation('4'), title: 'Synthetic observability Project', contentLocale: 'en' });
    expect(result).toMatchObject({ ok: true, value: { title: 'Synthetic observability Project' } });
    expect(recorded).toHaveLength(1);

    const outcomes = await pool.query(`SELECT command_category, outcome, source_revision, count, total_duration_ms, max_duration_ms FROM ops.command_outcomes_hourly WHERE command_category = 'create_project' AND source_revision = 'integration-test'`);
    expect(outcomes.rows).toHaveLength(1);
    expect(outcomes.rows[0]).toMatchObject({ command_category: 'create_project', outcome: 'success', source_revision: 'integration-test', count: '1' });
    expect(Number(outcomes.rows[0].total_duration_ms)).toBeGreaterThanOrEqual(0);
    expect(Number(outcomes.rows[0].max_duration_ms)).toBeGreaterThanOrEqual(0);
  });
});
