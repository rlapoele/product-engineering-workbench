# Session — Collaboration Request Detail History Presentation

**Session ID:** 2026-07-29-06

**Date:** 2026-07-29

**Status:** Crystallized

---

## Context

The role-aware list retains earlier response cycles in parent-request detail. The remaining question was how detail could present current work prominently, preserve historical evidence faithfully and avoid loading large history unnecessarily or turning the request into an activity feed or chat surface.

---

## Decision

Each Collaboration Request has one detail structure ordered by Request Cycle, newest first.

The header shows the Request Brief, scoped source, Assistance Request Type, other party, labelled Request status and visible last-update event. The current cycle is expanded. It shows immutable recorded context plus either its submitted Contribution Response with labelled handling status or a compact current state such as awaiting response, response in progress, Declined, Cancelled or AI assistance unavailable. Private human or AI response drafts remain private.

Earlier cycles are collapsed summaries by default, newest first. Each summary identifies the terminal outcome, prior Brief snapshot and response status where applicable. On expansion, the summary remains immediately visible while the complete immutable snapshot loads inline: its prior Brief and recorded context, with its response beneath. The UI shows a compact loading state and retry on retrieval failure. An expanded snapshot is cached only for the current request-detail session.

The historical snapshot is the immutable data retained for that cycle. It is never reconstructed from the Project's current state, relationships or context assembly.

The detail shows concise lifecycle milestones only: submission, start, response, decline, cancellation, On Hold, resume, reopen and response-handling changes. It does not list per-keystroke Brief edits, become a general activity feed or provide a chat surface.

---

## Consequences

- Current work is immediately legible without hiding historical evidence.
- Large prior-cycle content loads only when the user asks to inspect it.
- Historical context remains trustworthy even after current Project Knowledge changes.
- The request stays transactional and bounded rather than becoming a discussion timeline.

---

## Documentation Updated

- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/knowledge/decisions/ADR-003-asynchronous-transactional-collaboration.md`
- `docs/planning/open-questions.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

---

## Recommended Next Topic

Define the compact current-cycle states and role-specific actions in request detail, including human response drafting, owner cancellation or reopen, and AI On Hold or resume.
