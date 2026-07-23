# Session — Manifest Readiness Validation State

**Date:** 2026-07-23

**Session ID:** 2026-07-23-06

**Status:** Crystallized

---

## Context

Handoff History and preparation confirmation already distinguish a validated handoff from a direct handoff. `manifest.json` is the authoritative machine-readable record of a package, so it must preserve the same distinction for human and AI implementation consumers.

---

## Decision

The manifest records three separate readiness-related facts:

- package result;
- readiness-validation state; and
- whether `READINESS_REPORT.md` is included.

Readiness-validation state is either:

- `evaluated`, with a readiness outcome; or
- `not_run`, with no readiness outcome.

For a direct handoff, the manifest records package result `Prepared`, readiness-validation state `not_run`, no readiness outcome, and that no readiness report is included. A `not_run` state must not be encoded as `Ready`, an empty ambiguous outcome or an inferred caveat summary.

---

## Consequences

Machine consumers can distinguish a package that passed, failed or skipped readiness evaluation without interpreting absent data. The manifest and its derived Handoff History event remain aligned while retaining their distinct roles: the manifest is package-authoritative; History is a compact immutable workbench record.

Exact JSON field names and schema validation are implementation specification work. They must preserve these conceptual states.

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

Validate whether a direct handoff package should include a concise human-readable statement that readiness validation was not run, in addition to the preparation confirmation, Handoff History and manifest state.
