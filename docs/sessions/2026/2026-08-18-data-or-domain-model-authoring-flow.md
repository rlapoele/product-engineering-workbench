# Session — Data or Domain Model Authoring Flow

**Session ID:** 2026-08-18-30

**Date:** 2026-08-18

**Status:** Crystallized

## Context

The Data or Domain Model needs a document-first authoring experience that exposes the richer connected model without forcing authors through a fixed product-engineering sequence.

## Decision

- The section contains fixed **Domain Concepts**, **Domain Relationships** and **Domain Rules** blocks.
- It exposes `Add Domain Concept`, `Add Domain Relationship` and `Add Domain Rule`; authors may begin with any action.
- A Domain Relationship started from a Domain Concept preselects that concept as source.
- A Domain Rule started from a Domain Concept or Domain Relationship preselects that item in its **Governs** list.
- The workbench enforces only the prerequisites needed to save the current item. It preserves an unfinished private draft while the author explicitly creates required missing knowledge, then resumes with that knowledge selected.
- Domain Concepts and Domain Rules use ordinary edit and archive actions. Domain Relationships use explicit edit and remove actions as first-class relationship records.

## Deferred Detail

- impact-propagation behavior for Domain Concepts, Rules and Relationships;
- detailed validation and coverage presentation in the section;
- specific relationship mechanics for the Domain Rule **Governs** list.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
