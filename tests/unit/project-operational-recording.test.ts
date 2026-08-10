import { describe, expect, it, vi } from 'vitest';
import { fixedStarter } from '../../src/modules/fixed-starter/standard-web-app-v1';
import { projectApi } from '../../src/modules/project';
import type { OperationRecorder, ProjectStore } from '../../src/modules/project/ports';
import type { CommandResult, ProjectView } from '../../src/modules/project/public';

const view: ProjectView = {
  id: '01987b06-cfc7-7000-8000-000000000001', title: 'Synthetic Project', description: null, contentLocale: 'en',
  starter: { id: 'implementation-ready-web-app-specification.standard-web-app', version: 1, templateName: 'Implementation-Ready Web App Specification', presetName: 'Standard Web App' },
  specification: { id: '01987b06-cfc7-7000-8000-000000000002', sectionIds: [] }, goals: [],
};

const store = (result: CommandResult<ProjectView>): ProjectStore => ({
  list: vi.fn(), load: vi.fn(), create: vi.fn().mockResolvedValue(result), saveFirstGoal: vi.fn(),
});

describe('Project operational recording', () => {
  it('preserves a saved Project when operational recording fails', async () => {
    const recorder: OperationRecorder = { record: vi.fn().mockRejectedValue(new Error('ledger unavailable')) };
    const projects = projectApi(store({ ok: true, value: view }), fixedStarter, recorder, 'test-revision');

    await expect(projects.createProject({ userId: 'owner-a' }, { operationId: '01987b06-cfc7-7000-8000-000000000003', title: 'Synthetic Project', contentLocale: 'en' })).resolves.toEqual({ ok: true, value: view });
    expect(recorder.record).toHaveBeenCalledWith(expect.objectContaining({ command: 'create_project', outcome: 'success', sourceRevision: 'test-revision' }));
  });
});
