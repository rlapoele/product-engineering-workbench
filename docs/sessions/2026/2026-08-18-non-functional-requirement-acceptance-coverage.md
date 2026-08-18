# Session — Non-Functional Requirement Acceptance Coverage

**Session ID:** 2026-08-18-21

**Date:** 2026-08-18

**Status:** Crystallized

## Context

Measurable quality expectations need explicit validation coverage, but the workbench already has one reusable Acceptance Criteria model and should not create a parallel NFR-specific validation artifact.

## Decision

- Non-Functional Requirements are eligible Acceptance Criterion validation targets.
- An NFR may be initially saved without Acceptance Criteria; missing coverage remains a visible cue rather than a save blocker.
- `Add Acceptance Criterion` from a Non-Functional Requirement opens ordinary criterion authoring with that NFR preselected as primary.
- One criterion may validate an NFR and one or more related Functional Requirements only when its observable evidence genuinely covers every linked requirement.

## Consequences

Quality expectations are validated through the same explicit, reusable evidence model as product behavior. This keeps direct and scenario criteria consistent across requirements while preventing a shared link from asserting coverage it cannot demonstrate.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/index.md`
