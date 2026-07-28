# Session — Collaboration Request Creation Interaction

**Session ID:** 2026-07-28-07

**Date:** 2026-07-28

**Status:** Crystallized

---

## Context

The standalone Collaboration Request lifecycle, one-recipient rule and AI interruption path are already defined. The remaining interaction question was how a Project owner creates a request without turning the document-first workbench into a generic task-creation surface, and without weakening the boundary between a scoped request, a Conversation and canonical Product Knowledge.

---

## Decision

Only the Project owner creates a standalone Collaboration Request.

The owner can start **Request collaboration** from:

- the Specification header, for the whole Specification;
- a Section action menu, for that Section;
- a Product Artifact action menu, for that Product Artifact;
- a selected-content action, for the selected content and its containing structural context; or
- the Project's Collaboration Requests list through **New request**.

A contextual entry establishes a pinned scope. If the owner needs another contextual scope, they cancel and start from the appropriate source; the interaction does not send them through a broad record picker. The request-list entry begins with scope, defaults to the whole Specification and permits deliberate selection of a Section or Product Artifact through the outline. Selected-content scope is available only from the selected-content entry point.

Creation is local, non-modal and progressively disclosed:

`scope → Assistance Request Type → one recipient → Request Brief → read-only context preview → explicit submission`

Back navigation preserves earlier choices as a compact local summary. The recipient selector groups accepted Project collaborators as **People** and the owner's enabled, usable assistants as **My assistants**. Capability and availability may guide selection, but the flow neither creates a queue nor a group request, and offers neither inline contributor invitation nor assistant setup.

Scope, type and recipient are provisional. A private Draft begins and persists only when the owner writes or edits the Request Brief. Until its first submission, the owner may revise type, recipient and brief; a scope chosen through the request-list path may also be revised, while a contextual scope remains pinned. The context preview is derived, read-only and explainable.

The final action is explicit: **Submit request** for a human recipient, or **Submit and ask _assistant name_** for an eligible personal AI Assistant. This preserves the explicit-invocation rule for AI. Creating or linking a request from a Conversation remains a lower-priority MVP stretch capability, not an entry point in this flow.

---

## Consequences

- Request creation is directly anchored in the document or deliberately scoped from the Project request list.
- A Brief-triggered Draft prevents incomplete combinations of scope, type and recipient from becoming durable request records.
- Derived context is inspectable without becoming a second editable request payload.
- The flow preserves one-recipient, BYO-AI privacy and explicit-invocation boundaries.
- It does not introduce a delivery board, task assignment, a general-purpose modal form or a hidden Conversation-to-request link.

---

## Documentation Updated

- `docs/knowledge/ux/document-first-ui.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/decisions/ADR-003-asynchronous-transactional-collaboration.md`
- `docs/planning/open-questions.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

---

## Recommended Next Topic

Define how the Collaboration Requests list and recipient-facing pending-request view organize Draft, Submitted, In Progress, On Hold, Responded, Declined and Cancelled requests without becoming delivery boards.
