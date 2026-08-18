# Session — Domain Rule Acceptance Coverage

**Session ID:** 2026-08-18-29

**Date:** 2026-08-18

**Status:** Crystallized

## Context

Domain Rules govern product-domain policy and must be traceable to observable evidence. Domain Concepts and Domain Relationships provide structural meaning, but do not independently express observable system behavior.

## Decision

- A Domain Rule is an eligible Acceptance Criterion validation target.
- Starting `Add Acceptance Criterion` from a Domain Rule preselects it as the primary validation target.
- Missing acceptance coverage does not prevent a Domain Rule's initial save; it remains a visible coverage cue.
- One Acceptance Criterion may validate a Domain Rule and a related Functional Requirement only when its observable evidence genuinely covers both.
- Domain Concepts and Domain Relationships remain structural context rather than Acceptance Criterion targets.

## Deferred Detail

- document-first Data or Domain Model authoring flow;
- domain-specific impact-propagation rules;
- acceptance-coverage presentation within the Data or Domain Model section.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
