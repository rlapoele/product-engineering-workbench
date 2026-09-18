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
- **Colors and tokens:** Ochre maps the same semantic roles as the source: warm canvas, warmer sidebar, restrained selection and strong ochre actions. Blue remaps the same roles without changing layout or content. Calculated contrast from the OKLCH primitives is approximately 7.08:1 for ochre accent/canvas, 14.02:1 for primary ink/canvas and 6.03:1 for muted ink/canvas; the blue equivalents are approximately 6.88:1, 13.97:1 and 5.99:1.
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
- Urbanist and Poppins need sustained human reading and editing comparison; the initial Urbanist selection is a study default, not a conclusion.
- The new two-control header and both typeface treatments still require updated 390-pixel and 320-pixel browser or device verification.

## Follow-up polish

- **[P3]** If longer requirements make the inline editor visually heavy, test a quieter field boundary after users have learned the editing state.
- **[P3]** If the 390-pixel review block feels too far from its trigger, test placing it immediately after the review link while retaining a clear Back to requirement action.

final result: passed
