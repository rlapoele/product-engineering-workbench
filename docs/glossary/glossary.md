# Glossary

This glossary defines the canonical terminology used throughout the Product Engineering Workbench.

The objective is to ensure that humans and AI contributors share the same understanding of the project's concepts.

Unless explicitly stated otherwise, the definitions contained in this glossary take precedence over common industry interpretations.

---

# A

## Application Module

An Application Module is a capability-oriented boundary that owns one coherent set of product use cases, policies and public application contracts. It is not a framework layer or a generic folder of technical classes.

For the modular monolith, modules may depend on their own product rules and application-owned Ports, but not on concrete HTTP, UI, Better Auth, PostgreSQL, file/archive, logging, Railway or environment-configuration implementations. The initial modules are Project and Fixed Starter; Implementation Handoff and Project Archive are future modules with the same rule.

## Application Port

An Application Port is a small, task-shaped interface owned by an Application Module that describes an external capability it needs, such as authenticated-principal resolution, owner-scoped Project persistence, a transactional command, managed Resource access or content-free operational recording.

A Port does not expose a framework's native objects or prescribe its adapter. The workbench does not create generic repositories, event buses or ports for every library merely to satisfy a pattern.

## Astro React Island

An Astro React Island is a bounded interactive browser component rendered within an otherwise server-rendered Astro page.

For the first slice, React Islands own only their local interaction state, such as in-progress form input, pending command feedback and recoverable error presentation. They obtain Project reads and submit explicit Project commands through the client-facing Project data and command boundary; they do not become canonical Project State or client-side authorization authority.

## Authenticated User

An Authenticated User is the current human user whose identity has been established by the workbench's identity boundary.

For the first slice, Better Auth establishes a session through Google or GitHub OAuth and supplies one stable, opaque user identifier to the server application. The browser does not choose or submit that identifier, an email address or an OAuth-provider identifier as Project ownership or command authority. Email/password authentication, anonymous access, provider-account settings, manual account linking and account recovery remain outside this slice.

## Assistance Request Type

An Assistance Request Type describes the kind of help a user is asking for when creating a scoped Collaboration Request or requesting AI assistance.

Examples include Draft, Improve, Request Feedback, Review, Find Gaps, Find Inconsistencies, Analyze Impact, Suggest Alternatives, Validate Readiness, Ask Question and Prepare Handoff.

Assistance Request Types are user-facing. They should remain compact and understandable so users are not overwhelmed by many similar choices.

Assistance Request Types are distinct from Capabilities. An Assistance Request Type describes what the user wants done, while a Capability describes who or what is qualified to do it.

## Answer

An Answer is a Contribution Response that directly responds to a question posed in a Collaboration Request.

An Answer may explain its basis, assumptions, limits and unresolved dependencies. It remains part of the request's conversation record and does not directly alter canonical Product Knowledge.

## Acceptance Criterion

An Acceptance Criterion is an independent Product Artifact that defines observable evidence for whether specified product behavior is acceptable.

Each criterion has one required primary validation target and may have additional explicit targets. A Core Feature, User Story, Use Case, Functional Requirement, Non-Functional Requirement, Domain Rule, Screen / View, User Flow or UI Requirement may be a validation target. The primary target gives the criterion its natural authoring and rendering context; additional targets prevent duplicate criteria when the same evidence validates related knowledge.

One Acceptance Criterion may validly validate multiple Functional Requirements when its observable evidence applies to each linked requirement. This does not by itself mean that the requirements are poorly formulated; when the evidence cannot be explained for each requirement, the criterion or requirement should instead be split.

An Acceptance Criterion may also validate a Domain Rule and a related Functional Requirement when its observable evidence genuinely covers both. Domain Concepts and Domain Relationships remain structural context rather than validation targets.

A criterion uses either a **Direct** form with a required observable pass condition, or a **Scenario** form with required `Given`, `When` and `Then` fields. In a Scenario, `Then` is the observable pass condition. A Direct criterion uses its pass condition as its readable heading and does not require a duplicate title.

The canonical Acceptance Criteria section contains each criterion once. Linked targets may render the same artifact contextually with its ordinary actions, history and identity; these projections are not copies. Acceptance Criteria are distinct from Goal Success Criteria, which measure product-outcome achievement rather than validate specified system behavior.

## Alternative Proposal

An Alternative Proposal is a non-canonical response to a Suggest Alternatives request that describes a viable way to meet or reassess an intended product outcome.

An Alternative Proposal may be a feature variant, an outcome-preserving substitute, a scope or timing change such as deferring the feature, or a reframing that questions whether the feature addresses the right User Need or Goal. It does not change canonical Product Knowledge unless the Project Owner separately creates or revises that knowledge through the ordinary explicit save flow.

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

It may include enabled AI capabilities, scoped Assistance Request Types, Contribution Responses, human review, explicit Project Owner save flows, Context Explanations, Revisions, Provenance, a known AI activity trace and AI-use disclosure settings.

AI Assistance Governance applies to AI assistance known to the workbench. It cannot reliably prevent or prove undisclosed external AI use by a human collaborator. AI-use disclosure is off by default and, when enabled by the project owner, may be directed to the workbench, handoff or both.

## AI Activity Trace

An AI Activity Trace is the project-owner-inspectable record of known in-workbench AI assistance and voluntary external-AI disclosures.

It may record the request, scope, response, Context Explanation, status and an explicit resulting Provenance or Revision link. When an AI Contribution Response has an explicit Response Source Link, the owner may reach that existing Revision-history link from the trace; the trace does not infer, count or represent an absent link. Response Source Links are not collaborator disclosure or handoff metadata. The trace records known participation and responses, not a reliable attribution of every final word after human editing or a proof that external AI was not used.

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

For the Data or Domain Model, a changed or archived Domain Rule makes enforcing Functional Requirements and directly validating Acceptance Criteria Stale. A changed or archived Functional Requirement instead creates a coverage/readiness warning on the Domain Rule. A changed or archived Domain Concept makes its governing Domain Rules Stale and gives connected Domain Relationships a review cue; Domain Relationships are not Product Artifacts and therefore do not receive lifecycle states. A changed or removed Domain Relationship makes its governing Domain Rules Stale.

AI assistance may help users understand or resolve Stale artifacts after propagation, but AI is not required to identify the initial impact set.

## Artifact Lifecycle

An Artifact Lifecycle identifies whether canonical Product Knowledge is currently active, potentially out of date because of a known upstream impact, or intentionally retained as inactive history.

The MVP lifecycle states are **Active**, **Stale** and **Archived**. Active is the ordinary state and normally needs no persistent status label. Stale identifies a recorded upstream impact and should expose its causal explanation. Archived is excluded from active work while remaining historical evidence.

An edit-in-progress draft is private working input rather than an Artifact Lifecycle state. A Revision records creation and updates. Review results, validation confirmations, coverage/readiness warnings and blockers are evidence or attention signals rather than lifecycle states. A Project Owner may later hard-delete an Archived Artifact through a separate retention operation; deletion is not a soft status and its relationship and retention mechanics remain deferred.

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

Capabilities help a Project Owner understand how well a candidate may fit a Collaboration Request's Assistance Request Type, scope and, when applicable, Review Lens. They are advisory selection guidance rather than an automatic routing rule, capability-only queue or claim that one contributor is objectively best.

---

## Candidate Context

Candidate Context is the set of potentially relevant product knowledge gathered before filtering for a specific assistance request or contribution.

Candidate Context may include Structural Context, Explicit Context, Inferred Context, Conversations, decisions, risks, assumptions, reviews, provenance and project metadata.

## Composition Root

The Composition Root is the runtime entry boundary that validates configuration and connects concrete adapters to Application Ports. It is the only application area allowed to know the selected concrete framework, database driver, identity provider, archive/resource implementation, observability implementation and Railway runtime configuration together.

The Composition Root does not contain product policy, and the private terminating migration job is an operational entry point rather than a second product application runtime.

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

Availability is not presence, calendar time, willingness, capacity, workload or response-time tracking. The MVP does not label people as online, busy or free, and does not use availability to rank, assign or redistribute requests.

---

## Content Locale

Content Locale identifies the locale of user-authored specification content and workbench-provided document-facing scaffolding for a Project or Specification.

For the MVP, Product Artifacts inherit the Project or Specification content locale rather than storing artifact-level localization fields. Document-facing scaffolding includes template section headings, guidance, placeholder examples and fixed wording that forms part of a rendered or exported specification, such as a User Story's localized structural sentence.

Content Locale never automatically translates user-authored content. Workbench controls, navigation, form labels and validation messages remain Interface-Locale text unless they form part of the document itself.

Specification Document Templates are Content-Locale-aware. Their canonical section identifiers, ordering, rules and relationships are language-neutral; locale resources resolve the document-facing titles, guidance, placeholders, fixed block labels and structural wording. Full document authoring offers only Content Locales supported by the selected template, or displays a clear fallback warning when an explicitly supported fallback is used. It must never silently mix default-language and localized document scaffolding.

For the first slice, `contentLocale` is a Project-level well-formed BCP 47 language tag. It defaults from the application's resolved Interface Locale at Project creation, but the Project Owner may choose a different Content Language before saving the Project. Later changes to Interface Locale do not alter the saved Project value.

---

## Collaboration Request

A Collaboration Request is a scoped request for assistance sent to one selected available human or AI recipient.

A Collaboration Request identifies the Request Brief, relevant scope, selected recipient, relevant capability and context needed to respond. Capability may inform selection, but it is not a capability-only queue or a multi-recipient request.

In the MVP, Collaboration Requests support asynchronous and transactional collaboration rather than real-time co-editing. An initial Draft is private to its requestor. After Reopen, the selected human recipient retains a frozen, read-only view of the previously shared request and response evidence; the new Draft Brief and any draft-context changes remain private until resubmission.

Within a Project, requests appear in one role-aware, paginated list: **Requests you created** for the Project Owner and **Requests for you** for a Project Collaborator. A former recipient of a Declined request continues to see their frozen Declined cycle in **Requests for you** if the request is later reopened and reassigned; the new cycle remains private to the Project Owner and replacement recipient. The list is searchable, filterable and sortable; it does not separate requests and their Contribution Responses into different lists or workspaces.

---

## Collaboration Request Recipient

A Collaboration Request Recipient is the person or Personal AI Assistant selected to provide the bounded response to one Collaboration Request. It is a temporary request responsibility, not a Project membership role.

A human recipient must be an accepted Project Collaborator. The Project Owner cannot be the human recipient of their own request. An AI recipient must be the requestor's own enabled, usable Personal AI Assistant.

---

## Recipient Eligibility

Recipient Eligibility describes whether a candidate is structurally permitted to appear in Collaboration Request selection before current availability and capability fit are considered.

For a human, the candidate must be a Project Collaborator rather than the Project Owner. For an AI recipient, the assistant must belong to the requestor and applicable Project settings must permit the requested assistance. Eligibility does not make a candidate selected, available, recommended or responsible.

---

## Collaboration Request Status

Collaboration Request Status describes the lifecycle of a Collaboration Request. The MVP statuses are Draft, Submitted, In Progress, Responded, Declined and Cancelled.

`On Hold` is an additional AI-specific status. It records that an AI-targeted request cannot currently proceed because its assistant's processing was technically interrupted or that owner's AI assistance became unavailable. It is not used for human recipients or as a general delivery-management state. While an AI request is In Progress or On Hold, its owner sees a compact request state rather than streaming or incomplete response text. The assistant owner may explicitly resume or retry only after AI assistance is usable again; otherwise the request remains On Hold or may be cancelled.

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

Context Relevance describes whether a candidate context item should be included for a specific request. It is a request-specific inclusion judgment, not a relevance score, document-proximity rule or instruction to include every related item.

For the MVP, relevance may be represented conceptually as primary, supporting, optional or excluded. Primary context is required for the requested contribution. Supporting context directly explains, constrains, validates or could materially change it. Optional context may add detail but is not needed for a grounded response. Excluded context does not support the stated contribution even when structurally nearby or related.

Only Primary and Supporting context enter ordinary Context Assembly by default. Optional context enters only when the Request Brief explicitly calls for it before submission. A recipient cannot expand a Request Cycle's immutable recorded context after submission; if more material is needed, they return a Question or caveated response and the Project Owner may Reopen and resubmit with revised context. Inferred context may guide further inspection but cannot satisfy missing Primary context or become unlabelled evidence. A Context Explanation identifies included Primary and Supporting context and material exclusions or missing anchors; it need not enumerate every excluded candidate.

---

## Context References

Explicit links that identify which Product Artifacts or knowledge items should be considered when performing a task.

Context References help assemble the right information for review, AI assistance, consistency checks, impact analysis, export generation or document rendering.

Context References are distinct from Provenance: Context References identify what knowledge is needed now, while Provenance explains where knowledge came from.

---

## Context Sufficiency

Context Sufficiency describes whether assembled context supports the specific requested contribution, not a general quality score for the selected scope. The same Product Artifact may be sufficient for one Assistance Request Type, Review Lens or stated focus and partial or insufficient for another.

Context is sufficient when relevant evidence supports all requested checks or the stated feedback focus. It is partial when the selected scope has substantive material for at least one useful bounded contribution but lacks context for some requested dimensions. It is insufficient when no substantive basis exists for even a bounded contribution to that request.

Context Sufficiency is distinct from structural scope compatibility, recipient fit and routing. Partial or insufficient context does not silently change the lens, scope or selected recipient. A partial request proceeds with a visible Context Explanation and caveated, grounded response. An insufficient request may still be explicitly submitted, but should return Questions and an explanation of the missing basis rather than invented Findings, edits, proposals or a positive quality conclusion.

---

## Core Feature

A Core Feature is a user-visible capability or product area.

Core Features describe the major things a product lets users do.

A Core Feature has a required title, concise description and one or more explicit User Need relationships that it `addresses`. It may appear under an optional Feature Group, a section-owned presentation heading rather than a Product Artifact, technical module or relationship type.

A Core Feature may be refined by Functional Requirements and validated by Acceptance Criteria. Its detailed behavior remains in later User Stories, Use Cases, Requirements and Acceptance Criteria.

---

## Contextual Related-Knowledge Creation

Contextual Related-Knowledge Creation is the document-first interaction pattern that lets an author explicitly create missing prerequisite or related Product Knowledge while working at a meaningful local scope.

The new knowledge is created in its canonical Specification Section. The original private draft is preserved, then resumed with the new relationship preselected after the related knowledge is saved. Nothing is inferred, silently created or automatically related. The pattern supports specification tightening without introducing tasks, workflow gates, delivery-management behavior or forced navigation away from the author's current thought.

---

## Contribution

A meaningful action performed by a Contributor.

Examples include comments, questions, answers, reviews, suggestions, proposals, decisions, Product Artifact creation, Product Artifact updates, AI generation and AI analysis.

A Contribution records participation in the product engineering process. It is distinct from a Revision, which records a saved change to product knowledge, and from Provenance, which explains the origin of product knowledge.

---

## Contribution Response

A Contribution Response is a Collaboration Request recipient's submitted input.

A Contribution Response may contain answers, comments, review results, suggested edits, proposed artifacts, proposed decisions or other requested input.

One bounded Contribution Response may contain multiple discrete Contribution Response Items. Each item has one primary Response Shape. A Summary may synthesize the items but does not replace them; a Finding may be accompanied by a separate Suggested Edit or Proposal that addresses it. These item relationships are explanatory only and do not apply a change.

Contribution Responses do not directly alter canonical Product Knowledge. In the MVP, only the Project Owner may manually consider a response, create or revise Product Knowledge in a separate private draft, and explicitly save the resulting canonical record or Revision. A requestor or recipient role does not add that authority.

When the Project Owner saves such a Revision, they may explicitly create one optional Response Source Link to the whole Contribution Response that informed it. This is a narrow navigation and provenance record, not a separate acceptance or authorship workflow.

## Contribution Response Item

A Contribution Response Item is one discrete part of a submitted Contribution Response. Its Response Shape identifies whether it is, for example, a Finding, Question, Suggested Edit or Proposal.

An item has one primary Response Shape. Each Finding Item has exactly one Finding Type to classify its issue or observation. A separate item may propose a response to that Finding, but neither item alters canonical Product Knowledge automatically.

The Project Owner as requestor may explicitly dismiss an individual item as not being pursued. A dismissed item remains visible as retained response evidence, with an optional rationale. Dismissal does not delete or reject the Contribution Response, change canonical Product Knowledge or mark the whole response Acted On. The owner may instead open an ordinary private creation or editing draft from an item and decide whether to save it through the usual reviewed flow.

## Contribution Response Status

Contribution Response Status describes the requestor's handling of an individual Contribution Response.

For the MVP, a response is Submitted when the request recipient sends it. It becomes Acknowledged automatically when the requestor deliberately opens fully rendered response content for the first time: the current response in request detail or a retained response after expanding it. A list row, notification, compact preview or loading state does not acknowledge a response. The requestor may later explicitly mark it Acted On to indicate that they have dealt with its content.

Acknowledged and Acted On are collaboration statuses only. They do not accept, apply, validate or otherwise change Product Knowledge, and Acted On does not require the requestor to link a Revision or record a note. Automatic acknowledgement is a read marker: it does not change Last updated, reorder a request list or create a lifecycle-history event.

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

## Design System Definition

A Design System Definition is the structured, section-owned part of Shared Design Guidance that represents reusable visual-system knowledge for a derived `design.md` handoff companion. It is not a Product Artifact, a visual design editor, or a frontend implementation model.

It records a required Name, optional Description, system-managed `design.md` format/version and intentionally omitted sections; typed token collections for colors, typography, spacing, rounded shapes and components; and ordered human-readable guidance for Overview, Colors, Typography, Layout, Elevation & Depth, Shapes, Components, and Do's and Don'ts. Name and Overview are required to save the Definition. Token values are the normative exported values when present; prose provides their rationale and intended application. A token's identifier is chosen by the author: a raw palette or scale such as `blue-600`, a semantic alias such as `action-primary`, and any other useful convention are all valid. Values may be literals or compatible token references. Optional labels or tags help authors organize their work but do not impose a taxonomy. Each component may contain named variants and token-property values that are literals or token references.

Every token or component/variant name is unique within its collection. References must resolve, be type-compatible with their use, and not create cycles; the Definition does not require semantic naming, a foundation-versus-semantic layering, or any other design-system methodology. A standard section is represented by relevant typed data or prose, or is explicitly listed as intentionally omitted with an optional reason. Components states are named variants, not a separate UI state model. Resource References remain source material, not token data.

Screen / Views, User Flows and UI Requirements remain independent Product Artifacts. They may be represented in a clearly labelled, non-normative Workbench extension to `design.md`, but they are not design-system tokens and do not replace the canonical specification.

## Data or Domain Model

Data or Domain Model is a Specification Section that presents product-domain structure without becoming a database-design surface. It contains fixed **Domain Concepts**, **Domain Relationships** and **Domain Rules** blocks.

The section exposes `Add Domain Concept`, `Add Domain Relationship` and `Add Domain Rule`. Authors may start with any of these; the workbench requires only the prerequisites needed to save the specific item. Contextual creation preserves an original private draft and resumes it with newly saved prerequisite knowledge selected. From a Domain Concept, `Add Domain Relationship` preselects that concept as the source. From a Domain Concept or Domain Relationship, `Add Domain Rule` preselects it in the Rule's **Governs** list.

Domain Concepts and Domain Rules use ordinary edit and archive actions. Domain Relationships are first-class relationship records, so they use explicit edit and remove actions rather than artifact lifecycle actions.

## Decision

A stable conclusion reached after exploration and conversation.

Decision is both:

- a general project concept used to preserve rationale; and
- a possible Product Artifact type when the decision itself is managed as structured product knowledge.

Decisions may update project knowledge and may optionally be formalized through Architecture Decision Records (ADRs) or other decision records.

---

## Domain Concept

A Domain Concept is an independent Product Artifact representing an important real-world or business concept the product must understand. It has a required title and plain-language definition. It may include an optional **Key business attributes** list, whose entries each name and explain a business-meaningful attribute.

A Domain Concept is implementation-independent. Its attribute list does not prescribe database tables, column names, storage technology, physical data types, nullability, indexes or other schema choices. A concept's important states may be expressed in that list until a more structured state model is justified.

Each Domain Concept receives an immutable project-scoped readable reference when created, such as `DC-001`, in addition to its internal artifact identifier. The reference does not change when the Concept is renamed or moved in the document. It is retained after archival and in saved Implementation Handoff snapshots. Domain Concepts may be explicitly related to other Product Artifacts and to Domain Rules.

## Domain Relationship

A Domain Relationship is a structured, first-class Artifact Relationship record connecting two Domain Concepts. It is not a separate Product Artifact.

It has a required source Domain Concept, readable relationship statement and target Domain Concept. It may record cardinality at either end. Cardinality is optional because it should clarify known domain structure, not compel unsupported precision, but the product must support recording it when it is known.

Domain Relationships express product-domain structure, not database tables, foreign keys, join tables or storage implementation. A Domain Rule may explicitly govern one or more Domain Relationships.

## Domain Rule

A Domain Rule is an independent Product Artifact that governs valid domain meaning, state or behavior. It has a required title, kind, canonical rule statement and **Governs** list containing one or more Domain Concepts and/or Domain Relationships. Its required kind is either **Business Rule** or **Invariant**. The Governs list is the document-facing projection of the Rule's required outbound `governs` relationships, not duplicated relationship data.

A Business Rule expresses a product policy governing allowed actions, decisions or state transitions. An Invariant expresses a condition that must always hold for valid domain state. The canonical statement expresses the complete rule, including any conditions or exceptions; no separate exceptions field is introduced initially.

Each Domain Rule receives an immutable project-scoped readable reference when created, such as `DR-001`, in addition to its internal artifact identifier. The reference neither encodes the rule kind nor changes with document placement. It is retained after archival and in saved Implementation Handoff snapshots. A Domain Rule may link to the Functional Requirements and Acceptance Criteria that implement and validate it.

Domain Rules are distinct from Functional Requirements, which specify required system behavior; Non-Functional Requirements, which specify quality expectations; and implementation-level database constraints or schema design.

---

## Dependency Verification Exercise

A Dependency Verification Exercise is a local-only, disposable compatibility check performed before product-code authorization. It tests one candidate Node LTS and exact package set against the selected Astro/React, Better Auth, PostgreSQL/`pg`, SQL-migration and verification-tool boundaries.

It may use a temporary directory, local package installation and disposable Testcontainers PostgreSQL. It adds no repository product code, migrations, routes or Product Knowledge. It does not use Railway, OAuth applications or real staging/production data, and it does not substitute for staging/release evidence.

---

## Deterministic Next-step Guidance

Deterministic Next-step Guidance is an optional, user-invoked derived view that identifies relevant follow-up work from explicit Project State.

It is not a task list, workflow gate, Product Artifact or AI request. The initial guidance rules use the current user's Edit-in-progress Drafts, explicit Open Question blockers, active impact outcomes, Goals with Goal Success Criteria needing review, Goals with no Goal Success Criteria, and empty required selected sections.

---

# E

## Executable Specification

An Executable Specification is an implementation-facing knowledge document that fixes the smallest source layout, public contracts, configuration boundary, dependency-review rules and implementation sequence needed to build an accepted product slice.

It constrains module and adapter responsibilities without becoming product code, a line-by-line design, a generic framework prescription or authorization to implement outside the accepted slice.

## Edit-in-progress Draft

An Edit-in-progress Draft is a persistent, user-owned working copy of a Product Artifact, section-owned prose, or a Goal-owned structured child that has not yet become canonical Product Knowledge.

It is not an Artifact lifecycle state or a Revision. It may be kept, discarded or completed through `Done editing`; only Done editing creates a new Revision and may trigger Artifact Change Impact Propagation. Completing a Goal Success Criterion draft creates a new Revision of its parent Goal, not an independent child Revision.

---

## Explicit Context

Explicit Context is context gathered through manually created, imported or accepted artifact relationships and context references.

Explicit Context represents project-specific knowledge links that contributors have made visible.

---

# F

## Finding Type

A Finding Type describes the kind of issue, observation or result recorded by a Finding Item from a review or check.

Examples include Gap, Inconsistency, Ambiguity, Risk, Blocker, Dependency, Recommendation and Readiness Warning.

Finding Type applies only to a Finding Item. It is not a Response Shape, severity, priority, workflow state, task, recipient assignment or deterministic readiness outcome.

---

## Functional Requirement

A Functional Requirement is a specific behavior, rule or obligation the system must satisfy.

Functional Requirements describe what the system must do in enough detail to support implementation and validation.

Functional Requirements are distinct from Core Features: a Core Feature describes a user-visible capability, while a Functional Requirement describes specific expected system behavior.

Each Functional Requirement is an independent, traceable leaf. It has a required primary Core Feature, concise title and independently testable requirement statement. It may also have additional explicit Core Feature links where the same behavior genuinely supports more than one capability. It may explicitly `enforce` a Domain Rule when it specifies the system behavior that upholds that rule. It may include a flat, optional Conditions and constraints list only when its statements qualify that same behavior. The list deliberately does not classify entries as a Condition or Constraint. A statement that introduces independently changeable or testable behavior, a distinct outcome or a cross-cutting rule belongs in a separate Functional Requirement.

Each Functional Requirement also receives an immutable, project-scoped readable reference when it is created, for example `FR-001`. This reference is distinct from the artifact's internal stable identifier. It is never renumbered or reused, including after archival. Document outline numbers may change as requirements are organized or reordered; they are presentation only and are not requirement references.

---

# G

## Goal

A Goal is a Product Artifact expressing an intended product outcome or target.

A Goal may own zero or more Goal Success Criteria. A Goal without them remains valid canonical Product Knowledge, but lacks explicit evidence of how its outcome will be recognized and may receive optional deterministic next-step guidance. In the `Goals and Success Criteria` section, Goals render in current document order with a derived display ordinal; that ordinal is not the Goal's stable identity. Archiving a Goal removes it and its owned criteria from active document work; restoring it returns that complete set together.

## Goal Success Criterion

A Goal Success Criterion is a Goal-owned structured child that states clear, measurable evidence that its parent Goal has been achieved.

It has one required plain-language measurable statement and may add structured Measure, Target and Timeframe qualifiers. The statement is the canonical meaning; qualifiers clarify it. When the statement and qualifiers conflict, the workbench shows an understandable attention cue and does not silently rewrite either.

Each Goal Success Criterion belongs to exactly one Goal and cannot exist independently. It is not a Product Artifact: it has no independent lifecycle, relationships, provenance, collaboration or Revision history. A Goal may have none, while a Goal Success Criterion cannot exist without its Goal. In reading mode, its parent renders criteria as a derived numbered list; each item remains independently editable and removable. When its parent Goal is archived, the criterion is unavailable from active work and returns only if that Goal is restored.

Goal Success Criteria are distinct from Acceptance Criteria. A Goal Success Criterion measures achievement of a product outcome; an Acceptance Criterion defines observable validation of specified system behavior.

## Guidance Item

A Guidance Item is one optional, deterministic follow-up suggestion in the `What next?` view.

It identifies its Project State basis and lets the user navigate to the relevant scope or open that scope's ordinary contextual action menu. It does not create, assign or apply work automatically.

---

# I

## Implementation Authorization

Implementation Authorization is the Project Owner's explicit permission to add product code for one named accepted slice after its prerequisite documentation and Dependency Verification Record are accepted.

It is scoped to the named slice and does not authorize deferred product capabilities, deployment to Railway, use of real Product Knowledge, or production release. Staging and production remain subject to their separate release-readiness gates.

## Interface Locale

Interface Locale identifies the locale used to present workbench-controlled interface text such as navigation, actions, form labels and validation messages. It is distinct from Content Locale, which identifies the language of user-authored specification content and document-facing template scaffolding.

For the first slice, the application resolves the current Interface Locale at entry from the browser's highest-preference valid locale, with `en` as the fallback. It does not require a saved user preference, interface-language settings or fully localized interface content. The resolved value only provides the initial default for a new Project's Content Language.

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

An Impact Disclosure is a transient, non-modal summary shown after a committed Revision identifies impacted Product Artifacts or Goal-owned structured children needing review.

It is anchored to the edited artifact, is collapsed by default and may expand to a compact navigable list. It complements, but does not replace, the persistent Stale and coverage/readiness cues on affected artifacts and sections. After the owner identifies a saved Goal change as altering its intended outcome, it may instead summarize the Goal Success Criteria that require local review; that local review state is not the Artifact Lifecycle state Stale.

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

# N

## Non-Functional Requirement

A Non-Functional Requirement is an independent Product Artifact that defines a measurable quality, constraint or service characteristic expected of an explicitly selected scope of product behavior.

It has a concise title, quality category, measurable requirement statement, one required primary scope target and optional additional explicit scope targets. The statement is canonical and independently interpretable. It may have optional Measurement context to clarify the measurement event, conditions, baseline, or relevant source or standard; that context does not replace Acceptance Criteria or a test plan. The initial eligible target set is Whole Specification, Core Feature, Functional Requirement, Use Case, Screen / View, User Flow and UI Requirement. The primary target supplies the NFR's main authoring and document context; additional targets prevent duplicating a shared quality expectation. The initial quality categories are Performance, Reliability and availability, Security, Privacy, Accessibility, Compatibility, Usability, Compliance and Other. Selecting Other requires a short custom category label. Non-Functional Requirements are distinct from Functional Requirements, which define the behavior itself, and from a Functional Requirement's local Conditions and constraints, which qualify only that one behavior.

Each Non-Functional Requirement receives an immutable, project-scoped readable reference when it is created, for example `NFR-001`. The reference is distinct from the artifact's internal stable identifier, is never reused or renumbered—including after archival—and does not encode its quality category or current document position.

Its Acceptance Criteria relationships are explicit. Missing coverage does not prevent an NFR's initial save, but remains a visible coverage cue. A shared Acceptance Criterion may validate both Functional and Non-Functional Requirements only when its observable evidence genuinely covers every linked requirement.

---

## Non-Goal

A Non-Goal is a concise, plain-language statement of an intentional boundary: something the current specification does not aim to achieve.

Non-Goals are section-owned list items, not Product Artifacts. They are rendered as an unordered list because their display order has no meaning. Each has a private draft and an explicit section-content Revision boundary, but no independent lifecycle, relationships, provenance, collaboration or inferred impact propagation. Rich-text formatting remains a later document-wide capability decision.

---

# O

## Operation ID

An Operation ID is a caller-generated UUIDv7 stable identifier attached to one explicit write command. The system retains the command outcome so that a retry by the same authenticated user with the same Operation ID returns the original outcome rather than applying an additional canonical change.

An Operation ID is not a Product Artifact, Revision, lifecycle state or ordering mechanism. If a retry presents the same Operation ID with different command content, the system must reject that mismatch rather than treating it as a new operation.

## Open Question

An unresolved question that requires further exploration before becoming stable project knowledge.

Open questions are intentionally tracked until resolved or archived.

## Operational Release Evidence

Operational Release Evidence is the content-free record that a migration release or application release was attempted and verified for a named environment and source revision.

For the first slice, it records only the environment, release type, source revision, relevant migration identifiers, outcome, duration, readiness or smoke-check result, recovery-exercise reference and approved technical error classification. It never records Product Knowledge, user identity, raw request data, credentials or session material.

---

# P

## Product Overview

A Product Overview is the concise, section-owned canonical prose that orients a reader to what is being created, who it serves, the problem or opportunity, and the intended value.

It is not a Product Artifact. It summarizes and orients without duplicating detailed Goals, Scope, Requirements or other Product Knowledge held in their dedicated sections. Template guidance for an empty Product Overview is non-canonical instructional text; saved overview prose is canonical section content with its own draft and Revision boundary.

The Product Overview supports ordinary paragraphs. Rich-text formatting is a later document-wide capability decision, not a section-specific control.

## Problem or Opportunity

Problem or Opportunity is a structured Specification Section that may contain a section-owned **Problem** prose block, an **Opportunity** prose block, or both. At least one block must contain saved content when the section is selected as required.

A Problem describes a current pain, limitation or unmet need. An Opportunity describes the improvement or value that addressing it could unlock. Opportunities do not select a solution; candidate solutions belong in later Product Knowledge such as Core Features.

The blocks are not Product Artifacts. They have no independent lifecycle, relationships, provenance, collaboration or inferred impact propagation. Each supports ordinary paragraphs and uses its own private draft and explicit section-content Revision boundary. Rich-text formatting remains a document-wide capability decision.

## Personal AI Assistant

A Personal AI Assistant is a named, user-owned AI configuration that a human user may invoke through Bring Your Own AI support.

For the MVP, a user may configure multiple Personal AI Assistants and mark one as their default. Each assistant uses a selected provider/model configuration owned by that human user. The assistant's display name defaults to a possessive generic name such as `Alex's assistant`, but its owner may rename it, for example to `Alfred`.

The assistant's provider and model details are available only in its owner's AI settings/configuration. When it contributes, it appears by its display name with a compact assistant cue; its human owner is available through the assistant profile rather than repeated beside every contribution. A Personal AI Assistant is not a separately authenticated User, cannot use another user's credentials, and may make a visible contribution only when its owner explicitly invokes it.

In an AI-targeted Collaboration Request, the owner's explicit `Submit and ask` or `Resume assistant` action is the invocation. The assistant never begins, resumes, declines or cancels the request autonomously. Provider, model, credit, credential and detailed technical-failure information remain private to the owner; ordinary request surfaces may show only that AI assistance is currently unavailable. Incomplete assistant output may be retained privately only for a best-effort resume; it is never shown as partial response text, lifecycle history or canonical Product Knowledge.

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

## Product Engineering Stage

A Product Engineering Stage is a template-defined, ordered orientation category for product engineering work. It helps users understand how specification sections and their contained Product Artifacts primarily contribute to a coherent journey from exploration to implementation handoff.

A stage is not a Project, Product Artifact or Collaboration Request lifecycle state; task, delivery, release or approval status; readiness criterion; or handoff eligibility rule. Stages may be revisited and overlap. They provide optional organization and navigation, not gates, required order of work or automated next actions.

When a Workflow Template uses stages, each Section Catalog entry has one primary stage and may name zero or more contributing stages. Contained Product Artifacts derive the same orientation from their canonical section rather than storing a separate mutable stage field.

---

## Product Knowledge

The complete body of knowledge describing a product.

Product knowledge is composed of interconnected Product Artifacts.

---

## Project Collaborator

A Project Collaborator is a person who has been invited to participate in a Project and has accepted that invitation. This is a durable Project relationship, independent of whether the collaborator currently has a Collaboration Request awaiting a reply.

A Project Collaborator may be selected as the human recipient of a Collaboration Request and may participate in eligible Conversations. A collaborator may prepare and submit non-canonical contributions, but cannot create, edit, save or record a Response Source Link for canonical Product Knowledge in the MVP. A Project Collaborator is not the Project Owner of that same Project.

---

## Project Archive

A Project Archive is a versioned, machine-oriented portable package containing one complete Project's transferable canonical state. It supports backup and restore-as-a-new-Project, a user-directed move between accounts or deployments, and sharing an independent reusable Project starting point.

A Project Archive is distinct from an Implementation Handoff Package. A handoff is a potentially partial representation for implementation consumers and is never an import source. An archive carries structured canonical Project knowledge, its transferable history and managed Resource files, but not Conversations, Conversation Outcome Links, authentication or session data, credentials, live collaborator authority, personal drafts or preferences, operational records, or deployment configuration.

Import always creates a new locally owned Project after validation. It does not overwrite or merge with an existing Project, restore live collaborators, or treat source identifiers as destination identifiers. The importing authenticated user becomes the Project Owner; source identities may remain only as historical attribution without access or authority. Managed Resources are copied into the archive; external Resources remain external links and metadata.

---

## Project Owner

A Project Owner is the user who created a Project. The owner controls the Project's Product Knowledge and decides whether requested or received contributions should be acted upon. In the MVP, the owner alone may create or edit a private Product Knowledge draft, explicitly save a new canonical record or Revision, and optionally record a Response Source Link while saving a Revision. A requestor or recipient relationship never grants these powers; collaborator write delegation is deferred.

Project Owner and Project Collaborator are mutually exclusive roles within one Project. A Project Owner cannot select themself as the human recipient of a Collaboration Request; they may instead work directly or explicitly invoke one of their own eligible Personal AI Assistants.

---

## Project Command

A Project Command is one explicit request to change canonical Project State through the client-facing Project data and command boundary. It carries a caller-generated Operation ID and command-specific input; the server derives identity and authority from the session, validates the untrusted request and returns an authoritative saved result or a safe, typed failure.

For the first slice, Project Commands use same-origin JSON `POST` requests to dedicated Astro endpoints. They do not expose persistence operations, accept browser-supplied ownership, mutate on `GET`, or treat a React Island's local draft as saved state.

---

## Project Preset

A Project Preset is a predefined configuration within a Specification Document Template.

It selects and classifies template sections for a particular project type, size or complexity.

For the MVP, presets may classify sections as Required, Recommended or Optional.

---

## Prototype Review

A Prototype Review is a documented evaluation of an interactive prototype against its declared journey, states and interaction rules.

For the first slice, a solo Prototype Review is performed by the Project Owner before technology selection. It checks interaction and state coherence, recovery, declared layout and UI patterns, keyboard operation, and preliminary screen-reader semantics where those checks are meaningful in the prototype. It records discovered issues and known limits.

A solo Prototype Review is not independent usability research, an accessibility conformance assessment or evidence of how first-time users or assistive-technology users experience a working product. Those remain execution-stage recommendations and implementation-quality concerns.

---

## Provenance

An explanation of where a piece of product knowledge came from.

Provenance may indicate that knowledge was created manually, generated by AI, derived from another Product Artifact, based on a Conversation, imported from a document, updated after review or linked to a decision.

Provenance may also indicate that known AI assistance participated in creating or refining accepted product knowledge.

Provenance is distinct from Contribution and Revision: Contribution records participation, Revision records saved change history and Provenance records origin or derivation.

Provenance records known origin and derivation. It should not imply that the workbench can prove a human contribution was not assisted by an external AI tool.

An optional Response Source Link on a Revision may provide supporting known provenance for a Contribution Response considered in that saved change. It does not create a separate response-to-Provenance mechanism in the MVP.

---

# R

## Repository Engineering Process

The engineering process used to design and develop the Product Engineering Workbench itself.

This process is independent of the workflow templates supported by the Product Engineering Workbench.

---

## Review

A contribution whose objective is to evaluate, improve or validate existing product knowledge.

A review may be performed by either a human or an AI contributor.

Review is a composite Assistance Request Type. Each MVP Review has one explicit Review Lens, and may include multiple Check Types within that lens, such as gap checks, inconsistency checks, ambiguity checks, testability checks, feasibility checks, alignment checks, risk checks and readiness checks. Separate lenses require separate Collaboration Requests.

A Review returns non-canonical, lens-qualified specification-coverage findings for its selected scope. It may conclude that coverage appears adequate for that lens at the current scope, that findings or risks were identified, or that the available context is insufficient. It does not approve Product Knowledge, certify implementation, conformance, security, accessibility or readiness, or change Product Knowledge automatically.

---

## Review Lens

A Review Lens is the one explicit perspective, standard or quality dimension used when performing a Review. It determines the relevant checks, the primary and supporting context, and how the response is qualified.

The initial MVP catalog is Requirements Quality, UX Quality, Accessibility, Security, Testability and Implementation Readiness. These lenses assess specification coverage only:

- Requirements Quality assesses requirement and acceptance-definition clarity, completeness, consistency, traceability and appropriate constraint.
- UX Quality assesses user outcomes, flows, states and interaction guidance.
- Accessibility assesses accessible outcomes, risks and verification needs; it may be standards-informed but never certifies conformance.
- Security assesses security-relevant outcomes, boundaries, assumptions, risks and verification needs; it never certifies security.
- Testability assesses observable behavior, acceptance evidence and verifiable outcomes.
- Implementation Readiness assesses implementation-relevant behavior, constraints, dependencies and gaps; it returns Findings and Summary, never a Readiness Result or deterministic handoff outcome.

Lens compatibility is structural rather than a sufficiency, recipient-fit or routing judgment. A catalog entry declares the artifact roles and section content to which it applies; a compatible scope may still have partial or insufficient context. Requirements Quality applies to requirement- or acceptance-oriented content; UX Quality to experience-oriented content; Accessibility to interaction-oriented content; Security to boundary- or constraint-oriented content; Testability to behavior- or verification-oriented content; and Implementation Readiness to implementation-bearing content. Each lens is available for whole-Specification Review. At selected-content scope, compatibility is inherited from the containing Artifact or Section, while the review remains limited to the fragment and immediately relevant host context.

For example, an active Product Artifact that defines integration behavior is Security-compatible because it establishes a system boundary. Missing external contract, authentication, sensitive-data handling or verification evidence may make that Review partial or insufficient, but does not change its lens compatibility.

An eligible Specification Section with implementation-bearing active content is compatible with the Implementation Readiness Lens. Incomplete dependency, contract or ownership knowledge may limit the Review or become a Finding, but does not turn it into deterministic Implementation Handoff Readiness.

Selected text inside an interaction-oriented Artifact inherits Accessibility compatibility from that host. Its Review assesses the fragment and immediately relevant host context only; it cannot conclude that the containing Artifact, Section or implemented interface conforms to accessibility requirements.

A whole-Specification Testability Review assesses cross-section coverage of documented observable behavior and verification evidence. It may identify known behavior lacking Acceptance Criteria or traceability, but does not execute tests, create test results or certify the implemented product.

An active User Flow is UX Quality-compatible when it defines a user journey, its states or its interaction guidance. The Review may assess the documented flow's clarity, state transitions, feedback, recovery and continuity from available Product Knowledge, but it does not certify usability, accessibility, implementation or readiness.

The requestor must see and confirm the lens before submitting a Review. A contextual entry may preselect a compatible default, but never applies it invisibly. Whole-Specification and Specification Section Reviews require the requestor to choose a lens deliberately.

---

## Requirements Quality Review

A Requirements Quality Review is a Review using the Requirements Quality Lens to assess whether a requirement is clear, complete, consistent, testable and traceable enough for its current product scope.

It assesses the quality of specification knowledge. It does not alter the requirement, decide product behavior or certify implementation conformance.

---

## Requirement Group

A Requirement Group is a section-owned presentation heading in `Functional Requirements`. It has a required title and optional short purpose, and may contain zero or more Functional Requirements. A Functional Requirement may be ungrouped or belong to one Requirement Group.

Requirement Groups are not Product Artifacts, technical modules or relationship types. They have no independent lifecycle, provenance, relationships or stable requirement reference. They provide one level of readable document organization only; nested Requirement Groups are not supported initially.

---

## Readiness

The degree to which a Product Artifact, feature, project area or export is mature enough to support implementation or downstream use.

Readiness may depend on required Product Artifacts, required relationships, resolved open questions, identified risks, testable acceptance criteria, completed reviews and stale knowledge being updated.

`Validate Readiness` is a scoped Assistance Request Type that returns a non-canonical contributor assessment of the selected Product Knowledge. It may assess an active Product Artifact, an eligible Specification Section or the whole Specification, and must identify its local purpose, evidence, context limits, gaps, risks, dependencies and suggested follow-up. It does not certify implementation, delivery workflow or a handoff, and cannot change Product Knowledge automatically.

For deterministic Implementation Handoff Readiness, a selected handoff scope is `Ready`, `Ready with Caveats` or `Not Ready` according to explicit Project State. It runs only through `Prepare Handoff` for the Handoff Profile's eligible scope and direct external dependencies. This outcome is distinct from both a contributor's Readiness Result and the `Prepared` or `Prepared with Caveats` result of a handoff package.

---

## Readiness Fact Check Set

A Readiness Fact Check Set is the automatically derived set of explicit, deterministic Project State facts supplied with a `Validate Readiness` Collaboration Request. It is shared evidence for the request recipient, whether human or AI, rather than a Contribution Response or readiness verdict.

It may check the selected scope's structural eligibility, template-declared content expectations, active or Stale status, explicit relationships and validation coverage, known blockers and direct dependencies. Each check is `Satisfied`, `Attention needed`, `Not applicable` or `Cannot determine`, and identifies its applicable rule and affected Product Knowledge.

The requestor can inspect a non-persistent preview while composing the request. The workbench reruns the set immediately before explicit submission and retains that result as immutable recorded context for the Request Cycle. It does not silently refresh after submission; an explicit Reopen and resubmission creates a new cycle snapshot while preserving earlier evidence. The set does not score, rank, route, block a request, create work, update Product Knowledge or produce an Implementation Handoff Readiness outcome.

---

## Readiness Report

A Readiness Report is an optional standalone `READINESS_REPORT.md` file in an Implementation Handoff Package.

It records the deterministic readiness outcome for the selected scope, its basis, external dependencies and recommended follow-up actions. It is generated only when readiness validation and report inclusion are selected.

---

## Request Brief

A Request Brief is the requestor-authored framing of the specific help, question or desired outcome for a Collaboration Request.

The Assistance Request Type identifies the kind of help sought; the Request Brief identifies what the selected recipient should address within the request's scope. It is required for a submitted request.

After a request has first been submitted, its recipient, Assistance Request Type, scope and recorded context remain read-only. If the requestor reopens a Responded request, only its Request Brief may be revised before resubmission. If the requestor reopens a Declined request, they may also choose an eligible, available human recipient or their own eligible, available Personal AI Assistant. Reopen is unavailable when the next Request Cycle has no valid recipient path: a Responded request requires its fixed recipient to be eligible and available, while a Declined request requires at least one eligible and available human or personal-AI recipient. A Cancelled request cannot be reopened; renewed work requires a new request.

---

## Request Cycle

A Request Cycle is one bounded iteration of a Collaboration Request, beginning when the request is first created or reopened and ending when that iteration is Responded, Declined or Cancelled.

Reopen begins a new Request Cycle while retaining earlier lifecycle and Contribution Response evidence. The selected human recipient keeps a frozen, read-only view of that earlier evidence until resubmission, but cannot see the new Draft Brief or draft-context changes. On a reopened Declined request, a replacement human recipient or Personal AI Assistant sees only the new current cycle; the original recipient retains their frozen Declined cycle in **Requests for you**. Reassignment, resubmission and later activity in the new cycle neither appear in nor reorder that original recipient's list record, whose Last updated value remains their decline. A response from an earlier cycle is not a response to the reopened cycle and is labelled as a Previous response in the request list until the current cycle receives a response. A Cancelled request does not begin another Request Cycle.

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

A Response Shape describes the form of a Contribution Response Item.

Examples include Answer, Comment, Question, Finding, Suggested Edit, Proposed Artifact, Proposed Relationship, Proposed Decision, Readiness Result, Summary and Handoff Material.

A Response Shape does not authorize a direct Product Knowledge change. It guides how the requestor can understand and separately consider that item.

## Response Source Link

A Response Source Link is an optional, explicit navigation and provenance link from one whole Contribution Response to a later Revision that the Project Owner saved after considering it.

It records the retained response and its Request Cycle, the target Revision and Product Knowledge, the human who created the link and the time. It does not copy response content, select or disposition individual response items, or create a separate Provenance record.

A Response Source Link means only that the response informed the owner-saved change. It is retained in the authorized owner's Revision history and may be reached from that owner's Known AI Activity Trace when its source was an AI response. It does not create a separate response trace, collaborator-facing disclosure or Implementation Handoff Package metadata. It does not imply acceptance, agreement, correctness, that every response item was adopted, exact word-level origin, sole causation or exclusive human authorship. The absence of a link does not imply that a response was ignored.

---

## Revision

A saved change to a Product Artifact or other project knowledge item.

Revisions preserve change history by recording what changed, when it changed, who or what changed it and why it changed when that is known.

When the Project Owner explicitly records a Response Source Link at save, the Revision retains that one optional whole-response source. Opening a response or draft, automatic acknowledgement, item dismissal and response-level Acted On handling never create this link.

Revision is distinct from Contribution and Provenance: Contribution records participation, Revision records saved change history and Provenance records origin or derivation.

For an interactive artifact edit, a Revision is created only when the user selects `Done editing`, not while an Edit-in-progress Draft is being written or preserved. A saved within-section Artifact Placement reorder is also a Revision of document composition.

For the selected first slice, a Goal Revision preserves a complete immutable snapshot of the saved Goal and its per-Goal version. As Goal Success Criteria are later introduced, a Goal Revision preserves the Goal and its complete current set of Goal-owned Success Criteria rather than creating independent child Revisions. Creating a Project's fixed empty Specification does not create a Revision because it instantiates system-defined starter composition rather than saving authored Product Knowledge.

---

# S

## Starter Version

A Starter Version is an immutable, ordered definition of the starter-controlled document a new Project receives. It identifies the selected template/preset pair, included section identifiers, their order, and language-neutral semantic label and guidance references used to render that initial structure.

Locale resources resolve those semantic references for the Project Content Locale. Full document authoring must expose only a selected template's supported Content Locales or disclose an explicit fallback; it must not silently render a mixed-language template.

For the first slice, the only starter is `implementation-ready-web-app-specification.standard-web-app` at positive integer version `1`. The server selects the active version and records it on the Project. Existing Projects never auto-upgrade. A later starter change that changes a new Project's materialized document creates the next integer version; translation changes behind unchanged semantic keys do not.

## Schema Migration

A Schema Migration is one ordered, immutable, reviewed change to the canonical PostgreSQL schema or its required database data.

For the first slice, Schema Migrations are committed forward-only SQL files. An applied migration is never edited, reordered or automatically reversed in production; a correction is another forward migration, or a separately exercised database recovery procedure. Schema Migrations include the tables used by the application and Better Auth.

## Database Roles

Database Roles are PostgreSQL identities and grants that enforce which database operations a process may perform. They are distinct from schemas, which organize database objects but do not alone provide a security boundary.

For the first slice, the runtime role may use the `app`, `auth` and `ops` schemas and perform only required data operations. It has no update or delete grant on canonical Project, Specification, Goal, Goal Revision or command-operation records. The separate migration role owns those schemas and the `migration` schema, and performs schema changes. The application process never receives the migration role's credential.

## Scope

Scope is a structured Specification Section that states the product boundary of the current specification through fixed, section-owned **In Scope** and **Out of Scope** blocks.

In Scope identifies the high-level product areas and bounded capabilities the specification covers. Out of Scope identifies specific nearby capabilities, modes, integrations, data boundaries or operational boundaries it intentionally excludes. It may refer to an existing Non-Goal rather than duplicate it; Non-Goals remain the broader strategic layer.

The blocks are not Product Artifacts and have no independent lifecycle, relationships, provenance, collaboration or inferred impact propagation. In Scope requires saved content when the Scope section is required; Out of Scope is optional. Each block supports short paragraphs, unordered lists and ordered lists only when order is meaningful. This constrained block vocabulary is specific to Scope and does not introduce a general rich-text editor, nested lists or arbitrary headings.

## Section Catalog

A Section Catalog is the reusable collection of specification sections that can be composed into Specification Document Templates and Project Presets.

The Section Catalog allows multiple templates or presets to reuse common sections without duplicating their definitions.

When its Workflow Template defines Product Engineering Stages, a Section Catalog entry declares one primary stage and may declare contributing stages as template metadata.

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

Screen / View artifacts provide stable interface boundaries for related User Flows, UI Requirements, visual Resource References and implementation handoff. They describe product-facing interface context, not implementation routes, component trees, wireframes or frontend page architecture.

Each Screen / View has a required Title and Purpose. It may record Key content and actions, Key states, relevant User Profile context and visual Resource References. Detailed interaction, visual, responsive and accessibility obligations remain UI Requirements; journeys across views remain User Flows.

Each Screen / View receives an immutable project-scoped readable reference when created, such as `SV-001`, in addition to its internal artifact identifier. The reference remains unchanged by title edits, document reordering, relationship changes or archival, and is retained in saved Implementation Handoff snapshots.

A Screen / View may `support` a Core Feature and `depend_on` a Functional Requirement. A User Flow may `include` it; this is distinct from `part_of` because a Screen / View may appear in more than one flow. Acceptance Criteria may directly `validate` a Screen / View.

When a Screen / View changes or is archived, its including User Flows and directly validating Acceptance Criteria become Stale, while its supported Core Features receive coverage/readiness cues. A changed or archived Core Feature or Functional Requirement makes an affected Screen / View Stale. A changed or archived User Flow does not automatically make its included Screen / Views Stale. A changed visual Resource Reference is a revision of its attached Screen / View and follows the same propagation.

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

A UI Requirement is an independent Product Artifact describing one specific, observable interface obligation: interaction behavior, visible feedback, state transition, responsive behavior or accessibility expectation.

It applies to a Screen / View or User Flow and may trace to system behavior and Acceptance Criteria. It is distinct from Shared Design Guidance, which is reusable cross-cutting direction; Screen / View, which is an interface context; User Flow, which is a cross-view journey; and Functional Requirement, which is required system behavior. UI Requirements make UX/UI expectations implementation-ready without prescribing CSS, component-library, design-token or frontend implementation choices.

Each UI Requirement has a required Title, one required primary applies-to target selected from Screen / View or User Flow, and a canonical Requirement statement. It may include optional additional applies-to targets, Interaction and state details, Accessibility expectations, Responsive expectations and Resource References. One UI Requirement expresses one independently testable interface obligation; distinct obligations are separate requirements even when they share a target.

Each UI Requirement receives an immutable project-scoped readable reference at creation, such as `UIR-001`, in addition to its internal artifact identifier. The reference does not encode its target, title, implementation route, component, or accessibility standard. It remains stable through edits, target changes and archival, and is retained in saved handoff snapshots and derived `design.md` output.

Each applies-to target is an explicit `applies_to` relationship, with primary or additional target status as relationship metadata; the visible target fields are its document-facing projection. A UI Requirement may `depend_on` a Functional Requirement when its interface obligation relies on required system behavior. Acceptance Criteria may directly `validate` a UI Requirement.

When a UI Requirement changes or is archived, its directly validating Acceptance Criteria become Stale and every Screen / View or User Flow it applies to receives a coverage/readiness cue. A changed or archived applies-to Screen / View or User Flow, or depended-on Functional Requirement, makes the UI Requirement Stale. Primary and additional applies-to targets have identical propagation behavior. A material Resource Reference change attached to a UI Requirement is its Revision and follows the same propagation.

---

## UX/UI Design Requirements and Interaction Notes

UX/UI Design Requirements and Interaction Notes is a Specification Section for the application-specific UX/UI guidance needed for faithful implementation.

It may include Shared Design Guidance, interaction patterns, component usage and states, responsive and accessibility expectations, and references to external design sources. Its Shared Design Guidance includes a bounded, structured Design System Definition for reusable values and rationale, without creating a visual design workspace, separate design-token Product Artifacts or frontend implementation model.

---

## Shared Design Guidance

Shared Design Guidance is structured, section-owned UX/UI knowledge that provides common context for UI Requirements, Screen / Views and User Flows without duplicating their local obligations. Its Design System Definition preserves typed reusable design-system values and ordered prose guidance; Resource References retain supporting design sources such as Figma files, wireframes, prototypes and screenshots.

The Definition has metadata, explicit intentional omissions, typed colors, typography, spacing, rounded-shape and component token collections, and prose guidance in the fixed order Overview, Colors, Typography, Layout, Elevation & Depth, Shapes, Components, and Do's and Don'ts. Color, typography, spacing, rounded-shape and component values are stored as structured values rather than inferred from prose. Responsive and accessibility expectations remain Shared Design Guidance only when cross-cutting, UI Requirements when local and observable, and Non-Functional Requirements when measurable.

It may be rendered as a derived `design.md` handoff companion with machine-readable tokens and human-readable guidance. That file is an implementation-facing representation, not canonical Product Knowledge or a frontend implementation model. Its optional Workbench extension may reference Screen / Views, User Flows and UI Requirements, but those artifacts remain canonical in the Specification.

---

## Use Case

A Use Case is a structured description of an interaction between an actor and the system for one primary Core Feature.

It has a required title, primary actor, goal, trigger, ordered main flow and outcome. Preconditions and alternate flows are optional. A primary actor may be a User Profile or a plainly named external or system actor. A Use Case may optionally link a related User Story, but neither depends on the other.

Use Cases are distinct from User Stories, though both describe user-facing behavior and interaction intent. The flow editor is constrained structural content rather than a general rich-text editor.

---

## User Story

A User Story is a compact, value-oriented Product Artifact for one primary Core Feature and one primary User Profile.

It has required structured **Intent** and **Benefit** fields. Its primary User Profile is selected from the Core Feature's explicitly linked User-Need context. The document renders those fields using the project Content Locale's equivalent of `As a [profile], I want to [intent], so that [benefit]`; the structure is enforced even though the rendered language varies.

User Stories are distinct from Use Cases, though both may appear in the `User Stories and Use Cases` section of a specification. They do not require a separate duplicate title or a general rich-text editor.

---

## User Flow

A User Flow is a Product Artifact describing a sequence of user steps, interactions or screens needed to achieve an outcome.

User Flows describe a user-experience journey across interface contexts: entry, decisions, feedback, recovery and outcome. They explicitly `include` Screen / Views, while retaining flow-specific sequence and context. They are distinct from Use Cases, which model a structured actor-and-system interaction for a Core Feature, and from Screen / Views, which model stable individual interface contexts.

Each User Flow has a required Title, primary User Profile, Entry context, Intended outcome and one or more ordered Journey steps. Each Journey step has a required Action, Surface selected from Screen / Views, and Feedback and continuation; it may name a relevant user-facing state. Intentional exits and Error recovery paths are distinct optional structures so user-initiated cancellation is not confused with system-initiated failure recovery.

Each Journey step creates a required `includes` relationship to its selected Screen / View. A User Flow may `support` one or more Core Features and `depend_on` Functional Requirements; Acceptance Criteria may directly `validate` it. A related User Story or Use Case may use the ordinary `relates_to` relationship when it provides genuine supporting context.

Each User Flow receives an immutable project-scoped readable reference when created, such as `UF-001`, in addition to its internal artifact identifier. The reference remains unchanged by title, step-order, related-view or archival changes, and is retained in saved Implementation Handoff snapshots.

When a User Flow changes or is archived, directly validating Acceptance Criteria become Stale and supported Core Features receive coverage/readiness cues. A changed or archived primary User Profile, included Screen / View, supported Core Feature or depended-on Functional Requirement makes the User Flow Stale. Changing or archiving a User Flow does not automatically make included Screen / Views or depended-on Functional Requirements Stale. `relates_to` links to User Stories or Use Cases do not trigger automatic propagation.

---

## User Profile

A User Profile is a Product Artifact representing either an intended user group or an evidence-informed representative user profile. Its required **Profile kind** is either **Target User** or **Persona**.

A Target User describes a broad group the product intends to serve. A Persona represents a more specific, evidence-informed recurring user type and context. Neither kind requires invented demographic details or a fictional biography.

Each User Profile has a required title and short description. It may include relevant context as flexible labelled facts, plus separate optional lists for goals and motivations, frustrations or pain points, and needs from the product. These lists are fields of the User Profile, not independent artifacts. Needs from the product provide the profile's perspective but do not replace independently traceable User Need artifacts; explicit links may be added later.

As a Product Artifact, a User Profile follows the ordinary draft, Revision, lifecycle, relationship and impact rules. Its relationships are explicit rather than inferred from similarly worded text. Rich-text formatting remains a later document-wide capability decision.

---

## User Need

A User Need is a Product Artifact that records what one or more intended users need to achieve or resolve and the expected beneficial outcome when that need is met.

Each User Need has one or more explicit User Profile links, a required user-centred need statement and a required expected outcome. The need statement is its readable document heading; the model does not require a separate duplicate title. Its profile links must not become empty.

Needs from the product recorded within a User Profile are profile-local context. They may inform a User Need, but do not silently create, update or replace one. User Profile-to-User Need links and any resulting impact behavior are explicit and use the ordinary Product Artifact relationship rules. Rich-text formatting remains a later document-wide capability decision.

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
