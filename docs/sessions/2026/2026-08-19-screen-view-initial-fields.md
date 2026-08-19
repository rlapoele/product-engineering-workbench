# Session — Screen / View Initial Fields

**Session ID:** 2026-08-19-10

**Date:** 2026-08-19

**Status:** Crystallized

## Context

Screen / View is an independent interface-boundary artifact. Its initial fields need to make a view useful to product, design and implementation consumers without duplicating UI Requirements, User Flows or frontend design.

## Decision

Each Screen / View has a required Title and Purpose. Purpose explains what a person should understand, decide or accomplish in that interface context.

The artifact may include:

- **Key content and actions**, identifying important information and actions without prescribing component structure or detailed UI behavior;
- **Key states**, identifying meaningful user-facing states with a short explanation;
- relevant User Profile context when useful; and
- visual Resource References with their existing represented-state and viewport context.

## Boundary

Specific interaction, visual, responsive and accessibility obligations remain UI Requirements. Cross-view journeys remain User Flows. Explicit relationships to other Product Knowledge are a separate decision.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
