import type { APIRoute } from 'astro';
import { resolvePrincipal } from '../../../../adapters/better-auth/principal-resolver';
import { serverComposition } from '../../../../composition/server-composition';

const safe = (body: unknown, status = 400) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });
export const POST: APIRoute = async ({ request, params }) => {
  const composed = serverComposition();
  const valid = request.headers.get('Origin') === composed.config.APP_ORIGIN && request.headers.get('X-Project-Command') === 'save-first-goal' && request.headers.get('Content-Type')?.includes('application/json');
  if (!valid || !params.projectId) return safe({ ok: false, code: 'validation' });
  const principal = await resolvePrincipal(composed.auth, request);
  if (!principal) return safe({ ok: false, code: 'unauthenticated' }, 401);
  try {
    const result = await composed.projects.saveFirstGoal(principal, params.projectId, await request.json());
    return safe(result, result.ok ? 201 : result.code === 'not_found' ? 404 : 400);
  } catch { return safe({ ok: false, code: 'validation' }); }
};
