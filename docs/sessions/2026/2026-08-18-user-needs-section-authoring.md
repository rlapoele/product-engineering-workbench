# Session — User Needs Section Authoring

**Session ID:** 2026-08-18-05

**Date:** 2026-08-18

**Status:** Crystallized

## Context

The document needs a traceable bridge from intended users to later Core Features without duplicating User Profile notes or forcing authors to complete all needs for one profile before moving on.

## Decision

- `User Needs` contains independent User Need Product Artifacts in one ungrouped document list. A need may apply to one or more User Profiles, avoiding duplicated needs for shared user outcomes.
- A User Need requires explicit linked User Profile(s), a user-centred Need statement describing what the user needs to achieve or resolve, and an Expected outcome. The Need statement is its readable document heading; no duplicate title is required.
- `Actions` in the User Needs section always offers both `Add User Need` and `Add User Profile`.
- Adding a need from the section first selects one or more User Profiles. If none exists, the flow offers `Add User Profile` or cancel; creating a profile preserves and then resumes the private need draft with that profile selected.
- Adding a need from within a saved User Profile preselects that profile. A profile-local need from the product can inform the author but never silently creates, changes or replaces a User Need.
- User Needs use ordinary Product Artifact drafts, explicit `Done editing` Revisions, direct edit and secondary locally confirmed archive actions. A saved need must retain at least one linked User Profile.
- Profile-to-need relationships are explicit. Their exact relationship type can be decided with the User Need relationship model; any later impact feedback follows only explicit saved relationships.
- User Needs remains optional in the Simple Web Presence preset and required in the Standard Web App and Complex Product App presets. An empty selected required section participates in ordinary low-priority `What next?` coverage guidance.
- Rich-text formatting is deferred to the existing document-wide capability decision.

## Consequences

Authors can work in either a need-first or profile-first way while preserving one canonical User Need record. The section gives later Features an explicit user-value basis without turning profile notes into automatically maintained requirements.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/index.md`
