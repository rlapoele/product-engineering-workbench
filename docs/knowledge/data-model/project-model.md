# Project Model

This document defines the initial conceptual model for the Product Engineering Workbench.

The objective is not to define a database schema or implementation structure yet.

The objective is to define the minimum product knowledge concepts required to represent, structure, review and evolve a product from an initial idea to implementation-ready product knowledge.

---

# 1. Purpose

The Product Engineering Workbench helps users transform ideas into structured product knowledge.

To support this, the workbench needs a clear model for:

- what product knowledge is;
- how product knowledge is organized;
- how product knowledge artifacts relate to one another;
- how product knowledge is reviewed and validated;
- how product knowledge evolves over time;
- how human and AI contributors participate in the process.

This model provides the conceptual foundation for future UX, data model, AI orchestration and export decisions.

---

# 2. Core Concept

A project is the container for all product knowledge related to a product, feature, initiative or product area.

A project contains a structured body of product knowledge composed of artifacts, relationships, discussions, decisions, reviews and revisions.

The project is not simply a folder of documents.

It is a coherent product knowledge system.

---

# 3. Minimum Product Knowledge Model

The minimum Product Knowledge Model is the smallest set of concepts required to represent product knowledge in a coherent, traceable and reviewable way.

It includes:

- Project
- Product Knowledge
- Product Artifact
- Artifact Relationship
- Product Knowledge Graph
- Workflow Template
- Contributor
- Capability
- Contribution
- Discussion
- Decision
- Review
- Revision
- Provenance
- Context

This model should remain small enough to be understandable, but complete enough to support meaningful product engineering work.

---

# 4. Project

A Project represents a product engineering workspace.

It may describe:

- a complete product;
- a new product idea;
- a major feature;
- an initiative;
- a product area;
- a redesign effort;
- a discovery effort.

A Project contains the product knowledge needed to reason about that scope.

## A Project should include

- a title;
- a description;
- a status;
- a workflow template;
- a body of product knowledge;
- contributors;
- discussions;
- decisions;
- revision history;
- activity history.

## Example

A project could be:

- “Product Engineering Workbench”
- “Customer Onboarding Redesign”
- “AI-Assisted Requirements Generator”
- “Partner Search Experience Redesign”

---

# 5. Product Knowledge

Product Knowledge is the structured understanding of a product.

It describes:

- why the product exists;
- who it serves;
- what problems it addresses;
- what goals it supports;
- what features it provides;
- how those features should behave;
- what constraints or risks must be considered;
- what decisions have been made;
- why those decisions were made.

Product Knowledge is the primary asset managed by the workbench.

Documents, exports and AI prompts are generated representations or uses of this underlying knowledge.

---

# 6. Product Artifact

A Product Artifact is an atomic unit of product knowledge.

Product Artifact is the canonical term. After first use, this document may use Artifact as a short form when the meaning is clear.

Each artifact represents one meaningful piece of the product definition.

Artifacts should be structured enough to support review, traceability, AI assistance and export, but understandable enough to be edited by humans.

## Examples of Product Artifacts

- Vision
- Goal
- Persona
- User Need
- Business Rule
- Epic
- Feature
- User Story
- Acceptance Criteria
- Functional Requirement
- Non-Functional Requirement
- Risk
- Decision, when recorded as structured product knowledge
- Assumption
- Open Question
- Test Scenario

## Minimum Artifact Set

The initial minimum artifact set should probably include:

- Vision
- Goal
- User Need
- Feature
- User Story
- Acceptance Criteria
- Risk
- Decision
- Open Question

This set is small enough to remain manageable, but broad enough to represent a product from initial intent to implementation-ready specification.

---

# 7. Artifact Structure

Every Product Artifact should share a common conceptual structure.

## Common fields

Each artifact should have:

- a stable identifier;
- a type;
- a title;
- a short description or body;
- a status;
- an owner or creator;
- creation metadata;
- update metadata;
- relationships to other artifacts;
- revision history;
- provenance information;
- review state.

## Artifact-specific fields

Some artifacts may require additional fields.

For example:

A Goal may include:

- success indicators;
- priority;
- related vision.

A User Story may include:

- actor;
- need;
- expected value;
- acceptance criteria.

A Risk may include:

- likelihood;
- impact;
- mitigation;
- affected artifacts.

The common structure ensures consistency, while artifact-specific fields allow each artifact type to express its own meaning.

---

# 8. Artifact Status

Artifacts should have lifecycle states.

A minimum lifecycle could include:

- Draft
- Needs Review
- Validated
- Stale
- Archived

## Draft

The artifact exists but has not yet been reviewed or accepted.

AI-generated artifacts should usually begin as Draft unless explicitly accepted by the user.

## Needs Review

The artifact requires human attention.

This may happen after generation, modification, dependency changes or detected inconsistency.

## Validated

The artifact has been reviewed and accepted as currently accurate.

Validated does not mean permanent.

It means valid for now.

## Stale

The artifact may no longer be accurate because related upstream knowledge changed.

For example, if a Goal changes, related Features or User Stories may become stale.

## Archived

The artifact is no longer active, but is preserved for history and traceability.

---

# 9. Artifact Relationships

Artifacts should not exist in isolation.

Artifact Relationships describe how product knowledge elements depend on, support, refine or explain one another.

Relationships are what allow the workbench to reason across the product knowledge model.

## Example relationships

- A Goal supports a Vision.
- A User Need supports a Goal.
- A Feature addresses a User Need.
- A User Story belongs to a Feature.
- Acceptance Criteria validate a User Story.
- A Risk affects a Feature.
- A Decision explains why a direction was chosen.
- An Open Question blocks validation of an artifact.

## Minimum relationship types

The initial relationship model should include:

- supports
- addresses
- belongs_to
- validates
- depends_on
- affects
- explains
- blocks
- relates_to

These relationship types should remain understandable to users and useful for product reasoning.

---

# 10. Product Knowledge Graph

The Product Knowledge Graph is the network formed by product artifacts and their relationships.

It allows the workbench to answer questions such as:

- Why does this feature exist?
- Which goal does this user story support?
- Which user needs are not addressed by any feature?
- Which acceptance criteria validate this user story?
- Which artifacts may be affected if this goal changes?
- Which risks affect this feature?
- Which decisions explain this requirement?

The graph does not need to be visually represented at first.

It is first a conceptual model.

Later, it may support visualizations, impact analysis, traceability views, document generation and AI context assembly.

---

# 11. Workflow Template

A Workflow Template defines how product knowledge is organized for a specific way of working.

It may define:

- stages;
- expected artifact types;
- required artifacts;
- optional artifacts;
- artifact relationships;
- validation rules;
- recommended sequencing;
- AI assistance strategies.

The workbench should support different workflow templates without forcing a single product methodology.

## Example workflow templates

- Product Discovery
- Feature Decomposition
- Full Product Definition
- MVP Planning
- Requirements Refinement

## Important distinction

A Workflow Template does not define the internal development process of this repository.

It defines how users of the workbench structure their product engineering work.

---

# 12. Document View

The document-first user experience should be understood as a view over structured product knowledge.

The canonical product knowledge should be composed of artifacts and relationships.

The document view presents that knowledge as a coherent editable product document.

This means the document is not merely static text.

It is a human-friendly representation of the underlying product knowledge model.

## Implication

Users should feel like they are editing a coherent document, while the system preserves structured artifacts, relationships, statuses, discussions and provenance behind the scenes.

---

# 13. Contributor

A Contributor is any human or AI participant that can contribute to the project.

A contributor may:

- create knowledge;
- edit artifacts;
- review artifacts;
- ask questions;
- answer questions;
- suggest improvements;
- identify inconsistencies;
- propose decisions;
- generate draft content.

Contributors may be human users or AI contributors.

The model should not assume that all contributors are human.

---

# 14. Capability

A Capability describes what a contributor can help with.

Capabilities are more precise than roles.

For example, a contributor may have capabilities such as:

- Product Strategy
- Requirements Analysis
- UX Review
- Accessibility Review
- Architecture Review
- Risk Analysis
- QA Review
- AI Draft Generation
- Consistency Analysis

Capabilities can be used to route requests to the right contributor, whether human or AI.

## Example

Instead of asking:

“Send this to a reviewer.”

The workbench could ask:

“Request a UX Review and Requirements Analysis for this feature.”

---

# 15. Contribution

A Contribution is any meaningful action performed by a contributor.

Examples include:

- comment;
- question;
- answer;
- review;
- suggestion;
- proposal;
- decision;
- artifact creation;
- artifact update;
- AI generation;
- AI analysis.

Contributions should be traceable so that users can understand how product knowledge evolved.

---

# 16. Discussion

A Discussion is a conversation anchored to the project or to a specific artifact.

Discussions support exploration, clarification and collaboration.

A discussion may be attached to:

- the whole project;
- a stage;
- a specific artifact;
- a specific section of an artifact.

Discussions are working memory.

They are useful for thinking, but they should not become the primary long-term source of truth.

Important conclusions from discussions should eventually crystallize into stable product knowledge.

---

# 17. Decision

A Decision records an important choice made during the product engineering process.

Decision is both a general project concept and a possible Product Artifact type.

As a general project concept, a Decision preserves rationale for important choices.

As a Product Artifact, a Decision can be structured, related to other artifacts, reviewed, revised and included in the Product Knowledge Graph.

A decision should explain:

- what was decided;
- why it was decided;
- which alternatives were considered;
- which artifacts are affected;
- who or what contributed to the decision;
- when the decision was made.

Decisions help preserve rationale.

They allow future contributors to understand not only what the product is, but why it became that way.

---

# 18. Review

A Review is an evaluation of one or more artifacts.

A review may be performed by a human contributor or an AI contributor.

A review may check:

- completeness;
- consistency;
- clarity;
- feasibility;
- alignment with goals;
- accessibility;
- testability;
- risk;
- implementation readiness.

Reviews should produce explicit outcomes, such as:

- accepted;
- needs changes;
- has questions;
- blocked;
- suggested improvements.

Reviews should not silently change product knowledge.

They should produce feedback, suggestions or status changes that remain visible to users.

---

# 19. Revision

A Revision represents a saved change to an artifact or project knowledge item.

Revisions allow the workbench to track how knowledge evolves over time.

A revision should capture:

- what changed;
- when it changed;
- who or what changed it;
- why it changed, when known;
- whether the change was manual, AI-assisted or generated.

Revision history supports trust, accountability and recovery.

A Revision is distinct from a Contribution and from Provenance.

A Contribution records that a contributor performed a meaningful action.

A Revision records the saved change produced by an action.

Provenance explains where the resulting knowledge came from or how it was derived.

---

# 20. Provenance

Provenance explains where a piece of product knowledge came from.

It may indicate that an artifact was:

- created manually;
- generated by AI;
- derived from another artifact;
- based on a discussion;
- created from an imported document;
- updated after a review;
- linked to a decision.

Provenance is important because users need to trust the product knowledge they rely on.

Provenance is distinct from Contribution and Revision.

Contribution answers: “Who or what participated?”

Revision answers: “What saved change occurred?”

Provenance answers: “Where did this knowledge come from?”

## Example

A User Story might have provenance such as:

- generated from Feature `FEAT-001`;
- based on User Need `NEED-003`;
- refined by human contributor;
- validated after review.

---

# 21. Context

Context is the relevant surrounding knowledge needed to understand or act on an artifact.

For example, the context for a User Story may include:

- the parent Feature;
- related User Needs;
- related Goals;
- previous Discussions;
- relevant Decisions;
- related Risks;
- existing Acceptance Criteria.

Context is especially important for AI assistance.

AI contributors should not operate on isolated text when structured context is available.

---

# 22. Context References

Context References are explicit links that identify which artifacts or knowledge items should be considered when performing a task.

They help the workbench assemble the right information for:

- AI generation;
- AI review;
- consistency checks;
- impact analysis;
- export generation;
- document rendering.

Context References are not the same as Provenance.

## Difference

Provenance answers:

“Where did this knowledge come from?”

Context answers:

“What knowledge is needed to understand or work on this?”

---

# 23. Readiness

Readiness describes whether a product knowledge area is mature enough to support implementation or downstream use.

Readiness may depend on:

- required artifacts being present;
- required relationships being defined;
- open questions being resolved;
- risks being identified;
- acceptance criteria being testable;
- reviews being completed;
- stale artifacts being updated.

Readiness should be evaluated at different levels:

- artifact readiness;
- feature readiness;
- project readiness;
- export readiness.

---

# 24. Minimum Implementation-Ready Path

A minimum implementation-ready path describes the smallest coherent chain of product knowledge that can justify implementation.

A possible initial path is:

Vision

↓

Goal

↓

User Need

↓

Feature

↓

User Story

↓

Acceptance Criteria

This does not mean every project must always follow this exact path.

It means this chain provides an initial traceable backbone from intent to implementable behavior.

Risks, Decisions and Open Questions can attach to any part of this path.

---

# 25. Relationship to Functional Requirements

Functional requirements should emerge from the Product Knowledge Model.

For example:

If the workbench must allow users to define Features, then the model must define what a Feature is.

If the workbench must show whether a User Story is ready for implementation, then the model must define readiness.

If the workbench must allow AI to generate Acceptance Criteria, then the model must define the context needed for that generation.

If the workbench must show impact when a Goal changes, then the model must define artifact relationships and stale-state propagation.

Functional requirements should therefore be derived from the conceptual model rather than invented independently.

---

# 26. Initial Model Summary

The initial Project Model can be summarized as follows:

A Project contains Product Knowledge.

Product Knowledge is composed of Product Artifacts.

Product Artifact is the canonical term; Artifact may be used as a short form after first use.

Product Artifacts are connected by Artifact Relationships.

Those relationships form a Product Knowledge Graph.

Workflow Templates define which artifacts and relationships are expected for a given way of working.

Contributors, human or AI, create Contributions.

Contributions may produce artifacts, discussions, reviews, decisions or revisions.

Discussions support exploration.

Decisions preserve rationale.

Reviews evaluate quality and readiness.

Revisions preserve history.

Provenance explains where knowledge came from.

Context identifies what knowledge is needed to act intelligently.

---

# 27. Open Questions

Open questions related to the Project Model are tracked in:

- `docs/planning/open-questions.md`

Relevant question categories include:

- DATA — Data Model
- UX — User Experience
- AI — Artificial Intelligence
- PROC — Process and Methodology

---

# 28. Non-Goals for This Document

This document does not define:

- database tables;
- JSON schema;
- API endpoints;
- UI components;
- AI prompts;
- storage strategy;
- authorization rules;
- implementation architecture.

Those should be defined later, once the conceptual model is stable.

---

# 29. Next Steps

After reviewing this document, the next expected steps are:

1. Validate the core vocabulary.
2. Confirm the minimum artifact set.
3. Confirm the minimum relationship types.
4. Confirm the artifact lifecycle states.
5. Add unresolved questions to `open-questions.md`.
6. Use this model to inform `document-first-ui.md`.
7. Use this model to inform future data model and architecture documents.
