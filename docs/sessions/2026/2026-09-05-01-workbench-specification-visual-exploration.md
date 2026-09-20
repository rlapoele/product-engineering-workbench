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

On 2026-09-14, the prototype's design QA passed after correcting document text scale, desktop breadcrumb placement, skip-link focus and coarse-pointer target sizing. The pass covers desktop, 390-pixel and 320-pixel browser layouts, private-draft recovery, explicit save, discard confirmation, local review context and palette switching. Real handheld keyboards, screen readers and the owner's experiential comparison remain the next evidence to gather.

## Hierarchy Refinement — 2026-09-18

Experiential review found that the main document's group and requirement hierarchy became difficult to read, especially after scrolling. `Rescheduling` and FR-012's title used the same desktop text size, while peer requirement FR-013 used a smaller title. Requirement references were also separated vertically from their titles, and the desktop header repeated the project name.

A bounded prototype refinement now retains Source Sans 3 while separating the page, group and requirement levels; giving FR-012 and FR-013 one shared title treatment; placing each requirement reference on its title line; and showing the project name once in the desktop header. Sticky scroll context and Urbanist/Poppins comparison remain deferred so the hierarchy change can be evaluated independently.

Further owner review found that the left navigation still separated the Specification destination from its outline, while the main document presented Functional requirements before earlier Specification sections and gave that section a unique page-level treatment. The next bounded refinement nests the ordered outline beneath an accessible Specification disclosure, restores the intended section order, gives every peer Specification section one `h2` treatment and uses equal-size muted references with a middle-dot separator in requirement headings. Source Sans 3, palette behavior and editing semantics remain unchanged.

After that hierarchy pass, the owner authorized the deferred font-family comparison. The prototype now starts with Urbanist and provides a like-for-like Poppins alternative while retaining identical hierarchy, content, palettes and interaction. Urbanist is bundled as a variable font; Poppins uses the regular and semibold static faces currently distributed by Google Fonts. This comparison does not select a production typeface.

Initial comparison feedback found Poppins highly readable but visually too large at the shared scale, while Urbanist had the preferred size but would benefit from slightly wider character spacing. After comparing `0.025em`, the prototype now applies `0.035em` tracking throughout Urbanist and leaves Poppins at its native spacing for continued experiential comparison. This remains a study adjustment rather than a production typography decision.

The owner subsequently found both Urbanist headings and body copy comfortable to read at `0.035em`. This establishes the preferred Urbanist treatment for the current prototype sample, while longer sustained use and any final production typeface choice remain open.

With typography held constant, the owner found the blue palette visually stronger on screen than ochre despite personally liking ochre. The original blue accent still read too close to the blue-tinted primary ink. The prototype now tests accent chroma `0.15` at the existing `46%` lightness and `255` hue: it remains within sRGB and preserves strong contrast, whereas `0.16` begins leaving the gamut. This is a comparison candidate, not a selected production token or final palette decision.

The owner subsequently found `0.15` better than the earlier `0.13`. It is therefore the preferred blue accent for the current prototype sample, while sustained-use evaluation and any production palette decision remain open.

On 2026-09-20, the owner found the prototype's typography generally too large and asked for an overall treatment closer to 80% of its previous size, together with a fluid root scale. The bounded follow-up uses a stable inline viewport axis and a 15–17-pixel root range across 320–1920 pixels, then steps the document's semantic typography roles down while preserving their hierarchy. Tailwind theme variables now expose the study's text, leading and tracking scales; Urbanist's preferred `0.035em` tracking maps to `tracking-relaxed`. Radius changes were deferred so component shape does not complicate the typography comparison.

Browser verification at 1485, 390 and 320 pixels found no horizontal overflow. The desktop page title, peer section titles and body copy now render at approximately 77–84% of their preceding sizes, while the 320-pixel inline editor retains readable field wrapping and visible actions. This remains prototype evidence rather than a production typography decision; real-device rendering, virtual keyboards and sustained use remain open.
