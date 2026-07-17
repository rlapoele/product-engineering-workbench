# ADR-002 — Document-First Template Model

**Status:** Accepted

**Date:** 2026-07-17

---

## Context

The Product Engineering Workbench must let users create implementation-ready specifications without forcing them to think in terms of internal data structures.

The first target user is an AI-assisted developer who wants to create specifications for web applications of different complexity, from a simple resume landing page to a complex product such as the workbench itself.

During exploration, several template approaches were considered:

- separate templates for small, medium and complex projects;
- separate templates with mandatory and optional sections;
- one large template with sections selected by project complexity;
- one reusable section catalog with presets.

The workbench also needs to preserve structured product knowledge behind the scenes so that specifications can support review, traceability, collaboration, AI assistance and export.

---

## Origin

Resolved from:

- UX-001 — Is the document a canonical object or a view over artifacts?
- UX-002 — What should the first Specification Document Template contain?

---

## Decision

The MVP will use a document-first user experience.

Users will experience the specification as one coherent document, while the underlying product knowledge may be represented as structured artifacts, sections, relationships or another internal model.

The MVP will provide one initial Specification Document Template:

- `Implementation-Ready Web App Specification`

This template will be backed by a reusable Section Catalog and multiple Project Presets.

The initial Project Presets are:

- Simple Web Presence
- Standard Web App
- Complex Product App

Each preset classifies sections as:

- Required
- Recommended
- Optional

Small, medium and complex project choices are modeled as presets within the initial template, not as separate templates.

The initial Section Catalog is:

- Product Overview
- Problem or Opportunity
- Goals and Success Criteria
- Non-Goals
- Target Users or Personas
- User Needs
- Scope
- Core Features
- User Stories and Use Cases
- Acceptance Criteria
- Functional Requirements
- Non-Functional Requirements
- Data or Domain Model
- UX Requirements and Interaction Notes
- Technical Constraints and Preferences
- External Integrations
- AI or Automation Expectations
- Risks, Assumptions and Open Questions
- Implementation Guidance
- Validation and Testing Guidance
- Export and Handoff Instructions

The `User Stories and Use Cases` section may contain both User Story and Use Case artifacts.

---

## Rationale

This decision:

- keeps the MVP approachable for users familiar with product documents;
- preserves a path toward structured product knowledge;
- avoids maintaining multiple divergent templates too early;
- allows simpler projects to stay lightweight;
- allows complex projects to include richer specification sections;
- supports future specialized templates without duplicating the section model;
- keeps the first implementation centered on web-app specifications.

One reusable Section Catalog with presets provides more flexibility than separate small, medium and complex templates while remaining easier to reason about than a fully open-ended template system.

---

## Consequences

The workbench must support:

- project creation from a Specification Document Template;
- preset selection during project creation;
- section classification as Required, Recommended or Optional;
- section customization before or after project creation;
- rendering structured product knowledge as a coherent document;
- sections that can contain multiple Product Artifact types.

The first template and preset classification are accepted as a first pass and should be validated through concrete specification exercises.

Future templates may be added when the specification purpose or structure is meaningfully different, such as API services, mobile apps, design systems, AI features or migration projects.

---

## Alternatives Considered

### Separate small, medium and complex templates with all sections mandatory

This would make each template simple to describe but would likely make the experience too rigid and create unnecessary template duplication.

### Separate small, medium and complex templates with mandatory and optional sections

This would support customization but would still duplicate many shared section definitions.

### One large template where selected sections are all mandatory

This would reduce template duplication but would make selected sections too rigid and could overburden small projects.

### One reusable section catalog with presets

This was selected because it balances reuse, flexibility and clarity.

---

## Related Documents

- `docs/knowledge/ux/document-first-ui.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/planning/open-questions.md`
- `docs/sessions/2026/2026-07-17-mvp-direction-and-collaboration.md`
