# Session — Contribution Response Presentation and Follow-through

**Session ID:** 2026-07-31-03  
**Date:** 2026-07-31  
**Status:** Crystallized

## Context

Contribution Responses can contain multiple discrete items, but their request-detail presentation and manual follow-through needed clarification. The model had to keep a response readable and actionable without turning its Findings, Questions, Suggested Edits or Proposals into tasks, automatic changes or a second workspace.

## Journey Validated

MeatLoop receives a Requirements Quality Review response containing a Summary, an `Ambiguity` Finding, its related Suggested Edit, a `Gap` Finding with a related Proposed Relationship, and a Question.

1. The owner opens request detail. Once the current response content is fully rendered, it automatically becomes `Acknowledged`. Viewing the list row, notification, compact preview or loading state would not have acknowledged it.
2. The detail shows the Summary as a compact overview, then the discrete response items in contributor order. Each has a Response Shape label; Findings also show their Finding Type; related remedies visibly link to their Finding without leaving the response surface.
3. The owner opens the Suggested Edit into the ordinary private edit draft for the target Functional Requirement. The draft is reviewed and saved through normal editing, which creates a Revision; opening it did not apply a change.
4. The owner dismisses the Proposed Relationship as out of scope. It remains visible as dismissed evidence with an optional rationale; it is not deleted and does not reject the reviewer.
5. The owner turns the unresolved Question into an Open Question through the ordinary private draft and save flow.
6. After considering this mix of saved changes, dismissal and unresolved material, the owner explicitly chooses **Act On** for the containing Contribution Response.

## Decision

A submitted Contribution Response appears as one request-detail response surface. An optional Summary is a compact overview; all discrete items remain visible in contributor order with Response Shape labels and, where applicable, Finding Type labels. Related Suggested Edits and Proposals link visibly to the Finding they address but do not become a separate task, proposal workspace or per-item completion flow.

`Acknowledged` is an automatic read marker. A response changes from `Submitted` when its requestor deliberately opens fully rendered response content for the first time: the current response in request detail or a retained response after expanding it. A list row, notification, compact preview or loading state does not qualify. The recipient has no acknowledgement control. Automatic acknowledgement does not update Last updated, reorder the request list or create a lifecycle-history event.

An authorized requestor may explicitly dismiss an individual item as not pursued. Dismissal keeps the item visible as retained evidence with an optional rationale. It does not delete the item, reject the contributor, alter Product Knowledge, create a lifecycle-history event or mark the containing response Acted On.

An authorized requestor may separately open an appropriate ordinary private creation or editing draft from an item. The workbench may prefill the draft with the item and its source context, but it does not create or apply Product Knowledge automatically. Only the ordinary authorized save creates a Revision. The user may explicitly mark the containing response `Acted On` after any mix of consideration, dismissal or separate crystallization; that response-level handling judgment requires neither every item to be dispositioned nor a linked Revision or note.

## Consequences

- The acknowledgement click is removed without treating superficial exposure as a read action or destabilizing list order.
- Responses remain coherent evidence records rather than fragmented work-management objects.
- Explicit judgment is reserved for dismissal, creating/editing a draft, saving Product Knowledge and marking a response Acted On.
- Detailed response-to-Revision provenance remains a separate future topic; this model does not require or infer it.

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

Validate Context Sufficiency patterns across representative review and feedback requests, including when a caveated partial response is useful and when insufficient context should instead produce a Question.
