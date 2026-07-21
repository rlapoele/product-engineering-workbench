# Session — Open Question Ask Context Assembly and Answer Lifecycle

**Date:** 2026-07-21

**Session ID:** 2026-07-21-08

**Status:** Crystallized

---

## Context

This session explored how a requestor asks for help while working on an Open Question and what happens after a contributor responds.

The objective was to preserve human control: a contributor's answer should be visible and useful without automatically resolving the Open Question or changing the specification.

---

## Decisions

### Answer Response Shape

`Answer` is an initial MVP Response Shape. It is a direct response to a question posed in a Collaboration Request and should identify its known basis, assumptions, limits and unresolved dependencies when relevant.

An Answer remains a Contribution Response in the request conversation. It does not directly alter canonical Product Knowledge, resolve an Open Question, apply an edit or trigger automation.

### Contribution Response Status

Contribution Response Status is separate from Product Artifact lifecycle state and applies to each response individually:

| Status | Meaning |
|---|---|
| Submitted | The contributor has sent the response. |
| Acknowledged | The requestor explicitly indicates that the response has been read. |
| Acted On | The requestor explicitly indicates that they have dealt with the response's content. |

Acknowledged and Acted On are collaboration statuses only. They do not accept, apply, validate or otherwise alter Product Knowledge. Marking a response Acted On neither requires a linked Revision or note nor triggers automation.

If the requestor later updates or creates product knowledge after considering a response, that is a separate manual action and records its own Revision when applicable.

### Ask Question on an Open Question

Ask Question on an Open Question helps the requestor formulate, understand or seek a response to the selected question. It does not turn a contributor response into an automatic decision.

#### Context relevance

| Relevance | Context |
|---|---|
| Primary | selected Open Question; requestor's question or framing prompt; the question's rationale and scope; artifacts it blocks or directly relates to |
| Supporting | related Goals, User Needs, Features, Requirements, Constraints, Decisions, Assumptions, Risks, Open Questions, Discussions and known evidence in the Project State |
| Optional | broader Product Overview, Vision, historical material and external references that explain a relevant trade-off or dependency |
| Excluded | unrelated project areas and historical material with no bearing on the selected question or requestor prompt |

The expected Response Shapes are Answer, Question, Finding, Proposed Decision and Summary.

Context is sufficient when the Open Question is clear and bounded and relevant context is available to reason about it. It is partial when related knowledge or constraints are missing; the contributor may still answer from available context while making limits visible. It is insufficient when the Open Question or requestor prompt is too ambiguous to understand.

The Context Explanation should identify the selected question, linked and blocked artifacts, relevant knowledge used and missing context that limited the response.

---

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/ai/ai-orchestration.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/decisions/ADR-003-asynchronous-transactional-collaboration.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
- `docs/sessions/session-active-work.md`

---

## Recommended Next Step

Validate Context Assembly for another distinct request type, such as `Improve` on a Functional Requirement. Alternatively, define the remaining artifact-type-specific propagation exceptions.
