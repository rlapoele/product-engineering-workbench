# Workbench Interface Foundation

**Date:** 2026-08-25
**Status:** Crystallized
**Topic:** UX-006 — Workbench UX/UI prototype direction

## Context

The upcoming high-fidelity Project-start mockups need a durable visual and frontend implementation direction. That direction must support polished responsive accessible UI without confusing the Workbench's own presentation with a user's authored Design System Definition.

## Decision

The Workbench uses Astro and semantic HTML for server-rendered pages and small stateless components, Tailwind CSS v4 utilities without `@apply`, and React Islands only for bounded interactivity. TypeScript favors pure functions, closures, single responsibility and readable names.

The global stylesheet defines primitive, semantic and component CSS-token layers. Colors use `oklch`; dimensions use `rem`; semantic tokens reference primitives only; component tokens reference semantic tokens only. Resolved `data-color-theme` light/dark state is separate from a `data-color-theme-preference` of system, light or dark.

Urbanist variable font is used for controls and structured information, and Lora variable font for long-form specification prose. The visual direction is calm and document-centered: restrained hues, generous whitespace, subtle surfaces and sparing soft shadows. Responsive, accessible presentation includes appropriate contrast, keyboard focus, reduced-motion and forced-color support. Heroicons are the sole icon set, preferably rendered through small Astro components when static.

## Boundary

This is a Workbench frontend implementation foundation, not a constraint on users' Design System Definitions or handoff output. High-fidelity mockups may use it with static data and local interaction state, but it does not authorize production persistence, authentication, APIs or domain commands.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/architecture/frontend-architecture.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/knowledge/decisions/ADR-028-workbench-interface-foundation.md`
- `docs/planning/current-focus.md`
- `docs/sessions/index.md`
