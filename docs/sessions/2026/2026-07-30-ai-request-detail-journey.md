# Session — AI Request Detail Journey

**Session ID:** 2026-07-30-01  
**Date:** 2026-07-30  
**Status:** Crystallized

## Context

The request lifecycle, AI-specific On Hold state, role-specific actions and request-detail structure were already defined. This session validates the complete owner-only AI request journey, including interruption, privacy, explicit resume, response handling and terminal cancellation.

## Journey Validated

1. Alex creates a private Draft addressed to Alfred, Alex's enabled usable Personal AI Assistant.
2. Alex explicitly chooses **Submit and ask Alfred**. The request records `Submitted` and becomes `In Progress` only when Alfred has actually begun work.
3. If Alfred's processing is technically interrupted, or Alex's AI eligibility becomes unavailable, the request moves to AI-only `On Hold`. Alex's request detail and list show the meaningful On Hold update with a compact `AI assistance unavailable` state.
4. Provider, model, credential, credit and detailed technical-failure information remain private. Alex sees neither streaming nor incomplete assistant response text.
5. Restoring eligibility changes neither status nor Last updated and does not reorder the request.
6. Alex explicitly chooses **Resume Alfred**. That records a new invocation, updates Last updated, returns the request through `Submitted`, and moves it to `In Progress` only when work starts. Resume may make a best-effort continuation from private incomplete assistant working state or retry from the retained request and recorded context; it does not promise a provider-side checkpoint.
7. Alfred submits one bounded Contribution Response. The request becomes `Responded`; Alex may **Acknowledge**, **Act On** or later **Reopen** it. Neither the response nor handling changes canonical Product Knowledge.
8. As the terminal alternate path, Alex may **Cancel request** while the request is Submitted, In Progress or On Hold. A Cancelled request remains retained read-only evidence and cannot be reopened.

## Decision

While an AI request is `In Progress` or `On Hold`, its owner sees only the compact request state. Incomplete assistant output may be retained privately only to support a best-effort resume. It is never presented as streaming or partial response text, a Contribution Response, lifecycle-history content or canonical Product Knowledge.

## Consequences

- A submitted Contribution Response remains the sole boundary at which AI output becomes reviewable request content.
- An interruption cannot make incomplete output look like a completed contribution.
- Explicit resume remains meaningful even when private working state is unavailable, because retry uses the retained request and immutable recorded context.
- The journey adds no automatic retry, delivery-management state, provider checkpoint guarantee or private-configuration disclosure.

## Documentation Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/knowledge/decisions/ADR-003-asynchronous-transactional-collaboration.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Topic

Detail contributor selection using both capability and availability, while preserving one-recipient requests, Project-role boundaries and owner-only personal AI access.
