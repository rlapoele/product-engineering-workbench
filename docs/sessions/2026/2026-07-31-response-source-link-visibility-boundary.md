# Session — Response Source Link Visibility Boundary

**Session ID:** 2026-07-31-08  
**Date:** 2026-07-31  
**Status:** Crystallized

## Context

The MVP already allowed the Project Owner to explicitly record one whole Contribution Response as a Response Source Link while saving a Revision. Considering projections of that link into the Known AI Activity Trace, collaborator disclosure and handoff metadata raised a question of whether traceability without an explicit link would provide meaningful evidence.

## Decision

A Response Source Link is the only response-to-Revision evidence in the MVP. Its absence is intentionally uninformative: the workbench cannot reliably distinguish a response that was ignored, considered but not used, informed another change or substantially rewritten by the owner.

The explicit link remains in the authorized Project Owner's Revision history. When its source is a known AI Contribution Response, the owner may reach that existing link from the Known AI Activity Trace. This is owner-only navigation, not a separate response-trace view. The trace does not infer candidate links, show an empty link state or count linked and unlinked responses.

Collaborator-facing Workbench disclosure does not show Response Source Links or their target Revisions. Handoff disclosure and `manifest.json` likewise do not include Response Source Links or target Revision information. The existing disclosure remains limited to known AI activity under the project owner's selected destination and retains its no-raw-prompts, no-assembled-context, no-raw-responses, non-authorship and non-detection boundaries. `README.md` and Handoff History remain compact and do not add source-link representation.

## Consequences

- Explicit owner judgment is the sole basis for response-to-Revision traceability.
- Contributors and handoff consumers do not receive suggestive attribution or response outcome signals.
- Known AI governance and disclosure continue to describe known participation without overstating provenance.
- No response-trace, acceptance, item-disposition, attribution or handoff-metadata subsystem is introduced.

## Documentation Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/ai/ai-orchestration.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/decisions/ADR-003-asynchronous-transactional-collaboration.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Topic

Validate the owner-only Response Source Link boundary through a concrete request-and-revision journey, including the absence of collaborator and handoff projections.
