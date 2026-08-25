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
- Tailwind CSS v4 Play CDN compiles the prototype's inline `@theme`; the generated color, font, spacing, and layout utilities are used throughout the static HTML shell.
- The requested workspace shell is present: a desktop-open table of contents, sticky Project/Specification header, and a right contextual rail collapsed by default.
- The application header now exposes both Theme and Settings as readable controls. The contextual rail signals future conversations and source attachments without prematurely deciding the panel's information architecture.
- When expanded, the contextual panel receives the workspace's third grid track and compresses the document column; it does not extend outside the viewport.
- Each table-of-contents group has one leading separator, avoiding doubled horizontal rules between adjacent groups.
- The source reference has a slightly wider open left panel and denser document content. The prototype keeps the same hierarchy while providing more reading space for the working document and deliberately lower-contrast grouping.

## Interaction checks

- The five-step creation journey completes for a Brownfield Project and reveals the non-canonical Source guidance.
- Greenfield and Brownfield remain starting contexts, not Project types, in both wording and simulated continuation states.
- The right contextual rail opens and closes; the left table of contents collapses and restores; Theme cycles through system, dark, and light.
- The browser console reported no errors or warnings during the final shell and interaction checks.

## Result

final result: passed

No P0, P1, or P2 issue was found in the final local QA pass. This is still a temporary UX study: it has no persistence, authentication, uploads, or canonical Product Knowledge behavior.
