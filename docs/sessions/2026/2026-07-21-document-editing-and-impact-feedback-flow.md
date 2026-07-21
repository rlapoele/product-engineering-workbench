# Session — Document Editing and Impact Feedback Flow

**Date:** 2026-07-21

**Session ID:** 2026-07-21-12

**Status:** Crystallized

---

## Context

The Product Engineering Workbench has a document-first user experience over structured canonical Product Knowledge. This session clarified how a user moves from an empty Specification outline to adding, selecting, editing and committing Product Artifacts without exposing an intrusive record-management interface.

The objective was to make the interaction consistent across desktop and mobile while preserving explicit Revision and deterministic impact-propagation boundaries.

---

## Decision

### Empty document and contextual actions

After selecting a template and project options, a user sees an empty Specification outline with the selected section titles but no substantive content or Product Artifacts.

The document is an actionable canvas. It must not permanently display every available action, as that would create visual pollution.

On desktop, hover reveals a neutral contextual-action control for the relevant scope. On mobile, a tap or equivalent touch gesture invokes the equivalent action menu. In both cases, the first interaction asks the workbench to show the actions available at that scope; it must not immediately apply an action.

Blank space within a section opens the section action menu. An existing Product Artifact opens its own action menu. Actions are explicit but appear inside the menu: an empty `Goals and Success Criteria` section may offer `Add Goal`, while an existing Goal may offer `Edit` and other Goal-specific actions.

### Inline artifacts and selection

Choosing `Add Goal` inserts a Goal inline at the selected document location and begins editing immediately. Essential fields such as title and content are edited inline. More complex type-specific fields, relationships, provenance and review information remain progressively available through contextual actions.

After editing, the artifact renders primarily as normal document prose with subtle, accessible artifact cues. It should not visually dominate the specification as a heavy card or record.

Selecting or tapping rendered artifact prose opens its action menu rather than starting edit mode. The user selects `Edit` explicitly to enter the inline editing surface. This produces three states: reading, selected and editing.

### Edit-in-progress drafts and revisions

An edit-in-progress draft is a persistent, private working copy owned by the user editing an artifact. It is separate from the Product Artifact lifecycle, the current canonical Revision and shared Product Knowledge.

When a user leaves the editing surface to read elsewhere or navigate elsewhere, the workbench preserves the edit-in-progress draft without prompting the user or automatically marking it done. When the user later returns to act on the artifact, the action menu offers:

- `Keep editing draft`;
- `Discard changes`; and
- `Done editing`.

Only `Done editing` creates a new Revision, updates canonical Product Knowledge and evaluates deterministic Artifact Change Impact Propagation. Typing or preserving an edit-in-progress draft must not create a Revision or mark related artifacts Stale.

### Impact feedback

After `Done editing`, the Revision applies immediately. The workbench shows a collapsed, non-modal impact disclosure anchored to the edited artifact. It may show a compact affected-artifact count and can expand to a small navigable list.

This transient disclosure disappears when the user acts outside the edited artifact or navigates to another page. It must not interrupt the user with a modal.

Affected artifacts retain persistent, accessible document cues for their active impact result. The document outline also displays aggregate indicators on affected sections, separately distinguishing Stale artifacts from coverage/readiness warnings.

---

## Consequences

The document remains readable as prose while supporting identifiable structured Product Artifacts and explicit, scope-aware actions.

Artifact changes have a deliberate Revision boundary, ensuring deterministic impact propagation remains meaningful and does not react to incomplete user typing.

The interaction rules are a first pass and should be validated through prototypes and concrete specification exercises before final visual or implementation decisions are made.

---

## Documents Updated

- `docs/knowledge/ux/document-first-ui.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/decisions/ADR-002-document-first-template-model.md`
- `docs/glossary/glossary.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

---

## Recommended Next Step

Validate this first-pass interaction model through a low-fidelity prototype or a concrete specification exercise, focusing on action discovery, scope clarity, edit-in-progress recovery and the visibility of impact cues.
