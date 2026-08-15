import { useState } from 'react';
import { operationId } from '@adapters/browser/operation-id';
import { projectHttpClient } from '@adapters/browser/project-http-client';

export function GoalEditorIsland({ projectId }: { projectId: string }) {
  const [editing, setEditing] = useState(false); const [title, setTitle] = useState(''); const [content, setContent] = useState(''); const [pending, setPending] = useState(false); const [error, setError] = useState<string>();
  if (!editing) return <button type="button" onClick={() => setEditing(true)}>Add Goal</button>;
  const save = async (event: { preventDefault(): void }) => {
    event.preventDefault(); setPending(true); setError(undefined);
    const result = await projectHttpClient.saveFirstGoal(projectId, { operationId: operationId(), title, content });
    setPending(false);
    if (result.ok) window.location.assign(`/projects/${projectId}`);
    else setError(result.fieldErrors?.title ?? result.fieldErrors?.content ?? 'The Goal could not be saved. Your draft is still here—please retry.');
  };
  return <form className="form-stack goal-editor" onSubmit={save} noValidate>
    <label>Goal title<input value={title} onChange={(event) => setTitle(event.target.value)} required maxLength={280} autoFocus /></label>
    <label>Goal details<textarea value={content} onChange={(event) => setContent(event.target.value)} required maxLength={20_000} rows={7} /></label>
    {error && <p role="alert">{error}</p>}<div className="button-row"><button disabled={pending}>{pending ? 'Saving…' : 'Done editing'}</button><button type="button" className="secondary" disabled={pending} onClick={() => setEditing(false)}>Discard draft</button></div>
  </form>;
}
