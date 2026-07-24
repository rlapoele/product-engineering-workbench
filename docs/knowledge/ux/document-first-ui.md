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

Users may attach a managed file or external link directly while working on the whole Specification, a Specification Section or a Product Artifact. The resulting Resource Reference includes a user-authored purpose and description at that location; users do not need to maintain a separate external-links section before referring to it in the Specification. A Screen / View may use visual Resource References for screenshots, mockups, wireframes, prototypes or design-file references, with optional represented-state and viewport context.

A Resource may be used at more than one location, but each Resource Reference is edited at its own attached target. Replacing the source creates a new Resource and updates only the explicitly chosen reference; it must not silently replace another artifact's or section's reference. Adding, removing or materially changing a reference follows the ordinary saved Revision and impact-feedback flow for its attached target. An unavailable external link is shown as an explainable caveat or preview failure without blocking ordinary editing; changing the URL creates a new Resource rather than implying that the original changed.

Resource actions belong in the contextual actions for the Specification, Section or Product Artifact where the reference will attach. `Add reference` guides the user to select an existing managed Resource, upload a file or enter an external URL, then supply its local Purpose and Description before saving. A Screen / View may additionally capture represented-state and viewport context. The saved reference appears inline at its target with its source type and, when available, a compact preview; the preview supplements rather than replaces the user-authored meaning. A downstream view may use Description as a caption, but Caption is not a separate Resource Reference field.

In the reference-details step, Purpose is a compact prescribed choice: `Visual reference`, `Prototype`, `Source material`, `Contract`, `Research`, `Example` or `Other`. Selecting `Other` reveals a required short custom-purpose field. A Screen / View initially selects `Visual reference`, which remains editable. The MVP does not define an administration surface or metadata configuration for this list.

For a `Visual reference` attached to a Screen / View, the optional local **Visual context** disclosure groups represented state and Viewport without expanding the default details step. Represented state is free text. Viewport is an optional choice: `Mobile portrait`, `Mobile landscape`, `Tablet portrait`, `Tablet landscape`, `Desktop` or `Other`; leaving it unselected means unspecified. `Other` reveals a required free-text viewport value for a device, exact dimensions or breakpoint. These fields help interpret the reference and do not define canonical interface behavior or a device model.

`Replace resource` first selects the replacement source, then asks whether to reuse the existing reference details. Reusing copies that reference's current Purpose, Description and applicable location-specific metadata into an editable draft; starting fresh leaves those fields empty and requires the user to enter the required details again. This choice applies only to the reference being replaced and changes nothing until the user explicitly saves. If an external source cannot be previewed or accessed, the inline reference must make that failure understandable without preventing the user from editing or saving the surrounding Product Knowledge.

Resource actions use the existing compact contextual-action surface rather than persistent document buttons. Its first level offers `Edit` and `Add reference` for a selected Product Artifact, or `Edit section` and `Add reference` for a selected Specification Section; the visible target heading provides the identity that the action labels omit. Selecting `Add reference` replaces that first level with source choices—choose an existing file or link, upload a file or add an external URL—and a back action returns to the first-level controls for the same target. After the user chooses a source, the same local, non-modal stepped surface advances to the reference-details draft. The contextual surface therefore behaves as a short, target-preserving wizard: each later step replaces the prior controls instead of adding persistent controls, nested hover menus or a dialog that interrupts document work.

Selecting a source alone is provisional navigation state: returning, leaving the document or otherwise abandoning the wizard before editing details retains no Resource Reference draft. A private local reference draft begins only when the user changes a reference-detail field, or explicitly chooses `Reuse details` during replacement. The draft includes its selected source and current local details, creates no Revision and is not canonical Product Knowledge. It persists through back navigation and ordinary navigation elsewhere in the workbench until the user saves or explicitly discards it. The MVP permits at most one active Resource Reference draft per attachment target; drafts on different targets remain independent. The document shows no permanent draft badge. Instead, when the user returns to the target's contextual control, its first level offers `Edit`, `Continue reference draft` and `Discard draft`; `Continue reference draft` temporarily replaces `Add reference` so a second competing attachment flow cannot begin. Continuing resumes the wizard at its last meaningful step, while discarding restores the ordinary `Edit` and `Add reference` actions.

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

## Initial Document Interaction And Editing Flow

After project creation, the user should see the selected Specification Document Template as an empty document outline: selected section titles are visible, but no substantive content or Product Artifacts exist yet.

The document should be an actionable canvas without permanently displaying controls throughout the specification.

On desktop, hovering an actionable section area or Product Artifact should reveal one neutral contextual-action control. Selecting that control opens the actions valid for that scope; it must not apply an action immediately. On mobile, where hover is unavailable, a tap or equivalent touch gesture should invoke the same contextual action menu before the user chooses an action. This keeps action discovery consistent across device types while avoiding persistent visual clutter.

Contextual actions and the information they progressively reveal should remain local to the selected document scope. They should use in-place replacement or expansion with ordinary back navigation, preserving the user's place in the document rather than opening a modal or dialog. This non-modal disclosure is the default, especially on mobile; any later exception must be justified by an interaction that cannot remain understandable in the document context.

The available actions must be explicit and scope-aware. For example, the action menu for an empty `Goals and Success Criteria` section may offer `Add Goal`; `Add Goal` is a menu choice, not a permanently displayed direct control. The action menu for an existing Goal exposes actions appropriate to that Goal, including `Edit`.

Blank space within a section invokes the section's action menu. Selecting an existing artifact invokes that artifact's action menu. This distinction lets a document section contain its own prose and multiple Product Artifacts without confusing their scopes.

### Inline artifact creation and rendering

Choosing an action such as `Add Goal` should insert the new Product Artifact directly into its natural document location and enter editing immediately. The initial inline editing surface should present the artifact's essential fields, such as its title and content, while complex type-specific information, relationships, provenance and review history remain progressively available through the artifact's contextual actions.

When not selected, an artifact should render primarily as normal specification prose with subtle, accessible artifact cues. The UI must not rely on color alone to communicate artifact identity or status. Selecting the rendered prose opens the artifact action menu; it does not start editing automatically. Selecting `Edit` then exposes the inline editing surface.

This creates three user-visible interaction states:

- reading, where the specification reads as coherent prose;
- selected, where the artifact's scope and contextual actions are visible; and
- editing, where the artifact's editable fields are available inline.

### Edit-in-progress drafts and revisions

An edit-in-progress draft is a persistent working copy owned by the user editing the artifact. It is not a Product Artifact lifecycle state, does not replace the current canonical Revision and is not exposed as accepted Product Knowledge to other contributors.

The user may leave an inline editing surface to read elsewhere in the document or navigate elsewhere in the application. The workbench must preserve the edit-in-progress draft without automatically completing it or interrupting the user with a leave prompt. When the user later selects the artifact to act on it, its action menu should offer `Keep editing draft`, `Discard changes` and `Done editing` instead of the ordinary `Edit` action.

`Done editing` is the sole explicit commit point for the working draft. It creates the new Revision, updates canonical Product Knowledge and then evaluates deterministic artifact-change impact propagation when applicable. In-progress typing and a preserved edit-in-progress draft must not create Revisions or mark related artifacts Stale.

### Impact feedback after a committed edit

After `Done editing`, the saved Revision should apply immediately. The workbench should then provide a non-blocking, artifact-anchored impact disclosure. It is collapsed by default, may show a compact affected-artifact count and can expand to a short navigable list of the affected artifacts.

The transient disclosure should disappear when the user acts outside the edited artifact or navigates to another page. It should not use a modal or otherwise interrupt document work.

The affected artifacts retain persistent, accessible cues in the document for as long as their impact result remains active. The document outline should also surface aggregate indicators on affected section titles, distinguishing Stale artifacts from coverage/readiness warnings rather than showing only one generic affected-item count.

These interaction rules are a first pass and should be validated through later prototypes and concrete specification exercises.

### Deterministic next-step guidance

The document should offer an optional, user-invoked `What next?` control near the document outline. It presents deterministic guidance derived from the current Project State; it is not a task list, Product Artifact, workflow gate or AI request.

The control should show up to three highest-priority items and allow the user to open the full list. Each item must state its scope, a plain-language reason and an action to navigate to that scope or open its normal contextual action menu. Guidance must not automatically apply a change or force the user to act in a prescribed order.

The initial deterministic guidance categories and priority order are:

| Priority | Guidance item | Deterministic rule |
|---:|---|---|
| 1 | Continue draft | The current user owns an Edit-in-progress Draft. |
| 2 | Resolve blocker | An active Open Question explicitly `blocks` an active artifact. |
| 3 | Review impact | Active artifacts are Stale or have coverage/readiness warnings; Stale ranks above a warning. |
| 4 | Complete required coverage | A required selected section has no non-whitespace section content and no active contained Product Artifacts. |

When several items have the same priority, the system should prefer the user's current scope, then direct relationship or impact paths, then broader document scope. Optional sections must not be presented as missing or problematic. The system must not claim semantic gaps or missing relationships unless a future explicit template or validation rule defines them.

If no deterministic guidance applies, the control should say that no immediate follow-up has been identified and leave the user free to continue wherever is useful.

AI may later offer a distinct, clearly labeled optional suggestion layer, but it is not required for this core guidance mechanism.

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

For AI Contributors in the MVP, availability is personal rather than invitation-gated. A human user may use one of their own enabled, usable Personal AI Assistants through Bring Your Own AI credentials; a project owner or other collaborator enabling AI does not enable it for anyone else. A user may configure multiple assistants and mark one as default. The user does not invite an AI Contributor in the same way they invite a human collaborator, but applicable Project settings still apply.

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

## Conversations Workspace

Conversations are a separate project-scoped workspace for multi-party working-memory exchange, not an inline component of the Specification and not an Assistance Request Type. A user may initiate a Conversation from contextual document actions on the Project, a Section, a Product Artifact or selected content; the source/scope is carried into the new Conversation. An AI Contributor is available to a Conversation only through a participating human user's enabled Personal AI Assistant.

An AI contribution appears under the assistant's display name with a compact AI indicator. Its provider and model details are not displayed in the Conversation or the assistant profile; they remain available only in the owning user's AI settings/configuration. Selecting or hovering over the assistant opens a profile that identifies the assistant and its human owner, avoiding a repeated ownership label beside every contribution. The assistant's owner alone may invoke it, and every visible reply requires a new explicit human invocation. The remaining Conversation decision is how a user selects or adds an assistant as a recipient when creating or extending a Conversation.

On a sufficiently wide layout, opening Conversations reveals a dedicated right-side pane that reflows the document workspace rather than overlaying it. This preserves visible product context while keeping the Conversation itself outside canonical document content. The document retains only compact contextual cues that open the relevant Conversation or filtered Conversation list.

The pane initially presents a topic-led list ordered by recent activity. Selecting a Conversation replaces the list with that Conversation's thread and provides a clear return control. A split list-and-thread layout is optional only when the pane has enough usable width. The thread header shows its topic, source link, participants and invitation state without repeating the enclosing Project name.

Responsive layouts must preserve one usable workspace rather than compressing both the document and Conversation below readable widths. Container-query-based component adaptation is an appropriate implementation technique, but the exact narrow/mobile transition remains to be validated.

Conversation messages are working memory. The workspace may later offer contextual actions such as inviting participants, creating a scoped Assistance Request and capturing an outcome, but none silently changes Product Knowledge.

Comments and private notes are adjacent but separate concepts. Their audience, anchoring, visibility, notification behavior and relation to Conversations remain to be defined; a private note is not a Conversation because it has no recipient.

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

Improve on a Functional Requirement should make the requirement clearer, more precise or more testable without changing its established behavioral intent. The response should be a Suggested Edit when intent is adequately grounded; otherwise it should use a Question or Finding to surface missing behavior, scope or constraints rather than silently change them.

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

## Requirements Quality Review

A Review on a Functional Requirement should use the Requirements Quality Lens by default. It should assess clarity and ambiguity, completeness of actor, trigger, behavior and outcome, consistency with linked knowledge, testability and Acceptance Criteria coverage, traceability, dependencies, assumptions, constraints and unsupported implementation prescription.

The review should include the Functional Requirement, directly related Feature or User Need, direct Acceptance Criteria and any stated review focus. User Stories, Use Cases, Screen/Views or User Flows, related Requirements, Non-Functional Requirements, technical constraints, Decisions, integrations, Risks, Assumptions, Open Questions and prior Reviews may provide supporting context.

The review should return Findings, Questions, Suggested Edits, Proposed Artifacts, Proposed Relationships or a Summary. It should conclude that requirements-quality coverage appears sufficient for the current scope, that findings were identified, or that quality cannot yet be assessed from the available specification. It does not edit the requirement or certify implementation conformance.

## Find Gaps On Acceptance Criteria

Find Gaps on Acceptance Criteria assesses whether a selected Acceptance Criterion, selected set or Acceptance Criteria section supplies the necessary acceptance evidence for known intended behavior. It is a coverage and verifiability check, not a Functional Requirement quality review, test execution or implementation-conformance certification.

The request should include the selected criterion or criteria, the artifact or behavior each validates, and sibling criteria that validate the same behavior. Including siblings even for a single selected criterion helps avoid duplicate proposals. Related requirements, stories, use cases, features, user needs, screens, flows, non-functional requirements, Decisions, constraints, integrations, Risks, Assumptions and Open Questions may provide supporting context.

The contributor should identify only gaps grounded in known product knowledge: a missing trigger, precondition, actor or observable outcome; known behavior with no coverage; an untestable criterion; or a missing validation link. Error, boundary, alternate-state, permission and transition coverage are relevant only when the specification establishes them. A small addition may be a Suggested Edit; a new criterion or relationship must remain a non-canonical proposal.

The response should conclude that acceptance coverage appears sufficient for the current scope, that gaps were found, or that coverage cannot yet be assessed from the available specification. Missing links should normally be reported as Findings, rather than blocking the request.

## Contribution Response Shapes

The result of an assistance request should be presented according to its Response Shape.

The Response Shape determines what the user receives and what actions are available.

Initial MVP Response Shapes:

| Response Shape | What The User Receives | Likely Actions |
|---|---|---|
| Answer | A direct response to a question, including known basis and limits. | Acknowledge, act on manually or ask a follow-up. |
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

The project owner should be able to see submitted responses and manually mark each one Acknowledged after reading it and Acted On after dealing with its content. An acknowledged response should remain visibly read but not acted on until the requestor marks it Acted On.

These response statuses do not apply, accept, validate or otherwise change canonical product knowledge. If the requestor separately updates or creates product knowledge after considering a response, the resulting change should be recorded as a Revision.

## Stale Artifact Review

When a user updates or archives an artifact, the workbench should be able to identify downstream artifacts that may have been impacted.

Potentially impacted downstream artifacts should be marked Stale and shown to the user with an explanation of why they need attention.

The explanation should identify the changed or archived artifact, the relevant relationship path when available and the triggering Revision.

The user should be able to review each Stale artifact and choose whether to update it, confirm it remains valid, leave it Stale, archive it or create a follow-up Open Question.

The Stale state should not imply that an artifact is wrong. It should communicate that the artifact may need review because related upstream knowledge changed.

The interface may offer contextual AI assistance on Stale artifacts, such as requesting recommendations for possible updates.

This should be presented as a contextual action rather than a new primary Assistance Request Type for the MVP.

## AI Assistance Visibility And Governance

Known AI assistance should remain traceable without dominating the document-first experience or being universally disclosed.

When AI contributes through the workbench, the project owner should be able to inspect the known AI activity trace: request, scope, response, status, relevant Context Explanation and any explicit resulting Provenance or Revision link.

AI-generated or AI-assisted material should not silently become canonical product knowledge. A Contribution Response remains conversational input; it can influence product knowledge only through a separate, explicit user action or another authorized workflow.

The user experience may support Project-level governance settings that limit where personally enabled Bring Your Own AI assistance may be used. Those settings must not enable a human user's AI support for other collaborators or create a shared Project credential. It must also support a project-owner AI-use disclosure setting, off by default. When enabled, the owner selects Workbench only, Workbench and handoff, or Handoff only; Workbench only is the default enabled destination. This setting controls automatic disclosure, not the project owner's ability to inspect known AI activity.

When Workbench disclosure is enabled, collaborators see one discrete project-level **Known AI activity** entry near project information or the document outline. It opens the scoped trace without adding persistent AI-use badges to artifact prose or implying exact word-level authorship. When disclosure is off or Handoff only, that entry is not automatically shown to collaborators. The project owner can inspect the trace directly through project governance/settings for every disclosure destination. A handoff includes disclosure only when its selected destination includes handoff; this applies equally to every handoff recipient, including the project owner.

The workbench should not claim to prevent all external AI use by human collaborators. A human contributor may use an outside AI tool before submitting work. The product can record voluntary disclosure, provenance notes and review workflows for known AI-assisted work, but cannot reliably prove which final content came from AI or that a human contribution was not externally AI-assisted.

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
  READINESS_REPORT.md (when selected)
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
  READINESS_REPORT.md (when selected)
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

## Readiness-aware handoff preparation

Prepare Handoff should offer `Validate Readiness` as an enabled-by-default option. When enabled, the workbench runs a deterministic Implementation Handoff Readiness check before preparing the requested package, then prepares the package without requiring the user to resolve the result first. The user may disable validation and prepare the handoff directly.

The readiness check applies only to the selected handoff scope and its direct external dependencies. It must not silently assess the entire Specification. Direct external dependencies are labeled as such and make the handoff Not Ready only when they explicitly block the selected scope.

For the first handoff request for a Project/Specification and Handoff Profile, the entire Specification should be selected by default. The user may modify the scope through the document outline: selecting a section selects its active contained artifacts and subsections by default, while individual artifacts may be deselected. The workbench should remember the user's last selected scope per user, Project/Specification and Handoff Profile, then offer it as the default on the next request. This is a personal handoff preference, not shared Project Knowledge or a project-wide default.

Handoff scope eligibility is a deterministic precondition for Prepare Handoff, distinct from readiness validation and applicable even when validation is disabled. The Handoff Profile defines the eligibility rules, while the Specification Document Template supplies the sections and containment structure to which they apply. For the MVP `Implementation Handoff` profile, the whole Specification or at least one selected section with non-whitespace section content or an active contained Product Artifact is an eligible root scope. Individual Product Artifacts may narrow a selected section's included content, but cannot be the sole handoff root. If an otherwise selected scope becomes ineligible, the scope selector explains the missing structural context and keeps Prepare Handoff unavailable until the user includes an eligible section or removes the isolated artifact. Direct external dependencies remain outside the selected scope unless the user selects them; they are evaluated by readiness as dependencies, not silently added as required context.

Scope eligibility alone does not establish that there is enough product definition to prepare a responsible package. Meaningful product-definition rules are deterministic and profile-specific. The MVP `Implementation Handoff` profile must treat a selected `Core Features` scope that contains only a high-level Feature statement, with no included behavioral detail or validation coverage, as insufficient product definition. A feature-centered handoff is meaningful when it includes an active Feature with non-whitespace title and content, at least one active Functional Requirement explicitly related to that Feature, and one or more active Acceptance Criteria such that every included Functional Requirement is explicitly validated by at least one criterion. User Stories and Use Cases may provide supporting context but do not replace the Functional Requirement in this first rule. Goals, User Needs, Non-Goals, UX/UI guidance, technical constraints and external integrations are not universal minimum elements; they become caveats only when an explicit relationship or profile rule makes them relevant. With readiness validation enabled, an insufficient scope produces `Not Ready` and no package is prepared. Disabling validation does not bypass this boundary: the workbench still reports insufficient product definition and does not prepare a package. The feedback identifies the concrete missing definition and only offers ordinary navigation or contextual actions; it does not create tasks or impose a workflow.

The scope selector should show the feature-centered minimum definition deterministically—for example, Feature definition included, related Functional Requirement included and Acceptance coverage included. Until all three elements are present, no package is prepared; once they are, the ordinary readiness rules determine the outcome.

When a user starts from an eligible but insufficient Feature Definition Scope, the panel must preserve the current partial scope and its Handoff Package Role designations while the user navigates to ordinary document actions. Each failed check identifies the concrete missing definition and may navigate to relevant Product Knowledge or contextual actions: the user may include an existing explicitly related Functional Requirement, create one through the ordinary Functional Requirements action and explicitly relate it to the Feature, or include or create Acceptance Criteria that explicitly validate each included Functional Requirement. A saved Revision deterministically re-evaluates the checks. The panel must not create Product Knowledge, relationships or validation evidence automatically, and it must not turn the missing checks into assigned tasks. With readiness validation enabled, the insufficient scope is `Not Ready`; when validation is disabled, the same meaningful-definition gate remains visible and Prepare Handoff remains unavailable.

A UX/UI-centered handoff is meaningful only when it includes active Screen/View artifact(s) defining the interface boundary, at least one active User Flow that explicitly includes the selected Screen/View(s), active UI Requirement(s) explicitly related to an included Screen/View or User Flow, and active Functional Requirement(s) underlying the included interaction with Acceptance Criteria that explicitly validate every included Functional Requirement. The scope selector presents these as deterministic checks: interface boundary, user flow, UI behavior, and system behavior with acceptance coverage. Until all four elements are present, no package is prepared. This rule applies only to UX/UI-centered implementation handoffs and does not make those elements universal requirements for every future Handoff Profile.

An integration-centered handoff is meaningful only when it includes active `External Integrations` section content identifying the external system and its purpose, explicit integration behavior defining the known trigger, direction of data or control, and expected outcome, active Functional Requirement(s) explicitly related to that behavior, and active Acceptance Criteria that explicitly validate every included Functional Requirement. The scope selector presents these deterministic checks: external system and purpose, integration behavior, related Functional Requirements, and acceptance coverage. Known external contracts, technical constraints, ownership and dependency details are included where available, but are caveats rather than universal minimum elements. The workbench must not require users to invent unknown failure paths or technical protocol details. An explicit blocking external dependency still makes readiness Not Ready without making the otherwise meaningful scope ineligible for a caveated package.

The scope selector must make the consequence of a Handoff Package Role assignment explicit. Adding Stripe integration knowledge as a Definition Scope asks the implementation consumer to implement that integration and activates the integration-centered checks. Adding the same available knowledge as Supporting Context for a Feature or UX/UI Definition Scope does not activate those checks. In the latter case, Stripe itself remains a derived Direct External Dependency, not a user-assigned Handoff Package Role; unavailable external details are caveats unless an explicit blocker affects readiness.

A data-model-centered handoff is meaningful only when it includes active `Data or Domain Model` section content identifying the relevant domain entities and their explicit relationships, at least one explicit domain rule or invariant governing the selected entities or relationships, active Functional Requirement(s) explicitly related to those elements or rules, and active Acceptance Criteria that explicitly validate every included Functional Requirement. The scope selector presents these deterministic checks: domain structure, domain rule or invariant, related Functional Requirements, and acceptance coverage. Implementation-level schema details, storage technology, migrations, indexes, database ownership and physical data types are not universal minimum elements. Privacy, retention, security classification, integration ownership and technical constraints are included or surfaced as caveats when explicitly relevant, but must not be invented.

For a mixed-scope handoff, the scope selector lets the user explicitly designate selected knowledge as either Definition Scope or Supporting Context. A Definition Scope is knowledge the implementation consumer is being asked to implement and activates its applicable meaningful-product-definition rule. Supporting Context explains, constrains or caveats that Definition Scope but does not activate another rule. Each Definition Scope is an explicitly created, separately displayed selection set, so the user can understand which knowledge belongs to each implementation subject. The workbench must not infer the designation from artifact type or silently promote Supporting Context into Definition Scope.

When a handoff has multiple Definition Scopes, their rules compose conjunctively: every applicable rule must pass before the workbench prepares a package. A Functional Requirement or Acceptance Criterion may satisfy more than one Definition Scope only when explicit relationships show that it applies to each. The workbench must not auto-add missing knowledge. The resulting package clearly distinguishes Definition Scope, Supporting Context and Direct External Dependencies.

A partial Implementation Handoff Package must present an explicit package boundary in every consumer-facing representation. The README begins with package title and compact preparation metadata, then presents **Package boundary**, **Readiness**, conditional **Known AI activity**, and **Start here** in that order. Package boundary is concise; Readiness states the evaluated outcome when validation ran or `Readiness validation was not run` when it did not. **Known AI activity** appears only when the project's disclosure destination includes handoff. **Start here** links to the implementation brief, specification files and manifest. The implementation brief explains what is in scope, intentionally outside scope, and caveated; and the manifest is the authoritative machine-readable record of Definition Scope, Supporting Context, Direct External Dependencies and directly related knowledge intentionally outside the package. The package must not list the entire Specification as omitted. It identifies only directly related out-of-package knowledge whose absence could otherwise mislead the implementation consumer.

When the evaluated readiness outcome is `Not Ready` and `READINESS_REPORT.md` is included, the README keeps package result and readiness distinct: its metadata says `Package result: Prepared with Caveats`, while its Readiness section says `Readiness outcome: Not Ready`. A concise standard explanation says that the selected scope is meaningful enough to hand off but known blocking conditions remain, then links to the report for blockers, caveats and recommended follow-up actions. The README does not repeat individual blockers.

The evaluated non-blocking outcomes use parallel wording. For `Ready`, metadata says `Package result: Prepared` and Readiness says `Readiness outcome: Ready` followed by `No blockers or implementation caveats were identified for the selected scope.` For `Ready with Caveats`, metadata says `Package result: Prepared with Caveats` and Readiness says `Readiness outcome: Ready with Caveats` followed by `No blocking conditions were identified, but known caveats require attention during implementation.` Either outcome links to `READINESS_REPORT.md` only when that report is included. The README does not duplicate individual caveats.

The four-state comparison keeps this layout fixed and changes only package result, Readiness copy and report link:

| Readiness condition | Package result | README Readiness | Report link |
|---|---|---|---|
| `Ready` | `Prepared` | `Readiness outcome: Ready` with no blockers or implementation caveats identified for selected scope. | Only when included. |
| `Ready with Caveats` | `Prepared with Caveats` | `Readiness outcome: Ready with Caveats` with no blocking conditions but known caveats requiring implementation attention. | Only when included. |
| `Not Ready` | `Prepared with Caveats` | `Readiness outcome: Not Ready` with meaningful scope but known blocking conditions remaining. | Included report. |
| Validation not run | `Prepared` | `Readiness validation was not run.` | None. |

Package boundary, conditional Known AI activity and Start here retain their ordinary placement for every state.

When the project's selected AI-use disclosure destination includes handoff, `README.md` adds a concise known-AI disclosure for the included package scope, and `manifest.json` contains the authoritative structured disclosure. The README and manifest make clear that disclosed entries record AI activity known to the workbench or voluntarily declared by a contributor; they do not establish final-text authorship, detect undisclosed external AI use or cover knowledge excluded from the package. The disclosure contains only included-scope trace entries and does not expose raw prompts, assembled context or raw AI responses by default. If no such activity is known for the included scope, the package says so with the same limitation rather than asserting that no AI was used.

This disclosure stays independent of readiness. For a direct handoff with enabled handoff disclosure and no known included-scope activity, the README's Readiness section says `Readiness validation was not run`, followed by the conditional Known AI activity section: `No known AI activity is recorded for the included scope.` The standard known-activity limitation follows, and `manifest.json` remains authoritative. Neither statement implies a positive readiness result or proof of AI non-use.

For the counterpart direct handoff with known included-scope activity, the same Readiness section remains unchanged. The conditional Known AI activity section instead states `Known AI activity is recorded for the included scope` and gives the included entry count, then links to `manifest.json`. It does not expose individual request, contributor or response detail. This disclosure does not make a final-text authorship claim or change the direct-handoff readiness state.

Evaluated-handoff disclosure uses the same independent presentation. The following concise README states remain distinguishable even where package result is the same:

| Scenario | Package result | Readiness | Known AI activity |
|---|---|---|---|
| Blocking condition with known activity | `Prepared with Caveats` | `Not Ready` with blocking-condition explanation and report link. | Known activity recorded, with entry count and manifest link. |
| Non-blocking caveat with known activity | `Prepared with Caveats` | `Ready with Caveats` with non-blocking-caveat explanation and report link. | Known activity recorded, with entry count and manifest link. |
| No blockers or caveats with none known | `Prepared` | `Ready` with no-blockers-or-caveats explanation and report link when included. | No known activity recorded, with the standard limitation and manifest link. |

The package result never substitutes for the Readiness outcome, and AI disclosure never changes either readiness or package result.

For a partial package, `specification/SPECIFICATION.md` is the complete combined representation of the handoff scope, not a claim to be the full Project Specification. It and section Markdown files include only selected Definition Scope and Supporting Context, visibly labeled by Handoff Package Role. Direct External Dependencies are not represented as included knowledge. When selected, the Readiness Report records the readiness outcome, blockers and caveats separately from the package boundary.

Prepare Handoff uses a scope panel over the document outline rather than a separate record-selection screen. For the first handoff, it starts with the entire Specification as Definition Scope and enabled readiness validation and report inclusion. Preparing that default handoff confirms the whole-Specification Definition Scope. The user may choose Customize scope for a partial handoff.

If the user disables readiness validation, the scope panel and package-boundary preview state that validation was not run. The workbench does not calculate a readiness outcome, generate a `READINESS_REPORT.md` or replace the disabled assessment with a separate non-blocking caveat summary. Included Risks, Assumptions, Open Questions and Direct External Dependencies remain visible through their ordinary package representations. Scope eligibility and meaningful-definition checks still apply before preparation.

In customization mode, selected sections and artifacts offer explicit contextual actions: Add to Definition Scope, Add as Supporting Context, Mark as outside this handoff, and Remove from handoff. Creating a Definition Scope and adding knowledge to a particular existing Definition Scope are explicit actions; the panel does not derive scope membership from artifact type or document position. Mark as outside is available only for directly related knowledge that should be named as intentionally excluded. An item has one assigned Handoff Package Role at a time. Direct External Dependencies are derived from Definition Scope relationships, shown separately and cannot be relabeled as included knowledge; available information about one may be added as Supporting Context.

The panel displays deterministic minimum-definition checks for each Definition Scope. It may navigate the user to relevant product knowledge or ordinary contextual actions, but must not auto-add missing knowledge. Shared Functional Requirements or Acceptance Criteria appear once and identify the Definition Scopes they serve. Before preparation, a Preview package boundary action shows the Handoff Package Roles, directly related omissions and external dependencies that will be exported.

When the project's selected AI-use disclosure destination includes handoff, that same preview includes an owner-only **AI disclosure** section. It summarizes whether the package includes known activity entries or no known activity recorded for included scope, lists the manifest-equivalent scope, assistance/declaration type, Assistance Request Type when known, response/status and explicit Provenance or Revision links, and presents the fixed trace-limit caveat. The project owner may open the scoped trace or navigate to change the disclosure setting, but cannot manually edit the derived disclosure entries. If handoff disclosure is excluded, the owner sees a compact read-only statement that the package will not include AI disclosure and identifies the selected destination. The preview changes neither meaningful-definition checks nor readiness, does not itself create Handoff History and is regenerated from the current scope and settings.

A realistic MealLoop `Pause subscription` journey validates the interaction from the default whole-Specification handoff through a Feature and UX/UI mixed partial handoff: it preserves a section-rooted eligible scope, keeps a Subscription data-model excerpt as Supporting Context, records cancellation as directly related out-of-package knowledge, and prepares a caveated package despite a Stripe dependency blocker. Exact desktop/mobile controls, keyboard behavior, visual layout and warning wording remain subject to prototype validation.

The user may also choose `Include readiness report in handoff`. This option is enabled by default when readiness validation is enabled and unavailable when validation is disabled. Its value is remembered using the same user, Project/Specification and Handoff Profile key.

When selected, the package includes a standalone `READINESS_REPORT.md`; it is not embedded in `IMPLEMENTATION_BRIEF.md`. The report should include the readiness outcome, selected scope, Handoff Profile, evaluation time, blockers, Stale artifacts, coverage/readiness warnings, relevant Risks, Assumptions and Open Questions, direct external dependencies, and deterministic recommended follow-up actions.

When multiple blockers apply, the report should group them by their originating unresolved Open Question rather than repeat the same blocker for every affected artifact. Each blocker lists the active selected-scope artifacts or direct external dependencies it blocks. Any explicit blocker makes the readiness outcome Not Ready; the count of blockers does not create a further outcome. Deterministic follow-up actions are one per originating blocker. The report orders selected-scope blockers before blocking direct external dependencies, then uses selected-outline order and stable artifact ID as a tie-breaker. It must not infer a relative importance ranking without explicit Project State that supports one.

The readiness outcome is determined from explicit Project State:

| Outcome | Deterministic conditions |
|---|---|
| Not Ready | The selected scope lacks meaningful product definition; an active Open Question explicitly blocks included knowledge; or an included required section is empty. |
| Ready with Caveats | No Not Ready condition applies, but the scope has Stale artifacts, coverage/readiness warnings, non-blocking Open Questions, Risks, Assumptions or external dependencies that require attention. |
| Ready | None of the above conditions apply. |

Intentionally excluding a required section from a partial handoff scope must not make that handoff Not Ready. Only an included required section that is empty has that effect.

Even when the readiness outcome is Not Ready, Prepare Handoff should still generate the best available caveated package when the selected scope contains meaningful product definition. When the scope has insufficient product definition to prepare responsibly, no package is prepared. The package result remains `Prepared` or `Prepared with Caveats`, which is distinct from the readiness outcome. A direct handoff with validation disabled uses the existing `Prepared` result and the separate `Readiness validation not run` state; History and the preparation confirmation render those fields together as `Prepared - readiness validation not run`, not as a third result value.

Each successful preparation creates one Handoff History event. The event retains an immutable manifest-derived summary of the prepared package: preparation time, Handoff Profile, package boundary, whether readiness validation ran, its outcome when it did, whether `READINESS_REPORT.md` was included, package result and caveat or blocker summary. The manifest records the same readiness-validation and report-inclusion state for machine consumers. Report inclusion is owner-selectable for every evaluated outcome and does not change package result or readiness outcome. The README links to the report only when it exists; otherwise it retains the same concise readiness statement without omission prose. If validation was disabled, the event explicitly says `Readiness validation not run`; it does not leave the field blank, imply `Ready` or synthesize a caveat summary. Its compact AI-disclosure summary records the disclosure destination, whether disclosure was included, disclosed-entry count, whether no known activity was recorded for included scope and the standard trace-limit caveat. It does not present entry-level trace data, raw prompts, raw responses or a live link to current trace state. This gives the user a concise record of prepared handoffs alongside ordinary Revision history, without defining an ambiguous class of major actions or recording every scope-selection change. The MVP does not provide a built-in package-diff experience. It also does not require the workbench to retain the downloadable package archive after preparation.

When a user later changes the current Handoff Package Roles—for example, by moving Stripe integration knowledge from Supporting Context into a new Integration Definition Scope—the panel evaluates the expanded current scope and immediately shows the newly activated checks. The earlier Handoff History event remains unchanged. If every applicable definition rule passes, a later preparation creates a new event; if any rule fails, Prepare Handoff remains unavailable and no new event is created. The current panel explains the current boundary and readiness result without presenting a package diff.

Resource References attached to included scope are included in the handoff. A Specification-level reference is excluded from a partial handoff unless the user explicitly adds it as Supporting Context. The manifest represents each shared Resource source once: an external source with its URL, or a managed source with a package-relative path rather than a machine-specific `file://` URI. Resource References separately retain their target-specific metadata. Managed uploaded files are copied into the package with their reference metadata; when multiple included references use one Resource, its source is copied once and each reference remains represented. External links remain labeled links and become caveats when their availability cannot be established. A Resource Reference does not expand the selected handoff scope by itself. For an included visual reference on a Screen / View, human-readable Screen / View export content includes a compact, reference-local mention of represented state and/or viewport when Visual Context is present. `manifest.json` remains authoritative for that reference metadata. The mention is interpretive context for the named reference, not a top-level state declaration or canonical Screen / View behavior.

The workbench may identify a shared Resource for user inspection, but it must not present different target-local Visual Context values as an automatic error. A semantic concern can instead be assessed through ordinary human review or an explicitly requested AI Review or Find Inconsistencies request. The resulting Finding remains caveated and non-canonical; it neither changes local metadata nor automatically affects Stale state, readiness or package preparation.

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
- `READINESS_REPORT.md` when readiness validation and report inclusion are selected;
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
