# Session — Context Assembly Model

**Date:** 2026-07-20

**Session ID:** 2026-07-20-02

**Status:** Crystallized

---

## Context

Follow-up work after clarifying Assistance Request Types, Review as a composite request, Check Types, Finding Types and Contribution Response Shapes.

The objective was to clarify the conceptual model for assembling context when a user requests assistance from a human or AI contributor.

---

## Decision

The MVP should use a first-pass conceptual Context Assembly model.

Context Assembly starts from the requested scope, expands through relationships and supporting knowledge, filters candidate context by request intent and explains what context was used.

Context Assembly should be relationship-aware rather than based only on nearby document text.

---

## Requested Scope

Requested scope may be:

- selected content;
- a Product Artifact;
- a Specification Section;
- a set of Product Artifacts;
- the entire Specification;
- another explicit project scope.

---

## Candidate Context Sources

Candidate Context may include:

- Structural Context implied by the Specification Document Template, document structure, section composition, artifact type expectations or artifact hierarchy;
- Explicit Context from manually created, imported or accepted Artifact Relationships and Context References;
- Inferred Context suggested by analysis, AI assistance or system inference;
- supporting knowledge such as Decisions, Risks, Assumptions, Open Questions, Reviews, Discussions, Provenance and project metadata.

---

## Filtering And Weighting

Candidate Context should be filtered and weighted according to:

- Assistance Request Type;
- requested scope;
- relevant Artifact Relationships;
- expected Response Shape;
- contributor capability or Review Lens;
- contributor permissions and availability;
- known context limits.

For the MVP, Context Relevance may be represented conceptually as:

- primary;
- supporting;
- optional;
- excluded.

---

## Context Sufficiency

The system should assess Context Sufficiency before fulfilling a request.

Possible states:

- sufficient;
- partial;
- insufficient.

Insufficient context should not always block a request.

The system may:

- submit the request normally when context is sufficient;
- submit with a visible warning when context is partial;
- ask a clarifying question when context is insufficient;
- suggest creating or linking missing artifacts;
- allow the user to proceed with limited context when appropriate.

---

## Context Explanation

The system should provide a Context Explanation that identifies what context was included and why.

Example:

"This request used the selected User Story, its parent Feature, related Acceptance Criteria, linked Functional Requirements, unresolved Open Questions and blocking Risks."

---

## Validated Example Patterns

The first-pass model was validated against several concrete assistance request examples.

| Request | Primary Context | Supporting Context | Typical Response Shapes |
|---|---|---|---|
| Improve selected text | selected text, containing artifact or section | product name, product vision, goals, target users, glossary terms | Suggested Edit, Comment |
| Find Gaps on User Story | User Story, parent Feature, existing Acceptance Criteria | related User Needs, Functional Requirements, Non-Functional Requirements, Screen/View or User Flow | Finding, Proposed Artifact, Question |
| Find Inconsistencies on Feature | Feature, directly related Requirements, Decisions, Acceptance Criteria | Goals, Non-Goals, constraints, related sections, Open Questions, Risks | Finding, Question, Proposed Decision, Suggested Edit |
| Validate Readiness on whole Specification | included sections, required artifacts, artifact statuses, Acceptance Criteria, Functional and Non-Functional Requirements, Risks, Open Questions, technical constraints, validation/testing guidance | Goals, Non-Goals, Target Users, Decisions, Assumptions, UX Requirements, data/domain model, implementation guidance, previous Reviews | Readiness Result, Finding, Summary, Proposed Artifact, Question |

Primary Context is the context required to make the central judgment for the selected Assistance Request Type and lens.

Supporting Context explains, constrains or validates that judgment.

The same artifact type may be primary in one request and supporting in another.

For the MVP, the default lens for Validate Readiness should be Implementation Handoff Readiness.

For Find Gaps, missing related artifacts may be useful output rather than a reason to block the request.

For Find Inconsistencies, the request needs comparison targets. If no related context is available, the system may still review internal wording, but the Context Explanation should state that no comparable related context was available.

---

## Future Work

Detailed relevance rules for additional Assistance Request Types remain future validation work.

Future work should validate additional context assembly examples, such as:

- Analyze Impact on a Requirement.
- Prepare Handoff.

---

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ai/ai-orchestration.md`
- `docs/knowledge/architecture/system-architecture.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`
