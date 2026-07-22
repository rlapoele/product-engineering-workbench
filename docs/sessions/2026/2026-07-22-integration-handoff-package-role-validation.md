# Session — Integration Handoff Package Role Validation

**Date:** 2026-07-22

**Session ID:** 2026-07-22-15

**Status:** Crystallized

---

## Context

An integration may be knowledge the implementation consumer is asked to implement or may instead be an external dependency of another implementation subject. The scope selector must make this distinction clear without confusing package-specific selection with user, contributor or permission roles.

---

## Decision

A **Handoff Package Role** describes how selected Product Knowledge participates in one Implementation Handoff Package. It is not a user, contributor, permission or organizational role.

The user may assign selected Product Knowledge one Handoff Package Role:

- Definition Scope;
- Supporting Context; or
- directly related knowledge intentionally outside the package.

A Direct External Dependency is not a Handoff Package Role. It is derived from Definition Scope relationships, displayed separately and cannot be relabeled as included knowledge. Available knowledge about an external dependency may be added as Supporting Context.

The scope selector must explain the consequence when the user assigns integration knowledge as Definition Scope: the implementation consumer is being asked to implement the integration, so the integration-centered meaningful-definition rule applies.

---

## Validated Scenario

For the MealLoop `Pause subscription` capability, the Specification identifies Stripe as the external subscription-billing system.

### Stripe as an Integration Definition Scope

Alex adds Stripe integration knowledge as Definition Scope. The panel applies the integration checks: external system and purpose, integration behavior, related Functional Requirements and acceptance coverage.

A statement such as “MealLoop uses Stripe for subscription billing” passes only external system and purpose. Without a known trigger, direction of data or control, expected outcome, related Functional Requirements and acceptance coverage, this is insufficient product definition. Prepare Handoff remains unavailable regardless of the readiness-validation preference.

### Stripe as a Direct External Dependency

Alex instead retains `Pause subscription` as Feature and UX/UI Definition Scopes. Stripe is derived as a Direct External Dependency. Alex may add known Stripe-related notes as Supporting Context, but Stripe itself remains external and no integration-centered rule activates.

When the Feature and UX/UI Definition Scopes are meaningful, unavailable Stripe contract details are caveats rather than missing product definition. An explicit Stripe blocker makes readiness `Not Ready`, yet the workbench can prepare a `Prepared with Caveats` package.

---

## Consequences

The user can choose intentionally whether integration knowledge is an implementation subject or contextual knowledge. The scope selector surfaces that choice before it changes the applicable deterministic checks.

The package remains honest about external systems: including contextual notes does not falsely claim that the dependency is included implementation scope.

Exact wording, confirmation treatment and visual layout remain prototype work.

---

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

---

## Recommended Next Step

Validate whether a user can safely change selected integration knowledge from Supporting Context to Definition Scope after a partial handoff has been prepared, including how the changed package boundary and newly activated checks are presented.
