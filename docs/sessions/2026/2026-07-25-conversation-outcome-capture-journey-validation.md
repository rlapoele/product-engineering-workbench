# Session — Conversation Outcome-Capture Journey Validation

**Date:** 2026-07-25

**Session ID:** 2026-07-25-02

**Status:** Crystallized

---

## Context

The MVP outcome-capture rules had been defined in separate decisions. A complete owner-facing scenario was needed to confirm that source selection, destination, missing-section handling, review, provenance navigation and document ordering operate as one coherent flow.

## Scenario Validated

Alex, the MealLoop Project owner, selects three messages from a Conversation about overdue invoices during a paused subscription. Alex chooses **Create from selection**, then **Track an Open Question**.

The canonical **Open Questions** section is not selected in the Specification. The section gate offers **Add section** or **Cancel**. Cancel returns Alex to the destination choice with the three messages still selected and no change to the Specification outline.

Alex instead chooses **Add section**, reviews the ordinary prefilled Open Question draft and explicitly saves it. The new Open Question appears at the end of the newly selected section. A bidirectional Conversation Outcome Link connects it with the Conversation and the three selected messages.

Alex later captures another Open Question and uses **Move up** to reorder it above the first item. The resulting document-composition Revision changes only the section order; neither Open Question's identity, content, provenance, relationships or Outcome Link changes.

If Alex adds the section but later discards the unsaved artifact draft, the explicitly added empty section remains. It is a deliberate outline decision, not a hidden effect of saving the draft.

## Conclusions

- The owner can preserve selected source material while reconsidering its destination.
- The Specification never gains a hidden section or unplaced artifact.
- Explicit save, not message selection or section addition, creates canonical Product Knowledge.
- Outcome Links remain stable when the document's local reading order changes.

## Documents Updated

- `docs/planning/open-questions.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Step

Decide whether the workbench should provide any non-automatic signals that a Conversation may be ready for owner-led outcome capture, or rely solely on the owner's explicit judgment in the MVP.
