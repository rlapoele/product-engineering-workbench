# ADR-029 — Repository Collaboration And Semantic Concurrency

**Status:** Accepted

**Date:** 2026-09-28

---

## Context

ADR-028 establishes repository-resident files as the durable canonical
representation of Product Knowledge and one Knowledge Engine as the semantic
boundary behind desktop, CLI and MCP surfaces.

That direction must remain coherent when several people or agents work on the
same Project. Filesystems report physical changes, and Git can distribute,
version and merge text, but neither understands Product Artifact identity,
relationships, atomic multi-file intent or Specification validity. A merge may
be textually clean while producing a semantic contradiction.

The Workbench therefore needs a collaboration posture that benefits from open
files and existing repository practices without pretending that file events or
line merging are a complete multi-user consistency model.

## Origin

Accepted from the discussion following ADR-028 about file-based Product
Knowledge, the Knowledge Engine, Workspace behavior and multi-person work.

## Decision

### Durable state and semantic rules

Repository-resident files remain the durable canonical representation of
Product Knowledge. The Knowledge Engine is the single interpreter and executor
of Workbench semantic rules across every surface. Humans retain authority over
product intent; semantic authority does not grant the engine authority to
invent or silently approve intent.

Caches, indexes and optional connected services may accelerate or coordinate
work but must not become a hidden competing source of Product Knowledge.

### Initial multi-person collaboration model

The initial multi-person model is asynchronous repository collaboration.
Participants normally work in separate Repository Working Copies, branches or
worktrees. They exchange changes through Git synchronization and review when
Git is available.

A shared mutable folder, network drive or cloud-synchronized directory is not
the assumed concurrency mechanism. The Workbench may detect changes in such a
folder, but filesystem events alone do not provide reliable authorship,
ordering, transaction boundaries or lost-update protection.

Git is optional for single-user and core Workspace operation. When it is used,
it provides distribution, history, branching and textual review evidence; it
does not become the semantic authority for Product Knowledge.

### Reconciliation

After a pull, checkout, merge, rebase or other relevant External Change, the
Knowledge Engine reparses the affected Specification state and performs a
semantic comparison. It validates stable identity, composition, relationships,
references and other selected invariants.

Git textual conflicts remain explicit and are not silently repaired. The
engine additionally detects Semantic Conflicts that may exist even when Git
reports a clean merge. Ambiguous semantic conflicts require human judgment.

Examples include:

- one branch revising knowledge that another branch removes or archives;
- one branch moving an item while another changes its containment assumptions;
- a newly merged relationship targeting unavailable or incompatible knowledge;
- independently allocated identities colliding; or
- a multi-file operation being only partially represented after reconciliation.

### Semantic Change Sets and concurrency protection

A Semantic Change Set expresses a coherent Product Knowledge operation against
a known base Product Knowledge state. Application is atomic and must verify
that its base assumptions still hold. When intervening changes invalidate those
assumptions, the change set becomes obsolete or conflicted rather than silently
overwriting newer work.

The exact base-state identifier, transaction mechanism, locking policy and
mapping between Workbench Revisions and Git commits remain open. The selected
contract must support optimistic lost-update protection without requiring one
Git commit for every Workbench Revision or assuming every Git commit contains
only one semantic change.

### Connected collaboration

An optional connected collaboration layer may later add identity, comments,
presence, notifications, sharing, permissions and review coordination. It must
use the same Knowledge Engine semantics and must not silently replace
repository-resident Product Knowledge as canonical state.

Real-time co-editing, CRDTs and operational transformation are not selected as
the initial collaboration foundation. They may be reconsidered only when a
validated synchronous-editing need justifies the additional authority,
synchronization, offline and recovery model.

### Repository topology

A dedicated Specification directory inside the product repository remains the
default topology because it gives Product Knowledge and implementation evidence
one reviewable history.

A separately checked-out Specification repository may later support different
permissions, several implementation repositories or an independent knowledge
lifecycle. Git submodules are a possible adapter, not the default, because
cross-repository changes and review are not atomic and add user-facing
coordination costs.

## Rationale

This approach:

- preserves open, portable and versionable Product Knowledge;
- reuses established asynchronous repository collaboration;
- lets the Workbench detect conflicts that line-based merging cannot express;
- protects multi-file semantic operations from partial or lost updates;
- keeps human intent authority distinct from storage and engine mechanics;
- avoids prematurely introducing real-time collaboration infrastructure; and
- leaves room for connected coordination without creating a second source of
  truth.

## Consequences

- The repository representation must use stable identities and deterministic
  serialization so unrelated work produces understandable diffs.
- External Change reconciliation must operate on semantic state, not raw file
  events alone.
- Readiness and alignment assessments remain attached to a named Product
  Knowledge Revision and evidence snapshot; they must be recalculated or marked
  stale after relevant merged changes.
- Collaboration identity, Apply authority and Git authorship must not be
  inferred from filesystem events.
- Shared-folder editing can be observed and protected, but is not promised as
  safe concurrent authoring.
- The exact concurrency, base-revision, semantic-merge and conflict-recovery
  contract remains active specification work under ARCH-004.

## Alternatives Considered

### Treat Git merging as sufficient

Rejected because a clean textual merge can still break semantic identity,
relationships or multi-file invariants.

### Make a connected database the collaboration source of truth

Rejected as the default because it would undermine repository-resident
canonical Product Knowledge and offline/local use.

### Use one shared folder as the collaboration model

Rejected because file synchronization does not reliably provide identity,
ordering, atomicity or conflict intent.

### Begin with real-time collaborative editing

Deferred because it introduces a substantially larger synchronization and
authority model before synchronous co-authoring has been validated as a core
need.

## Extends

- ADR-003 — Asynchronous Transactional Collaboration
- ADR-007 — Canonical Project State
- ADR-028 — Repository Companion And Living Specification

## Related Documents

- `docs/knowledge/architecture/system-architecture.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/glossary/glossary.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
