# Session — Screen/View Visual Context Validation

**Date:** 2026-07-22

**Session ID:** 2026-07-22-33

**Status:** Crystallized

---

## Context

A Screen / View visual reference may depict only one state or responsive layout. The reference-details flow needs concise optional metadata that helps an implementation consumer interpret the visual without turning a Resource Reference into canonical UI behavior or a device-specification system.

---

## Decision

For a `Visual reference` attached to a Screen / View, the optional local **Visual context** disclosure contains:

- **Represented state** — optional free text, such as default, confirmation, validation error or empty state; and
- **Viewport** — optional prescribed choice: `Mobile portrait`, `Mobile landscape`, `Tablet portrait`, `Tablet landscape`, `Desktop` or `Other`.

No Viewport selection means that viewport is unspecified. Selecting **Other** requires a free-text value, for example a named device, exact dimensions or breakpoint.

---

## Consequences

The standard reference-details step remains compact; Visual context appears only for a visual reference on a Screen / View. The fields communicate how to read the visual, not additional product behavior. They do not alter canonical Screen / View state, create Artifact Relationships or require a complete responsive-device model.

The optional format supports common orientation-aware cases while preserving an escape hatch for precise responsive specifications. Exact field ordering, accessible control behavior and how visual context appears in a handoff remain UX and export-format work.

---

## Documents Updated

- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

---

## Recommended Next Step

Validate how optional Visual Context metadata appears in an Implementation Handoff Package, including whether it belongs only alongside the Resource Reference metadata or also deserves a concise mention in human-readable Screen / View export content.
