# Session — Single Resource Reference Draft Per Target Validation

**Date:** 2026-07-22

**Session ID:** 2026-07-22-25

**Status:** Crystallized

---

## Context

Resource Reference drafts are recoverable through their attachment target's compact contextual control. Allowing several unsaved drafts on one target would require a draft picker or list and would compete with the document-first objective of a small, understandable action surface.

---

## Validated Journey

Alex starts a Resource Reference draft for the `Pause subscription` Screen / View. Before saving or discarding it, Alex reopens the target's contextual control. The workbench offers **Continue reference draft** and **Discard draft**, not another **Add reference** action.

Alex saves the draft. The new Resource Reference now appears inline at the Screen / View, and the ordinary **Add reference** action returns. Alex may add a second reference through a new wizard flow.

Alex may independently retain a separate unsaved Resource Reference draft on the `UX/UI Design Requirements and Interaction Notes` section. That draft does not alter the Screen / View's contextual actions.

---

## Decision

For the MVP, an attachment target may have at most one active unsaved Resource Reference draft.

The user must save or explicitly discard that draft before starting another Resource Reference at the same target. Resource Reference drafts attached to different Specifications, Sections or Product Artifacts remain independent.

---

## Consequences

The target's compact contextual control needs no draft picker, count or persistent indicator. It retains one unambiguous continuation path and prevents multiple competing authoring flows at the same document location.

Users can still attach several Resources to one target by saving each reference before beginning the next. Later product evidence may justify multi-draft support, but it must not be inferred from the MVP model.

---

## Documents Updated

- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

---

## Recommended Next Step

Validate how the resource-details draft presents source-specific information and fields without making a local disclosure too large for a small-screen document view.
