# Session — User Flow Artifact Direction

**Session ID:** 2026-08-19-16

**Date:** 2026-08-19

**Status:** Crystallized

## Context

The UX/UI section needs knowledge that describes user-experience continuity across individual interface contexts. Screen / Views describe those contexts individually, while Use Cases already describe structured actor-and-system interactions for a Core Feature.

## Decision

User Flow is an independent Product Artifact that describes how a person reaches a meaningful outcome across one or more interface contexts. It owns the journey's entry, decisions, feedback, recovery and outcome, and explicitly `includes` Screen / Views.

## Boundary

A User Flow is distinct from a Use Case, which models a structured actor-and-system interaction for a Core Feature, and from a Screen / View, which remains a stable reusable individual interface context. It does not prescribe implementation routes, frontend state machines or automated test scripts.

## Deferred Detail

The initial fields, `includes` structure, relationships, authoring flow, readable references and propagation behavior remain to be decided.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
