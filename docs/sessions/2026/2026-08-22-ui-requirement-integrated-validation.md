# Session — UI Requirement Integrated Validation

**Session ID:** 2026-08-22-04

**Date:** 2026-08-22

**Status:** Crystallized

## Context

UI Requirement now has its fields, relationships, authoring flow, stable references and impact propagation. The model needs a concrete validation that it adds implementation-facing interface knowledge without duplicating Shared Design Guidance, Screen / Views, User Flows, Functional Requirements or Acceptance Criteria.

## Scenario

- Shared Design Guidance supplies a calm, clear starting intent without replacing local obligations.
- `FEAT-001 Manage projects` is supported by `FR-020 Make project creation available`.
- `SV-001 Project overview` includes an empty state and Create project action; `UF-001 Create first project` includes it and `SV-002 Create project`.
- `UIR-001 Present project creation from an empty overview` applies to `SV-001`, depends on `FR-020`, and requires a clear, programmatically named Create project action.
- `UIR-002 Make project-creation validation recovery clear` applies to `UF-001` and records known correction guidance and retry after validation failure. It needs no redundant Functional Requirement link.
- Direct Acceptance Criteria validate the Feature, Requirement, Screen / View, Flow or relevant UI Requirement only when their observable evidence genuinely covers each linked target.

## Validation

- Shared guidance, stable interface context, cross-view journey, local UI obligation, system behavior and observable evidence remain distinct and traceable.
- A Screen/View-scoped and a Flow-scoped UI Requirement both express useful local obligations without duplicating their targets or requiring implementation prescriptions.
- Changing `UIR-001` stales its direct evidence and gives `SV-001` a coverage/readiness cue, but does not stale `FR-020` or `UF-001`.
- Changing `SV-001` stales `UIR-001` and `UF-001`; changing `FR-020` stales the artifacts that depend on it.
- Changing `UIR-002` stales its direct evidence and gives `UF-001` a coverage/readiness cue without staling the Flow itself.

## Conclusion

The UI Requirement model completes the current UX/UI artifact chain. It provides sufficient local interaction, accessibility and responsive-obligation traceability for implementation-ready handoff without turning shared guidance into a design system, a flow into a test script, or interface obligations into duplicate Functional Requirements.

## Documents Updated

- `docs/knowledge/data-model/project-model.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
