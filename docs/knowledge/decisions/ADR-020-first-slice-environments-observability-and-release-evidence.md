# ADR-020 — First-Slice Environments, Observability And Release Evidence

**Status:** Accepted

**Date:** 2026-08-04

---

## Context

The accepted Railway PostgreSQL and two-gate migration model needs proportionate environment separation, release verification and privacy-safe diagnosis. The project is solo and operates on Railway Hobby, where service logs are short-lived and platform metrics do not capture application-level behavior. Product Knowledge is confidential by default.

## Decision

Use three execution contexts:

| Context | Purpose | Data | Release behavior |
|---|---|---|---|
| Local | Development and automated tests | Disposable local data | No Railway release |
| Railway staging | Full journey, recovery and release verification | Synthetic data only | Migration release, then application release |
| Railway production | Real Product Knowledge | Production data only | Deliberate migration release, then application release |

Staging and production are independent Railway environments. Each has its own PostgreSQL service and roles, application and migration credentials, Better Auth secrets, and Google/GitHub OAuth application configuration with environment-specific callback origins. Production data and credentials never enter staging. PR environments are deferred.

For staging and production, a private terminating migration job runs before the application release from the same source revision. The migration job records a content-free migration outcome. The application release records its readiness result. Staging then runs the complete selected first-slice smoke journey. Production runs readiness and a non-destructive owner check; it does not create or alter production Product Knowledge merely to test a release. Application auto-deployment must not bypass this gate.

Use Pino to emit one JSON object per line to Railway stdout/stderr. Production logs may contain only approved technical fields: event name, command category, outcome, duration, random request correlation identifier, environment, source revision and approved error classification. The logging contract prohibits Product Knowledge, user, Project or Goal identifiers, email addresses, request bodies, raw routes, SQL, SQL parameters, credentials, authorization headers, cookies, session material, exception messages and stacks. Pino redaction is configured as a second protective layer, not as permission to submit unsafe data to a log call.

Maintain a content-free operational ledger in PostgreSQL, separate from canonical Product Knowledge. It stores hourly command-outcome aggregates and Operational Release Evidence. A telemetry update is best effort and must not alter the authoritative outcome or transaction contract of a Project command.

Use Railway's deployment health and resource metrics for platform diagnosis. Do not add a third-party observability vendor, log forwarding, pager, SLO, automated alerting or PR environment in the first slice. The Project Owner reviews Railway's dashboard after releases and during an incident.

Enable Railway point-in-time recovery when available. Before real content, exercise a staging restoration to a sibling service and the deliberate cutover procedure. Repeat this exercise quarterly and before a data-moving or destructive migration. If point-in-time recovery is unavailable, use an equivalent scheduled-backup and tested-restoration procedure.

## Rationale

A persistent staging environment gives the solo project a realistic, isolated place to exercise authentication, migration, complete journeys and recovery without placing confidential Product Knowledge at risk. Deferring PR environments avoids premature cost, secret and OAuth-callback complexity.

Railway logs are useful for short-term investigation, but Hobby retention is limited and Railway does not collect application-level latency or error metrics. A deliberately small operational ledger preserves the specific release and aggregate evidence required by the first-slice quality gates without exporting confidential data to another vendor.

The strict production logging contract improves privacy and reduces the risk that an operational investigation becomes a second uncontrolled copy of Product Knowledge.

## Consequences

- Local, staging and production data are never interchangeable; staging fixtures are synthetic.
- OAuth provider setup, Better Auth secrets and database credentials are separately maintained per Railway environment.
- Migration and application releases are traceable to one source revision and have durable, content-free evidence.
- Railway logs remain a short-term diagnostic aid, while the operational ledger retains the approved aggregate and release facts.
- Detailed application metrics, longer log retention, error tracking, paging, SLOs and release automation remain deliberate future decisions.
- Recovery is an exercised operational capability, not a claim based solely on a configured backup feature.

## Alternatives Considered

### Production only

This would reduce cost but would make the first meaningful migration, authentication and recovery checks unsafe to perform against real Product Knowledge.

### PR environments from the first slice

These would provide additional isolation but require more services, credentials, OAuth redirect configuration and operational cost before the solo project needs them.

### Third-party telemetry or error tracking from the first slice

This could offer richer dashboards and alerting, but creates another confidential-data processor and configuration surface before Railway logs, resource metrics and the small operational ledger have proven insufficient.

### Railway logs as the only evidence

Hobby log retention is too short for durable release and recovery evidence, and Railway's built-in metrics omit application-level outcomes.

## Related Documents

- `docs/glossary/glossary.md`
- `docs/knowledge/architecture/backend-architecture.md`
- `docs/knowledge/architecture/system-architecture.md`
- `docs/knowledge/decisions/ADR-013-first-slice-engineering-quality-baseline.md`
- `docs/knowledge/decisions/ADR-019-first-slice-postgresql-access-and-sql-migrations.md`
