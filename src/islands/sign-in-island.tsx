import { useState } from 'react';

export function SignInIsland() {
  const [error, setError] = useState<string>();
  const [pendingProvider, setPendingProvider] = useState<'google' | 'github'>();
  const signIn = async (provider: 'google' | 'github') => {
    setError(undefined);
    setPendingProvider(provider);
    try {
      const response = await fetch('/api/auth/sign-in/social', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ provider, callbackURL: '/' }) });
      if (!response.ok) throw new Error('The sign-in request was rejected.');
      const payload = await response.json() as { url?: string };
      if (!payload.url) throw new Error('The sign-in response did not contain an authorization URL.');
      window.location.assign(payload.url);
    } catch {
      setPendingProvider(undefined);
      setError('Sign-in could not start. Please try again.');
    }
  };
  const pending = pendingProvider !== undefined;
  return <section className="auth-card" aria-labelledby="sign-in-heading" aria-busy={pending}>
    <p className="eyebrow">Product Engineering Workbench</p><h1 id="sign-in-heading">A calm place to begin thinking.</h1>
    <p>Sign in to create and protect your product knowledge.</p>
    <div className="button-row"><button type="button" disabled={pending} onClick={() => signIn('google')}>{pendingProvider === 'google' ? 'Connecting with Google…' : 'Continue with Google'}</button><button type="button" className="secondary" disabled={pending} onClick={() => signIn('github')}>{pendingProvider === 'github' ? 'Connecting with GitHub…' : 'Continue with GitHub'}</button></div>
    {error && <p role="alert">{error}</p>}
  </section>;
}
