# Session — Collaboration Request List Visibility Scenarios

**Session ID:** 2026-07-29-04

**Date:** 2026-07-29

**Status:** Crystallized

---

## Context

List defaults established that a reopened request labels earlier response evidence as **Previous response** and that the default sort is Last updated. The remaining scenarios needed to test privacy and ordering when a recipient's previously responded request is reopened, and when an AI-targeted request is On Hold.

---

## Project Collaborator Scenario Validated

Alex reopens a previously responded request to Maya. Maya continues to see that request in **Requests for you** as a frozen, read-only record of the previously shared Brief, scope, context, lifecycle and her response. The row may show `Request: Draft · Previous response: Acted On` and **Read-only until resubmitted**.

Maya cannot see Alex's revised Draft Brief or draft-context changes, nor take action on the request while it is reopened. On resubmission, the same request becomes active again for Maya with its revised Brief and retained prior-cycle evidence.

Maya's list sorts by the newest meaningful event visible to her. Reopen and resubmission update her timestamp and ordering. Alex's private Draft Brief edits update only Alex's list; they do not expose drafting activity through Maya's timestamp or list position.

---

## AI On Hold Scenario Validated

Alex sees an AI-targeted request to Alfred as `Request: On Hold` after technical interruption or loss of usable AI eligibility. The ordinary request surface says only that AI assistance is unavailable; it does not expose provider, model, credentials, credit or detailed technical-failure information.

Entering On Hold updates Last updated and therefore the owner’s default ordering. Restoring AI eligibility leaves the request On Hold and does not update or reorder it. Only Alex's explicit **Resume assistant** action creates the next visible update and moves the request through Submitted and then In Progress when processing actually begins.

The row remains filterable by Request status and recipient without creating a priority, due date or needs-action queue.

---

## Consequences

- Prior collaboration evidence stays available to the human contributor without disclosing private reopened drafting.
- Last updated is honest for both roles because it reflects the latest event visible to the viewer.
- AI availability restoration remains distinct from an owner-controlled request action.

---

## Documentation Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/knowledge/decisions/ADR-003-asynchronous-transactional-collaboration.md`
- `docs/planning/open-questions.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`
- `docs/sessions/2026/2026-07-29-collaboration-request-last-updated-semantics.md`

---

## Recommended Next Topic

Validate the complete role-aware list journey with one owner, one collaborator and one personal AI assistant, including filtering, search, pagination and retained response history.
