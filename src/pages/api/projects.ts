import type { APIRoute } from 'astro';
import { resolvePrincipal } from '../../adapters/better-auth/principal-resolver';
import { serverComposition } from '../../composition/server-composition';

const safe = (body: unknown, status = 400) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });
const validCommandRequest = (request: Request, origin: string, command: string) => request.headers.get('Origin') === origin && request.headers.get('X-Project-Command') === command && request.headers.get('Content-Type')?.includes('application/json');

export const POST: APIRoute = async ({ request }) => {
  const composed = serverComposition();
  if (!validCommandRequest(request, composed.config.APP_ORIGIN, 'create-project')) return safe({ ok: false, code: 'validation' });
  const principal = await resolvePrincipal(composed.auth, request);
  if (!principal) return safe({ ok: false, code: 'unauthenticated' }, 401);
  try {
    const result = await composed.projects.createProject(principal, await request.json());
    return safe(result, result.ok ? 201 : 400);
  } catch { return safe({ ok: false, code: 'validation' }); }
};
