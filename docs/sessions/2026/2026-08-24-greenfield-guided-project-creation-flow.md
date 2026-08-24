# Greenfield Guided Project Creation Flow

**Date:** 2026-08-24
**Status:** Crystallized
**Topic:** UX-006 — Greenfield and brownfield Project-start journeys

## Context

The Workbench needs to guide a user who begins with a new idea without imposing a methodology, creating canonical content during setup or making AI assistance mandatory. The guidance should have useful MVP value even though only one Specification Document Template is initially available.

## Decision

Project creation is a short ordered setup:

1. The owner selects Starting Context: Greenfield or Brownfield.
2. The owner supplies Content language, Project title and short description. There is no separate Intended Specification Purpose field.
3. Greenfield optionally asks up to four skippable questions about the problem or opportunity, intended outcome, target users and known uncertainty. Brownfield instead previews its post-creation Source actions.
4. The owner selects the Specification Document Template, then preset and section customization.
5. The owner explicitly creates the Project.

Greenfield answers are temporary **Project-start Notes**. They may recommend a preset and relevant sections. After creation, an owner may use a note as editable, unsaved first-draft material for its one suggested destination; ordinary save is still required before it becomes canonical Product Knowledge.

The MVP presents its only available template as preselected and currently available, without pretending that it is a personalized recommendation. The same recommendation-and-rationale interaction can support genuine owner-selectable template recommendations when multiple templates are later available.

After creation, the Greenfield prepared document provides a dismissible **Begin with what you know** panel, offering non-sequential shortcuts to problem or opportunity, goal or success criterion, target users and Open Question authoring. It can be reopened from **Getting started** and is never a progress tracker or workflow gate.

## Boundary

Project-start Notes are not Project State, Sources or canonical knowledge. Cancelling creation retains neither a Project nor its Project-start Notes. Brownfield Sources are created only after a Project exists, which preserves their explicit attachment scope and avoids temporary file or link intake.

The guided flow recommends; it never selects a template, preset, section, Product Knowledge destination or workflow path for the owner. AI is not required.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
