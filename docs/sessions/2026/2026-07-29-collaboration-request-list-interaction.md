# Session — Collaboration Request List Interaction

**Session ID:** 2026-07-29-01

**Date:** 2026-07-29

**Status:** Crystallized

---

## Context

The Project-level Collaboration Requests workspace is the canonical place to find and act on requests. The remaining interaction question was whether it should use multiple status-specific lists or one flexible list, and whether Contribution Responses should have a separate area.

---

## Decision

Each Project has one role-aware, paginated Collaboration Requests list.

- A Project Owner sees **Requests you created**, including private Drafts.
- A Project Collaborator sees **Requests for you**, restricted to requests where they are the selected human recipient.

The workspace does not split Drafts, active requests, response review or retained history into separate lists. It uses a single list with search, filtering and sorting instead. It does not use lifecycle columns, a request board or delivery-management semantics.

Rows remain request-oriented and compact. They identify the Request Brief, Assistance Request Type, scoped source, other party, Request status and concise activity. When a Contribution Response exists, it remains inside the request that produced it. Its separately tracked handling status appears as a labelled field of the same request row, for example `Request: Responded · Response: Submitted`; it is never a separate row, list, group or workspace. The owner may combine request and response-status filters to find responses that need review.

The detailed default filters, sorting and row/detail fields remain the next design decision.

---

## Consequences

- Users can reach any retained request through one flexible, scalable Project list.
- Private Drafts and recipient visibility boundaries remain intact.
- Request lifecycle and response handling remain distinct without visually separating a response from its request.
- The product avoids a status-specific dashboard, board or response inbox.

---

## Documentation Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/decisions/ADR-003-asynchronous-transactional-collaboration.md`
- `docs/planning/open-questions.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

---

## Recommended Next Topic

Define the default filters, sorting and row/detail fields for the Project Collaboration Requests list, including how request and response status remain legible together.
