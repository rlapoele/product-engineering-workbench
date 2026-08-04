# Session — First-Slice OAuth Identity Mechanism

**Session ID:** 2026-08-04-02  
**Date:** 2026-08-04  
**Status:** Crystallized

## Context

The minimal access and identity contract requires an authenticated, server-derived owner identity but did not select an authentication mechanism. The selected technology direction favors Better Auth in an Astro/Node application, and the Project Owner chose to support both Google and GitHub OAuth rather than password authentication.

## Decision

The first slice uses Better Auth with Google and GitHub OAuth only. The server derives the stable opaque user identity from the authenticated Better Auth session and records that identity as immutable Project ownership.

Google and GitHub may be automatically associated only through Better Auth's ordinary verified-email behavior. The configuration does not force provider association through a trusted-provider override, does not allow different-email account linking and exposes no manual linking or provider-account settings UI.

Email/password authentication, anonymous access, magic links, passkeys, transactional-email delivery, password recovery and account-management behavior remain deferred.

## Consequences

- Google and GitHub OAuth configuration, callback origins and secrets become first-slice production configuration.
- GitHub must request `user:email`.
- Tests must prove that authority remains session-derived and owner-only across both provider paths, including safe same-email association and missing-email denial.
- No product implementation is authorized by this decision.

## Documentation Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/architecture/system-architecture.md`
- `docs/knowledge/architecture/backend-architecture.md`
- `docs/knowledge/decisions/ADR-014-first-slice-access-and-identity-contract.md`
- `docs/knowledge/decisions/ADR-017-first-slice-oauth-identity-mechanism.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Topic

Decide whether native light-DOM Web Components should provide the first-slice client interaction layer, and whether a Signals-compatible state primitive is warranted within those bounded components.
