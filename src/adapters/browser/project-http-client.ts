import type { CommandResult, CreateProjectInput, ProjectView, SaveFirstGoalInput } from '@modules/project/public';

const request = async <T>(path: string, command: string, body: unknown): Promise<CommandResult<T>> => {
  try {
    const response = await fetch(path, {
      method: 'POST', credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json', 'X-Project-Command': command },
      body: JSON.stringify(body),
    });
    return await response.json() as CommandResult<T>;
  } catch {
    return { ok: false, code: 'temporary_unavailable' };
  }
};

export const projectHttpClient = {
  createProject: (input: CreateProjectInput) => request<ProjectView>('/api/projects', 'create-project', input),
  saveFirstGoal: (projectId: string, input: SaveFirstGoalInput) => request<ProjectView>(`/api/projects/${projectId}/goals`, 'save-first-goal', input),
};
