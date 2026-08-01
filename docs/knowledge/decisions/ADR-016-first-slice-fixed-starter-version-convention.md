# ADR-016 — First-Slice Fixed-Starter Version Convention

**Status:** Accepted

**Date:** 2026-08-01

---

## Context

Each first-slice Project records a fixed starter identifier and version and materializes an empty Specification from that starter. The existing data contract requires created Projects to remain stable when the source starter evolves, but did not define the identifier, version form, change trigger or behavior for existing Projects.

## Decision

The first slice uses one server-selected fixed starter:

| Field | Value |
|---|---|
| `starterId` | `implementation-ready-web-app-specification.standard-web-app` |
| `starterVersion` | Positive integer `1` |

A Starter Version is an immutable definition of the selected template/preset pair, included section identifiers, their ordering, and semantic label/guidance references used for the initial empty Specification. The server selects the active fixed version during Project creation, records its identifier and version atomically with the Project, and materializes its composition. The browser does not select or submit the starter fields.

Source definitions for every recorded Starter Version remain available so a Project's initial structure is explainable. Existing Projects never auto-upgrade, and starter instantiation never creates a Product Knowledge Revision.

When a later source change changes the materialized starter output for a new Project, it creates the next positive integer version of the same `starterId`. Semantic versioning is not used. Translation changes behind unchanged semantic label or guidance keys do not create a new Starter Version. The first slice has no starter picker, upgrade or migration flow, user-editable starter configuration, or active version beyond `1`.

## Rationale

A stable identifier and simple monotonic integer make the source of every Project's empty Specification inspectable without implying compatibility guarantees that semantic versioning would suggest. Immutable source definitions and no automatic migration preserve users' existing document composition, while the version boundary permits carefully introduced future starter changes.

## Consequences

- Project-creation correctness tests must verify version `1`, its expected materialized composition, and the absence of a starter-instantiation Revision.
- The source starter can evolve only by adding a distinct immutable version; it cannot silently rewrite earlier Projects.
- Future user-facing starter selection, Project upgrades, migrations and richer template management remain separate product decisions.

## Alternatives Considered

### No stored starter version

This would leave the source of an existing Project's initial composition ambiguous after the starter changes.

### Semantic versioning

This would imply compatibility semantics that do not meaningfully describe a starter's create-time document composition.

### Immutable positive integer versions

This was selected because it is compact, ordered and clear about when source changes create a different starter.

## Related Documents

- `docs/glossary/glossary.md`
- `docs/knowledge/architecture/system-architecture.md`
- `docs/knowledge/architecture/backend-architecture.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/decisions/ADR-010-first-slice-system-boundaries.md`
- `docs/knowledge/decisions/ADR-011-first-slice-data-and-lifecycle-contracts.md`
- `docs/knowledge/decisions/ADR-013-first-slice-engineering-quality-baseline.md`
