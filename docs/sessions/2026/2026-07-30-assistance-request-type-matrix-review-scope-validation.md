# Session — Assistance Request Type Matrix: Review Scope Validation

**Session ID:** 2026-07-30-07  
**Date:** 2026-07-30  
**Status:** Crystallized

## Context

`Review` was already a composite Assistance Request Type, but its scope boundary and the role of a Review Lens needed clarification. The model had to allow focused Artifact review, Section review and whole-Specification review without turning a broad review into an ambiguous all-purpose request or a certification.

## Decision

Each MVP Review has exactly one explicit Review Lens. The requestor sees and confirms that lens before submission. A contextual entry may preselect a compatible default only when the initial lens catalog declares one; it must never be applied invisibly. Whole-Specification and Specification Section Reviews require deliberate lens selection.

One Review may run multiple Check Types within its selected lens. Different lenses require separate Collaboration Requests.

`Review` is available from:

- the whole Specification;
- an eligible Specification Section with non-whitespace section content or an active contained Product Artifact; and
- an active Product Artifact.

At Artifact scope, the Review assesses the Artifact's specification coverage for the named lens and stated role. At Section scope, it assesses active content and relevant connections for the Section's template purpose. At whole-Specification scope, it assesses available cross-section coverage for the named lens. Existing selected-content Review availability is unchanged: it remains a narrow fragment review and does not represent the containing Artifact, Section or Specification as a whole.

The selected lens determines the primary and supporting context, applicable checks and lens-qualified result. A Review returns Findings, Questions, Suggested Edits, Proposed Artifacts, Proposed Relationships, Proposed Decisions and a Summary. It concludes only that specification coverage appears adequate for the named lens at the current scope, that findings or risks were identified, or that available context is insufficient. Even an Implementation Readiness Lens uses Findings and Summary rather than a Readiness Result.

Review neither approves Product Knowledge nor certifies implementation, conformance, security, accessibility or readiness. It does not create Product Knowledge, delivery workflow or automatic changes. The Readiness Fact Check Set remains specific to `Validate Readiness`.

## Consequences

- A review remains bounded, explainable and compatible with one-recipient Collaboration Requests.
- A visible lens makes context selection and results understandable without hidden defaults.
- The product distinguishes specification-coverage assessment from approval, conformance and deterministic readiness.
- The initial lens catalog and structural compatibility rules remain a focused next decision.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/ai/ai-orchestration.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/knowledge/decisions/ADR-003-asynchronous-transactional-collaboration.md`
- `docs/planning/open-questions.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Topic

Define the initial Review Lens catalog and structural compatibility rules for Artifact, Section, whole-Specification and selected-content scopes.
