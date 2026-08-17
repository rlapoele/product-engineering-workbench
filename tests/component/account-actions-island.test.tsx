import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { AccountActionsIsland } from '@islands/account-actions-island';

const fetchMock = vi.fn();

describe('AccountActionsIsland', () => {
  beforeEach(() => {
    fetchMock.mockReset();
    vi.stubGlobal('fetch', fetchMock);
  });

  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
  });

  it('recovers from a rejected sign-out response', async () => {
    fetchMock.mockResolvedValue({ ok: false });
    render(<AccountActionsIsland name="Owner" email="owner@example.test" />);

    fireEvent.click(screen.getByRole('button', { name: 'Sign out' }));

    await waitFor(() => expect(screen.getByRole('alert').textContent).toBe('Sign-out could not complete. Please try again.'));
    expect((screen.getByRole('button', { name: 'Sign out' }) as HTMLButtonElement).disabled).toBe(false);
  });
});
