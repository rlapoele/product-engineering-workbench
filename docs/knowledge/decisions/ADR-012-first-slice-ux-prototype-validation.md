# ADR-012 — First-Slice UX Prototype Validation

**Status:** Accepted

**Date:** 2026-08-01

**Updated:** 2026-08-03

---

## Context

The first implementation slice has a selected user journey, system boundaries and data lifecycle contracts, but these need an executable coherence check before a production interface or visual-design system is chosen. The project is currently solo and cannot obtain external participants while it writes specifications, so the pre-technology evidence model must not represent owner testing as independent usability or accessibility validation.

## Decision

Use a low-fidelity interactive journey prototype and a documented solo Prototype Review before technology selection.

The prototype covers authenticated entry; the calm no-Projects home; Project creation with required title, optional description, editable Content Language pre-filled from the resolved Interface Locale and the fixed starter; empty Specification orientation; local `Add Goal`; inline title/content editing; `Done editing`; saved Draft Goal presentation; and later return to the Project.

It must simulate project-creation and Goal-save pending and failure states. Failures preserve the relevant entered or visible draft data, permit retry and never present false saved state. The saved Goal presents a textual Draft status and concise confirmation, then receives focus.

Keyboard validation covers sequential and visible focus, keyboard activation, labelled controls, focus entry into the Goal editor, focus after save, and accessible error feedback. Status and error communication cannot rely on color alone.

The solo review asks the Project Owner to run the journey of capturing an initial outcome for a new product idea and returning to it later, while deliberately assessing the first-time-user perspective. It checks whether the prototype expresses the private-draft and canonical-saved-state distinction, fixed starter, explicit save action and recovery from simulated failure. It records known limits instead of asserting independent user comprehension.

The review uses a low-fidelity clickable prototype with simulated pending and failure states, not product implementation. Its state map covers no-Projects home; Project creation; missing-title validation; Project-creation failure and retry; empty Specification; local Goal creation; inline editing; explicit-save comprehension; Goal-save failure, retry or discard; saved Draft Goal; and Project return. Include a scenario in which the intended Content Language differs from the displayed Interface Locale. Run a keyboard-only pass over the same states and a preliminary screen-reader-oriented pass where meaningful in the prototype. Record the state or branch exercised, result, discovered issue, known limit and, when layout is in scope, the viewport assumption.

Classify a false saved-state presentation, unsafe recovery failure or essential keyboard blocker as critical. Technology selection requires the documented solo review to cover the declared state map with no unresolved critical contradiction, false saved-state presentation, unsafe recovery path or essential keyboard blocker. This threshold establishes a coherent interaction direction for a later implementation decision; it is neither independent usability evidence nor an accessibility-conformance claim.

During execution and building, recommend iterative independent first-time-user sessions and accessibility input where feasible, alongside the engineering-quality baseline's browser, keyboard and screen-reader-oriented checks. These recommendations apply to the working product and its intended users; they are not a pre-technology-selection requirement.

Persistent draft resumption across navigation, browser-locale detection, interface-language settings, translated interface content, authentication mechanics, offline behavior, visual styling, alternative starters, collaboration, AI and handoff are outside this validation model.

## Rationale

The first slice needs to establish a coherent document-first value loop and save boundary before implementation hardens an interaction model. A low-fidelity prototype lets the Project Owner check intended states, recovery and preliminary accessibility semantics without falsely treating solo work as independent research. Independent user and accessibility input has greater value when a working product makes those evaluations meaningful.

## Consequences

- The prototype must include essential empty, pending, error, saved and keyboard states rather than only the happy path.
- `Done editing` is treated as a label to validate for user comprehension, not an assumption that users understand it automatically.
- Draft preservation after a failed save is required for recovery, while navigation-persistent draft resumption remains deferred.
- A recorded solo Prototype Review is the proportional pre-technology evidence gate; its stated limits remain visible.
- Independent first-time-user and broader accessibility input are execution-stage recommendations, not evidence manufactured during specification work.
- Prototype results may refine UX wording or interaction details, but do not change the selected Product Knowledge or data-authority boundaries without an explicit subsequent decision.

## Alternatives Considered

### Happy-path static wireframes

These would be faster to create but would not validate action discovery, explicit save comprehension, error recovery or keyboard behavior.

### High-fidelity production prototype before validation

This would encourage premature visual and technology decisions before the basic interaction is understood.

### Five independent sessions before technology selection

This would provide stronger independent usability evidence, but is unavailable during the current solo specification phase and would delay a reversible technology-selection decision beyond the evidence that this prototype can responsibly provide.

### Treating solo testing as independent usability or accessibility validation

This would overstate what an owner can establish from their own prototype review and obscure the need for later working-product evaluation.

### Low-fidelity interactive journey validation

This was selected because it tests the most consequential first-use and save boundaries with proportional effort.

## Related Documents

- `docs/knowledge/ux/document-first-ui.md`
- `docs/knowledge/decisions/ADR-010-first-slice-system-boundaries.md`
- `docs/knowledge/decisions/ADR-011-first-slice-data-and-lifecycle-contracts.md`
- `docs/sessions/2026/2026-07-31-mvp-implementation-cut.md`
