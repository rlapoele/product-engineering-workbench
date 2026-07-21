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

# 3.1 Project State

Project State is the canonical structured state of a Project.

It should contain both document/specification composition and artifact relationship records.

Conceptually, Project State may include:

- project metadata;
- Specification;
- Specification Sections;
- Product Artifacts;
- Artifact Relationships;
- Contributors;
- Contributions;
- Discussions;
- Reviews;
- Revisions;
- Provenance;
- Context References.

The Product Knowledge Graph is an interpretation of the Product Artifacts and Artifact Relationships inside Project State.

The graph does not need to be stored as a separate canonical graph object or graph database in the MVP.

Specification Sections should organize artifact references and section content rather than exclusively owning artifacts.

This preserves document-first UX while keeping artifact identity and graph reasoning available.

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
- a content locale;
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

The user-facing Specification is the complete project documentation the user works on. Internally, a Specification should be understood as a document-like composition or view over structured Product Artifacts and related product knowledge.

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
- Use Case
- Acceptance Criteria
- Functional Requirement
- Non-Functional Requirement
- Screen / View
- User Flow
- UI Requirement
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
- Use Case
- Acceptance Criteria
- Functional Requirement
- Non-Functional Requirement
- Screen / View
- User Flow
- UI Requirement
- Risk
- Decision
- Assumption
- Open Question

This set is small enough to remain manageable, but broad enough to represent a product from initial intent to implementation-ready specification.

User Story and Use Case are distinct artifact types.

They may appear together in a single `User Stories and Use Cases` document section because both describe user-facing behavior and interaction intent.

Functional Requirement and Non-Functional Requirement should be included in the minimum artifact set because the first Specification Document Template needs to produce implementation-ready specifications.

Assumption should be included because the first Section Catalog includes `Risks, Assumptions and Open Questions`, and assumptions are important context for implementation handoff.

Screen / View, User Flow and UI Requirement should be included because implementation-ready web app specifications need enough UX/UI structure to describe user-facing surfaces, interaction sequences, visual expectations, states, responsive behavior and accessibility expectations.

The MVP should not introduce lower-level design-system artifact types such as Design Token, Color, Typography, UI Component, Wireframe or Prototype.

Users may still record implementation-relevant UX/UI design guidance, such as visual intent, layout, color use, typography, spacing, shapes, elevation, component usage and states, within `UX/UI Design Requirements and Interaction Notes` or through external design-source references. These are section content or structured fields in the MVP, not separate Product Artifacts.

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
- creation timestamp;
- update timestamp;
- creator;
- last updater;
- relationships to other artifacts;
- provenance information;
- review state;
- current revision or revision history.

Artifact `title` is user-authored content. Artifact `type` is system-defined.

Product Artifacts do not need artifact-level localization fields for the MVP. User-authored artifact content should inherit the Project or Specification content locale.

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

A Use Case may include:

- primary actor;
- secondary actors;
- trigger;
- preconditions;
- main flow;
- alternate flows;
- postconditions;
- exceptions.

A Functional Requirement may include:

- related feature;
- required behavior;
- business rule or system obligation;
- acceptance criteria.

A Screen / View may include:

- purpose;
- primary users;
- related features;
- visible content or controls;
- states;
- related flows;
- related requirements.

A User Flow may include:

- entry point;
- steps;
- alternate paths;
- success outcome;
- error or empty states;
- related screens;
- related requirements.

A UI Requirement may include:

- related screen or flow;
- interaction behavior;
- visual expectation;
- state behavior;
- responsive behavior;
- accessibility expectation;
- keyboard and focus behavior;
- assistive-technology expectations for names, roles, states or status changes when relevant;
- accessible error, feedback or notification behavior;
- accessibility verification guidance;
- acceptance criteria.

Project-wide visual design guidance may be held in the containing `UX/UI Design Requirements and Interaction Notes` section rather than repeated in each UI Requirement.

A Risk may include:

- likelihood;
- impact;
- mitigation;
- affected artifacts.

The common structure ensures consistency, while artifact-specific fields allow each artifact type to express its own meaning.

## Artifact fields and artifacts

Structured fields do not automatically become Product Artifacts.

A field should become a Product Artifact only when it needs an independent lifecycle, review state, reuse, relationships, provenance or collaboration.

For the MVP, User Story and Use Case internals should remain structured fields rather than separate artifacts.

## Artifact-specific schemas

The MVP should support artifact-specific schemas, but these schemas should remain lightweight.

User Story and Use Case should be the most structured artifact types because their structure is part of their meaning.

Other artifact types may use a smaller number of optional structured fields plus flexible content.

## Artifact templates

Structured artifacts may be edited or rendered through artifact templates.

An artifact template is a user-facing representation of an artifact schema. It may present structured fields as placeholders or document-like text.

For example, a User Story artifact may be rendered as:

```text
As a [actor], I want to [need], so that [benefit].
```

The template does not replace the artifact schema. It provides a friendly editing or rendering surface over structured artifact data.

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

The artifact exists but has not yet been verified or accepted.

AI-generated artifacts should usually begin as Draft unless explicitly accepted by the user.

## Needs Review

The artifact requires verification before it can be considered reliable.

This may happen after generation, modification, dependency changes or detected inconsistency.

## Validated

The artifact has been verified and accepted as currently accurate.

Validated does not mean permanent.

It means valid for now.

## Stale

The artifact may no longer be accurate because related upstream knowledge changed.

For example, if a Goal changes, related Features or User Stories may become stale.

Stale is the appropriate lifecycle state for downstream artifacts that may be impacted when an upstream artifact is updated or archived.

Stale does not mean the downstream artifact is wrong. It means the artifact requires review because related source knowledge changed.

## Archived

The artifact is no longer active, but is preserved for history and traceability.

---

# 9. Artifact Relationships

Artifacts should not exist in isolation.

Artifact Relationships describe how product knowledge elements depend on, support, refine or explain one another.

Relationships are what allow the workbench to reason across the product knowledge model.

Artifact Relationships should be first-class records.

An Artifact Relationship should be able to carry metadata, including source or provenance metadata.

Possible relationship sources include:

- manually created;
- AI-suggested;
- inferred from document structure;
- imported;
- derived from another artifact or template.

## Example relationships

- A Goal supports a Vision.
- A User Need supports a Goal.
- A Feature addresses a User Need.
- A User Story is part of a Feature.
- Acceptance Criteria validate a User Story.
- A Risk affects a Feature.
- A Decision explains why a direction was chosen.
- An Open Question blocks validation of an artifact.
- Acceptance Criteria may be derived from a Functional Requirement.

## Minimum relationship types

The initial relationship model should include:

- supports
- addresses
- part_of
- validates
- depends_on
- affects
- explains
- blocks
- derived_from
- relates_to

These relationship types should remain understandable to users and useful for product reasoning.

## Relationship type meanings

`supports` means an artifact contributes to or supports another artifact.

Example: a Goal supports a Vision.

`addresses` means an artifact responds to a need, problem or opportunity.

Example: a Feature addresses a User Need.

`part_of` means an artifact is part of a larger artifact or grouping.

Example: a User Story is part of a Feature.

`validates` means an artifact defines validation for another artifact.

Example: Acceptance Criteria validate a Functional Requirement.

`depends_on` means an artifact depends on another artifact being true, available, resolved or decided.

Example: a Feature depends on an integration decision.

`affects` means an artifact may influence, constrain or impact another artifact.

Example: a Risk affects a Feature.

`explains` means an artifact provides rationale for another artifact.

Example: a Decision explains a Technical Constraint.

`blocks` means an artifact prevents another artifact from being validated, completed or implemented.

Example: an Open Question blocks a Feature.

`derived_from` means an artifact was generated, refined or derived from another artifact.

Example: Acceptance Criteria are derived from a Functional Requirement.

`relates_to` is a weak generic relationship used when no stronger relationship type applies.

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

# 10.1 Artifact Change Impact Propagation

When a Product Artifact is updated or archived, the system should deterministically evaluate whether downstream artifacts may have been impacted.

This should be handled through ordinary system logic over the Product Knowledge Graph, not by AI as the primary authority.

The system should:

- record the artifact change as a Revision;
- traverse active, semantically relevant Artifact Relationships from the changed or archived artifact;
- identify downstream artifacts that may depend on, validate, derive from, belong to, or otherwise be affected by the changed artifact;
- resolve either a Stale result or a coverage/readiness warning according to the relationship-specific propagation rules;
- record why each artifact received an impact result, including the triggering artifact, triggering Revision and relevant relationship path when available;
- avoid infinite loops or repeated automatic outcomes when relationships are cyclic or overlapping, while retaining the distinct causal paths that explain an outcome;
- preserve archived artifacts for history and traceability rather than deleting dependency context silently.

Impact propagation is a caution mechanism, not a semantic judgment.

Marking an artifact Stale means:

"Something upstream changed, so this artifact may need review."

It does not mean:

"This artifact is definitely incorrect."

After reviewing a Stale artifact, the user should be able to:

- update it;
- confirm that it remains valid;
- leave it Stale;
- archive it;
- create or update related Product Artifacts;
- create an Open Question when the impact cannot yet be resolved.

AI assistance may be offered as a contextual action on Stale artifacts, such as requesting recommendations for what may need to change.

This should use existing Assistance Request Types and Response Shapes rather than introducing a new top-level Assistance Request Type in the MVP.

For example, the user may request AI recommendations that internally use Analyze Impact, Review, Improve or Suggest Alternatives and return Suggested Edits, Findings, Proposed Relationships, Proposed Artifacts, Questions or Summaries.

## Propagation traversal boundaries

Propagation starts from the triggering Revision and follows relationship-specific rules at each hop. An artifact becoming Stale does not, by itself, create a new generic propagation rule.

The system should allow reachability to govern the propagation scope rather than imposing an arbitrary depth limit. Every traversed relationship must still be semantically eligible for propagation.

`relates_to` is not an eligible propagation relationship. It may remain visible for navigation, human review and AI context assembly, but it must not create an automatic impact result or serve as a bridge to further automatic propagation.

Archived artifacts remain available as historical evidence. Other than the archival event that triggered the evaluation, archived artifacts should be ignored by propagation: they should not receive a new impact result and should not be traversed as active intermediaries.

For a single triggering Revision, the system should resolve one impact result for each active artifact. It should retain each distinct non-cyclic causal path discovered for that result, but it must not re-propagate through an artifact already evaluated for that Revision. This prevents cycles from creating repeated work while preserving the evidence needed to explain an outcome.

When multiple paths reach the same artifact, the system should resolve the applicable relationship-specific outcome once. When the competing outcomes are Stale and a coverage/readiness warning, Stale takes precedence, while the recorded evidence retains every causal path. This rule does not redefine the separate relationship-specific choice between Stale and Needs Review.

Path length may inform review priority or confidence. Direct impacts will usually deserve earlier attention than more distant impacts, but distance must not weaken a result that the relationship semantics require. A multi-hop path composed of strong propagation relationships may still make an artifact Stale.

## First-pass propagation rules

The MVP should distinguish two deterministic outputs:

- Stale propagation, meaning an artifact may no longer be accurate because upstream knowledge changed.
- Coverage or readiness warning, meaning an artifact may now be under-supported, unvalidated, unaddressed or blocked without necessarily being inaccurate.

First-pass relationship propagation rules:

| Relationship | Example | If Source Changes | If Target Changes |
|---|---|---|---|
| `supports` | Goal supports Vision | Maybe mark target Stale when target content aggregates or depends on the support. | Mark source Stale. |
| `addresses` | Feature addresses User Need | Usually create coverage/readiness warning rather than marking target Stale. | Mark source Stale. |
| `part_of` | User Story part_of Feature | Maybe mark parent Stale when parent content aggregates child content. | Mark source Stale. |
| `validates` | Acceptance Criteria validates Requirement | Usually create coverage/readiness warning rather than marking target Stale. | Mark source Stale. |
| `depends_on` | Feature depends_on Integration Decision | Usually no Stale propagation from dependent to dependency. | Mark source Stale. |
| `affects` | Risk affects Feature | Mark target Stale. | Maybe mark source Stale. |
| `explains` | Decision explains Requirement | Mark target Stale. | Maybe mark source Stale. |
| `blocks` | Open Question blocks Feature | Mark target Stale or Needs Review. | Usually no Stale propagation. |
| `derived_from` | Acceptance Criteria derived_from Requirement | Usually no Stale propagation from derived artifact to source. | Mark source Stale. |
| `relates_to` | weak generic link | No automatic Stale propagation. | No automatic Stale propagation. |

The strongest automatic Stale propagation rules are:

- when an artifact changes, mark artifacts that `depend_on` it as Stale;
- when an artifact changes, mark artifacts `derived_from` it as Stale;
- when an artifact changes, mark artifacts that `validate` it as Stale;
- when an artifact changes, mark artifacts that `address` it as Stale;
- when an artifact changes, mark child artifacts that are `part_of` it as Stale;
- when an artifact changes, mark artifacts it `affects` as Stale.

The system should be more conservative for `supports`, `explains` and `blocks` because the correct result may depend on artifact type, relationship direction and whether the changed artifact provides rationale, aggregation or a blocking condition.

The system should not automatically propagate Stale through `relates_to` or use it as a traversal bridge.

When a supporting or validating artifact is archived, the upstream artifact may remain accurate but become less complete or less ready.

For example, if Acceptance Criteria that validate a Requirement are archived, the Requirement may still be accurate but may now need a coverage or readiness warning because it is no longer validated.

## Validated propagation scenarios

The first-pass propagation rules have been validated against these concrete scenarios:

| Scenario | Relationship Pattern | Deterministic Result | Rationale |
|---|---|---|---|
| Goal changes | User Need `supports` Goal; Feature `addresses` User Need; User Story `part_of` Feature; Requirement or Acceptance Criteria linked downstream | Mark User Needs and downstream Features, User Stories, Requirements or Acceptance Criteria Stale where their purpose or content depends on the changed Goal. | A Goal change may alter why downstream work exists or what success means. |
| Requirement changes | Acceptance Criteria `validates` Requirement; UI Requirement, Screen/View, User Flow, implementation guidance or tests depend on or derive from Requirement | Mark validating, derived or dependent downstream artifacts Stale. | Downstream behavior, validation and implementation guidance may no longer match the Requirement. |
| Acceptance Criteria archived | Acceptance Criteria `validates` Requirement | Create coverage/readiness warning on the Requirement rather than automatically marking the Requirement Stale. | The Requirement may still be accurate, but it may no longer be sufficiently validated. |
| User Story changes | User Story `part_of` Feature; Acceptance Criteria, Requirements or UX artifacts validate, depend on or derive from User Story | Mark downstream Acceptance Criteria, Requirements or UX artifacts Stale when their content depends on the changed User Story. Mark the parent Feature Stale only when the Feature content aggregates or depends on that story. | A User Story change may alter behavior and downstream validation, but it does not always change the upstream Feature, User Need or Goal. |
| User Story archived | User Story `part_of` Feature; Feature `addresses` User Need; User Need `supports` Goal | Create coverage/readiness warnings for the parent Feature and possibly upstream User Need or Goal rather than automatically marking them Stale. Mark dependent or derived downstream artifacts Stale or orphaned. | Removing a User Story may weaken behavioral coverage without changing the meaning of the Feature, User Need or Goal. |
| Decision changes | Decision `explains` Requirement or Technical Constraint; other artifacts depend on the decision | Mark explained or dependent artifacts Stale when their rationale, constraint or behavior may have changed. | A changed Decision may invalidate the reasoning behind downstream artifacts. |
| Open Question resolved | Open Question `blocks` Feature, Requirement or validation | Mark blocked artifact Needs Review or Stale depending on whether existing content relied on an assumption now changed by the answer. | Resolution removes a block, but the affected artifact still needs confirmation or update before being considered valid. |

These examples reinforce the distinction between Stale propagation and coverage/readiness warnings.

When the changed artifact alters the meaning, rationale or expected behavior of another artifact, Stale is appropriate.

When the changed or archived artifact removes supporting evidence, validation or coverage without changing the artifact's own meaning, a coverage/readiness warning is usually more accurate.

Child artifact changes or archival may create upstream coverage impact.

For example, modifying or archiving a User Story can affect whether its parent Feature is sufficiently specified and whether upstream User Needs or Goals still have enough behavioral coverage.

This should not automatically mark every upstream artifact Stale.

The system should prefer coverage/readiness warnings for upstream artifacts unless the upstream artifact's own content aggregates, summarizes or depends on the changed child artifact.

## Multi-hop propagation and revalidation

Multi-hop outcomes should be determined by the meaning of each relationship in the path, not by a generic cascade from every artifact already marked Stale.

For example, when a Requirement changes, related Acceptance Criteria may become Stale. If those Acceptance Criteria are part of a User Story, the User Story should ordinarily receive a coverage/readiness warning: its validation coverage may need review, but the User Story itself is not necessarily inaccurate. The User Story should become Stale only when a separate relationship path indicates that its own content depends on, derives from or aggregates the changed knowledge.

When a user reviews a Stale artifact and confirms it is valid, the system should clear Stale only on that reviewed artifact. It must not automatically clear related artifacts or their impact results.

The system may instead suggest that users review or revalidate active artifacts whose recorded impact paths pass through the newly validated artifact. This is a contextual action, not an automatic state transition: validating one artifact does not prove that every related artifact remains valid.

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

## User-facing template terminology

In the user experience, the template selected during project creation should usually be called a Specification Document Template.

Specification Document Template is more concrete for users because it describes what they are choosing: the structure of the specification document they intend to produce.

Workflow Template may remain useful as an internal or conceptual term when discussing sequencing, required artifacts, validation rules, contributor assistance and export behavior.

For the MVP, the product should provide one initial Specification Document Template: `Implementation-Ready Web App Specification`.

This template should be composed from a reusable Section Catalog and support presets such as:

- Simple Web Presence
- Standard Web App
- Complex Product App

Presets should select and classify sections as Required, Recommended or Optional for a given project type or complexity.

Small, medium and complex project choices should initially be modeled as presets within the first template, not as separate templates.

Additional Specification Document Templates may be added later when the structure or purpose of the specification is meaningfully different.

The first Section Catalog includes `User Stories and Use Cases` as one section. This section may contain both User Story and Use Case artifacts.

Core Features and Functional Requirements are distinct:

- a Core Feature is a user-visible capability or product area;
- a Functional Requirement is a specific behavior or obligation the system must satisfy.

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

For the MVP, users should be able to create a project from a Specification Document Template, customize the selected sections and work on the resulting specification as if it were one large coherent document.

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

The project owner should be able to request assistance from contributors based on the capabilities required for the requested action.

For the MVP, human collaboration should be asynchronous and transactional rather than real-time. Contributors should respond to scoped requests instead of directly editing canonical project knowledge.

Contributor availability should be interpreted differently for human and AI contributors.

For human contributors in the MVP, availability is invitation-gated. A human contributor becomes available for project collaboration only after being invited, completing onboarding if needed and accepting the invitation.

For AI Contributors provided by the application in the MVP, availability means that the relevant AI capability is enabled and usable. Built-in AI Contributors do not require the same invitation and acceptance flow as human collaborators.

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

Capabilities can be used to route requests to the right available contributor, whether human or AI.

## Example

Instead of asking:

“Send this to a reviewer.”

The workbench could ask:

“Request a UX Review and Requirements Analysis for this feature.”

Capabilities should support collaboration on different scopes, including a whole specification, a document section, a Product Artifact or selected content.

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

For the MVP, many contributions should originate from Collaboration Requests.

When a Contribution is submitted by an AI Contributor, or when a human contributor discloses that external AI assistance was used, that participation should remain visible in the Contribution record.

Undisclosed external AI use by a human contributor cannot be reliably detected or prevented by the workbench.

A Collaboration Request should include an Assistance Request Type.

An Assistance Request Type describes what kind of help the requestor wants. It is distinct from Capability:

- Assistance Request Type answers: "What kind of help is being requested?"
- Capability answers: "Who or what is qualified to provide that help?"

Initial MVP Assistance Request Types:

- Draft
- Improve
- Request Feedback
- Review
- Find Gaps
- Find Inconsistencies
- Analyze Impact
- Suggest Alternatives
- Validate Readiness
- Ask Question
- Prepare Handoff

The available Assistance Request Types should depend on request scope, artifact type, artifact maturity, contributor availability and eligible capabilities.

Request Feedback and Review should remain distinct.

Request Feedback is open-ended and comment-oriented. It asks a contributor to react, identify concerns, ask clarifying questions and suggest improvements.

Review is structured and criteria-oriented. It asks a contributor to evaluate the target against a specific lens, standard or capability.

Review should be treated as a composite Assistance Request Type.

A Review may include multiple Check Types. A Check Type is a focused evaluative activity, such as:

- Gap Check
- Inconsistency Check
- Ambiguity Check
- Testability Check
- Feasibility Check
- Alignment Check
- Risk Check
- Readiness Check

Some focused Assistance Request Types may correspond directly to Check Types.

For example:

- Find Gaps may run a Gap Check.
- Find Inconsistencies may run an Inconsistency Check.
- Analyze Impact may run an Impact Analysis.
- Validate Readiness may run a Readiness Check.

This allows users to request narrow assistance when they know what they need, while still allowing a broader Review to orchestrate multiple checks.

A Review may also have a Review Lens, such as Requirements Quality, UX Quality, Accessibility, Security, Testability or Implementation Readiness.

A Collaboration Request should identify:

- the requestor;
- the requested contributor or required capability;
- the Assistance Request Type;
- the requested action;
- the scope of the request;
- the context needed to respond;
- the applicable availability or eligibility condition;
- the request status.

A Contribution Response is the contributor's submitted input for a Collaboration Request.

Contribution Responses may include comments, questions, findings, suggested edits, proposed artifacts, proposed relationships, proposed decisions, readiness results, summaries or handoff material.

These are Response Shapes. A Response Shape describes the form of the submitted response and helps determine what the requestor can do with it.

Initial MVP Response Shapes:

| Response Shape | Meaning | Typical Requestor Action |
|---|---|---|
| Comment | General note, observation or reaction. | Resolve, reply, ignore or convert into another action. |
| Question | Clarification requested from the requestor. | Answer, discuss or convert to an Open Question. |
| Finding | Structured issue, observation or result from a review or check. | Accept, dismiss, create a follow-up artifact or request changes. |
| Suggested Edit | Proposed change to existing content. | Accept, reject or modify before accepting. |
| Proposed Artifact | Suggested new Product Artifact. | Accept, reject or edit before accepting. |
| Proposed Relationship | Suggested relationship between Product Artifacts. | Accept, reject or adjust. |
| Proposed Decision | Suggested decision, option or recommendation. | Accept as Decision, reject or discuss further. |
| Readiness Result | Assessment of readiness, blockers, warnings and next actions. | Accept, act on blockers, defer or export with warnings. |
| Summary | Condensed explanation of content, context or results. | Use as reference or insert into project knowledge if accepted. |
| Handoff Material | Generated or refined implementation handoff content. | Accept into the export package, edit or reject. |

Findings may have Finding Types, such as Gap, Inconsistency, Ambiguity, Risk, Blocker, Dependency, Recommendation or Readiness Warning.

Contributors should not directly alter canonical project knowledge through a Collaboration Request. Material changes should be applied only after the project owner or authorized requestor accepts or acts on the response.

When an accepted contribution changes product knowledge, the saved change should be recorded as a Revision.

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
- assisted by AI and accepted by a human;
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

Provenance should record known origin and derivation, not make unverifiable claims.

For example, the workbench can record that accepted content was generated by an in-product AI Contributor, refined from an AI-suggested edit or disclosed by a human contributor as externally AI-assisted.

The workbench cannot reliably prove that manually submitted human content was not assisted by an external AI tool.

AI assistance visibility and governance should therefore be based on known in-product activity, contributor disclosure, review state, acceptance history and project policy.

## Example

A User Story might have provenance such as:

- generated from Feature `FEAT-001`;
- based on User Need `NEED-003`;
- initially drafted by AI Contributor and accepted by project owner;
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

Context Assembly is the process of selecting, filtering, prioritizing and explaining the context provided to a human or AI contributor for a specific request.

Context Assembly should start from the requested scope, then expand through relationships before filtering by user intent.

The requested scope may be:

- selected content;
- a Product Artifact;
- a Specification Section;
- a set of Product Artifacts;
- the entire Specification;
- another explicit project scope.

The system should first collect Candidate Context from multiple sources:

- Structural Context implied by the Specification Document Template, document structure, section composition, artifact type expectations or artifact hierarchy;
- Explicit Context from manually created, imported or accepted Artifact Relationships and Context References;
- Inferred Context suggested by analysis, AI assistance or system inference;
- supporting knowledge such as Decisions, Risks, Assumptions, Open Questions, Reviews, Discussions, Provenance and project metadata.

Candidate Context should then be filtered and weighted according to:

- the Assistance Request Type;
- the requested scope;
- relevant Artifact Relationships;
- the expected Response Shape;
- the contributor capability or Review Lens;
- contributor permissions and availability;
- known context limits.

For the MVP, Context Relevance may be represented conceptually as:

- primary;
- supporting;
- optional;
- excluded.

Primary Context is the context required to make the central judgment for the selected Assistance Request Type and lens.

Supporting Context explains, constrains or validates that judgment.

Optional Context may improve the response but should not dominate the request.

Excluded Context is related knowledge that is not useful for the current request.

The same artifact type may be primary in one request and supporting in another.

For example, Functional Requirements and Acceptance Criteria are primary for an Implementation Handoff Readiness review, while Goals and Target Users may be supporting context. For a Product Strategy review, Goals and Target Users may become primary.

For the MVP, the default lens for Validate Readiness should be Implementation Handoff Readiness.

The system should assess Context Sufficiency before fulfilling the request.

Possible Context Sufficiency states:

- sufficient;
- partial;
- insufficient.

Insufficient context should not always block a request. The system may:

- submit the request normally when context is sufficient;
- submit the request with a visible warning when context is partial;
- ask a clarifying question when context is insufficient;
- suggest creating or linking missing artifacts;
- allow the user to proceed with limited context when appropriate.

The system should provide a Context Explanation that identifies what context was included and why.

For example, a Context Explanation might say that a request used the selected User Story, its parent Feature, related Acceptance Criteria, linked Functional Requirements, unresolved Open Questions and blocking Risks.

Validated example patterns:

| Request | Primary Context | Supporting Context | Typical Response Shapes |
|---|---|---|---|
| Improve selected text | selected text, containing artifact or section | product name, product vision, goals, target users, glossary terms | Suggested Edit, Comment |
| Find Gaps on User Story | User Story, parent Feature, existing Acceptance Criteria | related User Needs, Functional Requirements, Non-Functional Requirements, Screen/View or User Flow | Finding, Proposed Artifact, Question |
| Find Inconsistencies on Feature | Feature, directly related Requirements, Decisions, Acceptance Criteria | Goals, Non-Goals, constraints, related sections, Open Questions, Risks | Finding, Question, Proposed Decision, Suggested Edit |
| Analyze Impact on Requirement | selected Requirement, directly related artifacts, parent Feature, affected Acceptance Criteria, affected Screen/View or User Flow, dependencies and known constraints | Goals, User Needs, Non-Goals, Decisions, Risks, Open Questions, data/domain model, external integrations, implementation guidance, previous Reviews | Summary, Finding, Proposed Relationship, Proposed Artifact, Proposed Decision, Question |
| Validate Readiness on whole Specification | included sections, required artifacts, artifact statuses, Acceptance Criteria, Functional and Non-Functional Requirements, Risks, Open Questions, technical constraints, validation/testing guidance | Goals, Non-Goals, Target Users, Decisions, Assumptions, UX Requirements, data/domain model, implementation guidance, previous Reviews | Readiness Result, Finding, Summary, Proposed Artifact, Question |
| Prepare Handoff | requested export scope, Handoff Profile, active included sections and artifacts, Functional and Non-Functional Requirements, Acceptance Criteria, UX/UI design guidance, Screen/Views, User Flows, technical constraints, external integrations, implementation and validation guidance, artifact statuses, Decisions, Risks, Assumptions, Open Questions, relationship and dependency information, direct active dependencies outside the scope | Vision, Goals, Non-Goals, Target Users, User Needs, data/domain model, prior readiness results and Reviews, relevant Discussions, known Provenance when required by project policy or Handoff Profile | Handoff Material, Summary, Finding, Question, Readiness Result |
| Review UI Requirement with Accessibility Lens | selected UI Requirement; related Screen/View and User Flow; interaction and state behavior; linked Functional Requirements and Acceptance Criteria; applicable UX/UI design guidance; explicit accessibility expectations; declared accessibility target when present | related User Story and User Need; external design references; Decisions, Risks, Assumptions and Open Questions; related UI Requirements; technical constraints; prior UX or accessibility Reviews | Finding, Suggested Edit, Question, Proposed Artifact, Summary |

For Find Gaps, missing related artifacts may be useful output rather than a reason to block the request. For example, missing Acceptance Criteria may make context partial, while also becoming a gap finding.

For Find Inconsistencies, the request needs comparison targets. If no related context is available, the system may still review internal wording, but the Context Explanation should state that no comparable related context was available.

For Analyze Impact on a Requirement, the system should inspect both upstream and downstream context.

Upstream context explains why the Requirement exists. It may include Goals, User Needs, parent Features, Decisions, Assumptions and constraints.

Downstream context identifies what the Requirement affects. It may include Acceptance Criteria, Functional Requirements, Non-Functional Requirements, UI Requirements, Screen/Views, User Flows, Risks, Open Questions, integrations, implementation guidance and validation/testing guidance.

If the Requirement has few or no relationships, impact analysis may still proceed with limited context, but the Context Explanation should make the limitation visible. Missing relationships may be returned as Findings or Proposed Relationships.

For Prepare Handoff, the default Handoff Profile is `Implementation Handoff`. The request should compose the best available package even when context is partial, artifacts are Stale or implementation caveats remain. It should not silently omit these limitations or present the package as more certain than the available product knowledge supports.

The handoff result should present a preparation outcome such as `Prepared` or `Prepared with Caveats`. This is a package-level result, not a new Product Artifact lifecycle state.

Stale active artifacts, Risks, Assumptions, Open Questions, blockers and direct active dependencies outside the requested export scope should be included or referenced as implementation caveats. External dependencies should be clearly labeled as outside the scope rather than being silently treated as exported knowledge.

Prepare Handoff should ask a clarifying question or report insufficient context only when there is no meaningful export scope or too little product definition to prepare a responsible package. Otherwise, it should generate caveated Handoff Material and explain the limits of the assembled context.

Review UI Requirement with Accessibility Lens is an Accessibility Specification Review. It should assess whether the specification defines accessible outcomes, risks and verification needs clearly enough to guide implementation and later evaluation.

The review may use gap, ambiguity, inconsistency, testability and risk checks. It should examine keyboard and focus behavior, semantic and assistive-technology expectations, labels and feedback, error and state handling, non-color cues and contrast where visual values are specified, responsive or reflow behavior, and dynamic-content or media implications when relevant to the selected interaction.

The default Accessibility Lens is standards-informed but must not claim accessibility conformance. When the project declares an accessibility target, such as WCAG 2.2 AA, that target becomes primary review context and findings may identify relevant criteria or missing evidence. Without a declared target, the Context Explanation should state that the review applied general accessibility principles and cannot certify conformance.

The review conclusion should be one of:

- accessibility specification coverage appears sufficient;
- accessibility specification gaps or risks found;
- accessibility cannot yet be assessed from the available specification.

These conclusions describe specification readiness, not the accessibility conformance of an implemented application. Conformance evaluation requires evidence from the actual interface and its complete applicable scope.

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

# 26. Export Representation

The Implementation Handoff Package is an exported representation of Product Knowledge.

The MVP export should preserve stable artifact identifiers in human-readable Markdown files.

Stable IDs should appear in:

- `specification/SPECIFICATION.md`;
- section-level Markdown files;
- `manifest.json`.

The target export model may also include artifact-level files and expanded metadata.

The MVP may defer the `artifacts/` folder and expanded `metadata/` folder as stretch items, but should still generate `manifest.json` as the minimal required metadata file.

The manifest should identify the project, template, preset, included sections, artifact IDs, export timestamp and export format version.

---

# 27. Initial Model Summary

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

# 28. Open Questions

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
