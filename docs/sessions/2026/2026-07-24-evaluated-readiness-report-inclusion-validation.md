# Session — Evaluated Readiness Report Inclusion Validation

**Date:** 2026-07-24

**Session ID:** 2026-07-24-05

**Status:** Crystallized

---

## Context

Readiness validation and readiness-report inclusion are separate preparation choices. A report is enabled by default when validation runs, but the project owner may omit it. The package must remain truthful about the evaluated outcome and about which files it contains.

---

## Validated Batch

Alex prepares two pairs of meaningful MeatLoop checkout handoffs after readiness validation:

| Outcome | Report included | Report omitted |
|---|---|---|
| `Ready with Caveats` because a tax-service contract is unavailable but non-blocking | README links to `READINESS_REPORT.md`; manifest records `evaluated`, `ready_with_caveats` and report included; History records `Ready with Caveats — readiness report included`. | README keeps the same outcome and explanation without a link; manifest records the same evaluation and report not included; History records `Ready with Caveats — readiness report not included`. |
| `Not Ready` because Stripe 3-D Secure is explicitly blocked | README links to the report after its blocking-condition explanation; manifest records `evaluated`, `not_ready` and report included; History records `Not Ready — readiness report included`. | README keeps its blocking-condition explanation without a link; manifest records the same evaluation and report not included; History records `Not Ready — readiness report not included`. |

---

## Decision

For every evaluated readiness outcome, readiness-report inclusion is owner-selectable.

Report inclusion changes only whether `READINESS_REPORT.md` appears in the package and whether the README links to it. It does not change readiness outcome, package result, package boundary or AI disclosure.

`manifest.json` and Handoff History explicitly retain the report-inclusion state. The README does not add a separate “report not included” statement when the owner omits it.

---

## Consequences

The owner retains control over package detail without making the prepared outcome ambiguous. Consumers can use the manifest or Handoff History to establish whether detailed readiness evidence accompanied a particular package.

---

## Documents Updated

- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

---

## Recommended Next Step

Validate one final cross-representation matrix spanning readiness state, report inclusion and AI-disclosure state, then decide whether the handoff README/readiness/disclosure thread is complete enough to move on.
