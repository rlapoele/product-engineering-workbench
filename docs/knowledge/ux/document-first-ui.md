# Document-First User Experience

This document describes the emerging document-first user experience for the Product Engineering Workbench.

The objective is to explain how users should experience specification work, regardless of how product knowledge is represented internally.

---

# 1. Purpose

The Product Engineering Workbench should allow users to create, refine and export implementation-ready product specifications.

The primary experience should feel familiar to users who are accustomed to working with product documents, while preserving structured product knowledge behind the scenes.

Users should feel that they are working on one coherent specification document, not manually maintaining a disconnected collection of records.

---

# 2. First Target User

The first target user is an AI-assisted developer.

This user wants to specify future digital products clearly enough that the resulting specification can be consumed by:

- the user as a human developer;
- a human developer using AI assistance;
- an AI implementation environment;
- implementation agents operating inside external coding tools.

The first version of the product should optimize for this user before generalizing to broader team or enterprise use cases.

---

# 3. MVP Project Creation Flow

The MVP should allow users to create a new project.

When creating a project, users should provide a small number of project properties and select a Specification Document Template.

Project creation should include:

- project title;
- short project description;
- intended specification purpose;
- selected Specification Document Template;
- selected preset;
- selected or customized template sections.

The user should be able to customize which template sections are included before beginning specification work.

User-authored specification content should use a Project or Specification-level `contentLocale`.

---

# 4. Specification Document Template

A Specification Document Template is the user-facing structure used to start a project specification.

It defines the sections the user expects to complete in order to produce an implementation-ready specification.

The term Specification Document Template is preferred in the user experience because it is concrete and familiar. The term Workflow Template may still be useful internally when describing sequencing, validation rules, expected artifact types and AI assistance strategies.

## Initial Template Direction

The MVP should start with one initial Specification Document Template: `Implementation-Ready Web App Specification`.

This template should contain enough information for a human developer, an AI-assisted developer or an AI implementation environment to implement the specified product.

The initial template should be backed by a reusable Section Catalog.

Section Catalog entries should be localization-ready because section labels, descriptions and guidance are app-controlled content. Catalog entries should use stable section identifiers and localization keys such as `labelKey`, `descriptionKey` and `guidanceKey`.

The initial template should support multiple presets rather than separate small, medium and complex templates.

Initial presets should include:

- Simple Web Presence
- Standard Web App
- Complex Product App

Each preset should select and classify sections as:

- Required
- Recommended
- Optional

Required sections are necessary for the selected preset and cannot be removed without changing the preset or template rules.

Recommended sections are selected by default but may be removed by the user.

Optional sections are available but not selected by default.

Later, the product may support additional Specification Document Templates when the structure or purpose of the specification is meaningfully different.

The initial Section Catalog for the MVP is:

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
- UX/UI Design Requirements and Interaction Notes
- Technical Constraints and Preferences
- External Integrations
- AI or Automation Expectations
- Risks, Assumptions and Open Questions
- Implementation Guidance
- Validation and Testing Guidance
- Export and Handoff Instructions

The `User Stories and Use Cases` section may contain multiple items. Each item should be typed as either a User Story or a Use Case. These are distinct artifact types with different structures, but they belong in one section because both describe user-facing behavior and interaction intent.

## UX/UI Design Requirements And Interaction Notes

This section captures the application-specific UX/UI guidance needed for faithful implementation. It may contain UI Requirements, Screen/View and User Flow references, as well as shared visual design guidance that should not be repeated in each artifact.

Relevant content may include visual intent, layout and spacing conventions, color and typography use, shapes and elevation, component usage and states, responsive behavior, accessibility expectations and references to external design sources such as an existing design system or design files.

The section is not a design-system authoring surface. In the MVP, this guidance remains structured section content, artifact fields or external references rather than separate Design Token, Color, Typography or UI Component Product Artifacts.

## Initial Preset Classification

The initial Project Presets should classify the first Section Catalog as follows:

| Section | Simple Web Presence | Standard Web App | Complex Product App |
|---|---|---|---|
| Product Overview | Required | Required | Required |
| Problem or Opportunity | Recommended | Required | Required |
| Goals and Success Criteria | Required | Required | Required |
| Non-Goals | Recommended | Recommended | Required |
| Target Users or Personas | Required | Required | Required |
| User Needs | Optional | Required | Required |
| Scope | Required | Required | Required |
| Core Features | Required | Required | Required |
| User Stories and Use Cases | Optional | Recommended | Required |
| Acceptance Criteria | Required | Required | Required |
| Functional Requirements | Required | Required | Required |
| Non-Functional Requirements | Optional | Recommended | Required |
| Data or Domain Model | Optional | Required | Required |
| UX/UI Design Requirements and Interaction Notes | Required | Required | Required |
| Technical Constraints and Preferences | Recommended | Recommended | Required |
| External Integrations | Optional | Optional | Recommended |
| AI or Automation Expectations | Optional | Optional | Recommended |
| Risks, Assumptions and Open Questions | Recommended | Required | Required |
| Implementation Guidance | Recommended | Recommended | Required |
| Validation and Testing Guidance | Required | Required | Required |
| Export and Handoff Instructions | Optional | Recommended | Required |

This classification is a first pass and should be validated through future specification exercises.

## Core Feature And Functional Requirement Distinction

A Core Feature is a user-visible capability or product area.

It answers: what major thing does the product let users do?

A Functional Requirement is a specific behavioral rule or obligation the system must satisfy.

It answers: what exactly must the system do?

For example, `Contact form` may be a Core Feature, while `The contact form must validate email addresses before submission` is a Functional Requirement.

---

# 5. Document View Over Structured Knowledge

The primary editing surface should present the specification as a single coherent document.

Behind the scenes, the system may represent the document as structured product knowledge, such as an artifact tree, artifact graph or another structured model.

The user should not need to think in terms of graphs or internal storage structures during ordinary editing.

The document view should support:

- reading the specification as a coherent whole;
- editing individual sections or artifacts;
- requesting review or assistance on a section, artifact or full specification;
- tracking artifact status and review state;
- preserving relationships, provenance and context;
- exporting the specification as an implementation handoff package.

---

# 6. Collaboration In The Document

The document-first experience should support optional collaboration.

The owner of a project should be able to request assistance on:

- the entire specification;
- a document section;
- a Product Artifact;
- a selected portion of content.

Assistance may be requested from human contributors or AI contributors.

Contributor matching should be based on capabilities rather than only fixed roles.

Contributor availability should shape which collaborators the user can request help from.

For human contributors in the MVP, availability depends on invitation and acceptance. A project owner may invite a human collaborator at project creation time or later. The invited person may need to complete onboarding before accepting the invitation and becoming available for scoped Collaboration Requests.

For AI Contributors provided by the application in the MVP, availability is different. Built-in AI assistance should be available by default when the relevant AI capability is enabled and usable. The user does not invite built-in AI Contributors in the same way they invite human collaborators.

Example capabilities include:

- Requirements Review
- UX Review
- Architecture Review
- Security Review
- Accessibility Review
- QA Review
- Risk Analysis
- Implementation Readiness Review
- AI Draft Generation
- AI Consistency Analysis

The project owner remains responsible for accepting, rejecting or acting on contributions.

## Assistance Request Types

The MVP should expose a compact set of user-facing Assistance Request Types.

The goal is to help users ask for meaningful help without overwhelming them with many similar actions. More specific behavior can be handled internally through capabilities, prompts, response formats and context rules.

Initial Assistance Request Types:

| Request Type | User Intent |
|---|---|
| Draft | Create a first version. |
| Improve | Make this clearer, stronger or more precise without changing the basic intent. |
| Request Feedback | Tell me what you think, what feels unclear and what may be worth improving. |
| Review | Check this carefully against a specific lens or standard. |
| Find Gaps | Identify what is missing or underdeveloped. |
| Find Inconsistencies | Identify conflicts or contradictions with other product knowledge. |
| Analyze Impact | Explain what this affects, depends on or may influence. |
| Suggest Alternatives | Propose other viable options or approaches. |
| Validate Readiness | Determine whether this is ready for the next step or implementation handoff. |
| Ask Question | Help answer a specific question or think through a topic. |
| Prepare Handoff | Generate or refine implementation handoff materials. |

Request Feedback and Review should remain distinct.

Request Feedback is open-ended, judgment-based and conversational. It asks a contributor to react, comment and suggest improvements.

For Product Overview, Request Feedback should assemble the overview and any stated feedback focus as primary context. Problem or Opportunity, Target Users or Personas, Goals and Success Criteria, Scope and Non-Goals should provide the usual strategic orientation; User Needs and Core Features should be included only when they clarify the overview. The response should be a caveated Comment, Question, Suggested Edit, Summary, Proposed Artifact or Proposed Decision rather than a structured Review or readiness result. When strategic anchors are missing, the Context Explanation should say what limited the feedback.

Draft on a Product Overview should use the stated prompt or source material, existing overview content and the section or template guidance as primary context. It may return a limited draft when strategic anchors are missing, but must make assumptions and open questions visible rather than inventing product facts or presenting generated content as validated.

Suggest Alternatives on a Core Feature should optimize for its linked User Need and Goal, rather than preserving the feature by default. It may propose a feature variant, outcome-preserving substitute, deferment or other scope/timing change, or a reframing that questions whether the feature addresses the right need or goal. Each Alternative Proposal should expose its rationale, trade-offs, assumptions, open questions and likely affected knowledge. It remains a proposal for the user to decide on; when outcome context is missing, strategic alternatives must be visibly labeled as constrained.

Review is structured, deliberate and criteria-based. It asks a contributor to evaluate the target against a specific capability, lens or standard.

Review should be treated as a composite assistance activity.

A Review may run multiple checks, such as gap checks, inconsistency checks, ambiguity checks, testability checks, feasibility checks, alignment checks, risk checks and readiness checks.

Focused Assistance Request Types can expose some of those checks directly. For example, Find Gaps can run a focused gap check, while a broader Review can include gap checking alongside other checks.

This lets the user choose between narrow assistance and a fuller review without turning every internal check into a separate prominent UI action.

Not every Assistance Request Type should be available everywhere. The available options should depend on the current scope, artifact type, artifact maturity, contributor availability and eligible capabilities.

Some Assistance Request Types should be available at the entire specification level, not only on individual sections or artifacts.

First-pass contextual availability matrix:

| Scope | Likely Assistance Request Types |
|---|---|
| Entire Specification | Improve, Request Feedback, Review, Find Gaps, Find Inconsistencies, Analyze Impact, Suggest Alternatives, Validate Readiness, Ask Question, Prepare Handoff |
| Product Overview | Draft, Improve, Request Feedback, Review, Find Gaps, Ask Question |
| Goals and Success Criteria | Draft, Improve, Request Feedback, Review, Find Gaps, Find Inconsistencies, Validate Readiness, Ask Question |
| User Needs | Draft, Improve, Request Feedback, Review, Find Gaps, Find Inconsistencies, Suggest Alternatives, Ask Question |
| Core Feature | Draft, Improve, Request Feedback, Review, Find Gaps, Analyze Impact, Suggest Alternatives, Ask Question |
| User Story | Draft, Improve, Request Feedback, Review, Find Gaps, Find Inconsistencies, Validate Readiness, Ask Question |
| Use Case | Draft, Improve, Request Feedback, Review, Find Gaps, Analyze Impact, Validate Readiness, Ask Question |
| Acceptance Criteria | Draft, Improve, Request Feedback, Review, Find Gaps, Validate Readiness, Ask Question |
| Functional Requirement | Draft, Improve, Request Feedback, Review, Find Gaps, Find Inconsistencies, Analyze Impact, Validate Readiness, Ask Question |
| Non-Functional Requirement | Draft, Improve, Request Feedback, Review, Find Gaps, Validate Readiness, Ask Question |
| Screen / View or UI Requirement | Draft, Improve, Request Feedback, Review, Find Gaps, Analyze Impact, Validate Readiness, Ask Question |
| Risk | Draft, Improve, Request Feedback, Review, Analyze Impact, Suggest Alternatives, Ask Question |
| Assumption | Improve, Request Feedback, Review, Analyze Impact, Suggest Alternatives, Validate Readiness, Ask Question |
| Decision | Improve, Request Feedback, Review, Analyze Impact, Suggest Alternatives, Ask Question |
| Open Question | Improve, Request Feedback, Analyze Impact, Suggest Alternatives, Ask Question |
| Selected Content | Improve, Request Feedback, Review, Find Gaps, Find Inconsistencies, Ask Question |

The matrix is a first pass. It should be validated through concrete specification exercises before being treated as final.

## Accessibility Specification Review

A Review on a UI Requirement may use the Accessibility Lens to assess whether the specification defines accessible outcomes, risks and verification needs clearly enough for implementation and later evaluation.

The review should include the UI Requirement, related Screen/View and User Flow, interaction and state behavior, linked Functional Requirements and Acceptance Criteria, applicable UX/UI design guidance, explicit accessibility expectations and any declared accessibility target. Related User Stories, User Needs, external design references, technical constraints, Decisions, Risks, Assumptions, Open Questions and prior Reviews may provide supporting context.

The default lens is standards-informed but does not claim conformance. A declared target such as WCAG 2.2 AA may guide the review and its findings. Without one, the Context Explanation should say that the review applied general accessibility principles and cannot certify conformance.

The review should conclude that specification coverage appears sufficient, that gaps or risks were found, or that accessibility cannot yet be assessed from the available specification. It should return Findings, Suggested Edits, Questions, Proposed Artifacts or a Summary; it should not silently alter canonical product knowledge.

## Contribution Response Shapes

The result of an assistance request should be presented according to its Response Shape.

The Response Shape determines what the user receives and what actions are available.

Initial MVP Response Shapes:

| Response Shape | What The User Receives | Likely Actions |
|---|---|---|
| Comment | A general note, observation or reaction. | Resolve, reply, ignore or turn into another action. |
| Question | A clarification request. | Answer, discuss or convert to an Open Question. |
| Finding | A structured issue or observation from a review or check. | Accept, dismiss, create a follow-up artifact or request changes. |
| Suggested Edit | Proposed replacement or modification for existing content. | Accept, reject or edit before accepting. |
| Proposed Artifact | A suggested new Product Artifact. | Accept, reject or edit before accepting. |
| Proposed Relationship | A suggested relationship between artifacts. | Accept, reject or adjust. |
| Proposed Decision | A suggested decision, option or recommendation. | Accept as Decision, reject or discuss further. |
| Readiness Result | A readiness judgment with blockers, warnings or next actions. | Accept, act on blockers, defer or export with warnings. |
| Summary | A condensed explanation of content, context or results. | Use as reference or insert if accepted. |
| Handoff Material | Generated or refined handoff content. | Accept into the export package, edit or reject. |

Review findings should be grouped by Finding Type where useful.

Example Finding Types:

- Gap
- Inconsistency
- Ambiguity
- Risk
- Blocker
- Dependency
- Recommendation
- Readiness Warning

## MVP Collaboration Mode

MVP collaboration should be asynchronous and transactional.

The MVP should not support real-time co-editing, shared cursors, live presence or simultaneous editing conflict resolution.

Instead, a project owner should create a scoped Collaboration Request for a contributor. The contributor should be able to open the request, review the relevant context, submit a Contribution Response and leave the requestor to review it later.

Human collaborators should participate through this asynchronous request and response flow. AI Contributors may return responses more immediately, but their contributions should still be treated as scoped assistance that the project owner can review before canonical product knowledge changes.

The project owner should be able to see submitted responses, then accept, reject, comment on or otherwise act on them.

If an accepted contribution changes canonical product knowledge, the resulting change should be recorded as a Revision.

## Stale Artifact Review

When a user updates or archives an artifact, the workbench should be able to identify downstream artifacts that may have been impacted.

Potentially impacted downstream artifacts should be marked Stale and shown to the user with an explanation of why they need attention.

The explanation should identify the changed or archived artifact, the relevant relationship path when available and the triggering Revision.

The user should be able to review each Stale artifact and choose whether to update it, confirm it remains valid, leave it Stale, archive it or create a follow-up Open Question.

The Stale state should not imply that an artifact is wrong. It should communicate that the artifact may need review because related upstream knowledge changed.

The interface may offer contextual AI assistance on Stale artifacts, such as requesting recommendations for possible updates.

This should be presented as a contextual action rather than a new primary Assistance Request Type for the MVP.

## AI Assistance Visibility And Governance

AI assistance should remain visible without dominating the document-first experience.

When AI contributes through the workbench, the user should be able to inspect the request, scope, response, status, relevant context explanation and resulting provenance or revision history.

AI-generated or AI-assisted material should not silently become canonical product knowledge. It should enter the product knowledge through accepted Contribution Responses, explicit user action or another authorized workflow.

The user experience may support project-level governance settings for built-in AI capabilities, such as enabling or disabling AI assistance or limiting where specific AI capabilities can be used.

The workbench should not claim to prevent all external AI use by human collaborators. A human contributor may use an outside AI tool before submitting work. The product can support disclosure, provenance notes and review workflows for known AI-assisted work, but cannot reliably prove that a human contribution was not externally AI-assisted.

---

# 7. Export Experience

The MVP should allow users to export a completed or partially completed specification.

The export should be suitable for implementation handoff.

The export format should be a zip file containing a directory structure that reflects the specification structure and the product knowledge needed for implementation.

The export should be usable by:

- humans working without AI assistance;
- humans working with AI coding tools;
- AI implementation environments;
- external delivery or implementation tools.

## Target Package Structure

The intended target Implementation Handoff Package should include human-readable specification files, artifact-level files, metadata and an implementation brief.

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

## MVP Minimum Package

The MVP may initially defer the `artifacts/` folder and expanded `metadata/` folder as stretch items.

The MVP minimum package should include:

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

## Export Rules

`SPECIFICATION.md` should be a complete combined version of the specification.

Each included section should also have its own Markdown file.

Stable artifact IDs should be embedded in `SPECIFICATION.md` and in section Markdown files so humans can understand relationships without constantly navigating to metadata files.

`IMPLEMENTATION_BRIEF.md` should be generated by default and optimized for human developers, AI-assisted developers and AI implementation environments.

`VERIFICATION_CHECKLIST.md` should be generated by default to help implementation consumers validate that the delivered software satisfies the specification.

`manifest.json` should be generated by default and treated as the minimal required metadata file.

The package should include unresolved open questions and known risks.

When the `UX/UI Design Requirements and Interaction Notes` section is included, the package should carry its active guidance and external design-source references into the section export and implementation brief. Missing, Stale or externally maintained UX/UI guidance should be identified as an implementation caveat rather than silently omitted.

Open questions should not block export by default, but the package should clearly indicate when implementation may be blocked or risky because unresolved questions remain.

## Handoff Profiles

Implementation Handoff Packages should eventually be generated through Handoff Profiles.

A Handoff Profile defines the intended consumer of the package and shapes the generated files, guidance, emphasis and format.

Handoff Profiles are not AI-specific. They should support both human and AI consumers.

For the MVP, the product should support one default Handoff Profile: `Implementation Handoff`.

The default profile should be human-readable and AI-useful. It should serve human developers, AI-assisted developers and AI implementation environments without introducing separate profile variants in the MVP.

The default `Implementation Handoff` profile should generate:

- `README.md`;
- `IMPLEMENTATION_BRIEF.md`;
- `VERIFICATION_CHECKLIST.md`;
- `manifest.json`;
- `specification/SPECIFICATION.md`;
- section-level Markdown files under `specification/`.

`IMPLEMENTATION_BRIEF.md` should include a suggested implementation sequence rather than a delivery roadmap, backlog or sprint plan.

Prepare Handoff should generate the best available package for the selected scope even when caveats remain. The package should distinguish `Prepared` from `Prepared with Caveats`, without treating either as a Product Artifact lifecycle state. Direct active dependencies outside the selected scope should be listed as external dependencies.

Potential future profiles include:

- Generic Human Developer
- AI-Assisted Developer
- Codex
- Claude Code
- Gemini
- Cursor
- Agency / Client Handoff
- QA / Review Handoff

Future Handoff Profiles may control:

- which files are generated;
- wording and emphasis of `IMPLEMENTATION_BRIEF.md`;
- whether tool-specific guidance files such as `AGENTS.md`, `CLAUDE.md` or `GEMINI.md` are generated;
- how much context is included;
- whether stack-specific guidance is included;
- whether verification checklists are included;
- how prominently unresolved open questions and risks are presented;
- whether artifact-level files or expanded metadata are included.

---

# 8. Current UX Direction

The MVP should be document-first, template-driven and implementation-handoff oriented.

Users should create projects from Specification Document Templates, work in a coherent specification document, optionally request assistance from capable human or AI contributors and export the result as an implementation-ready package.

The canonical product knowledge does not need to be a literal document internally. It only needs to support a document-like experience that users can understand and trust.
