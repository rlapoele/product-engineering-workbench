import { Kysely, PostgresDialect } from 'kysely';
import { Pool } from 'pg';
import { createServerAuth } from '@adapters/better-auth/server-auth';
import { bestEffortRecorder } from '@adapters/operations/best-effort-recorder';
import { pinoRecorder } from '@adapters/operations/pino-recorder';
import { postgresLedger } from '@adapters/operations/postgres-ledger';
import { PostgresProjectStore } from '@adapters/postgres/project-store';
import { fixedStarter } from '@modules/fixed-starter/standard-web-app-v1';
import { projectApi } from '@modules/project';
import { runtimeConfig } from './runtime-config';

export const serverComposition = () => {
  const config = runtimeConfig();
  const pool = new Pool({ connectionString: config.DATABASE_URL, options: '-c search_path=auth,app,ops,public' });
  const authDatabase = new Kysely({ dialect: new PostgresDialect({ pool }) });
  const auth = createServerAuth(config);
  const recorder = bestEffortRecorder(pinoRecorder({ sourceRevision: config.SOURCE_REVISION, environment: config.RUNTIME_ENVIRONMENT }), postgresLedger(pool));
  const projects = projectApi(new PostgresProjectStore(pool, fixedStarter.active()), fixedStarter, recorder, config.SOURCE_REVISION);
  return { config, pool, authDatabase, auth, projects };
};
