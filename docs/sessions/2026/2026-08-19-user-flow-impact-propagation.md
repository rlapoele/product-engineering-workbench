# Session — User Flow Impact Propagation

**Session ID:** 2026-08-19-21

**Date:** 2026-08-19

**Status:** Crystallized

## Context

User Flow has explicit primary-profile, Screen / View, Feature, Functional Requirement and Acceptance Criterion context. The model needs deterministic impact rules that distinguish a potentially inaccurate journey from weakened coverage of a still-valid capability.

## Decision

A changed or archived User Flow makes its directly validating Acceptance Criteria Stale and creates coverage/readiness cues on its supported Core Features.

A changed or archived primary User Profile, included Screen / View, supported Core Feature or depended-on Functional Requirement makes the Flow Stale. Changing or archiving a User Flow does not automatically make its included Screen / Views or depended-on Functional Requirements Stale, because those artifacts may remain valid independently or in other journeys.

`relates_to` links to User Stories or Use Cases do not trigger automatic propagation.

## Deferred Detail

UI Requirement propagation remains deferred until that artifact's relationship semantics are decided.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
