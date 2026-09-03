# Workbench Visual Direction

**Status:** Crystallized

This document defines the visual direction for the Product Engineering
Workbench's own interface. It applies across the application, including entry,
home, Project and document workspaces. It is distinct from the Shared Design
Guidance that Workbench users may author for their own products.

---

## 1. Purpose

The Workbench should feel warm, trustworthy, minimal and polished. It must
support long periods of reading, authoring and review without becoming cold,
decorative or visually busy.

The central experience is a coherent specification and its related product
knowledge. The interface must make primary content, relevant actions and
supporting context easy to distinguish.

---

## 2. Centered content and contextual edges

Every major page uses one shared spatial model:

- a warm application background fills the viewport;
- the primary content sits in a centered, bounded surface with a lighter tone,
  similar to a clean document placed on a softer surrounding field; and
- left and right contextual regions support the primary content without
  competing with it.

Contextual regions are structurally present but visually quiet while
collapsed. Their edge controls expand or collapse the relevant region and may
show an icon with a clear text label when horizontal space allows. An icon-only
control must retain an accessible name and supporting tooltip.

On desktop, the shell is a stable three-part composition:

```text
[ left contextual region ]  [ centered primary surface ]  [ right contextual region ]
```

The left region commonly supports structure, navigation and location. The
right region commonly supports evidence, review, help and related context.
Expanding a region reflows the available space for the primary surface; it must
not cause horizontal overflow.

The primary surface is where the user reads, writes, reviews or makes a
decision. Peripheral regions remain contextual tools, not permanent dashboard
furniture.

---

## 3. Light and dark themes

Both themes use the same hierarchy and preserve a sense of warmth.

### Light theme

- The application background is a soft warm neutral, reminiscent of a clean
  aged sheet of paper; it is never pure white.
- The primary surface is slightly lighter and clearer than the surrounding
  background.
- Surface separation comes primarily from tonal contrast, a fine border and
  restrained elevation.

### Dark theme

- The application background is a warm, low-saturation dark neutral, such as a
  softened brown-charcoal or umber-grey; it is never pure black or a cold
  blue-grey.
- The primary surface is a gently lifted, warmer dark shade rather than a
  bright card on black.
- Text remains comfortably readable without relying on harsh pure white.

In both themes, semantic status colors remain distinct and accessible. Warmth
must not weaken contrast or make drafts, Sources, canonical Product Knowledge,
warnings or errors ambiguous.

---

## 4. Typography, hierarchy and density

The interface uses editorial hierarchy for primary content and a highly
legible UI typeface for navigation, controls and supporting text.

- Document titles and major section headings may use a restrained display face.
- Navigation, forms, metadata, actions and body copy use a clear sans-serif.
- Reading text has generous line height and a controlled measure.
- Controls and metadata are compact without becoming cramped.
- Density follows purpose: document reading and authoring can breathe;
  structured lists and contextual regions may be denser.

Typography and spacing should make primary content, supporting context,
metadata and available actions immediately distinguishable.

---

## 5. Controls and interaction language

Controls are present when useful, not permanently broadcast.

- The page header follows the same quiet edge-to-center composition as the
  page shell. It frames the primary surface instead of becoming a dashboard
  bar.
- Theme, settings, account and other global controls appear in the header at
  the top right.
- Primary actions use direct labels, such as `Create project`, `Add source`,
  `Edit goal` and `Prepare handoff`.
- Advanced actions, secondary metadata, provenance and supporting context use
  progressive disclosure.
- Drafts, Sources, canonical knowledge, review results and known AI activity
  use a consistent semantic visual language. They must be distinguishable
  without creating persistent visual noise or relying on color alone.

The interface avoids decorative labels, vague calls to action, redundant
headings and excessive badges or status pills.

---

## 6. Responsive behavior

The centered primary surface remains the focus at every viewport.

On narrower screens, contextual regions default to collapsed and open as
temporary contextual surfaces. The primary content may become nearly
edge-to-edge while retaining a clear tonal relationship with the page
background. Header controls simplify progressively without losing direct
access to theme, settings and account actions.

---

## 7. Visual boundaries

Avoid:

- pure-white or pure-black canvases;
- generic dashboard card grids as the primary experience;
- permanently expanded peripheral controls unrelated to the current content;
- heavy gradients, glass effects, oversized shadows or ornamental
  illustration;
- decorative numbering, redundant labels and status-pill overload; and
- task-board or workflow-pressure visual language.

This direction establishes the Workbench's atmosphere, hierarchy, page shell
and interaction character. It is not a complete component library, a fixed
token set or implementation authorization. Concrete screens and prototypes
must validate the direction while preserving the established document-first,
progressive-disclosure and accessibility principles.

---

## Related knowledge

- [Workbench Visual References](visual-references/README.md)
- [UX Principles](../principles/ux-principles.md)
- [Document-First User Experience](document-first-ui.md)
- [Current Focus](../../planning/current-focus.md)
