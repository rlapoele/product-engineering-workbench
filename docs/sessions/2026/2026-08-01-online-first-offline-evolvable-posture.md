# Session — Online-First, Offline-Evolvable Posture

**Session ID:** 2026-08-01-01  
**Date:** 2026-08-01  
**Status:** Crystallized

## Context

Before defining the selected first slice's system boundaries, the project considered whether users should eventually be able to use the workbench offline. A full local-first implementation would materially affect synchronization, conflict handling, recovery, authorization and privacy, but an architecture that ignores offline concerns can make later offline authoring a broad rewrite.

## Decision

The first implementation slice remains online-only, with a server-side application boundary authoritative for identity, owner-only access, canonical Project State, commands and persistence.

The architecture adopts an online-first, offline-evolvable posture. It preserves the option for a single Project Owner to author Product Knowledge offline and synchronize later by using a client-facing Project data and command boundary, stable identifiers that can be client-originated or remapped safely, retry-safe explicit commands that return authoritative saved state and Revision or version information, and a clear separation between private drafts and canonical saved state.

The decision neither promises offline authoring in the MVP nor selects a client store, sync protocol, conflict policy, authentication mechanism, API style, database or event-sourcing model. Offline multi-user collaboration remains out of scope. Future sync-state presentation must reflect actual saving or synchronization state, not only a browser online/offline hint.

## Consequences

- The first slice can remain a simple, coherent online application while avoiding direct UI-to-persistence coupling.
- Local Project storage, an outbox, synchronization, retry and recovery, conflict resolution, offline attachments, offline collaboration and connectivity-status UI are deferred.
- A later offline-authoring capability remains substantial product and engineering work, but can be added behind the selected data and command boundaries rather than requiring a whole-application rewrite.

## Documentation Updated

- `docs/knowledge/architecture/system-architecture.md`
- `docs/knowledge/decisions/ADR-009-online-first-offline-evolvable-posture.md`
- `docs/knowledge/decisions/README.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Topic

Return to the selected first slice's system-boundary decision model, using this posture as a constraint while leaving technologies undecided.
