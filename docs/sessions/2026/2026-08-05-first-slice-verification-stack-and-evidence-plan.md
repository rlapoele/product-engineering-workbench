# Session — First-Slice Verification Stack And Evidence Plan

**Session ID:** 2026-08-05-01

**Date:** 2026-08-05

**Status:** Crystallized

## Context

The first slice has five accepted engineering-quality gates but needed a selected stack and exact evidence allocation across unit, integration, browser, manual and operational checks. The evidence must cover a trusted owner journey without treating a successful browser happy path, an automated accessibility scan or an OAuth test bypass as sufficient proof.

## Decision

`astro check` and production build verify static/type and build integrity. Vitest, React Testing Library and user-event cover pure and React-Island behavior. Testcontainers PostgreSQL runs committed migrations and exercises actual server/database behavior; Better Auth test utilities live only in a separate test auth factory, not in production.

Playwright runs the built Node application with synthetic local data. Chromium is required for automated journeys; Firefox and WebKit run as release-candidate smoke coverage. Axe scans defined interaction states for automatically detectable accessibility issues, while manual release evidence requires keyboard-only, VoiceOver/Safari and NVDA/Firefox essential journeys.

The test matrix explicitly assigns command correctness, authority/privacy, journey/accessibility, recovery/observability and release-discipline evidence to the smallest credible automated, manual or operational check. Staging real OAuth uses dedicated synthetic Google and GitHub accounts before initial production and after identity configuration changes; ordinary browser tests use test-only sessions.

## Consequences

- Automated test failures can be diagnosed through synthetic-only browser artifacts without exposing production Product Knowledge.
- Tests prove real PostgreSQL and session behavior while keeping persistent environments and external OAuth out of ordinary local runs.
- Manual accessibility evidence remains required and recorded even when all browser and axe tests pass.
- No product implementation is authorized by this decision.

## Documentation Updated

- `docs/knowledge/principles/engineering-principles.md`
- `docs/knowledge/architecture/system-architecture.md`
- `docs/knowledge/decisions/ADR-022-first-slice-verification-stack-and-evidence-plan.md`
- `docs/knowledge/decisions/README.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Topic

Define the first-slice PostgreSQL schema and persistence invariants: tables, identifiers, ownership and uniqueness constraints, Operation-ID outcome retention, Revision snapshot shape, Better Auth schema placement, operational-ledger separation and transaction boundaries.
