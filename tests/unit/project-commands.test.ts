import { describe, expect, it, vi } from 'vitest';
import { fixedStarter } from '@modules/fixed-starter/standard-web-app-v1';
import { createProject, saveFirstGoal } from '@modules/project/commands';
import type { ProjectStore } from '@modules/project/ports';
import type { ProjectView } from '@modules/project/public';

const project: ProjectView = {
  id: '01987b06-cfc7-7000-8000-000000000001', title: 'MealLoop', description: null, contentLocale: 'en',
  starter: { id: 'implementation-ready-web-app-specification.standard-web-app', version: 1, templateName: 'Implementation-Ready Web App Specification', presetName: 'Standard Web App' },
  specification: { id: '01987b06-cfc7-7000-8000-000000000002', sectionIds: ['goals-and-success-criteria'] }, goals: [],
};
const owner = { userId: 'owner-1' };
const operationId = '01987b06-cfc7-7000-8000-000000000003';

const store = (): ProjectStore => ({
  list: vi.fn(), load: vi.fn(),
  create: vi.fn().mockResolvedValue({ ok: true, value: project }),
  saveFirstGoal: vi.fn().mockResolvedValue({ ok: true, value: project }),
});

describe('first-slice Project commands', () => {
  it('server-selects the immutable Standard Web App starter and rejects blank Project titles', async () => {
    const target = store();
    const accepted = await createProject(target, fixedStarter, owner, { operationId, title: ' MealLoop ', contentLocale: 'en-GB' });
    expect(accepted).toEqual({ ok: true, value: project });
    expect(target.create).toHaveBeenCalledWith(owner, expect.objectContaining({ title: 'MealLoop' }), expect.objectContaining({ id: 'implementation-ready-web-app-specification.standard-web-app', version: 1 }));
    const rejected = await createProject(target, fixedStarter, owner, { operationId, title: '  ', contentLocale: 'en' });
    expect(rejected).toMatchObject({ ok: false, code: 'validation', fieldErrors: { title: 'Project title is required.' } });
    expect(target.create).toHaveBeenCalledTimes(1);
  });

  it('accepts only a UUIDv7 operation ID and nonblank Goal content before persistence', async () => {
    const target = store();
    const rejected = await saveFirstGoal(target, owner, project.id, { operationId: 'not-a-uuid', title: 'Outcome', content: '  ' });
    expect(rejected).toMatchObject({ ok: false, code: 'validation' });
    expect(target.saveFirstGoal).not.toHaveBeenCalled();
    const accepted = await saveFirstGoal(target, owner, project.id, { operationId, title: 'Outcome', content: 'Keep people informed.' });
    expect(accepted).toEqual({ ok: true, value: project });
    expect(target.saveFirstGoal).toHaveBeenCalledWith(owner, project.id, expect.objectContaining({ title: 'Outcome', content: 'Keep people informed.' }));
  });
});
