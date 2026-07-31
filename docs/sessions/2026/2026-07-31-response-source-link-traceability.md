# Session — Response Source Link Traceability

**Session ID:** 2026-07-31-05  
**Date:** 2026-07-31  
**Status:** Crystallized

## Context

The workbench already kept Contribution Responses non-canonical and required ordinary human creation or editing saves for Product Knowledge changes. Detailed response-to-revision traceability risked adding item disposition, acceptance and authorship machinery disproportionate to its value.

## Exercise

MeatLoop receives a Requirements Quality Review containing an Ambiguity Finding and a related Suggested Edit. The authorized requestor opens the ordinary private edit draft, changes the Functional Requirement further and saves it.

At save, the human may explicitly link the whole Contribution Response to the resulting Revision. The Revision then navigates to the retained response and Request Cycle evidence. The Finding and Suggested Edit remain non-canonical response content: neither is individually accepted, applied or dispositioned by the link. The requestor may later mark the response Acted On, or leave it unmarked, without changing the link.

## Decision

The MVP uses one optional **Response Source Link** rather than a broader response-to-revision traceability system. Only when an authorized human saves Product Knowledge through the ordinary flow may they explicitly link one whole Contribution Response as informing the resulting Revision.

The link records the immutable response and Request Cycle, target Revision and Product Knowledge, the human who created it and the time. It is visible as retained response-to-Revision navigation and known provenance. It does not copy response content, select individual response items, record a rationale, create a separate response-to-Provenance flow or add a completion/disposition workflow.

The link is never inferred. Opening a response, opening a private draft, automatic acknowledgement, dismissing an item and marking a response Acted On do not create one. Its presence means only that the response informed the human-authorized saved change; it never implies acceptance, agreement, correctness, adoption of every item, exact word-level origin, sole causation or exclusive human authorship. Its absence does not imply that the response was ignored.

## Consequences

- Revision history can provide useful, bounded navigation back to the response evidence that informed a known change.
- The product avoids a separate acceptance, provenance, item-tracking or authorship subsystem.
- Known AI activity can expose the explicit Revision link where applicable without exposing raw response content or claiming exact attribution.
- More granular sources, multiple response sources, item-level citations and reasons are deferred until demonstrated by use.

## Documentation Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/ai/ai-orchestration.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/decisions/ADR-003-asynchronous-transactional-collaboration.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Topic

Validate Context Relevance patterns across representative assistance requests, including which connected knowledge should remain excluded when it does not support the requested contribution.
