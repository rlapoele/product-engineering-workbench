# Session — Design System Companion Export Profiles

**Session ID:** 2026-08-23-02

**Date:** 2026-08-23

**Status:** Crystallized

## Context

The Design System Definition is canonical reusable design knowledge. A `design.md` file is an optional implementation-facing handoff output whose format can evolve independently, so it should not constrain source authoring or be selected when the Definition is created.

## Decision

During Prepare Handoff, the author chooses whether to include a Design System Companion. If included, the author selects a supported Design System Companion Export Profile or accepts a visible default. The selected inclusion decision, profile/version, profile bindings and generated file are retained in the immutable handoff snapshot. The same Definition may therefore be handed off without a companion or through different profiles in later handoffs.

The first profile is Google `DESIGN.md` `alpha`. It maps metadata, intentional omissions, typed token collections and ordered prose to the target format. Compatible token references are preserved. Component configurations flatten to target `components` entries using `component--configuration`; duplicate resulting keys block export rather than silently changing source names. Configuration descriptions render in Components guidance, while optional labels and tags remain Workbench organization metadata and are not exported by default.

Google's profile expects a `primary` color when Colors are included. A source token named `primary` satisfies this directly. Otherwise, the author explicitly selects a source color as a per-handoff primary-color binding, and the profile emits a derived `primary` alias without changing canonical source knowledge. Target-incompatible values or references, missing required bindings and duplicate flattened entries block that profile; unknown component property names pass through with a warning.

Screen / Views, User Flows and UI Requirements may appear only in a clearly labelled non-normative Workbench extension after the standard target sections.

## Boundary

An Export Profile is an adapter from canonical source knowledge to a target format, not a new design-system model or source-of-truth. It must not rename source identifiers, invent source values, require a target-specific authoring convention or make a Design System Companion mandatory for every handoff.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
