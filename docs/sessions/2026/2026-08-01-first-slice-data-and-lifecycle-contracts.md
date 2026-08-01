# Session — First-Slice Data And Lifecycle Contracts

**Session ID:** 2026-08-01-03  
**Date:** 2026-08-01  
**Status:** Crystallized

## Context

The selected first slice already had its user journey, online-first posture and system boundaries, but needed an explicit durable-record and lifecycle contract for its two atomic writes: Project creation and first Goal save.

## Decision

The slice persists four records: Project, Specification, Goal and Revision.

Project creation atomically records an active owner-controlled Project with its required title, optional description, content locale and fixed starter identifier/version. It also materializes an empty Specification with the default section identifiers and ordering. This starter instantiation creates no Product Artifact or Revision.

The browser's in-progress Goal draft is private and non-canonical. `Done editing` validates the required non-whitespace Goal title and content, then atomically records a canonical `Draft` Goal and immutable Revision 1. That revision is a complete Goal snapshot with a per-Goal version, saving owner and time.

Every write carries an Operation ID. Exact retries return the recorded command outcome instead of making another Project, Goal or Revision. Reusing an Operation ID with changed command content is rejected. Failed writes leave no partial Goal or Revision.

## Consequences

- The first-slice lifecycle is explicit: no Project → Project plus empty Specification → private Goal draft → Draft Goal plus Revision 1.
- The fixed starter remains stable for each created Project even if its source definition changes later.
- The contract supports visible save semantics and future synchronization seams without choosing a database, API style or event-sourcing model.
- Goal relationships, later revisions and diffs, draft resumption, archiving, propagation, collaboration and conflict resolution remain deferred.

## Documentation Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/architecture/backend-architecture.md`
- `docs/knowledge/decisions/ADR-011-first-slice-data-and-lifecycle-contracts.md`
- `docs/knowledge/decisions/README.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Topic

Define the first-slice UX prototype and interaction-validation model, beginning with the first-use, Project-creation and Goal-save journey plus essential empty, loading, error and keyboard states.
