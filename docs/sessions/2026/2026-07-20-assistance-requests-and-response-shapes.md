# Session — Assistance Requests And Response Shapes

**Date:** 2026-07-20

**Session ID:** 2026-07-20-01

**Status:** Crystallized

---

## Context

Follow-up work after clarifying capability-based collaboration, contributor availability and the first MVP Assistance Request Type set.

The objective was to clarify how focused assistance requests relate to broader reviews and what kinds of responses contributors can return.

---

## Decisions

Review is a composite Assistance Request Type.

A Review may include multiple Check Types, such as:

- Gap Check
- Inconsistency Check
- Ambiguity Check
- Testability Check
- Feasibility Check
- Alignment Check
- Risk Check
- Readiness Check

Some focused Assistance Request Types may expose individual checks directly.

Examples:

- Find Gaps may run a Gap Check.
- Find Inconsistencies may run an Inconsistency Check.
- Analyze Impact may run an Impact Analysis.
- Validate Readiness may run a Readiness Check.

This supports both narrow assistance and fuller review activity without overwhelming the user-facing request menu.

---

## Conceptual Hierarchy

The collaboration model should distinguish:

- Assistance Request Type: what the user asks for.
- Review Lens: the perspective or standard used.
- Check Type: the focused activity performed.
- Finding Type: the kind of issue or result produced.
- Response Shape: how the contribution comes back.

Review Lens examples include Requirements Quality, UX Quality, Accessibility, Security, Testability and Implementation Readiness.

Finding Type examples include Gap, Inconsistency, Ambiguity, Risk, Blocker, Dependency, Recommendation and Readiness Warning.

---

## Contribution Response Shapes

Initial MVP Response Shapes are:

| Response Shape | Meaning | Typical Requestor Action |
|---|---|---|
| Comment | General note, observation or reaction. | Resolve, reply, ignore or convert into another action. |
| Question | Clarification requested from the requestor. | Answer, discuss or convert to an Open Question. |
| Finding | Structured issue, observation or result from a review or check. | Accept, dismiss, create a follow-up artifact or request changes. |
| Suggested Edit | Proposed change to existing content. | Accept, reject or modify before accepting. |
| Proposed Artifact | Suggested new Product Artifact. | Accept, reject or edit before accepting. |
| Proposed Relationship | Suggested relationship between Product Artifacts. | Accept, reject or adjust. |
| Proposed Decision | Suggested decision, option or recommendation. | Accept as Decision, reject or discuss further. |
| Readiness Result | Assessment of readiness, blockers, warnings and next actions. | Accept, act on blockers, defer or export with warnings. |
| Summary | Condensed explanation of content, context or results. | Use as reference or insert into project knowledge if accepted. |
| Handoff Material | Generated or refined implementation handoff content. | Accept into the export package, edit or reject. |

Response Shapes should help the user interface decide which actions are available to the requestor.

---

## Review Orchestration

Review may eventually run checks in sequence or in parallel.

Some checks may be independent. Others may depend on earlier findings.

For example, a readiness judgment may depend on gaps, inconsistencies, blockers, unresolved open questions and risks.

AI Review orchestration may eventually use one AI Contributor or multiple AI agents, but the MVP should not require multi-agent orchestration.

---

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/knowledge/ai/ai-orchestration.md`
- `docs/knowledge/decisions/ADR-003-asynchronous-transactional-collaboration.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

---

## Recommended Next Step

Continue with concrete examples of Contribution Responses for one or two common flows, such as:

- Request Feedback on a Product Overview.
- Review for Implementation Readiness on the entire specification.
- Find Gaps on Acceptance Criteria.
