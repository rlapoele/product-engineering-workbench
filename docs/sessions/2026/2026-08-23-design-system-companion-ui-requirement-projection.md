# Session — Design System Companion UI Requirement Projection

**Session ID:** 2026-08-23-12

**Date:** 2026-08-23

**Status:** Crystallized

## Context

The Workbench extension needs a concise representation of included UI Requirements. Their applies-to targets can be separately included or excluded, and their optional detail and Resource References must remain useful implementation context without creating a duplicate canonical specification.

## Decision

Each UI Requirement entry uses `#### UIR-### — Title`, followed by the canonical Requirement statement. It then renders only non-empty blocks in this order:

1. **Applies to**, identifying the primary target and any additional targets;
2. **Interaction and state details**;
3. **Accessibility expectations**;
4. **Responsive expectations**; and
5. **Resource references**.

An applies-to Screen / View or User Flow target links to its extension entry when included in the package. When it is not included, the entry retains plain `SV-### — Title` or `UF-### — Title` text marked **Outside package**, without adding target detail or changing scope. Each Resource reference is a labelled link to its package-relative managed file or external URL; its canonical Description may render as a concise caption. Files are not embedded in `design.md`.

## Boundary

The projection excludes `depend_on` relationships, Acceptance Criteria, unrelated Feature context, implementation routes and component structure. It remains a concise derived projection; Applies to preserves the UI Requirement's own canonical scope without becoming a second package-selection mechanism.

## Result

The initial Workbench-extension projection is now complete for Screen / Views, User Flows and UI Requirements. Richer formatting refinements remain a later decision.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
