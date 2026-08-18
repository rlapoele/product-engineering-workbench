# Session — Functional Requirement Leaf Authoring

**Session ID:** 2026-08-18-12

**Date:** 2026-08-18

**Status:** Crystallized

## Context

Functional Requirements need enough structure for formal, implementation-ready specification work without becoming brittle prose forms or hiding multiple independently traceable obligations in one reference.

## Decision

- A Functional Requirement is an independent leaf Product Artifact with a required primary Core Feature, concise title and independently testable requirement statement.
- The document-facing editor provides Content-Locale-aware formal guidance equivalent to `The system shall …`. The model does not require a particular English sentence pattern or automatically translate authored content.
- An optional Conditions and constraints area may clarify or narrow the same stated behavior.
- A condition becomes a separate Functional Requirement when it introduces independently changeable or testable behavior, a distinct outcome or a cross-cutting rule.
- Explicit Acceptance Criteria relationships are not required before the requirement's initial save. Missing coverage is a clear authoring and readiness cue, never an automatic block or generated acceptance evidence.
- One Acceptance Criterion may validate multiple requirements when the same observable evidence genuinely applies to each. If that explanation cannot be made for every linked requirement, the criterion or the requirements should be split.

## Consequences

The familiar formal-requirement presentation remains readable and localized, while requirement references stay small enough to change, review, validate and hand off independently. Acceptance coverage can be added progressively without weakening its explicit traceability when it matters.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/index.md`
