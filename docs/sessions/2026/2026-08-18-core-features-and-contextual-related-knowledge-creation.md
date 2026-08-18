# Session — Core Features And Contextual Related-Knowledge Creation

**Session ID:** 2026-08-18-07

**Date:** 2026-08-18

**Status:** Crystallized

## Context

The document needs to turn explicit user needs and scope into a readable set of major product capabilities, while keeping feature organization distinct from technical architecture and letting authors resolve missing prerequisite knowledge without abandoning their current draft.

## Decision

- `Core Features` contains independently versioned Core Feature Product Artifacts. Each requires a title, concise description and one or more explicit User Need relationships that it `addresses`.
- Features may be presented under optional Feature Groups. A group has a title and optional short description, contains zero or more Features, and is section-owned presentation only—not a Product Artifact, technical module or relationship type. A Feature is ungrouped or belongs to one group.
- Group creation, edit, ordering and Feature moves between groups create document-composition Revisions only. They do not change Feature meaning, lifecycle or impact state. Nested groups are excluded.
- The section always offers `Add Core Feature`, `Add Feature Group` and `Add User Need`. A Feature draft requires User Need selection; when no suitable Need exists, the user may create one in its canonical section or cancel.
- Creating prerequisite or related knowledge from a local draft uses **Contextual Related-Knowledge Creation**: the original draft is preserved, the new knowledge is saved in its canonical section, and the original draft resumes with the new relationship preselected.
- The pattern is always explicit and author-controlled. It never silently creates Product Knowledge, infers relationships, creates tasks or introduces a workflow gate.
- A saved Feature follows ordinary artifact drafts, Revisions, lifecycle and explicit relationship-based impact behavior. Its detailed behavior remains in later User Stories, Use Cases, Requirements and Acceptance Criteria.
- Core Features is required in every initial preset; an empty section participates in ordinary required-section `What next?` guidance. Rich-text formatting remains deferred.

## Consequences

The document preserves the user-value chain from User Need to Core Feature while allowing thematic organization without encoding an implementation architecture. The reusable continuation pattern reduces dead ends and supports progressive specification tightening without weakening explicit user control.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/index.md`
