# Session — Repository Companion Direction and Decision-Impact Inventory

**Session ID:** 2026-09-28-01

**Date:** 2026-09-28

**Status:** Crystallized

## Purpose and Boundary

This session preserves the strategic exploration that reframed the Product
Engineering Workbench from a primarily online specification-authoring and
implementation-handoff application into a possible desktop-first repository
companion for continuously evolving Product Knowledge.

It also records the preliminary decision-impact inventory used during
crystallization. At the time of recording, the inventory did not itself change
the status of an ADR, replace stable Product Knowledge, select a storage
format, authorize a migration or authorize additional implementation.

Prototype and visual-direction work is paused while this product direction is
examined. The existing prototype evidence remains valid for the questions it
tested, but no further prototype increment is selected by this session.

The subsequent discussion accepted the product identity, responsibility-based
scope, Workspace and `.workbench/workspace.*` convention, repository-resident
durable representation, Observation and Semantic Change Set boundaries,
continuous readiness and alignment distinction, Context Snapshot export/share
model, shared Knowledge Engine architecture, implementation-evidence boundary,
and layered collaboration model. ADR-028 and the related stable-knowledge
updates crystallize those decisions. File formats, engine deployment, desktop
technology and migration remain open.

## Context

The exploration began from several connected observations:

- AI agents now produce a substantial and growing share of software code. The
  quality of the intent and specification available to those agents materially
  affects what they can implement and verify.
- Humans must continue to own product intent: why software should exist, what
  outcomes it should create and which trade-offs are acceptable. Human control
  does not require humans to type every word; AI may help explore, draft,
  review and revise specifications.
- Product Knowledge is more useful to implementation agents when it is
  co-located with source code, tests and other project evidence. Repository or
  project files are also portable, inspectable and versionable.
- A specification distributed across folders and files is difficult for a
  human to internalize directly. The Workbench should compose that stored
  knowledge into a coherent specification document that feels natural to
  read, navigate and edit.
- Most work occurs in existing software. Implementation, tests, reviews,
  incidents, dependencies and new requests continually reveal possible gaps
  or changes. Those discoveries need a controlled path back toward product
  intent.
- A specification is not finished once implementation starts. Readiness and
  alignment must be reconsidered as the specification and implementation
  evolve.
- `Handoff` remains a useful interoperability or snapshot concept, but a
  terminal organizational handoff is no longer an adequate metaphor for the
  whole product.

High-quality specifications cannot guarantee high-quality code. They can
reduce ambiguity, make behavior testable, supply better context, expose
inconsistency and provide a contract against which implementation can be
reviewed. Architecture, implementation choices, tests, security, operations
and review quality remain separate contributors to software quality.

## Confirmed Direction from the Exploration

The Project Owner affirmed the following as the intended direction to explore
and crystallize. These statements are stronger than incidental ideas, but they
remain outside stable Product Knowledge until the relevant documents and
decisions are deliberately revised.

### Repository companion

The Workbench should be explicitly conceived as a repository companion. It
should be desktop-first and able to inspect a local workspace, detect supported
specification artifacts or structures, create supported structures and compose
recognized knowledge into a comprehensive human representation.

Whether the workspace must always be a Git repository remains open. Until that
is decided, `workspace root` is the neutral concept: a local folder may support
core inspection and editing, while Git may add versioning, branch, review and
history capabilities.

### Document-first human experience

Users should not ordinarily work with the specification as it is physically
stored across files and directories. The primary human surface should feel
like one coherent specification document. It should support sustained reading,
navigation, contextual editing, relationships, observations, impact and
readiness without requiring users to manipulate storage records or a graph.

Every represented item should remain traceable to its durable representation,
and storage details or file diffs may be available when useful. They should not
dominate ordinary product work.

### Three-layer product model

The emerging model separates interaction, semantics and persistence:

```text
┌──────────────────────────────────────────────────────┐
│ Interaction surfaces                                 │
│                                                      │
│ Desktop document UI · CLI · MCP · future integrations│
└────────────────────────┬─────────────────────────────┘
                         │ semantic operations
┌────────────────────────▼─────────────────────────────┐
│ Workbench knowledge engine                           │
│                                                      │
│ Parse · compose · validate · relate · revise          │
│ track provenance · calculate impact/readiness         │
└────────────────────────┬─────────────────────────────┘
                         │ deterministic persistence
┌────────────────────────▼─────────────────────────────┐
│ Repository-resident files                            │
│                                                      │
│ Specification · observations · metadata               │
└──────────────────────────────────────────────────────┘
```

The desktop interface, CLI and MCP server should be clients of the same
knowledge engine rather than separate implementations of product rules. An
important operation such as revising a requirement, validating a scope or
incorporating an observation should have one semantic contract regardless of
surface.

Repository-resident files are the intended durable and open representation of
Product Knowledge. A local database or index may accelerate the experience,
but should not silently become a competing source of truth. The exact
canonical storage contract, schema and reconciliation behavior remain open.

### Human control and AI participation

Humans remain responsible for canonical product intent. AI agents may inspect
Product Knowledge, ask questions, draft content, review it, propose semantic
changes and surface implementation discoveries.

Human control is primarily control of scope, authority, review and
canonicalization. It does not imply manual authorship of every word.

The Penpot MCP model demonstrated a useful interaction pattern: an external AI
agent operates on a product's domain concepts through a semantic tool surface,
while the human sees the work through the product's native interface. For the
Workbench, the relevant lesson is not unrestricted direct mutation. It is that
agents can use structured operations while the human observes and controls the
result.

An MCP-connected agent should therefore interact with Product Knowledge
concepts rather than edit arbitrary storage files. Read-only inspection,
proposal-producing operations and canonical mutation should be distinct
authority levels. A reviewable Workbench-managed change set is the preferred
working hypothesis for meaningful AI-authored changes; the exact permission
model remains open.

### Observations as a controlled feedback path

Humans, AI implementation agents and other tools should be able to place
observations in a recognized workspace location. The Workbench can detect and
present them for review.

An Observation is a working candidate for non-canonical evidence that
something may need to be added, changed, reconciled, investigated or confirmed
in Product Knowledge. Creating an Observation must not itself change the
specification.

A human may use an Observation to:

- create one or more Product Artifacts or section updates;
- revise several existing knowledge items;
- create or inform a Decision or Open Question;
- retain it as reference without changing Product Knowledge;
- dismiss it with a reason; or
- confirm that the current specification remains valid.

`Convert` is not necessarily the correct long-term verb because the
relationship is not one-to-one. One Observation may inform several revisions,
several Observations may inform one change and some Observations may produce no
specification change. `Incorporate`, `capture from` or another term remains to
be selected.

Observation content and its later disposition should preserve provenance. A
working preference is to retain submitted evidence rather than rewrite or
delete it merely because it has been reviewed. Whether disposition is recorded
in the Observation, a sidecar record or another repository-resident index is
open.

### Interactive and asynchronous agent paths

The emerging direction provides two complementary paths:

- MCP is the interactive semantic path for an agent connected to a running
  Workbench. It can inspect scope, propose structured changes and expose its
  progress or results in the document interface.
- Observation files are the asynchronous path for a human or agent working
  without a live Workbench connection. They can report ambiguity, drift or
  evidence without receiving authority over canonical Product Knowledge.

Both paths preserve the same governing principle: agent input is visible and
traceable, while canonical changes follow explicit authority.

### CLI as a first-class surface

A CLI belongs in the interaction layer alongside the desktop document and MCP.
It may serve terminal-oriented humans, agents, scripts and deterministic
repository validation. Human-readable and stable machine-readable output are
both important.

The CLI should invoke semantic operations such as inspect, show, validate,
list observations, preview changes or assess a scope. It should not merely
expose file-editing shortcuts. Its existence is also an architectural test: if
an important capability can exist only in desktop presentation logic, it may
not yet be a properly separated knowledge-engine operation.

### Continuous alignment rather than a terminal handoff

The emerging product loop is:

```text
Human intent
     ↓
Canonical Product Knowledge
     ↓
Scoped context for humans and AI agents
     ↓
Code, tests and implementation evidence
     ↓
Observations, drift, gaps and new needs
     ↓
Human review and confirmation
     └──────────────────────────→ Product Knowledge evolves
```

Readiness is therefore better understood as a derived result for a named scope,
purpose and Product Knowledge revision than as a permanent project state. A
future model may need to distinguish specification readiness, implementation
alignment and delivery or release readiness.

Implementation context packaging remains useful for reproducibility,
interoperability and bounded agent context. The working hypothesis is that a
handoff becomes one use of a prepared context snapshot rather than the end of
Product Engineering. Exact terminology and migration of the established
handoff model remain open.

## Product-Landscape Findings

A targeted review found no prominent product that clearly combines the whole
direction. Existing products cluster around adjacent capabilities:

- [ReqView](https://www.reqview.com/) combines a desktop requirements
  application, document editing, open JSON files, Git/SVN versioning and
  traceability.
- [StrictDoc](https://strictdoc.readthedocs.io/en/stable/stable/docs/strictdoc_01_user_guide-TRACE.html)
  parses human-readable files into an in-memory document tree, provides web
  and CLI surfaces, writes edits back to files and supports requirement-to-code
  traceability and Git-oriented change views.
- [Doorstop](https://github.com/doorstop-dev/doorstop) stores linkable
  requirements and tests as YAML records beside source code, reconstructs
  documents and relationships, validates traceability and publishes views.
- [GitHub Spec Kit](https://github.github.io/spec-kit/) treats specifications
  as repository artifacts for agent workflows and distinguishes spec-first,
  spec-anchored and spec-as-source persistence as well as flow-forward,
  flow-back and living-spec maintenance models.
- [OpenSpec](https://openspec.dev/docs/quickstart) separates current
  specification truth from proposed delta specifications and retains archived
  changes after accepted deltas update the current specification.
- [BMad](https://docs.bmad-method.org/) contributes adaptive planning depth,
  bounded human-reviewed agent output and a preference for small verified
  repository context containing knowledge that code cannot communicate well.
- [Kiro](https://kiro.dev/docs/how-kiro-works/) demonstrates one shared agent
  harness behind several interfaces and repository-resident project context,
  specifications, permissions, hooks and MCP configuration.
- [Tessl's spec-driven development workflow](https://tessl.io/registry/tessl-labs/spec-driven-development)
  demonstrates explicit clarification, specification approval and later
  verification of implementation against approved specifications.
- [Penpot MCP](https://help.penpot.app/mcp/) demonstrates semantic agent
  interaction with a live native product surface, including read and write
  operations over tokens, components, pages and layers.
- [NVIDIA AI Workbench](https://docs.nvidia.com/ai-workbench/user-guide/latest/concepts/understand-project-specification.html)
  provides a narrower architectural analogue: a desktop app and CLI read and
  write a versioned repository specification, can scaffold a missing one and
  still permit direct file editing.

The most relevant synthesis is:

```text
ReqView / StrictDoc     → human document and traceability
Doorstop / OpenSpec     → repository-native records, validation and deltas
Spec Kit / BMad / Tessl → agent workflow and human approval patterns
Kiro / Penpot           → shared multi-surface engine and semantic MCP
Workbench               → living intent plus a controlled Observation loop
```

The Observation inbox appears to be a potentially distinctive product
boundary. Adjacent tools usually permit direct specification edits, treat code
as effective truth, use a linear specification-to-implementation workflow or
provide traceability without agent participation. The emerging Workbench model
instead uses Observations as the non-canonical membrane between implementation
activity and human-owned intent.

## Foundations That Remain Valuable

The new direction does not invalidate the complete existing foundation. The
following principles and concepts remain strongly aligned:

- Help users think.
- Product Knowledge is the primary asset.
- The document is the primary human experience, not necessarily the storage
  representation.
- Humans remain in control and AI remains optional.
- Product Artifacts, relationships, stable identities, Revisions, Decisions,
  provenance, impact analysis and context assembly remain valuable semantic
  foundations.
- Conversations and other contributions remain working memory or
  non-canonical input until deliberately crystallized.
- Product Engineering remains distinct from Product Delivery; the Workbench
  need not become a backlog, sprint, capacity or release-management system.
- Traceability should preserve why knowledge changed without duplicating it.
- Implementation evidence and AI interpretation must not silently become
  product truth.

The scope boundary may need reframing from `the product ends when
implementation-ready knowledge has been produced` to something closer to `the
product does not perform or manage software delivery, but remains connected to
implementation evidence so intent and specification alignment can evolve`.
That reframing has not yet been accepted.

## Decision-Impact Inventory

The classifications below are preliminary exploration labels, not ADR status
changes.

| Area | Established foundation | Emerging direction | Preliminary impact | Likely documents |
|---|---|---|---|---|
| Product identity | A knowledge-first environment for producing implementation-ready Product Knowledge. | A desktop-first repository companion for continuously maintaining intent, specifications and implementation alignment. | **Extend and reframe.** The knowledge-first purpose remains; the product form and time horizon change materially. | README, vision, goals, principles, current focus |
| Product scope | ADR-001 says responsibility ends when implementation-ready knowledge has been produced; delivery remains external. | The Workbench remains outside delivery management but continues observing implementation evidence and receiving Observations after implementation begins. | **Reopen boundary wording.** Preserve the Product Engineering/Product Delivery separation while reconsidering where Product Engineering ends. | ADR-001, vision, principles, glossary |
| Primary application form | The implemented slice is an online Astro application and established architecture assumes browser/server boundaries. | Desktop-first local repository companion, with optional future connected services. | **Likely supersede target architecture; preserve first-slice history.** The existing slice remains valid evidence for its bounded authorization. | system architecture, frontend/backend architecture, ADR-009, README, planning |
| Document-first experience | ADR-002 makes one coherent document the user-facing Specification over structured knowledge. | The same document becomes the primary human projection over repository-resident knowledge. | **Preserve and strengthen.** Storage mechanics should become less visible, not more. | ADR-002, document-first UX, glossary |
| Product Knowledge Model | ADR-005 defines structured Product Artifacts, relationships, graph interpretation, Revisions, provenance and generated document views. | The semantic model remains, but its durable open representation lives in the workspace and is used by several surfaces. | **Preserve concepts; extend representation and access.** Reconsider wording that treats documents and files only as generated uses. | ADR-005, project model, glossary |
| Canonical Project State | ADR-007 defines one structured Project State object containing document composition, artifacts and relationships; storage technology remained open. | Repository-resident files are intended to be canonical or to constitute the durable canonical representation interpreted by the engine. | **Reopen representation, preserve conceptual aggregate.** Decide whether Project State is a derived in-memory view, a manifest-rooted file set or another repository-native contract. | ADR-007, system architecture, project model |
| Persistence authority | System architecture currently makes Railway PostgreSQL canonical for the first slice, with a server application authoritative for commands and ownership. | Deterministic workspace persistence is primary; an index or database must not become a competing truth. | **Likely superseded for the product target; retain as first-slice decision.** Migration and compatibility require later decisions. | architecture docs, first-slice ADRs, future repository ADR |
| Online/offline posture | ADR-009 selects online-first, server-authoritative and offline-evolvable. | Local desktop and repository operation becomes the normal posture, with optional connected collaboration. | **Likely superseded as future product posture.** Its bounded first-slice rationale remains historical. | ADR-009, system architecture, security and collaboration models |
| Workspace recognition | Current Project creation materializes application-owned Project State from a template. | The Workbench inspects a folder or repository, recognizes or proposes a supported Specification boundary and can initialize missing structures. | **New foundational decision required.** Avoid treating arbitrary files as Product Knowledge without confirmation. | glossary, project model, architecture, project-start UX |
| Brownfield intake | The crystallized direction treats repositories as links or managed-file Sources, explicitly not cloned or synchronized; Source Capture is the only path to canonical knowledge. | The Workbench directly accompanies and inspects the workspace that contains Product Knowledge and implementation evidence. | **Reopen and probably partially supersede.** Preserve the rule that code and external content do not automatically become product truth. | brownfield sessions, project model, document-first UX, planning |
| Sources and Observations | Sources are non-canonical evidence captured deliberately into ordinary drafts; Findings exist inside Reviews or checks. | Observation becomes a general repository-visible input from humans, agents or tools, with explicit incorporation and retained disposition/provenance. | **Extend or introduce a distinct concept.** Determine overlap with Source, Finding, Contribution and Open Question before naming it canonically. | glossary, project model, collaboration and AI docs |
| External edits | Current canonical changes pass through application commands and saved Revisions. | Humans and agents may also modify supported workspace files outside the desktop application. | **New reconciliation decision required.** Define valid external changes, parse failures, concurrent writes, minimal deterministic serialization and protection from overwrite. | architecture, data/lifecycle contracts, UX |
| Interaction surfaces | The first slice separates browser presentation from server application commands. | Desktop document, CLI and MCP are peers over one knowledge engine; future integrations may use the same semantic operations. | **Extend and reorganize architecture.** Preserve command boundaries and semantic validation, but remove presentation-specific ownership of capabilities. | system architecture, new ADR, AI orchestration |
| CLI | Existing project tooling has engineering CLIs, but the product model does not define a first-class user CLI. | CLI supports human, agent and automation operations with human-readable/JSON output and reliable exit behavior. | **New product surface.** Its scope must avoid delivery management and raw storage coupling. | product goals, architecture, glossary |
| MCP and external agents | AI assistance is primarily modeled as personally configured in-product assistants and scoped Collaboration Requests. | External AI clients may inspect and propose changes through a Workbench MCP server. | **Extend AI participation model.** Preserve personal credentials, explicit invocation, traceability and project policy; add connection, permission and workspace-scope boundaries. | ADR-008, AI orchestration, collaboration, security, glossary |
| Canonical authority | The MVP Project Owner alone saves canonical Product Knowledge; contributors submit non-canonical responses. | Humans retain canonical authority while agents may receive read, propose or explicitly delegated mutation capabilities. | **Preserve default, reopen delegation.** Distinguish observability from authority and do not silently grant trust because a repository was opened. | ADR-003, ADR-008, permissions and provenance models |
| Agent-authored changes | AI responses remain non-canonical until a separate owner edit and save. | Interactive agents may create Workbench-managed semantic change sets visible in the document before acceptance. | **Extend existing contribution boundary.** Decide whether a change set is a draft, Contribution, new concept or repository record. | project model, UX, AI orchestration |
| Readiness | Readiness exists at several conceptual levels, but deterministic `Ready`, `Ready with Caveats` and `Not Ready` outcomes are concentrated in Prepare Handoff. | Readiness is continuously derivable for a scope, purpose and Product Knowledge revision; implementation alignment and release readiness remain distinct. | **Reframe and broaden.** Preserve deterministic evidence and scoped outcomes while decoupling them from package preparation. | project model, handoff model, UX, glossary |
| Handoff | ADR-004 makes an exported Implementation Handoff Package central because the product stops where implementation begins. | Prepared context snapshots remain useful for agents, people and external tools, but are not the terminal product moment. | **Reframe and possibly rename.** Preserve reproducible, bounded projections and immutable snapshots while demoting terminal-handoff semantics. | ADR-004, handoff sections, glossary, exports |
| Project Archive | ADR-024 defines a separate portable Project Archive because canonical Project State is otherwise application persistence and handoffs are one-way. | A repository-native canonical representation may already provide portability, branching and recovery. | **Reopen necessity and role.** An archive may still be useful for packaging, migration or non-repository resources, but cannot be assumed unchanged. | ADR-024, architecture, glossary |
| Impact and Stale propagation | Explicit relationships drive deterministic Stale and coverage/readiness cues after saved revisions. | The same engine should react to valid semantic changes from any surface or supported external edit. | **Preserve and generalize trigger boundary.** Propagation remains semantic, not file-path based. | project model, architecture, UX |
| Collaboration | The current model is online, project-scoped, asynchronous and server-mediated. | Canonical state is local/repository-resident; optional human collaboration may involve Git, shared services or both. | **Reopen collaboration architecture, preserve deliberate contribution semantics.** Do not infer that Git alone supplies discussion, permissions or canonicalization. | ADR-003, system architecture, collaboration UX |
| Security and trust | Server authorization, owner identity and AI governance protect canonical state. | A local companion reads potentially untrusted repository content and exposes local semantic operations to external clients. | **New threat model required.** Repository text is data, not trusted instructions; MCP connections need explicit scope, permissions and auditability. | security principles, system architecture, AI orchestration |
| Prototype programme | UX-006 and the active visual study were the current direction. | Product identity, persistence and application form must be reconsidered first. | **Pause, do not discard.** Resume bounded visual work only after the new foundations identify the right journeys and surfaces. | current focus, open questions, active visual session |
| Existing implementation | The authenticated Project-to-first-Goal slice proves bounded web architecture, ownership, persistence and document interaction. | The future target may require a different runtime and persistence model. | **Preserve as verified historical evidence, not default authorization.** No rewrite or migration is authorized here. | README, current focus, first-slice ADRs |

## Ordered Open Questions

The following questions should be resolved before stable architecture or a new
prototype direction is selected.

1. **Specification boundary** — How does the Workbench identify which files
   constitute one Specification, and when must the user confirm that boundary?
2. **Canonical storage contract** — What guarantees must the repository format
   provide for identity, ordering, relationships, provenance, revisions and
   deterministic rewriting?
3. **Folder versus Git repository** — Which capabilities require only a local
   workspace, and which require Git history, branches or review semantics?
4. **Supported discovery and initialization** — Which existing structures can
   be recognized, which can be imported and which Workbench-native structure
   can be created without guessing?
5. **Knowledge-engine boundary** — Is the engine an embedded library, a local
   service/daemon or another form, and how do desktop, CLI and MCP coordinate
   file watching, locking and transactions?
6. **External modification** — How are valid direct edits, invalid syntax,
   concurrent changes, renames and deletions reconciled without silent loss?
7. **Observation contract** — What minimum content, identity, provenance,
   scope and evidence references does an Observation need?
8. **Observation disposition** — Where and how are incorporated, retained,
   dismissed or superseded outcomes represented without turning the inbox into
   delivery workflow?
9. **Semantic change sets** — How are proposed additions, modifications,
   removals and renames reviewed atomically and connected to their informing
   Observations?
10. **Agent permissions** — Which MCP operations are read-only, proposal-only
    or canonical, and how are workspace trust, user confirmation, reversibility
    and audit handled?
11. **Implementation evidence and alignment** — What code, test, build or
    runtime evidence may be linked or inspected, and what conclusions may the
    Workbench safely derive from it?
12. **Readiness model** — How should specification readiness, implementation
    alignment and release readiness remain distinct while sharing evidence?
13. **Prepared context and handoff** — Which existing handoff concepts remain,
    which become context-snapshot concepts and which terminology should change?
14. **Local and connected collaboration** — How do repository changes, human
    review, identity, permissions and optional remote collaboration coexist?
15. **Existing-project migration** — What happens to the current server-backed
    implementation and its Project data if the repository-native direction is
    accepted?
16. **Open interoperability** — Which formats and semantic operations should be
    documented so agents and other tools can participate without depending on
    the desktop UI?

## Recommended Crystallization Sequence

After review and correction of this session:

1. settle the revised product identity and Product Engineering boundary;
2. define the conceptual Specification boundary and canonical storage
   invariants without prematurely choosing every field or file format;
3. define Observation and its relationship to Source, Finding, Contribution,
   Revision and Provenance;
4. define semantic change sets and human/agent authority;
5. define continuous readiness, implementation alignment and the future role
   of prepared context or handoff;
6. record the three-layer architecture and security boundary through one or
   more ADRs;
7. revise vision, principles, glossary, model, architecture and planning only
   after those decisions are accepted;
8. select a new bounded validation or prototype journey after the foundation
   is coherent.

## Documents Updated During Initial Capture

- `docs/sessions/2026/2026-09-28-01-repository-companion-direction-and-decision-impact-inventory.md`
- `docs/sessions/index.md`

## Crystallization Outputs

The later accepted discussion produced ADR-028 and coordinated updates to the
project vision, goals, principles, glossary, Project Model, system architecture,
AI orchestration, document-first UX direction and planning register. Earlier
ADRs remain visible with their superseded, reopened or historical scope
recorded explicitly.
