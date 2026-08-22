# Session — Design System Definition Direction

**Session ID:** 2026-08-22-05

**Date:** 2026-08-22

**Status:** Crystallized

## Context

The existing Shared Design Guidance convention records preserve useful visual guidance, but cannot distinguish or validate typed design tokens from prose. A valuable, self-contained `design.md` requires explicit machine-readable design-system values as well as human-readable rationale.

## Decision

Shared Design Guidance evolves into a section-owned Design System Definition. It is not a Product Artifact collection or visual design workspace.

The Definition records metadata and intentionally omitted sections; typed color, typography, spacing, rounded-shape and component token collections; and ordered human-readable guidance: Overview, Colors, Typography, Layout, Elevation & Depth, Shapes, Components and Do's and Don'ts. Token values are normative for generated `design.md`; prose explains their rationale and use. Component records may represent named variants and literal or token-reference property values.

Screen / Views, User Flows and UI Requirements remain independent Product Artifacts. A generated `design.md` may reference them only through a clearly labelled non-normative Workbench extension. Resource References retain external design systems, design files, wireframes, prototypes and screenshots without making them canonical token data.

## Boundary

The decision does not yet define detailed authoring, minimum-save, syntax and reference validation, component-property vocabulary, or serialization behavior. It does not create individual Design Token, Color, Typography or UI Component Product Artifacts, a visual canvas, a Figma replacement, or frontend implementation choices.

## Source

The shape is informed by the Google Labs Code [DESIGN.md Format](https://github.com/google-labs-code/design.md/blob/main/docs/spec.md): optional token frontmatter plus ordered prose sections. The Workbench remains responsible for its own Product Knowledge model and handoff boundary.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
