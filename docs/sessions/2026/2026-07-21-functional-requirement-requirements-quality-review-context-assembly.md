# Session — Functional Requirement Requirements Quality Review Context Assembly

**Date:** 2026-07-21

**Session ID:** 2026-07-21-10

**Status:** Crystallized

---

## Context

This session validated `Review` on a Functional Requirement with the Requirements Quality Lens and clarified its boundary from `Improve`.

---

## Decision

Review Functional Requirement with Requirements Quality Lens is a Requirements Quality Review. It is a structured assessment of specification quality, not an editing request or an implementation-conformance claim.

The default Requirements Quality Lens may combine checks for:

- clarity and ambiguity;
- completeness of actor, trigger, behavior and outcome;
- consistency with linked knowledge;
- testability and Acceptance Criteria coverage;
- traceability;
- dependencies, assumptions and constraints; and
- avoidable unsupported implementation prescription.

The requestor may add a narrower review focus, such as testability or ambiguity.

### Context relevance

| Relevance | Context |
|---|---|
| Primary | selected Functional Requirement; Requirements Quality Lens; stated review focus; directly related Feature or User Need; direct Acceptance Criteria |
| Supporting | User Stories, Use Cases, Screen/Views or User Flows; related Requirements; Non-Functional Requirements; technical constraints; Decisions; integrations; Risks, Assumptions, Open Questions and prior Reviews |
| Optional | broader Goals, Target Users or Personas, data/domain model and historical material that explains a relevant constraint, relationship or quality concern |
| Excluded | unrelated requirements, features, implementation detail and history with no bearing on the selected requirement or requested quality check |

### Response and context sufficiency

The expected Response Shapes are Finding, Question, Suggested Edit, Proposed Artifact, Proposed Relationship and Summary.

Missing Acceptance Criteria or relationships should normally become Findings rather than block the review.

Context is sufficient when the Functional Requirement contains meaningful behavior and enough related knowledge is available for the requested checks. It is partial when alignment, traceability or testability cannot be assessed; the contributor may still assess internal clarity and make the limits visible. It is insufficient when the requirement has too little substantive content to assess.

The review should conclude that requirements-quality coverage appears sufficient for the current scope, that findings were identified, or that quality cannot yet be assessed from the available specification. These conclusions do not edit the requirement or validate its implementation.

---

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/ai/ai-orchestration.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
- `docs/sessions/session-active-work.md`

---

## Recommended Next Step

Validate Context Assembly for `Find Gaps` on Acceptance Criteria, or define the remaining artifact-type-specific propagation exceptions.
