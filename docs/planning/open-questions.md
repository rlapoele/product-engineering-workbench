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

**Status:** 🟡 Exploring

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

**Status:** 🟡 Exploring

## Context

The Project Model proposes a small initial set of Product Artifacts so the workbench can represent a product from initial intent to implementation-ready specification without becoming too complex too early. Product Artifact is the canonical term; Artifact may be used as a short form after first use.

## Current Candidate

- Vision
- Goal
- User Need
- Feature
- User Story
- Acceptance Criteria
- Risk
- Decision
- Open Question

## Question

Which artifact types are required for the first coherent version of the workbench?

---

# DATA-002 — What are the required common fields for every artifact?

**Category:** Data Model

**Status:** 🟡 Exploring

## Context

Product Artifacts need enough common structure to support review, traceability, AI assistance, export, provenance and revision history while remaining understandable to human users.

## Question

Which fields must every artifact share to support review, traceability, AI assistance and export?

---

# DATA-003 — Which artifact relationship types are required initially?

**Category:** Data Model

**Status:** 🟡 Exploring

## Context

Artifact Relationships form the Product Knowledge Graph and allow the workbench to reason across product knowledge, including traceability, validation, impact analysis and AI context assembly.

## Current Candidate

- supports
- addresses
- belongs_to
- validates
- depends_on
- affects
- explains
- blocks
- relates_to

## Question

Which relationship types are necessary for the first version of the Product Knowledge Graph?

---

# DATA-004 — What lifecycle states should artifacts support?

**Category:** Data Model

**Status:** 🟡 Exploring

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

---

# UX-001 — Is the document a canonical object or a view over artifacts?

**Category:** User Experience

**Status:** 🟡 Exploring

## Context

The Project Model currently treats the document-first user experience as a view over structured Product Artifacts and Artifact Relationships rather than as the canonical source of truth itself.

## Current Direction

The document should be a view over structured product artifacts, not the canonical source of truth itself.

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

# ARCH-001 — Should the canonical product state be stored as a document graph?

**Category:** Architecture

**Status:** 🟡 Exploring

## Context

The emerging model treats canonical product knowledge as structured artifacts and relationships, while the document-first experience presents that knowledge as an editable document view.

## Question

Should the canonical product state be stored as a document graph, another graph-like structure or a different representation?

---

# PROC-001 — How should conversations crystallize into stable knowledge?

**Category:** Process and Methodology

**Status:** 🟡 Exploring

## Context

Discussions are working memory, but important conclusions should eventually become stable product knowledge such as artifacts, decisions, updates or open questions.

## Question

What rules or signals should help users decide when a discussion should become an artifact, decision, update or open question?
