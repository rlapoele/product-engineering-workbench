# Session — Conversation Outcome Links

**Date:** 2026-07-24

**Session ID:** 2026-07-24-16

**Status:** Crystallized

---

## Context

Outcome capture creates Product Knowledge from Conversation working memory. Users need to navigate in both directions between the source Conversation and its resulting artifacts without treating those internal links as implementation-handoff content.

## Decision

Successful outcome capture creates a **Conversation Outcome Link**. It is an internal, bidirectional provenance and navigation link visible from both the Conversation and the linked Product Knowledge, Decision or Open Question. It may also identify selected source messages. It is not an Artifact Relationship, Context Reference, Product Artifact or handoff item.

An Outcome Link whose target is Archived remains valid and is labeled **Archived**. If a target is genuinely unavailable because a future retention or recovery policy deleted or otherwise removed it, the link remains visible but is labeled **Broken** and retains the target title and identifier snapshot.

Only the link creator or Project owner may remove an Outcome Link. Removal deletes the connection, not either endpoint, and records a concise history event.

Conversation Outcome Links are never included in an Implementation Handoff Package, its Markdown files, manifest or any other handoff representation.

## Consequences

- Users can move directly between working-memory evidence and durable outcome without turning a Conversation into canonical Product Knowledge.
- Archived knowledge remains honestly reachable, while genuinely missing targets remain visible as broken traceability evidence.
- Link-removal authority is narrow but does not make provenance navigation permanently immutable.
- Handoff consumers receive implementation-relevant Product Knowledge only, without internal discussion navigation or provenance noise.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/open-questions.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Step

Validate the complete owner-facing outcome-capture journey: destination choice, review/editing and resulting Outcome Links.
