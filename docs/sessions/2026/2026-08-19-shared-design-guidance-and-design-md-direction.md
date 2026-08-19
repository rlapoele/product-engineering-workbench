# Session — Shared Design Guidance and `design.md` Direction

**Session ID:** 2026-08-19-06

**Date:** 2026-08-19

**Status:** Crystallized

## Context

The UX/UI Design Requirements and Interaction Notes section needs to give implementation consumers enough explicit design context to avoid generic interface output. The `design.md` pattern combines named, exact reusable values with contextual prose about their intended application, while remaining a compact companion rather than a full design system.

## Decision

The section includes **Shared Design Guidance** as structured, section-owned Product Knowledge. It records reusable visual direction and, when known, named design values or conventions. It provides common context for Screen / Views, User Flows and UI Requirements without duplicating it in each artifact and without creating Design Token, Color, Typography or UI Component Product Artifacts.

An Implementation Handoff may render available Shared Design Guidance together with relevant UX/UI artifacts, visual Resource References, and applicable responsive or accessibility expectations as a derived `design.md` companion. It is implementation-facing context for human and AI consumers, not the canonical source of knowledge.

## Boundary

`design.md` does not replace a full design system, behavioral requirements, Acceptance Criteria, a Figma workspace, CSS specifications or frontend implementation. The Workbench must not fabricate unspecified values or visual decisions merely to make the file appear complete.

## Deferred Detail

The minimal structure and authoring flow for Shared Design Guidance, the initial shapes and relationships of Screen / View, User Flow and UI Requirement artifacts, and exact `design.md` inclusion and rendering rules remain to be decided.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
