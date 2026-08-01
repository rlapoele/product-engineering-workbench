# Session — First-Slice System Boundaries

**Session ID:** 2026-08-01-02  
**Date:** 2026-08-01  
**Status:** Crystallized

## Context

The selected first slice and its online-first, offline-evolvable posture establish what must happen but not which architectural responsibility owns each part. A technology-neutral boundary model was needed before choosing frameworks, APIs or persistence technology.

## Decision

The first slice uses one deployable online modular monolith. It has five logical boundaries:

1. Browser presentation for authenticated entry, first-use home, Project creation, document rendering and private Goal drafts.
2. Identity boundary for establishing the current authenticated user.
3. Server application for enforcing owner-only access, executing Project commands and assembling Project views.
4. Canonical persistence for Projects, Specifications, Goals and Revisions.
5. Fixed-starter definition for the `Implementation-Ready Web App Specification` / `Standard Web App` default section composition.

The minimum commands are list current-user Projects, atomically create Project/default Specification, load owned Project, and atomically create and save Goal/first Revision. The browser accesses Project reads and writes through a client-facing data and command boundary; it does not authorize ownership or become canonical Product State.

The decision does not select an authentication provider, UI framework, server framework, API style, database, ORM, queue, cache, deployment platform, client storage or event-sourcing model.

## Consequences

- The first slice has a clear and trustworthy online authority model without microservices or separate deployment units.
- Project creation and Goal save have explicit atomic boundaries that inform the next data and lifecycle-contract package.
- The client boundary remains a future insertion point for a local store and synchronization layer, consistent with the offline-evolvable posture.

## Documentation Updated

- `docs/knowledge/architecture/system-architecture.md`
- `docs/knowledge/architecture/frontend-architecture.md`
- `docs/knowledge/architecture/backend-architecture.md`
- `docs/knowledge/decisions/ADR-010-first-slice-system-boundaries.md`
- `docs/knowledge/decisions/README.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Topic

Define first-slice data and lifecycle contracts for the Project, fixed starter, Goal and Revision, including the atomic command inputs and authoritative saved results without choosing a database.
