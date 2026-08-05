# ADR-024 — Project Archive And Import Contract

**Status:** Accepted

**Date:** 2026-08-06

---

## Context

The workbench already has an Implementation Handoff Package: a potentially partial, human-readable and AI-useful representation for downstream implementation. It is not a durable representation of all canonical Project State and therefore cannot safely serve backup, restore, cross-deployment transfer or reusable-project import.

The Project Owner requires Project portability for three related purposes: backup and restore, a user-directed move between accounts or deployments, and sharing a reusable independent starting point. The contract must preserve Product Knowledge without transferring authentication authority, secrets or deployment-specific state.

## Decision

Introduce a distinct **Project Archive**: a versioned, machine-oriented package representing one complete Project's transferable canonical state. It is separate from an Implementation Handoff Package and is the only accepted source for Project import.

The archive uses structured text data and carries managed Resource files. Its exact archive container, filename extension and physical file layout remain a later format-specification decision. It must have an authoritative manifest that identifies the archive-format version, package identity, source Project lineage and integrity information sufficient to validate the package before import. Human-readable generated files may accompany an archive later, but are not authoritative and are not required.

### Archive content

The archive retains transferable canonical Project knowledge and history, including:

- Project and Specification metadata and composition;
- Product Artifacts, relationships, Revisions and provenance;
- Reviews, Collaboration Requests and Contribution Responses;
- Handoff History and known AI activity records when they belong to the Project record;
- managed Resource bytes and their Resource References; and
- external Resource links and retained metadata, without downloading remote content.

The archive excludes:

- Conversations, their messages and Conversation Outcome Links;
- Better Auth records, sessions, provider links, credentials and personal AI configuration;
- current Project-owner or collaborator authority, invitations and access grants;
- private drafts, user-specific preferences and other personal presentation state;
- command-operation idempotency records, operational logs/ledger data and release evidence; and
- Railway or other deployment configuration.

An archive containing Product Knowledge is confidential and must receive the same handling boundary as other Product Knowledge. Its content must not enter application logs, telemetry, diagnostics or operational evidence.

### Import semantics

Import validates the manifest, supported format version, complete structured content, resource safety and referential structure before creating canonical state. An unsupported or invalid package is rejected without a partially visible Project.

Each successful import creates a new local Project. The server derives the importing user from the authenticated session and records that user as the new Project Owner. It does not trust an exported owner identity, restore a collaborator's access, recreate an invitation or transfer any session/credential authority.

Imported canonical records receive new local stable identifiers. The importer remaps every internal relationship consistently and retains source identifiers only as opaque import-lineage and historical-attribution data. Those source identifiers do not grant access, create a live cross-Project reference or establish current ownership.

Import never merges with, overwrites or mutates an existing Project. A user-directed move is export, import, verification, then any separate source cleanup; the workbench does not claim a distributed atomic move. The initial transferable unit is a complete Project containing its Specification. Standalone Specification import, in-place restore and a clean history-free template/fork export are deferred.

### Separation from implementation handoff

An Implementation Handoff Package remains a one-way generated representation for implementation consumers. It can be partial, profile-specific and intentionally omits internal state. It is never parsed as a Project Archive, and Project Archive import does not infer state from its Markdown or handoff manifest.

## Rationale

One full portable Project contract supports the three stated user needs without overloading a downstream implementation package with restore semantics. A structured text format makes a later public interchange specification practical for controlled extensions and utilities, while a manifest/version boundary allows evolution without guessing at old package meaning.

Creating a new locally owned Project is the safe common operation across backup, account/deployment movement and reuse. It avoids collision when an archive is imported more than once or beside its source, preserves server-derived authority and does not introduce merge/conflict behavior before the broader Product Artifact model is settled.

Excluding Conversations retains their working-memory boundary. Excluding identity, credentials, operational state and live authority keeps a portable Project package from becoming an unsafe deployment or account migration mechanism. Copying managed Resources makes the archive portable; retaining external links as links does not falsely claim remote content was backed up.

## Consequences

- Project Archive/import is future MVP scope, not first-slice implementation authorization.
- The later architecture must give archive creation and import a dedicated application boundary. File/archive codecs, resource storage and HTTP upload/download remain adapters; none may write canonical persistence directly.
- The format specification must define schema compatibility, integrity checks, size and resource limits, path safety, error results and the staged/atomic visibility behavior needed to avoid partial Projects.
- Import history needs a bounded representation of source lineage and historical attribution without retaining usable account identifiers or authority.
- A later clean reusable-project template/fork feature may discard selected history deliberately, but cannot silently redefine the complete-archive semantics.
- No archive encryption, signatures, sharing service, scheduled backup policy, incremental export, merge, overwrite, cross-deployment deletion or standalone Specification import is selected by this decision.

## Alternatives Considered

### Re-import an Implementation Handoff Package

Handoff packages are partial, profile-specific and made for downstream consumption. Reconstructing canonical state from generated Markdown would lose or invent information and would couple import to presentation formats.

### Preserve source record identifiers on import

This prevents importing an archive beside its source or twice into one destination. New local IDs with consistent remapping preserve local identity guarantees while source identifiers remain history only.

### Merge into or overwrite an existing Project

Either approach needs conflict rules, authority decisions, revision reconciliation and recovery semantics. A new Project is predictable and safe for the first portable form.

### Human-readable Markdown as the authoritative archive

Markdown is valuable for handoff, but does not reliably carry every structured relationship, revision and provenance detail. Versioned structured text is a better authoritative interchange contract.

## Related Documents

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/architecture/system-architecture.md`
- `docs/knowledge/decisions/ADR-004-implementation-handoff-package.md`
- `docs/knowledge/decisions/ADR-007-canonical-project-state.md`
- `docs/knowledge/decisions/ADR-009-online-first-offline-evolvable-posture.md`
- `docs/planning/open-questions.md`
