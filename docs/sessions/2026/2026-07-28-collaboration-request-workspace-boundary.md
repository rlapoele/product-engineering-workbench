# Session — Collaboration Request Workspace Boundary

**Session ID:** 2026-07-28-08

**Date:** 2026-07-28

**Status:** Crystallized

---

## Context

The standalone Collaboration Request creation interaction establishes a Project request list as an entry point. Before defining its detailed organization, the product needed to decide whether requests should instead have a separate global workplace or home-page sections alongside Projects.

---

## Decision

Collaboration Requests remain Project-scoped in the MVP. The Collaboration Requests list inside a Project is their canonical workplace for finding, opening and acting on requests.

The MVP does not provide independent global **My requests** or **Requests for me** pages, an unscoped request composer or a cross-project request board. This keeps a request's scope, source context, participants and relationship to Product Knowledge visible inside the Project that owns it.

A future home or cross-project surface may provide a compact attention summary, for example that requests in named Projects need the current user's attention. Such a summary is for orientation only: it routes the user into the relevant Project request workspace and does not become an alternate request-management surface.

---

## Consequences

- Projects remain the durable collaboration and product-engineering context.
- Request activity does not acquire separate task, workload, priority or delivery-management semantics.
- The detailed Project-level request workspace can be designed around the user's role and lifecycle state without defining a global inbox.
- Cross-project orientation remains a deliberately bounded future enhancement.

---

## Documentation Updated

- `docs/knowledge/ux/document-first-ui.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/decisions/ADR-003-asynchronous-transactional-collaboration.md`
- `docs/planning/open-questions.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

---

## Recommended Next Topic

Define the Project-level Collaboration Requests workspace: role-aware views, lifecycle grouping and row/detail information, while preserving private drafts and avoiding delivery-board behavior.
