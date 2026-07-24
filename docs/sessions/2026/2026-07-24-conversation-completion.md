# Session — Conversation Completion

**Date:** 2026-07-24

**Session ID:** 2026-07-24-12

**Status:** Crystallized

---

## Context

Conversation recipient management establishes who controls participation. The product also needs clear end-of-participation and closure semantics that preserve working memory without treating a Conversation as canonical Product Knowledge or a delivery task.

## Decision

Human recipient status is Pending, Active, Declined, Left or Removed. An accepted human recipient may leave an Open Conversation. Leaving ends future participation and automatically removes every Personal AI Assistant that the leaving person added, while preserving all earlier messages and attribution.

Personal AI Assistants are Included or Removed. An assistant cannot leave or decline by itself. It is removed only by its owner or when its owner leaves or is removed. If it later becomes unavailable because the owner disables it or its credentials are unusable, it remains historically included but cannot be invoked.

A Conversation is Open or Closed. The initiator may close an Open Conversation rather than leaving it. A Project owner has the same safety override for a Conversation they did not initiate. Closing records a concise history event and makes the Conversation read-only: no new messages, recipient changes or assistant invocations are allowed.

Closing never creates a Decision, resolves an Open Question, captures an outcome or otherwise changes Product Knowledge. Closed Conversations remain accessible as retained working memory. The MVP does not reopen or delete them; resumed work uses a new related Conversation.

## Consequences

- Conversation closure is a bounded collaboration state, not a claim that product work is complete or resolved.
- Assistant participation follows human ownership even when availability changes outside the Conversation.
- The initiator's management responsibility remains unambiguous while a Conversation is Open.
- Retained read-only history supports traceability without requiring a deletion, archive-retention or reopening workflow in the MVP.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Step

Define the Conversation initiation matrix: valid initiating scopes and eligible initiators.
