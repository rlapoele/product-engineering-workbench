import { readFile } from 'node:fs/promises';
import { AxeBuilder } from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';
import { Pool } from 'pg';
import { createBetterAuthTestSession } from '../support/better-auth-test-session';
import { browserRuntimeStatePath, type BrowserRuntimeState } from './runtime-state';

const assertAccessible = async (page: Page) => {
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
};

test('an authenticated owner creates and saves a Goal after a response-loss retry', async ({ page, context }) => {
  const runtime = JSON.parse(await readFile(browserRuntimeStatePath, 'utf8')) as BrowserRuntimeState;
  const pool = new Pool({ connectionString: runtime.databaseUrl });
  const session = await createBetterAuthTestSession({ pool, secret: runtime.betterAuthSecret });
  await context.addCookies([{ name: 'better-auth.session_token', value: session.cookieValue, url: 'http://localhost:4321' }]);

  try {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Start with what matters.' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'No Projects yet' })).toBeVisible();
    await expect(page.getByText(`${session.userId}@example.test`)).toBeVisible();
    await expect(page.getByRole('button', { name: 'Sign out' })).toBeVisible();
    await assertAccessible(page);

    await page.getByRole('button', { name: 'Create Project' }).click();
    await expect(page.getByRole('heading', { name: 'Give your thinking a home.' })).toBeVisible();
    await assertAccessible(page);
    await page.getByLabel('Project title').fill('Synthetic browser Project');
    await page.getByLabel('Short description (optional)').fill('Only synthetic test knowledge is used here.');
    await page.getByRole('button', { name: 'Create Project' }).click();

    await expect(page).toHaveURL(/\/projects\/[0-9a-f-]+$/);
    await expect(page.getByText('This Specification is empty. Start by describing the outcome you want to achieve.')).toBeVisible();
    await page.getByRole('button', { name: 'Add Goal' }).click();
    await expect(page.getByLabel('Goal title')).toBeVisible();
    await assertAccessible(page);
    await page.getByLabel('Goal title').fill('Reduce uncertainty');
    await page.getByLabel('Goal details').fill('Help the owner capture an initial outcome with confidence.');

    let hideFirstSaveResponse = true;
    const operationIds: string[] = [];
    await page.route('**/api/projects/*/goals', async (route) => {
      operationIds.push((route.request().postDataJSON() as { operationId: string }).operationId);
      if (hideFirstSaveResponse) {
        hideFirstSaveResponse = false;
        await route.fetch();
        await route.fulfill({ status: 503, contentType: 'text/plain', body: 'Synthetic response loss.' });
        return;
      }
      await route.continue();
    });
    await page.getByRole('button', { name: 'Done editing' }).click();
    await expect(page.getByRole('alert')).toContainText('Your draft is still here—please retry.');
    await expect(page.getByLabel('Goal title')).toHaveValue('Reduce uncertainty');
    await expect(page.getByLabel('Goal details')).toHaveValue('Help the owner capture an initial outcome with confidence.');
    await assertAccessible(page);

    await page.getByRole('button', { name: 'Done editing' }).click();
    await expect(page.getByText('Goal saved · Revision 1')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Reduce uncertainty' })).toBeVisible();
    expect(operationIds).toHaveLength(2);
    expect(operationIds[0]).toBe(operationIds[1]);
    await assertAccessible(page);
  } finally {
    await pool.end();
  }
});

test('an authenticated owner can sign out', async ({ page, context }) => {
  const runtime = JSON.parse(await readFile(browserRuntimeStatePath, 'utf8')) as BrowserRuntimeState;
  const pool = new Pool({ connectionString: runtime.databaseUrl });
  const session = await createBetterAuthTestSession({ pool, secret: runtime.betterAuthSecret });
  await context.addCookies([{ name: 'better-auth.session_token', value: session.cookieValue, url: 'http://localhost:4321' }]);

  try {
    await page.goto('/');
    await page.getByRole('button', { name: 'Sign out' }).click();
    await expect(page.getByRole('heading', { name: 'A calm place to begin thinking.' })).toBeVisible();
    await assertAccessible(page);
  } finally {
    await pool.end();
  }
});
