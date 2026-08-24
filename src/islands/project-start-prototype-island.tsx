import { useEffect, useMemo, useState } from 'react';

type StartingContext = 'greenfield' | 'brownfield';
type CreationStage = 'context' | 'details' | 'blueprint';
type ThemePreference = 'system' | 'light' | 'dark';
type ProjectStartNoteKey = 'problem' | 'outcome' | 'users' | 'uncertainty';

interface ProjectStartNoteDefinition {
  key: ProjectStartNoteKey;
  question: string;
  helpText: string;
  shortcutLabel: string;
  suggestedDestination: string;
  placeholder: string;
}

const creationStages: ReadonlyArray<{ key: CreationStage; label: string }> = [
  { key: 'context', label: 'Starting context' },
  { key: 'details', label: 'Project details' },
  { key: 'blueprint', label: 'Specification blueprint' },
  { key: 'blueprint', label: 'Create Project' },
];

const projectStartNoteDefinitions: ReadonlyArray<ProjectStartNoteDefinition> = [
  {
    key: 'problem',
    question: 'What problem or opportunity are you exploring?',
    helpText: 'A short, imperfect first statement is enough.',
    shortcutLabel: 'Describe the problem or opportunity',
    suggestedDestination: 'Product Overview',
    placeholder: 'For example: Independent cafés need a clearer way to manage online orders.',
  },
  {
    key: 'outcome',
    question: 'What outcome would make this worthwhile?',
    helpText: 'Describe the change you want to see, not the implementation.',
    shortcutLabel: 'Define a goal or success criterion',
    suggestedDestination: 'Goals and Success Criteria',
    placeholder: 'For example: Owners can manage and fulfil orders without switching tools.',
  },
  {
    key: 'users',
    question: 'Who do you expect this to help?',
    helpText: 'You can be specific now or refine the audience later.',
    shortcutLabel: 'Identify target users',
    suggestedDestination: 'Target Users or Personas',
    placeholder: 'For example: Café owners and their front-of-house teams.',
  },
  {
    key: 'uncertainty',
    question: 'What important uncertainty should stay visible?',
    helpText: 'Naming a question is useful when an answer is not yet known.',
    shortcutLabel: 'Capture an Open Question',
    suggestedDestination: 'Open Questions',
    placeholder: 'For example: Which order platforms should be supported first?',
  },
];

const standardWebAppSections = [
  'Product Overview',
  'Problem or Opportunity',
  'Goals and Success Criteria',
  'Target Users or Personas',
  'Core Features',
  'UX/UI Design Requirements',
] as const;

function resolveColorTheme(preference: ThemePreference): 'light' | 'dark' {
  if (preference !== 'system') return preference;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getStageIndex(stage: CreationStage): number {
  return ['context', 'details', 'blueprint'].indexOf(stage);
}

export function ProjectStartPrototypeIsland() {
  const [screen, setScreen] = useState<'overview' | 'creation' | 'workspace'>('overview');
  const [startingContext, setStartingContext] = useState<StartingContext>('greenfield');
  const [creationStage, setCreationStage] = useState<CreationStage>('context');
  const [themePreference, setThemePreference] = useState<ThemePreference>('system');
  const [projectTitle, setProjectTitle] = useState('Café Companion');
  const [projectDescription, setProjectDescription] = useState('A calmer way for independent cafés to manage online orders.');
  const [contentLanguage, setContentLanguage] = useState('English');
  const [selectedPreset, setSelectedPreset] = useState('Standard Web App');
  const [selectedSections, setSelectedSections] = useState<ReadonlyArray<string>>(standardWebAppSections);
  const [projectStartNotes, setProjectStartNotes] = useState<Record<ProjectStartNoteKey, string>>({
    problem: 'Independent cafés need a clear, single place to manage incoming online orders.',
    outcome: 'Owners can confidently accept, prepare and track orders without switching tools.',
    users: 'Independent café owners and their front-of-house teams.',
    uncertainty: 'Which ordering platforms should the first release support?',
  });
  const [isGettingStartedOpen, setIsGettingStartedOpen] = useState(true);
  const [activeDraftKey, setActiveDraftKey] = useState<ProjectStartNoteKey | undefined>();
  const [sourceEntryOpen, setSourceEntryOpen] = useState(false);
  const [sourceTitle, setSourceTitle] = useState('Current order-management observations');
  const [sourceEvidence, setSourceEvidence] = useState('Staff switch between two ordering tablets and a handwritten kitchen note during busy periods.');
  const [isExternallyAiAssisted, setIsExternallyAiAssisted] = useState(false);
  const [sourceSaved, setSourceSaved] = useState(false);
  const [sourceActionNotice, setSourceActionNotice] = useState<string>();

  const activeDraftDefinition = useMemo(
    () => projectStartNoteDefinitions.find((definition) => definition.key === activeDraftKey),
    [activeDraftKey],
  );

  useEffect(() => {
    const applyResolvedTheme = () => {
      document.documentElement.dataset.colorTheme = resolveColorTheme(themePreference);
      document.documentElement.dataset.colorThemePreference = themePreference;
    };
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    applyResolvedTheme();
    mediaQuery.addEventListener('change', applyResolvedTheme);
    return () => mediaQuery.removeEventListener('change', applyResolvedTheme);
  }, [themePreference]);

  const changeProjectStartNote = (key: ProjectStartNoteKey, value: string) => {
    setProjectStartNotes((currentNotes) => ({ ...currentNotes, [key]: value }));
  };

  const toggleSection = (section: string) => {
    setSelectedSections((currentSections) => currentSections.includes(section)
      ? currentSections.filter((currentSection) => currentSection !== section)
      : [...currentSections, section]);
  };

  const createProject = () => {
    setScreen('workspace');
    setActiveDraftKey(undefined);
    setSourceEntryOpen(false);
    setSourceSaved(false);
  };

  const startSourceEntry = () => {
    setSourceEntryOpen(true);
    setSourceSaved(false);
    setSourceActionNotice(undefined);
  };

  const savePrototypeSource = () => {
    setSourceSaved(true);
    setSourceEntryOpen(false);
    setSourceActionNotice(undefined);
  };

  return (
    <div className="prototype-shell">
      <aside className="prototype-sidebar" aria-label="Prototype navigation">
        <section className="prototype-sidebar-section">
          <p className="prototype-sidebar-heading">Workspace</p>
          <ul className="prototype-sidebar-list">
            <li><a className="prototype-sidebar-link" href="#prototype-content" aria-current="page"><span className="prototype-sidebar-dot" />Your Projects</a></li>
            <li><a className="prototype-sidebar-link" href="#prototype-content"><span className="prototype-sidebar-dot" />Getting started</a></li>
          </ul>
        </section>
        <section className="prototype-sidebar-section">
          <p className="prototype-sidebar-heading">Prototype focus</p>
          <ul className="prototype-sidebar-list">
            <li><a className="prototype-sidebar-link" href="#prototype-content"><span className="prototype-sidebar-dot" />Project creation</a></li>
            <li><a className="prototype-sidebar-link" href="#prototype-content"><span className="prototype-sidebar-dot" />Document authoring</a></li>
          </ul>
        </section>
      </aside>

      <section className="prototype-content" id="prototype-content" tabIndex={-1}>
        <div className="prototype-content-inner">
          <div className="prototype-action-row" style={{ justifyContent: 'flex-end', marginBottom: '1rem' }}>
            {(['system', 'light', 'dark'] as const).map((preference) => (
              <button
                className="prototype-text-button"
                type="button"
                aria-pressed={themePreference === preference}
                key={preference}
                onClick={() => setThemePreference(preference)}
              >
                {preference === 'system' ? 'System theme' : `${preference[0].toUpperCase()}${preference.slice(1)}`}
              </button>
            ))}
          </div>

          {screen === 'overview' && (
            <section aria-labelledby="overview-heading">
              <header className="prototype-page-heading">
                <p className="eyebrow">Your Projects</p>
                <h1 id="overview-heading">Make room for clearer product thinking.</h1>
                <p>Every Project begins with a prepared specification and can evolve as your understanding does.</p>
              </header>
              <div className="prototype-overview-grid">
                <article className="prototype-card">
                  <div className="prototype-empty-illustration" aria-hidden="true">+</div>
                  <h2>Your workspace is ready when you are.</h2>
                  <p className="prototype-muted">Start with a new idea or bring existing evidence into a Project. Either way, you stay in control of what becomes product knowledge.</p>
                  <div className="prototype-action-row">
                    <button className="prototype-primary-button" type="button" onClick={() => setScreen('creation')}>Create a Project</button>
                    <button className="prototype-quiet-button" type="button" onClick={() => setScreen('creation')}>See the starting flow</button>
                  </div>
                </article>
                <aside className="prototype-card" aria-label="Project start principles">
                  <p className="eyebrow">Designed for thinking</p>
                  <ul className="prototype-trust-list">
                    <li><span className="prototype-check">✓</span><span>Choose your own starting point.</span></li>
                    <li><span className="prototype-check">✓</span><span>Keep early notes distinct from saved knowledge.</span></li>
                    <li><span className="prototype-check">✓</span><span>Use guidance without entering a rigid workflow.</span></li>
                  </ul>
                </aside>
              </div>
            </section>
          )}

          {screen === 'creation' && (
            <section className="prototype-flow" aria-labelledby="creation-heading">
              <header className="prototype-page-heading">
                <p className="eyebrow">New Project</p>
                <h1 id="creation-heading">Give your thinking a home.</h1>
                <p>Choose a useful starting shape now. You can refine the specification as you learn.</p>
              </header>
              <ol className="prototype-progress" aria-label="Project creation progress">
                {creationStages.map((stage, index) => {
                  const currentIndex = getStageIndex(creationStage);
                  const state = index < currentIndex ? 'complete' : index === currentIndex ? 'active' : 'upcoming';
                  return <li className="prototype-progress-item" data-state={state} key={`${stage.label}-${index}`}><span className="prototype-progress-marker" /><span>{stage.label}</span></li>;
                })}
              </ol>

              {creationStage === 'context' && (
                <section className="prototype-card prototype-form-card" aria-labelledby="context-heading">
                  <header className="prototype-form-heading"><h2 id="context-heading">How are you starting?</h2><p>Choose the context that best describes the evidence you have today. This does not permanently classify the Project.</p></header>
                  <div className="prototype-choice-grid">
                    <label className="prototype-choice"><input type="radio" name="starting-context" checked={startingContext === 'greenfield'} onChange={() => setStartingContext('greenfield')} /><strong>New idea</strong><span>Start from a product opportunity, intended outcome, or a question worth exploring.</span></label>
                    <label className="prototype-choice"><input type="radio" name="starting-context" checked={startingContext === 'brownfield'} onChange={() => setStartingContext('brownfield')} /><strong>Existing context</strong><span>Bring documentation, observations, codebase context, or other supporting evidence into a new Project.</span></label>
                  </div>
                  <div className="prototype-form-actions"><button className="prototype-quiet-button" type="button" onClick={() => setScreen('overview')}>Back to Projects</button><button className="prototype-primary-button" type="button" onClick={() => setCreationStage('details')}>Continue</button></div>
                </section>
              )}

              {creationStage === 'details' && (
                <section className="prototype-card prototype-form-card" aria-labelledby="details-heading">
                  <header className="prototype-form-heading"><h2 id="details-heading">Set a useful starting point.</h2><p>{startingContext === 'greenfield' ? 'These optional answers help suggest a preset and give you editable first-draft material later.' : 'Create the Project first, then attach Sources at a clear specification scope.'}</p></header>
                  <div className="prototype-field-grid">
                    <label className="prototype-field">Project title<input value={projectTitle} onChange={(event) => setProjectTitle(event.target.value)} /></label>
                    <label className="prototype-field">Content language<select value={contentLanguage} onChange={(event) => setContentLanguage(event.target.value)}><option>English</option><option>French</option></select></label>
                  </div>
                  <label className="prototype-field" style={{ marginTop: '1rem' }}>Short description<textarea value={projectDescription} onChange={(event) => setProjectDescription(event.target.value)} rows={3} /></label>
                  {startingContext === 'greenfield' ? (
                    <div className="prototype-question-list" style={{ marginTop: '1.5rem' }}>
                      {projectStartNoteDefinitions.map((definition) => <div className="prototype-question" key={definition.key}><label htmlFor={`note-${definition.key}`}>{definition.question}</label><p>{definition.helpText}</p><textarea id={`note-${definition.key}`} value={projectStartNotes[definition.key]} placeholder={definition.placeholder} onChange={(event) => changeProjectStartNote(definition.key, event.target.value)} rows={3} /></div>)}
                    </div>
                  ) : (
                    <aside className="prototype-preview-note" style={{ marginTop: '1.5rem' }}><span aria-hidden="true">i</span><div><strong>After you create this Project</strong><p>Establish context lets you add a Source Note, upload a file, or link to external evidence. Nothing is uploaded or attached before the Project exists.</p></div></aside>
                  )}
                  <div className="prototype-form-actions"><button className="prototype-secondary-button" type="button" onClick={() => setCreationStage('context')}>Back</button><button className="prototype-primary-button" type="button" onClick={() => setCreationStage('blueprint')}>Continue to blueprint</button></div>
                </section>
              )}

              {creationStage === 'blueprint' && (
                <section className="prototype-card prototype-form-card" aria-labelledby="blueprint-heading">
                  <header className="prototype-form-heading"><h2 id="blueprint-heading">Choose the specification blueprint.</h2><p>The owner makes the final selection. The current MVP has one available template, so it is preselected without pretending to know more than it does.</p></header>
                  <article className="prototype-template-card"><span className="prototype-template-icon" aria-hidden="true">▤</span><div><span className="prototype-tag">Currently available</span><h3>Implementation-Ready Web App Specification</h3><p>Prepared sections for defining a web product clearly enough for implementation by people or AI-assisted environments.</p></div></article>
                  <fieldset style={{ border: 0, margin: '1.5rem 0 0', padding: 0 }}><legend className="prototype-sidebar-heading">Recommended preset</legend><div className="prototype-choice-grid"><label className="prototype-choice"><input type="radio" name="preset" checked={selectedPreset === 'Simple Web Presence'} onChange={() => setSelectedPreset('Simple Web Presence')} /><strong>Simple Web Presence</strong><span>A focused public-facing site with limited interaction.</span></label><label className="prototype-choice"><input type="radio" name="preset" checked={selectedPreset === 'Standard Web App'} onChange={() => setSelectedPreset('Standard Web App')} /><strong>Standard Web App</strong><span>{startingContext === 'greenfield' ? 'Recommended from the optional starting notes you provided.' : 'A balanced default while you establish existing context.'}</span></label><label className="prototype-choice"><input type="radio" name="preset" checked={selectedPreset === 'Complex Product App'} onChange={() => setSelectedPreset('Complex Product App')} /><strong>Complex Product App</strong><span>Broader product scope, integration and operational considerations.</span></label></div></fieldset>
                  <fieldset style={{ border: 0, margin: '1.5rem 0 0', padding: 0 }}><legend className="prototype-sidebar-heading">Included sections</legend><div className="prototype-section-list">{standardWebAppSections.map((section) => <label className="prototype-section-check" key={section}><input type="checkbox" checked={selectedSections.includes(section)} onChange={() => toggleSection(section)} />{section}</label>)}</div></fieldset>
                  <div className="prototype-form-actions"><button className="prototype-secondary-button" type="button" onClick={() => setCreationStage('details')}>Back</button><button className="prototype-primary-button" type="button" onClick={createProject}>Create Project</button></div>
                </section>
              )}
            </section>
          )}

          {screen === 'workspace' && (
            <section className="prototype-document-layout" aria-labelledby="workspace-heading">
              <aside className="prototype-outline-card"><h2>Specification</h2><ol>{selectedSections.map((section) => <li key={section}>{section}</li>)}</ol></aside>
              <article className="prototype-document">
                <header className="prototype-document-heading"><div><p className="eyebrow">{selectedPreset} · {contentLanguage}</p><h1 id="workspace-heading">{projectTitle || 'Untitled Project'}</h1></div><button className="prototype-secondary-button" type="button" onClick={() => setScreen('creation')}>Project setup</button></header>
                <p>{projectDescription}</p>
                {startingContext === 'greenfield' && <>{isGettingStartedOpen ? <section className="prototype-guidance" aria-labelledby="getting-started-heading"><div className="prototype-guidance-heading"><div><h2 id="getting-started-heading">Begin with what you know</h2><p>Choose any starting point. These suggestions are not a sequence, a progress tracker, or a requirement to use AI.</p></div><button className="prototype-text-button" type="button" onClick={() => setIsGettingStartedOpen(false)}>Dismiss</button></div><div className="prototype-shortcut-grid">{projectStartNoteDefinitions.map((definition) => <button className="prototype-shortcut" type="button" key={definition.key} onClick={() => setActiveDraftKey(definition.key)}><strong>{definition.shortcutLabel}</strong><span>{projectStartNotes[definition.key] ? `Use your note in ${definition.suggestedDestination}` : `Start a draft in ${definition.suggestedDestination}`}</span></button>)}</div></section> : <button className="prototype-quiet-button" type="button" onClick={() => setIsGettingStartedOpen(true)}>Open Getting started</button>}
                  {activeDraftDefinition && <section className="prototype-draft" aria-labelledby="draft-heading"><p className="prototype-unsaved-label">Editable first draft · not saved</p><h2 id="draft-heading">{activeDraftDefinition.suggestedDestination}</h2><p>This draft begins from your Project-start Note. It becomes Product Knowledge only after ordinary authoring and an explicit save.</p><label className="prototype-field" htmlFor="prototype-draft-text">Draft material<textarea id="prototype-draft-text" value={projectStartNotes[activeDraftDefinition.key]} onChange={(event) => changeProjectStartNote(activeDraftDefinition.key, event.target.value)} rows={6} /></label><div className="prototype-form-actions"><p className="prototype-live-note">Save is intentionally not simulated in this local prototype.</p><button className="prototype-secondary-button" type="button" onClick={() => setActiveDraftKey(undefined)}>Discard draft</button></div></section>}</>}
                {startingContext === 'brownfield' && <section className="prototype-guidance" aria-labelledby="context-heading"><div className="prototype-guidance-heading"><div><h2 id="context-heading">Establish context</h2><p>Add non-canonical evidence after the Project exists. Review and capture it into Product Knowledge only when you are ready.</p></div></div><div className="prototype-source-actions"><button className="prototype-primary-button" type="button" onClick={startSourceEntry}>Add Source Note</button><button className="prototype-secondary-button" type="button" onClick={() => { setSourceEntryOpen(false); setSourceActionNotice('File intake is represented here; upload is intentionally not persisted in this prototype.'); }}>Upload file</button><button className="prototype-secondary-button" type="button" onClick={() => { setSourceEntryOpen(false); setSourceActionNotice('External-link intake is represented here; links are intentionally not persisted in this prototype.'); }}>Add external link</button></div>{sourceActionNotice && <p className="prototype-live-note" role="status">{sourceActionNotice}</p>}{sourceEntryOpen && <form className="prototype-source-form" onSubmit={(event) => { event.preventDefault(); savePrototypeSource(); }}><label className="prototype-field">Title<input value={sourceTitle} onChange={(event) => setSourceTitle(event.target.value)} required /></label><label className="prototype-field">Evidence text<textarea value={sourceEvidence} onChange={(event) => setSourceEvidence(event.target.value)} required rows={5} /></label><label className="prototype-checkbox"><input type="checkbox" checked={isExternallyAiAssisted} onChange={(event) => setIsExternallyAiAssisted(event.target.checked)} />Externally AI-assisted source <span className="sr-only">This is optional and does not assert verification or authorship.</span></label><div className="prototype-form-actions"><button className="prototype-secondary-button" type="button" onClick={() => setSourceEntryOpen(false)}>Cancel</button><button className="prototype-primary-button" type="submit">Save Source Note</button></div></form>}{sourceSaved && <p className="prototype-source-status" role="status">Source Note added as non-canonical evidence. This prototype does not persist it.</p>}</section>}
                <section className="prototype-document-section"><h2>Product Overview</h2><p>Use this prepared document to develop a shared understanding of the product, its users and the outcomes it should enable.</p><button className="prototype-document-placeholder" type="button" onClick={() => startingContext === 'greenfield' ? setActiveDraftKey('problem') : setSourceEntryOpen(true)}>+ Start authoring</button></section>
                <section className="prototype-document-section"><h2>Goals and Success Criteria</h2><p>State outcomes that make the product direction meaningful, then refine observable success criteria as the specification evolves.</p><button className="prototype-document-placeholder" type="button" onClick={() => startingContext === 'greenfield' ? setActiveDraftKey('outcome') : setSourceEntryOpen(true)}>+ Add Goal</button></section>
              </article>
            </section>
          )}
        </div>
      </section>
    </div>
  );
}
