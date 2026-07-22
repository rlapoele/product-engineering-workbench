# Session — Partial Handoff Package Boundary

**Date:** 2026-07-22

**Session ID:** 2026-07-22-10

**Status:** Crystallized

---

## Context

A partial Implementation Handoff Package must not merely contain less content than a whole-Specification export. Implementation consumers need an explicit, consistent explanation of what they are being asked to implement, what accompanies it as context, what remains outside the package, and which dependencies are external.

---

## Decision

Every partial package presents an explicit package boundary:

- Definition Scope;
- Supporting Context;
- Direct External Dependencies; and
- directly related knowledge intentionally outside the package.

The boundary is represented consistently by consumer:

| File | Responsibility |
|---|---|
| `README.md` | Concise package boundary and orientation. |
| `IMPLEMENTATION_BRIEF.md` | Human-readable Definition Scope, intentionally outside scope, caveats and suggested implementation sequence. |
| `manifest.json` | Authoritative machine-readable boundary record. |
| `specification/SPECIFICATION.md` | Complete combined representation of the handoff scope, not a claim to be the complete Project Specification. |
| Section Markdown files | Included Definition Scope and Supporting Context only, visibly labeled by role. |
| `READINESS_REPORT.md` | Optional separate readiness outcome, blockers and caveats. |

The manifest records Definition Scope entries, Supporting Context entries, Direct External Dependencies and directly related intentionally out-of-package knowledge.

The package does not attempt to enumerate the whole Project Specification as omitted. It identifies only directly related out-of-package knowledge whose absence could otherwise mislead the implementation consumer.

Direct External Dependencies are not represented as included knowledge.

---

## Consequences

Partial handoffs remain honest about their boundary while still providing a complete, navigable representation of their selected scope.

Human and machine consumers receive the same scope truth through representations appropriate to each, without duplicating the manifest as the canonical source.

---

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ai/ai-orchestration.md`
- `docs/planning/open-questions.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

---

## Recommended Next Step

Validate a concrete mixed partial handoff package, including Definition Scope, Supporting Context, directly related out-of-package knowledge and an external dependency.
