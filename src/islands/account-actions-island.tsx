import { useState } from 'react';

export function AccountActionsIsland({ name, email }: { name: string; email: string }) {
  const [error, setError] = useState<string>();
  const [pending, setPending] = useState(false);
  const signOut = async () => {
    setError(undefined);
    setPending(true);
    try {
      const response = await fetch('/api/auth/sign-out', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}),
      });
      if (!response.ok) throw new Error('The sign-out request was rejected.');
      window.location.assign('/');
    } catch {
      setPending(false);
      setError('Sign-out could not complete. Please try again.');
    }
  };
  const displayName = name || email || 'Signed-in owner';
  return <section className="account-actions" aria-label="Signed-in account" aria-busy={pending}>
    <p><strong>{displayName}</strong>{name && email && <><br /><span>{email}</span></>}</p>
    <button type="button" className="secondary" disabled={pending} onClick={() => void signOut()}>{pending ? 'Signing out…' : 'Sign out'}</button>
    {error && <p role="alert">{error}</p>}
  </section>;
}
