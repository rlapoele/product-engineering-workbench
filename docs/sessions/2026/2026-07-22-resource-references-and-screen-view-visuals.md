# Session — Resource References and Screen/View Visuals

**Date:** 2026-07-22

**Session ID:** 2026-07-22-17

**Status:** Crystallized

---

## Context

Screen/View artifacts already describe user-facing surfaces, but implementation-ready specifications often benefit from screenshots, mockups, wireframes, prototypes and existing design files. The same need applies beyond Screen/View: a product brief may support a Product Overview, a contract may support a Functional Requirement, and research may support an Open Question.

The workbench needs to support files and links without introducing a separate Product Artifact type for every external material or forcing users to manage links in a separate document section.

---

## Decision

The MVP supports general Resources and Resource References.

A Resource is reusable supporting material for a Project, represented either as a managed uploaded file or an external URL. A Resource Reference attaches a Resource directly to a Specification, Specification Section or Product Artifact, and includes a user-authored purpose or type and description or caption. Users create the reference while working at that location; they do not need to navigate to a separate external-links section first.

Resource References are not Product Artifacts, Context References or Artifact Relationships. They do not automatically enter every AI request or expand a handoff scope. A Resource becomes a Product Artifact only when it needs independent lifecycle, review state, relationships, provenance or collaboration.

Screen/View visual references are the first specialized use of Resource References. They may identify screenshots, mockups, wireframes, prototypes or design-file references and may include represented-state and viewport context in addition to the general reference fields.

---

## Handoff And AI Rules

When a Resource Reference is attached to included handoff scope, it travels with that scope. A managed uploaded file is copied into the Implementation Handoff Package with its reference metadata. An external URL remains a labeled link; when its availability cannot be established, it is surfaced as a caveat rather than silently treated as available package content.

Resource References are Candidate Context for AI assistance only when attached to the requested scope or other relevant selected context, available to the contributor and permitted by project access rules. Context Assembly remains responsible for deciding relevance and for explaining included, unavailable or excluded resources.

---

## Consequences

Users can attach supporting material where it is useful—at Specification, Section or Product Artifact level—without proliferating Product Artifact types or separate link-management flows.

The model supports both early screenshots of an existing product and later design references while preserving prose and structured Product Knowledge as the authoritative product definition.

Storage limits, malware scanning, link checking, fine-grained permissions, preview rendering and file-version behavior remain implementation and security design work. They do not change the MVP conceptual distinction between a Resource and a Resource Reference.

---

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/knowledge/ai/ai-orchestration.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

---

## Recommended Next Step

Validate the direct document-first interaction for attaching, describing, previewing and replacing a Resource Reference on a Screen/View, including how an unavailable external link is shown without blocking ordinary editing.
