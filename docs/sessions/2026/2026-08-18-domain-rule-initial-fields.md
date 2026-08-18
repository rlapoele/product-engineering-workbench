# Session — Domain Rule Initial Fields

**Session ID:** 2026-08-18-26

**Date:** 2026-08-18

**Status:** Crystallized

## Context

Domain Rules are independent Product Artifacts and need a minimal formal shape that distinguishes governing product-domain knowledge from Functional Requirements, Non-Functional Requirements and database design.

## Decision

- A Domain Rule has a required title, kind, canonical rule statement and **Governs** list.
- Its **Governs** list contains one or more Domain Concepts and/or Domain Relationships.
- Its required kind is **Business Rule** or **Invariant**.
- The canonical statement expresses the complete rule, including any conditions or exceptions.
- No separate exceptions field is introduced initially.

## Deferred Detail

- immutable readable-reference convention;
- relationship mechanics for the Governs list;
- Domain Rule validation, acceptance coverage and impact-propagation behavior;
- document-first authoring flow.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
