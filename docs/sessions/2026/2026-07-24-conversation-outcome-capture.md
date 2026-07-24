# Session — Conversation Outcome Capture

**Date:** 2026-07-24

**Session ID:** 2026-07-24-15

**Status:** Crystallized

---

## Context

Conversations are working memory and must never silently become canonical Product Knowledge. The product needs an explicit, document-first interaction that distinguishes ordinary copying from the Project owner's deliberate creation or update of durable knowledge.

## Decision

Any human with access to a Conversation may copy the entire Conversation, one or more individual messages, or selected text to the clipboard. Copying has no canonical effect.

Only the Project owner may use **Create from conversation**. On desktop, the Conversation header exposes **Copy** to humans with access and **Create from conversation** to the owner. Selecting either action locally replaces the header controls with a source choice:

- **Entire conversation**; or
- **Individual messages**.

Individual-message mode lets the user select one or more messages in the thread. The action then becomes **Copy selection** or **Create from selection**. Mobile uses an explicit tap action; a swipe may supplement it but is not the sole route.

After choosing source material, **Create from conversation** offers: create a new Product Artifact (with artifact-type choice), record a Decision, track an Open Question or update existing Product Knowledge. The normal creation or editing flow opens with the selected material as source evidence or draft input. The Project owner must review and explicitly save; only that save creates a canonical record or Revision.

The saved record retains provenance to the Conversation and, where applicable, the selected source messages. The Conversation then presents a compact derived outcome link. This does not make the Conversation canonical, imply agreement by participants, close it or add a message. It may be performed from a Closed Conversation without reopening it.

Text-range capture as outcome source is deferred from the MVP. A formal non-owner request for the Project owner to crystallize Conversation material is also deferred; contributors may use ordinary Conversation messages to raise that need.

## Consequences

- The MVP offers precise, reviewable source selection without requiring rich text-range capture.
- The Project owner retains clear accountability for canonical knowledge created from working memory.
- Clipboard use remains uncomplicated and available to every human who can access the source material.
- Conversation provenance can be broad or message-specific without copying the transcript into canonical knowledge by default.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/open-questions.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Step

Validate the complete owner-facing outcome-capture journey: destination choice, review/editing and resulting outcome links.
