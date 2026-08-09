export type Principal = Readonly<{ userId: string }>;
export type ProjectSummary = Readonly<{ id: string; title: string; description: string | null; goalCount: number }>;
export type GoalView = Readonly<{
  id: string;
  sectionId: string;
  title: string;
  content: string;
  lifecycleStatus: 'Active';
  revision: Readonly<{ id: string; version: 1; savedAt: string }>;
}>;
export type ProjectView = Readonly<{
  id: string;
  title: string;
  description: string | null;
  contentLocale: string;
  starter: Readonly<{ id: string; version: 1; templateName: string; presetName: string }>;
  specification: Readonly<{ id: string; sectionIds: readonly string[] }>;
  goals: readonly GoalView[];
}>;

export type SafeFailureCode = 'validation' | 'unauthenticated' | 'not_found' | 'operation_mismatch' | 'temporary_unavailable';
export type CommandResult<T> = Readonly<{ ok: true; value: T }> | Readonly<{ ok: false; code: SafeFailureCode; fieldErrors?: Readonly<Record<string, string>> }>;

export type CreateProjectInput = Readonly<{ operationId: string; title: string; description?: string; contentLocale: string }>;
export type SaveFirstGoalInput = Readonly<{ operationId: string; title: string; content: string }>;

export interface ProjectPublicApi {
  listProjects(principal: Principal): Promise<readonly ProjectSummary[]>;
  loadProject(principal: Principal, projectId: string): Promise<ProjectView | null>;
  createProject(principal: Principal, input: CreateProjectInput): Promise<CommandResult<ProjectView>>;
  saveFirstGoal(principal: Principal, projectId: string, input: SaveFirstGoalInput): Promise<CommandResult<ProjectView>>;
}
