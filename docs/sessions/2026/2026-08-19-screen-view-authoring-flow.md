# Session — Screen / View Authoring Flow

**Session ID:** 2026-08-19-12

**Date:** 2026-08-19

**Status:** Crystallized

## Context

Screen / View is an independent interface-boundary artifact with optional relationships and visual references. Its authoring must support useful standalone interface knowledge while making established relationship context convenient to capture.

## Decision

The UX/UI section presents a Screen / Views block and exposes `Add Screen / View`. A private draft collects the required Title and Purpose plus optional initial fields. No Core Feature, Functional Requirement, User Flow or visual Resource Reference is required to save.

Starting from a Core Feature preselects a `supports` relationship. Starting from a Functional Requirement preselects `depends_on`. A saved Screen / View exposes ordinary edit and locally confirmed archive actions, existing `Add reference`, and target-preselected `Add Acceptance Criterion`.

## Boundary

User Flow inclusion is authored later from the User Flow model. It is not a prerequisite for creating a Screen / View, and the flow introduces no separate UX/UI workspace or artifact type.

## Documents Updated

- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
