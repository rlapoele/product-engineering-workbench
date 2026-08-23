# Session — Source Capture and Product Knowledge Boundary

**Session ID:** 2026-08-24-02

**Date:** 2026-08-24

**Status:** Crystallized

## Context

A continuously evolving Project needs to distinguish ordinary incremental specification work from the separate exercise of understanding an existing product through observations, documents, codebase context and other evidence.

## Decision

A **Source** is non-canonical evidence used to understand, challenge or refine Product Knowledge. It may be an observation, stakeholder input, document, source-code context, screenshot, prototype, repository, analytics or another external input. A Source does not itself create or revise the specification.

**Source Capture** is the Project Owner's explicit act of reviewing a Source and beginning an ordinary Product Knowledge draft or Revision. Only the ordinary required-field, review and explicit-save rules make the resulting knowledge canonical; provenance may retain the source material that informed it. Files and links can use the existing Resource and Resource Reference model. The detailed representation of other source forms remains open.

## Boundary

Sources, external content and AI interpretations never silently become Product Knowledge. Source Capture is not automatic reverse engineering, code synchronization, code import or a Product Delivery workflow.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
