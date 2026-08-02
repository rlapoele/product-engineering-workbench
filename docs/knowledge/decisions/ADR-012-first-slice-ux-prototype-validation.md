# ADR-012 — First-Slice UX Prototype Validation

**Status:** Accepted

**Date:** 2026-08-01

---

## Context

The first implementation slice has a selected user journey, system boundaries and data lifecycle contracts, but these do not prove that users can discover and understand the document-first flow. A prototype needs to validate interaction comprehension, state feedback and recovery before a production interface or visual-design system is chosen.

## Decision

Use a low-fidelity interactive journey prototype and observed task-validation script for one first-time Project Owner.

The prototype covers authenticated entry; the calm no-Projects home; Project creation with required title, optional description, editable Content Language pre-filled from the resolved Interface Locale and the fixed starter; empty Specification orientation; local `Add Goal`; inline title/content editing; `Done editing`; saved Draft Goal presentation; and later return to the Project.

It must simulate project-creation and Goal-save pending and failure states. Failures preserve the relevant entered or visible draft data, permit retry and never present false saved state. The saved Goal presents a textual Draft status and concise confirmation, then receives focus.

Keyboard validation covers sequential and visible focus, keyboard activation, labelled controls, focus entry into the Goal editor, focus after save, and accessible error feedback. Status and error communication cannot rely on color alone.

The validation task asks users to capture an initial outcome for a new product idea and return to it later. It assesses whether they can complete that journey, distinguish private draft from canonical saved state, understand the fixed starter and explicit save action, and recover from simulated failure without explanation.

Execute the validation as five observed, moderated 30–45 minute sessions with first-time product-specification creators. Use a low-fidelity clickable prototype with simulated pending and failure states, not product implementation. The state map covers no-Projects home; Project creation; missing-title validation; Project-creation failure and retry; empty Specification; local Goal creation; inline editing; explicit-save comprehension; Goal-save failure, retry or discard; saved Draft Goal; and Project return. Include a scenario in which the intended Content Language differs from the displayed Interface Locale. Run a separate keyboard-only and screen-reader-oriented pass over the same states.

Capture independent completion, hesitation, incorrect mental models, recovery behavior and participant wording. Classify a false saved-state belief, unsafe recovery failure or essential keyboard blocker as critical. Technology selection requires independent core-journey completion by at least four of five participants, no retained false saved-state belief after recovery scenarios, and no unmitigated critical keyboard or screen-reader-oriented issue. These criteria guide a qualitative evidence review rather than replacing it with a score.

Persistent draft resumption across navigation, browser-locale detection, interface-language settings, translated interface content, authentication mechanics, offline behavior, visual styling, alternative starters, collaboration, AI and handoff are outside this validation model.

## Rationale

The first slice needs to prove the document-first value loop and its save boundary before implementation hardens an interaction model. A low-fidelity prototype concentrates on comprehension and recovery rather than technology, visual polish or unvalidated feature scope.

## Consequences

- The prototype must include essential empty, pending, error, saved and keyboard states rather than only the happy path.
- `Done editing` is treated as a label to validate for user comprehension, not an assumption that users understand it automatically.
- Draft preservation after a failed save is required for recovery, while navigation-persistent draft resumption remains deferred.
- Prototype results may refine UX wording or interaction details, but do not change the selected Product Knowledge or data-authority boundaries without an explicit subsequent decision.

## Alternatives Considered

### Happy-path static wireframes

These would be faster to create but would not validate action discovery, explicit save comprehension, error recovery or keyboard behavior.

### High-fidelity production prototype before validation

This would encourage premature visual and technology decisions before the basic interaction is understood.

### Low-fidelity interactive journey validation

This was selected because it tests the most consequential first-use and save boundaries with proportional effort.

## Related Documents

- `docs/knowledge/ux/document-first-ui.md`
- `docs/knowledge/decisions/ADR-010-first-slice-system-boundaries.md`
- `docs/knowledge/decisions/ADR-011-first-slice-data-and-lifecycle-contracts.md`
- `docs/sessions/2026/2026-07-31-mvp-implementation-cut.md`
