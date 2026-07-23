# Session — Screen/View Visual Context Handoff Representation Validation

**Date:** 2026-07-23

**Session ID:** 2026-07-23-01

**Status:** Crystallized

---

## Context

Screen/View visual references may carry optional Visual Context: represented state and viewport. This metadata helps an implementation consumer interpret a particular screenshot, mockup, wireframe, prototype or design-file reference, but it is not canonical Screen/View behavior or a device model.

An Implementation Handoff Package needs both an authoritative machine-readable representation and usable human-readable specification content. The package must make the context visible without duplicating it as a general Screen/View state declaration or creating a competing source of truth.

---

## Decision

For an included `Visual reference` on a Screen / View:

- `manifest.json` is authoritative for the Resource Reference and its Visual Context metadata; and
- the human-readable Screen / View export includes a compact Visual Context mention alongside that named reference when represented state and/or viewport is present.

The human-readable mention is reference-local. It identifies the reference and states only the supplied values, for example: `Confirmation mockup — represented state: confirmation; viewport: mobile portrait.` It does not render an unspecified value, introduce a separate top-level Screen/View state summary or redefine canonical Screen/View behavior.

---

## Consequences

Implementation consumers can see the interpretive context at the point where they encounter the visual reference, without having to inspect package metadata for ordinary reading. Machine consumers retain one authoritative representation in the manifest.

The two renderings have distinct roles rather than independently authored or competing meanings. A human-readable reference-local mention must remain synchronized with the included Resource Reference metadata and must not be treated as an additional Screen/View field, Artifact Relationship, responsive-device model or behavior requirement.

References without Visual Context retain their ordinary package representation; the package does not insert empty or unspecified context labels.

Exact Markdown layout, linking to copied managed files, rendering of external-link caveats and manifest schema remain export-format work.

---

## Documents Updated

- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

---

## Recommended Next Step

Validate a concrete mixed handoff with multiple Screen/View visual references, including one without Visual Context and one shared Resource with different target-local context, to confirm that the human-readable export stays reference-local and the manifest remains unambiguous.
