# Session — AI Disclosure Preparation Preview Validation

**Date:** 2026-07-22

**Session ID:** 2026-07-22-31

**Status:** Crystallized

---

## Context

Handoff disclosure is derived from current package scope and the project-owner disclosure setting. Before preparation, the owner needs to understand exactly what the package will disclose without introducing a separate dialog, manual editing surface, package-diff workflow or pre-preparation history event.

---

## Decision

The existing **Preview package boundary** action includes an owner-only **AI disclosure** section whenever the selected destination includes handoff.

The section shows:

- whether the package includes known activity entries or no known activity recorded for included scope;
- each manifest-equivalent included-scope entry's scope, assistance/declaration type, Assistance Request Type when known, response/status and explicit Provenance or Revision links; and
- the fixed caveat that the disclosure records known activity, not final-text authorship, comprehensive external-AI detection or omitted-package knowledge.

The owner may open the scoped trace or navigate to change the disclosure setting. The entries are derived and cannot be manually edited in the preview.

When the selected destination excludes handoff, the preview shows a compact read-only statement that no AI disclosure will be included and identifies the selected destination.

---

## Consequences

The owner can make an informed decision before preparation without leaving the current handoff flow. The preview stays aligned with the package boundary and trace limits, and does not expose raw prompts, assembled context or raw AI responses.

Previewing disclosure neither changes meaningful-definition checks nor readiness, and does not create a Handoff History event. A successful preparation alone records the resulting manifest-derived package outcome.

Exact visual grouping, disclosure summary wording, keyboard behavior and settings-navigation treatment remain UX validation work.

---

## Documents Updated

- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

---

## Recommended Next Step

Validate how a prepared Handoff History event summarizes included AI disclosure without becoming a trace browser, package-diff interface or archive-retention requirement.
