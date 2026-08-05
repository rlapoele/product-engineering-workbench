# ADR-025 — Modular Monolith Application Modules And Dependency Boundaries

**Status:** Accepted

**Date:** 2026-08-06

---

## Context

The selected architecture is one deployed online modular monolith: Astro server-rendered pages, bounded React Islands, Better Auth identity, direct PostgreSQL access through `pg`, Railway operation, a fixed starter, implementation handoff and a future Project Archive/import capability. These decisions establish external responsibilities but need a proportional internal dependency rule so framework choices and persistence details do not become product authority.

The Project must keep its small first slice understandable. It needs explicit owner commands, atomic transactions, direct SQL and a future-safe Project data/command boundary without introducing a generic architecture framework, a service mesh or a premature abstraction for every dependency.

## Decision

Use a capability-oriented modular monolith with proportionate Ports and Adapters. This adopts the useful dependency direction of hexagonal/clean architecture without requiring full Domain-Driven Design, aggregate/event modeling, CQRS infrastructure or a dependency-injection framework.

### Application Modules

| Module | Owns | Does not own |
|---|---|---|
| Project | Owner-scoped views; Project commands; retry policy; canonical Project, Specification and Artifact rules; public saved-state and interchange contracts. | HTTP, session objects, SQL, UI state, archive codecs or runtime configuration. |
| Fixed Starter | Immutable starter versions, selected composition and materialization rules. | Browser selection, user-editable database configuration or Project persistence. |
| Implementation Handoff (future) | Authorized canonical read projection and one-way handoff preparation. | Canonical writes or Project Archive import. |
| Project Archive (future) | Archive compatibility, canonical interchange snapshot creation, import validation, local-ID remapping and import lineage. | Direct persistence writes, Better Auth/session authority or handoff rendering. |
| Operations | Narrow approved outcome observation and ledger recording. | Canonical command success/failure authority or Product Knowledge payloads. |

An Application Module owns explicit public contracts for other modules and adapters. It does not expose database rows or framework-native objects as those contracts.

### Dependency rule and Ports

Application Modules may depend only on their own product rules, value concepts, other modules' explicit public contracts, and task-shaped Application Ports that the consuming module owns. An Application Port describes one needed external capability rather than a library or technology category.

The first-slice and already-selected future seams include authenticated-principal resolution; owner-scoped Project reads; explicit transactional Project command persistence; fixed-starter lookup; Project interchange snapshot/read-import creation; managed Resource access; clock and UUIDv7 generation where determinism matters; and content-free operational recording.

Ports must not expose Astro requests, Better Auth sessions, `pg` clients, SQL rows, Pino loggers, archive library objects, environment variables or Railway objects. Concrete adapters implement Ports and depend inward. The browser-facing Project client is an HTTP adapter to public read/command contracts; React Islands depend on it rather than on server or persistence internals.

Do not introduce a generic `Repository<T>`, general event bus, service locator, dependency-injection container or a Port for every library. A direct-SQL PostgreSQL adapter may expose the task-specific transaction capability a Project command needs.

### Adapter and composition responsibilities

| Adapter/runtime concern | May do | Must not become |
|---|---|---|
| Astro and HTTP | Route selection, bounded request parsing, CSRF enforcement, safe response serialization and server-rendered composition. | Product-rule, ownership or persistence authority. |
| React Islands | Local input, pending/error/retry presentation and calls through the client Project boundary. | Canonical Project State, authorization or persistence authority. |
| Better Auth | Authenticate and translate the current session to an opaque principal. | Project ownership or product-permission policy. |
| PostgreSQL and `pg` | Durable state, explicit transactions, foreign keys, grants and direct parameterized SQL. | Hidden workflow in triggers/stored procedures, browser authority or the application command model. |
| Archive/resource adapters | Read/write files or packages and managed Resource bytes. | Canonical persistence shortcuts or source-identity authority. |
| Pino and operations ledger | Record approved content-free technical outcomes after canonical handling. | A condition that can reverse or change an authoritative command result. |
| Railway | Runtime configuration, networking, deployment, migration-job execution and release gating. | Domain configuration, product authority or a second product runtime. |

The Composition Root is the only place that reads runtime configuration and wires selected adapters to Ports. The migration job is a separate operational entry point that runs migrations with its own credential; it is not an Application Module or a second product runtime.

### Enforcement and verification

The first slice proves this boundary with pure policy tests, Testcontainers adapter/transaction tests, endpoint translation/authority tests and browser journeys. Dependency direction is initially enforced through module design and code review. No import-graph tool is selected until the implementation demonstrates a need.

## Rationale

Feature-oriented modules preserve the product's language and make future capability additions visible without forcing every feature through generic technical layers. Task-shaped Ports make meaningful external authority boundaries explicit—particularly session identity, direct SQL transactions, archive import and confidential operations—while avoiding indirection for ordinary library use.

The model keeps direct `pg` SQL and database-enforced constraints from leaking into the product's public contracts. It also prevents a framework, identity provider, database trigger, deployment platform or archive file from silently determining ownership or canonical Product State. The Project Archive decision requires exactly this separation: archive parsing may validate and normalize data, but only an application use case can create the new owned Project.

## Consequences

- Future feature work must begin by naming its owning Application Module and the explicit public contracts it needs; a new cross-module dependency needs an intentional contract rather than an internal import.
- The first slice may use simple functions and explicit construction. It does not require aggregate roots, domain events, a message bus, an ORM, a DI container or a microservice extraction path.
- Better Auth schema management, PostgreSQL grants and Railway migration gates remain operational adapters/controls; they do not relocate Project policy outside Application Modules.
- Handoff rendering and Project Archive import can evolve independently while sharing authorized, stable Project contracts rather than a persistence representation.
- If codebase scale or repeated boundary violations justify it, a later decision may select lightweight import-graph enforcement; it is not an initial tool requirement.
- No product implementation is authorized by this decision.

## Alternatives Considered

### Full Clean Architecture, hexagonal framework or Domain-Driven Design implementation

These approaches offer useful ideas, especially dependency inversion and explicit domain language, but their mandatory layer, aggregate, event or container conventions would add ceremony before the first slice has enough complexity to justify it.

### Technical-layer organization

Separating all controllers, services and repositories across the whole product obscures capability ownership and encourages modules to reach through shared technical layers. Feature-oriented ownership keeps the Project language and policy together.

### Direct framework and database use throughout the application

This is initially fast but makes Astro, Better Auth, `pg`, Railway and archive formats de facto product contracts. The selected boundaries preserve testability and later evolution while retaining direct SQL in its adapter.

### Microservices or an independently deployed archive service

The selected product is one deployable monolith. Separate services would create distributed authority, deployment and observability work without a current product need.

## Related Documents

- `docs/glossary/glossary.md`
- `docs/knowledge/architecture/frontend-architecture.md`
- `docs/knowledge/architecture/backend-architecture.md`
- `docs/knowledge/architecture/system-architecture.md`
- `docs/knowledge/decisions/ADR-009-online-first-offline-evolvable-posture.md`
- `docs/knowledge/decisions/ADR-018-first-slice-browser-interaction-architecture.md`
- `docs/knowledge/decisions/ADR-019-first-slice-postgresql-access-and-sql-migrations.md`
- `docs/knowledge/decisions/ADR-021-first-slice-project-command-transport-and-csrf-posture.md`
- `docs/knowledge/decisions/ADR-024-project-archive-and-import-contract.md`
