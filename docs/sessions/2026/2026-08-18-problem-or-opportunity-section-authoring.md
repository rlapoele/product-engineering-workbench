# Session — Problem Or Opportunity Section Authoring

**Session ID:** 2026-08-18-02

**Date:** 2026-08-18

**Status:** Crystallized

## Context

The document-first template needs a structured but lightweight way to state why a product should exist without requiring every initiative to be framed as a negative problem or prematurely selecting a solution.

## Decision

- `Problem or Opportunity` may contain a Problem prose block, an Opportunity prose block, or both. A required selected section needs saved content in at least one block.
- Problem describes a current pain, limitation or unmet need. Opportunity describes the improvement or value unlocked by addressing it. Candidate solutions remain later Core Features, not Opportunity content.
- Both blocks are section-owned prose, not Product Artifacts. They have no independent lifecycle, relationships, provenance, collaboration or inferred impact propagation.
- The prepared section visibly guides both blocks. An empty section uses `Actions` to reveal `Add Problem` and `Add Opportunity`; either opens a private inline multi-paragraph draft.
- `Done editing` creates a section-content Revision and `Discard` restores that block's guidance. A saved block has its own Edit and locally confirmed Clear actions. After one block is saved, the section offers the other; after both are saved, no additional section action is needed.
- Clearing the final saved block returns the section to its empty guided state and restores ordinary required-section `What next?` coverage guidance.
- Only ordinary paragraphs are selected. Rich-text formatting is deferred to the separate document-wide capability discussion.

## Consequences

The section accommodates problem-led, opportunity-led and mixed initiatives without treating opportunities as committed solutions. It extends the section-owned prose pattern without adding artifact types or implementation scope.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/index.md`
