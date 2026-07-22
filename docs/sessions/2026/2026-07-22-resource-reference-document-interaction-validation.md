# Session — Resource Reference Document Interaction Validation

**Date:** 2026-07-22

**Session ID:** 2026-07-22-20

**Status:** Crystallized

---

## Context

The Resource Reference lifecycle establishes that a Resource source is immutable once referenced, while each reference owns its target-specific meaning. The remaining question is how a document-first interface lets a user attach, describe, preview and replace a reference without making supporting material a separate file-management workflow or silently carrying meaning from one source to another.

---

## Validated Journey

Alex is editing the `Pause subscription` Screen / View and needs to add an updated confirmation-state mockup.

1. Alex opens the Screen / View's contextual actions and selects **Attach resource**. The same action is available at Specification and Section level, so supporting material is attached where it is meaningful.
2. Alex chooses an existing managed Resource, uploads a file or enters an external URL. Before saving, Alex supplies the local purpose and caption. For this Screen / View, Alex may also record represented state and viewport context.
3. After Alex explicitly saves, the Resource Reference appears inline at the Screen / View with its source type and a compact preview when one is available. The purpose and caption remain available as the authoritative explanation; preview imagery alone does not carry the reference's meaning.
4. Later, Alex chooses **Replace resource**, selects a newer mockup and is asked whether to reuse the existing reference details.
5. If Alex chooses **Reuse details**, the current purpose, caption and applicable Screen / View metadata are copied into an editable draft for this reference. Alex may revise them before saving. If Alex chooses **Start fresh**, those fields are empty and Alex must enter the required details again.
6. Until Alex saves, neither choice changes the current Resource Reference or any other reference to the original Resource. On save, the workbench creates the replacement Resource, updates only the chosen reference, creates the attached Screen / View Revision and applies the ordinary target-specific impact feedback.
7. If an external URL cannot be previewed or accessed, the reference remains a labeled attachment with an understandable caveat or preview-failure state. Alex may continue editing or save the surrounding Product Knowledge; no source failure blocks ordinary document work.

---

## Decision

Resource attachment is a local document action, not a separate external-links or file-management flow. A user supplies the source and the local Resource Reference details before the reference is saved. Inline presentation identifies the source type and may provide a compact preview, but the user-authored local purpose and caption remain necessary to explain why the Resource is attached.

When replacing a Resource, the workbench must not silently carry the existing Resource Reference details forward. After choosing the replacement source, it offers an explicit **Reuse details** or **Start fresh** choice:

- **Reuse details** copies the existing target-level purpose, caption and applicable location-specific metadata into an editable draft for the chosen reference.
- **Start fresh** requires the user to re-enter those details.

The choice is local to the Resource Reference being replaced. It has no effect on other references that share the original Resource, and no replacement or detail change becomes canonical until the user saves.

---

## Consequences

The ordinary document remains the place where users attach and understand supporting material. Users can efficiently preserve proven local descriptions for a near-identical replacement, while an explicit decision prevents a new source from inheriting meaning by accident.

Preview availability improves scanning but does not replace accessible text or user-authored explanation. External preview or access failures remain visible, actionable feedback rather than blockers for authoring.

Exact visual layout, keyboard interaction, focus management, preview rendering and source-type-specific wording remain low-fidelity prototype and accessibility validation work.

---

## Documents Updated

- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

---

## Recommended Next Step

Validate the low-fidelity control layout and accessible keyboard journey for attaching, previewing and replacing a Resource Reference, particularly how compact inline cards communicate source type, preview status and available actions without visual clutter.
