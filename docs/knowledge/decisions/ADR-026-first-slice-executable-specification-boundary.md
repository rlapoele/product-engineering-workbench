# ADR-026 — First-Slice Executable Specification Boundary

**Status:** Accepted

**Date:** 2026-08-06

---

## Context

The first-slice product, technology, persistence, verification and module-boundary decisions are now accepted. Before implementation begins, the repository needs a compact, buildable specification that prevents an otherwise correct modular-monolith direction from degrading into framework-coupled source layout, accidental configuration authority or unreviewed cross-module imports.

## Decision

Adopt `docs/knowledge/architecture/first-slice-executable-specification.md` as the authoritative build blueprint for the accepted first slice.

It fixes:

- a minimal capability-oriented `src/modules`, `src/adapters`, `src/composition`, `src/pages` and `src/islands` layout plus separate `migrations` and test directories;
- four public Project operations—list, load, create Project and save first Goal—with caller input, server-derived authority and safe result boundaries;
- three thin server-rendered UI routes and two dedicated same-origin JSON command routes;
- a browser Project HTTP client as the only React-Island transport path;
- separately validated application and migration Composition Root configuration contracts;
- a ten-point dependency-boundary review checklist; and
- an ordered implementation sequence from dependency verification through Railway release/recovery evidence.

The specification does not choose exact package versions, Node LTS major, environment-variable spellings, a generic framework, additional product behavior or any implementation beyond the accepted first slice.

## Rationale

The source layout makes ADR-025's capability and adapter boundaries observable from the first file created. Explicit public contracts keep server-derived identity, starter selection, lifecycle, Revision creation and retry safety outside browser input and framework request objects. Separate configuration compositions reinforce the accepted runtime/migration credential boundary.

An ordered sequence makes the verification stack a construction constraint rather than a post-hoc testing plan: migrations, roles and integration evidence precede the browser journey; staging OAuth, recovery and release gating precede real user content.

## Consequences

- First-slice implementation may begin only against this executable specification and the existing accepted decisions.
- A proposal that changes source ownership, public contracts, route semantics, configuration authority or implementation order requires a documentation decision before code diverges.
- Package-version verification and exact configuration spelling remain early implementation tasks rather than undocumented assumptions.
- The executable specification is not authorization to add deferred Project Archive, Handoff, collaboration, AI, offline or later-Artifact functionality.

## Alternatives Considered

### Begin implementation from the ADR set alone

The ADRs provide the architecture and constraints but leave enough assembly detail that source ownership and configuration authority could drift during initial scaffolding.

### Prescribe a complete framework or directory convention

A broad Clean Architecture, DDD, CQRS or dependency-injection convention would add implementation ceremony not justified by the first slice. The selected layout states only the boundaries that protect accepted product behavior.

### Leave configuration to deployment setup

This would risk rejoining application and migration credentials or spreading environment access through modules. The separate Composition Root contracts make the selected release boundary executable.

## Related Documents

- `docs/knowledge/architecture/first-slice-executable-specification.md`
- `docs/knowledge/architecture/frontend-architecture.md`
- `docs/knowledge/architecture/backend-architecture.md`
- `docs/knowledge/architecture/system-architecture.md`
- `docs/knowledge/decisions/ADR-021-first-slice-project-command-transport-and-csrf-posture.md`
- `docs/knowledge/decisions/ADR-022-first-slice-verification-stack-and-evidence-plan.md`
- `docs/knowledge/decisions/ADR-023-first-slice-postgresql-schema-and-persistence-invariants.md`
- `docs/knowledge/decisions/ADR-025-modular-monolith-application-modules-and-dependency-boundaries.md`
