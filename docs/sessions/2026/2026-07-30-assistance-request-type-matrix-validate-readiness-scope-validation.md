# Session — Assistance Request Type Matrix: Validate Readiness Scope Validation

**Session ID:** 2026-07-30-05  
**Date:** 2026-07-30  
**Status:** Crystallized

## Context

`Prepare Handoff` has a structural handoff-root boundary, while the initial context-assembly model had validated `Validate Readiness` only for the whole Specification. The matrix needed to establish whether readiness assessment can be useful at Artifact and Section scope without falsely presenting local knowledge quality as implementation-handoff readiness.

## Decision

`Validate Readiness` is available from:

- the whole Specification;
- an eligible Specification Section with non-whitespace section content or an active contained Product Artifact; and
- an active Product Artifact.

It is unavailable from selected content. A text fragment cannot establish the structural boundary required for a readiness judgment; the user may instead use Improve, Review or Find Gaps, or assess its containing Artifact or Section.

The resulting Readiness Result is a non-canonical local knowledge-quality assessment. It identifies the scope and its stated purpose, the evidence and context used, missing or excluded context, local strengths and gaps, risks, dependencies and suggested follow-up:

- at Artifact scope, it assesses clarity, completeness, coherence and adequate relationship or validation support for the Artifact's stated role;
- at Section scope, it assesses whether active content forms a coherent, sufficiently supported definition for that Section's template purpose; and
- at whole-Specification scope, it assesses overall coherence, connection and evidence for the stated product purpose, including cross-section gaps and limits.

Context may be sufficient, partial or insufficient. A partial assessment may address only observable knowledge and must state its limits. An insufficient assessment may identify missing knowledge or ask questions, but must not make a positive readiness claim.

This assistance result is distinct from deterministic Implementation Handoff Readiness. Only `Prepare Handoff` evaluates the Handoff Profile's eligible selected scope and direct external dependencies against explicit Project State, producing `Ready`, `Ready with Caveats` or `Not Ready`. A local Readiness Result does not produce a Readiness Report, package result or Handoff History event; neither it nor deterministic readiness certifies implemented software, implementation conformance, delivery workflow, task assignment, capacity, priority or release readiness.

Neither form of assessment changes Product Knowledge automatically. The owner or authorized contributor separately decides whether to act on any response.

## Consequences

- The matrix supports focused readiness reasoning without making every Artifact or Section a standalone handoff.
- Context limits are visible instead of becoming false positive readiness claims.
- Handoff preparation remains the sole path to deterministic implementation-handoff readiness and package history.
- The product stays focused on Product Engineering rather than delivery management or automated workflow.

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
