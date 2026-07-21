# Session — Readiness-Aware Handoff Flow

**Date:** 2026-07-21

**Session ID:** 2026-07-21-15

**Status:** Crystallized

---

## Context

Prepare Handoff already composes the best available caveated implementation package for a meaningful requested scope. This session clarified how a user should be made aware of readiness without turning readiness into an automatic handoff gate.

---

## Decision

### Validation and scope

Prepare Handoff offers `Validate Readiness` as an enabled-by-default option. When enabled, a deterministic Implementation Handoff Readiness check runs before preparation, then the package is prepared automatically. The user may disable validation and request a direct handoff.

Readiness validation applies only to the selected handoff scope and its direct external dependencies. It does not silently assess the entire Specification. An external dependency causes Not Ready only when it explicitly blocks the selected scope; otherwise it remains a caveat.

For the first handoff request for a Project/Specification and Handoff Profile, the entire Specification is selected. The user may narrow or otherwise modify the scope through the document outline. Selecting a section selects its active contained artifacts and subsections by default, while individual artifacts may be deselected.

The last selected scope is remembered per user, Project/Specification and Handoff Profile. The same key remembers whether readiness validation runs and whether the report is included. These are personal Handoff Preparation Preferences, not shared Project Knowledge or project-wide defaults.

### Readiness report

`Include readiness report in handoff` is enabled by default when readiness validation is enabled. It is unavailable when validation is disabled.

When selected, the package includes a standalone `READINESS_REPORT.md`; it is not embedded in `IMPLEMENTATION_BRIEF.md`.

The report contains:

- readiness outcome;
- selected scope;
- Handoff Profile and evaluation time;
- blockers;
- Stale artifacts and coverage/readiness warnings;
- relevant Risks, Assumptions and Open Questions;
- direct external dependencies; and
- deterministic recommended follow-up actions.

### Deterministic outcomes

| Outcome | Conditions |
|---|---|
| Not Ready | The selected scope lacks meaningful product definition; an active Open Question explicitly blocks included knowledge; or an included required section is empty. |
| Ready with Caveats | No Not Ready condition applies, but Stale artifacts, coverage/readiness warnings, non-blocking Open Questions, Risks, Assumptions or external dependencies require attention. |
| Ready | None of the above conditions apply. |

Intentionally excluding a required section from a partial handoff does not make that handoff Not Ready. Only an included required section that is empty has that result.

The readiness outcome is distinct from the package preparation outcome. Even when readiness is Not Ready, Prepare Handoff generates the best available caveated package for a meaningful scope, identified as `Prepared` or `Prepared with Caveats`.

---

## Consequences

Users receive deterministic, scope-accurate readiness information by default while retaining control to prepare a direct handoff.

Implementation consumers can receive the readiness evidence when the preparing user chooses to include it, without cluttering the implementation brief.

The flow remains outside delivery management: it does not create work assignments, gates, schedules or release controls.

---

## Documents Updated

- `docs/knowledge/ux/document-first-ui.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ai/ai-orchestration.md`
- `docs/knowledge/decisions/ADR-002-document-first-template-model.md`
- `docs/glossary/glossary.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

---

## Recommended Next Step

Validate the readiness outcome rules against concrete scope examples, including a partial handoff, a blocking external dependency and a scope with Stale artifacts but no blockers.
