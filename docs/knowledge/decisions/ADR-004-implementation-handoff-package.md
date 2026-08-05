# ADR-004 — Implementation Handoff Package

**Status:** Accepted

**Date:** 2026-07-17

---

## Context

The Product Engineering Workbench must produce specifications that can be consumed by humans, AI-assisted developers and AI implementation environments.

The export is central to the product's value because the workbench intentionally stops where software implementation begins.

The exported package needs to be readable by humans, useful to AI coding tools and structured enough to preserve artifact identity and traceability.

The project also needs to avoid overengineering the MVP by implementing a full artifact and metadata export too early.

---

## Origin

Resolved from:

- UX-003 — What should the MVP implementation handoff package contain?

---

## Decision

The target Implementation Handoff Package will be a structured zip export containing:

```text
implementation-handoff/
  README.md
  IMPLEMENTATION_BRIEF.md
  manifest.json
  specification/
    SPECIFICATION.md
    01-product-overview.md
    02-problem-or-opportunity.md
    03-goals-and-success-criteria.md
    ...
  artifacts/
    features/
      FEAT-001.md
    functional-requirements/
      FR-001.md
    user-stories/
      US-001.md
    use-cases/
      UC-001.md
    risks/
      RISK-001.md
    decisions/
      DEC-001.md
    open-questions/
      OQ-001.md
  metadata/
    project.json
    artifact-index.json
    relationship-index.json
    export.json
```

The MVP may initially defer the `artifacts/` folder and expanded `metadata/` folder as stretch items.

The MVP minimum export will include:

```text
implementation-handoff/
  README.md
  IMPLEMENTATION_BRIEF.md
  manifest.json
  specification/
    SPECIFICATION.md
    01-product-overview.md
    02-problem-or-opportunity.md
    03-goals-and-success-criteria.md
    ...
```

The MVP must generate:

- a complete combined `specification/SPECIFICATION.md` file;
- one Markdown file per included specification section;
- stable artifact IDs embedded in combined and section Markdown;
- a top-level `IMPLEMENTATION_BRIEF.md`;
- a top-level `manifest.json`.

The export should include unresolved Open Questions and known Risks.

Open Questions should not block export by default, but the package should clearly indicate when unresolved questions may block or increase the risk of implementation.

Implementation Handoff Packages should eventually be generated through Handoff Profiles.

A Handoff Profile defines the intended consumer of the package and shapes the generated files, guidance, emphasis and format.

Handoff Profiles are not AI-specific. They should support both human and AI consumers.

For the MVP, the workbench should support one default Handoff Profile: `Implementation Handoff`.

The default profile should be human-readable and AI-useful. It should serve human developers, AI-assisted developers and AI implementation environments without forcing separate profile variants in the MVP.

The default `Implementation Handoff` profile should generate:

- `README.md`;
- `IMPLEMENTATION_BRIEF.md`;
- `VERIFICATION_CHECKLIST.md`;
- `manifest.json`;
- `specification/SPECIFICATION.md`;
- section-level Markdown files under `specification/`.

`IMPLEMENTATION_BRIEF.md` should include a suggested implementation sequence, not a delivery roadmap, backlog or sprint plan.

Specialized Handoff Profiles such as Codex, Claude Code, Gemini, Cursor, Agency / Client Handoff or QA / Review Handoff should be deferred until after the MVP.

---

## Rationale

This decision:

- supports human reading through Markdown files and a complete combined specification;
- supports AI implementation environments through an implementation brief and manifest;
- preserves stable artifact identifiers in human-readable files;
- leaves room for richer artifact-level and metadata exports later;
- avoids forcing the MVP to implement every part of the target export model immediately.

Embedding stable IDs directly in Markdown lets humans understand relationships without constantly switching to machine-readable metadata.

Providing `manifest.json` from the start establishes a minimal export contract even before expanded metadata is implemented.

---

## Consequences

The workbench must support generation of:

- combined specification Markdown;
- section-level Markdown;
- stable artifact IDs;
- an implementation brief;
- a verification checklist;
- a manifest file;
- warnings or indicators for unresolved Open Questions and known Risks.

The MVP can postpone:

- artifact-level file generation;
- expanded metadata files;
- relationship index exports;
- Project Archive import; a handoff package is not an import source.

Future export work should evolve toward the target package structure without breaking the MVP export contract.

Future export work should evolve specialized Handoff Profiles without breaking the default MVP `Implementation Handoff` profile.

---

## Alternatives Considered

### Document-only export

This would be simple and human-readable, but weak for traceability, AI consumption and future structured workflows.

### Section-based export only

This would improve readability and navigation, but would not define a clear path toward artifact-level consumption.

### Full section, artifact and metadata export from day one

This would be the strongest long-term structure, but risks overengineering the MVP.

### Target full export with MVP minimum subset

This was selected because it defines the desired endpoint while allowing implementation to proceed incrementally.

---

## Related Documents

- `docs/knowledge/ux/document-first-ui.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ai/ai-orchestration.md`
- `docs/planning/open-questions.md`
- `docs/sessions/2026/2026-07-17-mvp-direction-and-collaboration.md`
