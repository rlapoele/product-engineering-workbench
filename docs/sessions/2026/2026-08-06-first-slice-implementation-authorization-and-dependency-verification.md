# Session — First-Slice Implementation Authorization And Dependency Verification

**Session ID:** 2026-08-06-04

**Date:** 2026-08-06

**Status:** Crystallized

## Context

The accepted ADR set made the first slice specification-complete, but exact versions and the selected toolchain still needed evidence. The Project Owner asked whether this verification required Railway, making the distinction between local platform lock and release readiness explicit.

## Decision

The platform lock is a local-only disposable Dependency Verification Exercise. It tests a Node `24` candidate with Node `22` as the accepted minimum fallback and one exact package set in a temporary harness, optionally using Testcontainers PostgreSQL. The resulting Record includes build, adapter, generated Better Auth `auth`-schema DDL, migration, and test-tooling compatibility evidence. It creates no repository product code/migrations and performs no Railway deployment, OAuth configuration or real-data use.

Only after the Owner accepts that Record and explicitly authorizes ADR-026's named slice may repository product code begin. Railway migration gating, staging OAuth, recovery, automated/manual quality evidence and production readiness remain independent later release gates.

## Consequences

- No unresolved product/architecture decision blocks the first slice; platform compatibility is the next required evidence.
- The verification harness is not an implementation shortcut or a deployment.
- An incompatible candidate must be replaced and accepted before code begins.
- No product code was created by this decision.

## Documentation Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/architecture/first-slice-executable-specification.md`
- `docs/knowledge/principles/engineering-principles.md`
- `docs/knowledge/decisions/ADR-027-first-slice-implementation-authorization-and-dependency-verification.md`
- `docs/knowledge/decisions/README.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Topic

Authorize and run the local-only Dependency Verification Exercise: establish the temporary harness, verify the exact Node/package candidates and generated Better Auth DDL, then review its record before granting first-slice product-code authorization.
