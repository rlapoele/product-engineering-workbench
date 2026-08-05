# Session — First-Slice PostgreSQL Schema And Persistence Invariants

**Session ID:** 2026-08-05-02

**Date:** 2026-08-05

**Status:** Crystallized

## Context

The selected first slice needed an executable database schema for its atomic commands, immutable Goal Revision, owner authority, retry safety and operational evidence. The Project Owner also challenged UUIDv4's index locality and asked that the implementation slice not be mistaken for a prematurely final MVP data model.

## Decision

First-slice application records and Operation IDs use application-generated UUIDv7 values in PostgreSQL `uuid` columns. UUIDv7 preserves future independent client generation while improving temporal index locality; Better Auth user IDs remain opaque text.

Four schemas separate concerns: `app` holds Project, Specification, Goal, Goal Revision and idempotent command outcome records; `auth` holds Better Auth generated tables through the ordinary reviewed migration stream; `ops` holds only content-free aggregates and release evidence; and `migration` holds the migration ledger. The runtime role inserts and reads canonical slice records but cannot update or delete them.

Project creation and first-Goal save pre-generate result IDs, claim the same-owner Operation ID with a command fingerprint, and commit the command reference plus all canonical writes atomically. Deferred foreign keys make a Goal's non-null current Revision reference valid only when its immutable Revision 1 is also committed. A mismatched same-owner retry is rejected; a failed transaction leaves no partial data or retained operation claim.

The resulting tables are complete for the first slice only. The broader MVP's general Product Artifact, relationship and revision storage strategy remains a separate future decision once the relevant product model is sufficiently settled.

## Consequences

- PostgreSQL constraints and grants provide structural ownership and append-only guarantees in addition to explicit server SQL predicates.
- Better Auth schema changes enter the same forward-only reviewed migration path as application changes.
- Testcontainers integration tests can prove database-level invariants rather than relying on mocks.
- No product implementation is authorized by this decision.

## Documentation Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/architecture/backend-architecture.md`
- `docs/knowledge/architecture/system-architecture.md`
- `docs/knowledge/decisions/ADR-023-first-slice-postgresql-schema-and-persistence-invariants.md`
- `docs/knowledge/decisions/README.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Topic

Define the application-module and dependency-boundary approach for the modular monolith: proportionate ports/adapters, domain/application/infrastructure responsibilities, allowed dependencies and how Astro, Better Auth, PostgreSQL and Railway remain adapters rather than domain authority.
