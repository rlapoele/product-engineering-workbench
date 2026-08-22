# Session — Design System Companion Integrated Validation

**Session ID:** 2026-08-23-04

**Date:** 2026-08-23

**Status:** Crystallized

## Context

The Design System Definition, document-first authoring flow and Google `DESIGN.md` profile have been specified independently. One realistic path must confirm that their combined behavior remains coherent and distinguishes canonical source validation from profile-specific export validation.

## Scenario

In a Project Workspace, an author creates the Project overview Screen / View and a primary-action UI Requirement. They create a Design System Definition with Name and Overview, then incrementally add:

- `brand-blue-600` as a literal color;
- `action-primary` referencing `brand-blue-600`;
- `body-md` typography and rounded `control`;
- a `button` Component with a `primary-hover` Configuration using `action-primary`, a description and an unknown `borderColor` property; and
- an explicit Elevation & Depth omission, because hierarchy uses spacing, typography and borders.

During Prepare Handoff, the author includes the Design System Companion, selects or accepts Google `DESIGN.md` `alpha`, and binds `action-primary` as the profile's required primary color. The generated file contains a derived `colors.primary`, `components.button--primary-hover`, the Configuration description in Components guidance, an unknown-property warning, and the Screen / View and UI Requirement only in the clearly labelled Workbench extension. The immutable snapshot retains the inclusion choice, profile/version, binding, warning and generated companion.

## Recovery

The author then creates `button` / `primary--hover` and `button--primary` / `hover`. These remain valid source Component and Configuration identifiers, but both flatten to `button--primary--hover` in the Google profile. Preparation blocks without changing canonical source data. The author changes one identifier, clears the profile collision and prepares the handoff successfully.

## Result

The scenario confirms that raw and semantic token naming, explicit omissions, compatible references, structured Component configurations, profile-specific primary binding, warnings, Workbench extensions and immutable snapshots work together. It also confirms that export compatibility checks constrain only the selected handoff, not canonical authoring.

## Documents Updated

- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
