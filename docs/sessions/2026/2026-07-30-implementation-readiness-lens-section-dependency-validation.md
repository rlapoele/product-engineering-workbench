# Session — Implementation Readiness Lens Section-Dependency Validation

**Session ID:** 2026-07-30-10  
**Date:** 2026-07-30  
**Status:** Crystallized

## Context

The Implementation Readiness Lens assesses implementation-relevant specification coverage through non-canonical Review Findings and Summary. This exercise validates its compatibility with an eligible Section whose active content contains incomplete dependency knowledge, without borrowing the deterministic handoff-readiness behavior reserved for `Prepare Handoff`.

## Exercise

MeatLoop's `External Integrations` Section is eligible because it contains non-whitespace content and active integration knowledge. It defines the payment-provider purpose, known integration behavior, related Functional Requirements and Acceptance Criteria. The provider webhook contract and account-ownership dependency remain unresolved.

The owner creates a `Review` request with the Implementation Readiness Lens for that Section.

## Decision

The eligible `External Integrations` Section is Implementation Readiness-compatible because it has implementation-bearing active content. Its template purpose and available relationships establish the structural review boundary; incomplete webhook-contract or account-ownership knowledge does not make the Section incompatible.

Primary context includes the Section's template purpose and active content, related Functional Requirements and Acceptance Criteria, known dependency and contract material, technical constraints, Decisions, Risks, Assumptions and Open Questions. Adjacent or related Sections, data/domain and user-facing behavior, Resource References and prior Reviews may be supporting context.

The Review may identify incomplete implementation behavior, unresolved dependencies, missing contract or ownership information, unclear constraints, missing acceptance evidence or unclear next-definition needs where the available Product Knowledge makes them relevant. It returns non-canonical Findings, Questions, Suggested Edits or Proposals and Summary. The Summary may state that the Section's implementation-readiness coverage is limited by unresolved dependencies.

This Review does not return a Readiness Result; calculate `Ready`, `Ready with Caveats` or `Not Ready`; run the Readiness Fact Check Set or Handoff Profile meaningful-definition checks; create `READINESS_REPORT.md` or a package; or determine that an external dependency blocks a handoff. Those deterministic outcomes and rules remain exclusive to `Prepare Handoff`.

## Consequences

- Section eligibility and lens compatibility remain independent from implementation completeness.
- Users can request focused implementation-coverage reasoning before all dependencies are resolved.
- The result remains an explainable contribution, not a handoff-readiness outcome or delivery-management signal.

## Documentation Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/ai/ai-orchestration.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Topic

Validate selected-content Review with the Accessibility Lens, confirming compatible-host inheritance and the fragment-only conclusion boundary.
