# ADR-021 — First-Slice Project Command Transport And CSRF Posture

**Status:** Accepted

**Date:** 2026-08-04

---

## Context

The first slice has an Astro server-rendered presentation, bounded React Islands, Better Auth sessions, server-authoritative Project State and retry-safe atomic commands. It needs a concrete browser-to-server transport, input-validation boundary and CSRF posture that preserve those decisions without prematurely selecting a general-purpose API or client synchronization system.

## Decision

Use owner-scoped `GET` endpoints for Project reads and two dedicated same-origin JSON `POST` Astro endpoints for writes: Project creation and first-Goal save. Do not expose a generic command endpoint, a cross-origin API or a mutation through `GET`.

Every write request contains a caller-generated Operation ID and only the input required by its command. The server accepts a bounded JSON body, requires a command-specific non-simple request header, parses the body once and validates the complete untrusted envelope with server-owned Zod schemas before any application command or database transaction executes. React Islands may reuse schemas for immediate feedback, but client validation is never authorization or a substitute for server validation.

The server derives the current user from Better Auth, enforces Project ownership and returns a discriminated, safe result contract: authoritative saved Project state and Goal Revision state on success; or a safe validation, unauthenticated, privacy-preserving not-found, Operation-ID-reuse or temporary-unavailability code on failure. It does not return raw parser, database or exception details. Project responses carry `Cache-Control: no-store`.

Each unsafe Project command independently enforces CSRF posture. It requires an exact configured application `Origin` for the current environment, JSON content type and the command header, rejects absent, `null` or non-allowlisted origins, and supplies no CORS allowance. The configured origin is not derived from an untrusted request host. The browser uses same-origin credentials. Better Auth remains configured with its explicit trusted origins and its CSRF protections enabled for authentication routes; those controls do not replace the application command check.

## Rationale

Dedicated resource-oriented endpoints make the two first-slice commands observable and testable without making a generic RPC protocol a public architectural commitment. JSON transport fits the selected React-Island pending, error and retry states while an explicit Operation ID preserves the later offline-evolvable command seam.

Server-owned schemas establish one authority for malformed or semantically invalid input. Narrow result codes preserve useful local recovery without exposing confidential Product Knowledge, ownership facts or diagnostic internals.

Session cookies make cross-site mutation a relevant threat even when authentication uses Better Auth. Exact origin validation, a non-simple JSON request shape and no CORS surface provide a simple, independently testable application boundary. Better Auth's protections remain necessary for its own routes, but custom Project endpoints require their own enforcement.

## Consequences

- Browser, integration and component tests must prove valid same-origin saves, exact Operation-ID retry, mismatched reuse rejection, safe invalid-input feedback, session-expiry preservation, non-owner privacy, and rejection of cross-origin, missing-origin and simple-form attempts.
- The server must treat all command input and headers as untrusted and must keep schema, body-size and origin checks ahead of command execution.
- Logs and the operational ledger continue to record only approved content-free command outcome categories; they do not receive bodies, field values, identifiers or raw error details.
- A later local Project store, outbox or synchronization layer may implement the same client-facing data and command interface without changing canonical server authority.
- CSRF-token rotation, browser extension/mobile clients, cross-origin consumers, a generic RPC protocol, persistent client caching and a broader API versioning strategy remain deliberate future decisions.

## Alternatives Considered

### Astro Actions or HTML form post/redirect/get as the primary command transport

Both could support server-side validation, but the selected React-Island interaction model needs explicit local pending, retry and safe error-result handling. Dedicated JSON endpoints make that boundary clearer without changing the server-rendered page architecture.

### One generic `POST /api/commands` endpoint

This would reduce the first two routes to one transport surface, but prematurely defines a broad RPC envelope and makes command-specific validation, testing and future evolution less explicit.

### Rely on Better Auth CSRF controls or SameSite cookies alone

Better Auth protects its authentication routes, and SameSite cookies reduce risk, but neither is an explicit application-boundary policy for custom Project commands. The selected model keeps protection direct and testable at every unsafe Project endpoint.

### Client-only validation or broad CORS support

Client-only validation would let malformed input reach the server and would not constrain non-browser callers. Broad CORS would enlarge the authority and CSRF surface before any consumer requires it.

## Related Documents

- `docs/glossary/glossary.md`
- `docs/knowledge/architecture/frontend-architecture.md`
- `docs/knowledge/architecture/backend-architecture.md`
- `docs/knowledge/architecture/system-architecture.md`
- `docs/knowledge/decisions/ADR-009-online-first-offline-evolvable-posture.md`
- `docs/knowledge/decisions/ADR-014-first-slice-access-and-identity-contract.md`
- `docs/knowledge/decisions/ADR-017-first-slice-oauth-identity-mechanism.md`
- `docs/knowledge/decisions/ADR-018-first-slice-browser-interaction-architecture.md`
- `docs/knowledge/decisions/ADR-019-first-slice-postgresql-access-and-sql-migrations.md`
