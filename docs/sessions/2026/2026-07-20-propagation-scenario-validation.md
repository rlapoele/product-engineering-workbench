# Session — Propagation Scenario Validation

**Date:** 2026-07-20

**Session ID:** 2026-07-20-07

**Status:** Crystallized

---

## Context

Follow-up work after defining the first-pass exact propagation rules.

The objective was to validate the propagation matrix against concrete artifact-change scenarios and confirm when the system should mark artifacts Stale versus creating coverage or readiness warnings.

---

## Validated Scenarios

| Scenario | Relationship Pattern | Deterministic Result | Rationale |
|---|---|---|---|
| Goal changes | User Need `supports` Goal; Feature `addresses` User Need; User Story `part_of` Feature; Requirement or Acceptance Criteria linked downstream | Mark User Needs and downstream Features, User Stories, Requirements or Acceptance Criteria Stale where their purpose or content depends on the changed Goal. | A Goal change may alter why downstream work exists or what success means. |
| Requirement changes | Acceptance Criteria `validates` Requirement; UI Requirement, Screen/View, User Flow, implementation guidance or tests depend on or derive from Requirement | Mark validating, derived or dependent downstream artifacts Stale. | Downstream behavior, validation and implementation guidance may no longer match the Requirement. |
| Acceptance Criteria archived | Acceptance Criteria `validates` Requirement | Create coverage/readiness warning on the Requirement rather than automatically marking the Requirement Stale. | The Requirement may still be accurate, but it may no longer be sufficiently validated. |
| Decision changes | Decision `explains` Requirement or Technical Constraint; other artifacts depend on the decision | Mark explained or dependent artifacts Stale when their rationale, constraint or behavior may have changed. | A changed Decision may invalidate the reasoning behind downstream artifacts. |
| Open Question resolved | Open Question `blocks` Feature, Requirement or validation | Mark blocked artifact Needs Review or Stale depending on whether existing content relied on an assumption now changed by the answer. | Resolution removes a block, but the affected artifact still needs confirmation or update before being considered valid. |

---

## Conclusion

The first-pass propagation model holds up against these scenarios.

The key distinction remains:

- use Stale when a related artifact may no longer be accurate;
- use a coverage/readiness warning when an artifact may now be under-supported, unvalidated, unaddressed or blocked without necessarily being inaccurate.

Open Question resolution is a useful edge case because it may remove a block without automatically validating the affected artifact.

Acceptance Criteria archival is a useful edge case because it removes validation coverage without necessarily changing the Requirement's meaning.

---

## Documents Updated

- `docs/knowledge/data-model/project-model.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
- `docs/sessions/session-active-work.md`

---

## Recommended Next Step

Continue with one of:

- validate propagation edge cases such as cycles, multi-hop propagation and conflicting relationship paths;
- validate the Context Assembly example for Prepare Handoff.
