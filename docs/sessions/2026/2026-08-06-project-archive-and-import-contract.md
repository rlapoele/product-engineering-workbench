# Session — Project Archive And Import Contract

**Session ID:** 2026-08-06-01

**Date:** 2026-08-06

**Status:** Crystallized

## Context

The Project Owner identified a need to export and re-import Projects for backup/restore, user-directed moves between accounts or deployments, and reusable starting points. Existing Implementation Handoff Packages are intentionally partial downstream representations, so they cannot serve that role.

## Decision

The product gains a separate, versioned, machine-oriented Project Archive for one complete transferable Project. It retains canonical Project knowledge/history and managed Resources, but excludes Conversations, Conversation Outcome Links, authentication/credentials, live authority, personal state, operational data and deployment configuration. External Resources remain links and metadata.

Import validates the archive and creates a new locally owned Project. The importer is derived from the authenticated session; all local record identities are regenerated and relationships remapped, while source identity remains only opaque lineage/historical attribution. Import never merges, overwrites, transfers authority or claims an atomic cross-deployment move. Implementation Handoff remains one-way and is never import input.

## Consequences

- A later Project Archive module will be separate from Handoff rendering and canonical-persistence adapters.
- The archive format needs a dedicated compatibility, integrity, size/resource-safety and no-partial-Project specification before implementation.
- Full archive preservation is the starting point; clean forks/templates and standalone Specification import are deliberately deferred.
- No product implementation is authorized by this decision.

## Documentation Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/architecture/system-architecture.md`
- `docs/knowledge/decisions/ADR-004-implementation-handoff-package.md`
- `docs/knowledge/decisions/ADR-024-project-archive-and-import-contract.md`
- `docs/knowledge/decisions/README.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Topic

Define the application-module and dependency-boundary approach for the modular monolith, now including the future Project Archive boundary: proportionate ports/adapters, ownership of canonical interchange snapshots, allowed dependencies, and how Astro, Better Auth, PostgreSQL and Railway remain adapters rather than domain authority.
