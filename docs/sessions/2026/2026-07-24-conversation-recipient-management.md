# Session — Conversation Recipient Management

**Date:** 2026-07-24

**Session ID:** 2026-07-24-11

**Status:** Crystallized

---

## Context

Conversation recipients include people and personal assistants with different ownership and authorization boundaries. The product needs focused recipient-management rules without allowing every participant to change a Conversation's human audience or use another person's assistant.

## Decision

The Conversation initiator may add or remove human recipients and add or remove their own Personal AI Assistants. The initiator cannot add, remove or invoke another participant's assistant.

Other human Conversation participants may request that an existing eligible human be added. The initiator approves or rejects each request. The Project owner may add or remove human recipients in a Conversation they did not initiate, providing a narrow Project-governance safety override.

Every participant may add or remove only their own assistants. If a human participant is removed, every assistant that person added to the Conversation is removed at the same time. Apart from that automatic cascade, an assistant may be removed only by its owner. Regardless of who added an assistant, only its owner may invoke it.

Removing a recipient ends their future participation but preserves prior messages, assistant contributions and attribution. Additions, removals and approved or rejected human-recipient requests appear as concise Conversation history events. They never change Product Knowledge.

## Consequences

- The initiator remains responsible for the human audience and topical focus of a Conversation.
- Participants can include their own assistance without acquiring control over another person's assistant or credentials.
- Project ownership permits recovery or intervention without turning every participant into a recipient manager.
- Conversation history remains understandable after participation changes and does not silently erase working memory.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Step

Define Conversation participant status and completion: whether and how an initiator, human recipient or assistant may leave, and how the Conversation is closed or retained.
