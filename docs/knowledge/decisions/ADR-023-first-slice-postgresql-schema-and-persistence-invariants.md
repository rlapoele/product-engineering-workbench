# ADR-023 — First-Slice PostgreSQL Schema And Persistence Invariants

**Status:** Accepted

**Date:** 2026-08-05

---

## Context

The first slice defines atomic Project creation and first-Goal save, stable identifiers, immutable Revision 1, exact same-owner Operation-ID retry, Better Auth identity, forward-only SQL migrations and content-free operational evidence. It needs a concrete PostgreSQL layout and database invariants that make those contracts executable without prematurely defining the MVP-wide Product Artifact storage model.

## Decision

Use application-generated UUIDv7 values in PostgreSQL `uuid` columns for every first-slice application record and for Operation IDs. UUIDv7 preserves independently generatable stable identifiers for a future offline client while providing time-ordered insertion locality. The first slice does not rely on a database UUID-generation function; the exact Railway PostgreSQL major and UUIDv7 generator package remain implementation dependency verification. Better Auth user identifiers remain its opaque `text` values.

Use four schemas:

| Schema | Contents and boundary |
|---|---|
| `app` | Canonical first-slice Project, Specification, Goal, Goal Revision and idempotent command-outcome records. |
| `auth` | Better Auth's generated core tables. A version-pinned Better Auth schema generation is reviewed and committed as plain SQL in the normal `node-pg-migrate` migration stream; no deployed environment runs Better Auth's separate migration command. |
| `ops` | Content-free hourly command-outcome aggregates and immutable release evidence. It contains no Product Knowledge, user, Project, Goal, request or session identifiers. |
| `migration` | The `node-pg-migrate` ledger table, configured as `migration.pgmigrations`. |

All migration DDL names its target schema explicitly. The migration role owns the four schemas. The runtime role receives only the data privileges required below; it does not receive schema-definition authority.

### Canonical `app` records

| Table | Required columns and invariants |
|---|---|
| `projects` | `id uuid` primary key; immutable `owner_user_id text` referencing the generated Better Auth user table; nonblank `title`; nullable `description`; nonblank, server-validated `content_locale`; `starter_id`; positive `starter_version`; `created_at`. `(id, owner_user_id)` is unique for composite ownership references. |
| `specifications` | `id uuid` primary key; `project_id uuid` unique; ordered `section_ids jsonb` array; `created_at`. `(id, project_id)` is unique. The array is the fixed starter's materialized section-ID order, not a general Specification Section table. |
| `goals` | `id uuid` primary key; `project_id`; `specification_id`; `canonical_section_id`; fixed `artifact_type = 'goal'`; nonblank `title` and `content`; `lifecycle_status` constrained to the accepted lifecycle vocabulary; `creator_user_id`; `created_at`; non-null `current_revision_id`. Composite foreign keys ensure the Specification belongs to the Project and the creator is that Project's owner. |
| `goal_revisions` | `id uuid` primary key; `goal_id`; positive `version`; `saved_by_user_id`; `saved_at`; `snapshot jsonb` object. `(goal_id, version)` is unique, and a composite foreign key ensures the saver is the Goal's creator/Project owner. The snapshot contains the saved Goal's stable identity, Project/Specification/section references, artifact type, title, content, lifecycle status, creator and creation time. Revision metadata remains in the Revision row. |
| `command_operations` | `(owner_user_id, operation_id)` is the primary key; `command_type`; fixed-length SHA-256 `request_fingerprint`; result Project, Goal and Revision UUID references as applicable; `completed_at`. It stores references only, never a duplicate response or Product Knowledge payload. Conditional checks require exactly the result-reference shape of `create_project` or `create_goal`. Composite foreign keys ensure referenced results belong to the same owner. |

`goals.current_revision_id` and `goal_revisions.goal_id` form a deferred foreign-key cycle. The command pre-generates both UUIDv7 values, inserts the Goal with its non-null current Revision ID, inserts Revision 1, and commits only when the deferred reference is valid. The Goal’s current Revision must belong to that same Goal.

The runtime role may select and insert the first-slice canonical rows, but has no update or delete grant on Projects, Specifications, Goals, Goal Revisions or command operations. This makes the first saved Goal and Revision append-only by privilege rather than convention. The current slice has no Project edit, later Goal revision, archive or delete command; a later accepted capability requires an explicit forward migration and grant change.

### Command transactions

For both writes, the server validates the authenticated owner, canonical command input and Operation ID before entering one explicit transaction. It then claims the pre-generated result references through an insert into `command_operations`; its unique owner/Operation-ID constraint serializes concurrent retries. A duplicate claim compares command type and fingerprint: an exact match replays the recorded referenced outcome, while any difference is rejected. A failed transaction rolls back the command row and every canonical write, so the same Operation ID remains retryable after a failure.

Project creation inserts the command outcome, Project and one Specification with the fixed starter's materialized ordered section IDs in one transaction. First-Goal save inserts the command outcome, owned Goal and immutable Revision 1 in one transaction. Neither path persists a browser draft or creates a Revision for starter instantiation.

### Operational records and owner enforcement

`ops.command_outcomes_hourly` is keyed by hour, command category, outcome and source revision. It retains count, total duration and maximum duration only. `ops.release_evidence` has a UUIDv7 primary key and records environment, release type, source revision, migration identifiers, outcome, duration, readiness/smoke result, recovery-exercise reference and approved error classification. Both tables remain content-free.

The server continues to enforce owner-only access with explicit, parameterized SQL predicates. PostgreSQL row-level security is not selected: one trusted application runtime role serves all owners, and a browser never receives a database credential or selects an owner identity. Foreign keys strengthen ownership consistency but do not replace those query predicates.

## Rationale

UUIDv4 would preserve future client-side generation but imposes random insertion order. UUIDv7 retains decentralised generation while improving temporal locality in PostgreSQL indexes. ULID offers a similar ordering property, but UUIDv7 retains PostgreSQL's native UUID type, standard validation and broad tooling compatibility. UUIDv7 timestamps are not an authorization or display value; explicit timestamps remain canonical.

The four-schema layout separates confidential Product Knowledge, Better Auth's independently evolving tables, content-free operational evidence and migration bookkeeping. Keeping Better Auth's generated DDL inside the established migration process preserves the selected two-role release discipline and avoids a second unreviewed schema-authority path.

The small, first-slice-specific Goal schema makes the selected user journey durable without falsely claiming that the full MVP's artifact types, relationships and revision patterns have been settled. Stable UUIDv7 identities, materialized snapshots and forward-only migrations preserve a safe path to later generalization.

## Consequences

- The exact application-side UUIDv7 generator and Railway PostgreSQL major must be verified before dependency selection; database columns remain portable `uuid` values regardless of generator location.
- Integration tests apply these migrations to disposable PostgreSQL, prove the foreign-key and grant invariants, exercise exact retry races and show that a failed command leaves no command or canonical records.
- The migration role must add Better Auth DDL only as reviewed, version-pinned plain SQL migrations. Better Auth configuration changes that alter its schema require the same review and release gate as application schema changes.
- The app runtime cannot mutate initial canonical records through its normal role. Later owner edits, revisions, lifecycle transitions or deletion require deliberate schema, grant and product-contract decisions.
- The first-slice tables are not declared the final MVP Product Artifact persistence model. A later decision must choose the general artifact/revision/relationship storage strategy when the intended artifact types and relationships can constrain it.
- Partitioning, sharding, row-level security, a generic event store, outbox, persisted drafts, database triggers and starter-definition configuration tables remain unselected.

## Alternatives Considered

### UUIDv4 application identifiers

UUIDv4 gives independent generation, but its random ordering is a poorer default for indexed append-heavy records. UUIDv7 preserves the important offline-evolvable seam without that trade-off.

### ULID identifiers

ULIDs are sortable and can be generated independently, but would require a separate identifier representation and validation convention. UUIDv7 fits PostgreSQL's native UUID storage and the established interoperable UUID ecosystem.

### A generic MVP-wide Product Artifact table now

This would avoid a future table-shape migration only by prematurely deciding the shared fields, type-specific data, relationships and revision mechanics of many unimplemented artifact types. The first slice instead uses a truthful Goal record and leaves broader generalization explicit.

### Database-generated identifiers or row-level security

Database-generated IDs make a later offline client depend on remapping or another coordination scheme. Row-level security would add a user-context propagation mechanism to one trusted runtime role before evidence requires it. Application-generated IDs, foreign keys and explicit owner predicates are sufficient for the selected slice.

## Related Documents

- `docs/glossary/glossary.md`
- `docs/knowledge/architecture/backend-architecture.md`
- `docs/knowledge/architecture/system-architecture.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/decisions/ADR-009-online-first-offline-evolvable-posture.md`
- `docs/knowledge/decisions/ADR-011-first-slice-data-and-lifecycle-contracts.md`
- `docs/knowledge/decisions/ADR-019-first-slice-postgresql-access-and-sql-migrations.md`
- `docs/knowledge/decisions/ADR-020-first-slice-environments-observability-and-release-evidence.md`
- `docs/knowledge/decisions/ADR-022-first-slice-verification-stack-and-evidence-plan.md`
