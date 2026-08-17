import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => ({ createProject: vi.fn(), operationId: vi.fn() }));
vi.mock('../../src/adapters/browser/project-http-client', () => ({ projectHttpClient: { createProject: mocks.createProject } }));
vi.mock('../../src/adapters/browser/operation-id', () => ({ operationId: mocks.operationId }));
import { CreateProjectIsland } from '@islands/create-project-island';

describe('CreateProjectIsland', () => {
  beforeEach(() => {
    mocks.createProject.mockReset();
    mocks.operationId.mockReset();
    mocks.operationId
      .mockReturnValueOnce('01987b06-cfc7-7000-8000-000000000003')
      .mockReturnValueOnce('01987b06-cfc7-7000-8000-000000000004');
  });

  it('reuses its operation ID when retrying an uncertain create', async () => {
    mocks.createProject.mockResolvedValue({ ok: false, code: 'temporary_unavailable' });
    render(<CreateProjectIsland contentLocale="en" />);
    fireEvent.change(screen.getByLabelText('Project title'), { target: { value: 'Atlas' } });

    fireEvent.click(screen.getByRole('button', { name: 'Create Project' }));
    await waitFor(() => expect(mocks.createProject).toHaveBeenCalledTimes(1));
    fireEvent.click(screen.getByRole('button', { name: 'Create Project' }));
    await waitFor(() => expect(mocks.createProject).toHaveBeenCalledTimes(2));

    expect(mocks.operationId).toHaveBeenCalledTimes(1);
    expect(mocks.createProject.mock.calls[0][0].operationId).toBe(mocks.createProject.mock.calls[1][0].operationId);
  });
});
