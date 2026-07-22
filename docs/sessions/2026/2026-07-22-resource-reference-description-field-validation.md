# Session — Resource Reference Description Field Validation

**Date:** 2026-07-22

**Session ID:** 2026-07-22-27

**Status:** Crystallized

---

## Context

Visual references can need text both in the workbench and in downstream handoff or presentation contexts. The model must determine whether that text represents two independently authored values—Description and Caption—or one local explanation with context-specific rendering.

---

## Decision

Every MVP Resource Reference has one canonical user-authored **Description** field.

This applies to visual and non-visual references alike. A downstream package, preview or other representation may render Description as a caption when that is useful, but **Caption is not a separate Resource Reference field**. The workbench does not ask the user to maintain two potentially divergent explanations for the same reference.

---

## Consequences

The details step remains compact and uses one unambiguous explanatory value. Visual presentation stays flexible without changing the target-level meaning or adding a second validation, revision or replacement concern.

Future evidence may justify separate visual accessibility text or other specialized metadata, but that must be defined by its own semantics rather than inferred from caption rendering.

---

## Documents Updated

- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

---

## Recommended Next Step

Validate the optional Screen / View visual-context fields—represented state and viewport—including whether both are necessary in the MVP and how they appear without expanding the default details step.
