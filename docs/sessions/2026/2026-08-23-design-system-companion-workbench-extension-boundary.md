# Session — Design System Companion Workbench-Extension Boundary

**Session ID:** 2026-08-23-09

**Date:** 2026-08-23

**Status:** Crystallized

## Context

Google `DESIGN.md` defines standard design-system sections, while the Workbench may add non-normative UX/UI context. The companion must make that context useful without silently expanding a selected handoff or becoming a second copy of the Specification.

## Decision

When a generated companion has eligible context, it places one `## Workbench Extension (Non-Normative)` after all standard target sections. Its non-empty subsections appear in this fixed order:

1. `### Screen / Views`
2. `### User Flows`
3. `### UI Requirements`

Only active Screen / Views, User Flows and UI Requirements explicitly included in the selected handoff package may appear. Within each subsection, entries follow the prepared document order and retain their ordinary readable references. The extension gives concise implementation context; complete canonical artifact content remains in the selected Specification files.

The companion does not traverse relationships to infer related artifacts, add out-of-package knowledge or expose another selection mechanism. Screen / View Resource References follow the established package inclusion rules and do not receive a separate companion-specific control.

## Boundary

The extension is a derived output projection, not canonical Product Knowledge, a new artifact surface or an alternate handoff scope. This decision sets artifact eligibility and order only; richer entry-level presentation remains a later decision.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
