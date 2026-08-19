# Session — Screen / View Relationships

**Session ID:** 2026-08-19-11

**Date:** 2026-08-19

**Status:** Crystallized

## Context

Screen / View needs explicit traceability to product capability, required behavior, validation evidence and cross-view journeys without conflating reusable interface context with a flow's local sequence.

## Decision

A Screen / View may `support` a Core Feature and `depend_on` a Functional Requirement. Acceptance Criteria may directly `validate` a Screen / View.

A User Flow may `include` a Screen / View. `includes` is a new explicit relationship type and is not `part_of`: a Screen / View may appear in more than one User Flow. It may later carry flow-specific metadata such as sequence position or relevant view state, while the Screen / View retains its own general identity and knowledge.

## Deferred Detail

The UI Requirement model will decide its own relationship semantics with Screen / Views. The detailed User Flow model will decide the required structure and constraints of `includes` relationships.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
