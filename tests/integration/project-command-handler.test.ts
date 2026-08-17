import { describe, expect, it, vi } from 'vitest';
import { HTTP_STATUS } from '@adapters/http/http-status';
import { handleCreateProject, handleSaveFirstGoal } from '@adapters/http/project-command-handler';
import type { ProjectPublicApi } from '@modules/project/public';

const origin = 'http://127.0.0.1:4321';
const owner = { userId: 'synthetic-owner' };
const request = (command: string, body: unknown = { operationId: '01987b06-cfc7-7000-8000-000000000001', title: 'Atlas', contentLocale: 'en' }) => new Request(`${origin}/api/projects`, { method: 'POST', headers: { Origin: origin, 'Content-Type': 'application/json', 'X-Project-Command': command }, body: JSON.stringify(body) });

const projects = (): ProjectPublicApi => ({
  listProjects: vi.fn(), loadProject: vi.fn(),
  createProject: vi.fn().mockResolvedValue({ ok: false, code: 'validation' }),
  saveFirstGoal: vi.fn().mockResolvedValue({ ok: false, code: 'not_found' }),
});

describe('Project command HTTP boundary', () => {
  it('rejects missing or cross-origin create requests before session or command handling', async () => {
    const api = projects();
    const crossSite = new Request(`${origin}/api/projects`, { method: 'POST', headers: { Origin: 'https://attacker.example', 'Content-Type': 'application/json', 'X-Project-Command': 'create-project' }, body: '{}' });
    const result = await handleCreateProject({ request: crossSite, origin, projects: api, principal: vi.fn() });
    expect(result.status).toBe(HTTP_STATUS.BAD_REQUEST);
    expect(await result.json()).toEqual({ ok: false, code: 'validation' });
    expect(api.createProject).not.toHaveBeenCalled();
  });

  it('returns a no-store unauthenticated result without executing the command', async () => {
    const api = projects();
    const result = await handleCreateProject({ request: request('create-project'), origin, projects: api, principal: async () => null });
    expect(result.status).toBe(HTTP_STATUS.UNAUTHORIZED);
    expect(result.headers.get('Cache-Control')).toBe('no-store');
    expect(await result.json()).toEqual({ ok: false, code: 'unauthenticated' });
    expect(api.createProject).not.toHaveBeenCalled();
  });

  it('passes only a resolved owner and validated command body to the Project API', async () => {
    const api = projects();
    const result = await handleCreateProject({ request: request('create-project'), origin, projects: api, principal: async () => owner });
    expect(result.status).toBe(HTTP_STATUS.BAD_REQUEST);
    expect(api.createProject).toHaveBeenCalledWith(owner, expect.objectContaining({ title: 'Atlas' }));
  });

  it('rejects an oversized JSON body without Content-Length before command handling', async () => {
    const api = projects();
    const oversized = request('create-project', {
      operationId: '01987b06-cfc7-7000-8000-000000000001',
      title: 'Atlas',
      contentLocale: 'en',
      description: 'x'.repeat(30_000),
    });

    expect(oversized.headers.get('Content-Length')).toBeNull();
    const result = await handleCreateProject({ request: oversized, origin, projects: api, principal: async () => owner });

    expect(result.status).toBe(HTTP_STATUS.BAD_REQUEST);
    expect(await result.json()).toEqual({ ok: false, code: 'validation' });
    expect(api.createProject).not.toHaveBeenCalled();
  });

  it('returns service unavailable for temporary command failures', async () => {
    const api: ProjectPublicApi = {
      ...projects(),
      createProject: vi.fn().mockResolvedValue({ ok: false, code: 'temporary_unavailable' }),
      saveFirstGoal: vi.fn().mockResolvedValue({ ok: false, code: 'temporary_unavailable' }),
    };

    const createResult = await handleCreateProject({ request: request('create-project'), origin, projects: api, principal: async () => owner });
    const goalResult = await handleSaveFirstGoal({ request: request('save-first-goal', { operationId: '01987b06-cfc7-7000-8000-000000000002', title: 'Outcome', content: 'Synthetic content.' }), origin, projectId: '01987b06-cfc7-7000-8000-000000000003', projects: api, principal: async () => owner });

    expect(createResult.status).toBe(HTTP_STATUS.SERVICE_UNAVAILABLE);
    expect(await createResult.json()).toEqual({ ok: false, code: 'temporary_unavailable' });
    expect(goalResult.status).toBe(HTTP_STATUS.SERVICE_UNAVAILABLE);
    expect(await goalResult.json()).toEqual({ ok: false, code: 'temporary_unavailable' });
  });

  it('preserves privacy for a non-owner Goal command result', async () => {
    const api = projects();
    const result = await handleSaveFirstGoal({ request: request('save-first-goal', { operationId: '01987b06-cfc7-7000-8000-000000000002', title: 'Outcome', content: 'Synthetic content.' }), origin, projectId: '01987b06-cfc7-7000-8000-000000000003', projects: api, principal: async () => owner });
    expect(result.status).toBe(HTTP_STATUS.NOT_FOUND);
    expect(await result.json()).toEqual({ ok: false, code: 'not_found' });
    expect(api.saveFirstGoal).toHaveBeenCalledWith(owner, '01987b06-cfc7-7000-8000-000000000003', expect.objectContaining({ title: 'Outcome' }));
  });
});
