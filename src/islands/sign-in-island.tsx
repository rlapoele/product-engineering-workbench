import { useState } from 'react';

export function SignInIsland() {
  const [error, setError] = useState<string>();
  const signIn = async (provider: 'google' | 'github') => {
    setError(undefined);
    const response = await fetch('/api/auth/sign-in/social', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ provider, callbackURL: '/' }) });
    const payload = await response.json() as { url?: string };
    if (payload.url) window.location.assign(payload.url);
    else setError('Sign-in could not start. Please try again.');
  };
  return <section className="auth-card" aria-labelledby="sign-in-heading">
    <p className="eyebrow">Product Engineering Workbench</p><h1 id="sign-in-heading">A calm place to begin thinking.</h1>
    <p>Sign in to create and protect your product knowledge.</p>
    <div className="button-row"><button type="button" onClick={() => signIn('google')}>Continue with Google</button><button type="button" className="secondary" onClick={() => signIn('github')}>Continue with GitHub</button></div>
    {error && <p role="alert">{error}</p>}
  </section>;
}
