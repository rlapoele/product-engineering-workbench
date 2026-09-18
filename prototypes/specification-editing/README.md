# Specification editing interaction study

A bounded Craft-led desktop and handheld study of FR-012: reading, selection, private inline editing, leaving/resuming, explicit commit, and discard. This is exploratory UI; it does not replace the crystallized visual direction or connect to production data.

## Run

From this folder, run `npm install` and `npm run dev -- --host 127.0.0.1 --port 4340 --strictPort`. Build with `npm run build`.

## Walkthrough

1. Read the requirement and select its heading. Selection does not open an editor.
2. Choose Edit (revealed on desktop hover/focus, persistent on narrow/touch layouts).
3. Clarify the timezone in the statement. Return to reading: the saved requirement remains unchanged.
4. Navigate the outline or reload this tab, then Keep editing draft.
5. Done editing commits the study Revision; Discard changes offers a local confirmation.
6. Open Review feedback and related evidence; the finding never applies an edit automatically.
7. Compare Urbanist and Poppins, then Ochre and Blue, using the header selectors with unchanged content, hierarchy and interaction.

Drafts and simulated saved content use sessionStorage for this tab only. This models the distinction between a private draft and committed knowledge, not the production persistence implementation. Revisions are simulated with a counter, without a revision-history store. The artifact title, statement and one illustrative condition are editable. Acceptance criteria, sources and the neighboring requirement provide reading context; their authoring is outside this study. Global application destinations are reference chrome. No backend, AI invocation, authentication, impact propagation or production integration is included.

## Styling contract

Primitive colors use OKLCH. Raw font tokens identify Urbanist and Poppins; the semantic `font-body` token switches between them, while `font-tracking` gives Urbanist `0.035em` spacing and leaves Poppins at its native spacing. Root semantic color tokens map primitives to canvas, sidebar, primary ink, muted ink, accent, accent-hover, selection, subtle line, on-accent ink and focus ring. Blue remaps the same semantic roles. Utility-facing `@theme inline` exports `canvas`, `sidebar`, `ink`, `muted`, `accent`, `selection`, `line`, `font-sans`; `text-xl` is the study's large prose size. Other raw values are not exported.

Named local contracts:

- `c-button` (primary variant): shared touch size, internal padding, appearance and hover/focus behavior across controls.
- `c-link`: consistent local-reference affordance and usable target size.
- `c-field` (title variant): shared input geometry, text sizing, boundaries and progressive auto-sizing. Older browsers retain ordinary resizable textareas.
- `c-requirement`, `c-requirement__edit`: coordinated reading/selected/editing and pointer/focus visibility states; these cross-element rules benefit from a named contract.
- `c-outline-link`: repeated selected/current navigation appearance and touch targets.
- `c-topbar` / `c-topbar__identity`, `c-sidebar` (open variant), `c-context`, `c-desktop-context` and `c-mobile-context`: bounded navigation/context presentation and responsive visibility contracts.
- `l-workspace` (context variant): the document/context grid, coordinated with breakpoint-dependent context placement.

Page spacing and composition remain Tailwind utilities. No arbitrary-value utilities or `@apply` are used. Custom CSS dimensions are rem-based except proportional and viewport calculations. The 64rem navigation and 80rem context breakpoints share the same intent in CSS and React. Component classes are study-local, not a committed production component library.

## Verification

See [design-qa.md](design-qa.md) for captured comparisons, interaction evidence and limitations. Build passed. Browser verification covered 1485px desktop, 390px handheld and 320px narrow layouts, private-draft retention across navigation/reload, explicit save, discard confirmation, required-title validation, keyboard focus return, outline navigation, local review and palette switching. No browser console warnings/errors were observed.

Real iOS/Android software-keyboard behavior, screen-reader use and extended writing comfort remain user/device validation work. Browser viewport checks do not establish physical-device usability or accessibility conformance.

Typeface candidates: [Urbanist](https://fontsource.org/fonts/urbanist/install) variable and [Poppins](https://fontsource.org/fonts/poppins/install) regular/semibold. Icons: [Tabler](https://tabler.io/icons). Assets are bundled locally.
