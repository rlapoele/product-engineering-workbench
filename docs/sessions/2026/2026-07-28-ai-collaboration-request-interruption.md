# Session — AI Collaboration Request Interruption

**Date:** 2026-07-28

**Session ID:** 2026-07-28-05

**Status:** Crystallized

---

## Context

The Collaboration Request lifecycle needed to apply to Personal AI Assistants without allowing autonomous activity or exposing the owner's Bring Your Own AI configuration. In particular, technical interruption and lost AI eligibility needed a truthful visible state.

## Decision

An AI-targeted Collaboration Request may select only the requestor's own enabled, usable Personal AI Assistant. Selecting an assistant or preparing a Draft does not invoke it. The requestor's explicit **Submit and ask** action invokes the assistant, recording Submitted and moving to In Progress only after the assistant has actually begun work.

`On Hold` is an AI-specific Collaboration Request status. It records either technical interruption after processing began or loss of the owner's AI eligibility before or during processing. It is not used for human recipients or as a general delivery-management state.

Restoring AI eligibility does not resume a request automatically. Only the assistant owner may explicitly choose **Resume assistant**, which is a new invocation that resumes or retries the same private response work. It may use a preserved private draft when available, but does not promise a provider-side processing checkpoint. The request remains On Hold until that explicit action is taken or the requestor cancels it.

An AI assistant does not Decline, Cancel or Resume a request autonomously. Insufficient context produces a bounded Question or caveated response; technical inability produces On Hold. The ordinary request surface may say only that AI assistance is unavailable. Provider, model, credential, credit and detailed technical-failure information remain private to the owner’s settings.

## Consequences

- In Progress truthfully means that the assistant actually began processing, even when brief.
- On Hold distinguishes a technical or eligibility interruption from a human Decline and from a completed response.
- Alex retains explicit control over every initial and resumed AI invocation.
- Known AI activity records invocation, start, hold, resume and response events without exposing private configuration in the ordinary request surface.
- No AI lifecycle event directly creates or changes Product Knowledge.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/ai/ai-orchestration.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/knowledge/decisions/ADR-003-asynchronous-transactional-collaboration.md`
- `docs/planning/open-questions.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Step

Validate the complete standalone Collaboration Request journey with paired MeatLoop scenarios: one human recipient who responds after In Progress, and one Personal AI Assistant that enters On Hold and is explicitly resumed.
