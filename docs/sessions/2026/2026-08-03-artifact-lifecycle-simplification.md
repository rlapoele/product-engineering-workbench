# Session — Artifact Lifecycle Simplification

**Session ID:** 2026-08-03-02  
**Date:** 2026-08-03  
**Status:** Crystallized

## Context

The previous five-status lifecycle mixed three different concerns: whether Product Knowledge is current, its change history, and review or validation evidence. The first-slice prototype also made a newly saved Goal appear uncertain by showing `Draft`, even though it had been saved as canonical Product Knowledge.

## Decision

Product Artifacts have three mutually exclusive lifecycle states: **Active**, **Stale** and **Archived**.

- **Active** is ordinary canonical Product Knowledge. It is normally not persistently labeled and makes no claim about maturity, review or permanent correctness.
- **Stale** means a semantically relevant upstream change may have made an Artifact inaccurate. It retains its causal impact explanation.
- **Archived** means an Artifact is intentionally inactive historical knowledge. It is excluded from active work, ordinary handoff composition and future propagation.

Creation and update history belongs in Revisions. An edit-in-progress draft is private working input. Review results, validation confirmations, coverage/readiness warnings, blockers and detected inconsistencies are evidence or attention signals, not lifecycle states. `Needs Review` and `Validated` are therefore removed as lifecycle statuses. A validation confirmation does not lock an Artifact.

| Current state | Actor and action | Result |
|---|---|---|
| No Artifact | Project Owner saves a new Artifact | Active; Revision 1 is created |
| Active | Project Owner saves content changes | Active; a new Revision is created |
| Active | System detects a semantic upstream impact | Stale; causal path is recorded without a content Revision |
| Stale | Project Owner saves a content update | Active; a new Revision is created |
| Stale | Project Owner confirms it remains current | Active; confirmation is recorded |
| Active or Stale | Project Owner archives it | Archived |
| Archived | Project Owner restores it | Active |

Only the Project Owner makes canonical lifecycle transitions. Human or AI contributors may supply non-canonical review evidence, but cannot change lifecycle status. A Project Owner may later hard-delete an Archived Artifact through a separate retention operation. Hard deletion is not a soft status; its retention, relationship and recovery semantics are deferred. Archiving and hard deletion remain outside the first slice.

## Consequences

- Saved first-slice Goals are canonical Active Product Knowledge with Revision 1; the saved-state confirmation does not need a `Draft` badge.
- Stale remains the meaningful visible attention state, while Archived remains available in historical contexts.
- Readiness and handoff continue to use active versus Archived scope and treat Stale as evidence or a caveat; they do not require a `Validated` status.
- The existing low-fidelity prototype should later replace its saved `Draft` presentation with ordinary save confirmation before its next review.
- No product implementation is authorized by this decision.

## Documentation Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/architecture/backend-architecture.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/knowledge/decisions/ADR-006-mvp-product-artifact-model.md`
- `docs/knowledge/decisions/ADR-011-first-slice-data-and-lifecycle-contracts.md`
- `docs/knowledge/decisions/ADR-012-first-slice-ux-prototype-validation.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Topic

Refine the low-fidelity prototype's saved-Goal presentation and then complete the remaining solo Prototype Review checks against the updated interaction model.
