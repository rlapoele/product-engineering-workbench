# AGENTS.md

# Product Engineering Workbench

Welcome to the Product Engineering Workbench repository.

Before making significant changes, contributors (human or AI) should understand the philosophy of this project.

This repository intentionally follows a **knowledge-first engineering** approach.

---

# Repository Philosophy

The Product Engineering Workbench is designed before it is implemented.

The objective is to maximize understanding and minimize unnecessary implementation rework.

Implementation should normally follow this progression:

Explore

↓

Discuss

↓

Crystallize Knowledge

↓

Specify

↓

Implement

↓

Validate

Do not jump directly to implementation when important knowledge is still missing or unstable.

---

# Repository Organization

The repository is organized into four complementary areas.

## Knowledge

Location:

docs/knowledge/

Purpose:

Long-term project memory.

Contains stable information such as:

- Vision
- Principles
- Product
- Architecture
- Data Model
- AI
- UX
- ADRs

Knowledge should evolve deliberately.

---

## Planning

Location:

docs/planning/

Purpose:

Current execution strategy.

Planning is expected to evolve frequently.

---

## Sessions

Location:

docs/sessions/

Purpose:

Working memory.

Sessions summarize exploratory discussions.

Sessions may eventually crystallize into stable project knowledge.

---

## Glossary

Location:

docs/glossary/

Purpose:

Canonical terminology used throughout the repository.

When introducing new concepts, update the glossary before introducing inconsistent terminology elsewhere.

---

# Product Scope

The Product Engineering Workbench focuses exclusively on **Product Engineering**.

The product intentionally stops where software implementation begins.

The workbench produces implementation-ready knowledge.

Software delivery remains the responsibility of external delivery tools and implementation environments.

Do not introduce delivery-management functionality unless explicitly requested.

Examples of out-of-scope functionality include:

- Sprint Planning
- Kanban Execution
- Task Assignment
- Capacity Planning
- Velocity Tracking
- Release Management

When appropriate, prefer integration or export capabilities over implementing delivery functionality.

---

# Repository Engineering Process

The engineering process used to develop this repository is intentionally independent from the workflows that the Product Engineering Workbench will eventually support.

Do not assume that the repository's own development methodology represents the product's workflow templates.

The repository is free to evolve while the product remains workflow-agnostic.

---

# Documentation First

When significant knowledge changes occur:

1. Update the relevant documentation.
2. Update the glossary if terminology changes.
3. Update planning if priorities change.
4. Record important architectural decisions as ADRs.
5. Summarize important discussions within Sessions.

Do not duplicate knowledge across multiple documents.

Prefer updating an existing document over creating a new one.

---

# Change Handoffs

Whenever a contributor creates, updates, moves or deletes a project file, the
final handoff must suggest one concise commit message that accurately covers
the project-scoped changes. This does not authorize creating a commit unless it
is explicitly requested.

---

# Styling and Tailwind CSS v4.3+ Contract

Use this contract for authorized frontend work. It does not authorize
production UI work that has not otherwise been approved.

## 1. Core principle

Use Tailwind utilities for contextual composition and custom classes for
reusable visual or layout contracts.

A component's base styling must remain stable wherever it appears. Callers
control placement within their surrounding composition. A caller may override
an intrinsic component property only through a documented variant or explicit
escape hatch.

## 2. Tokens

1. Tokens define raw values and semantic meaning.

   - Raw tokens include palette values, font files and spacing scales.
   - Semantic tokens include values such as `ink-primary`, `paint-card`,
     `line-subtle` and `focus-ring`.
   - Components and markup use semantic tokens; raw values remain inside token
     definitions.
   - Where this project defines custom values, colors use `oklch` and
     dimensions use `rem`.

2. Use top-level `@theme` only to expose semantic tokens that need a Tailwind
   utility API.

   - Raw tokens remain ordinary CSS custom properties within token definitions.
   - Preserve the project's primitive → semantic → component token layering.
   - Do not mirror every CSS variable into `@theme`; export only
     utility-facing tokens.

## 3. Styling layers

1. Use `@layer base` for element defaults and direct element styling.

2. Use `l-*` for reusable structural layout objects only.

   - Examples: `l-container`, `l-section`, `l-auto-grid`.
   - Layout objects own structure, not component appearance.

3. Use `c-*` for reusable visual or interactive component contracts.

   - Examples: `c-button`, `c-card`, `c-form-field`.
   - Components own their visual identity, internal layout, states,
     accessibility affordances and component-specific responsive behavior.
   - Do not create a `c-*` class merely because a framework component exists;
     utility-only components are valid when there is no stable visual contract.

4. Use Tailwind utilities for page and contextual composition.

   - Use utilities for local spacing, parent layout, placement, sizing,
     contextual alignment and page-specific responsive behavior.
   - Do not create a custom class for one-off composition.

## 4. Naming

- `l-*`: reusable layout object.
- `c-*`: reusable component.
- `__`: component element, for example `c-form-field__input`.
- `--`: explicit variant or state, for example `c-card--interactive`.
- Named variants must have a real visible or behavioral effect.

## 5. Ownership

A component class owns:

- Colors, typography, borders, radius, shadows, transitions and internal
  padding.
- Internal child layout.
- Component-specific responsive behavior.
- Interactive, selected, disabled, loading, error and focus states.

The caller owns:

- External margin and placement.
- Grid or flex position within its parent.
- Page- or section-specific width constraints.
- Contextual alignment and page-specific responsive composition.

Do not duplicate styling owned by a component class unless intentionally using
a documented override.

If the same component-plus-utility combination appears in two or more distinct
places and expresses a stable semantic role, promote it to a named variant or
typed component prop.

## 6. State and accessibility

Never conflate state meanings.

- `disabled` / `aria-disabled`: unavailable.
- `aria-pressed="true"`: selected or toggled.
- `aria-current`: current navigation target.
- `data-state="loading"`: processing.

Selected controls must not automatically receive disabled styling or
`pointer-events: none`.

Every interactive component must retain:

- A visible keyboard focus style.
- Appropriate cursor and pointer behavior.
- Reduced-motion-safe transitions where motion is meaningful.
- A usable touch hit area.

## 7. Tailwind rules

- Use static Tailwind class names only. Never construct classes dynamically;
  map state or props to complete class strings.
- Prefer token-backed semantic utilities over raw palette utilities and
  arbitrary values.
- An arbitrary value is allowed only for a documented one-off constraint; do
  not repeat it when a token or ordinary utility is appropriate.
- Keep breakpoint names and responsive intent consistent between component CSS
  and markup.
- Prefer logical spacing utilities such as `mbs-*`, `mbe-*` and `pbs-*` for
  reusable patterns; do not mix logical and physical directional utilities
  without a reason.
- Use custom CSS for component and layout contracts; do not use `@apply`.
- Do not introduce legacy v3 directives (`@tailwind base`,
  `@tailwind components`, `@tailwind utilities`) or `tailwind.config.*`
  without explicit approval.
- Avoid positional selectors that depend on incidental markup order. They
  remain valid where they express stable semantic document structure.
- Prefer explicit component element classes and data or ARIA state when
  selectors must survive reasonable internal markup changes.

## 8. Delivery boundaries

- For a disposable static prototype, use the Tailwind v4 Play CDN and inline
  `@theme` only when a local, no-build study is intentional. Keep prototype
  code isolated from production source directories.
- For authorized production UI, use the project's approved Tailwind build
  integration. In this repository, use `@tailwindcss/vite` and
  `@import "tailwindcss"`.

## 9. Completion checklist

Before handing off frontend work, confirm:

- Is this a token, layout object, component contract or page composition?
- Does the component own all intrinsic visual properties?
- Is external spacing and placement left to the caller?
- Does every named variant have a real effect?
- Are semantic tokens used consistently?
- Are active, selected, loading and disabled states distinct?
- Is each selector resilient to reasonable internal markup changes?
- Is repeated utility composition a stable role that deserves a variant or
  prop?
- Are responsive behavior, focus states and reduced-motion behavior
  intentional?

Report:

1. Existing or new `@theme` tokens used.
2. Each new `c-*` or `l-*` class and why utilities were insufficient.
3. Any arbitrary value and its one-off constraint.
4. The relevant build/check and visual or interaction verification performed.

---

# AI Contributions

Artificial intelligence is treated as a contributor to the project.

AI should help:

- clarify ideas;
- challenge assumptions;
- identify inconsistencies;
- suggest alternatives;
- improve specifications;
- generate implementation-ready artifacts.

AI should not silently invent requirements or architectural decisions.

When uncertainty exists, explicitly identify assumptions and propose alternatives instead of making irreversible decisions.

---

# Contributor Principles

Regardless of whether the contributor is human or AI:

- preserve conceptual integrity;
- prefer clarity over cleverness;
- minimize unnecessary complexity;
- keep the product methodology-agnostic;
- maintain clear separation of concerns;
- preserve traceability of important decisions.

---

# Key Principles

The following principles guide all work on this repository.

- Help users think.
- Knowledge before implementation.
- Human remains in control.
- AI is optional by design.
- Collaboration is optional but encouraged.
- Conversations are working memory.
- Knowledge is long-term memory.
- Planning is a living execution strategy.
- Product Engineering is distinct from Product Delivery.
- Product scope takes precedence over feature growth.

---

# Reading Order

Before contributing to this repository, contributors should become familiar with:

1. README.md
2. docs/glossary/glossary.md
3. docs/knowledge/vision/product-vision.md
4. docs/knowledge/vision/product-goals.md
5. docs/knowledge/principles/product-principles.md
6. docs/planning/current-focus.md
7. docs/planning/open-questions.md

These documents provide the minimum context required before proposing significant changes.
