import type { ProjectStore } from './ports';
import type { Principal, ProjectSummary, ProjectView } from './public';

export const listProjects = (store: ProjectStore, owner: Principal): Promise<readonly ProjectSummary[]> => store.list(owner.userId);
export const loadProject = (store: ProjectStore, owner: Principal, projectId: string): Promise<ProjectView | null> => store.load(owner.userId, projectId);
