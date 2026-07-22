# Session — Contextual Document Disclosure Validation

**Date:** 2026-07-22

**Session ID:** 2026-07-22-22

**Status:** Crystallized

---

## Context

The document-first experience uses compact contextual actions to avoid persistent controls. The Resource Reference wizard introduces several steps at a selected document target. The workbench must determine whether those steps open a dialog or preserve the user's working context.

---

## Decision

Contextual document interactions should default to local, non-modal progressive disclosure.

When the user activates the generic contextual control, the valid actions, source choices and local drafts appear at the selected document scope. A later step may replace the previous controls or expand nearby content, and a back action restores the prior local state. The user remains at the same location in the Specification throughout the interaction.

The workbench must avoid a modal or dialog as the ordinary container for contextual document actions, particularly on mobile. A future exception requires a specific reason that the interaction cannot remain understandable and usable in the document context.

---

## Validated Consequences

The Resource Reference flow is a local disclosure sequence: first-level actions, source selection, then reference-details draft. Each step replaces the preceding local controls; it does not cover the document or force the user out of their working context.

This approach supports a more fluid document experience and avoids treating ordinary authoring actions as interruptions. It also lets users return through the sequence without losing their spatial relationship to the attachment target.

Exact placement relative to the selected target, keyboard focus transitions, small-screen reflow, dismissal behavior and the rare conditions that justify a dialog remain prototype and accessibility validation work.

---

## Documents Updated

- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

---

## Recommended Next Step

Validate cancellation, back navigation and focus behavior across the local Resource Reference disclosure sequence, including whether incomplete reference details become a preserved local draft or are discarded when the user returns to source selection.
