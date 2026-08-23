# Session — Design System Companion Component-Property Conformance

**Session ID:** 2026-08-23-07

**Date:** 2026-08-23

**Status:** Crystallized

## Context

The Design System Definition intentionally allows author-defined Component property names, while the selected Google `DESIGN.md` `alpha` profile defines a small standard property vocabulary and accepts unknown properties with a warning. The profile needs an explicit rule that distinguishes target-valid recognized properties from pass-through unknown properties without making the canonical Definition follow a design-system methodology.

## Decision

Google `DESIGN.md` `alpha` uses the component-property vocabulary in the [Google Labs Code DESIGN.md Format](https://github.com/google-labs-code/design.md/blob/main/docs/spec.md):

- `backgroundColor` and `textColor` accept a CSS Color literal or compatible Color reference.
- `typography` accepts a compatible Typography reference.
- `rounded`, `padding`, `size`, `height` and `width` accept a target-valid Dimension literal (`px`, `em` or `rem`) or compatible Dimension reference.

The profile emits a reference in Google `{path.to.token}` syntax. A recognized property whose literal or reference is not valid for its target type blocks that profile's companion. An author-defined property outside the recognized vocabulary remains valid source knowledge. The profile emits it unchanged when it is representable as a target scalar or a reference to an emitted target value, and reports an unknown-property warning. It blocks only an unrepresentable value or unresolved emitted target reference.

## Boundary

This is an Export Profile compatibility rule, not a new source validation taxonomy. The Definition continues to permit free-form Component property names, literal values and source-compatible references. The Workbench does not infer a property type for unknown names, alter canonical source identifiers or values, or reject a source save because the selected profile would warn or block later.

## Source

- Google Labs Code [DESIGN.md Format](https://github.com/google-labs-code/design.md/blob/main/docs/spec.md), `alpha` component-property and unknown-content rules.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
