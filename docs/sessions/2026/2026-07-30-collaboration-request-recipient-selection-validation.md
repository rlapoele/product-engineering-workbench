# Session — Collaboration Request Recipient Selection Validation

**Session ID:** 2026-07-30-03  
**Date:** 2026-07-30  
**Status:** Crystallized

## Context

Recipient selection now distinguishes eligibility, availability and capability. The model needed validation for no available candidates, mixed capability fit, changing AI availability and reopening a declined request without weakening one-recipient, role or BYO-AI boundaries.

## Decision

Initial request creation is gated. **Request collaboration** and **New request** are enabled only when at least one eligible and available recipient exists. When none exists, the action is disabled with a compact generic explanation and no composer opens. Therefore no scope or type choice, Request Brief or Draft is created.

If a recipient becomes unavailable after an existing private Draft has begun, the Draft remains private. Submission is disabled until availability returns or the owner explicitly selects another eligible available recipient. The product never automatically replaces the recipient, invokes an assistant, creates a queue or reorders work.

Reopen is enabled only when its next Request Cycle has a valid recipient path:

- A Responded request requires its fixed recipient to remain eligible and available.
- A Declined request requires at least one eligible and available human collaborator or the owner's eligible and available Personal AI Assistant.

When reopening a Declined request, the owner may select either an eligible human collaborator or their own eligible Personal AI Assistant. The replacement sees only the new current cycle. The former human recipient retains their frozen Declined cycle, whose status and Last updated value remain their decline; reassignment and later activity remain private.

Mixed human-and-AI capability fit remains advisory: exact, related or unstated fit can be explained, but the owner explicitly selects the one recipient. Capability never ranks, routes or excludes by itself.

## Consequences

- The product does not invite an owner to begin an impossible new request.
- Private Draft work is preserved across later availability changes without autonomous behavior.
- A human Decline can be redirected to the owner's Personal AI Assistant without a new request or disclosure of the former recipient's history.
- Reopen cannot produce an unresubmittable Request Cycle.
- The model remains free of queues, broadcasts, presence, workload and delivery-management behavior.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/knowledge/ai/ai-orchestration.md`
- `docs/knowledge/decisions/ADR-003-asynchronous-transactional-collaboration.md`
- `docs/planning/open-questions.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Topic

Validate the first-pass Assistance Request Type matrix through concrete specification exercises.
