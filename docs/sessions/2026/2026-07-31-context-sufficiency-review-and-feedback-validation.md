# Session — Context Sufficiency Review and Feedback Validation

**Session ID:** 2026-07-31-04  
**Date:** 2026-07-31  
**Status:** Crystallized

## Context

The workbench already distinguished sufficient, partial and insufficient context, but the threshold for proceeding with a useful limited response was not consistently defined across Review and Request Feedback. The model needed to preserve visible limits without treating Context Sufficiency as structural compatibility, recipient fit or routing.

## Exercises

### Sufficient Requirements Quality Review

MeatLoop's Functional Requirement defines an actor, trigger, behavior and outcome. It has a linked Feature and Acceptance Criteria. The requestor asks for a Requirements Quality Review focused on clarity, testability and traceability.

The context is sufficient: the reviewer can assess every requested dimension and return the ordinary lens-qualified conclusion, Findings or proposed remedies as appropriate.

### Partial Security Review

MeatLoop's payment integration behavior defines an external-system purpose, control flow and callback boundary, but the provider contract and authentication details are unavailable.

The context is partial: the Security Review proceeds because the documented boundary supports a useful bounded assessment. It identifies only grounded boundary concerns and explicitly states that authentication and verification coverage cannot be assessed from the available knowledge. It does not claim that the integration is secure or insecure.

### Partial Request Feedback

MeatLoop's Product Overview states a product problem and value proposition but lacks target-user and Scope anchors.

The context is partial: Request Feedback proceeds with comments on the stated value proposition and targeted Questions about the missing strategic anchors. Its Context Explanation limits strategic feedback; it does not become a structured Review.

### Insufficient Request Feedback

MeatLoop's Product Overview contains only the product name and has no stated feedback focus.

The context is insufficient: the request remains explicitly submittable with a visible warning, but the contributor returns Questions about product intent, audience and problem plus a Summary of the missing basis. It returns no generic Comment, Suggested Edit, Proposal, Finding or positive conclusion.

## Decision

Context Sufficiency is assessed for the specific Assistance Request Type, Review Lens and stated focus. It is not a general quality score for the selected scope, and the same Product Artifact may receive different sufficiency results for different requests.

Context is sufficient when relevant evidence supports all requested checks or the stated feedback focus. It is partial when substantive selected content supports at least one useful bounded contribution but required context for some requested dimensions is absent. It is insufficient when no substantive basis exists for even a bounded contribution to that request.

Structural compatibility, recipient fit and routing are separate from Context Sufficiency. Partial or insufficient context never silently changes a selected Review Lens, scope or recipient. Both states remain explicitly submittable with a visible Context Explanation. A partial response provides grounded local observations and clear limits. An insufficient response provides Questions and missing-basis explanation only; it must not invent Findings, edits, proposals or a positive quality conclusion. The workbench may suggest creating or linking missing knowledge but does not create it automatically.

## Consequences

- Useful limited work proceeds without hiding what could not be assessed.
- Insufficient context requests information rather than producing authoritative-sounding generic output.
- Review and Request Feedback use the same state semantics while retaining their distinct response boundaries.
- Context Sufficiency remains separate from scope eligibility, capability and deterministic readiness.

## Documentation Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/ai/ai-orchestration.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/decisions/ADR-003-asynchronous-transactional-collaboration.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Topic

Validate Context Relevance patterns across representative assistance requests, including which connected knowledge should remain excluded when it does not support the requested contribution.
