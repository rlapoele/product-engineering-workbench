# Session — Repository Collaboration And Semantic Concurrency

**Session ID:** 2026-09-28-03

**Date:** 2026-09-28

**Status:** Crystallized

## Context

After accepting the Repository Companion direction, the discussion examined
whether repository-resident Product Knowledge and a local Knowledge Engine
remain appropriate when several people work on the same Project.

The central conclusion was that files are the correct durable representation
but are not, by themselves, a complete collaboration mechanism. Git can
distribute and merge text, while the Knowledge Engine must understand Product
Knowledge identity, relationships, atomic operations and semantic validity.

## Accepted Direction

- Repository-resident files remain the durable canonical representation.
- The Knowledge Engine is the single interpreter and executor of semantic
  rules across desktop, CLI and MCP; humans retain authority over intent.
- The initial multi-person model is asynchronous repository collaboration.
  Participants normally work in separate working copies, branches or
  worktrees and synchronize through Git when available.
- A shared mutable or cloud-synchronized folder may be observed but is not a
  reliable concurrency, ordering, attribution or transaction model.
- Git textual merging is necessary evidence but not semantic validation. A
  clean merge may still produce a Semantic Conflict.
- Semantic Change Sets apply atomically against a known base Product Knowledge
  state and must not silently overwrite intervening work.
- Connected Collaboration may later add coordination capabilities without
  replacing repository files as canonical Product Knowledge.
- Real-time co-editing and CRDT or operational-transformation infrastructure
  are not the initial foundation.
- A dedicated Specification directory in the product repository remains the
  default. Separate Specification repositories or submodules remain later
  topology options rather than defaults.

## Deliberately Open

- the exact base-state or concurrency token;
- automatic versus human-required semantic reconciliation rules;
- the relationship between Workbench Revisions and Git commits;
- locking and coordination among several local Workbench surfaces;
- identity and Apply authority across Git and optional connected services;
- recovery from invalid, partial or schema-incompatible merged state; and
- the evidence that would justify synchronous real-time editing.

## Resulting Knowledge

- ADR-029 records the accepted collaboration and concurrency posture.
- System Architecture and the Project Model now make the separate-working-copy
  and semantic-reconciliation boundaries explicit.
- The glossary defines Connected Collaboration, Repository Working Copy and
  Semantic Conflict.
- ARCH-004 now owns the detailed concurrency and reconciliation contract.
