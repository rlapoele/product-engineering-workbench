import { z } from 'zod';

const configSchema = z.object({
  APP_ORIGIN: z.url(),
  DATABASE_URL: z.string().min(1),
  BETTER_AUTH_SECRET: z.string().min(32),
  BETTER_AUTH_BASE_URL: z.url(),
  GOOGLE_CLIENT_ID: z.string().min(1),
  GOOGLE_CLIENT_SECRET: z.string().min(1),
  GITHUB_CLIENT_ID: z.string().min(1),
  GITHUB_CLIENT_SECRET: z.string().min(1),
  SOURCE_REVISION: z.string().min(1).default('local'),
  RUNTIME_ENVIRONMENT: z.enum(['local', 'staging', 'production']).default('local'),
});

export type RuntimeConfig = z.infer<typeof configSchema>;

/** The sole runtime environment reader. Migration credentials are intentionally rejected here. */
export const runtimeConfig = (environment: NodeJS.ProcessEnv = process.env): RuntimeConfig => {
  if (environment.MIGRATION_DATABASE_URL) throw new Error('MIGRATION_DATABASE_URL is not valid in application runtime configuration.');
  return configSchema.parse(environment);
};
