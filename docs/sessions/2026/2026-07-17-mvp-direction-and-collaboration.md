# Session — MVP Direction and Collaboration Model

**Date:** 2026-07-17

**Status:** Crystallized

---

## Context

The project owner clarified the intended first target user, MVP experience and collaboration expectations for the Product Engineering Workbench.

The discussion focused on how users should create projects, work on specifications, request help from human or AI contributors and export implementation-ready specifications.

---

## Key Clarifications

- The first target user is the project owner as an AI-assisted developer.
- The MVP should be a web app where users can create projects.
- Project creation should include basic project properties and selection of a Specification Document Template.
- Users should be able to customize which template sections they intend to use.
- Once created, the project should feel like one coherent specification document.
- The underlying representation does not need to be a literal document. It may be an artifact tree, graph or structured object rendered as a document.
- The MVP should allow users to export their specification, likely as a zip file.
- The export may contain a directory structure representing the document structure and multiple files containing specification content.
- Exported specifications should be usable by humans, AI-assisted developers or AI implementation environments.

---

## Collaboration Clarification

The workbench should also support specification collaboration.

Project owners should be able to request assistance from human contributors or AI contributors.

Requests for assistance may apply to:

- the entire specification;
- a document section;
- a Product Artifact;
- a selected portion of content.

Contributor matching should be based on capabilities rather than only fixed roles.

Capabilities are equivalent to skills or areas of expertise that allow contributors to perform specific actions such as review, analysis, generation or refinement.

The project owner remains responsible for deciding whether to accept, reject or act on contributions.

## MVP Collaboration Decision

MVP collaboration should be asynchronous and transactional.

The MVP should use Collaboration Requests and Contribution Responses rather than real-time co-editing.

Contributors should be able to view pending requests, open a request, review the relevant context, provide input and submit a response.

Submitted responses should be stored with a status indicating whether they have been acted upon by the requestor.

The requestor should be able to review submitted responses and decide whether to accept, reject, comment on or otherwise act on them.

The MVP should not include real-time co-editing, shared cursors, live presence or simultaneous editing conflict resolution.

---

## Terminology Clarifications

Specification Document Template was introduced as a preferred user-facing term for the template selected during project creation.

Workflow Template may remain useful internally or conceptually when describing sequencing, validation rules, artifact expectations, contributor assistance or export behavior.

AI Contributor describes an AI participant inside the workbench.

AI Implementation Environment describes an external environment that consumes exported specifications to implement software.

Implementation Handoff Package describes an exported specification package intended for humans, AI-assisted developers or AI implementation environments.

---

## Initial Specification Document Template Candidate

The first template should contain enough information for a human developer, AI-assisted developer or AI implementation environment to execute on the specification.

Candidate sections:

- Product Overview
- Problem or Opportunity
- Goals and Success Criteria
- Non-Goals
- Target Users or Personas
- User Needs
- Scope
- Core Features
- User Stories or Use Cases
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

---

## Documents Updated

- `docs/knowledge/ux/document-first-ui.md`
- `docs/knowledge/ai/ai-orchestration.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/glossary/glossary.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`

---

## Open Questions Created or Updated

- UX-001 — Is the document a canonical object or a view over artifacts?
- UX-002 — What should the first Specification Document Template contain?
- UX-003 — What should the MVP implementation handoff package contain?
- COLL-001 — How should capability-based collaboration work? Resolved for MVP as asynchronous, transactional collaboration.

---

## Recommended Next Step

Validate the first Specification Document Template by walking through a concrete example product and checking whether the candidate sections provide enough information for implementation handoff.
