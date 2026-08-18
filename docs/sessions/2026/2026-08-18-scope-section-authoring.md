# Session — Scope Section Authoring

**Session ID:** 2026-08-18-06

**Date:** 2026-08-18

**Status:** Crystallized

## Context

The document needs a readable, detailed product boundary that complements rather than duplicates the higher-level intent recorded in Non-Goals.

## Decision

- `Scope` has two fixed, section-owned blocks: **In Scope** and **Out of Scope**. They are not independent Product Artifacts.
- In Scope describes the high-level product areas and bounded capabilities covered by the current specification. Out of Scope records specific nearby capabilities, modes, integrations, data boundaries or operational boundaries deliberately excluded from it.
- Non-Goals remains the broader strategic layer. Scope may refer to an existing Non-Goal rather than repeat it.
- In Scope needs saved content whenever the required Scope section is selected. Out of Scope is optional.
- The blocks support short paragraphs, unordered lists and ordered lists only when their order is meaningful. Nested lists, arbitrary headings and a general rich-text editor are not introduced.
- An empty section uses `Actions` to reveal `Define In Scope` and `Define Out of Scope`. Each creates a private inline block draft; `Done editing` creates a section-content Revision and `Discard` restores that block's guidance.
- Saved blocks expose direct Edit and a secondary locally confirmed Clear action. Clearing In Scope returns Scope to its required-but-empty guided state; clearing Out of Scope restores only its optional guidance.
- Scope blocks have no independent lifecycle, relationships, provenance, collaboration or inferred impact propagation. Changing their prose or list content must not automatically mark Product Artifacts Stale.

## Consequences

The document can communicate a precise, phase-specific product boundary without becoming a duplicate feature specification, a roadmap, or a general rich-text surface. Important boundary changes remain visible through section-content Revisions while their wider consequences require deliberate user judgment or a later explicit review.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/index.md`
