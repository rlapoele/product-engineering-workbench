# Session — Handoff Scope Selector Interaction

**Date:** 2026-07-22

**Session ID:** 2026-07-22-12

**Status:** Crystallized

---

## Context

Mixed-scope handoffs require users to explicitly distinguish Definition Scope, Supporting Context, intentionally outside knowledge and Direct External Dependencies. This session defined the first-pass interaction model for making those roles usable in the document-first Prepare Handoff flow.

---

## Decision

Prepare Handoff uses a scope panel over the existing document outline, rather than a separate record-selection screen.

For the first handoff, the panel starts with the entire Specification as Definition Scope. Readiness validation and readiness-report inclusion are enabled. Preparing this default handoff confirms the whole-Specification Definition Scope. The user may choose Customize scope for a partial handoff.

In customization mode, selected sections and artifacts expose these explicit contextual actions:

- Add to Definition Scope;
- Add as Supporting Context;
- Mark as outside this handoff; and
- Remove from handoff.

Mark as outside is available only for directly related knowledge that the user wants the package to name as intentionally excluded. An item has one selected package role at a time.

Direct External Dependencies are derived from Definition Scope relationships. The panel shows them separately; users cannot relabel them as included knowledge, but may add available information about one as Supporting Context.

The panel displays deterministic minimum-definition checks for each Definition Scope. It may navigate to relevant Product Knowledge or ordinary contextual actions, but never auto-adds missing knowledge. Shared Functional Requirements and Acceptance Criteria appear once and identify the Definition Scopes they serve.

Before preparation, Preview package boundary shows the Definition Scope, Supporting Context, directly related omissions and Direct External Dependencies that the export will contain.

---

## Consequences

Users retain explicit control over what implementation consumers are asked to implement, while seeing deterministic consequences before generating a package.

The first interaction model is device-neutral. Exact desktop and mobile controls, keyboard behavior, visual layout and warning wording remain subject to prototype validation.

---

## Documents Updated

- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/open-questions.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

---

## Recommended Next Step

Validate the scope-selector interaction through a low-fidelity prototype or a concrete step-by-step user journey.
