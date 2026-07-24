# Session — Artifact Placement and Section Reordering

**Date:** 2026-07-25

**Session ID:** 2026-07-25-01

**Status:** Crystallized

---

## Context

Creating Product Knowledge from a Conversation must make the resulting artifact visible in the document without turning its placement into a separate decision. The product also needs a simple way to adjust the reading order of artifacts while preserving the distinction between document composition, artifact meaning and Conversation provenance.

## Decision

For the MVP, every Product Artifact type has a deterministic canonical Specification Section. Creating a new artifact, including through **Create from conversation**, places it at the end of that section. The creation flow does not offer a placement picker.

When that canonical section is not selected in the current Specification, the flow explicitly asks the user to add the section or cancel creation. It must not silently add a section or create an unplaced artifact.

Users may use **Move up** and **Move down** to reorder an artifact only within its current Specification Section. Saving the reorder creates an ordinary Revision of document composition. It does not change the artifact's identity, lifecycle, provenance, Artifact Relationships or Conversation Outcome Links.

Drag-and-drop ordering and moving artifacts between sections are outside the MVP.

## Consequences

- Outcome capture remains focused on choosing and reviewing knowledge rather than document placement.
- New knowledge always appears in a predictable location, while the user retains simple control over local reading order.
- The selected Specification outline remains explicit; a creation flow cannot quietly expand it.
- Conversation provenance and outcome navigation remain independent of presentation order.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/open-questions.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Step

Validate one complete owner-facing outcome-capture journey that creates an artifact whose canonical section is not selected, then confirms its placement and a subsequent within-section reorder.
