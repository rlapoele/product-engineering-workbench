# Session — Design System Companion Handoff Controls

**Session ID:** 2026-08-23-05

**Date:** 2026-08-23

**Status:** Crystallized

## Context

The Design System Companion is optional and profile-specific. Its selection and validation must fit the existing Prepare Handoff scope panel without silently changing package scope or making canonical UX/UI guidance contingent on a generated file.

## Decision

Prepare Handoff has a **Design System Companion** card after readiness controls and before the package preview. **Include Design System Companion** is explicitly chosen and defaults to off for the MVP. Enabling it reveals a Profile selector with a visible default, initially Google `DESIGN.md` `alpha`, and compact preflight status: Ready to include, Warning or Needs attention.

The primary-color binding appears only when the chosen profile requires it and lists only compatible source color tokens. Changing profiles preserves source knowledge and reruns the selected profile's preflight. The package preview shows the companion, profile/version and warnings, and offers a read-only generated-file preview before preparation.

If the selected package has no included Design System Definition, the card is unavailable. It explains the condition and offers ordinary actions to add an existing Definition as Supporting Context or create one; it never changes package scope automatically. Turning the card off removes companion-profile validation only and does not remove ordinary selected UX/UI guidance. The immutable handoff snapshot retains the final inclusion choice, profile/version, bindings, warnings and generated file.

## Boundary

The card is a package-output control, not a design-system authoring surface or another scope-selection mechanism. A Design System Companion remains optional, and profile validation must not run when it is not selected.

## Documents Updated

- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
