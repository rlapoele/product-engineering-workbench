# Session — First-Slice Project Command Transport And CSRF Posture

**Session ID:** 2026-08-04-06

**Date:** 2026-08-04

**Status:** Crystallized

## Context

The accepted Astro/Node, React-Island, Better Auth and PostgreSQL boundaries establish who is authoritative and which commands are atomic, but left the browser transport, untrusted-input validation and CSRF posture open. The first slice needs a small, testable solution that preserves the retry-safe Project command boundary without introducing a generic API or cross-origin client model.

## Decision

Project reads use owner-scoped `GET` endpoints. Project creation and first-Goal save use dedicated same-origin JSON `POST` Astro endpoints, not a generic command endpoint or mutation through `GET`.

Each write carries an Operation ID and command-specific input. The server bounds and parses the JSON body once, requires a command-specific non-simple header, validates the complete envelope with server-owned Zod schemas, derives authority from the Better Auth session and returns authoritative saved state or a narrow safe result code. Client validation may improve immediate feedback but never authorizes or replaces the server check. Project responses are no-store.

Every unsafe Project command independently requires the exact configured application `Origin`, JSON and the command header; it rejects missing, `null` and non-allowlisted origins and provides no CORS allowance. Better Auth remains configured with explicit trusted origins and its own CSRF controls for authentication routes, but those protections do not replace the Project-command enforcement.

## Consequences

- The command boundary retains a clear future insertion point for a local store and synchronization outbox without implementing either now.
- Component, integration and browser tests can independently exercise input feedback, owner authority, retry behavior and cross-site rejection.
- Error results remain useful to the owner without exposing Project existence, raw request content or internal diagnostics.
- No product implementation is authorized by this decision.

## Documentation Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/architecture/frontend-architecture.md`
- `docs/knowledge/architecture/backend-architecture.md`
- `docs/knowledge/architecture/system-architecture.md`
- `docs/knowledge/decisions/ADR-021-first-slice-project-command-transport-and-csrf-posture.md`
- `docs/knowledge/decisions/README.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Topic

Select the first-slice verification stack and evidence plan: unit, integration and browser-test tooling; the exact automated test matrix for the five quality gates; and the manual keyboard and screen-reader-oriented release checks.
