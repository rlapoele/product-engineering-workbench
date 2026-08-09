import type { APIRoute } from 'astro';
import { handleSaveFirstGoal } from '../../../../adapters/http/project-command-handler';
import { resolvePrincipal } from '../../../../adapters/better-auth/principal-resolver';
import { serverComposition } from '../../../../composition/server-composition';

export const POST: APIRoute = async ({ request, params }) => {
  const composed = serverComposition();
  return handleSaveFirstGoal({ request, origin: composed.config.APP_ORIGIN, projectId: params.projectId, projects: composed.projects, principal: () => resolvePrincipal(composed.auth, request) });
};
