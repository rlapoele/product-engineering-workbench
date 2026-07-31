# Session — Contribution Response Shape and Finding Type Validation

**Session ID:** 2026-07-31-02  
**Date:** 2026-07-31  
**Status:** Crystallized

## Context

The initial MVP Response Shape and Finding Type catalogs were defined, but concrete examples were needed to distinguish structured review results from open-ended feedback and to ensure that response content never appears to change Product Knowledge automatically.

## Exercises

### Requirements Quality Review

MeatLoop's Functional Requirement says that the system notifies the subscriber when cancellation is pending, but does not identify the notification's trigger, recipient or observable Acceptance coverage. The reviewer returns:

- an `Ambiguity` Finding for the unclear notification behavior;
- a `Gap` Finding for missing known Acceptance coverage;
- a Question about the intended recipient;
- a Suggested Edit that makes the existing wording clearer without adding behavior;
- a Proposed Relationship for the missing validation traceability; and
- a Summary.

### Security Review

MeatLoop's payment-provider integration behavior defines a webhook callback but does not state how authenticity is verified, and its provider contract is not yet available. The reviewer returns:

- a `Risk` Finding about the documented callback boundary;
- a `Dependency` Finding for the unavailable provider contract;
- a Question about the account or contract owner;
- a `Recommendation` Finding about obtaining and recording the verification expectations; and
- a Summary.

### Request Feedback

The owner requests feedback on MeatLoop's Product Overview. The contributor returns a Comment about the clarity of its value proposition, a Question about the intended customer segment, a Suggested Edit, an optional Proposed Decision about scope framing and a Summary. It does not return a Finding or Finding Type merely to make open-ended feedback appear like a structured Review.

## Decision

One submitted Contribution Response is a bounded response record and may contain multiple discrete response items. Each item has one primary Response Shape. A Summary may synthesize the response items but does not replace them.

Each Finding item has exactly one Finding Type. The initial types remain Gap, Inconsistency, Ambiguity, Risk, Blocker, Dependency, Recommendation and Readiness Warning. Finding Type classifies the issue or observation; it is not a Response Shape, severity, priority, workflow state, task, recipient assignment or deterministic readiness outcome.

A Finding may be accompanied by a separately shaped Suggested Edit, Proposed Artifact, Proposed Relationship or Proposed Decision that addresses it. The relationship is explanatory only: neither item applies, approves or otherwise changes canonical Product Knowledge. The requestor may acknowledge or mark the containing Contribution Response as acted on, then separately make any Product Knowledge change through ordinary creation or editing flows and resulting Revisions.

Request Feedback remains comment-oriented. Its Comments, Questions, Suggested Edits, Proposals and Summary may be useful and substantive, but it does not use Findings or Finding Types unless the requestor separately chooses a structured Review or focused check.

## Consequences

- Structured Reviews can present several grounded concerns and distinct proposed remedies without flattening them into one generic result.
- Finding categories remain informative without introducing triage, assignment, severity or delivery-management behavior.
- Feedback remains clearly different from Review even when it prompts a later Product Knowledge change.
- Response handling and Product Knowledge revision remain deliberately separate.

## Documentation Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/ai/ai-orchestration.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Topic

Validate Context Sufficiency patterns across representative review and feedback requests, including when a caveated partial response is useful and when insufficient context should instead produce a Question.
