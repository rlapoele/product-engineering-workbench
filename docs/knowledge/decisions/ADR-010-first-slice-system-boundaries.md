# ADR-010 — First-Slice System Boundaries

**Status:** Accepted

**Date:** 2026-08-01

---

## Context

The selected first implementation slice needs authenticated entry, Project ownership, Project creation from a fixed starter, document presentation, a saved Goal and a Revision. The online-first, offline-evolvable posture requires server-authoritative canonical state while keeping a future local data and synchronization layer possible.

The project needed a structural architecture decision before considering technology selection. Without it, presentation, authorization, persistence and starter-definition concerns could become coupled in a way that obscures owner authority and makes later offline support unnecessarily costly.

## Decision

Implement the first slice as one deployable, online modular monolith with five logical boundaries:

1. Browser presentation for onboarding, home, Project creation, document rendering and private UI drafts.
2. Identity boundary that establishes the authenticated user.
3. Server application that enforces Project ownership, executes Project commands and assembles Project views.
4. Canonical persistence for Projects, Specifications, Goals and Revisions.
5. Fixed-starter definition for the selected template/preset and default section composition.

The minimum server commands are list current-user Projects; create Project and default Specification atomically; load owned Project; and create and save a Goal with its first Revision atomically.

The browser must access Project data and commands through a client-facing boundary. It cannot authorize ownership or become canonical Project State. The server application remains authoritative for owner-only access and saved state.

The decision selects logical boundaries and a single deployment unit only. It does not select an identity provider, UI or server framework, API style, database, ORM, queue, cache, deployment platform, client storage or event-sourcing model.

## Rationale

One deployable modular monolith keeps the first slice proportionate to the validated user journey. Explicit internal boundaries preserve owner authority, atomic saved-state behavior and a future insertion point for local storage and synchronization without requiring distributed infrastructure prematurely.

## Consequences

- The first slice has one coherent online authority model and does not require microservices.
- Project creation and Goal save each have explicit atomic command boundaries.
- Browser components remain insulated from persistence choices and later offline synchronization details.
- Technology selection and concrete data contracts remain separate decision work.

## Alternatives Considered

### Direct browser-to-persistence design

This would reduce initial layering but makes authorization, retry handling and future offline evolution harder to reason about and enforce.

### Microservices or separate deployed frontend and backend systems

This could separate operational concerns, but adds deployment and integration complexity before the first user journey is validated.

### One deployable modular monolith

This was selected because it provides clear responsibilities and future seams with the least first-slice operational complexity.

## Related Documents

- `docs/knowledge/architecture/system-architecture.md`
- `docs/knowledge/architecture/frontend-architecture.md`
- `docs/knowledge/architecture/backend-architecture.md`
- `docs/knowledge/decisions/ADR-009-online-first-offline-evolvable-posture.md`
- `docs/sessions/2026/2026-07-31-mvp-implementation-cut.md`
