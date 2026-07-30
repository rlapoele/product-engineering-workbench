# Session — Security Lens Integration-Boundary Validation

**Session ID:** 2026-07-30-09  
**Date:** 2026-07-30  
**Status:** Crystallized

## Context

The initial Review Lens catalog defines Security as compatible with boundary- or constraint-oriented content. This exercise validates whether an active Product Artifact that defines integration behavior has that compatibility even when key security detail is absent.

## Exercise

MeatLoop has an active Product Artifact that defines the behavior of a payment-provider integration: its external-system purpose, the known trigger, direction of data or control, and expected outcome. The owner creates a `Review` request with the Security Lens for that Artifact.

## Decision

An active Product Artifact that defines integration behavior is Security-compatible because it establishes a system boundary. The Security Review assesses specification coverage, not implemented security.

Primary context includes the selected Artifact and stated boundary; external-system purpose; directly related Functional Requirements and Acceptance Criteria; explicit authentication, data-handling, constraint, Decision and Risk knowledge; and available contract Resource References. Related user-facing behavior, data/domain rules, dependencies, Assumptions, Open Questions, technical constraints and prior Reviews may be supporting context when relevant.

The Review may identify unclear trust boundaries, authentication or authorization assumptions, sensitive-data handling, webhook or callback verification, failure or replay behavior, and missing security verification evidence only where available Product Knowledge makes those concerns relevant. It returns non-canonical Findings, Questions, Suggested Edits or Proposals and Summary.

Missing external contract, authentication, data-handling or verification detail makes the assessment partial or insufficient, or becomes a Finding. It does not make the Artifact structurally incompatible, certify security, invoke the Readiness Fact Check Set, produce a Readiness Result, evaluate deterministic Implementation Handoff Readiness or route a recipient.

## Consequences

- System-boundary definition establishes lens compatibility independently of evidence completeness.
- The user can request a bounded Security Review early, while remaining able to see exactly what limits its conclusion.
- Security Review stays distinct from a security audit, implementation conformance assessment, `Validate Readiness` and `Prepare Handoff`.

## Documentation Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/ai/ai-orchestration.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Topic

Validate Implementation Readiness Lens boundaries on an eligible Section with incomplete dependencies, ensuring it returns coverage Findings and Summary without becoming deterministic handoff readiness.
