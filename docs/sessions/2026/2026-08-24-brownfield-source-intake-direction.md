# Session — Brownfield Source Intake Direction

**Session ID:** 2026-08-24-03

**Date:** 2026-08-24

**Status:** Crystallized

## Context

Brownfield Project-start needs a practical MVP way to establish existing context without turning the Workbench into a codebase-import, synchronization or automated reverse-engineering product.

## Decision

After the owner saves a Brownfield Project, its non-blocking **Establish context** step offers three initial Source forms: an owner-authored **Source Note**, an uploaded managed file and an external link. Every initial Source attaches at Specification scope. The owner may choose **Start authoring** at any time, and later Sources may use the same model at Specification, Section or Product-Artifact scope.

A repository is supplied as a link or managed file context, never cloned or synchronized. An owner may ask an external AI assistant to summarize an existing codebase and add the resulting summary as a Source. When known, its external-AI origin may be retained, but the summary remains evidence rather than reverse-engineered specification truth.

## Boundary

Source Capture remains the only route from source material to an ordinary Product Knowledge draft or Revision, followed by the normal explicit save. Sources, external AI output and external content never automatically create canonical knowledge.

## Open Detail

The minimal Source Note fields, source-origin presentation, Source Capture review flow and paired Workbench UX/UI mockups remain open under `UX-006`.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
