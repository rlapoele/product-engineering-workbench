# Session — UI Requirement Relationships

**Session ID:** 2026-08-19-25

**Date:** 2026-08-19

**Status:** Crystallized

## Context

UI Requirement has a primary Screen / View or User Flow context and may apply to more than one interface target. Its explicit scope, behavior dependency and acceptance evidence need distinct graph semantics without introducing unnecessary duplicate links.

## Decision

`applies_to` is an explicit relationship from UI Requirement to Screen / View or User Flow. Each UI Requirement has one primary applies-to relationship and may have additional ones; primary/additional status is relationship metadata, with the visible target fields as its document-facing projection.

A UI Requirement may `depend_on` a Functional Requirement when it relies on that required system behavior. Acceptance Criteria may directly `validate` a UI Requirement.

## Boundary

No direct Feature, User Story, Use Case, Non-Functional Requirement or Shared Design Guidance relationship is required initially. The explicit target scope and established Product Knowledge Graph provide the necessary context without redundant links.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
