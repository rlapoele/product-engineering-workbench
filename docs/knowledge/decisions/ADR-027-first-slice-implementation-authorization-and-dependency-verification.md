# ADR-027 — First-Slice Implementation Authorization And Dependency Verification

**Status:** Accepted

**Date:** 2026-08-06

---

## Context

The first-slice product, architecture, persistence, operations, verification and executable specification are accepted. No further product or architectural decision currently blocks the slice. Exact runtime and package versions, Better Auth generated schema compatibility and the selected test/toolchain combination remain facts to verify before repository product code begins.

The Project Owner requires a clear boundary between a local compatibility exercise, permission to implement the selected slice, and later Railway/staging/production release readiness.

## Decision

Use a two-stage authorization model.

### 1. Platform lock before product code

Before Implementation Authorization, create and accept a **Dependency Verification Record** from a local-only, disposable Dependency Verification Exercise. The exercise evaluates Node `24` as the first LTS candidate, with the accepted Node `22` minimum as the fallback candidate, and one exact package set covering:

- Astro, `@astrojs/node`, `@astrojs/react`, React, React DOM and Tailwind;
- Better Auth, `pg`, Zod, Pino and `node-pg-migrate`; and
- Vitest, React Testing Library, user-event, Testcontainers, Playwright and axe.

It runs outside the repository product implementation in a temporary directory. It may install candidate packages locally and use a disposable local/Testcontainers PostgreSQL instance. It must not add repository product code, migrations, routes or Product Knowledge; deploy to Railway; configure OAuth applications; use a staging/production database; or require any real user identity.

The Record contains:

- exact tested Node and package versions plus lockfile identity;
- peer-dependency, static-check and production-build results;
- Astro Node adapter and hydrated React-Island result;
- Better Auth PostgreSQL and schema-generation result, with generated DDL reviewed for the selected `auth` schema and normal reviewed-migration path;
- `pg` and `node-pg-migrate` result using the selected migration-ledger schema;
- Vitest/Testcontainers and Playwright/axe tooling result; and
- any incompatibility, replacement and its accepted rationale.

The accepted Record is `docs/knowledge/architecture/first-slice-dependency-verification-record.md`.

### 2. Explicit implementation authorization

After the Project Owner accepts the Dependency Verification Record, the Owner may explicitly authorize repository product code for the named ADR-026 first slice only. That authorization does not include Project Archive, handoff generation, collaboration, AI, offline capability, additional Artifact types or any other deferred capability.

### Separate release readiness

The platform lock and Implementation Authorization do not deploy to Railway. The existing release-readiness gates remain independent: private migration-job/application-release gating, staging configuration and synthetic OAuth accounts, staging backup restoration, restricted observability, automated quality evidence, deferred manual VoiceOver/Safari evidence, and production readiness checks. They block staging/production use as specified by the existing ADRs, but do not block the first local code increment.

## Rationale

The selected ecosystem has important compatibility seams: Astro server rendering and React Islands, Better Auth's generated PostgreSQL schema, direct `pg` access alongside a separate SQL migration runner, and container/browser test tooling. Verifying them before source construction prevents the first implementation step from silently revising accepted architecture.

A local-only disposable harness gives credible evidence without exposing confidential Product Knowledge, creating an accidental Railway deployment, or treating a dependency experiment as application progress. Keeping release readiness separate preserves the engineering-quality baseline without making real OAuth or production-like recovery a prerequisite for the initial local construction increment.

## Consequences

- There is no remaining unresolved product or architecture decision before the first slice; the next required work is the accepted platform lock.
- Product code remains unauthorized until the Dependency Verification Record is accepted and the Project Owner explicitly grants scoped Implementation Authorization.
- The first exact Node major and package set are evidence-selected, not guessed from current documentation.
- A failed dependency candidate requires a recorded replacement decision before repository implementation begins.
- No Railway service, OAuth application, staging/production credential or real Product Knowledge is needed for the local exercise.

## Alternatives Considered

### Begin repository implementation and resolve versions during scaffolding

This risks coupling initial source layout and migrations to an unverified library combination, then treating an incompatibility as pressure to weaken accepted boundaries.

### Deploy a dependency spike to Railway

Railway is required later for environment-specific release evidence, not for local package compatibility. A deployment would introduce credentials, configuration and operational state without improving the platform-lock proof.

### Require all release evidence before local code begins

Staging OAuth, recovery and manual accessibility evidence require a deployable slice. Requiring them first reverses the selected implementation sequence while adding no early compatibility proof.

## Related Documents

- `docs/knowledge/principles/engineering-principles.md`
- `docs/knowledge/architecture/first-slice-executable-specification.md`
- `docs/knowledge/decisions/ADR-019-first-slice-postgresql-access-and-sql-migrations.md`
- `docs/knowledge/decisions/ADR-020-first-slice-environments-observability-and-release-evidence.md`
- `docs/knowledge/decisions/ADR-022-first-slice-verification-stack-and-evidence-plan.md`
- `docs/knowledge/decisions/ADR-026-first-slice-executable-specification-boundary.md`
