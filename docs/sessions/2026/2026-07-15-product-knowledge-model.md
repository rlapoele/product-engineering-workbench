# Session — Initial Product Knowledge Model

**Date:** 2026-07-15

**Status:** Crystallized

---

## Context

Follow-up knowledge work after the initial project foundation session.

The objective was to define and align the initial Product Knowledge Model before moving toward UX, AI, architecture or implementation-specific planning.

---

## What Was Done

- Created the initial Project Model and Product Knowledge Model.
- Defined the core conceptual model for Projects, Product Knowledge, Product Artifacts, relationships, workflow templates, contributors, contributions, discussions, decisions, reviews, revisions, provenance, context and readiness.
- Moved unresolved model questions into the planning open-question register.
- Replaced duplicated open questions in the Project Model with a short pointer to the planning register.
- Performed a terminology alignment pass across the Project Model, glossary and open questions.
- Updated current planning focus to reflect that the model now exists and needs validation.

---

## Key Decisions and Clarifications

- Product Knowledge is composed of interconnected Product Artifacts.
- Product Artifact is the canonical term; Artifact may be used as a short form after first use.
- The document-first experience should be treated as a view over structured product knowledge, not the canonical source of truth itself.
- Decision is both:
  - a general project concept used to preserve rationale;
  - a possible Product Artifact type when managed as structured product knowledge.
- Contribution, Revision and Provenance are distinct:
  - Contribution records participation or meaningful action.
  - Revision records saved change history.
  - Provenance records origin or derivation of knowledge.
- Open questions should live in `docs/planning/open-questions.md`, with model documents pointing to that register rather than duplicating unresolved questions.

---

## Vocabulary Updated

- Product Artifact
- Context
- Context References
- Contribution
- Decision
- Provenance
- Readiness
- Revision

---

## Open Questions Created or Updated

- DATA-001 — What is the minimum required artifact set?
- DATA-002 — What are the required common fields for every artifact?
- DATA-003 — Which artifact relationship types are required initially?
- DATA-004 — What lifecycle states should artifacts support?
- UX-001 — Is the document a canonical object or a view over artifacts?
- AI-001 — What context should AI contributors receive for each action?
- ARCH-001 — Should the canonical product state be stored as a document graph?
- PROC-001 — How should conversations crystallize into stable knowledge?

---

## Documents Affected

- `docs/knowledge/data-model/project-model.md`
- `docs/glossary/glossary.md`
- `docs/planning/open-questions.md`
- `docs/planning/current-focus.md`
- `docs/sessions/index.md`

---

## Recommended Next Step

Validate the open Product Knowledge Model questions, starting with:

- DATA-001 — Minimum required artifact set
- DATA-002 — Common artifact fields
- DATA-003 — Initial relationship types
- DATA-004 — Artifact lifecycle states

Once the DATA questions are sufficiently stable, use the model to draft:

- `docs/knowledge/ux/document-first-ui.md`

---

## Notes

This session advanced the repository foundation without starting implementation planning.

The Product Knowledge Model should now act as the conceptual source for upcoming UX, AI and architecture knowledge work.

