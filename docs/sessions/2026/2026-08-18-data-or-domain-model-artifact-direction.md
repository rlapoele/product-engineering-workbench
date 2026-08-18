# Session — Data or Domain Model Artifact Direction

**Session ID:** 2026-08-18-23

**Date:** 2026-08-18

**Status:** Crystallized

## Context

The `Data or Domain Model` section must provide richer product-domain context for implementation consumers without becoming a database-schema or technical-design surface. A static prose list of concepts would not provide sufficient traceability to related requirements and validation evidence.

## Decision

- A Domain Concept is an independent Product Artifact representing an important real-world or business concept the product must understand.
- A Domain Rule is an independent Product Artifact representing governing domain knowledge. Its required kind is either **Business Rule** or **Invariant**.
- A Business Rule expresses a policy governing allowed actions, decisions or state transitions. An Invariant expresses a condition that must always hold for valid domain state.
- Domain Concepts and Domain Rules may be explicitly related to relevant Functional Requirements and Acceptance Criteria, so implementation behavior and validation can be traced back to domain structure and governing policy.
- The section remains implementation-independent: database schemas, storage technology, physical data types, indexes, migrations and database ownership are outside its scope.

## Deferred Detail

- required and optional fields for Domain Concepts and Domain Rules;
- domain-relationship representation, including meaning, direction and cardinality;
- readable-reference conventions;
- document-first authoring flow, validation and impact-propagation behavior.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/knowledge/ai/ai-orchestration.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
