# Session — Deterministic Next-step Guidance

**Date:** 2026-07-21

**Session ID:** 2026-07-21-13

**Status:** Crystallized

---

## Context

The document-first experience should help users identify useful follow-up work without forcing a linear workflow, creating delivery-management behavior or depending on AI.

This session defined the first deterministic `What next?` guidance mechanism.

---

## Decision

The document provides an optional, user-invoked `What next?` control near the document outline. It presents deterministic guidance derived from explicit Project State. It is not a task list, Product Artifact, workflow gate or AI request.

The control shows up to three highest-priority items and can open a full list. Every item identifies its scope, gives a plain-language explanation of its basis and lets the user navigate to that scope or open its ordinary contextual action menu. Guidance never creates or applies a change automatically and does not require the user to follow a prescribed order.

### Initial categories and priority

| Priority | Guidance item | Deterministic basis |
|---:|---|---|
| 1 | Continue draft | The current user owns an Edit-in-progress Draft. |
| 2 | Resolve blocker | An active Open Question explicitly `blocks` an active artifact. |
| 3 | Review impact | Active artifacts are Stale or have coverage/readiness warnings. Stale ranks above a warning. |
| 4 | Complete required coverage | A required selected section has no non-whitespace section content and no active contained Product Artifacts. |

Where items share a priority, the system prefers the user's current scope, then direct relationship or impact paths, then broader document scope.

### Boundaries

The workbench must not show optional sections as missing or problematic. It must not infer semantic gaps, missing relationships or a preferred product-design sequence unless a future explicit template or validation rule supports that result.

If no deterministic guidance applies, the workbench should say that no immediate follow-up has been identified and leave the user free to continue wherever is useful.

AI may later provide a separate, clearly labeled optional suggestion layer. AI is not required for the core mechanism.

---

## Consequences

The workbench can offer helpful guidance without obscuring human control or changing its product-engineering scope.

The guidance is repeatable, explainable and available even when AI is unavailable.

The rules are a first pass and should be validated through prototypes and concrete specification exercises before final visual or implementation decisions are made.

---

## Documents Updated

- `docs/knowledge/ux/document-first-ui.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/decisions/ADR-002-document-first-template-model.md`
- `docs/glossary/glossary.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

---

## Recommended Next Step

Validate the initial guidance ordering with a concrete specification exercise, including simultaneous drafts, blockers, impact outcomes and required-but-empty sections.
