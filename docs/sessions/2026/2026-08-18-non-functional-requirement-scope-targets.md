# Session — Non-Functional Requirement Scope Targets

**Session ID:** 2026-08-18-18

**Date:** 2026-08-18

**Status:** Crystallized

## Context

A measurable quality expectation needs an explicit scope so it can be authored, reviewed, validated and handed off without making abstract product intent or document organization appear to be execution targets.

## Decision

- Every Non-Functional Requirement has one required primary scope target and may have additional explicit targets.
- The primary target supplies the NFR's main authoring and document context.
- Additional targets allow one shared quality expectation to cover related knowledge without duplicate NFR artifacts.
- The initial eligible target set is Whole Specification, Core Feature, Functional Requirement, Use Case, Screen / View, User Flow and UI Requirement.
- Goals, User Profiles, User Needs and Requirement Groups are not initial NFR scope targets.

## Consequences

Quality expectations can be global, behavioral, interaction-specific or interface-specific while retaining an explicit traceability anchor. The controlled target set avoids unhelpful links to abstract intent while remaining broad enough for initial implementation-ready specification work.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/index.md`
