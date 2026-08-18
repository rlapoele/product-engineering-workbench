# Session — Domain Rule Governs Relationship

**Session ID:** 2026-08-19-02

**Date:** 2026-08-19

**Status:** Crystallized

## Context

Domain Rules require one or more governed Domain Concepts and/or Domain Relationships. The governing scope must be part of the Product Knowledge Graph rather than a duplicated document-only list, so relationship-specific propagation and traceability remain explainable.

## Decision

- The Product Knowledge Graph includes the `governs` Artifact Relationship type.
- A Domain Rule `governs` one or more Domain Concepts and/or Domain Relationships.
- The Rule's document-facing **Governs** list is the projection of its required outbound `governs` relationships; it does not duplicate relationship data.
- A changed governed Concept or Relationship marks its governing Domain Rule Stale.
- A changed Domain Rule does not automatically make the structural Concept or Relationship it governs Stale; it instead affects enforcing Functional Requirements and direct validation evidence.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
