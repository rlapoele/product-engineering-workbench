# Session — First-Slice Content Locale Default

**Session ID:** 2026-08-01-08  
**Date:** 2026-08-01  
**Status:** Crystallized

## Context

The first-slice Project contract already required `contentLocale`, but its default source was unresolved. The project needed a rule that aligned initial authoring language with the user's current interface context without turning the first slice into a profile-preference or localization-workflow implementation.

## Decision

At application entry, the browser resolves the current Interface Locale from the browser's highest-preference valid locale, with `en` as fallback. This interface value is distinct from Project content.

Project creation presents editable **Content language**, pre-filled from the resolved Interface Locale. The owner may choose a different well-formed BCP 47 value before creation. The server validates and atomically persists it as Project `contentLocale`; the empty Specification and first Goal inherit it.

No saved interface-language preference, interface-language setting, translated interface commitment, later Project locale edit, mixed-language Project or artifact-level locale is included in the first slice. Later Interface Locale changes do not affect existing Project content.

## Consequences

- The UX prototype now includes the visible, editable Content Language value and its Project-creation failure/retry preservation.
- The access/identity decision stays separate: Interface Locale is neither an identity claim nor Project authority.
- The next remaining prerequisite is the fixed-starter version convention.

## Documentation Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/architecture/system-architecture.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/knowledge/decisions/ADR-012-first-slice-ux-prototype-validation.md`
- `docs/knowledge/decisions/ADR-015-first-slice-content-locale-default.md`
- `docs/knowledge/decisions/README.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Topic

Define the fixed-starter version convention so each created Project retains a stable, explainable starter identity while the source starter can evolve later.
