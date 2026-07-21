# Session — Propagation Edge Cases and Revalidation

**Date:** 2026-07-21

**Session ID:** 2026-07-21-02

**Status:** Crystallized

---

## Context

Follow-up work after validating concrete artifact-change scenarios and upstream coverage impact.

The objective was to define how deterministic artifact change impact propagation handles multi-hop paths, cycles, overlapping paths, archived artifacts, weak associations and revalidation after review.

---

## Decisions

### Multi-hop propagation

Propagation follows relationship-specific semantics at every hop. An intermediate artifact becoming Stale does not itself create a generic new propagation rule.

For the ordinary Requirement -> Acceptance Criteria -> parent User Story path:

- the changed Requirement may make related Acceptance Criteria Stale;
- the parent User Story should ordinarily receive a coverage/readiness warning, because its validation coverage may need review;
- the User Story should become Stale only when a separate path indicates that its own content depends on, derives from or aggregates the changed knowledge.

### Reachability and distance

Propagation has no arbitrary depth limit. It follows every active, semantically eligible relationship path reachable from the triggering Revision.

Path length may inform review priority or confidence. More distant artifacts will usually receive lower review priority, but distance does not override the semantic result. A multi-hop path composed of strong propagation relationships may still result in Stale status.

### Cycles and overlapping paths

For one triggering Revision, the system should resolve one relationship-specific impact outcome per active artifact and prevent cyclic re-propagation.

The system should retain distinct non-cyclic causal paths that explain an outcome. When several paths reach the same artifact, Stale takes precedence over a coverage/readiness warning, while the user can still inspect all recorded paths.

### Archived artifacts and weak associations

Archived artifacts remain available for history and traceability, but are ignored as active propagation targets and traversal intermediaries. The archival event itself may still be the change that triggers propagation.

`relates_to` remains useful for navigation, human review and AI context assembly. It must not create an automatic impact result or serve as a bridge to further deterministic propagation.

### Revalidation

When a user reviews a Stale artifact and confirms it is valid, the system should clear Stale only on that artifact.

It must not automatically clear related artifacts or their impact results. The system may instead suggest review or revalidation of active artifacts whose recorded impact paths pass through the newly validated artifact.

This suggestion is a contextual action, not an automatic state transition. Validating one artifact does not prove that every related artifact remains valid.

---

## Result

The deterministic propagation model now defines its traversal boundaries and review behavior clearly enough to guide later implementation design:

- relationship meaning determines the impact result;
- reachability governs scope;
- archived and weakly associated artifacts do not expand automatic impact;
- cycles terminate safely without hiding causal evidence;
- Stale remains meaningful and is never cleared by implication.

---

## Documents Updated

- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/architecture/system-architecture.md`
- `docs/glossary/glossary.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

---

## Recommended Next Step

Either define artifact-type-specific propagation exceptions, or return to the remaining Context Assembly examples: Prepare Handoff, Request Feedback on Product Overview, and Review UX Requirement with Accessibility Lens.
