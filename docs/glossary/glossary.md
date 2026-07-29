# Glossary

This glossary defines the canonical terminology used throughout the Product Engineering Workbench.

The objective is to ensure that humans and AI contributors share the same understanding of the project's concepts.

Unless explicitly stated otherwise, the definitions contained in this glossary take precedence over common industry interpretations.

---

# A

## Assistance Request Type

An Assistance Request Type describes the kind of help a user is asking for when creating a scoped Collaboration Request or requesting AI assistance.

Examples include Draft, Improve, Request Feedback, Review, Find Gaps, Find Inconsistencies, Analyze Impact, Suggest Alternatives, Validate Readiness, Ask Question and Prepare Handoff.

Assistance Request Types are user-facing. They should remain compact and understandable so users are not overwhelmed by many similar choices.

Assistance Request Types are distinct from Capabilities. An Assistance Request Type describes what the user wants done, while a Capability describes who or what is qualified to do it.

## Answer

An Answer is a Contribution Response that directly responds to a question posed in a Collaboration Request.

An Answer may explain its basis, assumptions, limits and unresolved dependencies. It remains part of the request's conversation record and does not directly alter canonical Product Knowledge.

## Alternative Proposal

An Alternative Proposal is a non-canonical response to a Suggest Alternatives request that describes a viable way to meet or reassess an intended product outcome.

An Alternative Proposal may be a feature variant, an outcome-preserving substitute, a scope or timing change such as deferring the feature, or a reframing that questions whether the feature addresses the right User Need or Goal. It does not change canonical Product Knowledge unless an authorized contributor accepts or acts on it.

## AI Contributor

An AI Contributor is a Personal AI Assistant acting as a contributor to a Project by providing capabilities such as generation, review, analysis, summarization or implementation-readiness evaluation.

AI Contributors are contributors. Their contributions should remain visible to users and should not silently replace human judgment.

In the MVP, an AI Contributor is available to a particular human user only through that user's enabled Personal AI Assistant. It is not a shared Project credential or an independently available project participant.

## AI Implementation Environment

An AI Implementation Environment is an external environment that can consume implementation-ready product knowledge and use AI agents or AI-assisted tooling to implement the specified software product.

AI Implementation Environments are distinct from AI Contributors inside the workbench.

AI Contributors help create, review or refine product knowledge. AI Implementation Environments consume exported product knowledge to support software implementation.

## AI Assistant

An AI Assistant is a general AI support surface available inside the workbench to help users think, navigate, understand terminology, ask questions and decide what to do next.

The AI Assistant is distinct from scoped assistance requests. When it uses AI capabilities, it is available only through the current human user's enabled Personal AI Assistant. It may help the user choose or initiate an Assistance Request Type, but it should not silently alter canonical product knowledge.

## AI Assistance Governance

AI Assistance Governance is the set of product rules, settings and records that make known AI participation traceable, reviewable and controllable inside the workbench.

It may include enabled AI capabilities, scoped Assistance Request Types, Contribution Responses, acceptance workflows, Context Explanations, Revisions, Provenance, a known AI activity trace and AI-use disclosure settings.

AI Assistance Governance applies to AI assistance known to the workbench. It cannot reliably prevent or prove undisclosed external AI use by a human collaborator. AI-use disclosure is off by default and, when enabled by the project owner, may be directed to the workbench, handoff or both.

## AI Activity Trace

An AI Activity Trace is the project-owner-inspectable record of known in-workbench AI assistance and voluntary external-AI disclosures.

It may record the request, scope, response, Context Explanation, status and an explicit resulting Provenance or Revision link. It records known participation and responses, not a reliable attribution of every final word after human editing or a proof that external AI was not used.

## Accessibility Specification Review

An Accessibility Specification Review is a Review using the Accessibility Lens to assess whether product knowledge defines accessible outcomes, risks and verification needs clearly enough for implementation and later evaluation.

It is standards-informed and may use an explicitly declared target such as WCAG 2.2 AA. It does not certify accessibility conformance, which requires evidence from the implemented interface and its applicable scope.

## Artifact Template

An Artifact Template is a user-facing editing or rendering representation of a Product Artifact schema.

Artifact Templates may present structured artifact fields as placeholders, document-like text or form-like controls.

Artifact Templates do not replace artifact schemas. They provide a friendly way to edit or render structured artifact data.

## Artifact Change Impact Propagation

Artifact Change Impact Propagation is the deterministic system process that identifies active Product Artifacts that may be impacted when an upstream Product Artifact is updated or archived.

The process uses semantically eligible Artifact Relationships in the Product Knowledge Graph to resolve either Stale status or coverage/readiness warnings and record the causal paths that explain why attention is needed. It does not propagate through `relates_to` or archived artifacts.

AI assistance may help users understand or resolve Stale artifacts after propagation, but AI is not required to identify the initial impact set.

## Artifact Placement

Artifact Placement is the document location at which a Product Artifact is presented in a Specification Section.

For the MVP, an artifact type has a deterministic canonical destination section. A newly created artifact is placed at the end of that section; the creation flow does not offer an alternative placement. If its canonical section is not selected in the Specification, the user must explicitly add that section or cancel the creation. Canceling at that section gate makes no document change; after the user explicitly adds the section, it remains selected even if the artifact's later unsaved draft is discarded.

Users may reorder artifacts up or down only within their current section. Such a change creates a Revision of the document composition, but does not change artifact identity, provenance, Artifact Relationships or Conversation Outcome Links. Moving an artifact between sections is outside the MVP.

## Assumption

An Assumption is a belief treated as true for the purpose of current product reasoning, specification or implementation planning.

Assumptions should remain visible because they may affect implementation decisions, risks, open questions or future validation.

## Product Artifact

A Product Artifact is a structured piece of product knowledge produced during a product engineering workflow.

After first use, Product Artifact may be shortened to Artifact when the meaning is clear.

Examples include:

- Vision
- User Need
- Feature
- User Story
- Acceptance Criteria
- Risk
- Architecture Decision

Product Artifacts may be atomic or composite and may reference other Product Artifacts.

---

# B

## Bring Your Own AI (BYO-AI)

Bring Your Own AI is the MVP model in which a human user supplies and enables their own provider and model credentials for AI support.

The configuration, provider access and associated usage belong to that human user. Enabling it makes AI assistance available to that user only; it does not expose credentials, enable AI for other collaborators or create a Project-owned AI credential.

---

# C

## Capability

A service or expertise that a contributor can provide.

Examples include:

- Architecture Review
- UX Review
- Business Review
- Security Review
- Requirement Generation
- Risk Analysis

Capabilities are used to route contribution requests.

---

## Candidate Context

Candidate Context is the set of potentially relevant product knowledge gathered before filtering for a specific assistance request or contribution.

Candidate Context may include Structural Context, Explicit Context, Inferred Context, Conversations, decisions, risks, assumptions, reviews, provenance and project metadata.

---

## Check Type

A Check Type is a focused evaluative activity that can be run on product knowledge.

Examples include Gap Check, Inconsistency Check, Ambiguity Check, Testability Check, Feasibility Check, Alignment Check, Risk Check and Readiness Check.

A Check Type may be exposed as a focused Assistance Request Type or used internally as part of a broader Review.

---

## Contributor Availability

Contributor Availability describes whether a potential human or AI recipient can receive or respond to a Collaboration Request for a given Project, scope and requested capability.

For human recipients in the MVP, availability is invitation-gated: an accepted Project Collaborator becomes available after being invited, onboarded if needed and accepting the invitation.

For AI Contributors in the MVP, availability is personal to the current human user: that user must have enabled usable Bring Your Own AI credentials, and the requested assistance must be permitted by applicable Project settings.

---

## Content Locale

Content Locale identifies the locale of user-authored specification content for a Project or Specification.

For the MVP, Product Artifacts inherit the Project or Specification content locale rather than storing artifact-level localization fields.

---

## Collaboration Request

A Collaboration Request is a scoped request for assistance sent to one selected available human or AI recipient.

A Collaboration Request identifies the Request Brief, relevant scope, selected recipient, relevant capability and context needed to respond. Capability may inform selection, but it is not a capability-only queue or a multi-recipient request.

In the MVP, Collaboration Requests support asynchronous and transactional collaboration rather than real-time co-editing. An initial Draft is private to its requestor. After Reopen, the selected human recipient retains a frozen, read-only view of the previously shared request and response evidence; the new Draft Brief and any draft-context changes remain private until resubmission.

Within a Project, requests appear in one role-aware, paginated list: **Requests you created** for the Project Owner and **Requests for you** for a Project Collaborator. The list is searchable, filterable and sortable; it does not separate requests and their Contribution Responses into different lists or workspaces.

---

## Collaboration Request Recipient

A Collaboration Request Recipient is the person or Personal AI Assistant selected to provide the bounded response to one Collaboration Request. It is a temporary request responsibility, not a Project membership role.

A human recipient must be an accepted Project Collaborator. The Project Owner cannot be the human recipient of their own request. An AI recipient must be the requestor's own enabled, usable Personal AI Assistant.

---

## Collaboration Request Status

Collaboration Request Status describes the lifecycle of a Collaboration Request. The MVP statuses are Draft, Submitted, In Progress, Responded, Declined and Cancelled.

`On Hold` is an additional AI-specific status. It records that an AI-targeted request cannot currently proceed because its assistant's processing was technically interrupted or that owner's AI assistance became unavailable. It is not used for human recipients or as a general delivery-management state. The assistant owner may explicitly resume or retry only after AI assistance is usable again; otherwise the request remains On Hold or may be cancelled.

---

## Context

The relevant surrounding knowledge needed to understand or act on a Product Artifact, project area or contribution.

Context may include related Product Artifacts, workflow information, project metadata, Conversations, decisions, risks, reviews or other relevant knowledge.

Context answers: “What knowledge is needed to understand or work on this?”

---

## Context Assembly

Context Assembly is the process of selecting, filtering, prioritizing and explaining the context provided to a human or AI contributor for a specific request.

Context Assembly starts from the requested scope, expands through relevant relationships and then filters candidate context according to the Assistance Request Type, expected Response Shape and contributor needs.

---

## Context Explanation

A Context Explanation is a user-visible explanation of what context was included, excluded or treated as limited when fulfilling a request.

Context Explanations help users understand and trust human or AI contributions.

---

## Context Relevance

Context Relevance describes how useful a candidate context item is for a specific request.

For the MVP, relevance may be represented conceptually as primary, supporting, optional or excluded.

---

## Context References

Explicit links that identify which Product Artifacts or knowledge items should be considered when performing a task.

Context References help assemble the right information for review, AI assistance, consistency checks, impact analysis, export generation or document rendering.

Context References are distinct from Provenance: Context References identify what knowledge is needed now, while Provenance explains where knowledge came from.

---

## Context Sufficiency

Context Sufficiency describes whether the assembled context is rich enough to support a reliable contribution.

Insufficient context should not always block a request, but it should be visible to the user and may result in a warning, clarifying question or limited-confidence response.

---

## Core Feature

A Core Feature is a user-visible capability or product area.

Core Features describe the major things a product lets users do.

A Core Feature may be refined by Functional Requirements and validated by Acceptance Criteria.

---

## Contribution

A meaningful action performed by a Contributor.

Examples include comments, questions, answers, reviews, suggestions, proposals, decisions, Product Artifact creation, Product Artifact updates, AI generation and AI analysis.

A Contribution records participation in the product engineering process. It is distinct from a Revision, which records a saved change to product knowledge, and from Provenance, which explains the origin of product knowledge.

---

## Contribution Response

A Contribution Response is a Collaboration Request recipient's submitted input.

A Contribution Response may contain answers, comments, review results, suggested edits, proposed artifacts, proposed decisions or other requested input.

Contribution Responses do not directly alter canonical Product Knowledge. A project owner or authorized requestor may manually act on a response by updating or creating product knowledge through a separate action, which records the resulting Revision when applicable.

## Contribution Response Status

Contribution Response Status describes the requestor's handling of an individual Contribution Response.

For the MVP, a response is Submitted when the request recipient sends it. The requestor may manually mark it Acknowledged to indicate that it has been read, and may later mark it Acted On to indicate that they have dealt with its content.

Acknowledged and Acted On are collaboration statuses only. They do not accept, apply, validate or otherwise change Product Knowledge, and Acted On does not require the requestor to link a Revision or record a note.

---

## Contributor

An abstract human or AI actor capable of providing a Contribution.

A contributor may be:

- Human
- Artificial Intelligence

Contributors provide capabilities independently of their implementation. `Contributor` is not a Project membership role: an accepted invited person is a Project Collaborator, and a selected person or assistant on one request is its recipient.

---

## Conversation

A topic-focused exchange between an initiating participant and at least one recipient inside one Project.

Conversations support exploration, clarification and collaboration. They are Project working memory, not canonical Product Knowledge or an Assistance Request Type.

Each Conversation has a topic and explicit source/scope. In the MVP, it may arise from the Project, whole Specification, a Specification Section, a Product Artifact or selected Specification content. It may involve accepted human collaborators, pending invitees and enabled available Personal AI Assistants.

Only a Project owner or accepted human collaborator may initiate a Conversation. Pending invitees and Personal AI Assistants cannot initiate one. Conversation initiation always occurs in a Project context; a future home or cross-project surface may show existing Conversations but does not offer an unscoped Conversation composer.

`Invite contributor` is reserved for adding a human collaborator to a Project. `Add recipient` adds an existing person or Personal AI Assistant to a Conversation without changing Project membership or configuring a new assistant.

The initiating participant manages human recipients. Other human Conversation participants may request an additional human recipient, but the initiator approves or rejects that request. A participant manages only their own assistants; removing a human recipient also removes every assistant that person added. Recipient changes preserve prior messages and appear as concise Conversation history events.

A Conversation is Open or Closed. Human recipients may leave an Open Conversation; an assistant never leaves by itself and is removed only by its owner or through its owner's departure or removal. The initiator closes an Open Conversation instead of leaving it; a Project owner has a safety override. The absence of other active human recipients does not close a Conversation automatically or after a fixed period. A Closed Conversation is retained as read-only working memory, not reopened or deleted in the MVP.

Conversations are transient. Important conclusions may later crystallize through separate explicit actions that create or update Product Knowledge, record a Decision or track an Open Question.

---

## Conversation Outcome Link

A Conversation Outcome Link is an internal, bidirectional provenance and navigation link between a Conversation and Product Knowledge, a Decision or an Open Question created or updated from that Conversation.

It is not a Product Artifact, Artifact Relationship, Context Reference or Handoff Package item. It is visible from both the Conversation and the linked record, may optionally identify selected source messages, and never implies participant agreement.

If its linked record is Archived, the link remains valid and is labeled Archived. If the target is genuinely unavailable because it was deleted or otherwise removed by a future retention or recovery policy, the link remains visible but is labeled Broken using its retained target title and identifier snapshot. Only the link creator or Project owner may delete a Conversation Outcome Link; deletion removes the connection, not either endpoint, and records a concise history event. Conversation Outcome Links are never included in an Implementation Handoff Package.

---

# D

## Decision

A stable conclusion reached after exploration and conversation.

Decision is both:

- a general project concept used to preserve rationale; and
- a possible Product Artifact type when the decision itself is managed as structured product knowledge.

Decisions may update project knowledge and may optionally be formalized through Architecture Decision Records (ADRs) or other decision records.

---

## Deterministic Next-step Guidance

Deterministic Next-step Guidance is an optional, user-invoked derived view that identifies relevant follow-up work from explicit Project State.

It is not a task list, workflow gate, Product Artifact or AI request. The initial guidance rules use the current user's Edit-in-progress Drafts, explicit Open Question blockers, active impact outcomes and empty required selected sections.

---

# E

## Edit-in-progress Draft

An Edit-in-progress Draft is a persistent, user-owned working copy of a Product Artifact that has not yet become canonical Product Knowledge.

It is not an Artifact lifecycle state or a Revision. It may be kept, discarded or completed through `Done editing`; only Done editing creates a new Revision and may trigger Artifact Change Impact Propagation.

---

## Explicit Context

Explicit Context is context gathered through manually created, imported or accepted artifact relationships and context references.

Explicit Context represents project-specific knowledge links that contributors have made visible.

---

# F

## Finding Type

A Finding Type describes the kind of issue, observation or result produced by a review or check.

Examples include Gap, Inconsistency, Ambiguity, Risk, Blocker, Dependency, Recommendation and Readiness Warning.

---

## Functional Requirement

A Functional Requirement is a specific behavior, rule or obligation the system must satisfy.

Functional Requirements describe what the system must do in enough detail to support implementation and validation.

Functional Requirements are distinct from Core Features: a Core Feature describes a user-visible capability, while a Functional Requirement describes specific expected system behavior.

---

# G

## Guidance Item

A Guidance Item is one optional, deterministic follow-up suggestion in the `What next?` view.

It identifies its Project State basis and lets the user navigate to the relevant scope or open that scope's ordinary contextual action menu. It does not create, assign or apply work automatically.

---

# I

## Implementation-ready Knowledge

Product knowledge that provides sufficient clarity, completeness and consistency for implementation by either humans or AI implementation agents.

## Implementation Handoff Package

An Implementation Handoff Package is an exported representation of product knowledge intended to be consumed by humans, AI-assisted developers, AI implementation environments or delivery tools.

It may contain structured files, document sections, implementation guidance, acceptance criteria, risks, open questions and other context required to implement the specified product.

The MVP package should include a combined specification file, section-level Markdown files, an implementation brief and a manifest file. It may also include a standalone Readiness Report when readiness validation and report inclusion are selected. Artifact-level files and expanded metadata may be added as stretch items.

For a partial handoff, the package must make its boundary explicit: Definition Scope, Supporting Context, directly related knowledge intentionally outside the package, and Direct External Dependencies. The manifest is the authoritative machine-readable representation of that boundary.

Conversation Outcome Links are internal working-memory provenance and navigation. They are never included in an Implementation Handoff Package.

---

## Handoff Profile

A Handoff Profile is a configuration that shapes an Implementation Handoff Package for a specific intended consumer.

Handoff Profiles may target humans, AI-assisted developers, AI implementation environments, agencies, clients, QA reviewers or other downstream users.

A Handoff Profile may control generated files, implementation guidance, tool-specific instructions, context depth, verification checklists, metadata and how risks or unresolved open questions are presented.

The MVP default Handoff Profile is `Implementation Handoff`, intended to be human-readable and AI-useful.

---

## Handoff Package Role

A Handoff Package Role describes how selected Product Knowledge participates in one specific Implementation Handoff Package. It is not a user, contributor, permission or organizational role.

The user may explicitly assign selected knowledge one Handoff Package Role: Definition Scope, Supporting Context or directly related knowledge intentionally outside the package. A Direct External Dependency is derived from Definition Scope relationships; it is not an assigned Handoff Package Role and cannot be relabeled as included knowledge.

---

## Handoff Definition Scope

A Handoff Definition Scope is selected Product Knowledge that the user explicitly designates as knowledge the implementation consumer is being asked to implement.

Each Definition Scope activates the applicable meaningful-product-definition rule of the selected Handoff Profile. Multiple Definition Scopes compose conjunctively.

For a mixed handoff, each Definition Scope is an explicitly created, separately displayed selection set. This preserves the user's designation and lets the workbench show deterministic checks for each implementation subject; shared evidence remains shared only through explicit relationships.

---

## Handoff Supporting Context

Handoff Supporting Context is related Product Knowledge included to explain, constrain or caveat a Handoff Definition Scope without itself becoming an implementation subject.

Supporting Context does not activate an additional meaningful-product-definition rule. It remains distinct from Direct External Dependencies.

---

## Handoff Preparation Preference

A Handoff Preparation Preference is personal application state remembered per user, Project/Specification and Handoff Profile.

It may include the last selected handoff scope, the Handoff Package Role designation of selected knowledge, whether readiness validation runs before preparation and whether the resulting Readiness Report is included in the package. It is not shared Project Knowledge or a project-wide default.

---

## Handoff History

Handoff History is a compact record of successfully prepared Implementation Handoff Packages. It is distinct from Revision history: Revisions record saved Product Knowledge changes, while Handoff History records durable package-preparation events.

Each event retains an immutable manifest-derived snapshot of the prepared package's time, Handoff Profile, package boundary, readiness outcome, package result and caveat or blocker summary. When relevant, it also retains a compact AI-disclosure summary: the selected destination, whether disclosure was included, disclosed-entry count, whether no known activity was recorded for the included scope and the standard trace-limit caveat. It does not require the workbench to retain the downloadable package archive.

The disclosure summary is not an AI Activity Trace browser. It does not retain entry-level trace details, raw prompts, raw responses or a live link to later trace state; the event's immutable manifest snapshot remains authoritative for what the prepared package disclosed.

Handoff History does not provide a built-in package-diff experience for the MVP. Scope-selection changes, previews and failed preparation attempts are not handoff-history events.

A later change to the current handoff boundary or Handoff Package Roles does not alter an earlier event. A new event is created only when the changed scope is successfully prepared.

---

## Impact Disclosure

An Impact Disclosure is a transient, non-modal summary shown after a committed Revision identifies impacted Product Artifacts.

It is anchored to the edited artifact, is collapsed by default and may expand to a compact navigable list. It complements, but does not replace, the persistent Stale and coverage/readiness cues on affected artifacts and sections.

---

## Inferred Context

Inferred Context is context suggested by analysis, AI assistance or system inference rather than by accepted structural or explicit relationships.

Inferred Context may help identify useful context, but it should not be treated as canonical until accepted or otherwise confirmed.

---

# K

## Knowledge

Stable information describing the product.

Knowledge includes:

- Vision
- Principles
- Specifications
- Architecture
- Data Model
- Decisions

Knowledge forms the project's long-term memory.

---

## Knowledge Crystallization

The process of transforming exploratory Conversations into stable project knowledge.

For the MVP, only the Project owner may explicitly crystallize a Conversation into new or updated Product Knowledge, a Decision or an Open Question. The owner may use an entire Conversation or one or more selected messages as source material, then reviews and saves the result through the ordinary creation or revision flow. Copying a Conversation, messages or selected text does not crystallize knowledge. Text-range capture as source material and formal contributor requests for crystallization are deferred.

Crystallization records provenance linking the resulting knowledge to the Conversation and, when messages were selected, to those messages. It does not itself close, resolve or otherwise change the Conversation.

The MVP relies on the Project owner's explicit judgment of whether and when to crystallize. It provides no Conversation-ready status, prompt, recommendation or participant signal, and does not infer readiness from activity, inactivity, apparent agreement, assistant analysis or closure. A participant may raise a possible outcome through an ordinary message without creating a workflow state or obligation.

Typical progression:

Idea

↓

Conversation

↓

Decision

↓

Knowledge

---

# O

## Open Question

An unresolved question that requires further exploration before becoming stable project knowledge.

Open questions are intentionally tracked until resolved or archived.

---

# P

## Personal AI Assistant

A Personal AI Assistant is a named, user-owned AI configuration that a human user may invoke through Bring Your Own AI support.

For the MVP, a user may configure multiple Personal AI Assistants and mark one as their default. Each assistant uses a selected provider/model configuration owned by that human user. The assistant's display name defaults to a possessive generic name such as `Alex's assistant`, but its owner may rename it, for example to `Alfred`.

The assistant's provider and model details are available only in its owner's AI settings/configuration. When it contributes, it appears by its display name with a compact assistant cue; its human owner is available through the assistant profile rather than repeated beside every contribution. A Personal AI Assistant is not a separately authenticated User, cannot use another user's credentials, and may make a visible contribution only when its owner explicitly invokes it.

In an AI-targeted Collaboration Request, the owner's explicit `Submit and ask` or `Resume assistant` action is the invocation. The assistant never begins, resumes, declines or cancels the request autonomously. Provider, model, credit, credential and detailed technical-failure information remain private to the owner; ordinary request surfaces may show only that AI assistance is currently unavailable.

## Planning

The current execution strategy for the project.

Planning describes intentions rather than established knowledge.

Planning is expected to evolve frequently.

---

## Product Delivery

The discipline responsible for transforming implementation-ready product knowledge into working software.

Examples include:

- Sprint Planning
- Task Management
- Kanban
- Releases

Product Delivery is intentionally outside the primary scope of the Product Engineering Workbench.

---

## Product Engineering

The discipline responsible for transforming ideas into implementation-ready product knowledge.

Product Engineering includes activities such as:

- Product discovery
- Product definition
- Requirements engineering
- Architecture
- Validation
- Product specification

Product Engineering is the primary focus of the Product Engineering Workbench.

---

## Product Knowledge

The complete body of knowledge describing a product.

Product knowledge is composed of interconnected Product Artifacts.

---

## Project Collaborator

A Project Collaborator is a person who has been invited to participate in a Project and has accepted that invitation. This is a durable Project relationship, independent of whether the collaborator currently has a Collaboration Request awaiting a reply.

A Project Collaborator may be selected as the human recipient of a Collaboration Request and may participate in eligible Conversations. A Project Collaborator is not the Project Owner of that same Project.

---

## Project Owner

A Project Owner is the user who created a Project. The owner controls the Project's Product Knowledge and decides whether requested or received contributions should be acted upon.

Project Owner and Project Collaborator are mutually exclusive roles within one Project. A Project Owner cannot select themself as the human recipient of a Collaboration Request; they may instead work directly or explicitly invoke one of their own eligible Personal AI Assistants.

---

## Project Preset

A Project Preset is a predefined configuration within a Specification Document Template.

It selects and classifies template sections for a particular project type, size or complexity.

For the MVP, presets may classify sections as Required, Recommended or Optional.

---

## Provenance

An explanation of where a piece of product knowledge came from.

Provenance may indicate that knowledge was created manually, generated by AI, derived from another Product Artifact, based on a Conversation, imported from a document, updated after review or linked to a decision.

Provenance may also indicate that known AI assistance participated in creating or refining accepted product knowledge.

Provenance is distinct from Contribution and Revision: Contribution records participation, Revision records saved change history and Provenance records origin or derivation.

Provenance records known origin and derivation. It should not imply that the workbench can prove a human contribution was not assisted by an external AI tool.

---

# R

## Repository Engineering Process

The engineering process used to design and develop the Product Engineering Workbench itself.

This process is independent of the workflow templates supported by the Product Engineering Workbench.

---

## Review

A contribution whose objective is to evaluate, improve or validate existing product knowledge.

A review may be performed by either a human or an AI contributor.

Review is a composite Assistance Request Type. It may include multiple Check Types, such as gap checks, inconsistency checks, ambiguity checks, testability checks, feasibility checks, alignment checks, risk checks and readiness checks.

---

## Review Lens

A Review Lens is the perspective, standard or quality dimension used when performing a Review.

Examples include Requirements Quality, UX Quality, Accessibility, Security, Testability and Implementation Readiness.

---

## Requirements Quality Review

A Requirements Quality Review is a Review using the Requirements Quality Lens to assess whether a requirement is clear, complete, consistent, testable and traceable enough for its current product scope.

It assesses the quality of specification knowledge. It does not alter the requirement, decide product behavior or certify implementation conformance.

---

## Readiness

The degree to which a Product Artifact, feature, project area or export is mature enough to support implementation or downstream use.

Readiness may depend on required Product Artifacts, required relationships, resolved open questions, identified risks, testable acceptance criteria, completed reviews and stale knowledge being updated.

For deterministic Implementation Handoff Readiness, a selected scope is `Ready`, `Ready with Caveats` or `Not Ready` according to explicit Project State. This outcome is distinct from the `Prepared` or `Prepared with Caveats` result of a handoff package.

---

## Readiness Report

A Readiness Report is an optional standalone `READINESS_REPORT.md` file in an Implementation Handoff Package.

It records the deterministic readiness outcome for the selected scope, its basis, external dependencies and recommended follow-up actions. It is generated only when readiness validation and report inclusion are selected.

---

## Request Brief

A Request Brief is the requestor-authored framing of the specific help, question or desired outcome for a Collaboration Request.

The Assistance Request Type identifies the kind of help sought; the Request Brief identifies what the selected recipient should address within the request's scope. It is required for a submitted request.

After a request has first been submitted, its recipient, Assistance Request Type, scope and recorded context remain read-only. If the requestor reopens the request, only its Request Brief may be revised before the request is resubmitted.

---

## Request Cycle

A Request Cycle is one bounded iteration of a Collaboration Request, beginning when the request is first created or reopened and ending when that iteration is Responded, Declined or Cancelled.

Reopen begins a new Request Cycle while retaining earlier lifecycle and Contribution Response evidence. The selected human recipient keeps a frozen, read-only view of that earlier evidence until resubmission, but cannot see the new Draft Brief or draft-context changes. A response from an earlier cycle is not a response to the reopened cycle and is labelled as a Previous response in the request list until the current cycle receives a response.

---

## Resource

A Resource is reusable supporting material for a Project. It may be a managed uploaded file or an external URL. One Resource may have several independent Resource References. Once referenced, its source is effectively immutable: replacing its managed file or changing its URL creates a new Resource and updates only explicitly selected references.

A Resource is not a Product Artifact by default. It becomes one only when it needs independent lifecycle, review state, relationships, provenance or collaboration.

---

## Resource Reference

A Resource Reference attaches a Resource to a Specification, Specification Section or Product Artifact and explains why it is relevant at that location. It may include a purpose or type, description or caption, and location-specific metadata. It has its own target-specific meaning even when it shares a Resource with other references.

Users create Resource References directly where they are working; an external link does not need to first appear in a separate external-links section. A Resource Reference is distinct from a Context Reference and an Artifact Relationship. It does not automatically enter every AI request or expand a handoff scope by itself.

Adding, removing, replacing or materially changing a Resource Reference is a Revision of its attached target; ordinary relationship-specific impact rules then apply. A remote change behind an unchanged external URL is an availability or version caveat, not an inferred Revision.

For an included handoff scope, a managed uploaded Resource is copied into the package with its reference metadata. One shared Resource is copied once when several included references use it, while every reference remains represented. An external Resource remains a labeled link and is a caveat when availability cannot be established. A Specification-level Resource Reference is excluded from a partial handoff unless explicitly included as Supporting Context.

---

## Stale

Stale is an artifact lifecycle state indicating that a Product Artifact may no longer be accurate because related upstream knowledge changed.

Stale does not mean the artifact is definitely incorrect. It means the artifact should be reviewed, updated or confirmed as still valid.

---

## Response Shape

A Response Shape describes the form of a Contribution Response.

Examples include Answer, Comment, Question, Finding, Suggested Edit, Proposed Artifact, Proposed Relationship, Proposed Decision, Readiness Result, Summary and Handoff Material.

---

## Revision

A saved change to a Product Artifact or other project knowledge item.

Revisions preserve change history by recording what changed, when it changed, who or what changed it and why it changed when that is known.

Revision is distinct from Contribution and Provenance: Contribution records participation, Revision records saved change history and Provenance records origin or derivation.

For an interactive artifact edit, a Revision is created only when the user selects `Done editing`, not while an Edit-in-progress Draft is being written or preserved. A saved within-section Artifact Placement reorder is also a Revision of document composition.

---

# S

## Section Catalog

A Section Catalog is the reusable collection of specification sections that can be composed into Specification Document Templates and Project Presets.

The Section Catalog allows multiple templates or presets to reuse common sections without duplicating their definitions.

---

## Session

A summary of an exploratory working conversation.

Sessions represent the project's working memory and may produce updates to long-term knowledge.

---

## Specification

A structured description of one or more aspects of a product.

Specifications describe what should be built rather than how implementation work should be organized.

From the user experience standpoint, the Specification is the complete project documentation the user works on.

Internally, a Specification may be a document-like composition or view over structured Product Artifacts and related product knowledge.

---

## Screen / View

A Screen / View is a Product Artifact describing a user-facing screen, page, modal, panel or major interface view.

Screen / View artifacts help specify what users see and interact with.

---

## Specification Document Template

A Specification Document Template is a user-facing template that defines the expected structure of a product specification document.

It helps users start a project by selecting and optionally customizing the sections they intend to complete.

A Specification Document Template may be backed by an internal Workflow Template that defines artifact types, sequencing, validation rules, AI assistance strategies or export behavior.

---

## Specification Section

A Specification Section is a document/container structure within a Specification.

Specification Sections organize and present Product Artifacts, but they are not Product Artifact types in the MVP.

---

## Structural Context

Structural Context is context implied by the Specification Document Template, document structure, section composition, artifact type expectations or artifact hierarchy.

For example, a User Story's parent Feature or related Acceptance Criteria may be Structural Context when those relationships are implied by the selected specification model.

---

# U

## UI Requirement

A UI Requirement is a Product Artifact describing a specific visual, interaction, state, responsive or accessibility expectation.

UI Requirements help make UX/UI expectations implementation-ready without requiring low-level design-system artifact types in the MVP.

---

## UX/UI Design Requirements and Interaction Notes

UX/UI Design Requirements and Interaction Notes is a Specification Section for the application-specific UX/UI guidance needed for faithful implementation.

It may include shared visual design guidance, interaction patterns, component usage and states, responsive and accessibility expectations, and references to external design sources. It is not a design-system authoring surface; lower-level values may remain section content, structured fields or external references rather than separate Product Artifacts in the MVP.

---

## Use Case

A Use Case is a structured description of an interaction between an actor and the system.

Use Cases typically describe a trigger, preconditions, main flow, alternate flows, postconditions and exceptions.

Use Cases are distinct from User Stories, though both describe user-facing behavior and interaction intent.

---

## User Story

A User Story is a compact, value-oriented description of something a user wants to achieve.

User Stories typically identify an actor, a need and an expected benefit.

User Stories are distinct from Use Cases, though both may appear in the `User Stories and Use Cases` section of a specification.

---

## User Flow

A User Flow is a Product Artifact describing a sequence of user steps, interactions or screens needed to achieve an outcome.

User Flows help specify how users move through the product.

---

# W

## Working Memory

Transient project information supporting ongoing exploration.

Working memory includes:

- Conversations
- Sessions
- Brainstorming
- Ideas

Working memory is expected to evolve continuously.

---

## Workflow Template

A configurable product engineering workflow supported by the Product Engineering Workbench.

A workflow template defines:

- available stages;
- enabled artifacts;
- required artifacts;
- relationships;
- validation rules.

Workflow templates describe how users may engineer products using the workbench.

They are independent from the Repository Engineering Process used to develop the Product Engineering Workbench itself.
