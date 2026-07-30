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

## Home Page Orientation

The first page after sign-in should orient the user and route them into Project work; it is not a second Project workspace or a global request-management surface.

At a high level, it may offer:

- **Continue**, for recently opened Projects, Conversations or document locations;
- **Needs your attention**, for compact cross-Project signals such as a pending invitation, a Collaboration Request awaiting the current user's reply, or an AI request that its owner must explicitly resume; and
- **Your Projects**, as the primary entry to durable Project context.

`Your Projects` groups Projects as **Projects you own** and **Projects you collaborate on**. A Project appears in exactly one group: its creator is the Project Owner, while an invited person appears only after accepting as a Project Collaborator. A pending invitation is an attention item, not a Project collaboration relationship. A request recipient is a temporary request-level responsibility, not a third Project role or a Project grouping.

An owner may see owner-relevant attention, such as a received response or a personal-AI request on hold, but never a human Collaboration Request addressed to themself. A Project Collaborator may see a request awaiting their reply. Where the user may create Projects, **Create Project** remains available regardless of their current Project relationships. Optional personal AI settings remain available through personal settings and do not dominate the new-user empty state.

For a new user with no Projects or accepted invitations, the page should present a calm empty state: create a first Project, wait for or respond to an invitation, and optionally consult getting-started guidance. It should not show empty request-management panels. Any future cross-Project attention summary only routes the user into the relevant Project; it provides neither an unscoped composer nor a global request board.

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

The initial template also defines an optional, ordered Product Engineering Stage catalogue: **Explore**, **Discover**, **Define**, **Design**, **Specify**, **Validate readiness** and **Handoff**. A catalog entry has one primary stage and may have contributing stages. These are template-owned orientation metadata, from which contained Product Artifacts derive their stage orientation; they are not editable artifact fields, lifecycle states, workflow gates, readiness criteria or handoff conditions. The document remains the canonical section-oriented view. Future stage views may organize or filter the same Specification without changing its content or imposing a linear process.

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

## Initial Preset Classification And Stage Attribution

The initial Project Presets and template-owned stage attribution should classify the first Section Catalog as follows. Contributing stages are orientation only; they neither require that work nor affect readiness or handoff.

| Section | Primary stage | Contributing stages | Simple Web Presence | Standard Web App | Complex Product App |
|---|---|---|---|---|---|
| Product Overview | Explore | Define | Required | Required | Required |
| Problem or Opportunity | Explore | Discover, Define | Recommended | Required | Required |
| Goals and Success Criteria | Define | Validate readiness | Required | Required | Required |
| Non-Goals | Define | Validate readiness | Recommended | Recommended | Required |
| Target Users or Personas | Discover | Define, Design | Required | Required | Required |
| User Needs | Discover | Define, Specify | Optional | Required | Required |
| Scope | Define | Specify, Validate readiness | Required | Required | Required |
| Core Features | Define | Design, Specify | Required | Required | Required |
| User Stories and Use Cases | Specify | Design, Validate readiness | Optional | Recommended | Required |
| Acceptance Criteria | Specify | Validate readiness | Required | Required | Required |
| Functional Requirements | Specify | Design, Validate readiness | Required | Required | Required |
| Non-Functional Requirements | Specify | Design, Validate readiness | Optional | Recommended | Required |
| Data or Domain Model | Design | Specify | Optional | Required | Required |
| UX/UI Design Requirements and Interaction Notes | Design | Specify, Validate readiness | Required | Required | Required |
| Technical Constraints and Preferences | Design | Specify, Validate readiness | Recommended | Recommended | Required |
| External Integrations | Specify | Design, Validate readiness | Optional | Optional | Recommended |
| AI or Automation Expectations | Design | Specify, Validate readiness | Optional | Optional | Recommended |
| Risks, Assumptions and Open Questions | Validate readiness | Explore, Discover, Define, Design, Specify | Recommended | Required | Required |
| Implementation Guidance | Handoff | Specify | Recommended | Recommended | Required |
| Validation and Testing Guidance | Validate readiness | Specify, Handoff | Required | Required | Required |
| Export and Handoff Instructions | Handoff | Validate readiness | Optional | Recommended | Required |

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

Conversations are a separate project-scoped workspace for multi-party working-memory exchange, not an inline component of the Specification and not an Assistance Request Type. A Project owner or accepted human collaborator may initiate a Conversation only from inside a Project. A pending invitee and a Personal AI Assistant cannot initiate one. A future home or cross-project surface may show existing Conversations, but does not expose an unscoped Conversation composer.

The MVP source-specific entry points are **New conversation** in the Conversations workspace (Project scope by default), a whole-Specification action, and contextual actions on a Section, Product Artifact or selected content. The entry point carries its source/scope into the new Conversation. Selected content remains the explicit source while its containing Section or Artifact supplies structural context. A Personal AI Assistant is available to a Conversation only through a participating human user's enabled Bring Your Own AI configuration.

Conversation creation uses **Add recipient** for both people and assistants. The recipient picker groups existing eligible entries as **People** and **My assistants**. People must already be accepted Project collaborators or pending Project invitees; an assistant must already be configured and enabled by the selecting user. The picker does not offer project-contributor invitation, provider connection or assistant configuration in the MVP; users return to the relevant Project or personal settings flow when those are needed.

An assistant contribution appears under the assistant's display name with a compact assistant cue. Its provider and model details are not displayed in the Conversation or the assistant profile; they remain available only in the owning user's AI settings/configuration. Selecting or hovering over the assistant opens a profile that identifies the assistant and its human owner, avoiding a repeated ownership label beside every contribution. The assistant's owner alone may invoke it with an explicit action such as **Ask Alfred**. Adding an assistant as a recipient, mentioning it or another participant's message does not invoke it, and every visible reply requires a new explicit human invocation. Accepted human recipients may reply normally; a pending invitee may do so only after accepting Project collaboration.

The initiator manages human recipients. Other human participants can use **Request to add recipient**, which the initiator explicitly approves or rejects. The initiator may add or remove only their own assistants, while every participant may add or remove their own assistants. The Project owner may add or remove human recipients in Conversations they did not initiate. Removing a human recipient also removes every assistant that person added; otherwise an assistant can be removed only by its owner. A removal ends future participation but retains previous messages and contributions, and recipient additions, removals and add-recipient decisions appear as concise Conversation history events.

An accepted human recipient may choose **Leave conversation**. An assistant has no leave action: it can be removed only by its owner or because its owner left or was removed. The initiator cannot leave an Open Conversation and instead uses **Close conversation**; the Project owner has the same safety action for a Conversation they did not initiate. When no other active human recipient remains, the workspace shows a quiet contextual state and offers **Close conversation**, but it never closes automatically or after a fixed period. Closing adds a concise history event and makes the Conversation read-only. It does not resolve an Open Question, record an outcome or modify Product Knowledge. Closed Conversations remain available in the workspace history; the MVP neither reopens nor deletes them, and resumed work starts a new related Conversation.

On a sufficiently wide layout, opening Conversations reveals a dedicated right-side pane that reflows the document workspace rather than overlaying it. This preserves visible product context while keeping the Conversation itself outside canonical document content. The document retains only compact contextual cues that open the relevant Conversation or filtered Conversation list.

The pane initially presents a topic-led list ordered by recent activity. **Active conversations** are the default list. **Closed conversations** are retained in a separate collapsed group or filter: they remain searchable and readable, but do not appear among ongoing Conversations by default. Selecting a Conversation replaces the list with that Conversation's thread and provides a clear return control. A split list-and-thread layout is optional only when the pane has enough usable width. The thread header shows its topic, source link, participants and invitation state without repeating the enclosing Project name.

On desktop, a human with access to a Conversation may reveal a header **Copy** control on hover; the Project owner also sees **Create from conversation**. Selecting either control replaces the header controls with local source choices. **Copy** offers **Entire conversation** or **Individual messages**; any human may also use ordinary text selection to copy a portion of a message. **Create from conversation** offers **Entire conversation** or **Individual messages**. In individual-message mode, the user selects messages in the thread; once one or more messages are selected, the control becomes **Copy selection** or **Create from selection**. Mobile uses an explicit tap action rather than relying on hover; a swipe may supplement it but is not the sole route.

Only the Project owner may use **Create from conversation**. After choosing source material, the local controls are replaced by a destination list: create a new Product Artifact (then select its type), record a Decision, track an Open Question or update existing Product Knowledge. The selected material opens the ordinary creation or editing flow as source evidence or draft input. The owner must review and explicitly save; no message, assistant response, text selection, copying action, silence or Conversation closure creates Product Knowledge automatically. Text-range capture as outcome source is outside the MVP, and a formal non-owner request-to-create flow is deferred.

The MVP does not show a Conversation-ready status, capture prompt, recommendation or participant signal. The Project owner uses explicit judgment to decide whether to start outcome capture. Activity or inactivity, apparent agreement, assistant analysis and closure do not imply that a Conversation is ready; participants may raise a possible outcome through ordinary messages without creating a special state or obligation.

When the owner creates a new Product Artifact, its selected type determines a canonical destination section. The ordinary creation flow shows that destination but does not offer a placement picker; after the owner saves, the artifact appears at the end of that section. If the section is not selected in the Specification, the local flow asks the owner to add the canonical section or cancel creation. Cancel returns to the destination list with the selected Conversation messages intact and makes no outline change. Choosing to add the section explicitly changes the outline before the ordinary artifact draft begins; if the owner later discards that unsaved draft, the explicitly added empty section remains. The flow does not silently change the Specification outline or create an orphaned artifact.

An artifact action menu may offer **Move up** and **Move down** to reorder items within the current section. Completing that action records a document-composition Revision. It does not alter the artifact's identity, its relationships, provenance or any Conversation Outcome Link. The MVP does not include drag-and-drop ordering or moves between sections.

After a successful save, a compact Conversation Outcome Link is visible from both the Conversation and the resulting Product Knowledge, Decision or Open Question; when selected, it also identifies the source messages. The link supports direct navigation without making the Conversation canonical or implying agreement by participants. It remains available when a Conversation is Closed: it uses the retained thread as evidence, does not reopen it and does not add a Conversation message.

An Outcome Link to an Archived record remains visible and is labeled **Archived**. A link to a genuinely unavailable target remains visible and is labeled **Broken**, retaining the target title and identifier snapshot. Only its creator or the Project owner may use **Remove outcome link**; this removes the connection, not either endpoint, and adds a concise history event. Outcome Links do not appear in any Implementation Handoff representation.

Responsive layouts must preserve one usable workspace rather than compressing both the document and Conversation below readable widths. Container-query-based component adaptation is an appropriate implementation technique, but the exact narrow/mobile transition remains to be validated.

Conversation messages are working memory. The workspace may offer contextual actions such as inviting participants and capturing an outcome, but none silently changes Product Knowledge.

Conversations and scoped Collaboration Requests have separate entry points and do not require each other. A Conversation is the appropriate path for an evolving multi-party discussion: an eligible collaborator may be added as a recipient and contribute in context. A scoped Collaboration Request remains the separate path for a bounded asynchronous response. Owner-led **Create from conversation** is a core MVP outcome-capture action; a control to create or link a scoped Collaboration Request from a Conversation is a lower-priority MVP stretch capability. Until then, neither surface creates a link or changes the state of the other.

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
| Validate Readiness | Assess the available Product Knowledge for this scope's stated purpose, with visible evidence and limits. |
| Ask Question | Help answer a specific question or think through a topic. |
| Prepare Handoff | Generate or refine implementation handoff materials. |

Request Feedback and Review should remain distinct.

Request Feedback is open-ended, judgment-based and conversational. It asks a contributor to react, comment and suggest improvements.

For Product Overview, Request Feedback should assemble the overview and any stated feedback focus as primary context. Problem or Opportunity, Target Users or Personas, Goals and Success Criteria, Scope and Non-Goals should provide the usual strategic orientation; User Needs and Core Features should be included only when they clarify the overview. The response should be a caveated Comment, Question, Suggested Edit, Summary, Proposed Artifact or Proposed Decision rather than a structured Review or readiness result. When strategic anchors are missing, the Context Explanation should say what limited the feedback.

Draft on a Product Overview should use the stated prompt or source material, existing overview content and the section or template guidance as primary context. It may return a limited draft when strategic anchors are missing, but must make assumptions and open questions visible rather than inventing product facts or presenting generated content as validated.

Suggest Alternatives on a Core Feature should optimize for its linked User Need and Goal, rather than preserving the feature by default. It may propose a feature variant, outcome-preserving substitute, deferment or other scope/timing change, or a reframing that questions whether the feature addresses the right need or goal. Each Alternative Proposal should expose its rationale, trade-offs, assumptions, open questions and likely affected knowledge. It remains a proposal for the user to decide on; when outcome context is missing, strategic alternatives must be visibly labeled as constrained.

Improve on a Functional Requirement should make the requirement clearer, more precise or more testable without changing its established behavioral intent. The response should be a Suggested Edit when intent is adequately grounded; otherwise it should use a Question or Finding to surface missing behavior, scope or constraints rather than silently change them.

Review is structured, deliberate and criteria-based. It asks a contributor to evaluate the target against a specific capability, lens or standard.

Each MVP Review has one explicit Review Lens. The lens must be visible and confirmed before the owner submits the request. A contextual entry may preselect a compatible default only when the initial lens catalog declares one; it must never apply invisibly. Whole-Specification and Specification Section Reviews require the owner to choose a lens deliberately.

Review should be treated as a composite assistance activity within that one lens.

A Review may run multiple checks, such as gap checks, inconsistency checks, ambiguity checks, testability checks, feasibility checks, alignment checks, risk checks and readiness checks.

Different lenses require separate Collaboration Requests. The selected lens determines the primary and supporting context, applicable checks and the qualification of the result. A Review returns Findings, Questions, Suggested Edits, Proposed Artifacts, Proposed Relationships, Proposed Decisions and a Summary; it does not return a Readiness Result, even when the Implementation Readiness Lens is selected.

Focused Assistance Request Types can expose some of those checks directly. For example, Find Gaps can run a focused gap check, while a broader Review can include gap checking alongside other checks.

This lets the user choose between narrow assistance and a fuller review without turning every internal check into a separate prominent UI action.

Not every Assistance Request Type should be available everywhere. The available options should depend on the current scope, artifact type, artifact maturity, availability of an eligible recipient path and applicable Project settings. Known capabilities guide recipient selection after a type is chosen, but do not by themselves determine which types appear or which eligible available candidate the owner may select.

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

### Review scope-kind validation

`Review` is available from the whole Specification, an eligible Specification Section and an active Product Artifact. Its lens-qualified conclusion is limited to whether specification coverage appears adequate for the named lens at that scope, whether findings or risks were identified, or whether the available context is insufficient.

| Scope kind | Meaning of the review |
|---|---|
| Whole Specification | Assesses available cross-section coverage for the named lens; it never implies that implemented software, the Project or a delivery plan is approved. |
| Eligible Specification Section | Assesses the Section's active content and relevant connections for its template purpose under the named lens; it makes no claim about other Sections or the whole Specification. |
| Individual Product Artifact | Assesses the Artifact's specification coverage under the named lens and for its stated role; it makes no claim about its parent Section, Feature or implementation. |

Existing selected-content Review availability remains unchanged. It is a narrow fragment review and never represents the containing Artifact, Section or Specification as a whole.

Review does not automatically use the Readiness Fact Check Set, which remains specific to `Validate Readiness`. It neither approves Product Knowledge nor certifies implementation, conformance, security, accessibility or readiness; it does not create Product Knowledge, delivery workflow or automatic changes. The initial lens catalog and lens-to-scope compatibility rules remain the next decision.

### Validate Readiness scope-kind validation

`Validate Readiness` assesses local Product Knowledge quality. It is not the deterministic Implementation Handoff Readiness validation performed by `Prepare Handoff`, and it neither certifies implementation nor changes Product Knowledge.

| Scope kind | `Validate Readiness` availability | Meaning of the resulting assessment |
|---|---|---|
| Whole Specification | Available. | Whether the Specification's available knowledge is coherent, connected and sufficiently evidenced for its stated product purpose; it may identify cross-section gaps and limits. |
| Eligible Specification Section | Available when the section has non-whitespace section content or an active contained Product Artifact. | Whether the section's active content forms a coherent, sufficiently supported definition for its template purpose; it makes no claim about other Sections or the whole Specification. |
| Individual Product Artifact | Available when the Artifact is active. | Whether the Artifact is clear, complete, internally coherent and adequately related or validated for its stated role; it makes no claim about its parent Section, Feature or implementation. |
| Selected content | Unavailable. | A text fragment lacks the structural boundary for a readiness assessment; use Improve, Review or Find Gaps, or select the containing Artifact or Section. |

A Readiness Result identifies the selected scope and purpose, context used and missing, local strengths and gaps, risks, dependencies and suggested follow-up. With partial context it may assess only what is observable and must name the limits. With insufficient context it may identify missing knowledge or ask questions, but must not make a positive local-readiness claim. It is a non-canonical Contribution Response. It does not certify implementation, delivery workflow, implementation conformance or a handoff, create a task or package, or automatically update Product Knowledge.

When the owner selects `Validate Readiness` and an eligible scope, the composer shows a derived, non-persistent **Readiness fact checks** preview. It applies only explicit Project State rules: scope structure, template-declared content expectations, active or Stale status, explicit relationships and validation coverage, known blockers and direct dependencies. Each check gives its rule and affected knowledge a `Satisfied`, `Attention needed`, `Not applicable` or `Cannot determine` result. The preview is evidence for the eventual recipient; it is not a readiness verdict, score, recipient-ranking signal or submission block.

Immediately before **Submit request** or **Submit and ask**, the workbench reruns the checks and records the result in that Request Cycle's immutable context, visible to its selected human or AI recipient alongside the Request Brief and Context Explanation. It does not silently refresh after submission. An explicit reopen and resubmission makes a new current-cycle snapshot while the earlier cycle's result stays immutable. The check set does not create Product Knowledge, tasks, delivery workflow or a package, and it does not run the Handoff Profile's meaningful-definition or `Ready` / `Ready with Caveats` / `Not Ready` validation.

### Prepare Handoff scope-kind validation

`Prepare Handoff` is governed by handoff-root eligibility rather than by the broad artifact and selected-content entries in the matrix. Its first scope-kind validation is:

| Scope kind | `Prepare Handoff` availability |
|---|---|
| Whole Specification | Available. |
| Eligible Specification Section | Available when the section has non-whitespace section content or an active contained Product Artifact. |
| Individual Product Artifact | Unavailable. An artifact may narrow a selected section-rooted handoff scope, but cannot initiate one. |
| Selected content | Unavailable. Selected text is not a handoff root. |

An eligible section root may still lack meaningful product definition. For example, a non-empty `Core Features` section containing only a high-level Feature may enter the handoff scope panel, which deterministically identifies the missing Functional Requirement and Acceptance Criteria coverage and prevents package preparation. The owner retains the selected scope and uses ordinary document actions to add missing knowledge; the workbench creates no task, queue or automatic knowledge.

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

Instead, a Project Owner should create a scoped Collaboration Request for one recipient. The recipient should be able to open the request, review the relevant context, submit a Contribution Response and leave the requestor to review it later.

Each MVP Collaboration Request selects exactly one available recipient. Capability and availability may guide that selection, but the request is not sent to a capability-only queue, broadcast or group. A user who needs multiple perspectives or evolving shared context uses a Conversation instead.

### Creating a standalone Collaboration Request

Only the Project Owner can create a standalone Collaboration Request. The owner can start **Request collaboration** from the Specification header, a Section action menu, a Product Artifact action menu or a selected-content action. Each contextual entry point establishes its corresponding initial scope: respectively the whole Specification, that Section, that Product Artifact or the selected content together with its containing structural context. That scope stays pinned in the contextual creation path; the owner who needs another scope cancels and starts from the appropriate source rather than being sent through a broad record picker. The owner cannot select themself as the human recipient.

The Project's Collaboration Requests workspace contains one role-aware, paginated list. The Project Owner sees **Requests you created**, including their private Drafts; a Project Collaborator sees **Requests for you**, where they are the selected human recipient. After Reopen, the collaborator retains a frozen, read-only view of the previously shared request until resubmission. If a Declined request is reassigned instead, the former recipient retains their frozen Declined cycle in **Requests for you**, while the replacement sees only the new current cycle. Its default applies no lifecycle or response-handling filter and sorts by **Last updated — newest first**. For the owner, Last updated changes for a meaningful request update: Brief edit, submission, lifecycle transition including AI On Hold or resume, response submission or response-handling change. For a collaborator, it is the newest meaningful event visible to that collaborator; private Brief edits in a reopened Draft do not change their timestamp or reorder their list, while Reopen and resubmission do. The former recipient's frozen Declined record remains at its decline event and does not display or reorder for reassignment or later new-cycle activity. Opening or viewing a request does not change it. Search covers the Request Brief, Assistance Request Type, scoped-source label and participant names. The compact filter set is Request status, Contribution Response handling status, Assistance Request Type and scope kind; the owner may additionally filter by recipient. The available sort choices are Last updated newest first, Last updated oldest first, creation newest first and Request Brief A–Z.

The workspace first applies the role boundary, then search and all selected filters, then the chosen sort and finally pagination. It shows 25 requests per page. A search or filter change returns the user to page one and shows the number of matching requests. Search covers only the current request surface visible to that user; it excludes response bodies, retained prior-cycle content and private reopened-Draft changes. Response-handling filters apply only to the current Request Cycle. Retained history remains in the request detail and never produces a hidden history-filter match. Tied visible sort values use creation time and then an internal stable identifier, keeping pagination deterministic.

The list supports search, filtering and sorting rather than separate status lists, lifecycle columns or a response workspace. Compact request-oriented rows show the Request Brief, Assistance Request Type, scoped source, other party, labelled Request status and concise last-update event. A Contribution Response stays inside its request. When it belongs to the current request cycle, its handling status is a clearly labelled field of that same row—for example, `Request: Responded · Response: Submitted`—and never a separate list item. Owners may combine Request status and response-handling filters to find responses needing review. When a request has been reopened, the owner and recipient rows label retained earlier response evidence as such—for example, `Request: Draft · Previous response: Acted On`—and the recipient’s retained view says **Read-only until resubmitted**. The recipient cannot see the revised Brief or draft-context changes. Opening the request retains its full Brief, immutable recorded context, lifecycle history, response content and response-handling actions together. The list introduces no priority, due date, assignee, lifecycle grouping or needs-action worklist.

Opening a request uses one detail structure ordered by Request Cycle, newest first. The header shows the Brief, scope, type, other party, labelled Request status and visible last-update event. The current cycle stays expanded, showing immutable recorded context and either its submitted response with labelled handling status or a compact current state. Private human response drafts stay private. For AI requests, In Progress and On Hold show that compact state only; the owner never sees streaming or incomplete assistant response text. Incomplete assistant working state may be retained privately only for a best-effort resume and is neither response content nor a lifecycle-history item. Earlier cycles are collapsed summaries, newest first, with terminal outcome, prior Brief snapshot and response status. Expanding a prior cycle shows its summary immediately and then loads the full immutable snapshot—Brief, recorded context and response beneath it—inline. The UI provides a compact loading state and retry on failure, and caches the expanded snapshot for the current detail session only. It never reassembles historical context from current Project State. Lifecycle presentation remains a concise milestone record—submission, start, response, decline, cancellation, On Hold, resume, reopen and handling changes—not an activity feed or chat surface.

The owner can start **New request** from this workspace. This path begins with scope: the whole Specification is the default, and the owner may deliberately choose a Section or Product Artifact through the outline. Selected-content scope begins only from a selected-content action. The lower-priority Conversation-to-request capability is not an MVP entry point. This is a Project-scoped workspace, not a separate global request workplace. A future home or cross-project surface may show a compact, non-actionable attention summary and route the user into the relevant Project, but it must not offer an unscoped request composer, independent request board or separate global **My requests** and **Requests for me** pages.

Creation is a local, non-modal, document-first progressive-disclosure flow rather than a task-creation form or a modal dialog. After scope, it guides the owner through Assistance Request Type, one recipient, Request Brief and a read-only, explainable context preview before final submission. Back navigation keeps earlier choices visible as a compact local summary.

Recipient selection distinguishes eligibility, availability and capability. Eligibility is the structural boundary: **People** contains Project Collaborators rather than the owner, while **My assistants** contains only the owner's assistants permitted by Project settings. Availability determines which eligible candidates are selectable now: people become available through accepted Project collaboration, and assistants must be enabled and usable. Capability is explainable, non-binding guidance about known fit for the type, scope and optional Review Lens; it may identify an exact, related or unstated fit without automatically ranking, routing or excluding a candidate. Availability does not represent online presence, calendar time, willingness, capacity or workload.

The selector shows accepted Project Collaborators under **People** and the owner's enabled, usable assistants under **My assistants**, with concise capability guidance where known. A configured but unusable assistant may be shown non-selectably as `AI assistance unavailable`; it never exposes provider, model, credential, credit or detailed failure information. Pending invitees, non-collaborators, the owner as a human recipient and another user's assistants are not selectable. Initial **Request collaboration** and **New request** actions are enabled only when at least one eligible and available candidate exists. Otherwise they show a compact generic explanation and do not open a composer, so no scope or type choice, Request Brief, Draft, queue, broadcast, fallback assignment, inline invitation or inline assistant-configuration flow is created.

Scope, type and recipient are provisional choices. A private Draft is created and persisted only when the owner writes or edits the Request Brief; it remains private until submission and may be discarded. Before the first submission, the owner may revise the selected type, recipient and brief, and may revise a scope chosen through the Project request-list path; a contextually pinned scope remains fixed to its source. If the selected recipient becomes unavailable after the Draft begins, the Draft remains private but the submission action is disabled until availability returns or the owner selects another eligible available recipient. The preview derives and explains context from the chosen scope; it is read-only rather than a second editable request payload. The final action is explicit: **Submit request** for a human recipient or **Submit and ask _assistant name_** for an AI recipient.

Before submission, the requestor provides a required **Request brief** that frames the specific help, question or desired outcome within the selected scope. The Assistance Request Type identifies the kind of help sought; the brief identifies what this contributor should address. An initial private **Draft** offers **Continue editing**, **Discard draft** and submission. **Submit request** sends a human-targeted request to its recipient and makes its status **Submitted**. The recipient may choose **Start response**, making it **In progress** while they retain a private response draft, then continue it, submit one bounded response or choose **Decline**. Declining after response work discards that private draft and makes the request Declined. The requestor may choose **Cancel request** while it is Submitted or In progress; there is no automatic expiry, acceptance or delivery-management state.

For an AI-targeted request, only the requestor's own enabled Personal AI Assistants appear as selectable recipients. **Submit and ask Alfred** is the owner's explicit invocation: the request records Submitted, then shows **In progress** only after Alfred has actually begun work. While In progress, the owner sees the compact request state rather than streaming or incomplete response text. If AI assistance becomes unavailable before work begins, or processing is technically interrupted, the request becomes **On Hold**. The ordinary request surface says only that AI assistance is unavailable; provider, model, credential, credit and detailed technical-failure information remain in the owner's private settings. When eligibility is restored, the request remains On Hold and does not update or reorder until the owner explicitly chooses **Resume Alfred**. This invokes the assistant again, updates Last updated, retries or makes a best-effort continuation from private incomplete assistant working state, and moves it through Submitted to In progress when work starts. That working state is never shown as partial response text or retained as a response or history item. An AI assistant cannot Decline, cancel or resume autonomously; when it lacks sufficient product context, it returns a bounded Question or caveated response instead. The requestor may also cancel an On Hold request.

After a request is Responded, the requestor may choose **Reopen request** only while its fixed recipient remains eligible and available. This is a recorded action, not a status: it returns the request to a private Draft. The selected human recipient keeps a frozen, read-only view of the previously shared request and response evidence; the revised Brief and any draft-context changes are private until **Resubmit request** returns it to Submitted for the same recipient. Recipient, Assistance Request Type, scope and recorded context are read-only; only the Request brief can change.

After a request is Declined, the requestor may also choose **Reopen request** only when at least one eligible and available human collaborator or Personal AI Assistant exists. The prior recipient keeps their frozen read-only Declined cycle in **Requests for you**, with its decline event as Last updated. While that reopened Draft is private, the owner may revise the Brief and select any eligible available human recipient or their own eligible available Personal AI Assistant; the replacement sees only the new submitted cycle and never the prior recipient, decline or retained history. Reassignment, resubmission and later new-cycle activity do not appear in or reorder the former recipient's record. **Discard reopened draft** restores the immediately preceding terminal cycle without erasing its history. A Cancelled request cannot be reopened: renewed work starts a new request. Request status and Contribution Response status are displayed with their object labels, so request `Submitted` is not confused with response `Submitted`.

In request detail, the owner may **Acknowledge**, **Act On** or, when its fixed recipient remains eligible and available, Reopen a Responded request. A recipient sees submitted response handling read-only. Both parties retain Declined or Cancelled evidence read-only. An AI request offers only its owner **Cancel request** while active and **Resume assistant** or cancel while On Hold; no other user can act on that request.

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

Prepare Handoff should enable deterministic readiness validation by default. When enabled, the workbench runs an Implementation Handoff Readiness check before preparing the requested package, then prepares the package without requiring the user to resolve the result first. The user may disable validation and prepare the handoff directly.

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
