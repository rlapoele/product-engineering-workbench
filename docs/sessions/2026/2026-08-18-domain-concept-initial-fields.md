# Session — Domain Concept Initial Fields

**Session ID:** 2026-08-18-24

**Date:** 2026-08-18

**Status:** Crystallized

## Context

Domain Concepts are independent Product Artifacts, but their initial authoring model should remain lean and clearly separated from database design.

## Decision

- A Domain Concept has a required title and plain-language definition.
- It may include an optional **Key business attributes** list.
- Each attribute entry names and explains one attribute that is meaningful to the business or product domain.
- Important concept states may be recorded in that list until a more structured state model is justified.
- The list must not prescribe database tables, column names, storage technology, physical data types, nullability, indexes or other schema choices.

## Deferred Detail

- structured state modeling;
- presentation and authoring flow for the attributes list;
- domain-relationship representation;
- Domain Rule fields, relationships, validation and impact behavior.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
