# Design QA — Specification editing interaction study

## Comparison target

- Source visual truth:
  - `../../docs/knowledge/ux/visual-references/specification-document-ochre-reading-study-2026-09-05.png`
  - `../../docs/knowledge/ux/visual-references/specification-document-ochre-review-study-2026-09-05.png`
- Browser-rendered implementation:
  - `evidence/desktop-reading.png`
  - `evidence/desktop-review.png`
  - `evidence/mobile-editing.png`
  - `evidence/mobile-review.png`
- Full-view source/implementation evidence:
  - `evidence/reading-comparison.png`
  - `evidence/review-comparison.png`
- Focused typography evidence:
  - `evidence/reading-detail.png`
  - `evidence/review-detail.png`

The desktop sources and captures are each 1485 × 1059 pixels at a 1485 × 1059 CSS-pixel viewport and device-pixel ratio 1. They therefore required no density normalization. Each comparison places the source on the left and implementation on the right at equal size. The focused crops compare the central requirement region at equal scale.

The handheld evidence is 390 × 844 pixels at device-pixel ratio 1. A further responsive check used a 320 × 700 CSS-pixel viewport. There is no generated handheld source image; these captures validate the interaction direction and responsive adaptation of the selected desktop treatment rather than pixel fidelity to a separate mobile mock.

## Final findings

No actionable P0, P1 or P2 findings remain.

- **Fonts and typography:** The study now compares Urbanist and Poppins over identical content and hierarchy. Urbanist is the initial candidate because its humanist texture remains closer to the Craft-led reading reference; Poppins supplies a deliberately more geometric comparison. Both use the study's existing heading weights, prose scale and line-height contracts, so switching typeface does not alter document semantics or interaction.
- **Spacing and layout rhythm:** The desktop keeps the reference's quiet left outline, broad document surface and contextual right region. Opening review context narrows the document while retaining FR-012 in view. In the original Source Sans pass at 390 and 320 pixels, the outline became an overlay and review context entered the document flow without horizontal overflow; the new typeface comparison still requires those exact narrow checks.
- **Colors and tokens:** Ochre maps the same semantic roles as the source: warm canvas, warmer sidebar, restrained selection and strong ochre actions. Blue remaps the same roles without changing layout or content. Calculated contrast from the OKLCH primitives is approximately 7.08:1 for ochre accent/canvas, 14.02:1 for primary ink/canvas and 6.03:1 for muted ink/canvas; with the active `0.15` chroma trial, the blue equivalents are approximately 6.92:1, 13.97:1 and 5.99:1.
- **Image and asset fidelity:** The source contains no photographic or illustrative imagery. Tabler supplies the visible application and action icons as one consistent outline family. Template-section and Product-Artifact icons remain intentionally absent from the outline.
- **Copy and content:** FR-012, its conditions, acceptance criteria, source and review finding match the selected studies. Study-only labels such as `Private draft`, `Done editing` and the palette selector make the interaction states explicit without entering canonical content.
- **States and interactions:** Pointer hover and keyboard focus reveal Edit on desktop; the action stays visible at narrow widths. Selection does not start editing. Edit focuses the statement, Return to reading keeps a private draft, Keep editing draft restores it after navigation or reload, Done editing alone updates the saved requirement, and discard is locally confirmed. Review feedback and related evidence never apply changes automatically.
- **Accessibility and responsiveness:** Native buttons, inputs, textareas and select controls expose names and labels. Focus is visible and returns to the local Edit action after save or discard. The skip link moves focus to the main Specification. Dynamic outcomes use a status region. Coarse-pointer CSS increases action targets to 48 CSS pixels; the narrow desktop-browser simulation remains 44 pixels because it reports a fine pointer. Reduced-motion preferences suppress transitions.

## Comparison history

### Pass 1 — blocked

- **[P2] Document typography was too small.** The first implementation preserved hierarchy but reduced sustained-reading comfort relative to the source. The prose scale was increased to 22 CSS pixels in the wide reading view and deliberately reduced only when review context needs the additional horizontal room.
- **[P2] A second desktop breadcrumb row pushed the document down.** The breadcrumb moved into the persistent top bar at desktop widths while remaining a local row on narrow screens.

Post-fix evidence: `evidence/reading-comparison.png`, `evidence/reading-detail.png`, `evidence/review-comparison.png` and `evidence/review-detail.png` show the corrected rhythm and scale.

### Pass 2 — passed

- The skip-link target was made programmatically focusable.
- The handheld outline trigger now identifies its controlled region.
- Coarse-pointer controls received a 48 CSS-pixel minimum block size.
- The prototype was rebuilt and the desktop, 390-pixel and 320-pixel flows were repeated without horizontal overflow or console warnings/errors.

### Typeface comparison pass — passed with a responsive follow-up

- Urbanist and Poppins both load from local assets and switch without changing saved content, selection or editing state.
- Live desktop checks at the available 1065-pixel browser width covered the reading and inline-editing states in both families. Neither treatment introduced horizontal document overflow, and the browser console remained free of warnings and errors.
- The header retains explicit `Typeface` and `Palette` names for assistive technology while hiding their visible labels when space is limited.
- The existing 390-pixel and 320-pixel evidence predates this selector and typeface change; those exact viewport checks remain to be repeated before treating the responsive typography pass as closed.

### Urbanist tracking refinement — passed for current reading sample

- Owner feedback found Poppins readable but visually large, while Urbanist had the preferable scale but needed slightly more separation between characters.
- Urbanist now uses `0.035em` letter spacing throughout the application, including the main heading and inline editor. Poppins retains its native spacing so the comparison does not conflate the two treatments.
- Live computed-style checks confirmed that the spacing remains proportional to local text size: 1.68 pixels on the 48-pixel document title, 0.77 pixels on 22-pixel prose, 0.98 pixels in the 28-pixel title field and 0.7 pixels in the 20-pixel statement field. Poppins continued to resolve to `normal`; neither treatment introduced horizontal overflow at the available 1065-pixel viewport.
- Owner evaluation found both headings and body copy comfortable to read with Urbanist at `0.035em`.
- This is an exploratory readability adjustment, not a selected production typography rule.

### Blue accent chroma trial — passed for current palette sample

- The active blue accent now uses `oklch(46% 0.15 255)`, changing only chroma from the earlier `0.13`; blue ink, surfaces, selection, rules and hover color remain unchanged.
- Calculated accent/canvas contrast is approximately 6.92:1 and white/accent contrast approximately 7.22:1. The token remains within sRGB at the current lightness and hue.
- Live verification at 1280 pixels confirmed the updated token in navigation and document actions without horizontal overflow or browser warnings.
- Owner evaluation found `0.15` better than `0.13`, making it the preferred blue accent for the current prototype sample without selecting a production token or final palette.

### Fluid typography refinement — passed for current responsive sample

- The root now interpolates from 15 to 17 pixels over a 320–1920-pixel inline viewport. The stable `vi` axis avoids coupling the type scale to viewport height or orientation changes.
- Document roles moved down approximately one scale step while preserving the established semantic order: page title, peer sections, requirement group, requirement title and body copy.
- At 1485 pixels, computed sizes were 16.46 pixels for the root, 37.03 pixels for the document title, 24.68 pixels for peer section titles and 18.51 pixels for requirement titles and body copy. This is approximately 77–84% of the preceding desktop treatment.
- At 390 pixels, the root was 15.09 pixels, body and requirement titles were 16.97 pixels and the page title was 28.29 pixels. At 320 pixels, the root was 15 pixels, the inline title field was 18.75 pixels and statement fields were 15 pixels.
- The 1485-, 390- and 320-pixel checks showed no horizontal document overflow. The 320-pixel editing state retained visible local actions and readable field wrapping, and the browser console reported no warnings or errors.
- Radius tokens were intentionally excluded so this pass does not conflate typography with component shape.

### Requirement action alignment — passed

- Owner annotation found that the Edit action shared the heading's top edge but sat visually below `FR-012 · Reschedule an appointment` because its larger touch target had a lower center.
- The requirement header row now aligns the heading and Edit action by their first-line baseline while preserving the button's minimum block size and keeping the action associated with `FR-012` when the title wraps.
- Live checks at 1070 pixels and 320 pixels confirmed the action remains on the first heading line, including the three-line narrow title, without horizontal overflow.

### Sidebar edge treatment — passed

- The left panel retains its vertical padding but has no inline padding; navigation rows now reach the panel edges while preserving their own internal text and icon spacing.
- Live verification at 1070 pixels confirmed zero computed inline padding and no document or sidebar overflow.

### Sidebar navigation semantics and current defaults — passed

- Urbanist and the blue palette now load as the current prototype defaults; the comparison controls remain available and this does not authorize a production default.
- The navigation is exposed as three nested lists containing eleven list items and eleven links. Buttons are reserved for the Specification and Rescheduling disclosure actions, with `aria-expanded` and `aria-controls` reflecting their state.
- Top-level destination links use `gap-2`; the computed icon-to-label gap was `0.5rem` at the 1070-pixel desktop viewport and remained proportional under the fluid root size at 390 pixels.
- Both disclosures collapsed and restored their controlled lists, and the in-document links updated the URL fragment and current-location state.
- Live checks at 1070, 390 and 320 pixels confirmed Urbanist and blue as the initial values and found no horizontal overflow.

## Interaction verification

Browser checks covered:

1. Select FR-012 without entering edit mode.
2. Enter editing explicitly and confirm focus moves to the requirement statement.
3. Change the statement, return to reading and verify that saved text remains unchanged.
4. Resume the private draft after reading elsewhere and after reload.
5. Commit through Done editing and verify the saved statement and Revision counter change.
6. Start another draft and use the local discard confirmation.
7. Open/close review feedback and follow its source and acceptance-criterion references.
8. Open and navigate the narrow-screen outline while retaining a draft.
9. Switch between Urbanist and Poppins, then ochre and blue, without changing content or state.
10. Submit an empty required title and confirm native constraint validation keeps the editor open.
11. Follow the skip link and verify focus moves to `#specification`.
12. Inspect the browser console; no warnings or errors were present.

## Open questions and residual test limits

- Real iOS and Android virtual keyboards may resize or pan the viewport differently from the desktop-browser width simulation.
- Screen-reader reading order and announcements need a manual VoiceOver/TalkBack walkthrough.
- The intended comfort of sustained reading and editing, and the comparative emotional quality of ochre and blue, require human evaluation rather than automated evidence.
- Hover discoverability should be assessed during the owner's desktop walkthrough; keyboard and touch have explicit, persistent routes.
- Urbanist's current heading and body treatment is comfortable in the present sample; longer-document use and the final Urbanist/Poppins preference remain open.
- The updated responsive typography has browser evidence at 390 and 320 pixels; real-device font rendering and virtual-keyboard behavior remain unverified.
- Owner evaluation favors blue over ochre and found `0.15` accent chroma better than the earlier `0.13`; `0.16` begins leaving the sRGB gamut at the current lightness and hue. Sustained-use comfort and the final palette decision remain open.

## Follow-up polish

- **[P3]** If longer requirements make the inline editor visually heavy, test a quieter field boundary after users have learned the editing state.
- **[P3]** If the 390-pixel review block feels too far from its trigger, test placing it immediately after the review link while retaining a clear Back to requirement action.

final result: passed
