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

Each Collaboration Request should have an Assistance Request Type that describes the kind of help being requested.

Initial MVP Assistance Request Types include:

- Draft;
- Improve;
- Request Feedback;
- Review;
- Find Gaps;
- Find Inconsistencies;
- Analyze Impact;
- Suggest Alternatives;
- Validate Readiness;
- Ask Question;
- Prepare Handoff.

Request Feedback and Review are distinct. Request Feedback is open-ended and comment-oriented, while Review is structured and criteria-oriented.

Review is a composite Assistance Request Type. It may include multiple Check Types, such as gap checks, inconsistency checks, ambiguity checks, testability checks, feasibility checks, alignment checks, risk checks and readiness checks.

Focused Assistance Request Types may expose individual checks directly. For example, Find Gaps may run a Gap Check, while a broader Review may include that check alongside others.

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

- answers;
- comments;
- questions;
- review results;
- findings;
- suggested edits;
- proposed artifacts;
- proposed relationships;
- proposed decisions;
- readiness results;
- summaries;
- handoff material;
- other requested input.

The MVP should recognize Response Shapes so the requestor can act appropriately on each response. Initial Response Shapes include Answer, Comment, Question, Finding, Suggested Edit, Proposed Artifact, Proposed Relationship, Proposed Decision, Readiness Result, Summary and Handoff Material.

Findings may use Finding Types such as Gap, Inconsistency, Ambiguity, Risk, Blocker, Dependency, Recommendation and Readiness Warning.

Contributors will not directly alter canonical project knowledge through a Collaboration Request.

The project owner or authorized requestor will review submitted responses. Each response is Submitted when sent and may be manually marked Acknowledged when read and Acted On when the requestor has dealt with its content. These statuses are conversational and do not apply, accept, validate or otherwise change Product Knowledge.

If a requestor separately changes product knowledge after considering a response, the resulting saved change will be recorded as a Revision. No Contribution Response, including an Answer, directly alters product knowledge or triggers automation.

---

## Rationale

This decision:

- keeps MVP collaboration meaningful without requiring real-time co-editing infrastructure;
- preserves project-owner control over canonical product knowledge;
- aligns with the existing distinction between Contribution, Revision and Provenance;
- supports both human and AI contributors through the same capability-based model;
- allows contributor selection to account for both capability and availability;
- keeps the user-facing assistance model compact enough to avoid overwhelming users;
- supports both narrow checks and broader composite reviews;
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
- Assistance Request Types;
- requested capabilities or actions;
- contributor availability rules;
- submitted Contribution Responses;
- contribution response statuses;
- requestor acknowledgment and acted-on response statuses.

The model should remain extensible enough to support richer collaboration later if needed.

If the MVP includes a general AI Assistant, it should remain distinct from scoped Collaboration Requests. It may help users think, navigate and choose the right request type, but it should not silently edit canonical product knowledge.

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
