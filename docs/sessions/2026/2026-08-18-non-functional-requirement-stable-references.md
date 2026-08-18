# Session — Non-Functional Requirement Stable References

**Session ID:** 2026-08-18-19

**Date:** 2026-08-18

**Status:** Crystallized

## Context

Non-Functional Requirements need durable citations in reviews, validation and implementation handoffs just as Functional Requirements do. Quality categories and document position may evolve without invalidating those references.

## Decision

- Every Non-Functional Requirement receives an immutable, project-scoped readable reference when created, for example `NFR-001`.
- The readable reference is distinct from the internal stable artifact identifier.
- It is retained on archival and is never reused or renumbered.
- The reference does not encode quality category or document position.
- Prepared handoffs retain the included NFR references and saved Revision snapshots in their immutable package representation.

## Consequences

Authors and implementation consumers can cite quality expectations reliably even when the document is reorganized or an NFR is recategorized. The NFR identifier follows the same durable-reference principle as `FR-001` without conflating functional and quality requirements.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/index.md`
