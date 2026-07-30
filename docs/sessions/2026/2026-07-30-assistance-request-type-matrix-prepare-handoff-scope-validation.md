# Session — Assistance Request Type Matrix: Prepare Handoff Scope Validation

**Session ID:** 2026-07-30-04  
**Date:** 2026-07-30  
**Status:** Crystallized

## Context

Every initial MVP Assistance Request Type already has at least one context-assembly exercise. The first-pass availability matrix still needed to distinguish a Specification Section from an individual Product Artifact or selected content, particularly for `Prepare Handoff` because the Handoff Profile owns root-scope eligibility.

## Exercise

MeatLoop has a non-empty `Core Features` section containing `FEAT-014 Overdue invoice handling`, explicitly related Functional Requirements and Acceptance Criteria.

The owner compares `Prepare Handoff` from the whole Specification, the `Core Features` section, `FEAT-014` itself and selected text inside `FEAT-014`.

## Decision

`Prepare Handoff` is available from:

- the whole Specification; and
- an eligible Specification Section with non-whitespace section content or an active contained Product Artifact.

It is unavailable from an individual Product Artifact or selected content. Those narrower scopes may only refine a section-rooted handoff selection after the owner has begun a handoff from an eligible root.

Scope eligibility remains distinct from meaningful product definition. A non-empty `Core Features` section containing only a high-level Feature is eligible as a handoff root, but does not satisfy the feature-centered minimum definition. The handoff scope panel retains that selection, identifies the missing related Functional Requirement and Acceptance Criteria coverage, and prevents package preparation. The owner recovers through ordinary document actions; the workbench does not create a task, queue or automatic knowledge.

## Consequences

- The matrix does not imply that an artifact or text selection can become a standalone handoff package.
- Owners can inspect a section-rooted handoff boundary before all definition checks pass.
- Existing no-package recovery behavior remains available and understandable.
- Later matrix exercises should distinguish scope kinds whenever a request type has structural eligibility rules.

## Documents Updated

- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Topic

Validate `Validate Readiness` on an individual Product Artifact, an eligible Specification Section and the whole Specification, so its local knowledge assessment remains distinct from implementation-handoff readiness.
