# Session — Design System Definition Token Flexibility

**Session ID:** 2026-08-22-07

**Date:** 2026-08-22

**Status:** Crystallized

## Context

Semantic token names can make intended UI roles clearer, but a useful Design System Definition must also accommodate raw palettes, scales and other established naming conventions. The same flexibility is needed for typography, spacing, rounded shapes and component properties.

## Decision

Token identifiers are chosen by the author. A raw palette or scale such as `blue-600`, a semantic alias such as `action-primary`, and any other useful convention are valid in every typed token collection. A token value may be a literal or a compatible reference to another token, allowing authors to derive semantic aliases from raw values without requiring that layering.

Authors may optionally apply labels or tags to organize tokens. These are descriptive aids, not mandatory categories: the Workbench does not require semantic naming, a foundation-versus-semantic split or any other design-system methodology.

Minimum structural validation preserves reliable handoffs: names are unique within their collections, references resolve, references are type-compatible with the property that uses them and reference graphs are acyclic. Target-specific value syntax remains part of later export validation.

## Boundary

Labels and tags help authors structure their thinking; they do not cause the Workbench to infer design roles, restrict naming, or invent values. Token usage rationale and guardrails remain human-readable guidance rather than a compulsory metadata schema.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
