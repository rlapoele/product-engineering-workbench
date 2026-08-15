import type { FixedStarterPort } from '@modules/fixed-starter/public';
import { createProject as create, saveFirstGoal as save } from './commands';
import type { OperationRecorder, ProjectStore } from './ports';
import type { CommandResult, CreateProjectInput, ProjectPublicApi, ProjectView, SaveFirstGoalInput } from './public';
import { listProjects, loadProject } from './queries';

const observedCommand = async (
  recorder: OperationRecorder,
  sourceRevision: string,
  command: 'create_project' | 'save_first_goal',
  action: () => Promise<CommandResult<ProjectView>>,
): Promise<CommandResult<ProjectView>> => {
  const startedAt = Date.now();
  const result = await action();
  try {
    await recorder.record({ command, outcome: result.ok ? 'success' : 'failure', durationMs: Date.now() - startedAt, sourceRevision });
  } catch {
    // Operational recording is intentionally unable to change the authoritative command outcome.
  }
  return result;
};

export const projectApi = (store: ProjectStore, starter: FixedStarterPort, recorder: OperationRecorder, sourceRevision: string): ProjectPublicApi => ({
  listProjects: (principal) => listProjects(store, principal),
  loadProject: (principal, projectId) => loadProject(store, principal, projectId),
  createProject: (principal, input: CreateProjectInput) => observedCommand(recorder, sourceRevision, 'create_project', () => create(store, starter, principal, input)),
  saveFirstGoal: (principal, projectId, input: SaveFirstGoalInput) => observedCommand(recorder, sourceRevision, 'save_first_goal', () => save(store, principal, projectId, input)),
});
