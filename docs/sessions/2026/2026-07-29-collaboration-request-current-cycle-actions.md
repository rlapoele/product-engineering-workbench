# Session — Collaboration Request Current-Cycle Actions

**Session ID:** 2026-07-29-07

**Date:** 2026-07-29

**Status:** Crystallized

---

## Context

Request detail now presents the current cycle prominently and retains earlier cycles as immutable history. The remaining question was which actions each participant may take in each compact state, including whether a declined request can be redirected to another collaborator and whether cancellation is reopenable.

---

## Decision

The owner controls the current request cycle. An initial Draft offers continue editing, discard and submission. A reopened Draft offers the permitted edits, resubmission and **Discard reopened draft**, which restores the immediately preceding terminal cycle without erasing history.

For human requests, the owner may cancel while Submitted or In Progress. A collaborator may start a private response from Submitted, then continue, submit or Decline it while In Progress. Declining after response work discards the private draft. On Responded, the owner may Acknowledge, Act On or Reopen; the collaborator sees their response and its handling status read-only.

Reopen applies only after Responded or Declined:

- A reopened Responded request keeps the same recipient; only the Brief may change.
- A reopened Declined request may select another eligible human recipient before resubmission. The replacement receives only the new current cycle. The original recipient retains only their frozen declined cycle.

A Cancelled request is terminal and cannot be reopened. If its need returns, the owner creates a new Collaboration Request.

For AI requests, only the assistant owner may cancel while the request is Submitted or In Progress, or resume or cancel it from On Hold. No other user can act on an owner's assistant request.

---

## Consequences

- A decline can redirect bounded work without exposing the prior collaborator's history.
- Cancellation has a clear final boundary rather than becoming another temporary state.
- No participant can see another participant's private response draft.
- Current-cycle controls stay focused and do not introduce task-assignment or delivery-management behavior.

---

## Documentation Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/knowledge/decisions/ADR-003-asynchronous-transactional-collaboration.md`
- `docs/planning/open-questions.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

---

## Recommended Next Topic

Validate the complete human decline-and-reassignment journey, including discarded reopened drafts and terminal cancellation.
