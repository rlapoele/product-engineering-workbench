# First-Slice Executable Specification

This document is the build blueprint for the accepted first slice. It fixes the minimum module layout, public contracts, route shapes, configuration boundaries and implementation order required to build the authenticated-owner-to-saved-Goal journey. It does not add product behavior or authorize implementation beyond that journey.

## Scope

The executable slice is:

1. authenticate the owner through Better Auth Google or GitHub OAuth;
2. render the calm owner Project home;
3. create a Project with the fixed `implementation-ready-web-app-specification.standard-web-app` starter at version `1` and an empty Specification;
4. locally author the first Goal; and
5. explicitly save the Active Goal and immutable Revision 1 atomically, then return to the saved Project.

All other Product Artifact types, later revisions, lifecycle actions, collaboration, AI, handoff generation, Project Archive implementation, offline synchronization and Resource handling are out of this executable specification.

## Source Layout

```text
src/
  modules/
    project/
      public.ts
      rules.ts
      ports.ts
      commands.ts
      queries.ts
    fixed-starter/
      standard-web-app-v1.ts
      public.ts

  adapters/
    postgres/
      project-store.ts
      transactions.ts
    better-auth/
      principal-resolver.ts
      server-auth.ts
    operations/
      pino-recorder.ts
      postgres-ledger.ts
    browser/
      project-http-client.ts

  composition/
    runtime-config.ts
    server-composition.ts
    migration-composition.ts

  pages/
    index.astro
    projects/new.astro
    projects/[projectId].astro
    api/projects.ts
    api/projects/[projectId]/goals.ts

  islands/
    create-project-island.tsx
    goal-editor-island.tsx

migrations/

tests/
  unit/
  integration/
  browser/
```

Names describe responsibility, not mandatory file granularity. Small files may be combined inside their named module or adapter when this does not obscure public contracts or dependency direction. New first-slice application code belongs to `modules`; framework and technology code belongs to `adapters`, `pages`, `islands` or `composition`. No catch-all `shared`, `common`, generic repository or service layer is created.

Astro's required `src/pages` files are thin presentation/HTTP adapters. They render server-composed views or translate a request into one public application call. React Islands call only the browser Project client and receive display data/handlers; they do not import server modules. `migrations` contains only forward SQL migrations and migration-runner configuration, never application behavior.

## Public Project Contracts

The Project module exposes four first-slice operations. Its types are application contracts, not SQL rows, Astro requests or Better Auth session objects.

| Operation | Public input | Server-derived or fixed values | Success result |
|---|---|---|---|
| `listProjects` | Authenticated principal | — | Owner Project summaries. |
| `loadProject` | Authenticated principal, Project ID | — | One owner Project view, or privacy-preserving not-found. |
| `createProject` | Authenticated principal, UUIDv7 Operation ID, nonblank title, optional description, valid `contentLocale` | immutable owner; fixed starter ID/version; default Specification; record IDs and timestamps | Authoritative saved Project view. |
| `saveFirstGoal` | Authenticated principal, Project ID, UUIDv7 Operation ID, nonblank Goal title and content | owned Specification; canonical Goal section; `goal` type; `Active` lifecycle; Goal/Revision IDs and timestamps; Revision version `1` | Authoritative saved Project view including Goal and Revision 1. |

The HTTP adapter resolves an authenticated principal before calling these operations. It maps no session object into the Project module. `createProject` and `saveFirstGoal` return either their authoritative saved result or the established safe discriminated failure categories: validation, authentication, privacy-preserving not-found, Operation-ID mismatch or temporary unavailability. Exact matching retries return their original saved result.

The browser client exposes the same read and command shapes to React Islands. It attaches same-origin credentials, JSON content and the required command header. It is the only browser location that performs those Project HTTP calls.

## Route Boundary

| Route | Responsibility |
|---|---|
| `GET /` | Server-rendered authenticated Project home using `listProjects`. |
| `GET /projects/new` | Server-rendered create-Project view. |
| `GET /projects/:projectId` | Server-rendered owner Project view using `loadProject`; non-owner and absent Project use the same not-found result. |
| `POST /api/projects` | Same-origin JSON `createProject` command. |
| `POST /api/projects/:projectId/goals` | Same-origin JSON `saveFirstGoal` command. |

Both command routes validate bounded JSON with server-owned Zod schemas, require the configured exact `Origin`, JSON content type and command header, provide no CORS allowance, and mark Project results `Cache-Control: no-store`. Request bodies never carry owner identity, starter/version, Specification identity, Goal lifecycle/type, Revision value or other server authority.

## Configuration And Composition

`runtime-config.ts` is the sole reader of environment variables. It validates configuration at startup without logging raw values, then supplies typed configuration only to the relevant Composition Root.

The application composition accepts:

- runtime environment and source revision;
- exact application origin;
- `DATABASE_URL` for the runtime database role;
- Better Auth base URL, secret and trusted-origin configuration;
- Google and GitHub OAuth client configuration; and
- restricted Pino/operational-recorder configuration.

It rejects `MIGRATION_DATABASE_URL`. It constructs the selected Better Auth, PostgreSQL and operations server adapters, then connects them to Project and Fixed Starter Ports. The browser Project client is a same-origin transport adapter constructed by its presentation boundary and receives no server credential or runtime secret.

The migration composition accepts only runtime environment, source revision, `MIGRATION_DATABASE_URL` and migration-runner configuration. It does not receive `DATABASE_URL`, Better Auth/OAuth configuration or application runtime secrets. The private terminating migration job uses this composition only.

The exact supported Node LTS, selected package versions and external environment-variable spellings are dependency-verification work. They do not change these two semantic configuration contracts.

## Dependency-Boundary Review Checklist

Before accepting a first-slice implementation change, review that:

1. each capability names its owning Application Module and its public contract;
2. a module imports no other module's internal file;
3. public contracts expose no Astro, React, Better Auth, `pg`, SQL, Pino, archive-library, Railway or environment object;
4. only Composition Root code reads environment variables or constructs concrete adapters;
5. only PostgreSQL adapters contain application SQL, and only `migrations` contains schema DDL;
6. routes own HTTP, CSRF, input parsing and safe serialization; application operations own product policy; PostgreSQL owns structural constraints and grants;
7. the browser never submits owner, identity, starter, Specification, lifecycle or Revision authority;
8. the future Handoff and Project Archive modules use public Project contracts rather than persistence internals;
9. operations/logging receives only approved content-free technical fields and cannot change a canonical command result; and
10. test-only Better Auth/session helpers stay outside production composition.

## Minimum Implementation Sequence

1. Verify exact compatible dependency versions and Node LTS; establish scripts, static/build checks and the empty layout.
2. Implement and test the two validated configuration contracts and separate credentials.
3. Add Better Auth generated schema migrations, PostgreSQL schemas/roles/grants and Testcontainers migration evidence.
4. Implement fixed Starter v1 and the pure Project public contracts/rules.
5. Implement the PostgreSQL Project adapter and prove atomic creation, Goal/Revision 1, owner authority and exact retry behavior through integration tests.
6. Compose Better Auth, PostgreSQL and operations into thin Astro pages and command routes.
7. Add the React Islands and browser Project client; complete component, Playwright journey, retry and accessibility evidence.
8. Configure the Railway migration-job/application-release gate, staging OAuth verification, restricted observability and restoration/release evidence.

No later step bypasses an earlier quality gate. A failure in operations recording cannot turn a committed canonical command into a failure, and a migration/application release cannot bypass the selected two-gate release sequence.

## Implementation Authorization Gate

No repository product code begins until the Project Owner explicitly authorizes the named first slice after accepting a Dependency Verification Record. The verification exercise is local-only and disposable: it evaluates a candidate Node LTS—Node `24` first, with the accepted Node `22` minimum as a fallback candidate—and one exact package set in a temporary directory with local Testcontainers PostgreSQL where required.

The Record must identify the tested runtime and package versions; peer-dependency and production-build result; Astro Node adapter and React-Island result; Better Auth PostgreSQL/schema-generation result; reviewed generated Better Auth DDL for the `auth` schema; `pg` plus `node-pg-migrate` migration-ledger result; Vitest/Testcontainers and Playwright/axe tooling result; and any accepted incompatibility replacement. It must not add repository product code, migrations or routes, deploy to Railway, configure OAuth applications, or use Product Knowledge.

After the Record is accepted, Implementation Authorization permits only the first-slice construction sequence above. Railway migration-job behavior, staging OAuth, restoration exercises, manual accessibility checks and production readiness remain later release-readiness gates; they do not block the first local implementation increment.

## Related Decisions

- `docs/knowledge/decisions/ADR-018-first-slice-browser-interaction-architecture.md`
- `docs/knowledge/decisions/ADR-019-first-slice-postgresql-access-and-sql-migrations.md`
- `docs/knowledge/decisions/ADR-020-first-slice-environments-observability-and-release-evidence.md`
- `docs/knowledge/decisions/ADR-021-first-slice-project-command-transport-and-csrf-posture.md`
- `docs/knowledge/decisions/ADR-022-first-slice-verification-stack-and-evidence-plan.md`
- `docs/knowledge/decisions/ADR-023-first-slice-postgresql-schema-and-persistence-invariants.md`
- `docs/knowledge/decisions/ADR-025-modular-monolith-application-modules-and-dependency-boundaries.md`
