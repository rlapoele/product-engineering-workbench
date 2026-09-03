# Workbench Visual Direction

**Session ID:** 2026-09-03-01

**Date:** 2026-09-03

**Status:** Crystallized

## Context

The Workbench needs a project-wide visual direction that can guide future
screen and prototype work without turning the product into a visual-design
workspace or prematurely defining a component library.

## Decision

The Workbench uses a warm, trustworthy, minimal and polished visual direction.
Every major page centers its primary content in a bounded surface that is
lighter than the surrounding warm application background. Quiet left and right
contextual regions may expand to support the primary content; they never
compete with it or create horizontal overflow.

Both light and dark themes preserve this warmth and surface hierarchy. The
light theme avoids pure white, while the dark theme avoids pure black and cold
blue-grey. The header continues the same composition and groups theme,
settings and account controls at the top right.

The visual system favors editorial hierarchy, direct action labels,
progressive disclosure and distinct accessible treatment of drafts, Sources,
canonical Product Knowledge, review results and known AI activity. It rejects
generic dashboard-first layouts, workflow-pressure visual language and
decorative visual noise.

## Consequences

The direction is recorded in
`docs/knowledge/ux/visual-direction.md`. It applies to the Workbench's own
interface across pages and remains separate from the Shared Design Guidance
that users create for their own products.

Future screen and prototype work should validate this direction without
claiming a complete design system or authorizing production UI implementation.

## Documents Updated

- `docs/knowledge/ux/visual-direction.md`
- `docs/knowledge/ux/README.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/index.md`
