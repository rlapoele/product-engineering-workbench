import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => ({ saveFirstGoal: vi.fn(), operationId: vi.fn() }));
vi.mock('../../src/adapters/browser/project-http-client', () => ({ projectHttpClient: { saveFirstGoal: mocks.saveFirstGoal } }));
vi.mock('../../src/adapters/browser/operation-id', () => ({ operationId: mocks.operationId }));
import { GoalEditorIsland } from '@islands/goal-editor-island';

describe('GoalEditorIsland', () => {
  afterEach(cleanup);

  beforeEach(() => {
    mocks.saveFirstGoal.mockReset();
    mocks.operationId.mockReset();
    mocks.operationId.mockReturnValue('01987b06-cfc7-7000-8000-000000000003');
  });
  it('keeps the private draft visible after a safe save failure', async () => {
    mocks.saveFirstGoal.mockResolvedValue({ ok: false, code: 'temporary_unavailable' });
    render(<GoalEditorIsland projectId="01987b06-cfc7-7000-8000-000000000001" />);
    fireEvent.click(screen.getByRole('button', { name: 'Add Goal' }));
    fireEvent.change(screen.getByLabelText('Goal title'), { target: { value: 'Reduce churn' } });
    fireEvent.change(screen.getByLabelText('Goal details'), { target: { value: 'Help people pause with confidence.' } });
    fireEvent.click(screen.getByRole('button', { name: 'Done editing' }));
    await waitFor(() => expect(screen.getByRole('alert').textContent).toContain('Your draft is still here'));
    expect((screen.getByLabelText('Goal title') as HTMLInputElement).value).toBe('Reduce churn');
    expect((screen.getByLabelText('Goal details') as HTMLTextAreaElement).value).toBe('Help people pause with confidence.');
  });

  it('reuses its operation ID when retrying an uncertain save', async () => {
    mocks.operationId
      .mockReturnValueOnce('01987b06-cfc7-7000-8000-000000000003')
      .mockReturnValueOnce('01987b06-cfc7-7000-8000-000000000004');
    mocks.saveFirstGoal.mockResolvedValue({ ok: false, code: 'temporary_unavailable' });
    render(<GoalEditorIsland projectId="01987b06-cfc7-7000-8000-000000000001" />);
    fireEvent.click(screen.getByRole('button', { name: 'Add Goal' }));
    fireEvent.change(screen.getByLabelText('Goal title'), { target: { value: 'Reduce churn' } });
    fireEvent.change(screen.getByLabelText('Goal details'), { target: { value: 'Help people pause with confidence.' } });

    fireEvent.click(screen.getByRole('button', { name: 'Done editing' }));
    await waitFor(() => expect(mocks.saveFirstGoal).toHaveBeenCalledTimes(1));
    fireEvent.click(screen.getByRole('button', { name: 'Done editing' }));
    await waitFor(() => expect(mocks.saveFirstGoal).toHaveBeenCalledTimes(2));

    expect(mocks.operationId).toHaveBeenCalledTimes(1);
    expect(mocks.saveFirstGoal.mock.calls[0][1].operationId).toBe(mocks.saveFirstGoal.mock.calls[1][1].operationId);
  });

  it('clears the private draft when discarded', () => {
    render(<GoalEditorIsland projectId="01987b06-cfc7-7000-8000-000000000001" />);
    fireEvent.click(screen.getByRole('button', { name: 'Add Goal' }));
    fireEvent.change(screen.getByLabelText('Goal title'), { target: { value: 'Reduce churn' } });
    fireEvent.change(screen.getByLabelText('Goal details'), { target: { value: 'Help people pause with confidence.' } });

    fireEvent.click(screen.getByRole('button', { name: 'Discard draft' }));
    fireEvent.click(screen.getByRole('button', { name: 'Add Goal' }));

    expect((screen.getByLabelText('Goal title') as HTMLInputElement).value).toBe('');
    expect((screen.getByLabelText('Goal details') as HTMLTextAreaElement).value).toBe('');
  });
});
