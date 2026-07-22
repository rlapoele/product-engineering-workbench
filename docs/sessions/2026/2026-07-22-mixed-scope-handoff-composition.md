# Session — Mixed-Scope Handoff Composition

**Date:** 2026-07-22

**Session ID:** 2026-07-22-09

**Status:** Crystallized

---

## Context

The MVP `Implementation Handoff` profile has meaningful-product-definition rules for Feature, UX/UI, integration and data-model-centered scopes. A mixed handoff needs to include related knowledge without either silently activating unrelated minimum rules or allowing an implementation subject to evade its required definition.

---

## Decision

For a mixed-scope handoff, the user explicitly designates selected knowledge as either Definition Scope or Supporting Context.

A Definition Scope is Product Knowledge the implementation consumer is being asked to implement. Each Definition Scope activates its applicable meaningful-product-definition rule.

Supporting Context is related Product Knowledge included to explain, constrain or caveat a Definition Scope. It does not activate another minimum-definition rule.

The workbench must not infer the designation from artifact type, silently promote Supporting Context into Definition Scope, or auto-add missing knowledge.

When there are multiple Definition Scopes, their rules compose conjunctively: every applicable rule must pass before package preparation. A Functional Requirement or Acceptance Criterion may satisfy more than one Definition Scope only when explicit relationships show that it applies to each.

The package distinguishes Definition Scope, Supporting Context and Direct External Dependencies.

---

## Scenario

For a MealLoop `Pause subscription` Feature handoff, the selected Feature, Functional Requirements and Acceptance Criteria are Definition Scope, so the feature-centered rule applies.

A Screen/View that only illustrates the control location is Supporting Context and does not activate the UX/UI rule. A mention of Stripe billing as an external dependency is Supporting Context and does not activate the integration rule.

If the user also asks the implementation consumer to implement the pause screen or Stripe interaction, those selected items become additional Definition Scopes. The UX/UI or integration rule then applies in full.

---

## Consequences

The workbench preserves user intent and deterministic validation while allowing partial context to travel with a handoff.

Mixed handoffs remain strict about knowledge intended for implementation, but do not reject useful supporting references merely because those references are incomplete.

---

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ai/ai-orchestration.md`
- `docs/planning/open-questions.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

---

## Recommended Next Step

Define how a partial Implementation Handoff Package represents Definition Scope, Supporting Context, omitted knowledge and Direct External Dependencies in its generated files.
