# Session — Screen / View Stable References

**Session ID:** 2026-08-19-13

**Date:** 2026-08-19

**Status:** Crystallized

## Context

Screen / Views need durable readable identity across changing titles, document composition, related flows and implementation-facing handoffs. A title alone is ambiguous and should not become a proxy for an implementation route.

## Decision

Each Screen / View receives an immutable project-scoped readable reference at creation, such as `SV-001`, in addition to its internal artifact identifier. It does not encode the Screen / View title, document position, implementation route or URL.

The reference remains unchanged by editing, reordering, relationship changes and archival. Prepared Implementation Handoffs retain the included reference and saved artifact snapshot. User Flows, UI Requirements, Acceptance Criteria and derived `design.md` output may use it for unambiguous traceability.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
