# Session — Non-Functional Requirement Authoring Flow

**Session ID:** 2026-08-18-22

**Date:** 2026-08-18

**Status:** Crystallized

## Context

NFRs always have at least the Whole Specification as a possible target, so authors need a direct scoped-entry path rather than prerequisite creation or category-driven document structure.

## Decision

- `Non-Functional Requirements` exposes `Add Non-Functional Requirement` and no grouping action initially.
- Its private draft collects category, a required explicit primary scope target, optional additional targets, title, measurable statement and optional Measurement context.
- Whole Specification is eligible but is never silently selected when authoring starts from the section.
- `Add Non-Functional Requirement` from an eligible target preselects that target as primary.
- Saved NFRs use ordinary edit and locally confirmed archive actions, plus `Add Acceptance Criterion`.

## Consequences

The flow makes the quality scope a conscious author decision while staying shorter than Functional Requirement creation. Categories support organization and review without turning into a second outline hierarchy.

## Documents Updated

- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/index.md`
