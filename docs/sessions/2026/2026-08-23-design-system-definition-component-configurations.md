# Session — Design System Definition Component Configurations

**Session ID:** 2026-08-23-01

**Date:** 2026-08-23

**Status:** Crystallized

## Context

The Design System Definition needs enough component structure to represent visual variants and interaction treatments in a `design.md` handoff, while remaining neutral about a team's component taxonomy and avoiding invented states.

## Decision

Each component has an author-defined identifier and one or more named configurations. A configuration contains its own property values, expressed as literals or compatible token references, and may include an optional description and labels or tags.

A configuration may represent a visual variant, an interaction state, a size, a theme treatment or any combination. Names are user-defined and not interpreted by the Workbench: `primary-hover` is a valid configuration, but neither it nor a `default`, `hover`, `focus`, `disabled` or `loading` configuration is required.

Component identifiers are unique in the Components collection, and configuration identifiers are unique within their parent component. Configurations are self-contained. They do not inherit property values from a component or another configuration; token references provide the reusable layer.

## Boundary

The component model records visual properties only. UI Requirements remain canonical for observable behavioral, accessibility and interaction obligations. The Definition does not become a component library, a component-inheritance system or a separate UI-state model.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
