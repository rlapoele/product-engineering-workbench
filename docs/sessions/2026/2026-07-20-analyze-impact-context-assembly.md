# Session — Analyze Impact Context Assembly

**Date:** 2026-07-20

**Session ID:** 2026-07-20-04

**Status:** Crystallized

---

## Context

Follow-up work after clarifying the first-pass Context Assembly model and AI assistance visibility and governance.

The objective was to validate Context Assembly for the Assistance Request Type `Analyze Impact` when scoped to a Requirement.

---

## Decision

Analyze Impact on a Requirement should inspect both upstream and downstream context.

Upstream context explains why the Requirement exists.

Examples include:

- Goals;
- User Needs;
- parent Features;
- Decisions;
- Assumptions;
- constraints.

Downstream context identifies what the Requirement affects.

Examples include:

- Acceptance Criteria;
- Functional Requirements;
- Non-Functional Requirements;
- UI Requirements;
- Screen/Views;
- User Flows;
- Risks;
- Open Questions;
- external integrations;
- implementation guidance;
- validation/testing guidance.

---

## Validated Pattern

| Request | Primary Context | Supporting Context | Typical Response Shapes |
|---|---|---|---|
| Analyze Impact on Requirement | selected Requirement, directly related artifacts, parent Feature, affected Acceptance Criteria, affected Screen/View or User Flow, dependencies and known constraints | Goals, User Needs, Non-Goals, Decisions, Risks, Open Questions, data/domain model, external integrations, implementation guidance, previous Reviews | Summary, Finding, Proposed Relationship, Proposed Artifact, Proposed Decision, Question |

Impact analysis may identify affected artifacts, dependencies, possible conflicts, implementation risks, testing implications and missing relationships.

If a Requirement has few or no relationships, the request may still proceed with limited context, but the Context Explanation should make that limitation visible.

Missing relationships may become Findings or Proposed Relationships.

---

## Documents Updated

- `docs/knowledge/ai/ai-orchestration.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/2026/2026-07-20-context-assembly-model.md`
- `docs/sessions/index.md`

---

## Recommended Next Step

Continue validating additional Context Assembly examples, such as:

- Prepare Handoff.
- Request Feedback on Product Overview.
- Review UX Requirement with Accessibility Lens.
