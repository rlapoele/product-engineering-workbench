# Session — Non-Functional Requirement Model

**Session ID:** 2026-08-18-16

**Date:** 2026-08-18

**Status:** Crystallized

## Context

The specification needs to express product qualities and constraints that may apply across behavior, features or the whole product, without confusing them with the behavior itself.

## Decision

- Each Non-Functional Requirement is an independent Product Artifact.
- It has a quality category, measurable requirement statement and one or more explicit scope targets.
- A whole Specification is a valid target for a product-wide quality expectation.
- Quality categories include areas such as performance, security, accessibility, reliability, compatibility and privacy. The exact initial category vocabulary remains to be specified.
- A Non-Functional Requirement is distinct from a Functional Requirement's behavioral statement and from its local Conditions and constraints list.

## Consequences

Cross-cutting quality expectations become traceable, reviewable and exportable Product Knowledge instead of unstructured prose or hidden Functional Requirement qualifiers. The next decisions are the category vocabulary, eligible artifact target types and document-first authoring flow.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/index.md`
