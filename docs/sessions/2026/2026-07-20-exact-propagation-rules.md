# Session — Exact Propagation Rules

**Date:** 2026-07-20

**Session ID:** 2026-07-20-06

**Status:** Crystallized

---

## Context

Follow-up work after crystallizing Artifact Change Impact Propagation.

The objective was to define first-pass deterministic rules for which relationship types should mark related artifacts Stale after an artifact update or archive.

---

## Decision

The MVP should distinguish two deterministic outputs:

- Stale propagation, meaning an artifact may no longer be accurate because upstream knowledge changed.
- Coverage or readiness warning, meaning an artifact may now be under-supported, unvalidated, unaddressed or blocked without necessarily being inaccurate.

This distinction prevents the system from marking artifacts Stale when the artifact is still accurate but has lost supporting coverage, validation or readiness evidence.

---

## First-Pass Matrix

| Relationship | Example | If Source Changes | If Target Changes |
|---|---|---|---|
| `supports` | Goal supports Vision | Maybe mark target Stale when target content aggregates or depends on the support. | Mark source Stale. |
| `addresses` | Feature addresses User Need | Usually create coverage/readiness warning rather than marking target Stale. | Mark source Stale. |
| `part_of` | User Story part_of Feature | Maybe mark parent Stale when parent content aggregates child content. | Mark source Stale. |
| `validates` | Acceptance Criteria validates Requirement | Usually create coverage/readiness warning rather than marking target Stale. | Mark source Stale. |
| `depends_on` | Feature depends_on Integration Decision | Usually no Stale propagation from dependent to dependency. | Mark source Stale. |
| `affects` | Risk affects Feature | Mark target Stale. | Maybe mark source Stale. |
| `explains` | Decision explains Requirement | Mark target Stale. | Maybe mark source Stale. |
| `blocks` | Open Question blocks Feature | Mark target Stale or Needs Review. | Usually no Stale propagation. |
| `derived_from` | Acceptance Criteria derived_from Requirement | Usually no Stale propagation from derived artifact to source. | Mark source Stale. |
| `relates_to` | weak generic link | No automatic Stale propagation. | No automatic Stale propagation. |

---

## Strong Automatic Stale Rules

The strongest automatic Stale propagation rules are:

- when an artifact changes, mark artifacts that `depend_on` it as Stale;
- when an artifact changes, mark artifacts `derived_from` it as Stale;
- when an artifact changes, mark artifacts that `validate` it as Stale;
- when an artifact changes, mark artifacts that `address` it as Stale;
- when an artifact changes, mark child artifacts that are `part_of` it as Stale;
- when an artifact changes, mark artifacts it `affects` as Stale.

---

## Conservative Rules

The system should be more conservative for:

- `supports`;
- `explains`;
- `blocks`.

These relationships may require artifact-type-specific behavior because the correct result depends on whether the changed artifact provides rationale, aggregation, validation context or a blocking condition.

The system should not automatically propagate Stale through `relates_to`.

---

## Coverage And Readiness Warnings

If a downstream or supporting artifact is archived, the upstream artifact may remain accurate but become less complete or less ready.

For example, if Acceptance Criteria that validate a Requirement are archived, the Requirement may still be accurate, but it may now need a coverage or readiness warning because it is no longer validated.

---

## Documents Updated

- `docs/knowledge/data-model/project-model.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
- `docs/sessions/session-active-work.md`

---

## Recommended Next Step

Validate the first-pass propagation matrix against concrete artifact-change scenarios.
