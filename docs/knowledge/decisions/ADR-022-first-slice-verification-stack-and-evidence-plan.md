# ADR-022 — First-Slice Verification Stack And Evidence Plan

**Status:** Accepted

**Date:** 2026-08-05

---

## Context

The first slice has a defined owner journey, server-authoritative command boundary, OAuth identity mechanism, PostgreSQL migration path and five engineering-quality gates. It now needs one proportionate verification stack and an explicit evidence plan so that correctness, authority, accessibility, recovery and release decisions can be demonstrated rather than inferred from a happy path.

## Decision

Use `astro check` and `astro build` for static/type and production-build verification.

Use Vitest for unit, React-Island component and server-integration tests. React Testing Library and `user-event` test React Islands in JSDOM. Integration tests use Testcontainers PostgreSQL, apply the committed forward migrations and exercise actual `pg` transactions and database authorization predicates. Better Auth test utilities exist only in a separate test-only auth factory; they create isolated test users and sessions but are not a production route, configuration or authentication bypass.

Use Playwright against the built Node application with synthetic local data. Chromium runs every automated browser journey. Firefox and Playwright WebKit provide release-candidate smoke coverage. Use `@axe-core/playwright` to scan home, creation, editor, saved and error states for automatically detectable accessibility regressions. Failure traces, screenshots and reports may contain only local or staging synthetic data and are never collected from production.

The required evidence is:

| Gate | Automated evidence | Manual or operational evidence |
|---|---|---|
| Core correctness | Fixed starter v1 composition without a Revision; atomic Goal/Revision 1 save; exact Operation-ID replay; mismatched-reuse rejection. | — |
| Authority and privacy | Owner-only reads/writes; unauthenticated, non-owner, invalid-origin, missing-origin and malformed-command rejection; safe errors and content-free logs/ledger. | Test fixtures contain no real Product Knowledge, credentials or secrets. |
| Journey and accessibility | Essential Playwright journey; intercepted creation/save network failure and retry; axe scans of defined interaction states. Results are retained in the committed suite and source-revision evidence records. | Manual VoiceOver/Safari validation is deferred until the MVP is built or its implementation reaches that stage; a human-followable scenario template must be created before it is run. |
| Recovery and observability | Telemetry/ledger failure does not change a successful canonical command result. | Staging restoration exercise and release-evidence review. |
| Release discipline | Static/build checks, Vitest suites and Playwright suite pass before release. | Staging smoke journey; production readiness and non-destructive owner check; recovery evidence for schema/data changes. |

Generated Playwright reports and traces are transient synthetic-only diagnostics. The committed suite plus a source-revision evidence record retain the current automated result in the repository. Manual accessibility evidence is not a current implementation requirement. When the MVP is built or its implementation reaches that stage, add and use a VoiceOver/Safari scenario template that records source revision, environment, browser/assistive-technology combination, outcome, defects and known limits. Dedicated synthetic staging accounts exercise actual Google and GitHub OAuth before the first production release and after identity-provider, callback-origin or Better Auth configuration changes. Ordinary browser tests use test-only sessions instead of automating a production OAuth flow.

## Rationale

Vitest shares the Astro/Vite TypeScript and JSX environment while keeping pure command and component behavior fast to exercise. A real disposable PostgreSQL instance verifies the selected direct-SQL, migration, transaction and authorization model without risking persistent data or relying on mocks for database behavior.

Playwright exercises the browser journey through the built Node application and preserves useful synthetic-only failure diagnostics. Axe catches a bounded set of common accessibility regressions; the selected keyboard and screen-reader paths address interaction and announcement behavior that automated scanning cannot establish.

Using test-only Better Auth helpers keeps authenticated test setup explicit without extending the production authentication surface. Staging remains the place for genuine OAuth, release and recovery evidence, in line with the existing environment model.

## Consequences

- Test setup requires a Docker-capable local or automated-test environment for disposable PostgreSQL containers.
- The application must keep the production auth factory separate from the test-only auth factory.
- The release workflow requires a repeatable aggregate verification command that runs static checks, build, Vitest suites and the Playwright journey suite before a staging or production release.
- Chromium is the everyday browser automation baseline; Firefox/WebKit smoke coverage remains release-candidate coverage. Automated results do not establish accessibility conformance; the later VoiceOver/Safari template provides the selected minimum manual evidence when manual validation begins.
- Test recordings, test databases and staging accounts remain synthetic and must follow the same confidentiality boundary as operational diagnostics.
- No hosted CI provider, coverage-percentage threshold, visual-regression vendor, full cross-browser matrix, accessibility certification or production browser recording is selected.

## Alternatives Considered

### Mocked database integration tests

Mocks would make tests fast but cannot establish that committed migrations, PostgreSQL transactions, role grants and SQL owner predicates behave together. Testcontainers keeps the database disposable while testing the selected persistence path.

### Browser-only testing

Browser tests are essential for the owner journey but are slow and imprecise for transaction, retry, logging and authorization edge cases. Layered unit, integration and browser evidence gives each concern the smallest credible test surface.

### Automated accessibility scans as the only accessibility evidence

Automated scans identify only some detectable issues. Keyboard operation and actual screen-reader output require the selected manual checks.

### Automated external OAuth for every browser test

Provider login automation adds external availability, account and anti-automation dependencies to ordinary tests. Test-only sessions cover application behavior; dedicated synthetic accounts verify real OAuth at the staging moments that can affect it.

## Related Documents

- `docs/knowledge/principles/engineering-principles.md`
- `docs/knowledge/architecture/system-architecture.md`
- `docs/knowledge/decisions/ADR-013-first-slice-engineering-quality-baseline.md`
- `docs/knowledge/decisions/ADR-017-first-slice-oauth-identity-mechanism.md`
- `docs/knowledge/decisions/ADR-019-first-slice-postgresql-access-and-sql-migrations.md`
- `docs/knowledge/decisions/ADR-020-first-slice-environments-observability-and-release-evidence.md`
- `docs/knowledge/decisions/ADR-021-first-slice-project-command-transport-and-csrf-posture.md`
