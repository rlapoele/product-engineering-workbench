# Session — Functional Requirement Authoring Flow

**Session ID:** 2026-08-18-13

**Date:** 2026-08-18

**Status:** Crystallized

## Context

Functional Requirements need a direct document-first path that establishes their required Core Feature context without losing work when authors discover the prerequisite is missing.

## Decision

- The `Functional Requirements` section exposes `Add Functional Requirement`, `Add Requirement Group` and `Add Core Feature` through its contextual Actions surface.
- A requirement started from the section begins ungrouped. A Requirement Group has its own `Add Functional Requirement` action, which pre-associates the new private draft with that group.
- A Functional Requirement draft requires a primary Core Feature. If no Core Feature exists, the author may choose `Add Core Feature` or cancel.
- Choosing `Add Core Feature` uses contextual related-knowledge creation: the Feature is authored in its canonical section, the requirement draft remains private and preserved, and the author returns to it with the new Feature selected after save.
- A saved requirement exposes `Edit Functional Requirement`, locally confirmed `Archive Functional Requirement`, and `Add Acceptance Criterion`. The latter opens ordinary Acceptance Criterion authoring with that requirement preselected as the primary validation target.

## Consequences

Authors can progress naturally from a document section or from a conceptual group without a separate setup workflow. Prerequisite creation remains explicit and canonical, while the original draft remains safe. Acceptance coverage becomes easy to add from the behavior it validates without duplicating acceptance artifacts.

## Documents Updated

- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/index.md`
