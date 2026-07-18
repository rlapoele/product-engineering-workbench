# System Architecture

This document describes the emerging system architecture of the Product Engineering Workbench.

The architecture remains conceptual during the current knowledge-foundation phase. Technology choices and implementation details are intentionally deferred.

---

# 1. Canonical Project State

The canonical product state should be a structured Project State object.

Project State should contain both:

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

---

# 2. Architectural Implications

The document-first editing experience should read and write through the structured Project State.

The document view should use the specification composition and section ordering.

Graph reasoning should use Product Artifacts and Artifact Relationships.

Export generation should use both the document composition and the underlying artifact records.

AI context assembly should use the requested scope, relevant artifacts, relationships, provenance, discussions, reviews and context references.

Artifact Relationships should be first-class records with their own metadata, including source or provenance metadata.

This decision does not require a specific database technology.

Storage technology remains intentionally undecided.
