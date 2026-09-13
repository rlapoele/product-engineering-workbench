# Session — Workbench Specification Visual Exploration

**Session ID:** 2026-09-05-01

**Date:** 2026-09-05

**Status:** Active exploration

## Context

This exploration considered visual references for the Workbench's
document-first Specification workspace independently of the existing visual
direction. It compared Craft-led and Linear-led treatments of the same
Functional Requirement reading and review scenario, then refined the preferred
Craft-led treatment.

## Working Conclusions

- The Craft-led treatment is the preferred working reference for Specification
  reading and review. Its generous document typography, whitespace and quiet
  contextual panel support sustained product-knowledge work.
- The Specification outline is text-first. It uses titles, indentation,
  selected-state treatment and expand/collapse chevrons; it does not assign
  icons to template sections or Product Artifact types. Stable application
  destinations may retain labelled icons.
- A warm ochre/saffron accent with highly desaturated warm neutrals is a viable
  candidate for the default light theme. It remains a candidate, not an
  accepted default palette. Blue and other palette candidates require a
  controlled comparison with equivalent typography, hierarchy and contrast.
- The intended experience is calm, capable and rewarding during long periods
  of reading, authoring, review and return-to-work. Accent color alone cannot
  establish that quality; interaction, typography, safe editing and context
  recovery need validation together.

## Evidence

- [Ochre reading study](../../knowledge/ux/visual-references/specification-document-ochre-reading-study-2026-09-05.png)
- [Ochre review study](../../knowledge/ux/visual-references/specification-document-ochre-review-study-2026-09-05.png)

The studies use a Functional Requirement with linked Acceptance Criteria and a
non-canonical review Finding. The review pane keeps the relevant saved
Specification visible and states that the Finding has not changed it.

## Open Questions

- Which default accent palette best supports the desired experience after a
  like-for-like interactive comparison?
- Should theme selection be available in the initial product, and which
  complete palettes would be supported if it is?
- Does the Craft-led layout remain comfortable and efficient through reading,
  selecting, editing, saving and returning to a long Specification?

## Boundary

This session does not replace the crystallized Workbench Visual Direction,
select a final palette, define a component library or authorize production UI
implementation.

## Recommended Next Step

Build a bounded interactive study of the same requirement journey in the warm
ochre and blue treatments, then assess reading comfort, editing confidence,
review clarity and return-to-context behavior.

## Interactive Follow-up — 2026-09-13

The owner approved a bounded prototype of reading → selected → editing on desktop and handheld. Selection reveals local actions without beginning an edit; Edit opens structured fields in the document, keeping the requirement reference visible. Pointer hover and keyboard focus reveal Edit; narrow/touch layouts retain a visible action. Existing private-draft and explicit `Done editing` semantics remain authoritative.

The [Specification editing study](../../../prototypes/specification-editing/README.md) implements that journey with the appointment-booking example and controlled ochre/blue palette switching. Browser checks validate the basic interaction mechanics; real handheld keyboard use and the owner's assessment of reading/editing comfort remain outstanding. The study is isolated from production and does not settle the default palette or supersede stable visual-direction knowledge.
