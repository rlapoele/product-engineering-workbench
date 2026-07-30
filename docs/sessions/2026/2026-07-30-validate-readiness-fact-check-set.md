# Session — Validate Readiness Fact Check Set

**Session ID:** 2026-07-30-06  
**Date:** 2026-07-30  
**Status:** Crystallized

## Context

`Validate Readiness` remains a scoped Collaboration Request that a human or AI contributor may answer with a non-canonical local knowledge-quality assessment. The request should nevertheless provide shared deterministic evidence so recipients do not need to rediscover explicit Project State facts and AI assistance has grounded context.

## Decision

Selecting `Validate Readiness` and an eligible scope derives a non-persistent **Readiness Fact Check Set** preview in the local composer. Immediately before the requestor explicitly submits the request, the workbench reruns the set and includes the resulting snapshot in that Request Cycle's immutable recorded context. The selected human or AI recipient sees the same snapshot with the Request Brief and Context Explanation.

The set evaluates only explicit Project State rules:

- scope structure and eligibility;
- template-declared content expectations;
- active or Stale status;
- explicit relationships and validation coverage;
- known blockers; and
- direct dependencies.

Each result identifies its rule and affected Product Knowledge as `Satisfied`, `Attention needed`, `Not applicable` or `Cannot determine`. The set is evidence, not an automated readiness verdict or a Contribution Response.

After submission, the workbench does not silently refresh the snapshot. An explicit Reopen and resubmission reruns the checks for the new Request Cycle; earlier recorded context and fact-check results remain immutable.

The set does not score, rank, route or block the request. It neither creates Product Knowledge, tasks, delivery workflow or a package nor replaces recipient judgment. It does not run Handoff Profile meaningful-definition checks or produce the deterministic `Ready`, `Ready with Caveats` or `Not Ready` outcome reserved for `Prepare Handoff`.

## Consequences

- Human contributors receive a concise, explainable factual starting point for their assessment.
- AI recipients receive grounded, shared context without making AI mandatory.
- Request evidence remains historically trustworthy across later Project State changes.
- Local assessment, deterministic fact evidence and deterministic implementation-handoff readiness stay separate concepts.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/ai/ai-orchestration.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/knowledge/decisions/ADR-003-asynchronous-transactional-collaboration.md`
- `docs/planning/open-questions.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Topic

Validate `Review` across individual Product Artifact, eligible Specification Section and whole-Specification scopes, including how an explicit Review Lens changes context and results without creating certification.
