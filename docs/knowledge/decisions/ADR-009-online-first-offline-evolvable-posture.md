# ADR-009 — Online-First, Offline-Evolvable Posture

**Status:** Accepted

**Date:** 2026-08-01

---

## Context

The Product Engineering Workbench may eventually need to support offline use. Offline capability is not a single feature: cached application resources, offline reading, offline authoring with later synchronization and offline multi-user collaboration have materially different product and architectural consequences.

The selected first implementation slice is intentionally narrow and online-only: authenticated entry, Project creation from one fixed starter, document entry, one saved Goal and a Revision. Implementing local persistence and synchronization in that slice would introduce unvalidated complexity before the core journey has been tested. Conversely, an online-only design that couples user-interface components directly to remote persistence would make later offline authoring unnecessarily expensive.

## Decision

Adopt an **online-first, offline-evolvable** architectural posture.

The first slice remains online-only. A server-side application boundary is authoritative for identity, Project ownership, canonical Project State, commands and persistence.

The architecture must preserve the option for a future single Project Owner to author Product Knowledge offline and synchronize it later. To do so, it must provide a client-facing Project data and command boundary, stable identifiers that can be safely client-originated or remapped, explicit retry-safe commands with authoritative saved state and Revision or version information, and a clear separation between local drafts and canonical saved Project State.

This decision does not promise offline authoring in the MVP. It does not decide a client storage technology, synchronization protocol, conflict-resolution policy, authentication mechanism, API style, database technology or event-sourcing model.

Offline multi-user collaboration remains explicitly out of scope for this posture. Any future sync-state presentation must describe actual saved or synchronization state rather than rely solely on a browser online/offline indication.

## Rationale

This posture lets the team validate the first user journey with the simplest trustworthy authority model while avoiding architectural coupling that would require a broad rewrite to introduce local storage and synchronization later.

The workbench's distinction between private drafts, explicit owner saves and immutable Revisions already provides useful foundations for later offline reasoning. It does not by itself solve synchronization, conflicts or recovery, which need separate product and architecture decisions when offline authoring is prioritized.

## Consequences

- The first slice does not implement a local Project store, outbox, sync processor, conflict resolution, offline attachments, offline collaboration or connectivity-status UI.
- UI code must not treat a direct remote request as the only possible Project-data implementation.
- Future offline authoring can be introduced behind established data and command boundaries, but still requires deliberate user-experience, security, synchronization and conflict decisions.
- The system can remain a single deployable online application for the first slice; this posture does not require a local-first or distributed architecture now.

## Alternatives Considered

### Fully online-only architecture with no offline constraints

This minimizes immediate design work, but risks coupling the UI and write model directly to remote persistence and making offline capability a broad rewrite.

### Full local-first architecture and synchronization in the first slice

This would maximize offline readiness, but requires premature choices about local storage, synchronization, conflict behavior, recovery, privacy and authorization before the basic value loop has been validated.

### Online-first, offline-evolvable posture

This was selected because it keeps first-slice complexity proportional while reserving the architectural seams required for a future offline-authoring capability.

## Related Documents

- `docs/knowledge/architecture/system-architecture.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/decisions/ADR-007-canonical-project-state.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
