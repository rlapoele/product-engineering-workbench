# Session — Data-Model-Centered Handoff Definition

**Date:** 2026-07-22

**Session ID:** 2026-07-22-08

**Status:** Crystallized

---

## Context

The MVP `Implementation Handoff` profile needs a meaningful-product-definition rule for a scope centered on domain structure rather than user interface or external integration behavior. A list of entities and relationships alone is insufficient because it does not define how the domain is allowed to behave.

---

## Scenario

For the MealLoop subscription-pause data model, the selected scope identifies the `Subscription` entity, its relationship to a customer, and the relevant pause-period information.

It states two explicit rules: a Subscription status is limited to `active`, `paused` or `cancelled`; and a Subscription cannot have overlapping pause periods.

Related Functional Requirements preserve the scheduled resume date and prevent more than one active pause. Acceptance Criteria validate those requirements.

---

## Decision

A data-model-centered handoff scope is meaningful only when it includes:

1. Active `Data or Domain Model` section content identifying relevant domain entities and their explicit relationships.
2. At least one explicit domain rule or invariant governing the selected entities or relationships.
3. Active Functional Requirement(s) explicitly related to those elements or rules.
4. Active Acceptance Criteria that explicitly validate every included Functional Requirement.

The scope selector presents domain structure, domain rule or invariant, related Functional Requirements, and acceptance coverage as deterministic checks. It does not prepare a package until all four elements are present.

Implementation-level schema details, storage technology, migrations, indexes, database ownership and physical data types are not universal minimum elements. Privacy, retention, security classification, integration ownership and technical constraints are included or surfaced as caveats only when explicitly relevant. The workbench must not invent them.

---

## Consequences

The implementation consumer receives both the shape of the relevant domain and at least one explicit constraint on its permitted behavior.

The decision keeps product definition separate from implementation design while still producing useful implementation-ready knowledge.

---

## Documents Updated

- `docs/knowledge/ux/document-first-ui.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ai/ai-orchestration.md`
- `docs/planning/open-questions.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

---

## Recommended Next Step

Define how meaningful-definition rules compose when a selected handoff scope combines Feature, UX/UI, integration and data-model content.
