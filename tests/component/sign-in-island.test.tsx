import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { SignInIsland } from '@islands/sign-in-island';

const fetchMock = vi.fn();

describe('SignInIsland', () => {
  beforeEach(() => {
    fetchMock.mockReset();
    vi.stubGlobal('fetch', fetchMock);
  });

  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
  });

  it('recovers from an unreadable successful response', async () => {
    fetchMock.mockResolvedValue({ ok: true, json: vi.fn().mockRejectedValue(new Error('invalid JSON')) });
    render(<SignInIsland />);

    fireEvent.click(screen.getByRole('button', { name: 'Continue with Google' }));

    await waitFor(() => expect(screen.getByRole('alert').textContent).toBe('Sign-in could not start. Please try again.'));
    expect((screen.getByRole('button', { name: 'Continue with Google' }) as HTMLButtonElement).disabled).toBe(false);
  });
});
