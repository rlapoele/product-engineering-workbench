import { betterAuth } from 'better-auth';
import { Kysely, PostgresDialect } from 'kysely';
import { Pool } from 'pg';
import type { RuntimeConfig } from '@composition/runtime-config';

export const createServerAuth = (config: RuntimeConfig) => {
  const pool = new Pool({ connectionString: config.DATABASE_URL, options: '-c search_path=auth,app,ops,public' });
  const database = new Kysely({ dialect: new PostgresDialect({ pool }) });
  return betterAuth({
    baseURL: config.BETTER_AUTH_BASE_URL,
    secret: config.BETTER_AUTH_SECRET,
    trustedOrigins: [config.APP_ORIGIN],
    database: { db: database, type: 'postgres' },
    socialProviders: {
      google: { clientId: config.GOOGLE_CLIENT_ID, clientSecret: config.GOOGLE_CLIENT_SECRET },
      github: { clientId: config.GITHUB_CLIENT_ID, clientSecret: config.GITHUB_CLIENT_SECRET, scope: ['read:user', 'user:email'] },
    },
  });
};
