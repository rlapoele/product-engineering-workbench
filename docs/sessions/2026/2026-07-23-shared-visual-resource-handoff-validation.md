# Session — Shared Visual Resource Handoff Validation

**Date:** 2026-07-23

**Session ID:** 2026-07-23-02

**Status:** Crystallized

---

## Context

An Implementation Handoff Package may include one Resource through several target-local Resource References. The package needs to avoid duplicating a shared source while preserving why that source is attached to each Screen / View.

The workbench must also distinguish detectable structural reuse from an interpreted error in optional Visual Context. Represented state is free text and Visual Context does not define canonical Screen / View behavior.

---

## Validated Scenario

Alex prepares a mixed MeatLoop restaurant-order handoff with `Place restaurant order` and its checkout UX/UI bundle as Definition Scope. The external `MeatLoop checkout prototype` Figma Resource is attached to two included Screen / Views:

| Target | Local Description | Represented state | Viewport |
|---|---|---|---|
| Order review | Prototype frame with editable basket and delivery details | Basket has two items; promo code applied | Mobile portrait |
| Order confirmation | Prototype frame with a successfully submitted order | Payment accepted; order number displayed | Desktop |

The manifest records the external Resource URL once. Two Resource Reference records identify that Resource and retain their distinct target IDs, Descriptions and Visual Context. A managed uploaded version would instead be copied once and represented by one package-relative path, not a consumer-machine-specific `file://` URI.

The distinct local contexts are not automatically inconsistent: one prototype can legitimately contain several frames and viewports. If Alex attached the confirmation context to Order review, the workbench could still detect only that the Resource is shared; it could not establish the semantic mismatch from free text alone.

---

## Decision

The manifest represents each included Resource source once:

- an external Resource by its URL; or
- a managed uploaded Resource by its package-relative file path.

Each included Resource Reference separately identifies the Resource and retains target-specific purpose, Description and applicable Visual Context. The package must not use a machine-specific absolute path or `file://` URI for a managed Resource.

Shared Resource identity is deterministically available, but Resource sharing and differing Visual Context values must not be labeled as an automatic ambiguity, error, Stale outcome or readiness blocker.

Semantic mismatch may be assessed through human review or an explicitly requested AI Review or Find Inconsistencies request. The response is a caveated, non-canonical Finding: it does not alter Resource Reference metadata, trigger automatic propagation or block handoff preparation.

---

## Consequences

Consumers receive an efficient package with one portable source locator per Resource and unambiguous target-local references. A person or AI reviewer can consider whether a shared visual actually fits each target without forcing an overly structured state model into the MVP.

The workbench may later offer a shared-reference inspection cue, but its exact placement and interaction are separate UX work. It must not imply automatic semantic validation.

---

## Documents Updated

- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

---

## Recommended Next Step

Revisit the readiness-validation and handoff-preparation logic, especially the boundary between invariant package eligibility and meaningful definition versus optional readiness evaluation and caveated preparation.
