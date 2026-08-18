# Session — Functional Requirement Qualifier List

**Session ID:** 2026-08-18-15

**Date:** 2026-08-18

**Status:** Crystallized

## Context

Functional Requirements need a lightweight place for qualifying statements without requiring authors to make a subjective distinction between a condition and a constraint.

## Decision

- A Functional Requirement may contain one optional, flat **Conditions and constraints** list of plain-language statements.
- Authors do not identify an item as a Condition or Constraint, and the workbench does not infer a type from the item's wording.
- The list does not support nesting or a rich-text editor.
- Its entries may only qualify the requirement's stated behavior. A separately changeable or testable behavior, distinct outcome or cross-cutting rule is a separate Functional Requirement.

## Consequences

The familiar document presentation remains concise and low-friction while preserving the requirement-leaf boundary. A future classifier is justified only by a concrete review, filtering or export need; it is not part of initial authoring.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/index.md`
