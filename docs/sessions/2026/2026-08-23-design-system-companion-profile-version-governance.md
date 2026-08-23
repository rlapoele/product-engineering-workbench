# Session — Design System Companion Profile-Version Governance

**Session ID:** 2026-08-23-08

**Date:** 2026-08-23

**Status:** Crystallized

## Context

The Google `DESIGN.md` specification is an external, evolving source. A system-supported Design System Companion Export Profile must produce reproducible results and cannot silently follow a moving upstream branch, even though prepared handoff snapshots already preserve their generated files.

## Decision

The first supported profile remains Google `DESIGN.md` target version `alpha`, with Workbench mapping revision `1`. Its external baseline is the [Google Labs Code DESIGN.md specification at commit `9bf8eae67128b6cc55ad9bf86665767deb4c11cd`](https://github.com/google-labs-code/design.md/blob/9bf8eae67128b6cc55ad9bf86665767deb4c11cd/docs/spec.md).

An Export Profile records its target identity and version, its positive Workbench mapping revision, canonical source URL and pinned source revision. The package preview and immutable handoff snapshot expose those identifiers alongside its bindings, warnings and generated file.

A change to the external specification does not change the behavior of an existing Workbench mapping. Any future change to mapping, validation or serialization creates a new positive mapping revision of that profile or a separately supported profile. It becomes available only as an explicit choice for a later Prepare Handoff; it never rewrites canonical knowledge, mutates an earlier snapshot or silently changes a saved profile selection.

## Boundary

This decision governs system-supported profile evolution, not authoring. It does not lock the Workbench to a single target forever, fetch an external specification during handoff preparation or require users to choose a source revision. Adding or retiring a supported profile remains a deliberate product change.

## Source

- Google Labs Code [DESIGN.md Format at commit `9bf8eae67128b6cc55ad9bf86665767deb4c11cd`](https://github.com/google-labs-code/design.md/blob/9bf8eae67128b6cc55ad9bf86665767deb4c11cd/docs/spec.md).

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
