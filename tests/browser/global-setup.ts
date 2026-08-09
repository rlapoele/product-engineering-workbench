import { execFile, spawn } from 'node:child_process';
import { once } from 'node:events';
import { rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { promisify } from 'node:util';
import { GenericContainer, Wait } from 'testcontainers';
import { browserRuntimeStatePath, type BrowserRuntimeState } from './runtime-state';

const execFileAsync = promisify(execFile);
const appOrigin = 'http://localhost:4321';
const betterAuthSecret = 'browser-test-only-secret-that-is-long-enough';

const waitForApplication = async () => {
  for (let attempt = 0; attempt < 100; attempt += 1) {
    try {
      const response = await fetch(appOrigin);
      if (response.ok) return;
    } catch {
      // The built Node server is still starting.
    }
    await new Promise((resolveDelay) => setTimeout(resolveDelay, 100));
  }
  throw new Error('The built Node application did not start on http://localhost:4321.');
};

const stopApplication = async (application: ReturnType<typeof spawn>) => {
  if (application.exitCode !== null || application.signalCode) return;
  const exited = once(application, 'exit').then(() => true);
  application.kill('SIGTERM');
  const stopped = await Promise.race([exited, new Promise<boolean>((resolveDelay) => setTimeout(() => resolveDelay(false), 5_000))]);
  if (stopped || application.exitCode !== null || application.signalCode) return;
  const forceExited = once(application, 'exit');
  application.kill('SIGKILL');
  await forceExited;
};

export default async function globalSetup() {
  await rm(browserRuntimeStatePath, { force: true });
  const database = await new GenericContainer('postgres:17-alpine')
    .withEnvironment({ POSTGRES_DB: 'workbench', POSTGRES_USER: 'workbench', POSTGRES_PASSWORD: 'workbench' })
    .withExposedPorts(5432)
    .withWaitStrategy(Wait.forLogMessage(/database system is ready to accept connections/, 2))
    .start();

  let application: ReturnType<typeof spawn> | undefined;
  try {
    const databaseUrl = `postgresql://workbench:workbench@${database.getHost()}:${database.getMappedPort(5432)}/workbench`;
    const migrationCli = resolve(process.cwd(), 'node_modules/.bin/node-pg-migrate');
    await execFileAsync(process.execPath, [migrationCli, 'up', '--migrations-dir', 'migrations', '--schema', 'app', '--create-schema', '--migrations-schema', 'migration', '--create-migrations-schema', '--migrations-table', 'pgmigrations', '--verbose', 'false'], { env: { ...process.env, DATABASE_URL: databaseUrl } });
    const state: BrowserRuntimeState = { databaseUrl, betterAuthSecret };
    await writeFile(browserRuntimeStatePath, JSON.stringify(state), { encoding: 'utf8', mode: 0o600 });
    application = spawn(process.execPath, ['dist/server/entry.mjs'], {
      cwd: process.cwd(),
      env: {
        ...process.env,
        PORT: '4321',
        APP_ORIGIN: appOrigin,
        DATABASE_URL: databaseUrl,
        BETTER_AUTH_SECRET: betterAuthSecret,
        BETTER_AUTH_BASE_URL: appOrigin,
        GOOGLE_CLIENT_ID: 'synthetic-google-client',
        GOOGLE_CLIENT_SECRET: 'synthetic-google-secret',
        GITHUB_CLIENT_ID: 'synthetic-github-client',
        GITHUB_CLIENT_SECRET: 'synthetic-github-secret',
        SOURCE_REVISION: 'browser-test',
        RUNTIME_ENVIRONMENT: 'local',
      },
      stdio: 'inherit',
    });
    await waitForApplication();
  } catch (error) {
    if (application) await stopApplication(application);
    await database.stop();
    await rm(browserRuntimeStatePath, { force: true });
    throw error;
  }

  return async () => {
    await stopApplication(application!);
    await database.stop();
    await rm(browserRuntimeStatePath, { force: true });
  };
}
