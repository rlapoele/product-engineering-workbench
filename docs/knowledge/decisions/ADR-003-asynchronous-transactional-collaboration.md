# ADR-003 — Asynchronous Transactional Collaboration

**Status:** Accepted

**Date:** 2026-07-17

---

## Context

The Product Engineering Workbench should support collaboration on specifications.

Project owners should be able to request help from human contributors or AI contributors based on capabilities such as Requirements Review, UX Review, Risk Analysis, Rewording or Implementation Readiness Review.

The collaboration model must preserve the principle that humans remain in control and that product knowledge changes deliberately.

A key MVP scope question was whether collaboration should include real-time co-editing or a simpler request/response model.

---

## Origin

Resolved from:

- COLL-001 — How should capability-based collaboration work?

---

## Decision

MVP collaboration will be asynchronous and transactional.

Project owners will create scoped Collaboration Requests for contributors.

A Collaboration Request may target:

- the whole specification;
- a document section;
- a Product Artifact;
- selected content;
- another explicit project scope.

Human and AI contributors share the same abstract Contributor and Capability model, but they become available differently in the MVP.

Human collaborators are invitation-gated. A human becomes available to contribute to a project after being invited, completing onboarding if needed and accepting the invitation.

AI Contributors provided by the application are available by default when their capabilities are enabled and usable. They do not require the same invitation and acceptance flow as human collaborators.

Contributors will respond asynchronously by submitting Contribution Responses.

Contribution Responses may include:

- comments;
- review results;
- suggested edits;
- proposed artifacts;
- proposed decisions;
- other requested input.

Contributors will not directly alter canonical project knowledge through a Collaboration Request.

The project owner or authorized requestor will review submitted responses and decide whether to accept, reject, comment on or otherwise act on them.

If an accepted contribution changes product knowledge, the resulting saved change will be recorded as a Revision.

---

## Rationale

This decision:

- keeps MVP collaboration meaningful without requiring real-time co-editing infrastructure;
- preserves project-owner control over canonical product knowledge;
- aligns with the existing distinction between Contribution, Revision and Provenance;
- supports both human and AI contributors through the same capability-based model;
- allows contributor selection to account for both capability and availability;
- avoids simultaneous editing conflict resolution in the MVP;
- allows collaboration to work as a clear request/response workflow.

Asynchronous transactional collaboration fits the product's knowledge-first philosophy better than unconstrained live editing because it encourages deliberate review before project knowledge changes.

---

## Consequences

The MVP does not need to support:

- real-time co-editing;
- shared cursors;
- live presence;
- simultaneous editing conflict resolution;
- project chat as a core collaboration mechanism.

The MVP does need to support:

- user accounts;
- collaboration invitations or requests;
- pending request lists;
- scoped requests;
- requested capabilities or actions;
- contributor availability rules;
- submitted Contribution Responses;
- contribution response statuses;
- requestor review and acceptance or rejection.

The model should remain extensible enough to support richer collaboration later if needed.

---

## Alternatives Considered

### Real-time co-editing

This would allow multiple users to edit the same specification simultaneously, but it would introduce significant complexity around presence, conflict resolution, permissions and live synchronization.

### Chat-first collaboration

This would make collaboration conversational, but it would risk burying important product knowledge in transient discussion rather than crystallizing it into stable artifacts.

### Asynchronous transactional collaboration

This was selected because it supports meaningful collaboration while preserving deliberate control over product knowledge.

---

## Related Documents

- `docs/knowledge/ux/document-first-ui.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ai/ai-orchestration.md`
- `docs/planning/open-questions.md`
- `docs/sessions/2026/2026-07-17-mvp-direction-and-collaboration.md`
