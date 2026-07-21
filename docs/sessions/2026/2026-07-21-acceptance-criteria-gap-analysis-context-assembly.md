# Session — Acceptance Criteria Gap Analysis Context Assembly

**Date:** 2026-07-21

**Session ID:** 2026-07-21-11

**Status:** Crystallized

---

## Context

This session validated `Find Gaps` on Acceptance Criteria and distinguished it from a Requirements Quality Review on a Functional Requirement.

---

## Decision

Find Gaps on Acceptance Criteria asks: “Given the intended behavior this criterion is meant to validate, what necessary acceptance evidence is missing or under-specified?” It may apply to one selected criterion, a selected set or an entire Acceptance Criteria section.

It is a coverage and verifiability check. It is not test execution, an implementation-conformance certification or a Functional Requirement quality review.

### Context relevance

| Relevance | Context |
|---|---|
| Primary | selected Acceptance Criterion or Criteria; the artifact or behavior each validates; sibling Acceptance Criteria that validate the same behavior |
| Supporting | related Functional Requirements, User Stories, Use Cases, Features, User Needs, Screen/Views or User Flows; Non-Functional Requirements; Decisions, constraints, integrations, Risks, Assumptions and Open Questions |
| Optional | broader Goals, Target Users or Personas, data/domain model and historical material that directly explains a relevant behavior or coverage concern |
| Excluded | unrelated behavior, generic testing checklists, implementation detail and history with no bearing on the selected criteria or their validated behavior |

Sibling criteria are primary comparison context even when one criterion is selected. This prevents the contributor from proposing duplicate coverage.

### Grounded gaps and response

The contributor should return only gaps grounded in available product knowledge. It may identify:

- a missing trigger, precondition, actor or observable outcome;
- known behavior that no criterion covers;
- an untestable criterion; or
- a missing validation relationship.

It may identify missing error, boundary, alternate-state, permission or transition coverage only when the specification establishes that behavior as relevant. It must not manufacture generic edge cases merely because they are customary.

Expected Response Shapes are Finding, Question, Suggested Edit, Proposed Artifact, Proposed Relationship and Summary. A small addition to an existing criterion may be a Suggested Edit; a new Acceptance Criterion or traceability link is a non-canonical proposal. No response updates canonical Product Knowledge automatically.

### Context sufficiency

Context is sufficient when the selected criteria, their validated behavior and enough known behavior are available to assess coverage. It is partial when the contributor can assess local clarity but cannot fully assess coverage; the Context Explanation must make that limit visible. It is insufficient when the selected criteria have too little substantive content and no target behavior or source context is available.

Missing validation relationships should normally become Findings rather than block the request. The conclusion should state that acceptance coverage appears sufficient for the current scope, that gaps were found, or that coverage cannot yet be assessed from the available specification. It does not execute tests or certify implementation conformance.

---

## Documents Updated

- `docs/knowledge/ai/ai-orchestration.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
- `docs/sessions/session-active-work.md`

---

## Recommended Next Step

Validate Context Assembly for another focused `Find Gaps` scope or continue with the next unvalidated Assistance Request Type.
