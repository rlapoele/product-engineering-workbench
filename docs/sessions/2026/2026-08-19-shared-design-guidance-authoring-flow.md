# Session — Shared Design Guidance Authoring Flow

**Session ID:** 2026-08-19-08

**Date:** 2026-08-19

**Status:** Crystallized

## Context

Shared Design Guidance has three fixed, section-owned blocks. The authoring model needs to let an author begin from the knowledge they have while preserving the required role of Design direction and avoiding a separate design-management surface.

## Decision

The UX/UI section shows fixed Design direction, Reusable design conventions and Application guidance blocks. It offers direct actions to define Design direction, add a convention or add Application guidance, and authors may start with any action.

A Design direction draft is private short prose. A convention draft selects a fixed heading and collects Name, Value or rule, and Intended use. Application guidance is one private concise-prose draft.

Design direction is required before the first convention or Application guidance can save. If it is missing, the workbench preserves the original draft while the author explicitly creates Design direction, then resumes the original draft. Saved conventions expose edit and locally confirmed remove actions. Saved Design direction and Application guidance are edited in place; clearing Application guidance requires local confirmation.

## Boundary

Shared Design Guidance remains section-owned content. This flow creates no Product Artifact, lifecycle state, generic relationship, or separate management workspace.

## Documents Updated

- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
