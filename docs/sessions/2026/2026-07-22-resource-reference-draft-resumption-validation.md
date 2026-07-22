# Session — Resource Reference Draft Resumption Validation

**Date:** 2026-07-22

**Session ID:** 2026-07-22-24

**Status:** Crystallized

---

## Context

A private Resource Reference draft persists only after the user authors details or explicitly chooses to reuse them. The workbench must make that draft discoverable when the user returns to its target without turning the document into a field of persistent draft indicators or allowing a second competing attachment flow.

---

## Validated Journey

Alex has a preserved Resource Reference draft on the `Pause subscription` Screen / View. The document itself shows no permanent draft badge. When Alex opens that Screen / View's generic contextual control, the first-level actions are:

- **Edit**;
- **Continue reference draft**; and
- **Discard draft**.

**Add reference** is not offered while the draft exists. Alex selects **Continue reference draft**, and the local non-modal wizard resumes at its last meaningful step with the selected source and authored details intact. Alex may save or continue navigating through the preserved sequence.

If Alex selects **Discard draft**, only the unsaved Resource Reference draft is removed. The ordinary first-level actions return:

- **Edit**; and
- **Add reference**.

---

## Decision

A preserved Resource Reference draft is discoverable through its target's generic contextual control, not through a permanent document badge.

While the draft exists, the first-level contextual actions must offer **Edit**, **Continue reference draft** and **Discard draft**. **Continue reference draft** temporarily replaces **Add reference** so that a target has only one active Resource Reference authoring flow. Continuing resumes the local wizard at its last meaningful step; discarding removes only the unsaved draft and restores the ordinary actions.

---

## Consequences

The document remains visually quiet, while drafts remain recoverable at the place where their eventual Resource References will attach. Users neither lose authored details nor face ambiguity about whether a new attachment would compete with an existing draft.

Exact ordering, accessible draft-status wording, focus behavior and the treatment of several independent reference drafts on one target remain prototype validation work.

---

## Documents Updated

- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

---

## Recommended Next Step

Validate whether a target may have several independent Resource Reference drafts at once, and if so, how the compact contextual control lets the user distinguish, continue or discard each one without reintroducing document clutter.
