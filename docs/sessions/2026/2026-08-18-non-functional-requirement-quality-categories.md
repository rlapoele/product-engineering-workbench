# Session — Non-Functional Requirement Quality Categories

**Session ID:** 2026-08-18-17

**Date:** 2026-08-18

**Status:** Crystallized

## Context

Non-Functional Requirements need enough common structure for authors to scan, filter and review quality expectations without making the specification methodology-specific or forcing arbitrary categorization.

## Decision

- The initial quality-category vocabulary is Performance, Reliability and availability, Security, Privacy, Accessibility, Compatibility, Usability, Compliance and Other.
- Selecting Other requires a short custom category label.
- Category labels are document-facing Content-Locale text.
- A category is an organizational and review aid only. It does not create a document subsection, technical module, workflow or independent lifecycle.

## Consequences

The product has a small, understandable starting vocabulary while accommodating a justified project-specific quality area. Extending the vocabulary later requires an explicit product decision rather than silently creating uncontrolled categories.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/index.md`
