# Session — Bring Your Own AI

**Date:** 2026-07-24

**Session ID:** 2026-07-24-08

**Status:** Crystallized

---

## Context

The collaboration model previously described AI Contributor availability as application-provided and Project-level. That would imply that one person's enablement could make AI available to other collaborators, and leaves provider credentials, charges and model access ambiguous.

## Decision

The MVP adopts **Bring Your Own AI (BYO-AI)**. Provider and model credentials belong to an individual human user, not to a Project, project owner or group of collaborators.

A human user may enable AI support for themselves only after providing valid usable credentials. This makes that user's configured AI assistance available to that user alone. A project owner enabling AI support does not enable it for other project collaborators; each collaborator independently decides whether to configure and enable their own AI support.

An AI Contributor is therefore available in the context of the human user who invokes it. It does not hold a shared Project credential, consume another user's provider account or become independently available merely because another collaborator has enabled AI support. Known in-workbench AI assistance remains traceable and does not silently change Product Knowledge.

This decision does not settle whether the product exposes one generic AI Contributor or multiple specialized AI collaborators, nor the detailed Conversation representation of personally invoked AI contributions.

## Consequences

- Provider credentials, model access and associated usage are personal to the configuring human user.
- AI availability must be evaluated per current human user, alongside usable credentials and applicable Project settings; it is not an invitation-gated human collaborator or Project-wide switch.
- The product may continue to use capabilities, Assistance Request Types, Context Assembly and Review Lenses to define AI behavior without treating another user's AI configuration as available.
- Shared-Conversations behavior needs a separate decision: in particular, how a personally invoked AI contribution is shown to other participants and whether any provider or model information is disclosed.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/ai/ai-orchestration.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/decisions/ADR-003-asynchronous-transactional-collaboration.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Step

Define how a human's personally invoked AI contribution appears in a shared Conversation, including initiator attribution, visibility to participants and whether it can respond again without a new human invocation.
