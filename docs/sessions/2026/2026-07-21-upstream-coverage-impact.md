# Session — Upstream Coverage Impact

**Date:** 2026-07-21

**Session ID:** 2026-07-21-01

**Status:** Crystallized

---

## Context

Follow-up work after validating concrete propagation scenarios.

The objective was to clarify what happens when a lower-level artifact, such as a User Story, is modified or archived and upstream artifacts such as Features, User Needs or Goals may be affected.

---

## Decision

Child artifact changes or archival may create upstream coverage impact.

This is different from ordinary downstream Stale propagation.

When a User Story is modified, downstream artifacts that validate, depend on or derive from that story may become Stale.

Examples include:

- Acceptance Criteria;
- related Functional Requirements;
- related UI Requirements;
- related Screen/Views or User Flows;
- implementation guidance or validation guidance that depends on the story.

The parent Feature should be marked Stale only when the Feature content aggregates, summarizes or depends on the changed User Story.

Upstream User Needs and Goals should usually not be marked Stale merely because a User Story changed.

They may instead receive coverage/readiness warnings if the change weakens behavioral coverage.

---

## Archival Or Deletion

When a User Story is archived, removed from active scope or effectively deleted:

- dependent or derived downstream artifacts may become Stale or orphaned;
- the parent Feature may receive a coverage/readiness warning;
- upstream User Needs or Goals may receive coverage/readiness warnings if the removed story materially contributed to satisfying them;
- upstream artifacts should not automatically be marked Stale unless their own content depends on the removed story.

This preserves the distinction between:

- "this artifact may no longer be accurate";
- "this artifact may now be under-covered or under-specified."

---

## Consequences

Propagation logic should support both downstream accuracy impact and upstream coverage impact.

Stale remains the right lifecycle state when an artifact may no longer be accurate.

Coverage/readiness warnings are more appropriate when an artifact remains accurate but may now lack enough supporting behavior, validation or specification detail.

The system should explain the reason for the warning or Stale marking, including the triggering artifact and relationship path when available.

---

## Documents Updated

- `docs/knowledge/data-model/project-model.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
- `docs/sessions/session-active-work.md`

---

## Recommended Next Step

Validate propagation edge cases such as relationship cycles, multi-hop propagation and conflicting relationship paths.
