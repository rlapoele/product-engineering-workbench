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

Project Owners will create scoped Collaboration Requests for recipients.

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

Each MVP Collaboration Request has exactly one selected available recipient. A human recipient must be an accepted Project Collaborator; the Project Owner cannot request collaboration from themself. Capability and availability guide selection but do not create a capability-only queue, broadcast or group request. A Conversation remains the multi-party path when multiple perspectives or evolving shared context are needed.

A Project owner may initiate a standalone request from the Specification, a Section, a Product Artifact or selected content, whose contextual entry establishes a pinned scope. The Project's Collaboration Requests workspace provides a scope-first `New request` path that defaults to the whole Specification and allows deliberate Section or Product Artifact selection through the outline. Its single paginated list is role-aware: **Requests you created** for the owner, including private Drafts, or **Requests for you** for a Project Collaborator who is the selected human recipient. After Reopen, that collaborator retains a frozen, read-only view of the previously shared request and response evidence until resubmission. Its default applies no lifecycle or response-handling filter and sorts by **Last updated — newest first**. For the owner, Last updated changes for a Brief edit, submission, lifecycle transition including AI On Hold or resume, response submission or response-handling change. For a collaborator, it is the newest meaningful event visible to that collaborator; private Brief edits do not update or reorder their list, while Reopen and resubmission do. Opening or viewing does not change either list. Search covers the Brief, type, scoped-source label and participant names. Request status, response handling, type and scope kind are filters; the owner may also filter by recipient. The available sorts are Last updated newest or oldest first, creation newest first and Brief A–Z. Compact rows show the Brief, type, scoped source, other party, labelled Request status and concise last-update event. A current-cycle response remains within its parent request and exposes its separately tracked handling status as a labelled request-row field. A retained response from before a reopen is labelled **Previous response**, preserving its evidence without implying it belongs to the reopened cycle; the recipient cannot see the revised Draft Brief or draft-context changes. The detail holds the full Brief, immutable recorded context, lifecycle history, response content and response-handling actions together. This provides flexible access without separate lifecycle lists, board columns or an independent Contribution Response area, and introduces no priority, due date, assignee or needs-action worklist. A future home or cross-project surface may summarize attention and route users back into the appropriate Project, but does not expose an unscoped composer, independent request board or global request workplace. Creation is a local, non-modal progressive-disclosure interaction: after scope, the owner selects type and one recipient, writes the Request Brief, inspects derived read-only context and submits explicitly. Scope, type and recipient are provisional until writing or editing the brief creates a private Draft. The final action is `Submit request` for a human recipient or `Submit and ask` for the owner's usable Personal AI Assistant. No inline invitation, assistant configuration or Conversation-to-request entry is part of this core MVP flow.

A request includes a required Request Brief that frames the specific help, question or desired outcome within its scope. Its MVP lifecycle is Draft, Submitted, In Progress, Responded, Declined and Cancelled. A human recipient may start work with a private response draft, then submit one bounded Contribution Response or decline; the requestor may cancel an active request. No acceptance, automatic expiry or delivery-management state is needed.

`On Hold` is an additional AI-specific status for an assistant request whose processing is technically interrupted or whose owner's AI assistance becomes unavailable. A new AI request is possible only when the requestor's own Personal AI Assistant is enabled and usable. `Submit and ask` and `Resume assistant` are explicit owner invocations; restored eligibility never resumes, updates or reorders the request automatically. The assistant does not Decline, cancel or resume by itself, and provider/model, credential, credit and detailed failure information stay private to its owner.

After Responded, Declined or Cancelled, the requestor may Reopen the request. Reopen is an action rather than a status: it returns the request to a private Draft. Recipient, Assistance Request Type, scope and recorded context remain read-only; only the Request Brief may change. Resubmitting returns the request to Submitted for the same recipient, while earlier lifecycle and response evidence remain retained.

Collaboration Requests and Conversations are separate optional paths. A Conversation supports evolving multi-party exploration and may include an eligible collaborator directly; a Collaboration Request asks a contributor for a bounded asynchronous response. Owner-led Conversation outcome capture is a core MVP path, while creating or linking a scoped Collaboration Request from a Conversation is a lower-priority MVP stretch capability. Until that integration is introduced, neither path creates or links to the other implicitly.

Human and AI contributors share the same abstract Contributor and Capability model, but they become available differently in the MVP.

Human Project Collaborators are invitation-gated. A human becomes available as a Collaboration Request recipient after being invited, completing onboarding if needed and accepting the invitation. Project Owner and Project Collaborator are mutually exclusive within the same Project: ownership comes from creating the Project, while collaboration comes from accepting an invitation.

AI Contributor availability is personal to the human user invoking assistance. A user may use AI only through their own enabled, usable Bring Your Own AI credentials; another collaborator's configuration, provider access and associated usage are not available to them. AI Contributors do not require the same invitation and acceptance flow as human collaborators, but applicable Project settings still apply.

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
