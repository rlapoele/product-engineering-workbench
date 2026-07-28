# Session — Conversation and Collaboration Request Priorities

**Date:** 2026-07-28

**Session ID:** 2026-07-28-02

**Status:** Crystallized

---

## Context

The MeatLoop scenario showed two legitimate ways Alex might involve a busy or specialized collaborator: add that person directly to an evolving Conversation, or send a bounded scoped Collaboration Request. The product needed to establish whether these are one flow or separate paths, and which Conversation-related capabilities have MVP priority.

## Decision

Conversations and scoped Collaboration Requests are separate optional product paths.

A Conversation supports multi-party exploration, clarification and an evolving shared context. When an eligible collaborator's judgment is useful in that discussion, the initiator may add them as a recipient. A scoped Collaboration Request asks a contributor for a bounded asynchronous response and remains appropriate when the work needs explicit scope, routing, response tracking or an independent deliverable.

Owner-led **Create from conversation** is a core MVP capability because it is the path that deliberately crystallizes working memory into canonical Product Knowledge. Creating or linking a scoped Collaboration Request from a Conversation is a lower-priority MVP stretch capability. It is not a prerequisite for either Conversations or Collaboration Requests.

Until that stretch capability is implemented, neither a Conversation nor a Collaboration Request implicitly creates, links to or controls the other. Both continue to preserve the existing rule that only a separate reviewed and explicitly saved action changes Product Knowledge.

## Consequences

- Alex can add Maya directly to a Conversation with Priya when their discussion needs evolving shared context.
- Alex can create a scoped Collaboration Request independently when Maya's response should be bounded and tracked outside the Conversation.
- The MVP does not need Conversation-to-Request controls, links, related notification rules or cross-surface lifecycle behavior before its core capture journey is complete.
- Future integration must remain explicit and must not turn a Conversation into a Collaboration Request or imply canonical knowledge from either path.

## Documents Updated

- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/knowledge/decisions/ADR-003-asynchronous-transactional-collaboration.md`
- `docs/planning/open-questions.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Step

Define the core MVP scope and interaction for standalone scoped Collaboration Requests, including request creation, recipient selection, submission and response handling, without relying on Conversation integration.
