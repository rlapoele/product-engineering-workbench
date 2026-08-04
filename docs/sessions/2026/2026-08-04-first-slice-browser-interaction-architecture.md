# Session — First-Slice Browser Interaction Architecture

**Session ID:** 2026-08-04-03  
**Date:** 2026-08-04  
**Status:** Crystallized

## Context

The selected first-slice stack direction uses Astro/Node and needs a concrete client interaction model. Native Web Components with a Signals-compatible abstraction were considered, but the Project Owner selected React for the MVP and may reconsider component extraction later.

## Decision

Astro provides server-rendered pages, while React Islands provide the bounded interactive areas of the first slice. React component state and hooks manage local input, pending, error and private in-progress draft presentation only.

Project reads and explicit commands remain behind the client-facing Project data and command boundary. The server remains authoritative for identity, ownership, canonical Project state and saved command results. No additional state-management library, client-side router or TC39 Signals polyfill is selected.

## Consequences

- React supports the selected prototype's interaction and recovery states without broadening the first slice into a client-rendered application.
- Component-level and browser-level tests can separately validate local state transitions and owner journeys.
- Later Web Component extraction is possible, but is not an MVP delivery requirement.
- No product implementation is authorized by this decision.

## Documentation Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/architecture/frontend-architecture.md`
- `docs/knowledge/architecture/system-architecture.md`
- `docs/knowledge/decisions/ADR-018-first-slice-browser-interaction-architecture.md`
- `docs/knowledge/decisions/README.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Topic

Select the concrete persistence and migration mechanism for Railway PostgreSQL, including whether raw `pg` and a reviewed SQL migration runner satisfy the first-slice data and recovery gates.
