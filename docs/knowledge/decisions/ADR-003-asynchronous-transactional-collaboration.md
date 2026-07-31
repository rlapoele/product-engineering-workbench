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

Each MVP Review has one explicit Review Lens. It may run multiple checks inside that lens, while different lenses require separate Collaboration Requests. The requestor sees and confirms the lens before submission; a contextual entry may preselect a compatible default only when a lens catalog declares one, and Whole-Specification and Specification Section Reviews require deliberate selection. The lens determines context, checks and lens-qualified conclusions. The initial catalog is Requirements Quality, UX Quality, Accessibility, Security, Testability and Implementation Readiness. It records structural compatibility—not context sufficiency, contributor fit or routing: respectively requirement- or acceptance-oriented, experience-oriented, interaction-oriented, boundary- or constraint-oriented, behavior- or verification-oriented, and implementation-bearing content. Every lens is available for whole-Specification Review; selected content inherits compatibility from its containing Artifact or Section and remains a fragment-only review. A Review returns non-canonical Findings, Questions, Suggested Edits, Proposals and Summaries, concluding only that specification coverage appears adequate for the named lens at the current scope, that findings or risks were identified, or that context is insufficient. It never approves Product Knowledge, certifies implementation, conformance, security, accessibility or readiness, or uses a Readiness Result—even under an Implementation Readiness Lens.

A Collaboration Request may target:

- the whole specification;
- a document section;
- a Product Artifact;
- selected content;
- another explicit project scope.

`Validate Readiness` is available from the whole Specification, an eligible Specification Section or an active Product Artifact. An eligible Section has non-whitespace section content or an active contained Product Artifact. It is unavailable from selected content, whose fragment boundary is inadequate for a readiness judgment. Its Readiness Result is a non-canonical local assessment of the selected Product Knowledge's evidence, gaps, risks, dependencies and next actions. It does not certify implementation, delivery workflow, implementation conformance or handoff readiness, and cannot change Product Knowledge automatically. Deterministic Implementation Handoff Readiness runs only through Prepare Handoff against explicit Project State for the profile's eligible selected handoff scope and direct external dependencies.

When Validate Readiness is selected in the local composer, the workbench automatically derives a non-persistent Readiness Fact Check Set preview. Immediately before explicit submission, it reruns the set and includes the resulting immutable fact snapshot in that Request Cycle's recorded context for the selected human or AI recipient. It checks only explicit scope, template, status, relationship, validation-coverage, blocker and direct-dependency rules, reporting `Satisfied`, `Attention needed`, `Not applicable` or `Cannot determine` with the applicable rule and affected knowledge. It is evidence, not a contributor response or readiness verdict, and does not score, route, block, create work, change Product Knowledge or run Handoff Profile readiness rules. It does not silently rerun after submission; explicit Reopen and resubmission create a new cycle snapshot without changing retained prior-cycle evidence.

Each MVP Collaboration Request has exactly one selected available recipient. Recipient selection distinguishes eligibility, availability and capability. Eligibility is the structural boundary: a human candidate must be a Project Collaborator rather than the Project Owner; an AI candidate must be the requestor's own assistant and permitted by Project settings. Availability determines whether an eligible candidate can be selected now: a human becomes available through accepted Project collaboration, while an assistant must be enabled and usable. Capability gives explainable, non-binding guidance about known fit for the requested Assistance Request Type, scope and optional Review Lens; it may identify exact, related or unstated fit but never automatically routes, ranks, assigns or excludes a candidate.

The recipient selector groups selectable candidates as **People**—accepted Project Collaborators—and **My assistants**—the requestor's enabled, usable Personal AI Assistants. A configured but unusable assistant may show only a non-selectable `AI assistance unavailable` state. Pending invitees, non-collaborators, the owner as a human recipient and another user's assistant are not selectable. Initial **Request collaboration** and **New request** actions are enabled only when at least one eligible and available candidate exists. Otherwise they give a compact generic explanation and do not open a composer, so no scope or type selection, Request Brief, Draft, queue, broadcast, fallback assignment, inline invitation or assistant configuration is created. If a selected recipient becomes unavailable after a private Draft begins, the Draft remains private but submission is disabled until availability returns or the owner selects another eligible available recipient. Availability is not live presence, calendar time, willingness, capacity, workload or response-time tracking. A Conversation remains the multi-party path when multiple perspectives or evolving shared context are needed.

A Project owner may initiate a standalone request from the Specification, a Section, a Product Artifact or selected content, whose contextual entry establishes a pinned scope. The Project's Collaboration Requests workspace provides a scope-first `New request` path that defaults to the whole Specification and allows deliberate Section or Product Artifact selection through the outline. Its single paginated list is role-aware: **Requests you created** for the owner, including private Drafts, or **Requests for you** for a Project Collaborator who is the selected human recipient. After Reopen, that collaborator retains a frozen, read-only view of the previously shared request and response evidence until resubmission. If a Declined request is reassigned, its former recipient retains the frozen Declined cycle in **Requests for you** while the new cycle remains visible only to the owner and replacement recipient. Its default applies no lifecycle or response-handling filter and sorts by **Last updated — newest first**. For the owner, Last updated changes for a Brief edit, submission, lifecycle transition including AI On Hold or resume, response submission or response-handling change. For a collaborator, it is the newest meaningful event visible to that collaborator; private Brief edits do not update or reorder their list, while Reopen and resubmission do. The former recipient's frozen Declined record stays at its decline event and does not display or reorder for reassignment or later new-cycle activity. Opening or viewing does not change either list. Search covers the Brief, type, scoped-source label and participant names. Request status, response handling, type and scope kind are filters; the owner may also filter by recipient. The available sorts are Last updated newest or oldest first, creation newest first and Brief A–Z. Compact rows show the Brief, type, scoped source, other party, labelled Request status and concise last-update event. A current-cycle response remains within its parent request and exposes its separately tracked handling status as a labelled request-row field. A retained response from before a reopen is labelled **Previous response**, preserving its evidence without implying it belongs to the reopened cycle; the recipient cannot see the revised Draft Brief or draft-context changes. The detail holds the full Brief, immutable recorded context, lifecycle history, response content and response-handling actions together. This provides flexible access without separate lifecycle lists, board columns or an independent Contribution Response area, and introduces no priority, due date, assignee or needs-action worklist. A future home or cross-project surface may summarize attention and route users back into the appropriate Project, but does not expose an unscoped composer, independent request board or global request workplace. Creation is a local, non-modal progressive-disclosure interaction: after scope, the owner selects type and one recipient, writes the Request Brief, inspects derived read-only context and submits explicitly. Scope, type and recipient are provisional until writing or editing the brief creates a private Draft. The final action is `Submit request` for a human recipient or `Submit and ask` for the owner's usable Personal AI Assistant. No inline invitation, assistant configuration or Conversation-to-request entry is part of this core MVP flow.

List processing applies the role boundary first, then search and all selected filters, then sorting and finally pagination. The MVP shows 25 requests per page. Search or filter changes return the user to page one and show the matching-result count. Search covers only the current request surface visible to that user and excludes response bodies, retained prior-cycle content and private reopened-Draft changes. Response-handling filters apply only to the current Request Cycle; retained history stays in detail and never creates a history-filter match. Equal visible sort values use creation time and then an internal stable identifier.

Request detail is one structure ordered by Request Cycle, newest first. The current cycle is expanded and shows its immutable recorded context plus its submitted response and labelled handling status, or a compact current state; private human response drafts remain private. For an AI request, In Progress and On Hold show only that compact state, never streaming or incomplete assistant response text. Incomplete assistant working state may be retained privately only for a best-effort resume; it is neither response content nor a lifecycle-history item. Earlier cycles are collapsed summaries by default. Expansion immediately shows the summary and then loads that cycle's immutable stored Brief, recorded context and response inline, with compact loading, retry and current-detail-session caching. Historical context is never reassembled from current Project State. Detail records only concise lifecycle milestones—submission, start, response, decline, cancellation, On Hold, resume, reopen and handling changes—rather than an activity feed or chat surface.

Automatic acknowledgement is a response read marker, not a meaningful list or lifecycle update. When the requestor deliberately opens fully rendered current-response content, or expands and fully renders a retained response, that response becomes Acknowledged. A list row, notification, compact preview or loading state does not qualify. This state does not update Last updated, reorder a request list or add a lifecycle-history event. Response detail presents one bounded response surface: an optional Summary followed by the contributor's discrete labelled items in order, with related remedies visibly linked to their Findings. The Project Owner as requestor may dismiss an item as retained not-pursued evidence or open an ordinary private draft from it; neither applies Product Knowledge. Acted On remains the requestor's explicit whole-response handling judgment.

Context Sufficiency is assessed for the specific request type, Review Lens and stated focus rather than as a general scope score. Sufficient context supports all requested checks or feedback focus; partial context supports at least one useful bounded contribution but not every requested dimension; insufficient context supports no bounded contribution. Context Relevance is the preceding request-specific inclusion decision: only Primary and Supporting context enter ordinary assembly, while Optional context requires an explicit Brief need or visible contributor expansion and structurally nearby but non-supporting context stays excluded. Inferred context cannot fill missing Primary evidence, and directly constraining evidence must not be omitted for convenience. Compatibility, recipient fit and routing remain independent. Partial and insufficient requests remain explicitly submittable with a visible Context Explanation. A partial response is grounded and caveated; an insufficient response asks Questions and explains missing basis rather than inventing a Finding, edit, proposal or positive conclusion.

A request includes a required Request Brief that frames the specific help, question or desired outcome within its scope. Its MVP lifecycle is Draft, Submitted, In Progress, Responded, Declined and Cancelled. A human recipient may start work with a private response draft, then submit one bounded Contribution Response or decline; the requestor may cancel an active request. No acceptance, automatic expiry or delivery-management state is needed.

`On Hold` is an additional AI-specific status for an assistant request whose processing is technically interrupted or whose owner's AI assistance becomes unavailable. A new AI request is possible only when the requestor's own Personal AI Assistant is enabled and usable. `Submit and ask` and `Resume assistant` are explicit owner invocations; restored eligibility never resumes, updates or reorders the request automatically. Resume may make a best-effort continuation from private incomplete assistant working state or retry from the retained request and recorded context, without promising a provider-side checkpoint. The assistant does not Decline, cancel or resume by itself, and provider/model, credential, credit and detailed failure information stay private to its owner.

After Responded, the requestor may Reopen the request only while its fixed recipient remains eligible and available. Reopen is an action rather than a status: it returns the request to a private Draft. Recipient, Assistance Request Type, scope and recorded context remain read-only; only the Request Brief may change. Resubmitting returns the request to Submitted for the same recipient, while earlier lifecycle and response evidence remain retained. After Declined, Reopen is enabled only when at least one eligible and available human collaborator or the owner's Personal AI Assistant exists; the owner may select either kind of recipient before resubmission. The replacement receives only the new current cycle; the prior recipient retains their frozen Declined cycle in **Requests for you**, at the decline event and without later reassignment or new-cycle activity. A Cancelled request cannot be reopened; renewed work requires a new request. The owner may discard a reopened Draft to restore its immediately preceding terminal cycle without erasing history. A recipient may decline after starting response work, which discards their private response draft.

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

The Project Owner as requestor will review submitted responses. Each response is Submitted when sent, automatically becomes Acknowledged on the requestor's deliberate fully rendered response access, and may be explicitly marked Acted On when the requestor has dealt with its content. These statuses are conversational and do not apply, accept, validate or otherwise change Product Knowledge. Requestor and recipient are request-level roles, not authority grants: in the MVP, a Project Collaborator recipient may submit non-canonical input but may not create, edit or save canonical Product Knowledge.

If the Project Owner separately changes Product Knowledge after considering a response, the resulting saved change will be recorded as a Revision. At that save, the owner may explicitly link one whole Contribution Response as its source. This optional Response Source Link is retained as owner-visible navigation and known provenance between the response's immutable Request Cycle evidence and the Revision; it is not inferred from viewing, acknowledgement, dismissal or Acted On handling. It does not create a separate response trace, collaborator-facing disclosure or handoff metadata, select individual items, imply acceptance, agreement, correctness, adoption, exact origin, sole causation or exclusive human authorship. No Contribution Response, including an Answer, directly alters Product Knowledge or triggers automation. Delegating canonical write authority to collaborators is deferred.

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
