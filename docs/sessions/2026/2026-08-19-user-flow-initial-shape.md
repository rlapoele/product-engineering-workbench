# Session — User Flow Initial Shape

**Session ID:** 2026-08-19-17

**Date:** 2026-08-19

**Status:** Crystallized

## Context

User Flow needs enough structured experience knowledge to make cross-view interaction implementation-facing while remaining distinct from Use Cases, Screen / Views and technical process descriptions.

## Decision

Each User Flow has required Title, primary User Profile, Entry context, Intended outcome and one or more ordered Journey steps.

Each Journey step has required Action, Surface selected from Screen / Views, and Feedback and continuation. It may include Relevant state for a specific user-facing configuration. The step carries the `includes` relationship's sequence position and relevant state metadata, while Action and Feedback and continuation remain unique flow content.

Optional unhappy paths use two distinct structures:

- **Intentional exits** capture user-initiated cancellation, back navigation or abandonment, including preservation or discard behavior and resulting destination or outcome.
- **Error recovery paths** capture known system-initiated failures or constraints, user-visible feedback, recovery or retry option and resulting outcome.

## Boundary

The model records only known user-visible failure behavior. It does not require authors to invent network drops, technical edge cases or implementation failure mechanics.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
