# Session — Context Relevance Inclusion Validation

**Session ID:** 2026-07-31-06  
**Date:** 2026-07-31  
**Status:** Crystallized

## Context

Context Assembly already classified candidate material as Primary, Supporting, Optional or Excluded, but it did not define which categories enter an ordinary request or how a related item should be excluded without losing grounded reasoning.

## Exercises

### Improve a Functional Requirement

MeatLoop's cancellation-notification Functional Requirement is selected for a clarity improvement. The selected Requirement, its direct Acceptance Criteria and necessary glossary terms are Primary or Supporting. Unrelated Screens/Views, broad implementation guidance and prior Reviews are excluded because they do not help preserve or clarify the established behavior.

### Security Review of a Payment Callback

The selected callback behavior, available provider contract, authentication and verification expectations, plus direct constraints and Risks are Primary or Supporting. Unrelated UX flows, generic historical feedback and unrelated Features are excluded. If the provider contract is unavailable, it remains a visible context limit rather than silently omitted material or invented evidence.

### Request Feedback on a Product Overview

The overview, stated feedback focus, Problem or Opportunity, Target Users, Goals, Scope and Non-Goals are Primary or Supporting when available. Detailed Requirements, Screens/Views and handoff material are excluded unless the feedback prompt specifically concerns them. Missing strategic anchors make feedback partial or insufficient according to the existing Context Sufficiency rules.

## Decision

Context Relevance is a request-specific inclusion decision, not a score, graph-distance rule or instruction to include every structurally nearby or related item. Primary context is required to make the requested contribution. Supporting context directly explains, constrains, validates or could materially change it. Optional context may add detail but is not needed for a grounded response. Excluded context does not support the stated contribution even if it is nearby or connected.

Only Primary and Supporting context enter ordinary Context Assembly by default. Optional material enters only when the Request Brief explicitly calls for it or a contributor deliberately expands it with visible explanation. Current active Product Knowledge is preferred; Stale knowledge remains visibly caveated, while archived material is excluded unless historical comparison or impact reasoning specifically needs it. Directly related contradictory or constraining evidence is Supporting rather than omitted for convenience. Inferred context may guide inspection but cannot satisfy missing Primary context or silently become evidence.

Prior Conversations, Reviews and Contribution Responses are Supporting only when the request seeks comparison, follow-through or earlier reasoning. A Resource Reference enters only when its target-local purpose supports the request; unavailable relevant material is a stated context limit. The Context Explanation identifies included Primary and Supporting context, expanded Optional material and material exclusions or missing anchors, without inventorying every excluded candidate.

## Consequences

- Assistance stays focused without treating relationship proximity as relevance.
- Relevant constraints and contradictory evidence remain visible rather than being filtered out for convenience.
- Optional history and resources do not inflate ordinary request context.
- Context Sufficiency can distinguish genuinely missing necessary anchors from deliberately excluded noise.

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

Validate the authority boundary for creating and revising canonical Product Knowledge, including whether and when a Project Collaborator may save a Revision or add a Response Source Link.
