# Session — Non-Goals Section Authoring

**Session ID:** 2026-08-18-03

**Date:** 2026-08-18

**Status:** Crystallized

## Context

The prepared specification document needs a clear way to state intentional product boundaries without turning those boundaries into a parallel Product Artifact model.

## Decision

- `Non-Goals` contains a list of lightweight, section-owned Non-Goal statements. Each uses one required plain-language statement to say what the current specification does not aim to achieve.
- The list is unordered: display position has no semantic meaning, and the MVP provides no reordering control.
- An empty section shows concise non-canonical guidance and exposes `Add Non-Goal`. After items are saved, the section continues to expose that action.
- Creating or editing an item uses a private inline draft. `Done editing` creates a section-content Revision; `Discard` removes only the private draft.
- A saved item exposes direct `Edit Non-Goal` and secondary `Remove Non-Goal`. Removal has local explicit confirmation and creates a section-content Revision. Removing the final item restores the empty guided state.
- A selected required Non-Goals section needs at least one saved item and otherwise participates in ordinary low-priority required-section `What next?` coverage guidance.
- Non-Goals are not Product Artifacts and have no independent lifecycle, relationships, provenance, collaboration or inferred impact propagation. Rich-text formatting is deferred to the separate document-wide capability decision.

## Consequences

The document makes intentional exclusions visible and independently editable while keeping their model proportionate. It preserves the established contextual-action and draft/Revision conventions without implying delivery planning, scope enforcement or cross-artifact semantics.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/index.md`
