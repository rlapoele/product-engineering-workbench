# Session — Review Lens Catalog and Scope Compatibility

**Session ID:** 2026-07-30-08  
**Date:** 2026-07-30  
**Status:** Crystallized

## Context

`Review` is available for whole-Specification, eligible Section, active Product Artifact and existing narrow selected-content scopes. Every Review has one visible, confirmed lens, but the initial catalog and the meaning of lens compatibility remained unresolved.

The decision had to keep Reviews explainable without allowing a lens to become a hidden recipient-routing rule, a context-sufficiency verdict or an implementation certification.

## Decision

The initial MVP Review Lens catalog contains:

- Requirements Quality;
- UX Quality;
- Accessibility;
- Security;
- Testability; and
- Implementation Readiness.

The lenses assess specification coverage only. Accessibility may be standards-informed but never certifies conformance. Security never certifies security. Implementation Readiness identifies implementation-relevant coverage, constraints, dependencies and gaps through Findings and Summary; it never produces a Readiness Result or the deterministic Implementation Handoff Readiness outcome reserved for `Prepare Handoff`.

Compatibility is structural, not a claim that context is sufficient or that a recipient is qualified. The catalog maps each lens to its applicable content role:

| Lens | Compatible content role |
|---|---|
| Requirements Quality | Requirement- or acceptance-oriented content |
| UX Quality | Experience-oriented content |
| Accessibility | Interaction-oriented content |
| Security | Boundary- or constraint-oriented content |
| Testability | Behavior- or verification-oriented content |
| Implementation Readiness | Implementation-bearing content |

Every catalog lens is available from the whole Specification. At Artifact and eligible Section scope, the visible lens choices are filtered by the source's declared content role. A compatible scope may still have partial or insufficient context; the Review makes that limit explicit rather than disabling the request, changing the lens or producing a readiness outcome.

Selected-content Review inherits compatibility from its containing Artifact or Section. It remains a narrow review of the fragment and immediately relevant host context, and cannot conclude anything about the containing Artifact, Section or Specification as a whole.

At an Artifact contextual entry, a catalog-declared compatible default may be visibly preselected—for example, Requirements Quality for a Functional Requirement—but the requestor must still confirm it. Whole-Specification and Section Reviews always require deliberate selection. Lens compatibility may inform explainable capability guidance only after the lens is chosen; it never ranks, routes or selects the one recipient.

## Consequences

- Review remains one-recipient, bounded and understandable across all supported scope kinds.
- Structural compatibility and Context Sufficiency remain distinct: missing knowledge becomes a stated review limit or Finding, not hidden eligibility behavior.
- The catalog preserves the distinct roles of Review, `Validate Readiness` and `Prepare Handoff`.
- Concrete scope exercises remain needed to validate the catalog's artifact and section mappings.

## Documentation Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/ai/ai-orchestration.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/knowledge/decisions/ADR-003-asynchronous-transactional-collaboration.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Topic

Validate the initial catalog with concrete artifact, eligible-Section, whole-Specification and selected-content Review exercises, especially for Security and Implementation Readiness boundaries.
