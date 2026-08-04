# Session — First-Slice PostgreSQL Access And SQL Migrations

**Session ID:** 2026-08-04-04
**Date:** 2026-08-04
**Status:** Crystallized

## Context

The Project Owner selected Railway for operations and wants PostgreSQL access close to SQL rather than through an ORM. The first slice needs durable atomic commands, migration discipline and a recovery path suitable for confidential Product Knowledge.

## Decision

Railway-hosted PostgreSQL is canonical persistence. The server uses `pg`, parameterized SQL and explicit transactions; no ORM is selected. A least-privilege runtime database role serves the application, while a separate migration role owns schema change authority. Schemas organize database objects; PostgreSQL role grants provide the authority boundary.

`node-pg-migrate` runs committed, UTC-ordered plain-SQL migrations in a private, terminating Railway migration job. That job receives `MIGRATION_DATABASE_URL` only; the Astro/Node application receives `DATABASE_URL` only. A migration release must succeed before the application release from the same source revision proceeds. Migrations are forward only: an applied migration is immutable, a correction is a new migration, and production does not run automatic down migrations. Releases use backward-compatible expand/deploy/contract sequencing.

Railway PostgreSQL remains operationally unmanaged. Before real content, enable point-in-time recovery where available and prove a non-production restore to a sibling service plus deliberate cutover. An equivalent scheduled-backup and tested-restoration procedure is required if point-in-time recovery is unavailable.

Node 22 is the minimum supported runtime baseline. Node 24 is currently LTS, but the final LTS major is an implementation dependency-verification choice rather than part of this persistence decision.

## Consequences

- The database, migration and recovery paths are explicit release concerns rather than application-startup side effects.
- Better Auth tables use the same migration discipline as canonical Product Knowledge tables.
- Direct SQL preserves visible transaction and authorization predicates.
- No product implementation is authorized by this decision.

## Documentation Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/architecture/backend-architecture.md`
- `docs/knowledge/architecture/system-architecture.md`
- `docs/knowledge/decisions/ADR-019-first-slice-postgresql-access-and-sql-migrations.md`
- `docs/knowledge/decisions/README.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Topic

Select the remaining deployment, release and privacy-safe observability mechanism: Railway environment topology, structured logging, command-outcome evidence and recovery/release verification.
