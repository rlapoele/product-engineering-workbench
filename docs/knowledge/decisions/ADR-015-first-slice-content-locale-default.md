# ADR-015 — First-Slice Content Locale Default

**Status:** Accepted

**Date:** 2026-08-01

---

## Context

The first-slice Project record requires a `contentLocale`, and the MVP data model assigns user-authored content one Project- or Specification-level locale rather than artifact-level localization fields. The first slice needed a default source that keeps initial authoring coherent with the interface without assuming a profile-preference system, localization workflow or multi-language specification support.

## Decision

The first slice stores `contentLocale` as a Project-level well-formed BCP 47 language tag. At application entry, the browser presentation resolves the current Interface Locale from the browser's highest-preference valid locale, using `en` when no valid browser locale is available.

At Project creation, **Content language** is an editable control pre-filled from that resolved Interface Locale. The owner may choose a different valid value before creation. The server validates and atomically persists the chosen value with the Project; the materialized empty Specification and first Goal inherit it.

The first slice does not persist a user interface-language preference, provide interface-language settings, guarantee translated interface content, support mixed-language Projects or expose later Project locale editing. A later Interface Locale change does not alter a saved Project's `contentLocale`.

## Rationale

Using the already-resolved Interface Locale gives the content default a consistent, user-visible source rather than re-reading raw browser preferences during the Project command. An editable creation value respects the fact that a person's interface language and authoring language may differ. The boundary keeps a durable Project metadata value without adding account settings or localization workflows before they are needed.

## Consequences

- Project creation gains one visible, editable Content Language value; the prototype must validate its clarity and preservation through creation failure and retry.
- The creation command and persistence mechanism must validate and retain a well-formed Project locale alongside title, description and starter metadata.
- User-authored content begins with one Project-level locale while fixed-starter text and interface text remain separately localizable.
- Future interface-language preferences, translation coverage, Project locale changes and mixed-language authoring require separate decisions.

## Alternatives Considered

### Default directly from browser preferences at Project creation

This would work technically but would make content defaulting depend on a raw browser read at a later step rather than the journey's established interface context.

### Fixed `en` content default

This is simple but would arbitrarily misrepresent authors whose interface and intended content use another language.

### Resolved Interface Locale with an editable Project value

This was selected because it aligns the initial default with the current journey while preserving owner control and avoiding premature account or localization features.

## Related Documents

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/architecture/system-architecture.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/knowledge/decisions/ADR-006-mvp-product-artifact-model.md`
- `docs/knowledge/decisions/ADR-011-first-slice-data-and-lifecycle-contracts.md`
- `docs/knowledge/decisions/ADR-012-first-slice-ux-prototype-validation.md`
