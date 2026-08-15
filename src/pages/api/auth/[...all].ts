import type { APIRoute } from 'astro';
import { serverComposition } from '@composition/server-composition';

export const ALL: APIRoute = ({ request }) => serverComposition().auth.handler(request);
