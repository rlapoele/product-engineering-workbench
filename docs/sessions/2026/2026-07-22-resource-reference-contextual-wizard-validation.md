# Session — Resource Reference Contextual Wizard Validation

**Date:** 2026-07-22

**Session ID:** 2026-07-22-21

**Status:** Crystallized

---

## Context

The document-first interaction model already establishes one generic contextual-action control that appears on hover for pointer-enabled desktop devices and through an equivalent touch interaction on mobile. Resource References must use that control without adding persistent buttons, ambiguous artifact-type labels or nested hover menus.

---

## Validated Journey

Alex selects the visible `Pause subscription` Screen / View. Its generic contextual control opens the first-level actions:

- **Edit**;
- **Add reference**.

The target title already appears beside the control, so the actions do not repeat `Screen / View` or expose the internal `Product Artifact` term. On a selected Specification Section, the equivalent first-level action is **Edit section** with **Add reference**.

Alex selects **Add reference**. The first-level controls disappear and are replaced in the same compact surface by source choices:

- choose an existing file or link;
- upload a file; or
- add an external URL.

A back action restores the first-level actions for the same selected target. Alex chooses a source. The source choices then disappear and the reference-details draft appears in the same stepped surface. Alex supplies or confirms the target-specific purpose and caption, plus any applicable Screen / View metadata, before saving the reference.

---

## Decision

Resource Reference authoring uses a compact, target-preserving contextual wizard:

1. target-aware first-level actions;
2. source selection; then
3. the reference-details draft.

Each step replaces the prior controls in the same contextual surface. The user can return from source selection to the first level through a back action. This model does not introduce persistent `Edit` or `Add reference` buttons in the document, nested hover menus or an artifact-specific action label such as `Edit Screen / View`.

The user-facing term is currently **Add reference**. It describes the user's action without requiring the internal Resource / Resource Reference distinction in the first-level menu; wording may be refined later without changing the model.

---

## Consequences

The document remains readable while actions stay discoverable and consistently available across pointer and touch interactions. The same progression works for files and links, preserves the selected attachment target and gives the user a clear path back before a source is chosen.

The stepped surface avoids a dense multi-level menu while deferring the reference-details form until it has a selected source to describe. Exact visual layout, form size, focus behavior, cancellation treatment and back behavior from the details draft remain prototype validation work.

---

## Documents Updated

- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

---

## Recommended Next Step

Validate cancellation and back behavior from the reference-details draft: whether users return first to source selection, directly to the first-level controls or remain in a preserved local draft, and how that behavior stays consistent with the existing edit-in-progress draft model.
