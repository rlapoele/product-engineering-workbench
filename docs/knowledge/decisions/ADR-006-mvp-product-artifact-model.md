# ADR-006 — MVP Product Artifact Model

**Status:** Accepted

**Date:** 2026-07-18

---

## Context

The Product Engineering Workbench needs a minimum Product Artifact model that supports the first Section Catalog, document-first editing, collaboration, AI assistance and implementation handoff export.

The model must provide enough structure for review, traceability, provenance and export without turning every small field into its own independent artifact.

The product also needs to support localization later, while avoiding repeated locale metadata on every artifact when a specification is expected to be authored in one language.

---

## Origin

Resolved from:

- DATA-001 — What is the minimum required artifact set?
- DATA-002 — What are the required common fields for every artifact?
- Session Active Work, Product Artifact Model discussion, 2026-07-18

---

## Decision

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
- Screen / View
- User Flow
- UI Requirement
- Risk
- Assumption
- Decision
- Open Question

Specification Section is not a Product Artifact type in the MVP.

A Specification Section is a document/container structure within a Specification. It organizes and presents Product Artifacts.

From the user experience standpoint, the Specification is the complete project documentation the user works on. Internally, a Specification is a document-like composition or view over structured Product Artifacts and related product knowledge.

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

Artifact fields do not need localization fields for the MVP.

User-authored specification content should use a Project or Specification-level `contentLocale`.

Section Catalog and template-controlled text should be localization-ready through stable identifiers and keys such as `labelKey`, `descriptionKey` and `guidanceKey`.

Structured fields do not automatically become Product Artifacts.

A field should become a Product Artifact only when it needs independent lifecycle, review, reuse, relationships, provenance or collaboration.

The MVP should support artifact-specific schemas, but keep them lightweight.

User Story and Use Case should be the most structured artifact types.

Use Case should include optional `secondaryActors`.

Structured artifacts may be edited or rendered through Artifact Templates. An Artifact Template is a user-facing representation of the artifact schema, not a replacement for the schema.

---

## Rationale

This decision:

- supports the first Section Catalog without requiring one artifact type per section;
- keeps the artifact model broad enough for implementation-ready specifications;
- includes Assumption because assumptions are part of the `Risks, Assumptions and Open Questions` section and matter during implementation handoff;
- includes Screen / View, User Flow and UI Requirement because implementation-ready web app specifications need enough UX/UI structure to describe screens, flows, interactions, visual expectations, states, responsive behavior and accessibility expectations;
- preserves document-first UX while maintaining structured product knowledge;
- avoids over-fragmenting User Story and Use Case fields into separate artifacts;
- supports future localization by separating app-controlled template text from user-authored specification content;
- supports template-like editing over structured artifacts.

The rule for promoting a field to a Product Artifact prevents the model from becoming too granular too early.

---

## Consequences

The MVP should support:

- the accepted minimum Product Artifact set;
- common artifact fields for identity, editing, review, relationships, provenance and revision history;
- Project or Specification-level content locale;
- localization-ready Section Catalog entries;
- artifact-specific schemas;
- artifact templates for structured artifact editing or rendering.

The MVP does not require:

- artifact-level localization fields;
- Specification Section as a Product Artifact type;
- separate Product Artifacts for every structured field inside User Stories or Use Cases;
- lower-level design-system artifact types such as Design Token, Color, Typography, UI Component, Wireframe or Prototype;
- common fields such as priority, owner, tags, comments or readiness score.

Artifact lifecycle states and relationship types remain separate open questions.

Follow-up clarification:

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

The MVP artifact lifecycle states are:

- Draft
- Needs Review
- Validated
- Stale
- Archived

---

## Alternatives Considered

### Treat every structured field as a Product Artifact

This would maximize traceability but would make the MVP too granular and difficult to use.

### Treat Specification Section as a Product Artifact

This would make the document structure part of the artifact model, but it would blur the distinction between document organization and product knowledge.

### Store locale on every artifact

This would support mixed-language specifications, but the expected MVP use case is a single content locale per specification.

### Use lightweight schemas with artifact templates

This was selected because it preserves structure while supporting a friendly document-like editing experience.

---

## Related Documents

- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/glossary/glossary.md`
- `docs/planning/open-questions.md`
- `docs/sessions/session-active-work.md`
