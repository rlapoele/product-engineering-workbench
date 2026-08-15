import type { FixedStarterPort } from '@modules/fixed-starter/public';
import type { ProjectStore } from './ports';
import { createProjectSchema, fieldErrors, saveFirstGoalSchema } from './rules';
import type { CommandResult, CreateProjectInput, Principal, ProjectView, SaveFirstGoalInput } from './public';

export const createProject = async (store: ProjectStore, starter: FixedStarterPort, owner: Principal, input: CreateProjectInput): Promise<CommandResult<ProjectView>> => {
  const parsed = createProjectSchema.safeParse(input);
  return parsed.success ? store.create(owner, parsed.data, starter.active()) : { ok: false, code: 'validation', fieldErrors: fieldErrors(parsed.error.issues) };
};

export const saveFirstGoal = async (store: ProjectStore, owner: Principal, projectId: string, input: SaveFirstGoalInput): Promise<CommandResult<ProjectView>> => {
  const parsed = saveFirstGoalSchema.safeParse(input);
  return parsed.success ? store.saveFirstGoal(owner, projectId, parsed.data) : { ok: false, code: 'validation', fieldErrors: fieldErrors(parsed.error.issues) };
};
