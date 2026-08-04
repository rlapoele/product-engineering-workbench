# Session — First-Slice Environments, Observability And Release Evidence

**Session ID:** 2026-08-04-05
**Date:** 2026-08-04
**Status:** Crystallized

## Context

The accepted Railway PostgreSQL migration model needs an environment topology, release evidence and diagnostic model that satisfies recovery, release-discipline and privacy gates without requiring a broad third-party observability platform for a solo project.

## Decision

Local development and automated tests use disposable local data. Railway staging is persistent, uses synthetic data and performs full-journey, migration and recovery validation. Railway production is persistent and holds real Product Knowledge. The two Railway environments have separate databases, roles, credentials, Better Auth secrets, OAuth applications and callback origins; production data and credentials never enter staging. PR environments are deferred.

Migration releases and application releases use the same source revision. The private terminating migration job must succeed before the application release proceeds. Staging runs the full first-slice smoke journey; production uses readiness and a non-destructive owner check.

Pino emits restricted JSON logs to Railway. Railway health/resource metrics and a PostgreSQL operational ledger hold content-free command-outcome aggregates and release evidence. No external telemetry vendor, log forwarding, pager, SLO or automatic alerting is selected. Railway recovery is exercised in staging before real content, quarterly and before data-moving or destructive migrations.

## Consequences

- Staging is the authoritative environment for end-to-end release and recovery validation without production data.
- The short Railway Hobby log window is supplemented by durable, deliberately minimal operational evidence.
- The production logging boundary protects confidential Product Knowledge and identities from diagnostic copies.
- No product implementation is authorized by this decision.

## Documentation Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/architecture/backend-architecture.md`
- `docs/knowledge/architecture/system-architecture.md`
- `docs/knowledge/decisions/ADR-020-first-slice-environments-observability-and-release-evidence.md`
- `docs/knowledge/decisions/README.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Topic

Select the remaining concrete application-boundary mechanisms: Astro/Node adapter and API/command transport shape, including CSRF and request-validation posture for the authenticated React Islands.
