# Session — Design System Companion Screen / View Projection

**Session ID:** 2026-08-23-10

**Date:** 2026-08-23

**Status:** Crystallized

## Context

The Workbench extension now has a bounded Screen / Views subsection for artifacts already included in a handoff. Its entry-level content must give an implementation consumer useful visual context without duplicating the Specification, embedding package resources or treating visual metadata as canonical interface behavior.

## Decision

Each Screen / View entry uses `#### SV-### — Title`, then its required Purpose. It renders only non-empty blocks in this order:

1. **Key content and actions**
2. **Key states**
3. **Visual references**

Each included Visual reference is a labelled Markdown link to its managed package-relative file or external URL. Its canonical Description may render as a concise caption. When present, represented state and viewport appear beside the specific reference; no unspecified context is inferred.

Managed screenshots, mockups and other files are copied once into the handoff package under the established Resource rules. They are not embedded in `design.md`; the entry links to the copied file. External sources remain links.

## Boundary

The projection excludes User Profile context, Feature and Functional Requirement relationships, Acceptance Criteria, implementation routes, component trees and other implementation structure. Those remain in the canonical Specification. The Screen / View entry is concise portable context, not a visual canvas, duplicate artifact document or new handoff scope.

User Flow and UI Requirement entry-level projections remain separate later decisions.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
