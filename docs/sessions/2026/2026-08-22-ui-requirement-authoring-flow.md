# Session — UI Requirement Authoring Flow

**Session ID:** 2026-08-22-01

**Date:** 2026-08-22

**Status:** Crystallized

## Context

UI Requirement requires direct document-first authoring from the UX/UI section or a relevant Screen / View or User Flow. Its primary target must remain deliberate, while optional shared scope and absent target prerequisites should not force a separate workflow or an unnecessary save-and-edit cycle.

## Decision

The UX/UI section presents a fixed UI Requirements block with `Add UI Requirement`. Its private draft requires Title, a deliberately selected primary Screen / View or User Flow target, and Requirement statement. An optional `Also applies to` control allows additional targets in the same draft without making them a prerequisite for saving.

Starting from a Screen / View or User Flow visibly preselects it as the changeable primary target. If the required target is absent, the workbench preserves the UI Requirement draft while the author explicitly creates the needed Screen / View or User Flow, then resumes with it selected.

A saved UI Requirement exposes ordinary edit, locally confirmed archive, existing `Add reference`, and `Add Acceptance Criterion` with the UI Requirement preselected as the primary validation target.

## Primary-Target Reassignment

Promoting an already additional target to primary retains the former primary as an additional target because the applies-to scope is unchanged.

Selecting a wholly new primary target requires the author to choose whether to retain the former primary as an additional target or remove it. The workbench does not silently change applies-to scope.

## Boundary

This authoring flow does not introduce a separate UX/UI workspace, infer targets from wording, make optional targets mandatory, or define UI Requirement readable references or impact-propagation rules.

## Documents Updated

- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
