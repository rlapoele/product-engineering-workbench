# Session — Artifact Change Impact Propagation

**Date:** 2026-07-20

**Session ID:** 2026-07-20-05

**Status:** Crystallized

---

## Context

Follow-up work after validating Analyze Impact on a Requirement.

The objective was to clarify what should happen when a user updates or archives an artifact that has downstream dependencies.

---

## Decision

When a Product Artifact is updated or archived, the workbench should deterministically identify downstream artifacts that may have been impacted and mark them Stale.

The initial impact propagation should be ordinary system behavior over the Product Knowledge Graph, not AI judgment.

The system should use Artifact Relationships to identify downstream artifacts that may depend on, validate, derive from, belong to, or otherwise be affected by the changed artifact.

The system should record why each downstream artifact was marked Stale, including the triggering artifact, triggering Revision and relationship path when available.

Stale is the right artifact lifecycle state for this case.

Stale means the artifact may need review because upstream knowledge changed.

It does not mean the artifact is definitely incorrect.

---

## User Follow-Up

After impact propagation, the user should be able to review each Stale artifact and:

- update it;
- confirm that it remains valid;
- leave it Stale;
- archive it;
- create or update related Product Artifacts;
- create an Open Question when the impact cannot yet be resolved.

---

## AI Assistance

AI should not be required to identify the initial impact set.

After deterministic propagation, the interface may offer contextual AI assistance on Stale artifacts.

For example, the user may request recommendations for what may need to change.

This should use existing Assistance Request Types such as Analyze Impact, Review, Improve or Suggest Alternatives.

It may return existing Response Shapes such as Suggested Edit, Finding, Proposed Relationship, Proposed Artifact, Question or Summary.

No new top-level Assistance Request Type is needed for the MVP.

---

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/ai/ai-orchestration.md`
- `docs/knowledge/architecture/system-architecture.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
- `docs/sessions/session-active-work.md`

---

## Recommended Next Step

Refine exact propagation rules for which relationship types should mark downstream artifacts Stale.
