# Session — Conversation Initiation Matrix

**Date:** 2026-07-24

**Session ID:** 2026-07-24-14

**Status:** Crystallized

---

## Context

Conversations require a Project ownership record, explicit source/scope, recipients and an initiating human. The product needed to specify which scopes can start a Conversation, who may do so, and whether an unscoped Conversation can start from outside a Project.

## Decision

Conversation initiation always occurs inside a Project. A future home or cross-project surface may show existing Conversations, notifications or search results, but it does not offer an unscoped Conversation composer.

Only a Project owner or accepted human Project collaborator may initiate a Conversation. Pending invitees and Personal AI Assistants cannot initiate one.

The MVP initiation matrix is:

| Entry point | Initial source/scope |
|---|---|
| Conversations workspace: **New conversation** | Project, by default |
| Specification action | Whole Specification |
| Section action | That Specification Section |
| Artifact action | That Product Artifact |
| Selected-content action | That selected Specification content |

Selected content remains the Conversation's explicit source while its containing Section or Artifact provides structural context. A workflow stage remains a potential future source only when the product exposes a meaningful stage surface; it has no MVP initiation entry point.

## Consequences

- Every Conversation has clear Project containment and a meaningful source without requiring users to choose a scope for the common workspace action.
- Accepted human collaborators can explore and clarify scoped work without receiving Project-invitation or other governance authority.
- Assistants remain explicitly invoked contributors rather than independent Conversation starters.
- Cross-project navigation may evolve independently without introducing a general chat surface detached from Project Knowledge.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Step

Define the user-visible signals and explicit human actions through which Conversation outcomes crystallize into Product Knowledge, Decisions, updates or Open Questions.
