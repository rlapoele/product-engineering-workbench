# Session — Core Feature Alternatives Context Assembly

**Date:** 2026-07-21

**Session ID:** 2026-07-21-07

**Status:** Crystallized

---

## Context

Follow-up work after validating Context Assembly for Draft on a Product Overview.

The objective was to validate `Suggest Alternatives` on a Core Feature and determine whether the request may challenge the feature itself rather than merely offer implementation variants.

---

## Decision

Suggest Alternatives on a Core Feature should optimize for the intended User Need and Goal rather than preserve the current feature by default.

### Alternative Proposal types

The request may return four kinds of Alternative Proposal:

- a feature variant: a different way to implement the current feature;
- an outcome-preserving substitute: a different feature or approach that meets the same User Need;
- a scope or timing change: defer, phase, simplify or remove the feature; or
- a reframing: question whether the feature addresses the right User Need or Goal.

An Alternative Proposal remains non-canonical. It may express a recommendation with its conditions, but does not make a decision or change product knowledge until an authorized contributor accepts or acts on it.

### Context relevance

| Relevance | Context |
|---|---|
| Primary | selected Core Feature; linked User Needs and Goals; stated alternatives prompt or decision focus; applicable constraints; Scope and Non-Goals |
| Supporting | Target Users or Personas; related Features, User Stories, Use Cases, Requirements and Acceptance Criteria; dependencies; Decisions; technical constraints; Risks, Assumptions, Open Questions and prior feedback or Reviews |
| Optional | Product Overview, broader Vision, data/domain model, integrations and historical material that explain the intended outcome or a material trade-off |
| Excluded | unrelated project areas and historical material with no bearing on the feature, intended outcome or stated alternatives focus |

### Response and context sufficiency

Each Alternative Proposal should identify the intended outcome it supports or reassesses, its rationale, benefits and trade-offs, assumptions and Open Questions, and likely affected product knowledge when known.

The expected Response Shapes are Proposed Decision, Proposed Artifact, Suggested Edit, Summary and Question.

Context is sufficient when the feature, its intended outcome and relevant boundaries or constraints are available. It is partial when outcome links or constraints are incomplete; the contributor may still suggest local feature variants, but must label strategic alternatives such as deferment or substitution as constrained by the missing outcome context. It is insufficient when the selected feature has too little substantive definition and no meaningful source material or prompt exists.

The Context Explanation should identify the outcome links, constraints and boundaries used, together with missing context that limits the alternatives.

---

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/ai/ai-orchestration.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
- `docs/sessions/session-active-work.md`

---

## Recommended Next Step

Validate Context Assembly for another Assistance Request Type with a different intent, such as `Ask Question` on an Open Question. Alternatively, define the remaining artifact-type-specific propagation exceptions.
