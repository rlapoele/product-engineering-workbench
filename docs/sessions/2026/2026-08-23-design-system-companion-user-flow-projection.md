# Session — Design System Companion User Flow Projection

**Session ID:** 2026-08-23-11

**Date:** 2026-08-23

**Status:** Crystallized

## Context

An included User Flow requires ordered Journey steps, each of which names a Screen / View Surface. The Workbench extension must preserve that included Flow's journey context without using those relationships to bring an otherwise excluded Screen / View into the package.

## Decision

Each User Flow entry uses `#### UF-### — Title`, then gives its primary User Profile name, Entry context and Intended outcome. It renders:

1. ordered **Journey steps**, each with Action, Surface, optional Relevant state and Feedback and continuation;
2. non-empty **Intentional exits**; then
3. non-empty **Error recovery paths**.

When a Journey step's Surface has an included Screen / View extension entry, the Surface links to it. When it does not, the Flow still retains plain `SV-### — Title` text, marked **Outside package**. This preserves the included Flow's necessary context without linking to unstated content, adding a Screen / View entry or changing package scope.

## Boundary

The projection does not repeat Feature or Functional Requirement relationships, Acceptance Criteria, User Profile detail, Screen / View detail, implementation routes or component structure. It is a concise representation of the included User Flow, not a route map, test script, second scope selector or implicit inclusion mechanism.

UI Requirement entry-level presentation remains a separate later decision.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
