# Session — Collaboration Request Recipient Selection

**Session ID:** 2026-07-30-02  
**Date:** 2026-07-30  
**Status:** Crystallized

## Context

Standalone Collaboration Requests already have one recipient, invitation-gated human collaboration and owner-only Personal AI access. The remaining question was how capability and availability should guide selection without weakening role boundaries or introducing delivery-management behavior.

## Decision

Recipient selection distinguishes three dimensions:

- **Eligibility** is the structural boundary. A human candidate is a Project Collaborator rather than the Project Owner. An AI candidate is the requestor's own Personal AI Assistant and the requested assistance is permitted by Project settings.
- **Availability** determines whether an eligible candidate is selectable now. A human becomes available through accepted Project collaboration. An assistant must be enabled and usable.
- **Capability** is explainable, non-binding guidance about known fit for the Assistance Request Type, scope and optional Review Lens. It may identify exact, related or unstated fit, but never automatically routes, ranks, assigns or excludes a candidate.

The one-recipient selector groups selectable candidates as **People**—accepted Project Collaborators—and **My assistants**—the requestor's enabled, usable Personal AI Assistants. A configured but unusable assistant may be shown only as a non-selectable `AI assistance unavailable` state. It must not disclose provider, model, credential, credit or detailed technical-failure information.

Pending invitees, non-collaborators, the Project Owner as a human recipient and another user's assistant are not selectable. When no eligible and available candidate exists, the local flow gives a compact generic explanation and cannot continue to Request Brief or submission. Scope and type remain transient local choices, so no Draft, queue, broadcast, fallback assignment, inline invitation or assistant-configuration flow is created.

Availability does not mean live presence, calendar time, willingness, capacity, workload or response-time tracking. The MVP has no online/busy/free labels, workload balancing or reassignment behavior.

## Consequences

- The owner retains explicit judgment over one bounded request recipient.
- Capability improves selection transparency without becoming a routing, performance or delivery-management system.
- Human Project-role boundaries and private, owner-only BYO-AI access remain intact.
- An unavailable AI assistant is represented truthfully without exposing private configuration details.
- A lack of candidates remains a local composition boundary rather than becoming a request queue or invitation workflow.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/knowledge/ai/ai-orchestration.md`
- `docs/knowledge/decisions/ADR-003-asynchronous-transactional-collaboration.md`
- `docs/planning/open-questions.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Topic

Validate this selection model through no-candidate, mixed human-and-AI capability fit and AI-unavailable scenarios.
