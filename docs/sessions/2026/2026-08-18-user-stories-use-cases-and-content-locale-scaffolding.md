# Session — User Stories, Use Cases And Content-Locale Scaffolding

**Session ID:** 2026-08-18-08

**Date:** 2026-08-18

**Status:** Crystallized

## Context

The combined User Stories and Use Cases section must support both concise user-value statements and fuller interaction specifications without forcing one to become the other. Its fixed story wording also exposed the need to distinguish document-language scaffolding from workbench interface language.

## Decision

- User Stories and Use Cases are independent Product Artifact types within one section. Both require one primary Core Feature and use contextual related-knowledge creation when that prerequisite must be added.
- A User Story has one primary User Profile, required Intent and Benefit fields, and no duplicate title. Its profile is selected from the Core Feature's explicitly linked User-Need context. The document renders the enforced structure through a Content-Locale equivalent of `As a [profile], I want to [intent], so that [benefit]`.
- A Use Case has required Title, Primary actor, Goal, Trigger, ordered Main flow and Outcome. Preconditions, Alternate flows and a related User Story are optional. Its actor can be a User Profile or a plainly named external or system actor.
- A User Story and Use Case may be linked but neither is required to expand, replace or automatically create the other. Both use normal artifact drafts, Revisions, lifecycle and explicit relationship-based impact behavior.
- Use Case flows are controlled ordered steps, not general rich text.
- Content Locale governs document-facing headings, guidance, placeholder examples and fixed structural wording. Interface Locale governs workbench controls, form labels and validation. User-authored content is never automatically translated.
- The section is optional in the Simple Web Presence preset, recommended in Standard Web App and required in Complex Product App. Required empty-section coverage follows ordinary `What next?` guidance.

## Consequences

Authors can choose an appropriately lightweight or detailed behavior description without losing traceability to user value and core product capability. The explicit locale boundary allows structured document patterns to read naturally in the specification's language without tying the application interface to that language or mutating authored content.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/index.md`
