# ADR-005 — Product Knowledge Model

**Status:** Accepted

**Date:** 2026-07-15

---

## Context

The Product Engineering Workbench is intended to help users transform ideas into implementation-ready product knowledge.

Early exploration established that the product should not merely manage a folder of documents or a flat list of requirements. It needs a conceptual model that can support structure, traceability, review, collaboration, AI assistance, revision history, provenance and export.

The model needed to remain conceptual rather than becoming a premature database schema or implementation design.

---

## Origin

Resolved from:

- Session — Initial Product Knowledge Model, dated 2026-07-15
- DATA-001 — What is the minimum required artifact set?
- DATA-002 — What are the required common fields for every artifact?
- DATA-003 — Which artifact relationship types are required initially?
- DATA-004 — What lifecycle states should artifacts support?
- UX-001 — Is the document a canonical object or a view over artifacts?
- AI-001 — What context should AI contributors receive for each action?
- ARCH-001 — Should the canonical product state be stored as a document graph?
- PROC-001 — How should conversations crystallize into stable knowledge?

Some originating questions remain open for detailed refinement, but the conceptual model itself has been accepted as the foundation for subsequent UX, AI, architecture and export work.

---

## Decision

The Product Engineering Workbench will treat a Project as a coherent product knowledge system.

A Project contains Product Knowledge.

Product Knowledge is composed of interconnected Product Artifacts.

Product Artifact is the canonical term for structured units of product knowledge. The shortened term Artifact may be used after first use when the meaning is clear.

Product Artifacts are connected by Artifact Relationships, forming a Product Knowledge Graph.

The minimum conceptual model includes:

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

Documents, exports and prompts are generated representations or uses of underlying Product Knowledge. They are not the primary conceptual source of truth.

Decision is both:

- a general project concept used to preserve rationale;
- a possible Product Artifact type when the decision itself is managed as structured product knowledge.

Contribution, Revision and Provenance are distinct concepts:

- Contribution records participation or meaningful action.
- Revision records a saved change to product knowledge.
- Provenance records origin or derivation of product knowledge.

Context and Context References identify the surrounding knowledge needed to understand or act on an artifact, project area or contribution.

Open questions should be tracked in `docs/planning/open-questions.md` rather than duplicated inside stable model documents.

---

## Rationale

This decision:

- establishes product knowledge as the primary asset of the workbench;
- supports traceability from intent to implementation-ready behavior;
- allows documents to be treated as views or exports rather than the whole model;
- supports AI assistance with structured context rather than isolated text;
- preserves rationale through Decisions and Provenance;
- preserves history through Revisions;
- distinguishes participation from saved changes;
- creates a foundation for future readiness checks, impact analysis, export generation and collaboration workflows.

A structured Product Knowledge Model is necessary because the workbench aims to help users think, validate and evolve specifications, not merely write prose.

---

## Consequences

Future UX, AI, data model, architecture and export decisions should align with the Product Knowledge Model.

The workbench should eventually support:

- structured Product Artifacts;
- relationships between artifacts;
- traceability across product knowledge;
- context assembly for AI and human contributors;
- discussions that can crystallize into stable knowledge;
- visible contribution, revision and provenance history;
- document views and exports generated from structured product knowledge.

The model does not yet resolve every detailed data-design question.

The following remain subject to refinement:

- the exact minimum artifact set;
- required common artifact fields;
- initial relationship types;
- artifact lifecycle states;
- canonical storage representation;
- detailed AI context selection rules;
- conversation crystallization workflow.

---

## Alternatives Considered

### Document collection

Treat project knowledge as a collection of documents such as PRDs, BRDs, FRDs and user-story files.

This would be familiar but would make traceability, structured review, AI context assembly and knowledge evolution harder.

### Flat requirement list

Treat project knowledge as a flat set of requirements or user stories.

This would simplify implementation but would underrepresent goals, decisions, risks, provenance, relationships and contextual reasoning.

### Structured product knowledge model

Treat project knowledge as interconnected artifacts, relationships, discussions, decisions, reviews, revisions, provenance and context.

This was selected because it supports the product's knowledge-first philosophy and preserves room for document-first UX, AI assistance, collaboration and implementation handoff exports.

---

## Related Documents

- `docs/knowledge/data-model/project-model.md`
- `docs/glossary/glossary.md`
- `docs/planning/open-questions.md`
- `docs/sessions/2026/2026-07-15-product-knowledge-model.md`
