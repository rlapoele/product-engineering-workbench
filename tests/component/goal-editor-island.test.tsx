import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => ({ saveFirstGoal: vi.fn() }));
vi.mock('../../src/adapters/browser/project-http-client', () => ({ projectHttpClient: { saveFirstGoal: mocks.saveFirstGoal } }));
vi.mock('../../src/adapters/browser/operation-id', () => ({ operationId: () => '01987b06-cfc7-7000-8000-000000000003' }));
import { GoalEditorIsland } from '@islands/goal-editor-island';

describe('GoalEditorIsland', () => {
  beforeEach(() => mocks.saveFirstGoal.mockReset());
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
});
