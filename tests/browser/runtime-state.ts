import { resolve } from 'node:path';

export const browserRuntimeStatePath = resolve(process.cwd(), '.playwright-browser-runtime.json');

export type BrowserRuntimeState = Readonly<{
  databaseUrl: string;
  betterAuthSecret: string;
}>;
