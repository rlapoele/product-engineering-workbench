# Session — Design System Definition Authoring and Validation

**Session ID:** 2026-08-23-03

**Date:** 2026-08-23

**Status:** Crystallized

## Context

The Definition has a flexible typed source model and optional profile-based export. Authors need a direct, incremental way to create that knowledge without a visual design-tool workspace or premature target-specific constraints.

## Decision

`Add Design System Definition` is a Shared Design Guidance action in the UX/UI section. It opens a private draft with Name prefilled from the Project title; Name and Overview are required to save, while Description is optional. The saved Definition remains an inline, section-owned document block with ordinary edit and remove actions for its prose, collections and intentional omissions.

Collection-specific actions add Colors, Typography, Spacing and Rounded shapes. A value explicitly selects Literal or Token reference. The reference picker lists compatible existing targets; creating a missing target preserves and resumes the source draft with the new target selected.

`Add Component` creates an author-defined component with its first required configuration. Saved components provide `Add Configuration`. Each configuration has a free-form property-name/value table. Property-name suggestions are optional guidance, not a required vocabulary; values are literals or compatible token references. A standard section without relevant data or prose may be explicitly omitted with an optional reason, and content cannot be added until that omission is cleared.

Source save validation blocks only source-model errors: missing required fields, duplicate identifiers, unresolved or incompatible references and reference cycles. Export-profile validation remains separate and runs only during Prepare Handoff after an author selects the companion and its profile.

## Boundary

The flow does not require Google-specific names, a `primary` binding, flattened component keys, target-value syntax or a fixed component-property vocabulary while authoring canonical knowledge. It is not a visual canvas, a component library or a separate UI-state model.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
