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