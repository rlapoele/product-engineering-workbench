# Session — Collaboration Request Last-Updated Semantics

**Session ID:** 2026-07-29-03

**Date:** 2026-07-29

**Status:** Crystallized

---

## Context

The default Project Collaboration Requests list had been described as sorted by last activity. The owner-list scenario showed that this label needed to distinguish meaningful request changes from passive reading and to state whether response-handling actions affect ordering.

---

## Decision

The default sort is **Last updated — newest first**.

For the Project Owner, Last updated changes only for a meaningful update to the request:

- editing the Request Brief;
- submitting the request;
- a request lifecycle transition, including AI On Hold or explicit resume;
- submitting a Contribution Response; or
- changing the Contribution Response handling status.

Opening or viewing a request does not update it. A compact row may describe the update that produced its timestamp, for example `Maya submitted a response · 2h ago`.

For a Project Collaborator, Last updated means the newest meaningful event visible to that collaborator. A private Brief edit in a reopened Draft updates the owner's list only; Reopen and resubmission update both lists. The collaborator retains a frozen read-only prior view during the reopened Draft, so the timestamp does not disclose private drafting activity.

The other MVP sort choices are Last updated oldest first, creation newest first and Request Brief A–Z.

---

## Consequences

- Marking a response Acknowledged or Acted On moves its parent request according to the default sort.
- Passive reading does not create misleading recency or reorder the list.
- The list remains an activity record rather than a priority or work queue.

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
- `docs/sessions/2026/2026-07-29-collaboration-request-list-defaults-and-fields.md`

---

## Recommended Next Topic

Validate the Project Collaborator request-list scenario, including what remains visible while the Project Owner reopens a previously responded request.
