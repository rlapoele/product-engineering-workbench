# Session — Conversation Outcome-Capture Readiness

**Date:** 2026-07-28

**Session ID:** 2026-07-28-01

**Status:** Crystallized

---

## Context

The owner-facing outcome-capture journey is complete, but the product still needed to decide whether it should signal that a Conversation may be ready to become durable Product Knowledge.

## Decision

For the MVP, the Project owner alone uses explicit judgment to decide whether and when a Conversation warrants outcome capture. The workbench provides no Conversation-ready status, capture prompt, recommendation or participant signal.

The workbench must not infer or signal readiness from message activity, inactivity, apparent agreement, assistant analysis or Conversation closure. None of those conditions reliably establishes that a durable conclusion exists, and a signal would create a misleading workflow state or obligation.

Any participant may raise a possible outcome in an ordinary Conversation message. That remains conversational input: it neither indicates consensus nor marks the Conversation ready, notifies the owner or changes Product Knowledge.

## Consequences

- Owner-led, explicit capture and reviewed save remain the only path from Conversation working memory to canonical Product Knowledge.
- Capture readiness is separate from Conversation openness, closure and participant agreement.
- The MVP does not need capture-suggestion permissions, notification behavior, history events or dismissal rules.
- A future non-binding suggestion action may be reconsidered only if ordinary messages and owner-led capture prove insufficient.

## Documents Updated

- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/glossary/glossary.md`
- `docs/planning/open-questions.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Step

Define how a Conversation may explicitly link to a scoped Collaboration Request or Assistance Request while preserving the distinct working-memory and canonical-knowledge boundaries.
