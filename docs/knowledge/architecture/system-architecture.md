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

When Product Artifacts are updated or archived, deterministic system logic should use Product Artifacts and Artifact Relationships to identify potentially impacted active artifacts and resolve either Stale status or coverage/readiness warnings.

AI context assembly should use the requested scope, relevant artifacts, relationships, provenance, discussions, reviews and context references.

Artifact Relationships should be first-class records with their own metadata, including source or provenance metadata.

Context Assembly should operate over Project State.

The system should start from the requested scope, expand through structural relationships, explicit Artifact Relationships and Context References, then filter and weight candidate context according to the Assistance Request Type, expected Response Shape, contributor capability and Review Lens.

The architecture should distinguish:

- Structural Context implied by document composition, templates, sections and artifact type expectations;
- Explicit Context from accepted Artifact Relationships and Context References;
- Inferred Context suggested by analysis or AI assistance but not yet accepted as canonical.

The system should be able to assess Context Sufficiency and produce a Context Explanation for the user.

Artifact change impact propagation should run before optional AI assistance.

The deterministic propagation step should follow only semantically eligible relationship paths, with no arbitrary depth limit. It must ignore archived artifacts as active targets or traversal intermediaries, and must not use `relates_to` as an automatic propagation bridge.

For each triggering Revision, the system should prevent cyclic re-propagation, resolve one relationship-specific impact outcome per artifact and retain the causal paths that explain it. When it competes with a coverage/readiness warning, Stale takes precedence; path distance may inform review priority but does not override relationship semantics.

Confirming a Stale artifact as valid clears that artifact's Stale status only. The system may suggest review of artifacts whose recorded impact paths passed through it, but must not automatically clear their states.

AI may then be offered as a contextual action to help users understand or resolve Stale artifacts, but AI should not be required to identify the initial impact set.

This decision does not require a specific database technology.

Storage technology remains intentionally undecided.
