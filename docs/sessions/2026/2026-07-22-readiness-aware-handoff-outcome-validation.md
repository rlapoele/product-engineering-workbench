# Session — Readiness-Aware Handoff Outcome Validation

**Date:** 2026-07-22

**Session ID:** 2026-07-22-01

**Status:** Crystallized

---

## Context

The readiness-aware handoff flow defines deterministic readiness outcomes for the selected handoff scope and its direct external dependencies. This session validated the core outcome rules against concrete scope scenarios.

---

## Validated Scenarios

### Partial scope with caveats

A user prepares a handoff for one Feature and its included Requirements. A direct external integration dependency is known but does not block the Feature, and one included Acceptance Criterion is Stale. Other required Specification sections are intentionally outside the selected scope.

**Result:** `Ready with Caveats`.

The Stale criterion and direct external dependency appear in the readiness report and caveat summary. Required sections outside the selected scope do not count against the selected handoff.

### Explicitly blocking external dependency

A selected scope is otherwise complete, but a direct external dependency is explicitly blocked by an unresolved Open Question.

**Result:** `Not Ready`.

The handoff still prepares the best available caveated package because the selected scope contains meaningful product definition.

### Included required section without content

The selected scope includes the required `Goals and Success Criteria` section, but it has no section content and no active contained Product Artifacts. All other selected content is complete.

**Result:** `Not Ready`.

An included required section without content is a deterministic readiness failure. This differs from intentionally excluding a required section from a partial scope, which does not count against readiness.

---

## Consequences

The initial readiness rules now distinguish scope boundaries, caveats and explicit blockers without expanding into a whole-Specification judgment.

Prepare Handoff remains useful even when readiness is Not Ready: it produces a caveated package for meaningful selected scope rather than acting as a delivery gate.

---

## Documents Updated

- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

---

## Recommended Next Step

Validate further edge cases, such as multiple simultaneous blockers, a selected individual artifact without its parent section, and a scope with no meaningful product definition.
