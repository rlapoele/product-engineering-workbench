# Session — Resource Reference Purpose Catalog Validation

**Date:** 2026-07-22

**Session ID:** 2026-07-22-26

**Status:** Crystallized

---

## Context

The Resource Reference details step needs a concise Purpose field that helps users explain why a source is attached without demanding free-form classification for ordinary cases. The MVP must avoid introducing an administration or metadata-management model before that broader area is designed.

---

## Decision

For the MVP, Resource Reference Purpose is a compact prescribed list:

- **Visual reference**;
- **Prototype**;
- **Source material**;
- **Contract**;
- **Research**;
- **Example**; and
- **Other**.

Selecting **Other** requires a short user-authored purpose. For a Screen / View, **Visual reference** is selected initially but remains editable.

The MVP does not define administrative roles, a metadata-catalog administration surface or Purpose-list customization. Those concerns are deferred for a future administration discussion.

---

## Consequences

Users receive a compact set of recognizable choices while retaining an escape hatch for legitimate material that does not fit. The selected Purpose remains target-specific Resource Reference metadata, not a property silently shared by every reference to the same Resource.

The fixed list keeps the MVP interaction and data model simple. Future configurability must define its own administration, permission, provenance and migration behavior instead of being assumed from this decision.

---

## Documents Updated

- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

---

## Recommended Next Step

Validate the remaining Resource Reference details fields and their compact local disclosure treatment, beginning with whether a visual reference uses one context-sensitive caption or separate description and caption fields.
