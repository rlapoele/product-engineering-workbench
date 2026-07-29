# Session — Collaboration Request Decline and Reassignment Journey

**Session ID:** 2026-07-29-08  
**Date:** 2026-07-29  
**Status:** Crystallized

## Context

Current-cycle actions permit a Project Owner to reopen a Declined human Collaboration Request, revise its Request Brief and choose a different eligible human recipient before explicit resubmission. This session validates the full journey and the privacy and list boundaries it requires.

## Journey Validated

1. Alex sends a human review request to Maya.
2. Maya starts a private response draft, then Declines. The private draft is discarded.
3. Alex sees the request as Declined. Maya retains the frozen, read-only declined cycle.
4. Alex reopens the request. Its Assistance Request Type, scope and recorded context remain fixed; Alex may revise the Brief and choose another eligible recipient.
5. Alex selects Jordan, then discards the reopened Draft. The request immediately returns to Maya's preceding Declined cycle, and Jordan sees no request or tentative assignment.
6. Alex reopens again, selects Jordan and explicitly resubmits.
7. Jordan sees only the new Submitted cycle. Jordan cannot see Maya, Maya's decline or retained prior-cycle history.
8. Maya continues to see her frozen cycle in **Requests for you** as `Request: Declined`. Her displayed Last updated value remains her decline event; reassignment, resubmission and Jordan's later activity neither appear in nor reorder that record.
9. Cancellation remains the terminal alternative: it cannot be reopened, and a renewed need creates a new request.

## Conclusions

- A former human recipient is not silently removed from **Requests for you** when a previously Declined request is reassigned.
- The former-recipient record represents only the immutable cycle in which that collaborator participated; it is not a window into the request's new current cycle.
- The role-aware list boundary therefore includes both a collaborator's current human-recipient requests and their frozen Declined cycles after reassignment.
- Request status and Last updated are viewer-visible properties. On the former recipient's retained record, they remain `Declined` and the decline event respectively.

## Documentation Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/knowledge/decisions/ADR-003-asynchronous-transactional-collaboration.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Topic

Validate the end-to-end AI request-detail journey through Submitted, In Progress, On Hold, restored eligibility, explicit Resume, response handling and cancellation.
