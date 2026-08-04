# ADR-017 — First-Slice OAuth Identity Mechanism

**Status:** Accepted

**Date:** 2026-08-04

---

## Context

The accepted access and identity contract requires an authenticated, server-derived owner identity but deliberately deferred the authentication mechanism. The chosen first-slice stack needs a concrete, proportionate way to establish sessions without adding password storage, transactional-email delivery or account-recovery product scope.

## Decision

Use Better Auth inside the Astro/Node application as the first-slice authentication mechanism. It exposes Google OAuth and GitHub OAuth only.

The server derives its stable opaque user identity from the authenticated Better Auth session. It never treats a browser-submitted email address, Google account identifier or GitHub account identifier as Project authority. Project ownership remains the immutable server-recorded user identity defined by ADR-014.

Google and GitHub are the only enabled sign-in providers. GitHub configuration requests the `user:email` scope. The implementation accepts a provider account only when Better Auth receives the identity information required to establish its user record; it does not invent a fallback email identity.

The two providers may be automatically associated only through Better Auth's normal verified-email behavior. The configuration must not use a `trustedProviders` override to force association from an unverified provider claim. The first slice exposes no provider-account settings or manual account-linking UI, and does not allow different-email account linking.

Email/password authentication, magic links, passkeys, anonymous access, email-delivery configuration, password recovery, provider-account management and future collaboration identity behavior remain deferred.

## Rationale

Google offers a broadly familiar login path and GitHub aligns with the first target user as an AI-assisted developer. Supporting both avoids making either audience choose a single external identity provider, while verified-email-only association avoids treating an unverified email claim as account authority. Omitting password authentication keeps the first slice focused on the selected owner journey and avoids a separate email/recovery operational system.

## Consequences

- Every protected route and command derives its current user from the Better Auth session before applying Project ownership checks.
- Integration tests must cover unauthenticated access, distinct Google/GitHub owners, verified same-email provider association, missing-email denial, privacy-preserving non-owner results and session-expiry retry behavior.
- Better Auth's authentication tables are distinct from canonical Product Knowledge and must be handled by the selected migration/recovery mechanism.
- The selected provider configuration, client secrets, redirect origins and session secret are production secrets; they must not be logged or committed.
- Account recovery and richer identity behavior remain explicit future decisions rather than implicit consequences of enabling two providers.

## Alternatives Considered

### One OAuth provider only

This would reduce configuration but unnecessarily requires a developer-oriented user to use Google or a general user to use GitHub when both are widely appropriate for the initial audience.

### Email/password plus social providers

This would broaden access, but introduces password storage, verification-email delivery, reset/recovery and associated abuse controls before the first slice demonstrates value.

### Force association for Google and GitHub

Trusting unverified provider email claims would make a same-email association easier, but weakens the owner-identity boundary and can increase account-takeover risk.

## Related Documents

- `docs/glossary/glossary.md`
- `docs/knowledge/architecture/system-architecture.md`
- `docs/knowledge/architecture/backend-architecture.md`
- `docs/knowledge/decisions/ADR-014-first-slice-access-and-identity-contract.md`
- `docs/knowledge/decisions/ADR-013-first-slice-engineering-quality-baseline.md`
