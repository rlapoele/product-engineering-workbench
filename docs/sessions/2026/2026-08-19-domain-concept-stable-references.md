# Session — Domain Concept Stable References

**Session ID:** 2026-08-19-03

**Date:** 2026-08-19

**Status:** Crystallized

## Context

Domain Concepts are independent Product Artifacts that may be governed by Domain Rules and referenced throughout a handoff. Their human-readable identity should remain unambiguous when a concept is renamed or when similar concepts exist.

## Decision

- Each Domain Concept receives an immutable project-scoped readable reference at creation, such as `DC-001`.
- The reference is distinct from the Concept's internal stable identifier.
- It does not change when the Concept is renamed or moved in the document.
- It is never reused or renumbered, including after archival.
- Saved Implementation Handoff snapshots retain included Domain Concept references.

## Deferred Detail

- readable-reference convention for Domain Relationships;
- additional explicit relationships for Domain Concepts and Domain Rules.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
