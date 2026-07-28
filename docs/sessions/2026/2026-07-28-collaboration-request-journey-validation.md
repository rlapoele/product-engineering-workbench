# Session — Collaboration Request Journey Validation

**Date:** 2026-07-28

**Session ID:** 2026-07-28-06

**Status:** Crystallized

---

## Context

The standalone Collaboration Request model had established recipient, request-brief, lifecycle and AI-interruption rules. Two paired MeatLoop journeys were used to ensure the rules remain coherent for the distinct human and Personal AI Assistant operating paths.

## Human Scenario Validated

Alex requests Maya's Review of MeatLoop's overdue-invoice behavior during a paused subscription. The request moves from Draft to Submitted when Alex sends its scoped Request Brief to Maya. Maya marks it In Progress, keeps a private response draft, then submits one bounded Contribution Response containing Findings and a Suggested Edit. The request becomes Responded.

Alex marks the response Acknowledged, updates the Functional Requirement and Acceptance Criteria through ordinary editing, explicitly saves the changes as Revisions, then marks the response Acted On. The response and its handling never change Product Knowledge directly.

The alternate human outcome is Declined: Maya may explicitly decline without creating a response or changing Product Knowledge. This is a short alternate outcome, not a substitute for the successful-response journey.

## Personal AI Assistant Scenario Validated

Alex creates an equivalent request for Alfred, Alex's enabled Personal AI Assistant. **Submit and ask Alfred** is Alex's explicit invocation. The request records Submitted and becomes In Progress only when Alfred starts processing.

An AI-credit interruption moves the request to the AI-specific On Hold status. The ordinary surface reports only that AI assistance is unavailable. After Alex restores eligibility, the request remains On Hold until Alex explicitly chooses **Resume Alfred**. The new invocation retries or resumes the private response work, then moves through Submitted and In Progress to Responded when Alfred submits one bounded, caveated review response.

## Conclusions

- Both paths retain exactly one recipient and one bounded response per request cycle.
- In Progress indicates actual started work for either recipient type.
- Declined is a human-only alternative; On Hold is an AI-only technical or eligibility interruption state.
- Request statuses and Contribution Response statuses remain distinct.
- Private drafts, provider/model privacy, explicit AI invocation and the non-canonical response boundary remain intact.

## Documents Updated

- `docs/planning/open-questions.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Step

Define the standalone Collaboration Request creation interaction: which document and Project entry points start it, how scope is made explicit, and how the requestor selects the request type, recipient and Request Brief without turning the flow into a modal form or delivery workflow.
