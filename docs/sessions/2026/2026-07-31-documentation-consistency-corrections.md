# Session — Documentation Consistency Corrections

**Session ID:** 2026-07-31-09  
**Date:** 2026-07-31  
**Status:** Crystallized

## Context

A focused documentation review found legacy acceptance and rejection language plus an unresolved implication that a recipient could expand Optional context after Request Cycle context had become immutable. These were terminology and boundary inconsistencies within decisions already made, not new product capabilities.

## Decision

`Rejected` is not an MVP Artifact lifecycle state or Contribution Response status. A recipient may decline a Collaboration Request before submitting a response. After submission, the Project Owner may dismiss an individual response item as not pursued; dismissal retains evidence and does not reject the contributor or whole response.

AI governance and Provenance use human review and explicit Project Owner saves rather than an acceptance workflow or acceptance history. This preserves the distinction between non-canonical contributions and canonical Product Knowledge without introducing a response-acceptance state.

Optional context enters only when the Request Brief explicitly calls for it before submission. A recipient cannot expand a Request Cycle's immutable recorded context after submission. When more material is needed, the recipient returns a Question or caveated response; the Project Owner may explicitly Reopen and resubmit with revised context.

Context matrices list candidate Primary and Supporting material, not automatic inclusion. Context Relevance remains the final inclusion decision. Prior Conversations, Reviews, feedback and Contribution Responses enter only when comparison, follow-through or earlier reasoning is requested or materially necessary.

## Consequences

- `Declined`, item dismissal and canonical save have distinct meanings without a hidden response-rejection state.
- AI traceability records known participation and owner saves without overstating acceptance or exact authorship.
- Immutable Request Cycle context remains reliable and explainable.
- Historical material does not silently inflate request context.

## Documentation Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/ai/ai-orchestration.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/decisions/ADR-003-asynchronous-transactional-collaboration.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/2026/2026-07-31-context-relevance-inclusion-validation.md`
- `docs/sessions/index.md`

## Recommended Next Topic

Validate the owner-only Response Source Link boundary through a concrete request-and-revision journey, including the absence of collaborator and handoff projections.
