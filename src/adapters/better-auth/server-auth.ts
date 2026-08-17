import { betterAuth } from 'better-auth';
import type { Kysely } from 'kysely';
import type { RuntimeConfig } from '@composition/runtime-config';

export const createServerAuth = (config: RuntimeConfig, database: Kysely<unknown>) => {
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
