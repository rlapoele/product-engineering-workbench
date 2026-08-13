import { useState } from 'react';

export function AccountActionsIsland({ name, email }: { name: string; email: string }) {
  const [error, setError] = useState<string>();
  const signOut = async () => {
    setError(undefined);
    const response = await fetch('/api/auth/sign-out', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    });
    if (response.ok) window.location.assign('/');
    else setError('Sign-out could not complete. Please try again.');
  };
  const displayName = name || email || 'Signed-in owner';
  return <section className="account-actions" aria-label="Signed-in account">
    <p><strong>{displayName}</strong>{name && email && <><br /><span>{email}</span></>}</p>
    <button type="button" className="secondary" onClick={() => void signOut()}>Sign out</button>
    {error && <p role="alert">{error}</p>}
  </section>;
}
