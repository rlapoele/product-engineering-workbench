# Session — Direct Handoff Without Readiness Validation

**Date:** 2026-07-23

**Session ID:** 2026-07-23-03

**Status:** Crystallized

---

## Context

Prepare Handoff enables deterministic readiness validation by default, but a project owner may deliberately disable it for a direct handoff. The product must respect that choice without hiding known included knowledge or allowing an insufficient scope to bypass the non-optional package boundary.

---

## Decision

When readiness validation is disabled:

- the workbench does not calculate or present `Ready`, `Ready with Caveats` or `Not Ready`;
- it does not generate `READINESS_REPORT.md`; and
- it does not substitute a hidden or reduced non-blocking caveat summary.

The package-boundary preview explicitly states that readiness validation was not run.

The ordinary handoff still represents included Risks, Assumptions, Open Questions, Direct External Dependencies and other selected Product Knowledge. This is truthful package content, not a readiness outcome or substitute validation result.

Scope eligibility and meaningful-product-definition rules remain non-optional. A scope that is ineligible or lacks sufficient definition cannot be prepared, regardless of the readiness-validation setting.

---

## Consequences

The project owner can choose a direct export without the workbench silently applying a different validation mode. Handoff consumers can distinguish omitted validation from a positive readiness claim, while still receiving the known product knowledge selected for their package.

The package-boundary preview, not a synthesized caveat scan, is the clear disclosure point for the owner’s choice. Exact wording and visual treatment remain UX validation work.

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

Validate a concrete MeatLoop handoff journey that compares default readiness validation with a direct handoff for the same meaningful mixed scope, including how the preview and Handoff History distinguish the two outcomes.
