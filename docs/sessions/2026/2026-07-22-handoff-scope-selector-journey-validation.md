# Session — Handoff Scope Selector Journey Validation

**Date:** 2026-07-22

**Session ID:** 2026-07-22-13

**Status:** Crystallized

---

## Context

The first-pass scope-selector interaction defines the available roles and deterministic checks. This session validates that model through a realistic end-to-end journey: starting from the default whole-Specification handoff and ending with a customized, mixed partial handoff.

---

## Scenario

Alex owns the MealLoop subscription meal-delivery web-app Specification and needs to prepare an implementation handoff for `Pause subscription`, including its settings interface. Cancellation behavior must remain outside this handoff.

The Project Knowledge contains:

- `FEAT-014 — Pause or resume subscription`, explicitly related Functional Requirements and Acceptance Criteria;
- the subscription settings Screen/View, management User Flow and related UI Requirement;
- a Subscription data-model excerpt with pause-period context;
- cancellation behavior and its screen, directly related to the pause capability but intentionally not requested for implementation; and
- a Stripe billing direct external dependency blocked by an Open Question about retaining an active promotion.

---

## Validated Journey

1. Alex selects **Prepare Handoff**. The scope panel opens over the document outline with the entire Specification as Definition Scope, readiness validation enabled and readiness-report inclusion enabled.
2. Alex reviews the default boundary, determines that it includes unrelated cancellation work, and selects **Customize scope**.
3. Alex creates a Feature Definition Scope and includes the selected `Core Features`, `Functional Requirements` and `Acceptance Criteria` knowledge for `Pause subscription`. The section-rooted selection remains eligible.
4. Alex creates a UX/UI Definition Scope and includes the subscription settings Screen/View, management User Flow and related UI Requirement. The shared Functional Requirements and Acceptance Criteria appear once and identify both Definition Scopes they serve through explicit relationships.
5. Alex adds the Subscription data-model excerpt as Supporting Context. It informs the implementation without activating the data-model-centered definition rule.
6. Alex marks cancellation behavior and its screen as outside this handoff. They are represented as directly related knowledge intentionally outside the package, rather than as a generic omission from the Project Specification.
7. The panel derives Stripe billing from Definition Scope relationships and displays it as a read-only Direct External Dependency. Alex may add available information about Stripe as Supporting Context, but cannot relabel the dependency itself as included knowledge.
8. The panel displays deterministic meaningful-definition checks. The Feature Definition Scope passes Feature definition, related Functional Requirement and acceptance-coverage checks. The UX/UI Definition Scope passes interface boundary, User Flow, UI behavior, and system behavior with acceptance-coverage checks. The panel does not add missing knowledge automatically.
9. Readiness evaluates the selected scope and its direct external dependencies. The Open Question explicitly blocking Stripe makes the outcome `Not Ready`.
10. Alex selects **Preview package boundary**. It shows the two Definition Scopes, Supporting Context, cancellation as directly related out-of-package knowledge, Stripe as a Direct External Dependency, and the readiness caveat.
11. Alex selects **Prepare Handoff**. Because both Definition Scopes contain meaningful product definition, the workbench produces a `Prepared with Caveats` partial package and includes `READINESS_REPORT.md`.

---

## Decision

For a mixed handoff, each Definition Scope is an explicitly created, separately displayed selection set. The user creates a new Definition Scope or adds knowledge to a particular existing Definition Scope; the workbench must not infer scope membership from artifact type or document position.

This interaction gives each implementation subject a clear deterministic check set. It preserves the existing rule that shared evidence may serve multiple Definition Scopes only through explicit relationships.

---

## Consequences

The journey confirms that the scope selector can move from a safe whole-Specification default to a precise partial package without hidden scope expansion, inferred designation or delivery-management behavior.

The user can see the distinction among meaningful definition, readiness and package preparation at the point it matters: both Definition Scopes pass their definition rules, the direct external dependency makes readiness Not Ready, and the meaningful partial package remains available with caveats.

Exact names, visual grouping treatment, desktop and mobile controls, and keyboard behavior remain prototype work.

---

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

---

## Recommended Next Step

Validate a contrasting journey in which a user attempts to prepare an eligible but insufficient partial handoff, then corrects the missing definition through ordinary document actions.
