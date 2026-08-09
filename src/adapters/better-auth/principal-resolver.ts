import type { Principal } from '../../modules/project/public';

export interface SessionReader {
  api: { getSession(input: { headers: Headers }): Promise<{ user?: { id?: string } } | null> };
}

export const resolvePrincipal = async (auth: SessionReader, request: Request): Promise<Principal | null> => {
  const session = await auth.api.getSession({ headers: request.headers });
  return session?.user?.id ? { userId: session.user.id } : null;
};
