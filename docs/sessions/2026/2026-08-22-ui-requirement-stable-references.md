# Session — UI Requirement Stable References

**Session ID:** 2026-08-22-02

**Date:** 2026-08-22

**Status:** Crystallized

## Context

UI Requirements need a durable readable identity for acceptance evidence, UX reviews, implementation handoffs and derived design context. Titles and applies-to targets may change, while implementation routes, components and accessibility standards must remain independent product or technical concerns.

## Decision

Each UI Requirement receives an immutable project-scoped readable reference at creation, such as `UIR-001`, in addition to its internal artifact identifier. The reference does not encode its title, Screen / View, User Flow, implementation route, component or accessibility standard.

The reference remains unchanged by editing, applies-to relationship changes and archival. Prepared Implementation Handoffs retain the included reference and saved artifact snapshot. Acceptance Criteria, UX reviews and derived `design.md` output may use it for unambiguous traceability.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
