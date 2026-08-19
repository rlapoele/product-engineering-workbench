# Session — User Flow Relationships

**Session ID:** 2026-08-19-18

**Date:** 2026-08-19

**Status:** Crystallized

## Context

User Flow's structured Journey steps establish screen-level continuity. It also needs clear traceability to capability, required behavior and observable evidence without adding specialized relationship types for every related artifact.

## Decision

Each Journey step creates the required `includes` relationship from the User Flow to its selected Screen / View. A User Flow may `support` one or more Core Features and `depend_on` Functional Requirements. Acceptance Criteria may directly `validate` it.

The Flow's primary User Profile remains a required structured field. A User Story or Use Case may use ordinary `relates_to` where it genuinely provides supporting context. No specialized relationship is introduced for that association.

## Deferred Detail

UI Requirement-to-User Flow relationship semantics remain deferred to the UI Requirement model.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
