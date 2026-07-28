# Session — Collaboration Request Single Recipient

**Date:** 2026-07-28

**Session ID:** 2026-07-28-03

**Status:** Crystallized

---

## Context

Standalone Collaboration Requests need clear accountability and a focused response path. The product already distinguishes them from multi-party Conversations, which provide evolving shared context.

## Decision

Every MVP Collaboration Request has exactly one selected available contributor. The contributor may be human or AI under the existing availability rules.

Capability and availability guide the requestor's selection, but they do not create a capability-only queue, broadcast or group request. When the work needs multiple perspectives or an evolving shared context, the requestor uses a Conversation and adds recipients there instead.

## Consequences

- Each request has one accountable response path and one clear recipient.
- The MVP avoids group-request delivery, recipient coordination, response aggregation and broadcast-notification behavior.
- Capability remains useful for finding an appropriate contributor without becoming a routing destination.
- The detailed lifecycle of a request, including human and Personal AI Assistant behaviors, remains to be defined.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/knowledge/decisions/ADR-003-asynchronous-transactional-collaboration.md`
- `docs/planning/open-questions.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Step

Define the standalone Collaboration Request lifecycle: when a request is submitted, how a human recipient may respond or decline, and how Personal AI Assistant invocation differs while preserving the same non-canonical response boundary.
