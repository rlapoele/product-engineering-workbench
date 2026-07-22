# Session — Insufficient Handoff Scope Recovery Validation

**Date:** 2026-07-22

**Session ID:** 2026-07-22-14

**Status:** Crystallized

---

## Context

An eligible handoff scope can lack meaningful product definition and therefore cannot produce a package. This session validates how the scope-selector interaction explains and recovers from that condition without bypassing the no-package boundary or introducing a prescriptive workflow.

---

## Scenario

Alex prepares a MealLoop handoff for `FEAT-014 — Pause or resume subscription`.

Alex selects the `Core Features` section as the root and narrows it to `FEAT-014`. The Feature has a non-whitespace title and content, but the selected scope contains no Functional Requirement or Acceptance Criterion. An explicitly related requirement may exist elsewhere in the Specification, but it is not yet included in this Definition Scope.

The selection is section-rooted and therefore eligible, but it is not meaningful enough for an `Implementation Handoff` package.

---

## Validated Journey

1. Alex selects **Prepare Handoff**, chooses **Customize scope**, retains the `Core Features` section root and narrows it to `FEAT-014`.
2. The scope panel reports that eligibility passes, but meaningful definition does not: Feature definition passes; related Functional Requirement and acceptance coverage fail. Prepare Handoff is unavailable.
3. When readiness validation is enabled, the result is `Not Ready` because the scope lacks meaningful product definition. Disabling validation does not remove the meaningful-definition feedback or enable preparation.
4. Alex selects the failed Functional Requirement check. The panel preserves the partial scope and navigates Alex to relevant Product Knowledge or ordinary contextual actions.
5. Alex either includes an existing explicitly related Functional Requirement in the Feature Definition Scope, or creates one through the ordinary Functional Requirements action and explicitly relates it to `FEAT-014`.
6. After Alex saves the change, the resulting Revision triggers deterministic re-evaluation. The Functional Requirement check passes, while acceptance coverage remains unmet until explicit validating criteria are included.
7. Alex includes existing Acceptance Criteria or creates them through ordinary document actions, then explicitly relates each criterion to validate the included Functional Requirement.
8. After the relevant Revision, all Feature meaningful-definition checks pass. Ordinary readiness evaluation may then report independent blockers or caveats; it no longer treats insufficient product definition as the reason preparation is unavailable.
9. Alex can preview and prepare the handoff when the meaningful-definition gate passes. The result is `Prepared` or `Prepared with Caveats` according to the remaining readiness outcome.

---

## Decision

For an eligible but insufficient Definition Scope, the scope selector must:

- preserve the user's partial scope and selected package roles while the user navigates or edits the document;
- identify each unmet deterministic definition check and its concrete reason;
- navigate to relevant Product Knowledge or ordinary contextual actions when requested;
- re-evaluate the scope after each saved Revision; and
- keep Prepare Handoff unavailable until the applicable meaningful-definition rule passes, regardless of the readiness-validation preference.

The selector must not create Product Knowledge, Artifact Relationships or Acceptance Criteria automatically. It also must not turn missing definition into tasks, assignments or a prescribed authoring sequence.

---

## Consequences

The no-package boundary is actionable without being coercive: users receive a precise explanation and retain full control over how to address it.

Meaningful definition, readiness and package preparation remain distinct. A failed definition check prevents package preparation; once definition passes, independent readiness blockers or caveats may still lead to `Prepared with Caveats` rather than another no-package condition.

Exact navigation behavior, panel persistence treatment, desktop and mobile controls, and warning wording remain prototype work.

---

## Documents Updated

- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

---

## Recommended Next Step

Validate an integration-centered mixed handoff in which the user initially includes only an external-system reference, then distinguishes missing integration behavior from an external dependency caveat.
