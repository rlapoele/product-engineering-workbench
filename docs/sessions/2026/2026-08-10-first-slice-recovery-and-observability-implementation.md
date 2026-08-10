# Session — First-Slice Recovery And Observability Implementation

**Session ID:** 2026-08-10-02

**Date:** 2026-08-10

**Status:** Active implementation

## Context

ADR-020, ADR-022, ADR-023 and the executable specification already select content-free Pino observation, a PostgreSQL operational ledger and an invariant that diagnostics cannot alter a canonical Project-command outcome. The initial code had the `OperationRecorder` Port and `ops.command_outcomes_hourly` schema, but did not wire either adapter to the Project commands.

## Implementation Record

The Project module now observes completed `create_project` and `save_first_goal` commands only after the authoritative result exists. It records command category, success/failure outcome, duration and source revision through its existing `OperationRecorder` Port. Recorder failure is caught outside canonical handling, so it cannot turn a successful or safe failed command into a different result.

The PostgreSQL adapter upserts `ops.command_outcomes_hourly` by hour, command category, outcome and source revision. It stores only count, total duration and maximum duration. The Pino adapter emits one JSON record containing only event, command category, outcome, duration, random correlation ID, environment and source revision; its default host and process bindings are disabled. A best-effort adapter isolates the Pino and ledger sinks, so one diagnostic failure does not suppress the other.

## Automated Evidence

- Unit coverage proves a rejected recorder preserves the authoritative saved-Project result.
- Disposable PostgreSQL integration coverage proves a successful command produces the expected content-free hourly aggregate.
- `npm run verify` passed: static check, production build and 11 Vitest tests.
- The built Node Chromium Playwright journey passed with the new approved Pino log shape.

## Limits

This increment adds no Railway configuration, migration-job release evidence, staging OAuth, backup restoration, external telemetry, alerting, dashboard, manual accessibility work or Product behavior. It does not claim staging or production readiness.

## Documentation Updated

- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Topic

Define the repeatable release-verification command that combines the accepted static, build, Vitest and Playwright checks without adding CI or Railway deployment behavior.
