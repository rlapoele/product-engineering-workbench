# First-Slice Dependency Verification Record

**Status:** Accepted

**Date:** 2026-08-09

**Scope:** ADR-026 authenticated-owner-to-saved-Goal first slice

---

## Purpose

This Record is the accepted local platform lock required by ADR-027 before repository product code may be authorized. It records a disposable, local-only compatibility exercise; it is not product code, a repository migration, Railway configuration, OAuth configuration or release evidence.

## Environment

| Item | Tested value |
| --- | --- |
| Node | `24.14.1` |
| npm | `11.17.0` |
| Host | macOS `26.5.2`, Apple Silicon (`arm64`) |
| Disposable database | Testcontainers `12.1.0` running PostgreSQL `17-alpine` through local Docker Desktop `28.5.1` |
| Lockfile identity | SHA-256 `3cf8c542c1591dc060a40b93b4d2d4a7ddd55da7ccb6a72819c3bbecd26bd8f2` |

Node `24.14.1` is accepted as the first supported LTS candidate. Node `22` remains the accepted minimum fallback but was not exercised because the Node `24` candidate passed.

## Exact Package Set

| Area | Accepted package versions |
| --- | --- |
| Application | `astro` `7.2.0`; `@astrojs/node` `11.1.0`; `@astrojs/react` `6.0.2`; `react` and `react-dom` `19.2.8`; `tailwindcss` `4.3.3` |
| Runtime boundaries | `better-auth` `1.6.26`; its PostgreSQL configuration dependency `kysely` `0.28.17`; `pg` `8.23.0`; `zod` `4.4.3`; `pino` `10.3.1`; `node-pg-migrate` `9.0.0` |
| Static and component verification | `typescript` `6.0.3`; `@astrojs/check` `0.9.10`; `vitest` `4.1.10`; `jsdom` `29.1.1`; `@vitejs/plugin-react` `6.0.5`; React Testing Library `16.3.2`; `user-event` `14.6.3` |
| Database and browser verification | `testcontainers` `12.1.0`; `@playwright/test` `1.62.1`; `@axe-core/playwright` `4.12.1` |
| Supporting type and CLI tooling | `@types/node` `26.2.0`; `@types/pg` `8.21.0`; `@types/react` `19.2.18`; `@types/react-dom` `19.2.4`; `auth` `1.6.26` |

TypeScript `7.0.2` was rejected: `@astrojs/check` `0.9.10` accepts TypeScript `5` or `6`, not `7`. TypeScript `6.0.3` passed all static, build and test checks.

The obsolete `@better-auth/cli` `1.4.21` candidate was rejected because it carries an older Better Auth line. The selected `auth` package is version-aligned at `1.6.26`; its executable reports `1.1.2` for `--version`, but its installed package manifest and dependency tree both identify `1.6.26` and it generated the reviewed schema successfully.

Better Auth's supported PostgreSQL runtime configuration uses its Kysely dialect boundary. The accepted lock resolves that internal dependency as `kysely` `0.28.17`; the application declares that exact version directly only to make the Better Auth composition import reproducible. Product persistence remains direct parameterized `pg` SQL; Kysely is not used by the Project module or PostgreSQL Project adapter.

## Results

| Verification | Result |
| --- | --- |
| Peer dependency resolution | Passed: `npm ls --depth=0` completed without dependency errors. |
| Astro Node adapter and React Island | Passed: a server-output Astro build with the Node adapter hydrated a React Island and preserved its local state. |
| Static and production build | Passed: `astro check` reported zero errors, warnings and hints; `astro build` passed. |
| Vitest and React Testing Library | Passed: the React Island component test passed. |
| PostgreSQL, `pg` and `node-pg-migrate` | Passed: a forward SQL migration applied to disposable PostgreSQL, an exact second run did not reapply it, and the migration ledger retained one record. |
| Better Auth PostgreSQL schema generation | Passed: the version-aligned `auth` CLI generated the base Better Auth schema, then the generated SQL applied through `node-pg-migrate` in the `auth` schema with the test ledger in the `migration` schema. |
| Playwright and axe | Passed: the built Node application ran the Chromium journey and an automated axe scan with no violations. |

## Better Auth DDL Review

The generated SQL creates the base `user`, `session`, `account` and `verification` tables and indexes `session.userId`, `account.userId` and `verification.identifier`. It uses text primary keys and timestamps; no Product Knowledge tables, credentials or product content are part of the generated SQL.

The generated table and index names are unqualified. The reviewed migration path therefore requires Better Auth's PostgreSQL connection to use `auth` as the first `search_path` entry, and requires the reviewed forward SQL migration runner to apply the generated statements with `auth` as its target schema. The disposable exercise created and verified the tables in `auth`, not `public`.

The `auth` CLI is generation-time tooling only. It is not selected as an application runtime dependency or as a Railway migration-job dependency. The exercise found zero production dependency advisories with development dependencies omitted. The CLI's development-only dependency graph reported five moderate and one high advisory through its Prisma-schema-generation dependency chain; it must remain isolated to controlled local generation and be reverified when used again or upgraded.

## Accepted Disposition

This Record satisfies ADR-027's local platform-lock prerequisite. It does not grant Implementation Authorization.

Repository product code remains unauthorized until the Project Owner explicitly authorizes the named ADR-026 first slice. Railway migration/application gating, staging OAuth, recovery exercises, manual accessibility evidence and production readiness remain separate later gates.

## Related Documents

- `docs/knowledge/decisions/ADR-027-first-slice-implementation-authorization-and-dependency-verification.md`
- `docs/knowledge/architecture/first-slice-executable-specification.md`
- `docs/knowledge/principles/engineering-principles.md`
