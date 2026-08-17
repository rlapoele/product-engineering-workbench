import type { CommandResult, ProjectPublicApi, Principal, SafeFailureCode } from '@modules/project/public';

type PrincipalResolver = () => Promise<Principal | null>;

const headers = { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' };
const response = (body: unknown, status: number) => new Response(JSON.stringify(body), { status, headers });
const invalid = () => response({ ok: false, code: 'validation' satisfies SafeFailureCode }, 400);
const commandStatus = (result: CommandResult<unknown>) => result.ok ? 201 : result.code === 'not_found' ? 404 : result.code === 'temporary_unavailable' ? 503 : 400;

const validCommandRequest = (request: Request, origin: string, command: string) =>
  request.headers.get('Origin') === origin &&
  request.headers.get('X-Project-Command') === command &&
  request.headers.get('Content-Type')?.toLowerCase().startsWith('application/json');

const parsedBody = async (request: Request): Promise<unknown | null> => {
  const declaredLength = Number(request.headers.get('Content-Length') ?? '0');
  if (!Number.isSafeInteger(declaredLength) || declaredLength > 30_000) return null;
  try { return await request.json(); } catch { return null; }
};

export const handleCreateProject = async ({ request, origin, projects, principal }: { request: Request; origin: string; projects: ProjectPublicApi; principal: PrincipalResolver }): Promise<Response> => {
  if (!validCommandRequest(request, origin, 'create-project')) return invalid();
  const owner = await principal();
  if (!owner) return response({ ok: false, code: 'unauthenticated' satisfies SafeFailureCode }, 401);
  const body = await parsedBody(request);
  if (!body) return invalid();
  const result = await projects.createProject(owner, body as never);
  return response(result, commandStatus(result));
};

export const handleSaveFirstGoal = async ({ request, origin, projectId, projects, principal }: { request: Request; origin: string; projectId: string | undefined; projects: ProjectPublicApi; principal: PrincipalResolver }): Promise<Response> => {
  if (!projectId || !validCommandRequest(request, origin, 'save-first-goal')) return invalid();
  const owner = await principal();
  if (!owner) return response({ ok: false, code: 'unauthenticated' satisfies SafeFailureCode }, 401);
  const body = await parsedBody(request);
  if (!body) return invalid();
  const result = await projects.saveFirstGoal(owner, projectId, body as never);
  return response(result, commandStatus(result));
};
