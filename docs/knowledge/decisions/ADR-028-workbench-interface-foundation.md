# ADR-028 — Workbench Interface Foundation

**Status:** Accepted

**Date:** 2026-08-25

---

## Context

The Workbench needs high-fidelity visual prototypes and later production UI that feel coherent, accessible and appropriately calm for sustained specification reading and authoring. The repository already accepts Astro server rendering with bounded React Islands and includes Tailwind CSS v4, but lacked a durable visual implementation standard. Product-authored Design System Definitions are distinct handoff-oriented Product Knowledge and must not become an implicit frontend implementation prescription.

## Decision

Use Astro for server-rendered pages and small stateless interface components, semantic HTML by default, Tailwind CSS v4 utilities without `@apply`, and React Islands only where bounded client interaction requires them. Keep mockup-only interaction state local; do not turn visual exploration into persistence, authentication, API or domain-command implementation.

Define the Workbench Interface Foundation in a global stylesheet using CSS custom properties:

1. Primitive tokens contain raw `oklch` color values, variable-font values and `rem`-based dimensions.
2. Semantic tokens reference primitive tokens only and name the visual purpose.
3. Component tokens reference semantic tokens only and name a reusable component's local treatment.

Use resolved `data-color-theme="light"|"dark"` and separately retain `data-color-theme-preference="system"|"light"|"dark"`. The two themes provide equivalent semantic token roles. Use Google Fonts variable **Urbanist** for interface and structured information and **Lora** for long-form specification prose. Use conservative fluid typography, including a root `clamp()` size that does not reduce below the normal browser baseline.

Adopt a calm, document-centered visual direction: restrained hues, generous fluid whitespace, subtly layered surfaces and soft, limited shadows. Target WCAG 2.2 AA contrast for ordinary text and controls; support keyboard operation, visible focus, reduced motion and forced colors. Use mobile-first layout, viewport media queries for page-level changes and container queries for reusable components. Use Heroicons, preferring a small server-rendered Astro icon component for static usage.

## Rationale

Token layering makes visual meaning explicit and themeable while preventing local components from depending directly on raw values. The resolved-theme and preference distinction supports system-following behavior without losing a user's explicit choice.

The Urbanist/Lora pairing gives compact product controls a contemporary, clear voice and long-form product thinking an editorial reading surface. Calm visual density and generous whitespace fit the Workbench's document-first purpose more closely than dashboard-oriented treatment.

Keeping React limited to interaction preserves Astro's server-rendered clarity and limits client complexity. Container queries let reusable interface parts respond to their actual available space rather than to an unrelated viewport.

## Consequences

- Future Workbench UI and visual prototypes share one implementation-level visual standard.
- User-authored Design System Definitions and generated design companions remain independent of these frontend choices.
- New semantic or component tokens must preserve the declared dependency direction and accessible light/dark pairings.
- A mockup may establish visual and interaction direction, but does not authorize production domain behavior.
- A later change to font delivery, token vocabulary, icon mechanism or theming behavior requires an explicit, evidence-based update to this decision.

## Alternatives Considered

### Use raw colors and local styling case by case

This would make themes, contrast review and visual consistency unnecessarily difficult, especially as the document interface grows.

### Treat a user's Design System Definition as the Workbench UI system

That would conflate Project Product Knowledge with the Workbench's own implementation and would make a handoff-oriented artifact control the authoring tool's presentation.

### Use React for all interface components

This would expand client-side complexity for static content that Astro can render directly, contrary to the existing bounded-Island architecture.

## Related Documents

- `docs/glossary/glossary.md`
- `docs/knowledge/architecture/frontend-architecture.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/knowledge/decisions/ADR-018-first-slice-browser-interaction-architecture.md`
