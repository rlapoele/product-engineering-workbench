# Session — UI Requirement Impact Propagation

**Session ID:** 2026-08-22-03

**Date:** 2026-08-22

**Status:** Crystallized

## Context

UI Requirement has explicit applies-to targets, optional Functional Requirement dependency and direct Acceptance Criterion evidence. The model needs deterministic impact behavior that distinguishes an inaccurate local obligation from weakened UX/UI specification coverage on independently meaningful interface context.

## Decision

A changed or archived UI Requirement makes each Acceptance Criterion that directly `validates` it Stale. Every Screen / View or User Flow it `applies_to` receives a coverage/readiness cue rather than becoming Stale.

A changed or archived applies-to Screen / View or User Flow, or depended-on Functional Requirement, makes the UI Requirement Stale. Primary and additional applies-to targets have identical propagation behavior.

Changing or archiving a UI Requirement does not automatically make its applies-to targets or depended-on Functional Requirement Stale. A material Resource Reference change attached to a UI Requirement is its Revision and follows the same downstream propagation.

## Rationale

Changing a local interface obligation can invalidate its observable evidence and weaken the documentation of a view or journey without changing the independent meaning of that view, journey or underlying system behavior. Conversely, a changed interface context or required behavior can make the obligation inaccurate.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
