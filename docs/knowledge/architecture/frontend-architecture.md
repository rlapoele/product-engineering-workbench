# Frontend Architecture

The first-slice frontend is the browser presentation boundary of the online modular monolith. Astro provides the server-rendered page composition; React Islands provide the bounded interactive areas.

## Responsibilities

The frontend renders authenticated entry, the first-use Project home, Project creation, the fixed-starter Specification and inline Goal authoring. It owns transient interaction state, including the private in-progress Goal draft before `Done editing`.

It accesses Project reads and writes through a client-facing Project data and command boundary. For the first slice, the boundary uses owner-scoped `GET` requests and two dedicated same-origin JSON `POST` endpoints: Project creation and first-Goal save. Each write submits a caller-generated Operation ID with command-specific input, then replaces local presentation state only with the authoritative saved result returned by the server. This keeps components independent of remote persistence details and preserves a future insertion point for local Project storage and synchronization.

The browser-side Project client is an HTTP adapter to those public contracts. Astro pages and React Islands may depend on that client-facing boundary and shared transport contracts, but never import server application internals, Better Auth, PostgreSQL, Railway configuration or archive/resource adapters.

The executable first-slice layout places thin Astro UI and JSON adapters in `src/pages/`, React Islands in `src/islands/`, and the browser Project client in `src/adapters/browser/project-http-client.ts`. The framework-required page files delegate into the server Composition Root rather than owning application policy.

## Limits

The frontend does not decide whether a user owns a Project, write canonical Project State directly or create a Revision merely because a user types. It submits explicit commands with `credentials: "same-origin"`, JSON content and the required command header, and renders the authoritative saved Project and Revision state returned by the server application. It does not call cross-origin command endpoints.

React component state and hooks are the first-slice reactivity mechanism. An Island owns only the interaction state needed for its rendered boundary, such as form input, pending state, validation feedback and recovery presentation. It may reuse the shared command schema for immediate feedback, but server validation remains authoritative. It must not treat local state as canonical Project State, cache private Project content for offline use or infer that an explicit command succeeded before the server returns authoritative state.

The first slice does not choose a separate client state-management library, client-side routing library, local database, service-worker approach or offline-status presentation. React components may later be extracted into Web Components where that creates a justified reusable platform boundary; this is not an MVP requirement or constraint.

## Interface Foundation

The Workbench's visual mockups and future frontend implementation use the accepted Astro server-rendered and bounded React-Island architecture. Astro components render pages and small stateless interface parts with semantic HTML. React is reserved for bounded interactive behavior; it is not the default for presentational components. TypeScript favors pure functions, closures and single-responsibility modules, with readable, meaningful names over terse abstractions.

Tailwind CSS v4 is the utility-composition layer. A global stylesheet owns the Interface Foundation's CSS custom properties and Tailwind integration. `@apply` is not used. The CSS variable hierarchy is mandatory:

- **Primitive tokens** hold raw visual values: `oklch` color scales; variable-font settings; and `rem`-based spacing, sizing, radii and shadow geometry.
- **Semantic tokens** reference primitive tokens only and express a purpose, such as a surface, content, action, border, focus or status color.
- **Component tokens** reference semantic tokens only and express the local treatment of a reusable Workbench component.

The hierarchy is Workbench implementation detail, not a constraint on a user's Design System Definition or derived handoff format.

The document root exposes the resolved theme as `data-color-theme="light"` or `data-color-theme="dark"`, and the owner's selection as `data-color-theme-preference="system"`, `"light"` or `"dark"`. A system preference resolves to the current system light/dark theme; an explicit preference remains distinguishable from that resolved value. Both themes define equivalent semantic tokens and accessible foreground/background, focus and status pairs.

The typography foundation uses the Google Fonts variable faces **Urbanist** and **Lora**. Urbanist serves navigation, controls, labels and compact structured information. Lora serves long-form specification prose and related reading or editing surfaces. Font sizes use a conservative fluid scale, including a root `clamp()` size that never falls below the user's normal browser baseline. Dimensions use `rem`, so browser text scaling remains meaningful.

Visual direction is calm and document-focused: restrained hues, generous fluid whitespace, lightly differentiated surfaces and sparing soft shadows establish hierarchy without dashboard-like visual competition. Text, interactive states and focus indicators must retain suitable contrast; ordinary text and controls target WCAG 2.2 AA contrast. Motion respects `prefers-reduced-motion`, and themes remain usable in forced-color settings.

Layouts are mobile-first. Page and major layout changes may use viewport media queries; reusable components favor container queries. Components use semantic native elements, visible keyboard focus and appropriate accessible names and states. Heroicons are the sole icon set for the Workbench. A small server-rendered Astro icon component is preferred for static icons; a client custom element or React icon component is justified only when the interaction boundary needs it.

Polished mockups may share this visual foundation, but retain static representative data and local interaction state. They do not thereby authorize authentication, persistence, domain commands, APIs or other production behavior.
