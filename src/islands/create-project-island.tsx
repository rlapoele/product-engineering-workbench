import { useRef, useState } from 'react';
import { operationId } from '@adapters/browser/operation-id';
import { projectHttpClient } from '@adapters/browser/project-http-client';

export function CreateProjectIsland({ contentLocale }: { contentLocale: string }) {
  const [title, setTitle] = useState(''); const [description, setDescription] = useState(''); const [locale, setLocale] = useState(contentLocale);
  const [pending, setPending] = useState(false); const [error, setError] = useState<string>();
  const activeOperationId = useRef<string | undefined>(undefined);
  const changeDraft = (change: () => void) => {
    activeOperationId.current = undefined;
    change();
  };
  const submit = async (event: { preventDefault(): void }) => {
    event.preventDefault(); setPending(true); setError(undefined);
    const currentOperationId = activeOperationId.current ?? operationId();
    activeOperationId.current = currentOperationId;
    const result = await projectHttpClient.createProject({ operationId: currentOperationId, title, description, contentLocale: locale });
    setPending(false);
    if (result.ok) window.location.assign(`/projects/${result.value.id}`);
    else {
      if (result.code !== 'temporary_unavailable') activeOperationId.current = undefined;
      setError(result.fieldErrors?.title ?? result.fieldErrors?.contentLocale ?? 'Your Project could not be created. Please retry.');
    }
  };
  return <form onSubmit={submit} className="form-stack" noValidate>
    <label>Project title<input value={title} onChange={(event) => changeDraft(() => setTitle(event.target.value))} disabled={pending} required maxLength={280} autoFocus /></label>
    <label>Short description <span className="optional">(optional)</span><textarea value={description} onChange={(event) => changeDraft(() => setDescription(event.target.value))} disabled={pending} maxLength={2000} rows={3} /></label>
    <label>Content Language<input value={locale} onChange={(event) => changeDraft(() => setLocale(event.target.value))} disabled={pending} required /></label>
    <p className="starter-note"><strong>Starter</strong><br />Implementation-Ready Web App Specification · Standard Web App</p>
    {error && <p role="alert">{error}</p>}<button disabled={pending}>{pending ? 'Creating Project…' : 'Create Project'}</button>
  </form>;
}
