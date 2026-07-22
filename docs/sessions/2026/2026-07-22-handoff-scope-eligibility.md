# Session — Handoff Scope Eligibility

**Date:** 2026-07-22

**Session ID:** 2026-07-22-03

**Status:** Crystallized

---

## Context

Prepare Handoff already supports a user-selected partial Specification scope. The workbench needs to prevent a structurally contextless selection, such as an isolated Product Artifact, from producing a handoff without relying on inferred product semantics or turning readiness into a delivery gate.

---

## Decision

Handoff scope eligibility is a deterministic precondition for Prepare Handoff. It is distinct from readiness validation and applies even when the user disables `Validate Readiness`.

The Handoff Profile owns scope-eligibility rules because eligibility depends on the intended handoff consumer and package. The Specification Document Template supplies the section and containment structure to which those rules apply. Product Artifact types do not receive universal handoff-scope rules in the MVP.

For the MVP `Implementation Handoff` profile, the entire Specification or at least one selected section with non-whitespace section content or an active contained Product Artifact is an eligible root scope. Selecting a section includes its active contained artifacts and subsections by default. Individual artifacts may be deselected to narrow a selected section's included content, but an individual artifact cannot be the sole handoff root.

The scope selector may show an ineligible temporary selection, but it must explain the missing structural context and keep Prepare Handoff unavailable until the user includes an eligible section or removes the isolated artifact.

Direct external dependencies remain outside the selected scope unless the user explicitly selects them. They are evaluated as external dependencies during readiness validation and must not be silently added as required context.

---

## Consequences

The MVP avoids preparing a structurally contextless package while retaining user control over partial handoff scope.

Scope eligibility establishes that the user has selected a coherent document unit. Readiness remains responsible for reporting whether that eligible scope has blockers, caveats or insufficient product definition.

Future Handoff Profiles may explicitly support artifact-rooted handoffs by defining an appropriate minimum contextual bundle for their intended consumers.

---

## Documents Updated

- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/open-questions.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

---

## Recommended Next Step

Validate how an eligible section-rooted scope with no meaningful product definition is handled at the readiness and package-preparation boundary.
