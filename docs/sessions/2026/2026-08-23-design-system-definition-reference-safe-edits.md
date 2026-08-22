# Session — Design System Definition Reference-Safe Edits

**Session ID:** 2026-08-23-06

**Date:** 2026-08-23

**Status:** Crystallized

## Context

Typed Design System Definition values may reference one another. Editing and removal behavior must preserve canonical integrity without creating an artifact lifecycle, silently changing design values or invalidating unrelated Product Artifacts.

## Decision

Definition edits create ordinary section Revisions. Editing a value affects subsequent handoffs. Renaming a token, Component, Configuration or reference-target property preserves and updates its logical inbound references.

Removal is permitted only when the target has no inbound references. When it is still referenced, the Workbench identifies the dependent entries and requires the author to repoint or remove them before retrying. It does not cascade deletion or substitute a replacement value automatically.

Removing the whole Definition requires ordinary confirmation. It removes only section-owned design-system knowledge; independent Screen / Views, User Flows, UI Requirements and Resource References remain. Definition changes do not mark those Product Artifacts Stale. Prepared handoff snapshots, including previously generated companions, remain immutable.

## Boundary

The Definition does not gain an independent lifecycle, generic relationship model or automatic impact-propagation system. Its source integrity rules protect references only within the Definition and leave export-profile validation to Prepare Handoff.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
