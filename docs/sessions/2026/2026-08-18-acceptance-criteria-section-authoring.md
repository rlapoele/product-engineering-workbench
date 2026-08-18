# Session — Acceptance Criteria Section Authoring

**Session ID:** 2026-08-18-09

**Date:** 2026-08-18

**Status:** Crystallized

## Context

Acceptance Criteria are commonly authored beneath User Stories, but the specification needs them to remain reusable validation evidence for Use Cases, Requirements, UX artifacts and early Core Features as well.

## Decision

- `Acceptance Criteria` contains independent Acceptance Criterion Product Artifacts. The canonical section renders each criterion once; linked artifacts render contextual projections of that same criterion rather than copies.
- Each criterion has one required Primary validation target and optional additional explicit targets. Core Features, User Stories, Use Cases, Functional Requirements, Screen/Views, User Flows and UI Requirements are eligible.
- Core Feature is an eligible early primary target, allowing acceptance evidence before a Story, Use Case or Requirement exists. This prevents the required Acceptance Criteria section from becoming a dead end in early authoring.
- A criterion uses either Direct form with a required observable Pass condition, or Scenario form with required Given, When and Then fields. `Then` is the Scenario pass condition. Direct criteria use their pass condition as their readable heading and need no duplicate title.
- The canonical section's `Add Acceptance Criterion` selects form and target(s). The same action from a target artifact preselects that target as primary. If no target exists, the flow offers `Add Core Feature` or cancel, preserving and resuming the private criterion draft through contextual related-knowledge creation.
- Criteria follow ordinary Product Artifact drafts, Revisions, lifecycle and explicit relationship-based impact behavior. The forms are controlled structured fields, not general rich text.
- Acceptance Criteria is required in every initial preset; empty required coverage follows ordinary low-priority `What next?` guidance.

## Consequences

Authors get the familiar story-local authoring experience while the canonical model keeps acceptance evidence independently revisable and explicitly traceable across behavior, requirements and UX knowledge. Scenario syntax is available where useful without forcing it on non-scenario criteria.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/index.md`
