import type { FixedStarter } from '@modules/fixed-starter/public';
import type { CommandResult, CreateProjectInput, Principal, ProjectSummary, ProjectView, SaveFirstGoalInput } from './public';

export interface ProjectStore {
  list(ownerUserId: string): Promise<readonly ProjectSummary[]>;
  load(ownerUserId: string, projectId: string): Promise<ProjectView | null>;
  create(owner: Principal, input: CreateProjectInput, starter: FixedStarter): Promise<CommandResult<ProjectView>>;
  saveFirstGoal(owner: Principal, projectId: string, input: SaveFirstGoalInput): Promise<CommandResult<ProjectView>>;
}

export interface IdentifierPort {
  uuidv7(): string;
}

export interface OperationRecorder {
  record(input: Readonly<{ command: 'create_project' | 'save_first_goal'; outcome: 'success' | 'failure'; durationMs: number; sourceRevision: string }>): Promise<void>;
}
