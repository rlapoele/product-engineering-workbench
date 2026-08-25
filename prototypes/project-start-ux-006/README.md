# UX-006 Project-start Prototype

This directory is a standalone, disposable static UX study for the Greenfield and Brownfield Project-start journey. It is not application code and must not be imported by, routed through, or styled from `src/`.

## Scope

- A document-first desktop workspace based on the approved visual reference.
- Open desktop table of contents, sticky Project/Specification header, and collapsed contextual rail.
- The five-step local Project-creation journey and its Greenfield/Brownfield continuation states.
- Local-only interactions for navigation, panel states, theme state and setup-state simulation.

The contextual panel deliberately reserves geometry for later comments, observations and conversations; it does not define their future information architecture.

## Local use

Open `index.html` in a modern browser or serve this directory with a static-file server. The prototype has no persistence, authentication, API calls, uploads, canonical Product Knowledge, Source records or production dependencies.

## Style conventions

- CSS uses Tailwind v4's browser package for this temporary no-build study.
- Primitive, semantic and component tokens are layered in `styles.css`.
- `l-` classes express layout and `c-` classes express visual components in `@layer components`; direct HTML styling is in `@layer base`.
- The visual reference uses Lora for display headings and Urbanist for prose and interface text.
