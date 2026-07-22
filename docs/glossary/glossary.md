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

An AI Contributor is an artificial intelligence contributor that can participate in a project by providing capabilities such as generation, review, analysis, summarization or implementation-readiness evaluation.

AI Contributors are contributors. Their contributions should remain visible to users and should not silently replace human judgment.

In the MVP, AI Contributors provided by the application are available by default when their capabilities are enabled.

## AI Implementation Environment

An AI Implementation Environment is an external environment that can consume implementation-ready product knowledge and use AI agents or AI-assisted tooling to implement the specified software product.

AI Implementation Environments are distinct from AI Contributors inside the workbench.

AI Contributors help create, review or refine product knowledge. AI Implementation Environments consume exported product knowledge to support software implementation.

## AI Assistant

An AI Assistant is a general AI support surface available inside the workbench to help users think, navigate, understand terminology, ask questions and decide what to do next.

The AI Assistant is distinct from scoped assistance requests. It may help the user choose or initiate an Assistance Request Type, but it should not silently alter canonical product knowledge.

## AI Assistance Governance

AI Assistance Governance is the set of product rules, settings and records that make AI participation visible, reviewable and controllable inside the workbench.

It may include enabled AI capabilities, scoped Assistance Request Types, Contribution Responses, acceptance workflows, Context Explanations, Revisions, Provenance and export metadata.

AI Assistance Governance applies to AI assistance known to the workbench. It cannot reliably prevent or prove undisclosed external AI use by a human collaborator.

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

Candidate Context may include Structural Context, Explicit Context, Inferred Context, discussions, decisions, risks, assumptions, reviews, provenance and project metadata.

---

## Check Type

A Check Type is a focused evaluative activity that can be run on product knowledge.

Examples include Gap Check, Inconsistency Check, Ambiguity Check, Testability Check, Feasibility Check, Alignment Check, Risk Check and Readiness Check.

A Check Type may be exposed as a focused Assistance Request Type or used internally as part of a broader Review.

---

## Contributor Availability

Contributor Availability describes whether a contributor can receive or respond to a Collaboration Request for a given project, scope and requested capability.

For human contributors in the MVP, availability is invitation-gated: a human contributor becomes available after being invited, onboarded if needed and accepting the invitation.

For AI Contributors provided by the application in the MVP, availability means the relevant AI capability is enabled and usable.

---

## Content Locale

Content Locale identifies the locale of user-authored specification content for a Project or Specification.

For the MVP, Product Artifacts inherit the Project or Specification content locale rather than storing artifact-level localization fields.

---

## Collaboration Request

A Collaboration Request is a scoped request for assistance sent to a human or AI contributor.

A Collaboration Request identifies the requested action, relevant scope, requested contributor or capability and context needed to respond.

In the MVP, Collaboration Requests support asynchronous and transactional collaboration rather than real-time co-editing.

---

## Context

The relevant surrounding knowledge needed to understand or act on a Product Artifact, project area or contribution.

Context may include related Product Artifacts, workflow information, project metadata, discussions, decisions, risks, reviews or other relevant knowledge.

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

A Contribution Response is a contributor's submitted input for a Collaboration Request.

A Contribution Response may contain answers, comments, review results, suggested edits, proposed artifacts, proposed decisions or other requested input.

Contribution Responses do not directly alter canonical Product Knowledge. A project owner or authorized requestor may manually act on a response by updating or creating product knowledge through a separate action, which records the resulting Revision when applicable.

## Contribution Response Status

Contribution Response Status describes the requestor's handling of an individual Contribution Response.

For the MVP, a response is Submitted when the contributor sends it. The requestor may manually mark it Acknowledged to indicate that it has been read, and may later mark it Acted On to indicate that they have dealt with its content.

Acknowledged and Acted On are collaboration statuses only. They do not accept, apply, validate or otherwise change Product Knowledge, and Acted On does not require the requestor to link a Revision or record a note.

---

## Contributor

An entity capable of contributing to a project.

A contributor may be:

- Human
- Artificial Intelligence

Contributors provide capabilities independently of their implementation.

---

## Conversation

An exploratory discussion intended to improve understanding, challenge assumptions or refine product knowledge.

Conversations belong to the project's working memory.

Conversations are transient.

---

# D

## Decision

A stable conclusion reached after exploration and discussion.

Decision is both:

- a general project concept used to preserve rationale; and
- a possible Product Artifact type when the decision itself is managed as structured product knowledge.

Decisions may update project knowledge and may optionally be formalized through Architecture Decision Records (ADRs) or other decision records.

---

## Deterministic Next-step Guidance

Deterministic Next-step Guidance is an optional, user-invoked derived view that identifies relevant follow-up work from explicit Project State.

It is not a task list, workflow gate, Product Artifact or AI request. The initial guidance rules use the current user's Edit-in-progress Drafts, explicit Open Question blockers, active impact outcomes and empty required selected sections.

---

## Discussion

A focused exchange related to a specific artifact, contribution or question.

A discussion may or may not evolve into a decision.

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

---

## Handoff Profile

A Handoff Profile is a configuration that shapes an Implementation Handoff Package for a specific intended consumer.

Handoff Profiles may target humans, AI-assisted developers, AI implementation environments, agencies, clients, QA reviewers or other downstream users.

A Handoff Profile may control generated files, implementation guidance, tool-specific instructions, context depth, verification checklists, metadata and how risks or unresolved open questions are presented.

The MVP default Handoff Profile is `Implementation Handoff`, intended to be human-readable and AI-useful.

---

## Handoff Definition Scope

A Handoff Definition Scope is selected Product Knowledge that the user explicitly designates as knowledge the implementation consumer is being asked to implement.

Each Definition Scope activates the applicable meaningful-product-definition rule of the selected Handoff Profile. Multiple Definition Scopes compose conjunctively.

---

## Handoff Supporting Context

Handoff Supporting Context is related Product Knowledge included to explain, constrain or caveat a Handoff Definition Scope without itself becoming an implementation subject.

Supporting Context does not activate an additional meaningful-product-definition rule. It remains distinct from Direct External Dependencies.

---

## Handoff Preparation Preference

A Handoff Preparation Preference is personal application state remembered per user, Project/Specification and Handoff Profile.

It may include the last selected handoff scope, the Definition Scope or Supporting Context designation of selected knowledge, whether readiness validation runs before preparation and whether the resulting Readiness Report is included in the package. It is not shared Project Knowledge or a project-wide default.

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

The process of transforming exploratory discussions into stable project knowledge.

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

## Project Owner

A Project Owner is the contributor responsible for controlling a project's product knowledge and deciding whether requested or received contributions should be accepted, rejected or acted upon.

---

## Project Preset

A Project Preset is a predefined configuration within a Specification Document Template.

It selects and classifies template sections for a particular project type, size or complexity.

For the MVP, presets may classify sections as Required, Recommended or Optional.

---

## Provenance

An explanation of where a piece of product knowledge came from.

Provenance may indicate that knowledge was created manually, generated by AI, derived from another Product Artifact, based on a discussion, imported from a document, updated after review or linked to a decision.

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

For an interactive artifact edit, a Revision is created only when the user selects `Done editing`, not while an Edit-in-progress Draft is being written or preserved.

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
