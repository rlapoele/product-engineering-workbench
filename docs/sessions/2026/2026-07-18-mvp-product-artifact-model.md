# Session — MVP Product Artifact Model

**Date:** 2026-07-18

**Session ID:** 2026-07-18-01

**Status:** Crystallized

---

## Context

Follow-up work after defining the document-first MVP direction, first Specification Document Template, initial Section Catalog, collaboration model and implementation handoff package.

The objective was to answer the next Product Artifact Model questions required to make the foundation coherent enough for future UX, AI, architecture and implementation planning.

---

## Decisions

The MVP minimum Product Artifact set is:

- Vision
- Goal
- User Need
- Feature
- User Story
- Use Case
- Acceptance Criteria
- Functional Requirement
- Non-Functional Requirement
- Risk
- Assumption
- Decision
- Open Question

Specification Section is not a Product Artifact type for the MVP.

From the user experience standpoint, the Specification is the complete project documentation the user works on.

Internally, a Specification is a document-like composition or view over structured Product Artifacts and related product knowledge.

A Specification Section is a document/container structure within a Specification. It organizes and presents Product Artifacts.

---

## Common Artifact Fields

Every MVP Product Artifact should include:

- `id`
- `type`
- `title`
- `content`
- `status`
- `createdAt`
- `updatedAt`
- `createdBy`
- `updatedBy`
- `relationships`
- `provenance`
- `reviewState`
- `currentRevision` or `revisionHistory`

Artifact `title` is user-authored content.

Artifact `type` is system-defined.

---

## Localization

Artifact fields do not need localization fields for the MVP.

User-authored specification content should use a Project or Specification-level `contentLocale`.

Section Catalog and template-controlled text should be localization-ready through stable identifiers and keys such as:

- `labelKey`
- `descriptionKey`
- `guidanceKey`

---

## Structured Fields And Artifact Templates

Structured fields do not automatically become Product Artifacts.

A field should become a Product Artifact only when it needs independent lifecycle, review, reuse, relationships, provenance or collaboration.

The MVP should support artifact-specific schemas, but keep them lightweight.

User Story and Use Case should be the most structured artifact types.

Use Case should include optional `secondaryActors`.

Structured artifacts may be edited or rendered through Artifact Templates.

An Artifact Template is a user-facing representation of the artifact schema, not a replacement for the schema.

---

## Documents Updated

- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/glossary/glossary.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/session-active-work.md`
- `docs/knowledge/decisions/ADR-006-mvp-product-artifact-model.md`
- `docs/knowledge/decisions/README.md`
- `docs/sessions/index.md`

---

## Open Questions Updated

- DATA-001 — What is the minimum required artifact set? Resolved.
- DATA-002 — What are the required common fields for every artifact? Resolved.

The following remain open:

- DATA-003 — Which artifact relationship types are required initially?
- DATA-004 — What lifecycle states should artifacts support?

---

## Recommended Next Step

Continue with either:

- DATA-003 — Initial artifact relationship types; or
- DATA-004 — Artifact lifecycle states.
