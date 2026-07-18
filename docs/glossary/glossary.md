# Glossary

This glossary defines the canonical terminology used throughout the Product Engineering Workbench.

The objective is to ensure that humans and AI contributors share the same understanding of the project's concepts.

Unless explicitly stated otherwise, the definitions contained in this glossary take precedence over common industry interpretations.

---

# A

## AI Contributor

An AI Contributor is an artificial intelligence contributor that can participate in a project by providing capabilities such as generation, review, analysis, summarization or implementation-readiness evaluation.

AI Contributors are contributors. Their contributions should remain visible to users and should not silently replace human judgment.

## AI Implementation Environment

An AI Implementation Environment is an external environment that can consume implementation-ready product knowledge and use AI agents or AI-assisted tooling to implement the specified software product.

AI Implementation Environments are distinct from AI Contributors inside the workbench.

AI Contributors help create, review or refine product knowledge. AI Implementation Environments consume exported product knowledge to support software implementation.

## Artifact Template

An Artifact Template is a user-facing editing or rendering representation of a Product Artifact schema.

Artifact Templates may present structured artifact fields as placeholders, document-like text or form-like controls.

Artifact Templates do not replace artifact schemas. They provide a friendly way to edit or render structured artifact data.

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

## Context References

Explicit links that identify which Product Artifacts or knowledge items should be considered when performing a task.

Context References help assemble the right information for review, AI assistance, consistency checks, impact analysis, export generation or document rendering.

Context References are distinct from Provenance: Context References identify what knowledge is needed now, while Provenance explains where knowledge came from.

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

A Contribution Response may contain comments, review results, suggested edits, proposed artifacts, proposed decisions or other requested input.

Contribution Responses do not directly alter canonical project knowledge unless accepted or acted upon by the project owner or authorized requestor.

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

## Discussion

A focused exchange related to a specific artifact, contribution or question.

A discussion may or may not evolve into a decision.

---

# F

## Functional Requirement

A Functional Requirement is a specific behavior, rule or obligation the system must satisfy.

Functional Requirements describe what the system must do in enough detail to support implementation and validation.

Functional Requirements are distinct from Core Features: a Core Feature describes a user-visible capability, while a Functional Requirement describes specific expected system behavior.

---

# I

## Implementation-ready Knowledge

Product knowledge that provides sufficient clarity, completeness and consistency for implementation by either humans or AI implementation agents.

## Implementation Handoff Package

An Implementation Handoff Package is an exported representation of product knowledge intended to be consumed by humans, AI-assisted developers, AI implementation environments or delivery tools.

It may contain structured files, document sections, implementation guidance, acceptance criteria, risks, open questions and other context required to implement the specified product.

The MVP package should include a combined specification file, section-level Markdown files, an implementation brief and a manifest file. Artifact-level files and expanded metadata may be added as stretch items.

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

Provenance is distinct from Contribution and Revision: Contribution records participation, Revision records saved change history and Provenance records origin or derivation.

---

# R

## Repository Engineering Process

The engineering process used to design and develop the Product Engineering Workbench itself.

This process is independent of the workflow templates supported by the Product Engineering Workbench.

---

## Review

A contribution whose objective is to evaluate, improve or validate existing product knowledge.

A review may be performed by either a human or an AI contributor.

---

## Readiness

The degree to which a Product Artifact, feature, project area or export is mature enough to support implementation or downstream use.

Readiness may depend on required Product Artifacts, required relationships, resolved open questions, identified risks, testable acceptance criteria, completed reviews and stale knowledge being updated.

---

## Revision

A saved change to a Product Artifact or other project knowledge item.

Revisions preserve change history by recording what changed, when it changed, who or what changed it and why it changed when that is known.

Revision is distinct from Contribution and Provenance: Contribution records participation, Revision records saved change history and Provenance records origin or derivation.

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

## Specification Document Template

A Specification Document Template is a user-facing template that defines the expected structure of a product specification document.

It helps users start a project by selecting and optionally customizing the sections they intend to complete.

A Specification Document Template may be backed by an internal Workflow Template that defines artifact types, sequencing, validation rules, AI assistance strategies or export behavior.

---

## Specification Section

A Specification Section is a document/container structure within a Specification.

Specification Sections organize and present Product Artifacts, but they are not Product Artifact types in the MVP.

---

# U

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
