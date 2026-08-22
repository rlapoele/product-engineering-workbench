# Session — Design System Definition Initial Shape

**Session ID:** 2026-08-22-06

**Date:** 2026-08-22

**Status:** Crystallized

## Context

The Design System Definition must store enough explicit, typed knowledge to generate a valuable `design.md` without requiring authors to complete a full design system before they can save useful work.

## Decision

The Definition has required Name and Overview. Name is prefilled from the Project title but remains editable. Description is optional. The output target and version are system-managed and visibly declared; the generated version is retained in each immutable prepared-handoff snapshot.

Its token collections are Colors, Typography, Spacing, Rounded shapes and Components. Every token or component/variant name is unique within its collection. Typography records font family, size, weight and line height, with optional letter spacing, feature and variation settings. Component properties use literal values or token references. Component states are ordinary named variants such as `button-primary-hover`, not a separate UI-state model.

Overview is required; Colors, Typography, Layout, Elevation & Depth, Shapes, Components and Do's and Don'ts guidance are optional. A standard section is either represented by relevant typed data or prose, or explicitly listed as intentionally omitted with an optional reason.

## Boundary

Detailed authoring flow, typed syntax and token-reference validation, component-property vocabulary and serialization remain later decisions. Resource References remain supporting source material rather than token data.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
