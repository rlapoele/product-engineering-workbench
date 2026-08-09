import { randomUUID } from 'node:crypto';
import { makeSignature } from 'better-auth/crypto';
import type { Pool } from 'pg';

/**
 * Test-only Better Auth fixture. It is deliberately outside src/ so no route,
 * runtime composition, or production configuration can use it.
 */
export const createBetterAuthTestSession = async ({ pool, secret, userId = randomUUID() }: { pool: Pool; secret: string; userId?: string }) => {
  const token = randomUUID();
  const now = new Date();
  const expiresAt = new Date(now.getTime() + 60 * 60 * 1000);
  await pool.query(`INSERT INTO auth."user" (id, name, email, "emailVerified", "updatedAt") VALUES ($1, $2, $3, true, $4)`, [userId, 'Synthetic browser owner', `${userId}@example.test`, now]);
  await pool.query(`INSERT INTO auth."session" (id, "expiresAt", token, "createdAt", "updatedAt", "userId") VALUES ($1, $2, $3, $4, $4, $5)`, [randomUUID(), expiresAt, token, now, userId]);
  return { userId, cookie: `better-auth.session_token=${token}.${await makeSignature(token, secret)}` };
};
