# Session — Resource Reference Lifecycle and Reuse Validation

**Date:** 2026-07-22

**Session ID:** 2026-07-22-19

**Status:** Crystallized

---

## Context

Resources and Resource References let users attach managed files and external links directly to a Specification, Specification Section or Product Artifact. The initial decision deliberately left open how a shared Resource changes, how its references participate in partial handoffs, and how external-source uncertainty is made visible.

The model must preserve the local meaning of a reference without turning supporting material into a separate document-management product or allowing an edit in one location to silently alter another.

---

## Scenario

MealLoop's `Pause subscription` Screen / View and the `UX/UI Design Requirements and Interaction Notes` section both reference the same managed screenshot of the paused-subscription state. The Screen / View reference calls it a visual reference for the confirmation state; the section reference describes it as spacing and component guidance.

Alex first prepares a partial handoff containing the Screen / View and the UX/UI section, then replaces the screenshot for the Screen / View with a newer mockup and prepares again. Alex also considers an external Figma link whose access cannot be confirmed.

---

## Validated Journey

1. The two Resource References share one original Resource but retain different targets, purposes and descriptions. Their shared source does not make their local meaning shared or interchangeable.
2. In Alex's first partial package, both references travel with their included targets. The managed screenshot source is copied once, while the package represents both target-specific references and descriptions.
3. From the Screen / View, Alex chooses Replace Resource. The workbench creates a new managed Resource and updates only that Screen / View reference. The UX/UI section continues to reference the original screenshot without an implicit change.
4. Saving the Screen / View reference change creates a Revision of that Screen / View. Ordinary relationship-specific impact evaluation runs from that target; Resource References do not create a separate or generic impact-propagation mechanism.
5. Alex's later partial package contains the original and replacement screenshot Resources. Each managed source is copied once, and the two distinct references remain represented with their local descriptions.
6. A Resource Reference attached only to the whole Specification would not enter either partial package merely because the Specification is the enclosing document. Alex must explicitly add it as Supporting Context if it is needed.
7. The external Figma URL remains a labeled reference. If the workbench cannot establish access, it shows a caveat or preview failure without blocking Alex from editing the specification or preparing an otherwise meaningful package. A later URL edit creates a new Resource; remote content changing behind the same URL is not inferred as a Revision.
8. Removing either screenshot reference detaches only that reference. If no references remain, retention or cleanup is governed by a later implementation policy and never silently deletes supporting material.

---

## Decision

A Resource may be shared by multiple independent Resource References. Each Resource Reference owns its target-specific purpose, description and metadata.

Once referenced, a Resource source is effectively immutable. Replacing a managed file or changing an external URL creates a new Resource and requires explicit selection of the Resource References to update. The workbench must never make a hidden global replacement.

Adding, removing, replacing or materially changing a Resource Reference creates a Revision of its attached Specification, Specification Section or Product Artifact. Normal relationship-specific propagation rules determine any impact outcome from that target.

For partial handoffs, a Resource Reference follows an included Section or Product Artifact. A Specification-level Resource Reference is excluded unless the user explicitly adds it as Supporting Context. A shared managed Resource is copied only once when several included references use it, while every included Resource Reference remains represented with its own local meaning. External Resources remain labeled links and become caveats when availability cannot be established.

---

## Consequences

Users can confidently reuse supporting material across the Specification without risking invisible cross-location changes. Consumers receive the relevant source efficiently and still understand why it appears at each included location.

The workbench distinguishes a deliberate user edit from change that occurs outside its control. This keeps Revision history truthful and makes external access or version uncertainty visible without blocking routine document work.

Storage retention, upload scanning, link checking, access control and preview rendering remain implementation and security concerns. Their future design must preserve these user-visible semantics.

---

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/ai/ai-orchestration.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

---

## Recommended Next Step

Return to the remaining document-first interaction work by validating the concrete attach, describe, replace and preview controls for Resource References through a low-fidelity prototype. The conceptual lifecycle and handoff boundary are now settled; control placement, accessibility and feedback wording remain UX validation work.
