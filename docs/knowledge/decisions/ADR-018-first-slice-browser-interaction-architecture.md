# ADR-018 — First-Slice Browser Interaction Architecture

**Status:** Accepted

**Date:** 2026-08-04

---

## Context

The first slice needs a concrete browser interaction and reactivity model that fits the accepted Astro/Node application direction, preserves server-authoritative Project state and supports the selected first-use, Project creation and explicit Goal-save journeys.

## Decision

Use Astro for server-rendered page composition and React Islands for bounded interactive browser areas in the MVP.

React component state and hooks manage only local presentation state: form input, validation feedback, pending command state, error recovery and the private edit-in-progress Goal draft. An Island reads Project data and submits explicit commands through the existing client-facing Project data and command boundary. It does not authorize access, persist canonical state or present a command as saved before the server returns authoritative state.

No separate client state-management library, client-side router or TC39 Signals polyfill is selected for the first slice. Future extraction of a React component into a Web Component remains possible where it creates a justified reusable platform boundary, but is not required for the MVP.

## Rationale

React offers a familiar, well-supported component model for the interactive portions of the first slice without turning the application into a client-rendered single-page application. Astro retains clear server-rendered page composition and limits client-side JavaScript to the interactions that need it.

React's built-in state and hooks are sufficient for the deliberately small, local state surfaces in the selected journey. Deferring a separate reactivity abstraction avoids adding a state-management decision before evidence shows that component-local state is insufficient.

## Consequences

- Interactive first-slice areas are implemented as small, independently hydratable React Islands within Astro pages.
- Non-interactive page content remains server-rendered by default.
- Each Island disposes of transient state when its browser lifetime ends unless a separately accepted recovery rule says otherwise; persistent draft resumption remains deferred.
- Unit tests cover component state and command-result transitions; browser tests cover the rendered journey and accessibility behavior.
- React does not change the server-authoritative identity, ownership, retry-safe command or canonical-persistence boundaries.

## Alternatives Considered

### Native Web Components with a Signals-compatible reactivity layer

This remains a viable future platform-boundary option. React is the preferred MVP path because it gives the solo project a familiar, productive interaction model now, while a TC39 Signals implementation remains an unsettled dependency choice.

### Full client-rendered React application

This would broaden the client runtime and routing responsibility beyond what the selected server-rendered Astro architecture requires.

### No client-side component model

Server-rendered forms alone could support a narrow journey, but would make the selected local draft, pending, error-recovery and responsive interaction states less direct to implement and validate.

## Related Documents

- `docs/glossary/glossary.md`
- `docs/knowledge/architecture/frontend-architecture.md`
- `docs/knowledge/architecture/system-architecture.md`
- `docs/knowledge/decisions/ADR-009-online-first-offline-evolvable-posture.md`
- `docs/knowledge/decisions/ADR-010-first-slice-system-boundaries.md`
- `docs/knowledge/decisions/ADR-012-first-slice-ux-prototype-validation.md`
