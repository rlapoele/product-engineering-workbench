# ADR-014 — First-Slice Access And Identity Contract

**Status:** Accepted

**Date:** 2026-08-01

---

## Context

The selected first slice requires an authenticated Project Owner and server-enforced owner-only authority, but its system-boundary and quality decisions intentionally left the access and identity behavior unspecified. Before technology selection, the slice needs a minimal contract that prevents browser-selected ownership, accidental disclosure of another user's Project and ambiguous recovery when authentication expires.

## Decision

Every Project view and command in the first slice requires an authenticated user. The identity boundary supplies the server application with one stable, opaque user identifier. The server derives this identity from the authenticated session; the browser never selects or submits an owner identifier as authority.

Creating a Project atomically assigns the authenticated user's identifier as the Project's immutable owner. The server lists only that owner's Projects and permits load, Project creation and Goal-save commands only for the matching owner. A request for a Project not owned by the current user returns a privacy-preserving not-found result and does not confirm that the Project exists.

If authentication expires, a command is not executed. The browser keeps visible unsaved input available for retry after reauthentication without presenting it as saved. A retry can retain its Operation ID only when the same authenticated user resumes it.

The first slice has no anonymous Projects, sharing, invitations, collaborators, ownership transfer, delegated authority, account/profile management or roles beyond the Project Owner. Authentication provider, credential, account-recovery and session-implementation choices remain deferred.

## Rationale

This contract is the smallest behavioral boundary that makes the accepted owner-only privacy gate meaningful. It keeps canonical authority on the server, preserves the retry-safe command model and avoids exposing whether confidential Project knowledge exists. It also leaves identity technology and later collaboration design open.

## Consequences

- Every first-slice journey begins from authenticated entry and never relies on browser-held ownership claims.
- Authorization tests must cover cross-user list, load and command attempts, including privacy-preserving denial.
- Session-expiry recovery preserves the user-visible draft but requires the same user before reuse of an existing Operation ID.
- Collaboration and richer account behavior remain separate decisions rather than implicit extensions of the first slice.

## Alternatives Considered

### Anonymous or browser-owned Projects

This would weaken confidential-by-default Product Knowledge handling and make later server-authoritative ownership harder to establish safely.

### Expose an explicit forbidden response for another user's Project

This would reveal that a confidential Project exists without offering a useful first-slice capability.

### Minimal authenticated owner-only contract

This was selected because it directly supports the chosen first-use journey, privacy boundary and retry model without choosing identity technology or prematurely designing collaboration.

## Related Documents

- `docs/glossary/glossary.md`
- `docs/knowledge/architecture/system-architecture.md`
- `docs/knowledge/architecture/backend-architecture.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/decisions/ADR-010-first-slice-system-boundaries.md`
- `docs/knowledge/decisions/ADR-011-first-slice-data-and-lifecycle-contracts.md`
- `docs/knowledge/decisions/ADR-013-first-slice-engineering-quality-baseline.md`
