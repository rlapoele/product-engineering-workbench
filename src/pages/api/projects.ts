import type { APIRoute } from 'astro';
import { handleCreateProject } from '@adapters/http/project-command-handler';
import { resolvePrincipal } from '@adapters/better-auth/principal-resolver';
import { serverComposition } from '@composition/server-composition';

export const POST: APIRoute = async ({ request }) => {
  const composed = serverComposition();
  return handleCreateProject({ request, origin: composed.config.APP_ORIGIN, projects: composed.projects, principal: () => resolvePrincipal(composed.auth, request) });
};
