# Session — First-Slice Access And Identity Contract

**Session ID:** 2026-08-01-07  
**Date:** 2026-08-01  
**Status:** Crystallized

## Context

The selected first slice already had authenticated entry, a server-authoritative ownership boundary and an owner-only quality gate, but had not yet specified the minimum identity source, access behavior, privacy response or session-expiry recovery required to make those statements testable before technology selection.

## Decision

Every Project view and command requires an authenticated user. The identity boundary supplies the server with one stable, opaque user identifier derived from the authenticated session. The browser never selects or submits a Project owner identifier as authority.

Project creation atomically assigns that identifier as the immutable Project owner. Listing returns only the owner's Projects; load and write operations require a matching owner. A request for another user's Project returns a privacy-preserving not-found result without confirming that it exists.

If authentication expires, the server does not execute the command. The browser preserves visible unsaved input for retry after reauthentication but never represents it as saved. An existing Operation ID may be retained only when the same authenticated user resumes the retry.

Anonymous Projects, sharing, invitations, collaborators, ownership transfer, delegated authority, account/profile management and authentication-provider mechanics are deferred.

## Consequences

- The accepted owner-only privacy gate now has explicit access and recovery behavior to test.
- Identity-provider and account mechanics remain technology and product decisions for later work.
- The next prerequisite is independent of identity: define the default source for Project `contentLocale`.

## Documentation Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/architecture/system-architecture.md`
- `docs/knowledge/architecture/backend-architecture.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/decisions/ADR-014-first-slice-access-and-identity-contract.md`
- `docs/knowledge/decisions/README.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Topic

Define the default source for Project `contentLocale`, preserving one Project-level content locale without committing to localization workflow or artifact-level localization.
