# Session — Domain Rule Stable References

**Session ID:** 2026-08-18-27

**Date:** 2026-08-18

**Status:** Crystallized

## Context

Domain Rules are independent, traceable Product Artifacts. Their governing policy must be easy to discuss, link from related requirements and preserve accurately in handoff snapshots.

## Decision

- Each Domain Rule receives an immutable project-scoped readable reference at creation, such as `DR-001`.
- The reference is distinct from the artifact's internal stable identifier.
- It does not encode the rule's Business Rule or Invariant kind, and does not change with document placement.
- It is never reused or renumbered, including after archival.
- Saved Implementation Handoff snapshots retain included Domain Rule references.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
