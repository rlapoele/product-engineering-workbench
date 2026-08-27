# UX-006 temporary prototype — Design QA

## Reference and implementation

- Approved visual baseline: `http://127.0.0.1:4323/exec-afdd33d9-6254-4d40-8c9a-b7fac8a549bd.png`
- Prototype: `http://127.0.0.1:4322/`
- Side-by-side comparison: `http://127.0.0.1:4322/qa.html`
- Desktop comparison viewport: 1440 × 1024

This QA note deliberately lives with the temporary static prototype rather than at the repository root. It is not a production design-system or application QA artifact.

## Comparison findings

- The specification document remains the visual focus: Lora is reserved for the Project and section headings; Urbanist is used for document prose, navigation, and controls.
- The approved reference's quiet warm canvas, sage navigation cue, light divider treatment, and low-density application header are retained.
- Tailwind CSS v4 Play CDN compiles the prototype's inline `@theme`; the generated color, font, and document-container utilities are used throughout the static HTML shell.
- The requested workspace shell is present: a desktop-open table of contents, sticky Project/Specification header, and a right contextual rail collapsed by default.
- The application header now exposes both Theme and Settings as readable controls. The contextual rail signals future conversations and source attachments without prematurely deciding the panel's information architecture.
- When expanded, the contextual panel receives the workspace's third grid track and compresses the document column; it does not extend outside the viewport.
- Each table-of-contents group has one leading separator, avoiding doubled horizontal rules between adjacent groups.
- The source reference has a slightly wider open left panel and denser document content. The prototype keeps the same hierarchy while providing more reading space for the working document and deliberately lower-contrast grouping.

## Tailwind CSS v4.3+ contract check

- The utility API exposes only the markup-consumed semantic colors (`canvas`, `ink`, `line`), fonts (`display`, `sans`) and the named `document` reading-width container. Component-only semantic values remain ordinary CSS custom properties in `styles.css`.
- The document's stable `46rem` reading measure is now `--container-document` / `max-w-document`; no arbitrary utility values remain.
- This update adds no `c-` or `l-` classes. It removes the unused `c-application-nav` and `l-project-start-form` hooks because Tailwind layout utilities already express those elements.
- The prototype retains no `@apply`, legacy Tailwind v3 directives, configuration file or dynamically constructed Tailwind class names.
- `node --check`, source checks and `git diff --check` pass. Browser verification confirmed that `max-w-document` computes to `736px`, the initial workspace has no horizontal overflow, icons render, and the Project-start dialog still reaches the Brownfield Source guidance without console warnings or errors.

## Interaction checks

- The five-step creation journey completes for a Brownfield Project and reveals the non-canonical Source guidance.
- Greenfield and Brownfield remain starting contexts, not Project types, in both wording and simulated continuation states.
- The right contextual rail opens and closes; the left table of contents collapses and restores; Theme cycles through system, dark, and light.
- The browser console reported no errors or warnings during the final shell and interaction checks.

## Result

final result: passed

No P0, P1, or P2 issue was found in the final local QA pass. This is still a temporary UX study: it has no persistence, authentication, uploads, or canonical Product Knowledge behavior.
