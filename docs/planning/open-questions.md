# Open Questions

This document tracks important product, architectural, methodological, and design questions that have not yet reached a stable decision.

The objective is not to answer these questions quickly, but to ensure they remain visible until sufficient exploration and evidence allow an informed decision.

When a question is resolved:

1. Its status should be changed to **Resolved**.
2. Its final decision and consequences should be recorded in this document.
3. The appropriate project knowledge documents should be updated.
4. When justified, a separate Architecture Decision Record or decision record may be created.

Decision records may reference the originating open-question identifiers as provenance. Open questions do not need to reference the documents subsequently derived from them.

---

## Status Legend

| Status | Meaning |
|---|---|
| 🟡 Exploring | Active discussion is ongoing. |
| 🟢 Resolved | A stable decision has been reached. |
| 🔵 Deferred | Intentionally postponed. |
| ⚪ Archived | No longer relevant. |

---

## Question Categories

| Prefix | Category |
|---|---|
| DOM | Product Domains and Concepts |
| UX | User Experience |
| AI | Artificial Intelligence |
| DATA | Data Model |
| ARCH | Architecture |
| PROC | Process and Methodology |
| TECH | Technology |
| SEC | Security |
| PERF | Performance |
| COLL | Collaboration |

---

# DOM-001 — Should the workbench explicitly distinguish Product Engineering from Product Delivery?

**Category:** Product Domains and Concepts

**Status:** 🟢 Resolved

## Context

Creating implementation-ready specifications and delivering working software are related but distinct activities.

Many existing tools combine product definition, requirements management, implementation planning, and delivery tracking within the same workspace. This can blur the boundary between defining what should be built and managing how implementation work is executed.

## Alternatives Considered

### Option 1 — Combined domain

Treat Product Engineering and Product Delivery as one integrated domain within the workbench.

This would allow the product to cover product definition, delivery planning, implementation tracking, and release management.

### Option 2 — Separate but connected domains

Explicitly distinguish Product Engineering from Product Delivery.

The workbench would specialize in Product Engineering while producing artifacts that external delivery tools, development teams, and AI implementation agents can consume.

## Decision

The Product Engineering Workbench explicitly distinguishes **Product Engineering** from **Product Delivery**.

The workbench focuses on the **Product Engineering** domain.

Product Delivery is intentionally outside the product's primary scope.

The workbench produces implementation-ready product knowledge that can be consumed by:

- human development teams;
- AI coding, testing, and reviewing agents;
- delivery-management platforms;
- other implementation tools and environments.

## Rationale

Separating the two domains:

- clarifies the purpose and responsibility of the workbench;
- separates knowledge production from implementation execution;
- keeps the product focused on producing implementation-ready specifications;
- avoids competing directly with established delivery platforms;
- reduces unnecessary product and implementation complexity;
- allows the workbench to remain compatible with different delivery methodologies and tools.

## Consequences

The workbench may support artifacts such as:

- Product Vision;
- Goals;
- Personas;
- User Needs;
- Epics;
- Features;
- User Stories;
- Acceptance Criteria;
- Functional and Non-Functional Requirements;
- Architecture;
- Risks;
- Implementation guidance;
- Exportable implementation packages.

The workbench will not initially provide delivery-management capabilities such as:

- Sprint Planning;
- Kanban execution boards;
- Task Assignment;
- Story Points;
- Velocity Tracking;
- Capacity Planning;
- Workload Management;
- Release Execution.

Integration with Product Delivery will instead be supported through structured exports and future integration points.

---

# DOM-002 — Is “Product Engineering” the right name for the knowledge-production domain?

**Category:** Product Domains and Concepts

**Status:** 🟢 Resolved

## Context

The current working name for the domain responsible for transforming ideas into implementation-ready product knowledge is **Product Engineering**.

The term is broad enough to encompass product thinking, requirements, UX, architecture, constraints, quality, and implementation readiness. However, it may also be interpreted as primarily referring to software implementation or to the responsibilities of product-oriented software engineers.

A clearer name may eventually communicate the domain's purpose more precisely.

## Alternatives Considered

### Product Engineering

Advantages:

- reflects a multidisciplinary and implementation-aware activity;
- covers more than UX or visual design;
- aligns with the current working name of the product;
- emphasizes rigor and implementation readiness.

Potential disadvantage:

- may be interpreted as including software implementation and delivery.

### Product Design

Advantages:

- clearly communicates intentional product creation;
- familiar within digital-product organizations.

Potential disadvantage:

- is commonly associated primarily with UX, UI, interaction, and visual design;
- may appear too narrow for requirements, architecture, business analysis, and engineering constraints.

### Product Definition

Advantages:

- emphasizes defining what should be built;
- clearly precedes implementation.

Potential disadvantage:

- may underrepresent iterative thinking, validation, review, and evolution.

### Product Specification

Advantages:

- directly communicates the production of implementation-ready specifications.

Potential disadvantage:

- may sound document-centric and overly formal;
- may underrepresent discovery, collaboration, and critical thinking.

### Other terminology

The appropriate name may emerge as the product vision and domain model become more mature.

## Current Thinking

**Product Engineering** remains the strongest working term currently available.

It captures the multidisciplinary scope more effectively than Product Design and feels broader than Product Specification.

However, the term should not yet be treated as permanently settled.

## Current Direction

Continue using **Product Engineering** as the working terminology for:

- the product name;
- the product's primary domain;
- repository documentation;
- ongoing discussions.

Revisit the naming decision after the product vision, scope, artifact model, and user experience have matured further.

No final decision has yet been recorded.

---

# DATA-001 — What is the minimum required artifact set?

**Category:** Data Model

**Status:** 🟢 Resolved

## Context

The Project Model proposes a small initial set of Product Artifacts so the workbench can represent a product from initial intent to implementation-ready specification without becoming too complex too early. Product Artifact is the canonical term; Artifact may be used as a short form after first use.

## Current Candidate

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
- Assumption
- Decision
- Open Question

## Current Direction

The initial Section Catalog requires User Story, Use Case, Functional Requirement and Non-Functional Requirement to be represented as Product Artifact types.

User Story and Use Case are distinct artifact types but may appear together in the `User Stories and Use Cases` section.

Assumption is included because the first Section Catalog includes `Risks, Assumptions and Open Questions`, and assumptions provide important implementation handoff context.

Screen / View, User Flow and UI Requirement are included because implementation-ready web app specifications need enough UX/UI structure to describe screens, flows, interactions, visual expectations, states, responsive behavior and accessibility expectations.

## Question

Which artifact types are required for the first coherent version of the workbench?

## Decision

The MVP minimum Product Artifact set is:

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
- Assumption
- Decision
- Open Question

Specification Section is not a Product Artifact type for the MVP. It is a document/container structure within a Specification, used to organize and present Product Artifacts.

## Consequences

The first Section Catalog can be supported without requiring every section to map directly to a Product Artifact type.

Some sections are artifact-heavy. Other sections may be primarily section content or views over related artifacts.

---

# DATA-002 — What are the required common fields for every artifact?

**Category:** Data Model

**Status:** 🟢 Resolved

## Context

Product Artifacts need enough common structure to support review, traceability, AI assistance, export, provenance and revision history while remaining understandable to human users.

## Question

Which fields must every artifact share to support review, traceability, AI assistance and export?

## Decision

Every MVP Product Artifact should include:

- `id`
- `type`
- `title`
- `content`
- `status`
- `createdAt`
- `updatedAt`
- `createdBy`
- `updatedBy`
- `relationships`
- `provenance`
- `reviewState`
- `currentRevision` or `revisionHistory`

Artifact `title` is user-authored content. Artifact `type` is system-defined.

Artifact fields do not need localization fields for the MVP.

User-authored specification content should have one Project or Specification-level `contentLocale`.

Section Catalog and template-controlled text should be localization-ready through keys such as `labelKey`, `descriptionKey` and `guidanceKey`.

## Consequences

Artifacts have enough common structure to support identification, editing, review, traceability, provenance, relationships and export.

Fields such as `priority`, `owner`, `tags`, `comments`, `readinessScore` and artifact-level `contentLocale` are not common MVP fields.

Artifact-specific schemas may define additional fields.

Structured fields do not automatically become Product Artifacts. A field should become a Product Artifact only when it needs independent lifecycle, review, reuse, relationships, provenance or collaboration.

---

# DATA-003 — Which artifact relationship types are required initially?

**Category:** Data Model

**Status:** 🟢 Resolved

## Context

Artifact Relationships form the Product Knowledge Graph and allow the workbench to reason across product knowledge, including traceability, validation, impact analysis and AI context assembly.

## Current Candidate

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

## Question

Which relationship types are necessary for the first version of the Product Knowledge Graph?

## Decision

The MVP relationship types are:

- `supports`
- `addresses`
- `part_of`
- `validates`
- `depends_on`
- `affects`
- `explains`
- `blocks`
- `derived_from`
- `relates_to`

`belongs_to` is not included. `part_of` is preferred because it is clearer for artifact hierarchy and composition.

`derived_from` is included because derivation matters for provenance, AI generation, refinement and implementation handoff traceability.

## Consequences

The relationship set supports traceability, validation, dependency reasoning, impact analysis, rationale, blocking conditions and derivation.

`relates_to` remains available as a weak generic relationship when no stronger relationship type applies.

---

# DATA-004 — What lifecycle states should artifacts support?

**Category:** Data Model

**Status:** 🟢 Resolved

## Context

Artifacts need lifecycle states so users and contributors can understand whether knowledge is draft, ready for review, currently valid, stale or preserved for history.

## Current Candidate

- Draft
- Needs Review
- Validated
- Stale
- Archived

## Question

Which statuses are required initially?

## Decision

The MVP artifact lifecycle states are:

- Draft
- Needs Review
- Validated
- Stale
- Archived

## State Meanings

Draft means the artifact exists but has not yet been verified or accepted.

Needs Review means the artifact requires verification before it can be considered reliable.

Validated means the artifact has been verified and accepted as currently accurate.

Stale means the artifact may no longer be accurate because related upstream knowledge changed.

Archived means the artifact is no longer active but is preserved for history and traceability.

## Consequences

Review does not need to be human-only. Verification may be performed by a human contributor, AI contributor or capability-specific reviewer when that is appropriate.

Rejected is not an MVP artifact lifecycle state. Rejection belongs to contribution responses, suggestions or proposed changes. An artifact that should no longer be active can be archived.

---

# UX-001 — Is the document a canonical object or a view over artifacts?

**Category:** User Experience

**Status:** 🟡 Exploring

## Context

The Project Model currently treats the document-first user experience as a view over structured Product Artifacts and Artifact Relationships rather than as the canonical source of truth itself.

## Current Direction

The document should be a view over structured product artifacts, not the canonical source of truth itself.

For the MVP, users should experience the specification as one coherent document created from a Specification Document Template. The underlying representation may be an artifact tree, graph or another structured model.

## Question

How should the document-first experience behave if the canonical product knowledge is composed of artifacts and relationships?

---

# AI-001 — What context should AI contributors receive for each action?

**Category:** Artificial Intelligence

**Status:** 🟡 Exploring

## Context

The Project Model distinguishes Context from Provenance and expects AI contributors to operate on structured context rather than isolated text whenever possible.

## Question

How should context be selected, limited and explained when AI contributors generate, review or analyze artifacts?

---

# UX-002 — What should the first Specification Document Template contain?

**Category:** User Experience

**Status:** 🟢 Resolved

## Context

The MVP should allow users to create projects from a Specification Document Template. The first target user is an AI-assisted developer who wants to produce specifications that can be implemented by humans, AI-assisted humans or AI implementation environments.

## Current Direction

The MVP should start with one initial Specification Document Template: `Implementation-Ready Web App Specification`.

This template should be backed by a reusable Section Catalog and should support multiple Project Presets rather than separate small, medium and complex templates.

Initial presets:

- Simple Web Presence
- Standard Web App
- Complex Product App

Each preset should classify sections as Required, Recommended or Optional.

Additional Specification Document Templates may be added later when the structure or purpose of the specification is meaningfully different, such as API services, mobile apps, design systems, AI features or migration projects.

## Decision

The MVP will use the following initial Section Catalog:

- Product Overview
- Problem or Opportunity
- Goals and Success Criteria
- Non-Goals
- Target Users or Personas
- User Needs
- Scope
- Core Features
- User Stories and Use Cases
- Acceptance Criteria
- Functional Requirements
- Non-Functional Requirements
- Data or Domain Model
- UX Requirements and Interaction Notes
- Technical Constraints and Preferences
- External Integrations
- AI or Automation Expectations
- Risks, Assumptions and Open Questions
- Implementation Guidance
- Validation and Testing Guidance
- Export and Handoff Instructions

The `User Stories and Use Cases` section will contain items typed as either User Story or Use Case.

The first Project Presets will classify sections as follows:

| Section | Simple Web Presence | Standard Web App | Complex Product App |
|---|---|---|---|
| Product Overview | Required | Required | Required |
| Problem or Opportunity | Recommended | Required | Required |
| Goals and Success Criteria | Required | Required | Required |
| Non-Goals | Recommended | Recommended | Required |
| Target Users or Personas | Required | Required | Required |
| User Needs | Optional | Required | Required |
| Scope | Required | Required | Required |
| Core Features | Required | Required | Required |
| User Stories and Use Cases | Optional | Recommended | Required |
| Acceptance Criteria | Required | Required | Required |
| Functional Requirements | Required | Required | Required |
| Non-Functional Requirements | Optional | Recommended | Required |
| Data or Domain Model | Optional | Required | Required |
| UX Requirements and Interaction Notes | Required | Required | Required |
| Technical Constraints and Preferences | Recommended | Recommended | Required |
| External Integrations | Optional | Optional | Recommended |
| AI or Automation Expectations | Optional | Optional | Recommended |
| Risks, Assumptions and Open Questions | Recommended | Required | Required |
| Implementation Guidance | Recommended | Recommended | Required |
| Validation and Testing Guidance | Required | Required | Required |
| Export and Handoff Instructions | Optional | Recommended | Required |

## Consequences

Core Features and Functional Requirements are distinct specification sections.

A Core Feature describes a user-visible capability or product area.

A Functional Requirement describes a specific behavior or obligation the system must satisfy.

The preset classification is a first pass and may be revised after future specification exercises.

---

# UX-003 — What should the MVP implementation handoff package contain?

**Category:** User Experience

**Status:** 🟢 Resolved

## Context

The MVP should allow users to export specifications, likely as a zip file containing a directory structure and multiple files representing the specification content.

The export should be usable by humans, AI-assisted developers and AI implementation environments.

## Question

What file structure, formats and metadata should the first Implementation Handoff Package contain?

## Decision

The intended target Implementation Handoff Package should be a complete structured export containing human-readable specification files, artifact-level files, metadata and an implementation brief.

Target package structure:

```text
implementation-handoff/
  README.md
  IMPLEMENTATION_BRIEF.md
  manifest.json
  specification/
    SPECIFICATION.md
    01-product-overview.md
    02-problem-or-opportunity.md
    03-goals-and-success-criteria.md
    ...
  artifacts/
    features/
      FEAT-001.md
    functional-requirements/
      FR-001.md
    user-stories/
      US-001.md
    use-cases/
      UC-001.md
    risks/
      RISK-001.md
    decisions/
      DEC-001.md
    open-questions/
      OQ-001.md
  metadata/
    project.json
    artifact-index.json
    relationship-index.json
    export.json
```

The MVP may initially defer the `artifacts/` folder and expanded `metadata/` folder as stretch items.

MVP minimum package:

```text
implementation-handoff/
  README.md
  IMPLEMENTATION_BRIEF.md
  manifest.json
  specification/
    SPECIFICATION.md
    01-product-overview.md
    02-problem-or-opportunity.md
    03-goals-and-success-criteria.md
    ...
```

## Consequences

The MVP should generate:

- a complete combined `specification/SPECIFICATION.md` file;
- one Markdown file per included specification section;
- stable artifact IDs embedded in combined and section Markdown;
- a top-level `IMPLEMENTATION_BRIEF.md`;
- a top-level `manifest.json`.

The MVP should include unresolved open questions and known risks in the export.

Open questions should not block export by default, but the package should clearly indicate when unresolved questions may block or increase the risk of implementation.

---

# UX-004 — What Handoff Profiles should the MVP support?

**Category:** User Experience

**Status:** 🟢 Resolved

## Context

Implementation-ready does not only mean product-complete. It also means context-ready for the intended implementation consumer.

The Implementation Handoff Package may be consumed by humans, AI-assisted developers, AI implementation environments, agencies, clients, QA reviewers or other downstream users.

Different consumers may need different guidance files, summaries, emphasis, metadata and verification instructions.

## Decision

The MVP should support one default Handoff Profile: `Implementation Handoff`.

The default profile should be human-readable and AI-useful. It should serve human developers, AI-assisted developers and AI implementation environments without forcing the MVP to maintain separate profile variants.

A Handoff Profile defines the intended consumer of the package and shapes the generated files, guidance, emphasis and format.

Handoff Profiles are not AI-specific. They should support both human and AI consumers.

The default `Implementation Handoff` profile should generate:

- `README.md`;
- `IMPLEMENTATION_BRIEF.md`;
- `VERIFICATION_CHECKLIST.md`;
- `manifest.json`;
- `specification/SPECIFICATION.md`;
- section-level Markdown files under `specification/`.

`IMPLEMENTATION_BRIEF.md` should include:

- product summary;
- target implementation consumer;
- scope;
- non-goals;
- key features;
- technical constraints;
- known risks and open questions;
- suggested implementation sequence;
- verification guidance;
- references to relevant specification files and artifact IDs.

Specialized profiles should be deferred until after the MVP.

Potential future profiles include:

- Generic Human Developer
- AI-Assisted Developer
- Codex
- Claude Code
- Gemini
- Cursor
- Agency / Client Handoff
- QA / Review Handoff

Future Handoff Profiles may control:

- which files are generated;
- wording and emphasis of `IMPLEMENTATION_BRIEF.md`;
- whether tool-specific guidance files such as `AGENTS.md`, `CLAUDE.md` or `GEMINI.md` are generated;
- how much context is included;
- whether stack-specific guidance is included;
- whether verification checklists are included;
- how prominently unresolved open questions and risks are presented;
- whether artifact-level files or expanded metadata are included.

---

# COLL-001 — How should capability-based collaboration work?

**Category:** Collaboration

**Status:** 🟢 Resolved

## Context

The workbench should support optional collaboration by allowing project owners to request assistance from human or AI contributors based on capabilities.

Assistance may apply to the whole specification, a document section, a Product Artifact or selected content.

## Question

How should project owners request assistance, match contributors by capability and accept or reject resulting contributions?

## Decision

MVP collaboration will be asynchronous and transactional.

Project owners will create scoped Collaboration Requests for contributors. Requests may target the whole specification, a document section, a Product Artifact, selected content or another explicit scope.

Contributors will respond asynchronously by submitting Contribution Responses. Responses may include comments, review results, suggested edits, proposed artifacts or proposed decisions.

Contributors will not directly alter canonical project knowledge through a Collaboration Request. The project owner or authorized requestor will review submitted responses and decide whether to accept, reject, comment on or otherwise act on them.

If an accepted contribution changes product knowledge, the resulting saved change will be recorded as a Revision.

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
- requested capabilities or actions;
- submitted contribution responses;
- contribution response statuses;
- requestor review and acceptance or rejection.

---

# ARCH-001 — Should the canonical product state be stored as a document graph?

**Category:** Architecture

**Status:** 🟢 Resolved

## Context

The emerging model treats canonical product knowledge as structured artifacts and relationships, while the document-first experience presents that knowledge as an editable document view.

## Question

Should the canonical product state be stored as a document graph, another graph-like structure or a different representation?

## Decision

The canonical product state should be a structured Project State object.

The Project State object should contain both:

- document/specification composition;
- artifact and relationship records.

The Product Knowledge Graph is an interpretation of the artifact and relationship records inside the Project State object. It does not need to be stored as a separate canonical graph object or graph database in the MVP.

Specification Sections should organize artifact references and section content rather than exclusively owning artifacts.

Artifact Relationships should be first-class records with their own metadata, including source or provenance metadata.

## Consequences

The MVP can support document-first editing, artifact identity, graph reasoning, export generation and AI context assembly from one structured state model.

Storage technology remains undecided. This decision does not require a relational database, document database or graph database.

---

# PROC-001 — How should conversations crystallize into stable knowledge?

**Category:** Process and Methodology

**Status:** 🟡 Exploring

## Context

Discussions are working memory, but important conclusions should eventually become stable product knowledge such as artifacts, decisions, updates or open questions.

## Question

What rules or signals should help users decide when a discussion should become an artifact, decision, update or open question?
