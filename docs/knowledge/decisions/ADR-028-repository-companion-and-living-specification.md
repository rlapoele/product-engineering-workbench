# ADR-028 — Repository Companion And Living Specification

**Status:** Accepted

**Date:** 2026-09-28

---

## Context

The Product Engineering Workbench was initially framed as an online
application that helps users produce implementation-ready Product Knowledge
and then prepare an Implementation Handoff Package. The first implementation
slice intentionally validated part of that model through an authenticated web
application with server-authoritative PostgreSQL persistence.

Further exploration established a broader need. AI agents increasingly write
software, but their output depends on the quality and accessibility of the
intent they receive. Humans must retain authority over that intent while being
able to use AI to explore, draft and review it. Product Knowledge also needs to
remain close to source code, tests and implementation evidence without forcing
people to understand a Specification by reading a collection of repository
files directly.

Implementation continually reveals ambiguity, drift and new needs. Product
Engineering therefore does not end when implementation starts, even though
software delivery and delivery management remain outside the product's scope.

## Origin

Accepted from:

- `docs/sessions/2026/2026-09-28-01-repository-companion-direction-and-decision-impact-inventory.md`
- the subsequent product-identity, storage, Observation, authority, readiness,
  architecture, implementation-evidence and collaboration discussions.

## Decision

The Product Engineering Workbench is a **desktop-first repository companion
for maintaining living, human-owned Product Knowledge**.

### Product boundary

The Workbench remains focused on Product Engineering. Its boundary is based on
responsibility rather than a point in time:

- it helps humans and AI contributors explore, structure, maintain, validate
  and share Product Knowledge;
- it may inspect implementation evidence, detect change and assess alignment;
- it does not implement software, assign delivery work, manage sprints or
  execute releases.

Implementation is evidence about Product Knowledge, not authority over Product
Knowledge.

### Workspace and durable representation

The Workbench opens a local Workspace rooted in a folder. Git is valuable but
is not required for core inspection and editing.

A Workspace is anchored by a small tracked declaration under
`.workbench/workspace.*`. The exact serialization format remains undecided. The
declaration identifies the supported Specification boundary and relevant
Workspace roots; it does not contain Product Knowledge, secrets, machine-local
absolute paths, caches or personal interface state.

Repository-resident files are the durable, open representation of canonical
Product Knowledge. A normalized Project State remains the semantic aggregate
interpreted by the product, but is composed from and persisted to those files.
Disposable indexes, caches or local databases may accelerate the experience
without becoming competing truth.

The Specification has an explicitly declared Specification Root. The
Workbench never assumes that every document, source file or test in a Workspace
belongs to the Specification. A dedicated directory in the product repository
is the default topology. A Git submodule or separately checked-out
Specification repository may be supported later through the same abstraction.

### Product surfaces and knowledge engine

The logical architecture has three layers:

```text
Desktop document UI · CLI · MCP · future integrations
                         ↓
Workbench knowledge engine
parse · compose · validate · relate · revise · monitor
track provenance · calculate impact/readiness/alignment
                         ↓
Repository-resident Specification, Observations and metadata
```

Every surface uses the same semantic operations. A surface must not implement
its own repository-mutation or product-rule behavior.

The desktop interface is the primary sustained human surface. It presents one
coherent Specification document rather than exposing the physical file layout
as the ordinary editing model. The CLI is a first-class human and automation
surface. MCP gives external agents a semantic interface to Workbench concepts
rather than permission to manipulate arbitrary files.

The logical architecture does not yet select a desktop framework or decide
whether the engine is an embedded library, local service or background
process.

### External changes and authority

The knowledge engine monitors declared Workspace content for creation,
modification, movement and deletion. It reloads and semantically compares
affected knowledge, distinguishes Workbench writes from external changes when
possible and surfaces invalid or conflicting changes without silently
repairing or overwriting them.

Valid direct file edits legitimately change the stored repository state. The
Workbench distinguishes that stored state from human-confirmed intent by
making externally introduced semantic changes visible and reviewable.

Humans retain authority over canonical product intent. Workbench authority is
graduated as Inspect, Observe, Propose and Apply. External AI agents default to
Inspect, Observe or Propose. Apply authority must be explicitly granted and
bounded.

A Semantic Change Set groups additions, revisions, removals, moves and
relationship changes against a base Revision. Applying it is atomic and
records its rationale, origin, validation and provenance. Direct human editing
may use the same semantic transaction model without forcing a formal approval
screen for every edit.

### Observations and implementation evidence

An Observation is a traceable, non-canonical claim that Product Knowledge may
require attention. Humans, agents, tools and structured reviews may create
Observations. Creating one never changes the Specification.

Human review may use an Observation to inform one or more changes, Open
Questions or Decisions, retain it as reference, dismiss it with rationale or
confirm that existing Product Knowledge remains valid. Provenance connects the
Observation to its disposition and any resulting Revisions.

Implementation evidence is classified as deterministic, declared or inferred.
Deterministic evidence may affect validation or make an assessment stale.
Declared evidence retains its author and origin. AI-inferred discrepancies
become Observations rather than canonical knowledge.

Opening a repository does not authorize running its scripts. Tests, builds or
repository commands require explicit user action or a trusted Workspace
policy.

### Readiness, alignment and sharing

Specification Readiness and Implementation Alignment are separate derived
assessments:

- Specification Readiness asks whether a named scope is sufficiently coherent
  and precise for a stated purpose.
- Implementation Alignment asks whether available implementation evidence
  agrees with a named Product Knowledge Revision.
- Delivery or release readiness remains outside the Workbench's scope.

An assessment is anchored to a scope, purpose, Product Knowledge Revision and
evidence snapshot. It is not a permanent Project state and may become stale as
knowledge or evidence changes.

The terminal handoff metaphor is removed from the product foundation. The
Workbench assembles a live Context View, may capture it as an immutable Context
Snapshot and can export or share that snapshot. An implementation-oriented
package is one export profile rather than the end of Product Engineering.

### Collaboration and trust

Local Workbench review, Git collaboration and optional connected collaboration
are complementary layers. Git supplies distribution and version history; it
does not replace semantic rationale, human authority, identity or review.
Connected services may later add presence, comments, notifications, sharing
and permissions without becoming a hidden canonical store.

Workspace content is untrusted data, not instruction. Opening a Workspace
permits inspection only within its declared boundaries. Agent access, file
system scope, command execution and canonical mutation require distinct,
explicit authority.

## Rationale

This direction:

- co-locates Product Knowledge with the implementation contexts that consume
  and challenge it;
- preserves an approachable document experience for humans;
- gives humans and agents consistent semantic operations through several
  surfaces;
- keeps intent under human control while allowing visible AI participation;
- supports continuous Product Knowledge evolution without absorbing Product
  Delivery;
- uses open repository files for portability, inspectability and versioning;
- treats implementation learning as evidence rather than silent product truth;
- replaces a terminal handoff with reusable, purpose-specific context.

## Consequences

- The current Astro/PostgreSQL implementation remains a completed, bounded
  first-slice reference. It is not the presumed target architecture.
- New prototype and implementation work remains paused until the repository
  representation, engine boundary and target journey are specified.
- The exact Workspace declaration format, Specification schema, file layout,
  multi-Specification behavior, desktop technology, engine deployment and
  connected-service architecture remain open.
- External file changes, semantic conflicts, Git operations and agent
  permissions require explicit product and security contracts.
- Existing handoff terminology and package detail become historical input to
  future Context Snapshot export profiles rather than current product
  foundation.
- Existing online collaboration, Project Archive and persistence decisions
  must be revisited against repository-resident canonical knowledge before
  future implementation authorization.

## Alternatives Considered

### Continue the online, server-authoritative application direction

This preserves the first-slice architecture but keeps Product Knowledge
separate from the repositories and agents that use it, makes local
repository-aware operation secondary and retains the terminal handoff model.

### Store repository files but expose them directly as the primary interface

This maximizes openness but does not solve the human comprehension and editing
problem created by distributed files.

### Treat implementation or AI inference as specification truth

This could automate synchronization but would reverse the authority boundary:
current code behavior or an agent interpretation would silently define product
intent.

### Repository companion with one semantic engine

This was selected because it combines open durable storage, a coherent human
document, controlled agent participation and continuous alignment without
turning the Workbench into a delivery platform.

## Supersedes And Extends

- Supersedes ADR-001's temporal statement that the product ends once
  implementation-ready knowledge is produced, while preserving its exclusion
  of Product Delivery management.
- Supersedes ADR-004 as the foundational export model.
- Supersedes ADR-009 as the target-product posture; ADR-009 remains historical
  rationale for the completed first slice.
- Extends ADR-002, ADR-005, ADR-007 and ADR-008.

## Related Documents

- `README.md`
- `docs/knowledge/vision/product-vision.md`
- `docs/knowledge/vision/product-goals.md`
- `docs/knowledge/principles/product-principles.md`
- `docs/knowledge/architecture/system-architecture.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/glossary/glossary.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/2026/2026-09-28-01-repository-companion-direction-and-decision-impact-inventory.md`
