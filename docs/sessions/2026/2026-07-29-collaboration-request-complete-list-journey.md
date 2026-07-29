# Session — Collaboration Request Complete List Journey

**Session ID:** 2026-07-29-05

**Date:** 2026-07-29

**Status:** Crystallized

---

## Context

The Collaboration Requests list already had role-aware visibility, meaningful Last updated ordering, and retained response evidence. A complete MeatLoop journey was needed to validate how role visibility, search, filters, sorting, pagination and multiple response cycles compose without exposing private content or turning history into a second list.

---

## Journey Validated

Alex sends Maya a request to review MeatLoop's overdue-invoice behavior. Maya sees it in **Requests for you**, starts a response, submits it and later sees Alex mark that response Acknowledged and Acted On. Alex reopens the request, so Maya retains a frozen read-only view of the first cycle while Alex privately revises the Brief. When Alex resubmits, Maya sees the refined Brief and submits a second response. The request row then shows the current response status; the request detail retains both cycles in their lifecycle history.

The list applies its role boundary first, then search and all selected filters, then the selected sort, and finally pagination. It shows 25 requests per page. Search and filter changes return the user to page one and show the matching-result count.

Search covers only the current request surface visible to the user: Request Brief, Assistance Request Type, scoped-source label and participant names. It excludes Contribution Response bodies, retained prior-cycle content and private reopened-Draft changes.

Response-handling filters apply only to the current Request Cycle. A retained first-cycle response does not cause a reopened Draft or a later cycle to match `Response: Acted On`; retained response history remains available only from the parent request detail.

When visible sort values tie, creation time and then an internal stable identifier provide deterministic order. This keeps pagination stable without presenting internal identifiers as product-facing fields.

---

## Consequences

- Search and filters cannot surface private or historical response content through the list.
- A user can deliberately locate current responses needing review without turning retained evidence into a second work queue.
- Pagination remains predictable as filters and sort choices change.
- The request detail remains the single place to understand full multi-cycle collaboration history.

---

## Documentation Updated

- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/knowledge/decisions/ADR-003-asynchronous-transactional-collaboration.md`
- `docs/planning/open-questions.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

---

## Recommended Next Topic

Define the request-detail history and response presentation: cycle ordering, lifecycle-event density, and how the current response is distinguished from retained responses without an activity-feed or chat surface.
