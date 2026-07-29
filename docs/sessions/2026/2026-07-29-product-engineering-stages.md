# Session — Product Engineering Stages

**Session ID:** 2026-07-29-09  
**Date:** 2026-07-29  
**Status:** Crystallized

## Context

The workbench explicitly covers Product Engineering from initial ideas to implementation handoff, but did not yet expose a durable orientation model for that journey. Workflow Templates already allowed stages conceptually; this session defines their role without turning the document-first product into a linear delivery workflow.

## Decision

Product Engineering Stages are an optional, ordered orientation and organization layer defined by a Workflow Template.

The initial `Implementation-Ready Web App Specification` template defines:

1. **Explore** — frame initial ideas, the opportunity and product intent.
2. **Discover** — understand users, needs, evidence and relevant context.
3. **Define** — establish goals, scope, non-goals, outcomes and product decisions.
4. **Design** — shape UX/UI, domain or data models, technical approach and constraints.
5. **Specify** — describe implementation-ready behavior, requirements, acceptance criteria and integration detail.
6. **Validate readiness** — review completeness, consistency, risks, open questions and implementation readiness.
7. **Handoff** — deliberately prepare selected product knowledge for an external implementation consumer.

An initial idea belongs within **Explore** rather than becoming a separate stage.

Each Section Catalog entry has one primary stage and may have zero or more contributing stages. Contained Product Artifacts derive this orientation from their canonical section; they do not store a separate mutable `stageId` in Project State.

## Boundaries

- Stages are not Product Artifact, Collaboration Request or Project lifecycle states.
- They are not task, delivery, release, approval or implementation-tracking states.
- They do not gate work, prescribe an order, create assignments or produce automatic next actions.
- They do not affect readiness validation, handoff eligibility, handoff scope or package result.
- Product engineering remains iterative: users may revisit any stage, and knowledge may contribute to more than one stage.
- The canonical user experience remains the coherent section-oriented Specification. Future stage-aware navigation, filtering or alternate views organize that same knowledge without changing it.

## Initial Section Attribution

The initial Section Catalog now has primary and contributing stage attribution. Its full mapping lives with the initial template and preset classification, ensuring that the mapping remains template-owned rather than being duplicated on every artifact instance.

## Documentation Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Topic

Validate the end-to-end AI request-detail journey through Submitted, In Progress, On Hold, restored eligibility, explicit Resume, response handling and cancellation.
