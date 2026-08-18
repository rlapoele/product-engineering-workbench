# Session — Domain Relationship Structure

**Session ID:** 2026-08-18-25

**Date:** 2026-08-18

**Status:** Crystallized

## Context

Domain Concepts need explicit, implementation-independent structural connections. The existing Product Knowledge Model already treats Artifact Relationships as first-class records able to carry metadata, so domain structure does not require a third independent artifact type.

## Decision

- A Domain Relationship is a structured, first-class Artifact Relationship record between two Domain Concepts; it is not a separate Product Artifact.
- It has a required source Domain Concept, readable relationship statement and target Domain Concept.
- It may record cardinality at either end.
- Cardinality is optional because it must not compel unsupported precision, but the product must support recording it whenever it is known.
- A Domain Relationship expresses product-domain structure, not database tables, foreign keys, join tables or storage implementation.
- A Domain Rule may explicitly govern one or more Domain Relationships.

## Deferred Detail

- document-first relationship-authoring flow;
- relationship editing, removal and impact-propagation behavior;
- Domain Rule fields, readable references and validation behavior.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
