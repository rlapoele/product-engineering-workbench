# Session — Goal Success Criteria Document Authoring

**Session ID:** 2026-08-17-01

**Date:** 2026-08-17

**Status:** Crystallized

## Context

The completed first technical slice proves authenticated Project creation and one saved Goal, but it does not determine the broader document-first authoring experience. This session validated the next small authoring model in the existing `Goals and Success Criteria` section without authorizing implementation.

## Decision

- A newly created Specification is a prepared document template: its selected section headings and concise guidance are visible in document order before user-authored knowledge exists.
- On desktop, hover and keyboard focus reveal a local contextual control. A scope with one valid action names it directly; an empty `Goals and Success Criteria` section therefore offers `Add Goal`. A scope with several actions uses `Actions` to progressively reveal named controls. Touch has an equivalent local action surface.
- The section has no section-level introductory prose. It continues to offer `Add Goal` after Goals exist. A Goal exposes `Edit Goal`, secondary `More actions` including locally confirmed `Archive Goal`, and a separate child-area `Add Success Criterion` action. Archiving removes the Goal and its owned criteria from active document work without a content Revision; an archived/history view offers `Restore Goal`, which restores the complete set together.
- A **Goal Success Criterion** is a Goal-owned structured child, not a Product Artifact and not an Acceptance Criterion. It requires one plain-language measurable statement and may add Measure, Target and Timeframe qualifiers. It cannot exist without one Goal and has no independent lifecycle, relationships, provenance, collaboration or Revision history.
- Active Goals render as an ordered document sequence, with derived Goal numbering and an automatically numbered Success Criterion list under each Goal. The numbers are presentation only; stable identities remain internal. New Goals append to the section, while `Move Goal up` and `Move Goal down` create a document-composition Revision without changing Goal meaning, criteria or review state.
- Creating, editing or removing a saved Goal Success Criterion changes the complete Revision of its parent Goal. A private child draft persists until `Done editing` or `Discard`; `Done editing` creates the parent Goal Revision. Saved criteria use `Edit Success Criterion` and secondary `Remove Success Criterion`; they are not independently archived.
- Saving a Goal with existing criteria requires the owner to choose `Wording only` or `Goal meaning changed`, with neither preselected. The latter creates a local review state for each existing criterion. The owner must confirm it still fits, edit it or remove it. This is not global Artifact Lifecycle Stale state.
- `What next?` remains optional and user-invoked. It presents one parent-level item for Goal Success Criteria needing review, then Goals without any Goal Success Criteria, before empty required sections. It never blocks authoring or creates work automatically.

## Consequences

The document can feel like a familiar editable template while preserving scope-aware controls, private drafts and explicit canonical save boundaries. The model avoids automatic semantic inference and keeps the owner responsible for judging whether a Goal's meaning changed.

The decisions add no implementation authorization. Generalized persistence, later Product Artifact authoring, impact-propagation mechanics, handoff rules and visual design remain future work.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/index.md`
