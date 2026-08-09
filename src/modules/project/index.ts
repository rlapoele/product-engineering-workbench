import type { FixedStarterPort } from '../fixed-starter/public';
import { createProject, saveFirstGoal } from './commands';
import type { ProjectStore } from './ports';
import type { CreateProjectInput, ProjectPublicApi, SaveFirstGoalInput } from './public';
import { listProjects, loadProject } from './queries';

export const projectApi = (store: ProjectStore, starter: FixedStarterPort): ProjectPublicApi => ({
  listProjects: (principal) => listProjects(store, principal),
  loadProject: (principal, projectId) => loadProject(store, principal, projectId),
  createProject: (principal, input: CreateProjectInput) => createProject(store, starter, principal, input),
  saveFirstGoal: (principal, projectId, input: SaveFirstGoalInput) => saveFirstGoal(store, principal, projectId, input),
});
