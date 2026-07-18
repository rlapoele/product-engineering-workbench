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

- DATA-003 — Which artifact relationship types are required initially? Resolved after follow-up discussion.
- DATA-004 — What lifecycle states should artifacts support? Resolved after follow-up discussion.
- ARCH-001 — Should the canonical product state be stored as a document graph? Resolved after follow-up discussion.

---

## Follow-Up Decisions

The MVP relationship types are:

- `supports`
- `addresses`
- `part_of`
- `validates`
- `depends_on`
- `affects`
- `explains`
- `blocks`
- `derived_from`
- `relates_to`

`belongs_to` was replaced by `part_of` because `part_of` is clearer for artifact hierarchy and composition.

`derived_from` was added because derivation matters for provenance, AI generation, refinement and implementation handoff traceability.

The MVP artifact lifecycle states are:

- Draft
- Needs Review
- Validated
- Stale
- Archived

Needs Review means the artifact requires verification before it can be considered reliable.

Review does not need to be human-only. Verification may be performed by a human contributor, AI contributor or capability-specific reviewer when appropriate.

The canonical product state should be a structured Project State object.

Project State should contain both:

- document/specification composition;
- artifact and relationship records.

The Product Knowledge Graph is an interpretation of the Product Artifacts and Artifact Relationships inside Project State.

The graph does not need to be stored as a separate canonical graph object or graph database in the MVP.

Specification Sections should organize artifact references and section content rather than exclusively owning artifacts.

Artifact Relationships should be first-class records with their own metadata, including source or provenance metadata.

---

## Recommended Next Step

Continue with:

- AI-001 — AI context assembly.
