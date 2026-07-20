# Session — AI Assistance Visibility And Governance

**Date:** 2026-07-20

**Session ID:** 2026-07-20-03

**Status:** Crystallized

---

## Context

Follow-up work after clarifying Assistance Request Types, Contribution Response Shapes, Review as a composite request and the first-pass Context Assembly model.

The objective was to clarify how the workbench should make AI assistance visible and governable without claiming it can prevent all external AI use by human collaborators.

---

## Decision

The workbench should make known AI assistance visible, reviewable and governable.

AI assistance inside the workbench should be visible through:

- scoped Assistance Requests;
- AI Contributor identity;
- requested capability or Review Lens;
- Contribution Responses;
- Context Explanations;
- acceptance or rejection status;
- resulting Revisions;
- Provenance of accepted product knowledge;
- export metadata or notes when relevant.

AI-generated or AI-assisted material should not silently become canonical product knowledge.

The project owner or another authorized contributor should decide whether to accept, reject, edit or otherwise act on the contribution.

The workbench can govern AI assistance that occurs inside the product, including built-in AI Contributors and disclosed AI-assisted human submissions.

The workbench cannot reliably prevent or prove undisclosed external AI use by a human collaborator.

Therefore, the product should support disclosure, provenance, review and project governance expectations rather than claiming full AI-use prevention or detection.

---

## Consequences

Contribution, Revision and Provenance remain distinct:

- Contribution records who or what participated.
- Revision records the saved change.
- Provenance records known origin or derivation.

Known AI assistance should be represented as provenance when accepted into canonical product knowledge.

Human collaborators may disclose external AI assistance, and that disclosure may be preserved.

If external AI use is not disclosed, the workbench should not imply that human-submitted content has been proven human-only.

The MVP does not need AI-detection functionality or advanced compliance reporting.

The session also identified a follow-up question: because the workbench cannot reliably prevent or prove external AI use by document owners or human contributors, the product should later evaluate whether AI assistance disclosure is needed at all, and if so whether it should be required, optional or policy-driven.

---

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/ai/ai-orchestration.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/principles/product-principles.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/knowledge/decisions/ADR-008-ai-assistance-visibility-and-governance.md`
- `docs/knowledge/decisions/README.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
- `docs/sessions/session-active-work.md`

---

## Recommended Next Step

Continue validating additional Context Assembly examples, starting with:

- Analyze Impact on a Requirement.

Return later to:

- whether AI assistance disclosure should be required, optional, policy-driven or omitted.
