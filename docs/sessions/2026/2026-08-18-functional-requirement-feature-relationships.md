# Session — Functional Requirement Feature Relationships

**Session ID:** 2026-08-18-14

**Date:** 2026-08-18

**Status:** Crystallized

## Context

A requirement needs one clear authoring home, but some independently specified behavior genuinely supports more than one user-visible capability.

## Decision

- Every Functional Requirement has one required primary Core Feature.
- The primary Core Feature is the requirement's main authoring and document context.
- A requirement may have zero or more additional explicit Core Feature links when the same behavior genuinely supports multiple capabilities.
- The workbench never infers those additional links from similar wording, shared Requirement Group membership or document proximity.

## Consequences

Authors can describe shared behavior once while preserving a clear principal context. Feature-focused traceability and handoff scopes can include the same requirement through explicit relationships without duplicating it or treating groups as semantic dependencies.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/index.md`
