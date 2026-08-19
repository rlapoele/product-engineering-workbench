# Session — UI Requirement Initial Shape

**Session ID:** 2026-08-19-24

**Date:** 2026-08-19

**Status:** Crystallized

## Context

UI Requirement needs to state one observable interface obligation precisely enough for product, design and implementation consumers, while avoiding either a full design-system model or a repeated checklist of details that do not apply.

## Decision

Each UI Requirement has required Title, one deliberately selected primary applies-to target—Screen / View or User Flow—and a canonical Requirement statement. Optional additional applies-to targets avoid duplicate requirements where the same obligation genuinely applies elsewhere.

Optional details sharpen the same obligation only when relevant:

- **Interaction and state details** record relevant user action, condition, state, feedback or continuation details.
- **Accessibility expectations** record relevant keyboard, focus, semantic or assistive-technology, error or status-feedback expectations.
- **Responsive expectations** record behavior that must adapt across viewports or input modes.
- Ordinary Resource References may supply local visual or source material.

## Boundary

The Requirement statement remains canonical. Optional details are not a completion checklist. An independently changeable or testable interaction, feedback, state, accessibility or responsive obligation becomes a separate UI Requirement even when it shares a target.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
