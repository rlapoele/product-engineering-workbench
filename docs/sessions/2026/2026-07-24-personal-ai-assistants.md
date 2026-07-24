# Session — Personal AI Assistants

**Date:** 2026-07-24

**Session ID:** 2026-07-24-09

**Status:** Crystallized

---

## Context

Bring Your Own AI established that provider credentials and enablement belong to one human user. The product still needed to define whether that user could have more than one AI identity, how an assistant is named and represented in shared Conversations, and whether an assistant could act independently.

## Decision

The MVP supports multiple **Personal AI Assistants** per human user. Each is a named, user-owned configuration using a selected provider/model configuration from that user's Bring Your Own AI support. One assistant may be marked as the user's default; default selection is only a convenience and never authorizes automatic AI activity.

An assistant's default name is a possessive generic form such as `Alex's assistant`. Its owner may assign another name, such as `Alfred`. When Alfred contributes, the Conversation shows `Alfred` with a compact AI indicator. It does not repeat `Alex's AI` beside every message. Selecting or hovering over Alfred opens an assistant profile that identifies the assistant and its human owner.

Provider and model details remain in the owning user's AI settings/configuration. They are not exposed in Conversation messages, assistant profiles or ordinary contribution details.

A Personal AI Assistant is not a separately authenticated User, a shared Project credential or an independently available Project member. Its owning human alone may invoke it. Every visible assistant reply requires a new explicit invocation by that owner, although one invocation may use bounded internal processing before producing its single contribution.

## Consequences

- Conversation participants can identify an AI contribution without repetitive ownership text or provider/model metadata.
- Contributor traceability retains the invoking human, while the ordinary Conversation surface emphasizes the assistant's chosen identity.
- Multiple providers, models or behavior configurations can be represented as distinct Personal AI Assistants without exposing their private configuration to collaborators.
- The product must next define how a user selects an existing assistant or enters assistant configuration while choosing Conversation recipients.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/ai/ai-orchestration.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Step

Define the Conversation recipient-selection flow for accepted human collaborators, pending invitees and Personal AI Assistants, including whether assistant creation is available inline or only through settings.
