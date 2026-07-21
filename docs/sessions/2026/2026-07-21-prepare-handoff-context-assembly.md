# Session — Prepare Handoff Context Assembly and UX/UI Guidance

**Date:** 2026-07-21

**Session ID:** 2026-07-21-03

**Status:** Crystallized

---

## Context

Follow-up work after validating the initial Context Assembly examples and deterministic artifact change impact propagation.

The objective was to validate the Context Assembly model for Prepare Handoff and clarify how an implementation-ready specification captures enough UX/UI design guidance without turning the workbench into a design-system authoring tool.

An external `DESIGN.md` format was considered as inspiration for combining structured values with human-readable design rationale and guidance. Its relevant lesson is that implementation consumers need both explicit rules and the reasoning needed to apply them. The workbench does not adopt that format or expand the MVP artifact model as a result.

---

## Prepare Handoff

Prepare Handoff is distinct from Validate Readiness:

- Validate Readiness asks whether product knowledge is ready for implementation.
- Prepare Handoff composes the best available implementation package for a requested export scope and Handoff Profile.

For the MVP, Prepare Handoff should use the default `Implementation Handoff` profile when no profile is selected.

### Context relevance

| Relevance | Context |
|---|---|
| Primary | requested export scope; Handoff Profile; active included sections and artifacts; Functional and Non-Functional Requirements; Acceptance Criteria; UX/UI design guidance; Screen/Views; User Flows; technical constraints; external integrations; implementation and validation guidance; artifact statuses; Decisions; Risks; Assumptions; Open Questions; relationship and dependency information; direct active dependencies outside the selected scope |
| Supporting | Vision; Goals; Non-Goals; Target Users; User Needs; data/domain model; prior readiness results and Reviews; relevant Discussions; known Provenance when required by project policy or Handoff Profile |
| Optional | related artifacts outside the selected scope; historical revisions; archived artifacts needed to explain an active Decision or removal |
| Excluded | unrelated project areas; archived artifacts without active explanatory value; raw conversation history superseded by accepted knowledge |

### Response and context sufficiency

The expected response shapes are Handoff Material, Summary, Finding, Question and Readiness Result.

Prepare Handoff should always generate a caveated package when the selected scope contains meaningful product definition. It should not be blocked by Stale artifacts, Risks, Assumptions, Open Questions or other implementation caveats.

The package should identify a preparation outcome of `Prepared` or `Prepared with Caveats`. This describes the package and is not a new Product Artifact lifecycle state.

The request should ask a clarifying question or report insufficient context only when the scope is not meaningful or contains too little product definition to prepare a responsible package.

### Caveats and external dependencies

The handoff must make active Stale artifacts, Risks, Assumptions, Open Questions, blockers, and missing or external UX/UI design guidance visible as implementation caveats.

Direct active dependencies outside the requested export scope should be included or referenced and clearly labeled as external dependencies. The handoff must not silently omit those dependencies or treat them as knowledge contained in the package.

---

## UX/UI Design Requirements and Interaction Notes

The Section Catalog entry is renamed from `UX Requirements and Interaction Notes` to `UX/UI Design Requirements and Interaction Notes`.

This section captures the application-specific UX/UI guidance needed for faithful implementation. It may include:

- visual intent;
- layout and spacing conventions;
- color and typography use;
- shapes and elevation;
- component usage and states;
- responsive behavior;
- accessibility expectations;
- references to external design sources such as design files or an existing design system.

The workbench should let users write and define this guidance as section content, structured fields and external references. The MVP does not add separate Product Artifact types for Design Token, Color, Typography, UI Component, Wireframe or Prototype, and does not become a design-system authoring tool.

When this section is included in an export, its active guidance and references should be carried into the specification files and implementation brief. Missing, Stale or externally maintained guidance should become explicit implementation caveats.

---

## Documents Updated

- `docs/knowledge/ai/ai-orchestration.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/knowledge/decisions/ADR-002-document-first-template-model.md`
- `docs/knowledge/decisions/ADR-006-mvp-product-artifact-model.md`
- `docs/glossary/glossary.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
- `docs/sessions/session-active-work.md`

---

## Recommended Next Step

Validate Context Assembly for Review UX Requirement with Accessibility Lens, using the clarified UX/UI design guidance as part of the review context.
