# Session — Accessibility Specification Review Context Assembly

**Date:** 2026-07-21

**Session ID:** 2026-07-21-04

**Status:** Crystallized

---

## Context

Follow-up work after clarifying application-specific UX/UI design guidance and validating Prepare Handoff Context Assembly.

The objective was to validate Context Assembly for Review UI Requirement with Accessibility Lens and define what an accessibility review can honestly assess before a product is implemented.

---

## Decision

Review UI Requirement with Accessibility Lens is an Accessibility Specification Review.

It assesses whether product knowledge defines accessible outcomes, risks and verification needs clearly enough to guide implementation and later accessibility evaluation. It does not certify that a future or existing implementation conforms to an accessibility standard.

### Context relevance

| Relevance | Context |
|---|---|
| Primary | selected UI Requirement; related Screen/View and User Flow; interaction and state behavior; linked Functional Requirements and Acceptance Criteria; applicable UX/UI design guidance; explicit accessibility expectations; declared accessibility target when present |
| Supporting | related User Story and User Need; external design references; Decisions; Risks; Assumptions; Open Questions; related UI Requirements; technical constraints; prior UX or accessibility Reviews |
| Optional | broader Goals, personas, brand guidance and standard references beyond those relevant to the selected interaction |
| Excluded | unrelated screens, flows, features and historical material with no bearing on the interaction |

### Review behavior

The Review may combine gap, ambiguity, inconsistency, testability and risk checks. Depending on the interaction, it should assess specification evidence for:

- keyboard and focus behavior;
- assistive-technology expectations for names, roles, states or status changes;
- labels, instructions and feedback;
- error and state handling;
- non-color cues and contrast where visual values are specified;
- responsive or reflow behavior;
- dynamic-content or media implications.

The expected Response Shapes are Finding, Suggested Edit, Question, Proposed Artifact and Summary.

### Standards and conclusions

The default Accessibility Lens is standards-informed but does not claim conformance. When the project explicitly declares an accessibility target, such as WCAG 2.2 AA, it becomes primary review context and findings may identify relevant criteria or missing specification evidence.

Without a declared target, the Context Explanation should state that the review applied general accessibility principles and cannot certify conformance.

The Review should conclude one of:

- accessibility specification coverage appears sufficient;
- accessibility specification gaps or risks found;
- accessibility cannot yet be assessed from the available specification.

These conclusions describe specification readiness. Accessibility conformance requires evidence from the implemented interface and its complete applicable scope; comprehensive evaluation also requires knowledgeable human assessment. See the [W3C introduction to web accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/) and [WCAG 2 overview](https://www.w3.org/WAI/standards-guidelines/wcag/).

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

Validate Context Assembly for Request Feedback on Product Overview, or define remaining artifact-type-specific propagation exceptions.
