# Session — Conversation Closure and List Organization

**Date:** 2026-07-24

**Session ID:** 2026-07-24-13

**Status:** Crystallized

---

## Context

Conversation completion established intentional closure and retained history. Two practical questions remained: whether a Conversation with only its initiator left should close automatically, and how the workspace avoids presenting an ever-growing mixed list of ongoing and historical threads.

## Decision

A Conversation never closes automatically when all other active human recipients have left, nor after any fixed inactivity period. Closure remains an intentional action by the initiator, with the existing Project-owner safety override. When no other active human recipient remains, the workspace shows a quiet contextual state and offers **Close conversation** without forcing it.

The Conversations workspace distinguishes **Active conversations** from **Closed conversations**. Active Conversations are the default topic-led list, ordered by recent activity. Closed Conversations are retained in a separate collapsed group or filter. They remain searchable and readable, but are not mixed into the default ongoing list.

## Consequences

- Closure continues to express deliberate human intent rather than a time-based inference about whether discussion is complete.
- An initiator may still add a recipient or explicitly ask an assistant after other participants leave.
- The default workspace remains focused on ongoing discussion while preserving closed working memory for later reference.
- The grouping is navigation behavior, not deletion, archival retention, reactivation or a Product Knowledge state.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Step

Define the Conversation initiation matrix: valid initiating scopes and eligible initiators.
