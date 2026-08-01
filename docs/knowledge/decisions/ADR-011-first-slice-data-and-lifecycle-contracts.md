# ADR-011 — First-Slice Data And Lifecycle Contracts

**Status:** Accepted

**Date:** 2026-08-01

---

## Context

The first-slice system-boundary decision requires atomic Project creation and Goal save commands, but did not define their durable records, lifecycle transitions or retry behavior. The online-first, offline-evolvable posture also requires a dependable distinction between private client drafts, authoritative saved state and immutable Revisions.

## Decision

The first slice persists four records: Project, Specification, Goal and Revision.

Project creation atomically creates an active owner-controlled Project with a required title, optional description, content locale, fixed starter identifier/version and one empty materialized Specification. The first starter is server-selected as `implementation-ready-web-app-specification.standard-web-app` at positive integer version `1`; its definition is immutable and includes the template/preset pair, section identifiers, ordering and semantic label/guidance references. The Specification records its stable identity, Project identity, and the starter's default section identifiers and ordering. Project creation creates no Product Artifact or Revision.

The first Goal has a stable identity, Project, Specification and canonical-section references, `Goal` type, required non-whitespace title and content, `Draft` lifecycle status, creator/timestamps and current Revision reference. `Done editing` atomically creates the canonical Goal and Revision 1.

Revision 1 is an immutable complete snapshot of that saved Goal. It records a stable identity, the Goal identity, a per-Goal version, the saving owner and time. The first slice does not use deltas or event sourcing for Revision history.

Each write command carries an Operation ID. The completed command outcome is retained so the same command can be retried without duplicate state. The same Operation ID with different command content is rejected. A failed command leaves no partial Goal or Revision.

The browser's in-progress Goal draft is private and non-canonical until `Done editing`. It is not persisted as Product Knowledge and does not create a Revision.

## Rationale

This compact model is sufficient for the chosen user journey while preserving clear owner authority, visible save semantics, immutable history and retry safety. Complete Goal snapshots are easy to understand and load, and avoid requiring event-sourcing or revision-diff machinery before they demonstrate value.

The materialized starter composition keeps created Projects stable if the source starter changes later. A later materialized-output change creates the next integer Starter Version; unchanged semantic keys with new translations do not. Stable record identities, versions and retry-safe commands also preserve options for future offline synchronization without requiring it now.

## Consequences

- Project creation and Goal save have all-or-nothing persistence behavior.
- A saved Goal is canonical Draft Product Knowledge even though its browser draft was private beforehand.
- The first-slice history contains Goal Revision 1 but no Revision for empty starter instantiation.
- Relationships, additional artifacts, later Goal revisions, revision diffs, draft resumption, archiving, propagation, collaboration and conflicts remain deferred.

## Alternatives Considered

### Store direct document text without independently identified Goal and Revision records

This would reduce initial records but would not prove the selected Product Artifact and explicit Revision model.

### Record deltas or use event sourcing from the first save

This could support detailed reconstruction, but adds unneeded operational and conceptual complexity for one Goal and one Revision.

### Complete immutable Goal snapshots with retry-safe commands

This was selected because it provides straightforward history and recovery behavior while keeping future evolution possible.

## Related Documents

- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/architecture/backend-architecture.md`
- `docs/knowledge/decisions/ADR-009-online-first-offline-evolvable-posture.md`
- `docs/knowledge/decisions/ADR-010-first-slice-system-boundaries.md`
