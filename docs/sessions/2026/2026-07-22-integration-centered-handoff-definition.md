# Session — Integration-Centered Handoff Definition

**Date:** 2026-07-22

**Session ID:** 2026-07-22-07

**Status:** Crystallized

---

## Context

The MVP `Implementation Handoff` profile needs a meaningful-product-definition rule for a scope centered on an external system integration. The rule must provide enough explicit knowledge for implementation without forcing users to invent unavailable contract, failure-path or technical-protocol details.

---

## Decision

An integration-centered handoff scope is meaningful only when it includes:

1. Active `External Integrations` section content identifying the external system and its purpose.
2. Explicit integration behavior defining the known trigger, direction of data or control, and expected outcome.
3. Active Functional Requirement(s) explicitly related to that behavior.
4. Active Acceptance Criteria that explicitly validate every included Functional Requirement.

The scope selector presents external system and purpose, integration behavior, related Functional Requirements, and acceptance coverage as deterministic checks. It does not prepare a package until all four elements are present.

Known external contracts, technical constraints, ownership and dependency details are included where available. They are caveats rather than universal minimum elements. The workbench must not require users to invent unknown failure paths or technical protocol details.

An explicit blocking external dependency makes the readiness outcome `Not Ready`, but the scope remains meaningful enough to prepare a caveated package.

---

## Consequences

Implementation consumers receive the essential product behavior across the external boundary while remaining aware of unavailable external knowledge.

The rule preserves the distinction between insufficient product definition, which prevents package preparation, and a meaningful scope with external caveats or blockers, which can produce `Prepared with Caveats`.

The decision does not yet define a meaningful-product-definition rule for a data-model-centered handoff scope.

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

Define the corresponding meaningful-product-definition rule for a data-model-centered handoff scope.
