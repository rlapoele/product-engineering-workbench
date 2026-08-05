# Session — Modular Monolith Application Modules And Dependency Boundaries

**Session ID:** 2026-08-06-02

**Date:** 2026-08-06

**Status:** Crystallized

## Context

The selected Astro/React, Better Auth, PostgreSQL/`pg`, Railway and Project Archive directions needed an internal organization rule. The aim was to preserve authority and evolvability without prematurely imposing a full Clean Architecture, hexagonal framework or Domain-Driven Design implementation.

## Decision

The online modular monolith is capability-oriented. The Project and Fixed Starter modules are initial application modules; Implementation Handoff and Project Archive are future modules that consume explicit Project public contracts. Modules depend only on their rules, value concepts, other explicit module contracts and small task-shaped Ports they own.

Astro/HTTP, React client transport, Better Auth, PostgreSQL/`pg`, archive/resource handling, Pino/operations and Railway implementations are concrete adapters that depend inward. The Composition Root alone reads runtime configuration and wires them. PostgreSQL continues to enforce data integrity structurally, but product commands and policy remain application authority; operations failure cannot alter a canonical result.

The first slice deliberately selects no generic repository, event bus, service locator, DI container, CQRS/event-sourcing/aggregate framework, import-graph tool or microservice split. Module direction is initially maintained by design and code review, then exercised through pure, integration, endpoint and browser evidence.

## Consequences

- Archive codecs and resource adapters cannot write canonical persistence directly; import routes through a Project application use case.
- Future capabilities must name their owning module and public contracts before creating cross-module imports.
- Direct SQL remains visible inside a PostgreSQL adapter instead of becoming a browser or product contract.
- No product implementation is authorized by this decision.

## Documentation Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/architecture/frontend-architecture.md`
- `docs/knowledge/architecture/backend-architecture.md`
- `docs/knowledge/architecture/system-architecture.md`
- `docs/knowledge/decisions/ADR-025-modular-monolith-application-modules-and-dependency-boundaries.md`
- `docs/knowledge/decisions/README.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Topic

Define the first-slice executable specification boundary: exact source layout, module public contracts, dependency-rule review checklist, composition-root configuration contract, and the minimum implementation sequence that remains consistent with ADR-025.
