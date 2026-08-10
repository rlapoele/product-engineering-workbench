# Session — First-Slice Release Verification Command

**Session ID:** 2026-08-10-03

**Date:** 2026-08-10

**Status:** Active implementation

## Context

ADR-022 requires one repeatable aggregate verification command before a staging or production release. The repository already had `npm run verify` for static checks, production build and Vitest, plus a separate `npm run test:browser` for the built Node Chromium/axe journey. The combination was manual.

## Implementation Record

`npm run verify:release` now runs `npm run verify` followed by `npm run test:browser`. It preserves the faster existing `verify` command for ordinary local feedback while providing one explicit command for the accepted aggregate evidence.

The command does not configure CI, Railway, OAuth, migration jobs, staging, production, release approval or deployment. Its database and browser data remain disposable and synthetic through the existing Testcontainers and test-only Better Auth setup.

## Automated Evidence

`npm run verify:release` passed locally: static checks and production build completed, all 11 Vitest tests passed, and the built Node Chromium Playwright/axe journey passed.

## Documentation Updated

- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Topic

Review the remaining first-slice release-readiness boundaries and choose the next authorized local implementation increment, without configuring Railway or real OAuth.
