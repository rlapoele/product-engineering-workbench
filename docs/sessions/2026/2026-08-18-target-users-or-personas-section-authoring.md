# Session — Target Users Or Personas Section Authoring

**Session ID:** 2026-08-18-04

**Date:** 2026-08-18

**Status:** Crystallized

## Context

The document-first specification needs to make its intended users concrete enough to guide later needs, features and interaction design, without requiring every user group to be represented as a fully fictionalized persona.

## Decision

- `Target Users or Personas` contains canonical **User Profile** Product Artifacts. Each has one required **Profile kind**: `Target User` for a broad intended group or `Persona` for a more specific, evidence-informed representative profile.
- Each User Profile requires a title and short description. It may optionally include flexible labelled relevant-context facts, goals and motivations, frustrations or pain points, and needs from the product as profile-local statement lists.
- Relevant context must be useful to product understanding; no demographic field, fictional biography or research-evidence field is mandatory.
- Needs from the product express the profile's perspective but do not replace independent User Need artifacts. Future links between them are explicit rather than inferred from wording.
- An empty section exposes `Add User Profile`; the inline draft starts with Profile kind, Title and Short description, then progressively reveals the optional profile areas. Saved profiles render as readable mini-profiles, showing only populated optional areas.
- User Profiles follow ordinary Product Artifact behavior: private drafts, explicit `Done editing` Revisions, direct edit, archived lifecycle with local confirmation, and relationship-based impact only after an explicit saved relationship exists.
- The section is required in every initial preset. An empty selected section participates in ordinary required-section `What next?` coverage guidance.
- Rich-text formatting is deferred to the existing document-wide capability decision.

## Consequences

The product can represent both broad audience understanding and deeper persona work in a consistent, traceable model. User Profiles give later User Needs a meaningful explicit origin without duplicating or silently creating those needs.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/decisions/ADR-006-mvp-product-artifact-model.md`
- `docs/knowledge/product/README.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
