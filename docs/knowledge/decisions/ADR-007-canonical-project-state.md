# ADR-007 — Canonical Project State

**Status:** Accepted

**Date:** 2026-07-18

---

## Context

The Product Engineering Workbench must support a document-first user experience while preserving structured Product Artifacts, Artifact Relationships, provenance, revisions, collaboration and export behavior.

Earlier decisions established that the user-facing Specification is the complete project documentation, while internally the workbench manages structured product knowledge.

The remaining architecture question was whether canonical product state should be a document tree, a graph, a document graph or another representation.

---

## Origin

Resolved from:

- ARCH-001 — Should the canonical product state be stored as a document graph?

---

## Decision

The canonical product state should be a structured Project State object.

The Project State object should contain both:

- document/specification composition;
- artifact and relationship records.

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

Artifact Relationships should be first-class records with their own metadata, including source or provenance metadata.

---

## Rationale

This decision:

- preserves the document-first user experience;
- keeps Product Artifacts independently identifiable;
- supports graph reasoning through relationships;
- allows one artifact to appear in multiple views or exports later;
- supports implementation handoff export generation;
- supports AI context assembly from structured state;
- avoids premature commitment to a database technology.

Treating the graph as an interpretation of artifact and relationship records gives the workbench graph-like reasoning without requiring a graph database or separate graph storage model in the MVP.

---

## Consequences

The MVP should model canonical state as one structured Project State concept.

The document view should read section order, section content and artifact references from Project State.

Graph reasoning should read Product Artifacts and Artifact Relationships from Project State.

Export generation should use both document composition and artifact records.

AI context assembly should use scope, artifacts, relationships, provenance, discussions, reviews and context references.

Artifact Relationships need metadata sufficient to distinguish manually created, AI-suggested, inferred, imported or derived relationships.

Storage technology remains undecided.

---

## Alternatives Considered

### Document tree

This would align with the user-facing document experience but would underrepresent cross-artifact relationships, graph reasoning and reuse.

### Artifact graph only

This would support traceability and reasoning but would underrepresent the document-first editing experience and section ordering.

### Separate canonical graph object

This would make graph reasoning explicit but would duplicate state unless carefully synchronized.

### Structured Project State object

This was selected because it can contain document composition, artifacts and relationships in one conceptual state model while allowing graph views to be derived.

---

## Related Documents

- `docs/knowledge/architecture/system-architecture.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/planning/open-questions.md`
- `docs/sessions/session-active-work.md`
