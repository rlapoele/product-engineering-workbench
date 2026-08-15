import type { Principal } from '@modules/project/public';

export interface AuthenticatedPrincipal extends Principal {
  name: string;
  email: string;
}

export interface SessionReader {
  api: { getSession(input: { headers: Headers }): Promise<{ user?: { id?: string; name?: string | null; email?: string | null } } | null> };
}

export const resolvePrincipal = async (auth: SessionReader, request: Request): Promise<AuthenticatedPrincipal | null> => {
  const session = await auth.api.getSession({ headers: request.headers });
  return session?.user?.id ? {
    userId: session.user.id,
    name: session.user.name?.trim() || '',
    email: session.user.email?.trim() || '',
  } : null;
};
