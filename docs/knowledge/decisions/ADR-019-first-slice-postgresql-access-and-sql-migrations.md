# ADR-019 — First-Slice PostgreSQL Access And SQL Migrations

**Status:** Accepted

**Date:** 2026-08-04

---

## Context

The first slice needs canonical persistence that supports atomic Project commands, owner-only access, explicit retry handling and the quality baseline's privacy, recovery and release gates. The Project Owner prefers direct PostgreSQL SQL over an ORM and uses Railway for application hosting.

## Decision

Use Railway-hosted PostgreSQL as the first-slice canonical persistence service and the `pg` driver as the only application data-access library. The Astro/Node application connects through Railway private networking and uses parameterized SQL. Multi-record Project commands use explicit database transactions.

Use `node-pg-migrate` as a development-only migration runner. Migrations are committed, UTC-ordered plain `.sql` files and run forward only. The runner tracks applied migrations and serializes concurrent migration attempts through its advisory lock. An applied migration is never edited, reordered or automatically rolled back in production; a correction is another reviewed forward migration.

The application uses `DATABASE_URL` with a least-privilege runtime database role. The runtime role may use the relevant schemas and perform only the required data operations, including required sequence access; it has no schema-definition authority. A distinct migration role owns the application and Better Auth schemas, records the migration ledger and has the authority needed to create or alter their objects. Default privileges grant the runtime role the required data permissions on objects introduced by later migrations.

The migration runner executes in a separately configured, private, terminating Railway job. It receives `MIGRATION_DATABASE_URL` but not the normal application runtime credential; the application service receives `DATABASE_URL` but never the migration credential. A **migration release** deploys that job from a designated source revision and must finish successfully before the **application release** from the same revision may proceed. Application auto-deployment must not bypass that gate. The initial solo workflow may run these two releases deliberately in sequence; later automation may preserve the same gate.

The first privileged bootstrap uses Railway's initial database owner only to create schemas, roles, grants and default privileges. That credential is not part of ordinary application or migration releases. All migrations must remain compatible with the previously deployed application version: expand first, deploy compatible code, then contract in a later release.

Railway PostgreSQL is treated as an unmanaged service. Before it holds real Product Knowledge, point-in-time recovery must be enabled when available and a non-production restoration exercise must prove the documented sibling-service and explicit-cutover procedure. If point-in-time recovery is unavailable, an equivalent scheduled-backup and tested-restoration procedure is required.

The runtime must use a supported Node LTS major version no lower than Node 22, which satisfies the selected migration runner's current requirement. The exact LTS major is an implementation dependency verification rather than a persistence-model decision.

## Rationale

`pg` keeps data access close to PostgreSQL and makes transaction boundaries, SQL predicates and database behavior visible without an ORM mapping layer. `node-pg-migrate` supplies a small, PostgreSQL-specific migration ledger, ordering, transaction and lock mechanism while allowing the migration source itself to remain ordinary reviewed SQL.

Forward-only migrations avoid treating schema rollback as a routine recovery action. Combined with backward-compatible release sequencing and a rehearsed Railway restoration path, they give the first slice a clear response to failed schema changes without concealing data-loss risk.

## Consequences

- Canonical Project, Specification, Goal, Revision and Better Auth records live in PostgreSQL; no ORM schema is a second source of truth.
- The server uses parameterized SQL and explicit transactions for atomic command contracts.
- Database credentials, including `MIGRATION_DATABASE_URL`, are production secrets and must never be committed or logged.
- The migration command is not run at application startup or as the application's Railway pre-deploy command. It runs only in the separate migration job and may also be deliberately invoked against a non-production environment for verification.
- Migration and application releases record the source revision, migration identifier(s), outcome, duration and technical error classification without recording Product Knowledge or credentials.
- A migration that cannot safely run in a transaction is exceptional, must state why in review and must be separated from ordinary transactional migrations.
- Production migrations and recovery exercises produce privacy-safe operational evidence only: migration identifier, outcome, duration and technical error classification, never Product Knowledge or credentials.
- The exact PostgreSQL major version, connection-pool limits, API style and detailed observability mechanism remain later implementation decisions.

## Alternatives Considered

### Prisma or another ORM-led migration system

An ORM would add an application-level schema and query abstraction that the Project Owner does not want for the first slice. It is unnecessary for the selected direct-SQL transaction model.

### A custom SQL migration script

This would preserve SQL source files but would require the project to recreate migration tracking, ordering, concurrency locking and failure behavior that a focused PostgreSQL runner already supplies.

### Automatic runtime migrations or destructive down migrations

Running migrations whenever an application process starts makes startup behavior and concurrent deployment handling less explicit. Automatic down migrations can destroy or invalidate data; corrective forward migrations and a tested restoration path are safer operational defaults.

## Related Documents

- `docs/glossary/glossary.md`
- `docs/knowledge/architecture/backend-architecture.md`
- `docs/knowledge/architecture/system-architecture.md`
- `docs/knowledge/decisions/ADR-009-online-first-offline-evolvable-posture.md`
- `docs/knowledge/decisions/ADR-010-first-slice-system-boundaries.md`
- `docs/knowledge/decisions/ADR-011-first-slice-data-and-lifecycle-contracts.md`
- `docs/knowledge/decisions/ADR-013-first-slice-engineering-quality-baseline.md`
