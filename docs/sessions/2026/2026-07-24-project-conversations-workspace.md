# Session — Project Conversations Workspace

**Date:** 2026-07-24

**Session ID:** 2026-07-24-07

**Status:** Crystallized

---

## Context

`PROC-001` requires a clear working-memory model before the product can define how conversation outcomes crystallize into stable knowledge. Earlier documents used `Conversation` and `Discussion` inconsistently and did not define how a multi-party exchange appears alongside the document-first Specification.

---

## Decision

`Conversation` is the canonical product term. It is a topic-focused, multi-party exchange inside one Project; `Discussion` is not a separate product concept.

A Conversation is working memory, not a Collaboration Request, Assistance Request Type or a private note. It begins with an initiating participant, one or more recipients and an initial message. It may include accepted project collaborators, newly invited people and enabled available AI Contributors. An invitation is pending, accepted or declined per invitee; pending invitees do not prevent accepted participants from using the Conversation.

Every Conversation has a Project ownership record, explicit source/scope and a human-readable topic. The Project is already established by workspace containment and is not repeated in conversation headings. Source/scope explains where the matter arises; topic explains what participants are discussing. Several Conversations can share a source.

Conversations reside in a dedicated, topic-led Conversations workspace rather than inline in the Specification. On sufficiently wide layouts, it opens as a right-side pane that reflows rather than overlays the document, preserving visible source context. The pane first shows the conversation list; selecting a thread replaces that list with the thread and a return control. The list and thread may appear together only when the pane has enough useful width.

Responsive behavior must preserve one usable workspace instead of squeezing document and conversation content below readable widths. CSS container queries are suitable implementation support, but the detailed narrow/mobile interaction remains open.

Messages never silently alter Product Knowledge. A Conversation may later support participant changes, scoped assistance requests and explicit outcome capture; any resulting artifact, Decision, Open Question or update is a separate human-controlled action with ordinary Revision and Provenance behavior.

---

## Consequences

- The document-first Specification remains readable canonical knowledge while Conversations provide a familiar focused chat-style experience for exploration.
- Conversation source links preserve context without making the document a chat surface.
- The model supports topic-led conversation navigation without introducing an MVP taxonomy, folders or a general chat product.
- Comments and private notes remain intentionally separate and deferred: a private note has no recipient and therefore is not a Conversation.

---

## Documents Updated

- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/glossary/glossary.md`
- `docs/planning/open-questions.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

---

## Recommended Next Step

Define the Conversation initiation matrix: who may initiate a Conversation, from which project or Specification scopes, and which recipient, invitation and AI-contributor choices each entry point supports.
