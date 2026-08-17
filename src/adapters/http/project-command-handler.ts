import type { CommandResult, ProjectPublicApi, Principal, SafeFailureCode } from '@modules/project/public';
import { isProjectId } from '@modules/project/rules';
import { HTTP_STATUS } from './http-status';

type PrincipalResolver = () => Promise<Principal | null>;

const headers = { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' };
const maxCommandBodyBytes = 30_000;
const response = (body: unknown, status: number) => new Response(JSON.stringify(body), { status, headers });
const invalid = () => response({ ok: false, code: 'validation' satisfies SafeFailureCode }, HTTP_STATUS.BAD_REQUEST);
const commandStatus = (result: CommandResult<unknown>) => result.ok ? HTTP_STATUS.CREATED : result.code === 'not_found' ? HTTP_STATUS.NOT_FOUND : result.code === 'temporary_unavailable' ? HTTP_STATUS.SERVICE_UNAVAILABLE : HTTP_STATUS.BAD_REQUEST;

const validCommandRequest = (request: Request, origin: string, command: string) =>
  request.headers.get('Origin') === origin &&
  request.headers.get('X-Project-Command') === command &&
  request.headers.get('Content-Type')?.toLowerCase().startsWith('application/json');

const parsedBody = async (request: Request): Promise<unknown | null> => {
  const declaredLength = request.headers.get('Content-Length');
  if (declaredLength !== null && (!/^\d+$/.test(declaredLength) || Number(declaredLength) > maxCommandBodyBytes)) return null;

  const reader = request.body?.getReader();
  if (!reader) return null;
  const decoder = new TextDecoder('utf-8', { fatal: true });
  let receivedBytes = 0;
  let body = '';
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      receivedBytes += value.byteLength;
      if (receivedBytes > maxCommandBodyBytes) {
        await reader.cancel();
        return null;
      }
      body += decoder.decode(value, { stream: true });
    }
    return JSON.parse(body + decoder.decode());
  } catch {
    return null;
  } finally {
    reader.releaseLock();
  }
};

export const handleCreateProject = async ({ request, origin, projects, principal }: { request: Request; origin: string; projects: ProjectPublicApi; principal: PrincipalResolver }): Promise<Response> => {
  if (!validCommandRequest(request, origin, 'create-project')) return invalid();
  const owner = await principal();
  if (!owner) return response({ ok: false, code: 'unauthenticated' satisfies SafeFailureCode }, HTTP_STATUS.UNAUTHORIZED);
  const body = await parsedBody(request);
  if (!body) return invalid();
  const result = await projects.createProject(owner, body as never);
  return response(result, commandStatus(result));
};

export const handleSaveFirstGoal = async ({ request, origin, projectId, projects, principal }: { request: Request; origin: string; projectId: string | undefined; projects: ProjectPublicApi; principal: PrincipalResolver }): Promise<Response> => {
  if (!isProjectId(projectId) || !validCommandRequest(request, origin, 'save-first-goal')) return invalid();
  const owner = await principal();
  if (!owner) return response({ ok: false, code: 'unauthenticated' satisfies SafeFailureCode }, HTTP_STATUS.UNAUTHORIZED);
  const body = await parsedBody(request);
  if (!body) return invalid();
  const result = await projects.saveFirstGoal(owner, projectId, body as never);
  return response(result, commandStatus(result));
};
