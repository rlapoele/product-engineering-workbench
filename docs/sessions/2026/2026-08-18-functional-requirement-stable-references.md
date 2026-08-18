# Session — Functional Requirement Stable References

**Session ID:** 2026-08-18-10

**Date:** 2026-08-18

**Status:** Crystallized

## Context

Longer BRDs and FSDs commonly rely on requirement references in reviews, decisions, validation material and implementation handoffs. Reordering a living document must not invalidate those references.

## Decision

- Every Functional Requirement receives an immutable, project-scoped readable reference when it is created, for example `FR-001`.
- This readable reference is distinct from the system's internal stable artifact identifier. It is retained when a requirement is archived and is never reused.
- Requirement-group and document-outline numbers are derived presentation, for example a familiar `2.3` position. Authors may reorganize the document, so those numbers may change and must not be treated as requirement references.
- A successfully prepared Implementation Handoff preserves its rendered outline and the included Functional Requirements' stable references and saved Revision snapshots. It remains a historical representation even after later document or requirement changes.

## Consequences

Authors and implementation consumers can cite a requirement confidently throughout the life of the Project. The document can still be reorganized into a readable specification without encoding a transient position into a durable reference. Requirement splits and the detailed Functional Requirements authoring surface remain to be specified separately.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/index.md`
