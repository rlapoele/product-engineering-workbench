# Session — Data or Domain Model Impact Propagation

**Session ID:** 2026-08-19-01

**Date:** 2026-08-19

**Status:** Crystallized

## Context

Domain Concepts, Domain Rules and Domain Relationships introduce new traceability paths that need deterministic impact behavior. The existing product model distinguishes content that may be inaccurate (**Stale**) from missing supporting behavior or evidence (coverage/readiness warnings).

## Decision

- A changed or archived Domain Rule marks Functional Requirements that `enforce` it and Acceptance Criteria that directly `validate` it as Stale.
- A changed or archived Functional Requirement does not make an enforced Domain Rule Stale. It creates a coverage/readiness warning because the policy may remain correct even when known system behavior changes or is absent.
- A changed or archived Domain Concept marks governing Domain Rules Stale and shows a review cue on connected Domain Relationships.
- A changed or removed Domain Relationship marks governing Domain Rules Stale. Ordinary downstream propagation then reaches enforcing Functional Requirements and validation evidence.
- Domain Relationships are first-class relationship records, not Product Artifacts. Their review cues are not lifecycle states.

## Consequences

The `enforces` relationship propagates strongly from a changed Domain Rule to the Functional Requirement that upholds it, while reverse change produces a coverage/readiness warning. Domain-model structure remains explainable without treating every relationship record as an Artifact lifecycle object.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
