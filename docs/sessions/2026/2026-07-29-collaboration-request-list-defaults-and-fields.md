# Session — Collaboration Request List Defaults and Fields

**Session ID:** 2026-07-29-02

**Date:** 2026-07-29

**Status:** Crystallized

---

## Context

The Project Collaboration Requests workspace has one role-aware list, but its default access pattern and information density remained undecided. The list needed to preserve retained request and response evidence without becoming a delivery board, response inbox or implicit work queue.

---

## Decision

The role boundary is the only default list restriction:

- A Project Owner sees all **Requests you created**, including private Drafts.
- A Project Collaborator sees all **Requests for you**, where they are the selected human recipient.

No lifecycle or Contribution Response handling filter is applied by default. The default sort is **Last updated — newest first**. The other MVP sort choices are Last updated oldest first, creation newest first and Request Brief A–Z.

Search covers the Request Brief, Assistance Request Type, scoped-source label and participant names. The compact filters are Request status, Contribution Response handling status, Assistance Request Type and scope kind. The Project Owner may additionally filter by recipient.

Each compact row shows:

- Request Brief;
- Assistance Request Type;
- scoped source;
- other party;
- labelled Request status;
- labelled current-cycle response handling status when a response exists; and
- concise last-update event.

Request and response labels keep similarly named states distinct, for example `Request: Responded · Response: Submitted`. A Contribution Response remains inside its parent request. The request detail holds the complete Brief, immutable recorded context, lifecycle history, response content and response-handling actions together.

When the requestor reopens a request, prior response evidence remains retained. If an earlier response exists while the request is in its reopened cycle, the row labels it **Previous response**, for example `Request: Draft · Previous response: Acted On`. This makes the retained evidence visible without implying that it answers the reopened request cycle.

The list has no priority, due date, assignee, lifecycle grouping or needs-action worklist. The home page may still summarize attention and route the user to the Project, but it does not alter these list defaults or become a separate request-management surface.

---

## Consequences

- A user can scan the complete role-appropriate request record without first choosing a status-specific view.
- Owners can locate responses needing review by deliberately combining Request status and response-handling filters.
- Reopened requests do not misrepresent historical responses as current-cycle responses.
- The list remains a compact Project knowledge-and-collaboration record rather than a delivery-management workplace.

---

## Documentation Updated

- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/knowledge/decisions/ADR-003-asynchronous-transactional-collaboration.md`
- `docs/glossary/glossary.md`
- `docs/planning/open-questions.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

---

## Recommended Next Topic

Validate the Collaboration Requests list through Project Owner, Project Collaborator, AI On Hold and reopened-request scenarios.
