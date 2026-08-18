# Product

This directory contains the **product definition**.

It represents the product knowledge contributing to implementation readiness describing **what the product is**, **why it exists**, **who it serves**, and **how it should behave**.

The Product Engineering Workbench considers these artifacts to be first-class product knowledge rather than implementation or delivery artifacts.

Typical contents include:

- Product Goals
- User Profiles
- User Needs
- Business Rules
- Epics
- Features
- User Stories
- Acceptance Criteria
- Non-Functional Requirements

These artifacts form the foundation from which implementation-ready specifications, AI context, and exports can be produced.

---

## Philosophy

The Product Engineering Workbench stores **atomic product knowledge**.

Rather than maintaining large monolithic specification documents, the workbench models the product as a collection of interconnected artifacts.

This approach:

- improves traceability;
- reduces duplication;
- enables richer relationships between artifacts;
- facilitates knowledge reuse;
- provides better context for both human contributors and AI contributors.

---

## Relationship with Specifications

Traditional documents such as:

- Business Requirements Documents (BRDs)
- Functional Requirements Documents (FRDs/FRSs)
- Product Requirement Documents (PRDs)

are considered **generated representations** over the underlying product knowledge.

The workbench's primary responsibility is to maintain accurate product knowledge.

Formal specification documents may then be generated or exported from that knowledge when required.

---

## Relationship with Product Delivery

The artifacts contained in this directory describe **what should be built**.

They intentionally stop before software delivery activities such as:

- Sprint Planning
- Task Management
- Kanban Boards
- Capacity Planning
- Release Management

These activities belong to **Product Delivery**, which is intentionally outside the primary scope of the Product Engineering Workbench.

---

## Current Structure

As the project evolves, this directory now contains dedicated subdirectories for different categories of product artifacts.

```text
product/

goals/
personas/
user-needs/
business-rules/
epics/
features/
user-stories/
acceptance-criteria/
non-functional-requirements/
```

This structure may evolve as the Product Engineering Workbench itself matures.

## Product Knowledge Graph

Artifacts contained in this directory are expected to reference one another to form a coherent product knowledge graph.

For example:

Vision
↓
Goals
↓
User Needs
↓
Features
↓
User Stories
↓
Acceptance Criteria

This interconnected model enables richer traceability, consistency analysis, documentation generation and AI-assisted reasoning than isolated documents alone.
