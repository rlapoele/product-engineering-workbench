# Session — User Flow Authoring Flow

**Session ID:** 2026-08-19-19

**Date:** 2026-08-19

**Status:** Crystallized

## Context

User Flow requires a primary User Profile and at least one Screen / View-linked Journey step, yet authors should be able to begin from the journey knowledge they have and create a missing prerequisite without losing work.

## Decision

The UX/UI section presents a User Flows block and exposes `Add User Flow`. Its private draft collects required Title, primary User Profile, Entry context, Intended outcome and ordered Journey steps, plus optional Intentional exits and Error recovery paths. At least one Journey step with a selected Screen / View is required to save.

When the primary User Profile or a needed Screen / View does not exist, the workbench preserves the draft while the author explicitly creates that knowledge, then resumes with it selected. Journey steps may be added, edited, removed and reordered; their order controls `includes` relationship sequence metadata.

Starting from a Screen / View preselects the first Journey step Surface. Starting from a Core Feature or Functional Requirement preselects optional `supports` or `depends_on` relationships. A saved User Flow exposes ordinary edit and locally confirmed archive actions plus target-preselected `Add Acceptance Criterion`.

## Documents Updated

- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
