# Session — Collaboration Request Lifecycle

**Date:** 2026-07-28

**Session ID:** 2026-07-28-04

**Status:** Crystallized

---

## Context

After establishing that a standalone Collaboration Request has one recipient, the product needed a lifecycle that makes a bounded asynchronous response visible without turning the request into a delivery task. The request also needed a user-authored field that states the specific ask beyond its Assistance Request Type, scope and recipient.

## Decision

Every Collaboration Request has a required **Request Brief**. The brief is the requestor-authored framing of the specific help, question or desired outcome. The Assistance Request Type identifies the kind of help sought; the brief identifies what the selected contributor should address within the request's scope.

The MVP request lifecycle is:

```text
Draft → Submitted → In Progress → Responded
                  ├→ Declined
                  └→ Cancelled
```

Draft is private to the requestor. Explicit submission makes the request Submitted and available to its selected recipient. The recipient may mark it In Progress while preparing a private response draft, then submit one bounded Contribution Response to make the request Responded. The recipient may instead Decline. The requestor may Cancel a Submitted or In Progress request. There is no request-acceptance state, automatic expiry or delivery-management state.

After Responded, Declined or Cancelled, the requestor may use **Reopen request**. Reopen is an action and history event, not a status. It returns the request to private Draft. Its recipient, Assistance Request Type, scope and recorded context remain read-only; only the Request Brief may be revised. Explicit resubmission returns the request to Submitted for the same recipient, retaining prior lifecycle and response evidence.

The requestor remains the request owner. The recipient has active response responsibility while the request is Submitted or In Progress. Request-status labels and Contribution Response-status labels are shown with their object context so their separate `Submitted` states are not confused.

## Consequences

- A recipient can visibly begin substantial work and preserve a private response draft without accepting a delivery assignment.
- Alex cannot silently alter Maya's recipient, request type, scope or recorded context after first submission.
- Earlier responses remain evidence when Alex reopens and resubmits a request with a refined brief.
- No lifecycle change creates Product Knowledge; a response remains non-canonical until a separate reviewed and saved action creates a Revision.
- Detailed Personal AI Assistant interruption and resumption behavior remains to be defined within this shared lifecycle.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/knowledge/decisions/ADR-003-asynchronous-transactional-collaboration.md`
- `docs/planning/open-questions.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Step

Define how Personal AI Assistant invocation, interruption and resumption participate in the Collaboration Request lifecycle without allowing autonomous assistant activity or exposing the owner's private AI configuration.
