# Session — Shared Design Guidance Initial Shape

**Session ID:** 2026-08-19-07

**Date:** 2026-08-19

**Status:** Crystallized

## Context

Shared Design Guidance needs enough structure to give human and AI implementation consumers specific, reusable design context, while remaining section-owned knowledge rather than a design-token catalog or component library.

## Decision

Shared Design Guidance has three section-owned blocks:

- **Design direction** is required short prose describing visual character, hierarchy and the product experience the design should support.
- **Reusable design conventions** is optional structured content. Each entry has a Name, precise Value or rule, and Intended use. The fixed document-facing headings are Color and surfaces, Typography, Layout and spacing, Shape and elevation, and Component conventions.
- **Application guidance** is optional concise prose for preferences and avoidances, plus responsive or accessibility principles only when genuinely cross-cutting.

Authors may save useful Shared Design Guidance with Design direction alone. They are not required to invent colors, typography scales, breakpoints or other values. Specific interface behavior remains a UI Requirement, while measurable quality remains a Non-Functional Requirement.

## Boundary

The three blocks apply only to Shared Design Guidance. They do not decide the independent Screen / View, User Flow or UI Requirement artifact models, their relationships, or their authoring flows.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
