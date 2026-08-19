# Session — User Flow Integrated Validation

**Session ID:** 2026-08-19-22

**Date:** 2026-08-19

**Status:** Crystallized

## Context

User Flow now has a structured journey model, explicit relationships, authoring, stable references and propagation rules. The model needs validation through a concrete user journey before UI Requirement work begins.

## Scenario

- A Project Owner is the primary User Profile.
- `FEAT-001 Manage projects` is supported by `FR-020 Make project creation available`.
- `SV-001 Project overview` has an empty state and exposes Create project.
- `SV-002 Create project` provides the creation form.
- `UF-001 Create first project` begins when the Project Owner arrives at the empty Project overview and ends when a newly created Project appears in the populated overview.
- Its ordered steps capture arriving at the empty overview and receiving the empty-state guidance; choosing Create project and receiving the form; and submitting valid details and returning to the populated overview with confirmation.
- Its Intentional exit covers Cancel from the form and the resulting return to the overview. Its Error recovery path covers a known validation failure with visible correction guidance and retry.
- The Flow `supports` `FEAT-001`, `depends_on` `FR-020`, and explicitly includes both Screen / Views through its Journey steps.
- One Acceptance Criterion may validate both `UF-001` and `FR-020` when its observable evidence covers the complete journey and required project-creation behavior.

## Validation

- The steps make entry, action, relevant state, feedback and continuation implementation-facing without becoming an implementation route or test script.
- Intentional cancellation and system-initiated validation recovery remain distinct and readable.
- Changing an included Screen / View or the primary User Profile makes `UF-001` Stale.
- Changing `UF-001` makes its directly validating Acceptance Criterion Stale and creates a coverage/readiness cue on `FEAT-001` without making the Screen / Views or Functional Requirement Stale.

## Conclusion

The selected User Flow model provides a coherent, traceable representation of a cross-view user journey and its known unhappy paths. No additional structure is needed before defining UI Requirements.

## Documents Updated

- `docs/knowledge/data-model/project-model.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
