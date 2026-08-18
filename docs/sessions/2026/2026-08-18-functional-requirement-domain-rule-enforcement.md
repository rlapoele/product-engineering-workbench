# Session — Functional Requirement Domain Rule Enforcement

**Session ID:** 2026-08-18-28

**Date:** 2026-08-18

**Status:** Crystallized

## Context

Domain Rules need explicit traceability to the system behavior that upholds them. Existing `derived_from` and `depends_on` relationships describe origin and dependency, but neither identifies the required system obligation.

## Decision

- The Product Knowledge Graph includes the `enforces` Artifact Relationship type.
- A Functional Requirement may explicitly `enforce` a Domain Rule when it specifies the system behavior that upholds that rule.
- `enforces` is distinct from `derived_from`, which records origin or refinement, and `depends_on`, which records dependency rather than the system obligation.
- The relationship expresses product specification intent, not a software implementation technique or code-level enforcement mechanism.

## Deferred Detail

- Acceptance Criteria eligibility and coverage for Domain Rules;
- `enforces` impact-propagation behavior;
- document-first authoring flow for the relationship.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
