# Glossary

This glossary defines the canonical terminology used throughout the Product Engineering Workbench.

The objective is to ensure that humans and AI contributors share the same understanding of the project's concepts.

Unless explicitly stated otherwise, the definitions contained in this glossary take precedence over common industry interpretations.

---

# A

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

## Contribution

A meaningful action performed by a Contributor.

Examples include comments, questions, answers, reviews, suggestions, proposals, decisions, Product Artifact creation, Product Artifact updates, AI generation and AI analysis.

A Contribution records participation in the product engineering process. It is distinct from a Revision, which records a saved change to product knowledge, and from Provenance, which explains the origin of product knowledge.

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

# I

## Implementation-ready Knowledge

Product knowledge that provides sufficient clarity, completeness and consistency for implementation by either humans or AI implementation agents.

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

## Session

A summary of an exploratory working conversation.

Sessions represent the project's working memory and may produce updates to long-term knowledge.

---

## Specification

A structured description of one or more aspects of a product.

Specifications describe what should be built rather than how implementation work should be organized.

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
