# Session — Resource Reference Draft Preservation Validation

**Date:** 2026-07-22

**Session ID:** 2026-07-22-23

**Status:** Crystallized

---

## Context

The Resource Reference contextual wizard preserves the user's place in the document through local, non-modal disclosure. It needs a clear boundary between transient source browsing and a draft worth preserving, while remaining consistent with the existing edit-in-progress model.

---

## Validated Journey

Alex opens **Add reference** on a Screen / View, chooses an existing file and reaches the reference-details step. Alex has not changed a field. If Alex uses back navigation, leaves the document or abandons the wizard, the selection is transient: no local Resource Reference draft is retained.

Alex instead changes the caption. That edit begins a private local reference draft containing the selected source and the entered details. Alex may return to source selection, navigate elsewhere in the workbench or return later without losing the draft. No Resource Reference, Revision or canonical Product Knowledge change exists until Alex explicitly saves.

For replacement, Alex chooses a new source and selects **Reuse details**. Although Alex has not manually edited a field, this is an explicit decision that the existing target-level meaning should carry forward. It therefore begins the same preserved local draft, with the copied values available to edit.

When Alex later opens the target's contextual control, the workbench offers **Continue reference draft** and **Discard draft**. Discarding is the only action that removes the unsaved selection and details.

---

## Decision

Selecting a Resource source alone is provisional navigation state and must not begin a preserved draft.

A private local Resource Reference draft begins only when either:

- the user changes a reference-detail field; or
- the user explicitly chooses **Reuse details** while replacing a Resource.

The draft includes the selected source and its target-specific details. It is private to the user, creates no Revision and does not alter canonical Product Knowledge. It persists through local back navigation and ordinary navigation in the workbench until the user saves or explicitly discards it.

---

## Consequences

Users can explore files and links without accumulating abandoned drafts, yet authored meaning and an intentional reuse decision are protected from accidental loss. The workbench distinguishes source browsing from authoring without using a leave prompt or modal interruption.

Temporary upload handling, storage cleanup, exact draft indicators and focus behavior remain implementation and accessibility design work. They must preserve this user-visible boundary.

---

## Documents Updated

- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

---

## Recommended Next Step

Validate how `Continue reference draft` and `Discard draft` appear in the compact contextual surface without hiding the ordinary `Edit` action or making the selected target's state visually noisy.
