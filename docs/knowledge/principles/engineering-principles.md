# Engineering Principles

The Product Engineering Workbench should protect the product knowledge users entrust to it. Engineering quality is therefore part of preserving human control and trust, not a later implementation concern.

## First-Slice Engineering-Quality Baseline

Before the selected first slice is used for real user content, it must satisfy five quality gates:

| Gate | Required evidence |
|---|---|
| Core correctness | Vitest unit/component tests and real-PostgreSQL integration tests prove fixed-starter version `1` Project creation with its expected composition and without a Revision; atomic Goal/Revision 1 save; exact Operation-ID retry behavior; and rejection of mismatched Operation-ID reuse. |
| Authority and privacy | Integration tests prove owner-only Project reads and writes; unauthenticated, non-owner, invalid-origin, missing-origin and malformed-command rejection; and safe error/log/ledger output. Product content, credentials and session secrets do not appear in ordinary logs, telemetry or error messages. |
| Journey and accessibility | Playwright covers the essential journey and an intercepted creation/save network failure with safe retry. `@axe-core/playwright` scans the home, creation, editor, saved and error states. A manual keyboard-only journey and VoiceOver/Safari plus NVDA/Firefox screen-reader journeys verify focus, labels, errors and saved-state feedback. |
| Recovery and observability | Integration tests prove that telemetry/ledger failure does not alter the authoritative command outcome. Privacy-safe structured command outcomes and failure metrics exist for Project creation and Goal save; staging backup restoration is tested before real user content is relied upon. |
| Release discipline | `astro check`, the production build, Vitest unit/component/integration suites and the Playwright journey suite pass before release. Staging verifies the built Node application and synthetic data; production configuration and secrets remain separate from local development; a production-like full journey and recovery check occur; and schema/data changes have tested rollback or recovery. |

User-authored Project knowledge is confidential by default. The first slice must not use analytics or third-party telemetry that captures Project or Goal content by default. If the product is expected to hold regulated or especially sensitive data, a separate security and privacy decision is required before launch.

The baseline does not require an availability SLA, horizontal scaling, a performance benchmark, penetration-test certification, compliance certification or a dedicated staging environment. It does require enough production-like validation to establish that the trusted value loop and recovery path work before users rely on them.

## Implementation Authorization And Platform Lock

Product code for the first slice requires explicit Project Owner Implementation Authorization after acceptance of a local-only Dependency Verification Record. That Record proves one exact Node/package set against the accepted architecture in a disposable temporary harness and Testcontainers PostgreSQL where needed; it does not deploy to Railway, configure OAuth or use Product Knowledge.

The selected quality gates still govern staging and production. Railway migration/application gating, real staging OAuth, recovery exercises, manual assistive-technology evidence and production readiness are release-readiness requirements, not prerequisites for the first local code increment.

## First-Slice Verification Stack

The first slice uses `astro check` and `astro build` for static/type and production-build verification. Vitest is the unit, React-Island component and server-integration runner; React Testing Library and `user-event` test React Islands in JSDOM. Integration tests use Testcontainers PostgreSQL, apply the committed forward migrations and exercise the actual `pg` transaction and authorization paths. Better Auth test utilities live only in a separate test-only auth factory; they create isolated users and sessions for tests and do not add a production route or authentication bypass.

Playwright runs the built Node application with synthetic local data. Chromium is required for every automated browser run; Firefox and Playwright WebKit run as release-candidate smoke coverage. `@axe-core/playwright` provides automated accessibility regression scans, but does not certify accessibility. Failure traces, screenshots and reports may contain only local or staging synthetic data and are never collected from production Product Knowledge.

Manual release evidence records the tested source revision, environment, browser/assistive-technology combination, outcome, defects and known limits. It includes keyboard-only operation of the essential journey, VoiceOver with Safari and NVDA with Firefox. Actual OAuth is exercised in staging with dedicated synthetic test accounts before the first production release and after identity-provider, callback-origin or Better Auth configuration changes; browser tests use test-only sessions rather than a production authentication bypass.
