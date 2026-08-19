# Session — Screen / View Integrated Validation

**Session ID:** 2026-08-19-15

**Date:** 2026-08-19

**Status:** Crystallized

## Context

Screen / View has defined identity, fields, relationships, authoring, readable references and propagation. The model needs validation as a useful standalone interface-boundary artifact before User Flow is defined.

## Scenario

- `FEAT-001 Manage projects` lets a user view and organize their Projects.
- `FR-020 Make project creation available` requires the system to make project creation available to an authorized user.
- `SV-001 Project overview` has the purpose of helping the user understand their current Projects and begin creating one when needed.
- Its Key content and actions identify the Project list and **Create project** action. Its Key states include an empty state explaining that no Projects exist and how to start. A desktop Visual reference represents that empty state.
- `SV-001` `supports` `FEAT-001` and `depends_on` `FR-020`.
- One Acceptance Criterion states that, when the user has no accessible Projects, the Project overview identifies the empty condition and makes Create project available. It directly `validates` both `SV-001` and `FR-020` because the observable evidence genuinely covers the view and required behavior.

## Validation

- Purpose, content/actions, a user-facing state and visual reference make the view implementation-facing without prescribing a route, component tree or wireframe tool representation.
- The Feature, Requirement, Screen / View and Acceptance Criterion remain distinct and traceable rather than duplicating one another.
- Changing or archiving `SV-001` makes the Acceptance Criterion Stale and creates a coverage/readiness cue on `FEAT-001`.
- Changing or archiving `FR-020` makes `SV-001` Stale.
- No User Flow is required for the view to be useful; a future Flow may explicitly include it without changing the scenario's existing knowledge.

## Conclusion

The Screen / View model provides a coherent standalone interface boundary with enough product, visual and validation context for implementation handoff, while preserving the boundaries of future User Flow and UI Requirement work.

## Documents Updated

- `docs/knowledge/data-model/project-model.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
