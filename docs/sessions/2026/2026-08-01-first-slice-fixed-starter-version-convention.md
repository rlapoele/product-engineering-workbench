# Session — First-Slice Fixed-Starter Version Convention

**Session ID:** 2026-08-01-09  
**Date:** 2026-08-01  
**Status:** Crystallized

## Context

The selected first slice already recorded a fixed-starter identifier and version and materialized an empty Specification, but it needed an exact convention to keep each Project explainable and stable if the source starter changes later.

## Decision

The server selects the only first-slice starter, `implementation-ready-web-app-specification.standard-web-app`, at positive integer version `1`. It persists that identifier and version atomically with the Project and materializes the Starter Version's default empty Specification. The browser does not choose these fields.

A Starter Version is immutable: it defines the template/preset pair, included section identifiers, their ordering and semantic label/guidance references. Source definitions for recorded versions remain available. Existing Projects never auto-upgrade, and starter instantiation is not a Product Knowledge Revision.

A later source change that changes the materialized document for new Projects creates the next integer version. Semantic versioning is not used. Translation changes behind unchanged semantic keys do not create a new version. The first slice has no starter selection, upgrade, migration or user configuration.

## Consequences

- The core-correctness gate can now test Project creation against exact starter version `1` and composition.
- Future starter evolution remains possible without silently rewriting existing Project structure.
- The next prerequisite is to execute and evaluate the accepted UX prototype.

## Documentation Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/architecture/system-architecture.md`
- `docs/knowledge/architecture/backend-architecture.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/principles/engineering-principles.md`
- `docs/knowledge/decisions/ADR-013-first-slice-engineering-quality-baseline.md`
- `docs/knowledge/decisions/ADR-011-first-slice-data-and-lifecycle-contracts.md`
- `docs/knowledge/decisions/ADR-016-first-slice-fixed-starter-version-convention.md`
- `docs/knowledge/decisions/README.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Topic

Execute and evaluate the selected first-slice UX prototype before beginning technology selection.
