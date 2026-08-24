import { AxeBuilder } from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const assertAccessible = async (page: import('@playwright/test').Page) => {
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
};

test('the Greenfield prototype keeps Project-start Notes non-canonical until an owner invokes a draft', async ({ page }) => {
  await page.goto('/prototypes/project-start');
  await expect(page.getByRole('heading', { name: 'Make room for clearer product thinking.' })).toBeVisible();
  await assertAccessible(page);

  await page.getByRole('button', { name: 'Create a Project' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Continue to blueprint' }).click();
  await page.getByRole('button', { name: 'Create Project' }).click();

  await expect(page.getByRole('heading', { name: 'Begin with what you know' })).toBeVisible();
  await page.getByRole('button', { name: 'Define a goal or success criterion' }).click();
  await expect(page.getByText('Editable first draft · not saved')).toBeVisible();
  await expect(page.getByText('It becomes Product Knowledge only after ordinary authoring and an explicit save.')).toBeVisible();
  await assertAccessible(page);
});

test('the Brownfield prototype offers a Source Note only after Project creation', async ({ page }) => {
  await page.goto('/prototypes/project-start');
  await page.getByRole('button', { name: 'Create a Project' }).click();
  await page.getByRole('radio', { name: 'Existing context' }).check();
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByText('Nothing is uploaded or attached before the Project exists.')).toBeVisible();
  await page.getByRole('button', { name: 'Continue to blueprint' }).click();
  await page.getByRole('button', { name: 'Create Project' }).click();

  await expect(page.getByRole('heading', { name: 'Establish context' })).toBeVisible();
  await page.getByRole('button', { name: 'Add Source Note' }).click();
  await page.getByLabel('Externally AI-assisted source').check();
  await page.getByRole('button', { name: 'Save Source Note' }).click();
  await expect(page.getByText('Source Note added as non-canonical evidence. This prototype does not persist it.')).toBeVisible();
  await assertAccessible(page);
});
