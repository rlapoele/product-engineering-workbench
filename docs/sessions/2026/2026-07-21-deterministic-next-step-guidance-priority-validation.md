# Session — Deterministic Next-step Guidance Priority Validation

**Date:** 2026-07-21

**Session ID:** 2026-07-21-14

**Status:** Crystallized

---

## Context

The first-pass deterministic `What next?` guidance model defines the priority order as: the current user's Edit-in-progress Drafts, explicit Open Question blockers, active impact outcomes, then empty required selected sections.

This session tested that order when all four conditions exist at the same time.

---

## Scenario

A user has:

- an Edit-in-progress Draft for a Goal;
- an Open Question that explicitly blocks a Feature;
- two Stale Requirements following a recent change; and
- an empty required `UX/UI Design Requirements and Interaction Notes` section.

---

## Result

The compact `What next?` view should show these three items, in order:

1. Continue the Goal draft.
2. Resolve the Open Question blocker.
3. Review the two Stale Requirements.

The required-but-empty UX/UI section remains available in the full guidance list rather than displacing the higher-priority items.

This result was accepted as the intended behavior. It preserves the user's active thinking first, then surfaces blocking knowledge and change impact, without treating required-but-empty sections as emergencies.

---

## Documents Updated

- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

---

## Recommended Next Step

Validate the same ordering with multiple simultaneous Edit-in-progress Drafts and multiple blockers when prototype or concrete-specification work begins.
