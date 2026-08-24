# Source Note and External-AI Indication

**Date:** 2026-08-24
**Status:** Crystallized
**Topic:** UX-006 — Greenfield and brownfield Project-start journeys

## Context

Brownfield intake needs a quick way for an owner to retain observations and other evidence without prematurely turning it into Product Knowledge. The Workbench should also let an owner identify a Source materially created or summarized with an external AI tool, while preserving the existing limit that external-AI use cannot be comprehensively detected or proven.

## Decision

A **Source Note** is an owner-authored, non-canonical Source with only two required MVP fields: a concise Title and Evidence text.

Every new Source — a Source Note, uploaded file or external link — may carry an optional, owner-set **Externally AI-assisted source** indication. It is off by default and means that external AI materially helped create or summarize that Source. Selecting it creates a voluntary external-AI declaration in the existing known AI activity trace and retains the indication as source provenance when that Source is captured into canonical Product Knowledge.

## Boundary

The indication does not assert that the Source is correct, verified, fully AI-generated, owned by a particular person, or the final author of later Product Knowledge. It does not require provider, model, prompt, cost or usage metadata in the MVP. Visibility beyond the Project Owner continues to follow the existing project AI-use disclosure setting.

The Source remains non-canonical evidence. It becomes Product Knowledge only through the established, owner-controlled Source Capture flow and an explicit ordinary save.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
