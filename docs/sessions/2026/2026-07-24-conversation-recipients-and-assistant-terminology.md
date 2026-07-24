# Session — Conversation Recipients and Assistant Terminology

**Date:** 2026-07-24

**Session ID:** 2026-07-24-10

**Status:** Crystallized

---

## Context

The Conversation model needs a simple MVP recipient flow that does not turn a focused exchange into a Project-membership or personal-assistant configuration workflow. It also needs clear language that does not foreground the technology behind an assistant in ordinary product work.

## Decision

**Invite contributor** is reserved for adding a human contributor to a Project. It is not used to add anyone to a Conversation.

Conversations use **Add recipient** for people and Personal AI Assistants. In the MVP, the recipient picker offers only existing eligible entries:

- **People** — accepted Project collaborators and existing pending Project invitees; and
- **My assistants** — the selecting user's already configured and enabled Personal AI Assistants.

The picker does not create a Project invitation, connect a provider or configure a new assistant. The user returns to the relevant Project collaboration or personal settings flow when one of those prerequisites is missing.

An accepted human recipient may reply normally without being named or explicitly asked. A pending invitee may participate after accepting Project collaboration. An assistant's inclusion as a recipient does not invoke it. Only its owning human may explicitly invoke it with an action such as **Ask Alfred**; mentions and other participants' messages do not invoke it, and every visible assistant reply needs a new explicit invocation.

Ordinary Conversation vocabulary remains human-centered: **Add recipient**, **People**, **My assistants** and **Ask Alfred**. An assistant contribution uses its chosen display name and a compact assistant cue rather than repetitive `AI` text. The assistant profile provides further identity information, while provider/model details remain only in its owner's settings. Explicit AI terminology remains available where governance, security, traceability or required disclosure need it.

## Consequences

- The MVP avoids inline invitation, onboarding, provider-credential and assistant-setup flows.
- Conversation recipients do not change Project membership, credential ownership or assistant availability.
- Human participation remains conversational, while assistant participation has a visible human authorization and cost boundary.
- The product avoids presenting ordinary Conversation work as an AI-first experience without concealing assistant identity or weakening governance.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/ai/ai-orchestration.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Step

Define who may add or remove Conversation recipients after creation, including whether a participant may add one of their own Personal AI Assistants.
