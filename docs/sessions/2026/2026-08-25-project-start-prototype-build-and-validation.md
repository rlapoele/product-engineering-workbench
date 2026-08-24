# Project-start Prototype Build and Automated Validation

**Date:** 2026-08-25
**Status:** Completed — owner review pending
**Topic:** UX-006 — Project-start prototype validation

## Delivered

An isolated `/prototypes/project-start` route now makes the agreed Project-start state map tangible without joining production navigation or persistence.

- The overview provides a calm empty Project state and a direct creation entry point.
- Greenfield proceeds through Starting Context, basic setup and optional temporary Project-start Notes, then the single honestly preselected MVP template, preset and section selection. Its prepared document offers an optional **Begin with what you know** panel and creates an editable, explicitly unsaved first draft only when the owner selects a shortcut.
- Brownfield shows its Source boundary before creation and exposes **Establish context** only after creation. A local Source Note captures title, evidence and the optional external-AI assistance indication while visibly remaining non-canonical.
- The route has local state only: it adds no authentication, commands, API calls, database records or production-app navigation.

The implementation uses the accepted Astro, Tailwind CSS v4, token and bounded React-island direction. It includes light, dark and system theme controls, keyboard-accessible controls, semantic forms and responsive layouts.

## Validation Evidence

- `npm run verify` passed: Astro static checking, production build and 21 Vitest tests.
- `npm run test:browser` passed with Docker Desktop available: 5 Playwright journeys, including the two Project-start paths and automated axe checks.
- Isolated desktop and narrow-layout inspection showed the intended calm reading surface and no horizontal overflow at a 390px viewport.

During validation, the normal development command exposed a React development JSX-runtime mismatch when `NODE_ENV` was unset. The `dev` script now explicitly sets `NODE_ENV=development`; this fixes hydration for the new prototype and existing React islands without changing the production build path.

## Remaining Review

The owner should review the prototype’s visual and interaction direction before any observations become Product Knowledge or before the next roadmap topic is selected. This evidence validates the implemented state map and technical quality, not user research or final product approval.
