# Session — User Flow Stable References

**Session ID:** 2026-08-19-20

**Date:** 2026-08-19

**Status:** Crystallized

## Context

User Flows need a durable readable identity for related interface requirements, acceptance evidence, UX reviews, handoffs and design-context output. Titles and step composition may change, while implementation routes, analytics events and test identifiers remain separate technical or operational concerns.

## Decision

Each User Flow receives an immutable project-scoped readable reference at creation, such as `UF-001`, in addition to its internal artifact identifier. It does not encode a title, step position, Screen / View, implementation route, analytics event or test-case identifier.

The reference remains unchanged by editing, step reordering, relationship changes and archival. Prepared Implementation Handoffs retain the included reference and saved artifact snapshot. UI Requirements, Acceptance Criteria, UX reviews and derived `design.md` output may use it for unambiguous traceability.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
