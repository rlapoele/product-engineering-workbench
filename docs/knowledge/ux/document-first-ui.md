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

For the first slice, Project creation presents an editable **Content language** control. It is pre-filled from the current resolved Interface Locale, itself resolved at application entry from the browser's highest-preference valid locale with `en` as fallback. The owner may choose a different valid value before creation; that Project-level value remains distinct from Interface Locale and does not change merely because the interface language changes later.

Content Locale controls the language of document-facing template scaffolding, including every section heading, guidance, placeholder example, fixed block label and structural wording rendered into the specification or export. Interface Locale controls the workbench's navigation, actions, form labels and validation. User-authored content is never translated automatically.

A Specification Document Template has language-neutral section identifiers and semantic text keys, then Content-Locale resources for its document-facing text. Its selected Content Language must be supported by the selected template; if an explicit fallback is allowed, the document shows a clear warning before authors rely on mixed-language scaffolding. It must never silently mix localized and default-language section titles, guidance or placeholders. Changing interface language does not change the document language or its canonical structure.

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

This section captures the application-specific UX/UI guidance needed for faithful implementation. It may contain UI Requirements, Screen/View and User Flow references, as well as structured, section-owned **Shared Design Guidance** that should not be repeated in each artifact.

Relevant content may include visual intent, layout and spacing conventions, color and typography use, shapes and elevation, component usage and states, responsive behavior, accessibility expectations and references to external design sources such as an existing design system or design files.

Shared Design Guidance has three section-owned blocks. **Design direction** is required short prose that describes the intended visual character, hierarchy and product experience. **Reusable design conventions** is optional structured content: each entry records a Name, precise Value or rule, and Intended use under one fixed document-facing heading—Color and surfaces, Typography, Layout and spacing, Shape and elevation, or Component conventions. **Application guidance** is optional concise prose recording preferences and avoidances, plus responsive or accessibility principles only when genuinely cross-cutting. Authors may save useful guidance with Design direction alone and are never required to invent colors, type scales, breakpoints or other values.

Specific observable interface behavior remains a UI Requirement, and measurable quality remains a Non-Functional Requirement. Shared Design Guidance provides their common context; it does not duplicate their local obligations.

The section is not a design-system authoring surface. In the MVP, this guidance remains structured section content, artifact fields or external references rather than separate Design Token, Color, Typography or UI Component Product Artifacts. A handoff may render the available shared guidance and relevant UX/UI knowledge as a derived `design.md` companion for human or AI implementation consumers; it must not invent missing values or replace a full design system.

### Shared Design Guidance authoring

The UX/UI section displays fixed **Design direction**, **Reusable design conventions** and **Application guidance** blocks. Its contextual actions reveal `Define design direction`, `Add convention` and `Add application guidance`; authors may begin with any of them. A Design direction draft is private short prose. A convention draft selects a fixed heading and collects its Name, Value or rule, and Intended use. Application guidance is one private concise-prose draft.

Design direction is required before the first convention or Application guidance can save. If it is missing, the workbench preserves that private draft while the author explicitly creates Design direction, then resumes the original draft. Saved conventions expose `Edit convention` and locally confirmed `Remove convention`. Saved Design direction and Application guidance expose ordinary edit actions; `Clear application guidance` has local confirmation. The flow creates neither Product Artifacts nor a separate Shared Design Guidance management surface.

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

After project creation, the user should see the selected Specification Document Template as a prepared document: all selected section titles appear in document order, with concise template guidance or placeholders explaining each section's purpose. No substantive user-authored content or Product Artifacts exist yet. This should feel like opening a document template and filling it in, not discovering a blank application canvas.

The document should be an actionable canvas without permanently displaying controls throughout the specification.

On desktop, hovering or keyboard-focusing an actionable section area or Product Artifact should reveal its contextual action control. When exactly one action is valid, the control names that action directly; an empty `Goals and Success Criteria` section therefore shows `Add Goal`. When several actions are valid, a neutral `Actions` control is shown first; selecting it replaces or expands locally into the available named controls without applying an action immediately. On mobile, where hover is unavailable, a tap or equivalent touch gesture invokes the same local action surface before the user chooses an action. This keeps action discovery consistent across device types while avoiding persistent visual clutter.

Contextual actions and the information they progressively reveal should remain local to the selected document scope. They should use in-place replacement or expansion with ordinary back navigation, preserving the user's place in the document rather than opening a modal or dialog. This non-modal disclosure is the default, especially on mobile; any later exception must be justified by an interaction that cannot remain understandable in the document context.

When the author reaches a missing prerequisite or related Product Artifact while working locally, the document may offer an explicit contextual related-knowledge creation action. It creates the new knowledge in its canonical section, preserves the original private draft and resumes it with the new relationship preselected after `Done editing`. This is an author-controlled continuation of the same thought, not automatic knowledge creation, inferred relationship creation, a task, workflow gate or separate workflow.

The available actions must be explicit and scope-aware. An empty `Goals and Success Criteria` section has one action: `Add Goal`. Once it contains a Goal, the section still offers `Add Goal`; it does not offer section-level introductory prose. An existing Goal exposes `Edit Goal` as its direct action and `More actions` for secondary actions such as `Archive Goal`. `Archive Goal` uses local explicit confirmation, then removes the Goal and its owned criteria from the active document. The active document does not retain struck-through archived Goals; an explicit archived/history view provides `Restore Goal`. Its Goal Success Criteria child area owns `Add Success Criterion`, keeping that extension visibly associated with its parent rather than competing in the Goal toolbar.

Blank space within a section invokes the section's action surface. Hovering, focusing or selecting an existing artifact reveals that artifact's action surface. This distinction lets a document section contain its own prose and multiple Product Artifacts without confusing their scopes.

### Product Overview authoring

`Product Overview` is concise canonical prose owned by its section, not a Product Artifact. An empty section displays non-canonical template guidance: `Give readers a concise orientation: what is being created, who it serves, the problem or opportunity, and the value it should create. Keep detailed Goals, Scope, and Requirements in their own sections.` Hovering, keyboard focus or touch reveals its one direct action, `Write Product Overview`.

Selecting that action opens one inline multi-paragraph prose draft. Leaving preserves the private draft; `Discard` returns the section to its template guidance; and `Done editing` creates a canonical section-content Revision. A saved overview exposes `Edit Product Overview` and secondary `Clear Product Overview`. Clearing uses local explicit confirmation, creates a new section-content Revision and returns the section to its template guidance. As summary prose, a saved overview does not infer downstream relationships or mark Product Artifacts Stale.

The initial editor supports ordinary paragraph breaks only. It does not introduce a section-specific rich-text toolbar. Inline formatting, links, lists, headings and other rich-text behavior require a later document-wide capability decision and may vary by section or artifact type.

### Problem or Opportunity authoring

`Problem or Opportunity` is a structured section with two optional, section-owned prose blocks. Its prepared document template visibly labels both blocks with non-canonical guidance: `Problem` asks for the current pain, limitation or unmet need; `Opportunity` asks for the improvement or value that addressing it could unlock. The section does not select a solution; candidate solutions belong later in Core Features.

An empty section exposes `Actions`, which progressively reveals `Add Problem` and `Add Opportunity`. The user may author either block or both. Each action creates a private inline multi-paragraph draft; `Done editing` saves a section-content Revision, while `Discard` restores that block's guidance. Once one block is saved, the section directly offers its missing block. Once both exist, there is no additional section-level authoring action.

Saved blocks expose their own `Edit Problem` or `Edit Opportunity` action and secondary `Clear` action. Clearing requires local explicit confirmation and creates a section-content Revision. If it clears the final remaining saved block, the section returns to its empty guided state. When this selected required section has no saved Problem or Opportunity content, it participates in ordinary low-priority required-section `What next?` coverage guidance. The blocks have no independent lifecycle, relationships or inferred impact propagation.

The blocks support ordinary paragraph breaks only. Rich-text formatting remains a later document-wide capability decision rather than a Problem-or-Opportunity-specific toolbar.

### Non-Goals authoring

`Non-Goals` is a structured list of section-owned boundary statements, not a Product Artifact collection. Its empty prepared state displays non-canonical guidance: `State what this specification intentionally does not aim to achieve.` Hovering, keyboard focus or touch exposes its one direct action, `Add Non-Goal`.

Selecting that action opens a private inline draft with one required plain-language statement. Leaving preserves the draft; `Discard` removes it; and `Done editing` creates a canonical section-content Revision. After one or more items are saved, the section continues to expose `Add Non-Goal`. Saved items render as an unordered bullet list: their sequence is not meaningful and the MVP provides no reordering control.

A saved item exposes `Edit Non-Goal` as its direct action and `Remove Non-Goal` as a secondary action. Removing requires local explicit confirmation and creates a section-content Revision. When it removes the final saved item, the section returns to its empty guided state. If the selected Non-Goals section is required, an empty section participates in ordinary low-priority required-section `What next?` coverage guidance. The items have no independent lifecycle, relationships or inferred impact propagation.

The initial item editor supports its single plain-language statement only. Rich-text formatting remains a later document-wide capability decision rather than a Non-Goal-specific toolbar.

### Target Users or Personas authoring

`Target Users or Personas` contains User Profile Product Artifacts. Its empty prepared state displays non-canonical guidance: `Identify the people or groups the product intends to serve. Use a Target User for a broad group, or a Persona for a more specific representative profile.` Hovering, keyboard focus or touch exposes its one direct action, `Add User Profile`.

Selecting that action opens a private inline artifact draft. The required first fields are **Profile kind** (`Target User` or `Persona`), **Title** and **Short description**. The editor progressively offers optional **Relevant context** as flexible labelled facts, **Goals and motivations**, **Frustrations or pain points**, and **Needs from the product** as separate statement lists. It requests only context that is useful to the product; it neither requires demographic fields nor encourages fabricated personal detail. The embedded lists are profile fields, not child Product Artifacts, and only populated areas render in the saved mini-profile.

Leaving preserves the private draft; `Discard` removes it; and `Done editing` creates a canonical User Profile Revision. A saved profile exposes `Edit User Profile` directly and `Archive User Profile` as a secondary action with local explicit confirmation. Its active contents render as a readable mini-profile in document flow. As with other Product Artifacts, explicit saved relationships—not similar wording—govern any later impact feedback. Needs from the product may later be linked to User Need artifacts but do not replace them.

The section is required in every initial preset. An empty section therefore participates in ordinary low-priority required-section `What next?` coverage guidance. The initial profile editor supports plain-language text and statement lists only; rich-text formatting remains a later document-wide capability decision.

### User Needs authoring

`User Needs` contains an ungrouped list of User Need Product Artifacts. Each renders its explicit `For:` User Profile label or labels, followed by its required user-centred **Need** statement and required **Expected outcome**. The need statement is the readable heading; no duplicate title field is shown. The section's contextual `Actions` surface always reveals both `Add User Need` and `Add User Profile`.

`Add User Need` opens a private inline artifact draft and requires the owner to select one or more existing User Profiles before saving. It then collects the Need statement and Expected outcome. If no User Profile exists, the flow explains that a target user is required and offers `Add User Profile` or cancel. Choosing it opens a private User Profile draft in the canonical `Target Users or Personas` section, preserves the need draft, and returns to it with the new profile selected after `Done editing`. The `Add User Profile` action remains available from User Needs even when profiles already exist. Conversely, `Add User Need` from a saved User Profile preselects that profile.

Leaving a need preserves its private draft; `Discard` removes it; and `Done editing` creates a canonical User Need Revision. A saved need exposes direct `Edit User Need` and secondary `Archive User Need` with local explicit confirmation. Removing all User Profile links is invalid. Profile-local needs from the product may inform the draft but do not synchronize with or replace User Need artifacts. As with other Product Artifacts, only explicit saved relationships govern later impact feedback.

User Needs is optional in the Simple Web Presence preset and required in the Standard Web App and Complex Product App presets. When selected as required and empty, it participates in ordinary low-priority required-section `What next?` coverage guidance. The initial editor supports plain-language statements only; rich-text formatting remains a later document-wide capability decision.

### Scope authoring

`Scope` is a structured section with fixed, section-owned **In Scope** and **Out of Scope** blocks. Its prepared document state presents concise guidance: In Scope describes the high-level product areas and bounded capabilities this specification covers; Out of Scope identifies nearby or expected areas it deliberately excludes. The latter may refer to an existing Non-Goal rather than repeat a broader strategic boundary.

An empty Scope section exposes `Actions`, which reveals `Define In Scope` and `Define Out of Scope`. Each opens a private inline block draft supporting short paragraphs, unordered lists and ordered lists only where sequence is meaningful. It does not offer nested lists, arbitrary headings or a general rich-text toolbar. `Done editing` creates a section-content Revision; `Discard` restores the relevant block's guidance.

A saved block exposes direct `Edit In Scope` or `Edit Out of Scope` and secondary locally confirmed `Clear` action. Clearing In Scope returns the required Scope section to its empty guided state; clearing Out of Scope restores only its optional guidance. The blocks are not Product Artifacts, have no independent lifecycle or relationships, and do not infer automatic Stale impact from prose or list edits.

Scope is required in every initial preset. When In Scope has no saved content, the section participates in ordinary low-priority required-section `What next?` coverage guidance. Once In Scope is saved and Out of Scope remains empty, the section directly offers `Define Out of Scope`; after both are saved, there is no additional section-level authoring action.

### Core Features authoring

`Core Features` contains Core Feature Product Artifacts, optionally organized under section-owned **Feature Groups**. A group has a required title and optional short description. It is a presentation heading rather than a Product Artifact, technical module or relationship type; it may contain zero or more Features. A Feature may remain ungrouped or belong to one group only.

The section's `Actions` surface always reveals `Add Core Feature`, `Add Feature Group` and `Add User Need`. A Feature draft requires a **Title**, concise **Description**, and one or more linked User Needs that it addresses. If no User Need exists, the flow offers `Add User Need` or cancel; creating that Need occurs in its canonical section, preserves the Feature draft and resumes it with the new Need selected. Detailed behavior belongs later in User Stories, Use Cases, Requirements and Acceptance Criteria rather than in the Feature description.

A saved Feature renders with its title, concise description and linked User Need labels. It exposes direct `Edit Core Feature` and secondary `Archive Core Feature` with local explicit confirmation. It follows ordinary Product Artifact drafts, Revisions, lifecycle and relationship-based impact behavior. Feature Groups offer their own edit controls; creating or editing a group, changing group or Feature order, or moving a Feature between groups creates a document-composition Revision only and never changes Feature meaning or impact state. Nested groups are not supported.

Core Features is required in every initial preset. When the section has no active Feature, it participates in ordinary low-priority required-section `What next?` coverage guidance. The initial Feature and group editors support plain-language text only; rich-text formatting remains a later document-wide capability decision.

### User Stories and Use Cases authoring

`User Stories and Use Cases` contains independent User Story and Use Case Product Artifacts. Its `Actions` surface always reveals `Add User Story`, `Add Use Case` and `Add Core Feature`. Both drafts require one primary Core Feature. If none exists, the flow offers `Add Core Feature` or cancel; related-knowledge creation saves the Feature in its canonical section, preserves the original draft and resumes it with that Feature selected.

A User Story requires one primary User Profile, **Intent** and **Benefit**. Its profile is selected from the primary Feature's explicitly linked User-Need context. The editor enforces these structured fields rather than one fragile typed sentence. In the document, it renders them through the project Content Locale's equivalent of `As a [profile], I want to [intent], so that [benefit]`; a different Content Locale changes only the fixed scaffolding, never the authored field values. A User Story has no separate title field.

A Use Case requires **Title**, **Primary actor**, **Goal**, **Trigger**, an ordered **Main flow**, and **Outcome**. It may add **Preconditions**, **Alternate flows** and an optional related User Story. Its primary actor may be a User Profile or a plainly named external or system actor. Main and alternate flows use a controlled ordered-step editor rather than a general rich-text surface.

Saved User Stories and Use Cases render in document flow with their Core Feature context and expose direct edit plus secondary locally confirmed archive actions. Both follow ordinary artifact drafts, Revisions, lifecycle and relationship-based impact behavior; neither automatically creates or replaces the other. The section is optional in the Simple Web Presence preset, recommended in the Standard Web App preset and required in the Complex Product App preset. When selected as required and empty, it participates in ordinary low-priority required-section `What next?` coverage guidance.

### Acceptance Criteria authoring

`Acceptance Criteria` contains each Acceptance Criterion once as its canonical document list. The section exposes `Add Acceptance Criterion`, which opens a private draft. The draft first selects **Direct** or **Scenario** form, then one required **Primary validation target** and optional additional validation targets. A Core Feature, User Story, Use Case, Functional Requirement, Non-Functional Requirement, Domain Rule, Screen / View, User Flow or UI Requirement may be selected. When no target exists, the flow offers `Add Core Feature` or cancel; contextual related-knowledge creation preserves the criterion draft and resumes it with the new Feature selected.

A Direct criterion requires one observable **Pass condition**, which is also its readable heading. A Scenario criterion requires **Given**, **When** and **Then**; `Then` is its observable pass condition. From any eligible target, `Add Acceptance Criterion` preselects that target as primary. The editor can add further explicit validation targets but never infers them from similarly worded text. A shared criterion may validate a Domain Rule and a related Functional Requirement only when its observable evidence genuinely covers both; Domain Concepts and Domain Relationships remain structural context rather than validation targets.

The Acceptance Criteria section renders every criterion once with concise target labels. Its primary and additional targets may render the same linked criterion close to their own content, with the ordinary direct edit and secondary locally confirmed archive actions. These are contextual projections of one artifact, not copies. Criteria follow ordinary drafts, Revisions, lifecycle and explicit relationship-based impact behavior. Acceptance Criteria are required in every initial preset; an empty section participates in ordinary low-priority required-section `What next?` coverage guidance. The forms are controlled structured fields rather than a general rich-text editor.

### Functional Requirements organization

`Functional Requirements` may present its independent Functional Requirement artifacts under optional **Requirement Groups**. A group has a required title and optional short purpose. It is a single-level, section-owned presentation heading: it may contain zero or more requirements, and a requirement may be ungrouped or belong to one group. Groups are not artifacts or technical modules, and nesting groups is not supported initially.

Creating, editing or reordering a group, reordering requirements, or moving a requirement into or out of a group changes document composition only. It may change the derived outline numbering, but does not change a Functional Requirement's immutable readable reference, meaning, relationships, lifecycle or impact state.

### Functional Requirement leaf authoring

Each Functional Requirement renders as one independently traceable leaf: its immutable readable reference, concise **Title**, primary Core Feature context and a required, independently testable **Requirement statement**. The author may add other explicit Core Feature links where the same behavior genuinely supports multiple capabilities; the primary Feature remains the requirement's main authoring and document context. The editor never infers additional links from wording or from shared Requirement Group membership. Its document-facing guidance uses the project Content Locale's equivalent of formal wording such as `The system shall …`; no particular English sentence pattern is the canonical data model or a requirement for authored content in another locale.

An optional **Conditions and constraints** area is a flat list of plain-language statements that may qualify the requirement's stated behavior. The author does not classify an entry as a Condition or Constraint, and the workbench does not infer that type from wording. The list does not support nesting or a rich-text editor. It must not conceal distinct obligations: content with an independently changeable or testable behavior, separate outcome or cross-cutting rule is authored as another Functional Requirement. A saved requirement may have no linked Acceptance Criterion initially. The document instead shows a clear coverage cue and offers ordinary later validation authoring; it does not block the requirement's first saved Revision or invent acceptance evidence.

The section's `Actions` surface reveals `Add Functional Requirement`, `Add Requirement Group` and `Add Core Feature`. A new requirement started from the section is initially ungrouped. A Requirement Group presents its own `Add Functional Requirement` action, which pre-associates the private draft with that group. Every requirement draft requires a primary Core Feature; when no Feature exists, the flow offers `Add Core Feature` or cancel, preserves the requirement draft and resumes it with the new Feature selected after save. A saved requirement exposes direct `Edit Functional Requirement`, secondary locally confirmed `Archive Functional Requirement`, and `Add Acceptance Criterion`, which opens the ordinary criterion draft with the requirement as its preselected primary validation target.

### Non-Functional Requirements model

`Non-Functional Requirements` contains independent artifacts for measurable quality expectations. Each renders its immutable readable reference, such as `NFR-001`, concise Title, quality category, measurable requirement statement, one required primary scope target and optional additional explicit targets. The statement is canonical and independently interpretable. An optional **Measurement context** area may clarify the measurement event, conditions, baseline, or relevant source or standard; it does not replace Acceptance Criteria or a test plan. The reference does not encode category or document position. The initial eligible targets are Whole Specification, Core Feature, Functional Requirement, Use Case, Screen / View, User Flow and UI Requirement. The primary target supplies the NFR's main authoring and document context; additional targets avoid duplicate artifacts when the same quality expectation applies to related knowledge. The initial category selector provides Performance, Reliability and availability, Security, Privacy, Accessibility, Compatibility, Usability, Compliance and Other. Selecting Other requires a short custom category label. Category labels are document-facing Content-Locale text; they organize and aid review but do not create document subsections or a workflow. This model keeps a cross-cutting quality requirement distinct from a Functional Requirement's local qualifier, which remains scoped to the behavior of that one requirement.

A saved Non-Functional Requirement may initially have no linked Acceptance Criterion; the document presents a coverage cue rather than blocking its save. `Add Acceptance Criterion` from the NFR opens ordinary criterion authoring with that NFR preselected as primary. A shared criterion may validate an NFR and related Functional Requirement only when its observable evidence genuinely covers each.

The section's `Actions` surface reveals `Add Non-Functional Requirement` and no grouping action initially. Its private inline draft collects the quality category, required **Primary scope target**, optional additional targets, **Title**, measurable **Requirement statement** and optional Measurement context. Whole Specification is eligible, but the author must select it explicitly when beginning from the NFR section. From any eligible target artifact, `Add Non-Functional Requirement` preselects that target as primary. A saved NFR exposes direct `Edit Non-Functional Requirement`, secondary locally confirmed `Archive Non-Functional Requirement`, and `Add Acceptance Criterion`.

### Data or Domain Model authoring

`Data or Domain Model` has three fixed document blocks: **Domain Concepts**, **Domain Relationships** and **Domain Rules**. They are presentation blocks inside one section, not separate documents or additional artifact types. The section's `Actions` surface reveals `Add Domain Concept`, `Add Domain Relationship` and `Add Domain Rule`, and authors may begin with any of them.

A Domain Concept draft collects its required Title and Definition and optional **Key business attributes** list. A Domain Relationship draft collects its required source Domain Concept, readable relationship statement and target Domain Concept, plus optional cardinality at either end. A Domain Rule draft collects its required Title, Business Rule or Invariant kind, canonical statement and one or more items in its **Governs** list.

The workbench enforces only the prerequisites needed to save the current item. If a Relationship draft needs a missing source or target Concept, or a Rule draft needs a governed Concept or Relationship, it preserves the private draft while the author explicitly creates that knowledge and resumes with it preselected. Starting `Add Domain Relationship` from a Domain Concept preselects that Concept as source. Starting `Add Domain Rule` from a Domain Concept or Domain Relationship preselects it in the Rule's **Governs** list. Saved Domain Concepts and Domain Rules expose ordinary direct edit and secondary locally confirmed archive actions. Saved Domain Relationships are first-class relationship records, so they expose explicit edit and remove actions rather than Artifact lifecycle actions.

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

### Goal Success Criteria authoring

Goal Success Criteria are visible, Goal-owned structured children in `Goals and Success Criteria`; they are distinct from the Product Artifacts in the document and from Acceptance Criteria elsewhere in the Specification. The Goal child area contains the local `Add Success Criterion` action. Selecting it inserts a private inline draft at the end of the Goal's criterion list and focuses its required plain-language measurable statement.

`Add measurement details` progressively reveals optional Measure, Target and Timeframe fields. In reading mode, the statement is the primary document text and supplied qualifiers render as compact supporting labels. The statement is canonical; if it conflicts with qualifiers, the workbench explains the mismatch and does not rewrite either value.

`Done editing` saves the new or edited criterion as part of a complete new Revision of its parent Goal. Leaving preserves the private child draft, while `Discard` removes only that draft. A saved criterion exposes `Edit Success Criterion` and `More actions`; `Remove Success Criterion` is a secondary action that creates a new parent-Goal Revision. It is not independently archived.

The section renders active Goals as an ordered document sequence, for example `Goal 1 — [title]`, with an automatically numbered list of each Goal's Success Criteria beneath it. The numbers are derived from current document order and are not stable identifiers. `Add Goal` appends a new Goal to the end of the section. `Move Goal up` and `Move Goal down` are secondary actions that renumber the visible sequence without changing Goal meaning, owned criteria or their local review state.

### Impact feedback after a committed edit

After `Done editing`, the saved Revision should apply immediately. The workbench should then provide a non-blocking, artifact-anchored impact disclosure. It is collapsed by default, may show a compact affected-artifact count and can expand to a short navigable list of the affected artifacts.

The transient disclosure should disappear when the user acts outside the edited artifact or navigates to another page. It should not use a modal or otherwise interrupt document work.

The affected artifacts retain persistent, accessible cues in the document for as long as their impact result remains active. The document outline should also surface aggregate indicators on affected section titles, distinguishing Stale artifacts from coverage/readiness warnings rather than showing only one generic affected-item count.

When the owner saves a Goal that already has Goal Success Criteria, the save interaction asks whether the change is `Wording only` or `Goal meaning changed`; neither is preselected. A wording-only correction saves the Goal Revision without changing its criteria. A Goal-meaning change shows a compact non-modal disclosure anchored to the Goal, such as `This change may affect 2 Success Criteria. Review them.` Each affected criterion must be individually confirmed as still fitting, edited or removed. This is a local Goal review state, not the global Artifact Lifecycle state Stale.

These interaction rules are a first pass and should be validated through later prototypes and concrete specification exercises.

## First-Slice UX Prototype And Interaction Validation

The selected first slice requires a low-fidelity, interactive journey prototype and a documented solo Prototype Review. This is a design-validation model, not a production interface, visual-design system, independent usability study or implementation authorization.

The prototype follows one first-time Project Owner through authenticated entry, the calm no-Projects home, Project creation, the fixed `Implementation-Ready Web App Specification` / `Standard Web App` starter, the empty Specification, local `Add Goal`, inline Goal editing, explicit `Done editing`, and later return to the saved Project.

It must express these user-visible states clearly enough for the solo review:

| Moment | Required interaction property |
|---|---|
| First-use home | One clear primary action: **Create your first Project**. |
| Project creation | Required-title validation, optional description, editable **Content language** pre-filled from the resolved Interface Locale, and a fixed starter without a fake template picker. |
| Project creation pending or failure | Pending state is clear; on failure, entered values remain visible and retry is available. |
| Empty Specification | The document is empty but actionable. |
| Add Goal | A local action is present in `Goals and Success Criteria`. |
| Inline Goal editor | Title and content are clear; focus enters the title field. |
| Explicit save | `Done editing` clearly signals canonical saved Product Knowledge rather than merely exiting the editor. |
| Goal save failure | The visible draft remains available for retry or explicit discard; no false saved state appears. |
| Saved result | The rendered Goal has concise save confirmation; focus moves to the saved Goal. |
| Project return | The Project appears in the user's Project home and reopens with the saved Goal. |

Keyboard validation covers logical sequential focus, visible focus, keyboard activation, labelled controls, focus entry into the Goal editor and accessible validation or error feedback. Status and error communication must not rely on color alone.

The solo reviewer follows the task of capturing an initial outcome for a new product idea and returning to it later, while deliberately checking the perspective of a first-time Project Owner. The review checks whether the journey expresses the private-draft and saved-state distinction, fixed starter, explicit `Done editing` boundary, and recovery from simulated creation or save failure. It records limits rather than claiming independent user comprehension.

This model does not validate persistent Goal-draft resumption across navigation; that capability remains deferred. It does validate preserving the visible draft after a save failure, which is necessary to prevent silent loss and allow a retry or explicit discard. It also validates that Content Language is visible, editable and carried through Project creation, but does not validate browser-locale detection, interface-language settings or translated interface content. Authentication mechanics, offline behavior, visual styling, alternative starters, collaboration, AI and handoff remain outside the model.

### Solo Prototype Review before technology selection

Before technology selection, the Project Owner completes and records a solo Prototype Review. The prototype is a low-fidelity clickable model with deliberately simulated local state, pending states and failures; it is not product implementation. The review evaluates specification coherence and interaction direction, not independent usability, visual-design quality or accessibility conformance.

The review state map contains one happy-path journey and two injected recovery branches:

| State or branch | Prototype behavior and review check |
|---|---|
| Authenticated entry and no-Projects home | Assume the reviewer is signed in. Check that **Create your first Project** is the clear primary action. |
| Project creation | Required title, optional description, editable **Content language** pre-filled from the Interface Locale, and a visible fixed starter. Check that the starter is clearly already selected rather than a missing template choice. |
| Missing-title validation | An attempted create without a title shows understandable validation and permits correction. |
| Project-creation recovery | A simulated pending state becomes a failure. Entered values remain visible and retry creates the Project. |
| Empty Specification | The selected section structure is empty but actionable; check the local `Add Goal` action in `Goals and Success Criteria`. |
| Goal editor and explicit save | Title and content are edited inline. Before selecting `Done editing`, check whether its effect is clearly expressed. |
| Goal-save recovery | A simulated pending state becomes a failure. The visible unsaved Goal remains distinguishable from saved state and supports retry or explicit discard. Retry produces the saved outcome. |
| Saved result and return | The Goal renders with concise confirmation, focus moves to it, and the reviewer can return home and reopen the saved Project. |

Use a task card that asks the reviewer to capture an initial outcome for a new product idea and return to it later. Include a content-language scenario in which the intended specification language differs from the displayed interface language. Before normal creation, check what happens when the title is omitted. After the successful first Goal, use a short disposable-Goal follow-on scenario to exercise explicit discard after a simulated save failure.

Run a keyboard-only pass over the same state map. Verify logical visible focus, keyboard activation, focus entry into the Goal title, focus after save, labels, validation and error text, saved-state feedback, and non-color status/error communication. Run a preliminary screen-reader-oriented pass where the prototype's implementation makes it meaningful; record the browser, assistive technology and any limits rather than making a conformance claim.

Record the exercised state or branch, result, discovered issue, known limit and any follow-up. Where layout is in scope, record the viewport assumption and whether the declared hierarchy, control placement and state communication remain understandable. Classify each finding as:

- **Critical:** creates a false presentation that unsaved or failed content is saved, prevents safe recovery, or blocks essential keyboard access.
- **Major:** prevents completion of a core journey step or materially obscures the starter, language or save boundary.
- **Minor:** causes hesitation or confusion without preventing safe completion.

Proceed to technology selection when the documented review covers the declared state map and no unresolved critical contradiction, false saved-state presentation, unsafe recovery path or essential keyboard blocker remains. Otherwise, refine the interaction and repeat the relevant review. This establishes a sufficiently coherent direction for technology selection; it is not a claim of independent usability validation or accessibility conformance.

### Execution-stage recommendations

Once a working implementation exists, recommendations should include iterative independent first-time-user sessions and accessibility input where feasible, alongside the engineering-quality baseline's browser, keyboard and screen-reader-oriented checks. These recommendations should be tailored to the working product and its intended users; they are not a pre-technology-selection requirement.

For independent-session work later in execution, the prior task structure remains useful: first-use creation; required-title validation; a Content Language that differs from the Interface Locale; creation failure and retry; empty Specification orientation; local Goal creation; explicit-save comprehension; save failure with retry or discard; saved result; and Project return. Treat a false saved-state belief, unsafe recovery failure or essential keyboard barrier as a critical finding. Record the participant and accessibility-review scope and limits; do not generalize a small study as conformance evidence.

### Deterministic next-step guidance

The document should offer an optional, user-invoked `What next?` control near the document outline. It presents deterministic guidance derived from the current Project State; it is not a task list, Product Artifact, workflow gate or AI request.

The control should show up to three highest-priority items and allow the user to open the full list. Each item must state its scope, a plain-language reason and an action to navigate to that scope or open its normal contextual action menu. Guidance must not automatically apply a change or force the user to act in a prescribed order.

The initial deterministic guidance categories and priority order are:

| Priority | Guidance item | Deterministic rule |
|---:|---|---|
| 1 | Continue draft | The current user owns an Edit-in-progress Draft. |
| 2 | Resolve blocker | An active Open Question explicitly `blocks` an active artifact. |
| 3 | Review impact | Active artifacts are Stale or have coverage/readiness warnings; Stale ranks above a warning. A Goal whose owner identified a Goal-meaning change appears once for its affected Goal Success Criteria. |
| 4 | Add Goal Success Criteria | A saved Goal has no Goal Success Criteria. |
| 5 | Complete required coverage | A required selected section has no non-whitespace section content and no active contained Product Artifacts. |

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

For Product Overview, Request Feedback should assemble the overview and any stated feedback focus as primary context. Problem or Opportunity, Target Users or Personas, Goals and Success Criteria, Scope and Non-Goals should provide the usual strategic orientation; User Needs and Core Features should be included only when they clarify the overview. The response should be a caveated Comment, Question, Suggested Edit, Summary, Proposed Artifact or Proposed Decision rather than a structured Review or readiness result. When some strategic anchors are missing but the overview contains a substantive stated problem or value proposition, feedback proceeds as partial and the Context Explanation identifies what limited strategic feedback. When the overview contains only a name or similarly non-substantive text and no feedback focus, feedback is insufficient: the request may still be submitted with a visible warning, but returns Questions and missing-basis Summary only.

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

The initial catalog has six lenses: Requirements Quality, UX Quality, Accessibility, Security, Testability and Implementation Readiness. Requirements Quality is compatible with requirement- or acceptance-oriented content; UX Quality with experience-oriented content; Accessibility with interaction-oriented content; Security with boundary- or constraint-oriented content; Testability with behavior- or verification-oriented content; and Implementation Readiness with implementation-bearing content. Every lens is available from the whole Specification. A compatible Section or Artifact may still lack sufficient evidence, in which case the Review proceeds with explicit partial or insufficient-context limits rather than hiding a lens, changing the request scope or deriving an outcome. Selected-content scope inherits compatible lenses from its containing Artifact or Section, but the response remains about the fragment and immediately relevant host context only.

| Scope kind | Lens compatibility |
|---|---|
| Whole Specification | All six catalog lenses are available. |
| Eligible Specification Section | The lens must be compatible with the Section's template purpose or active contained content. |
| Active Product Artifact | The lens must be compatible with the Artifact's stated role. |
| Selected content | The fragment inherits compatible lenses from its containing Artifact or Section; it never represents that host as a whole. |

At an Artifact contextual entry, the composer may visibly preselect a catalog-declared default—for example, Requirements Quality for a Functional Requirement—but the requestor still confirms it. Section and whole-Specification entries always require deliberate lens selection. Lens compatibility filters the available lens choices; it does not rank, route or select the one recipient, and does not infer a readiness state. Accessibility may be standards-informed but never certifies conformance; Security never certifies security; and an Implementation Readiness Lens returns Findings and Summary rather than a Readiness Result or deterministic handoff outcome.

For selected text within an interaction-oriented UI Requirement, Accessibility is available through the compatible host. The composer presents the selected text with immediately relevant host behavior, linked Screen/View and User Flow, related requirements and acceptance evidence, and any declared accessibility target. Its response can identify a fragment-level omission—for example, missing accessible error identification, focus behavior or assistive-technology feedback where relevant—but cannot state that the containing UI Requirement, Screen/View, Section or implementation conforms to accessibility requirements.

For an active Artifact that defines integration behavior, Security is a compatible lens because the Artifact establishes a system boundary. The composer identifies that boundary and includes known related requirements, acceptance evidence, constraints, Decisions, Risks and available contract references in the context preview. Missing external contract, authentication, data-handling or verification detail is communicated as a context limit or potential Finding; it neither hides the Security Lens nor turns the Review into a security certification, readiness check or recipient-routing rule.

For an active User Flow that defines a user journey, states or interaction guidance, UX Quality is a compatible lens because the Artifact is experience-oriented. The composer includes the stated review focus, related User Need or User Story, linked Screen/Views, UI Requirements, Functional Requirements and Acceptance Criteria, and applicable UX/UI design guidance. It may identify unclear journey steps, transitions, feedback, recovery or continuity only where documented Product Knowledge establishes them as relevant. Missing user, interaction, state or acceptance knowledge is communicated as a context limit or potential Finding; it does not hide the UX Quality Lens or make a usability, accessibility, implementation or readiness claim.

For an eligible `External Integrations` Section with implementation-bearing active content, Implementation Readiness is a compatible lens. The composer includes the Section purpose and active content, related requirements and acceptance evidence, known dependency, contract and ownership material, technical constraints, Decisions, Risks, Assumptions and Open Questions. An unresolved dependency becomes an explicit context limit or Finding; it does not make the Section ineligible, calculate a readiness outcome, create a report or package, or apply the deterministic handoff-dependency rules.

At whole-Specification scope, Testability assesses available cross-section evidence for documented observable behavior. The composer includes active behavior-defining knowledge, Acceptance Criteria and explicit validation relationships, requirements, flows, data/domain rules, integrations, constraints, Risks and Open Questions. A known behavior without acceptance evidence becomes a Finding; the Review does not invent generic edge cases, execute tests, create test results, certify implementation or produce a readiness outcome.

Review does not automatically use the Readiness Fact Check Set, which remains specific to `Validate Readiness`. It neither approves Product Knowledge nor certifies implementation, conformance, security, accessibility or readiness; it does not create Product Knowledge, delivery workflow or automatic changes.

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

## UX Quality Review

A Review on an active User Flow may use the UX Quality Lens to assess whether the available specification describes a coherent user journey, states and interaction guidance for the stated experience.

The review should include the selected User Flow, any stated review focus, related User Need or User Story, linked Screen/Views and UI Requirements, related Functional Requirements and Acceptance Criteria, and applicable UX/UI design guidance. Related Features or flows, Non-Functional Requirements, technical constraints, Decisions, Risks, Assumptions, Open Questions, Resource References and prior Reviews may provide supporting context.

The review may identify unclear journey steps, state transitions, feedback, recovery or continuity only where documented Product Knowledge makes them relevant. Missing user, interaction, state or acceptance knowledge should remain an explicit context limit or Finding. The Review returns non-canonical Findings, Questions, Suggested Edits, Proposals or Summary; it does not certify usability, accessibility, implementation or readiness, produce a Readiness Result or change Product Knowledge automatically.

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

One bounded Contribution Response may contain multiple discrete response items. Each item has one primary Response Shape. A Summary may synthesize the items but does not replace them; a Finding may be accompanied by a separately shaped Suggested Edit or Proposal that addresses it. The request detail presents these as related response content, not as separate requests, tasks or automatic Product Knowledge changes.

The Response Shape determines what the user receives and how they may separately consider it.

Initial MVP Response Shapes:

| Response Shape | What The User Receives | Likely Actions |
|---|---|---|
| Answer | A direct response to a question, including known basis and limits. | Acknowledge, act on manually or ask a follow-up. |
| Comment | A general note, observation or reaction. | Resolve, reply, ignore or turn into another action. |
| Question | A clarification request. | Answer, discuss or convert to an Open Question. |
| Finding | A structured issue or observation from a review or check. | Acknowledge, act on separately or request follow-up. |
| Suggested Edit | Proposed replacement or modification for existing content. | Review, apply separately, reject or edit. |
| Proposed Artifact | A suggested new Product Artifact. | Review, create separately, reject or edit. |
| Proposed Relationship | A suggested relationship between artifacts. | Review, create separately, reject or adjust. |
| Proposed Decision | A suggested decision, option or recommendation. | Review, decide separately, reject or discuss further. |
| Readiness Result | A readiness judgment with blockers, warnings or next actions. | Review, act on findings separately, defer or request Prepare Handoff. |
| Summary | A condensed explanation of content, context or results. | Use as reference or separately incorporate into Product Knowledge. |
| Handoff Material | Generated or refined handoff content. | Review, include separately in the export package, edit or reject. |

Each Finding has exactly one Finding Type. Finding Type classifies an issue or observation; it is not a Response Shape, severity, priority, workflow state, task, recipient assignment or deterministic readiness outcome. Review findings should be grouped by Finding Type where useful.

Example Finding Types:

- Gap
- Inconsistency
- Ambiguity
- Risk
- Blocker
- Dependency
- Recommendation
- Readiness Warning

A Requirements Quality Review may present an Ambiguity Finding for unclear wording and a Gap Finding for missing known Acceptance coverage beside a Question, a safe Suggested Edit, a Proposed Relationship and a Summary. A Security Review may distinguish a grounded Risk Finding from a Dependency Finding. Request Feedback stays comment-oriented: it may present Comments, Questions, Suggested Edits, Proposals and Summary, but never uses Findings or Finding Types merely to present open-ended feedback as a structured Review.

## MVP Collaboration Mode

MVP collaboration should be asynchronous and transactional.

The MVP should not support real-time co-editing, shared cursors, live presence or simultaneous editing conflict resolution.

Instead, a Project Owner should create a scoped Collaboration Request for one recipient. The recipient should be able to open the request, review the relevant context, submit a Contribution Response and leave the requestor to review it later.

Each MVP Collaboration Request selects exactly one available recipient. Capability and availability may guide that selection, but the request is not sent to a capability-only queue, broadcast or group. A user who needs multiple perspectives or evolving shared context uses a Conversation instead.

### Creating a standalone Collaboration Request

Only the Project Owner can create a standalone Collaboration Request. The owner can start **Request collaboration** from the Specification header, a Section action menu, a Product Artifact action menu or a selected-content action. Each contextual entry point establishes its corresponding initial scope: respectively the whole Specification, that Section, that Product Artifact or the selected content together with its containing structural context. That scope stays pinned in the contextual creation path; the owner who needs another scope cancels and starts from the appropriate source rather than being sent through a broad record picker. The owner cannot select themself as the human recipient.

The Project's Collaboration Requests workspace contains one role-aware, paginated list. The Project Owner sees **Requests you created**, including their private Drafts; a Project Collaborator sees **Requests for you**, where they are the selected human recipient. After Reopen, the collaborator retains a frozen, read-only view of the previously shared request until resubmission. If a Declined request is reassigned instead, the former recipient retains their frozen Declined cycle in **Requests for you**, while the replacement sees only the new current cycle. Its default applies no lifecycle or response-handling filter and sorts by **Last updated — newest first**. For the owner, Last updated changes for a meaningful request update: Brief edit, submission, lifecycle transition including AI On Hold or resume, response submission or explicit Acted On handling. Automatic acknowledgement after deliberate fully rendered response access is a read marker, not a meaningful list update, so it does not change Last updated or reorder the list. For a collaborator, it is the newest meaningful event visible to that collaborator; private Brief edits in a reopened Draft do not change their timestamp or reorder their list, while Reopen and resubmission do. The former recipient's frozen Declined record remains at its decline event and does not display or reorder for reassignment or later new-cycle activity. Opening or viewing a request without fully rendered response content does not change it. Search covers the Request Brief, Assistance Request Type, scoped-source label and participant names. The compact filter set is Request status, Contribution Response handling status, Assistance Request Type and scope kind; the owner may additionally filter by recipient. The available sort choices are Last updated newest first, Last updated oldest first, creation newest first and Request Brief A–Z.

The workspace first applies the role boundary, then search and all selected filters, then the chosen sort and finally pagination. It shows 25 requests per page. A search or filter change returns the user to page one and shows the number of matching requests. Search covers only the current request surface visible to that user; it excludes response bodies, retained prior-cycle content and private reopened-Draft changes. Response-handling filters apply only to the current Request Cycle. Retained history remains in the request detail and never produces a hidden history-filter match. Tied visible sort values use creation time and then an internal stable identifier, keeping pagination deterministic.

The list supports search, filtering and sorting rather than separate status lists, lifecycle columns or a response workspace. Compact request-oriented rows show the Request Brief, Assistance Request Type, scoped source, other party, labelled Request status and concise last-update event. A Contribution Response stays inside its request. When it belongs to the current request cycle, its handling status is a clearly labelled field of that same row—for example, `Request: Responded · Response: Submitted`—and never a separate list item. Owners may combine Request status and response-handling filters to find responses needing review. When a request has been reopened, the owner and recipient rows label retained earlier response evidence as such—for example, `Request: Draft · Previous response: Acted On`—and the recipient’s retained view says **Read-only until resubmitted**. The recipient cannot see the revised Brief or draft-context changes. Opening the request retains its full Brief, immutable recorded context, lifecycle history, response content and response-handling actions together. The list introduces no priority, due date, assignee, lifecycle grouping or needs-action worklist.

Opening a request uses one detail structure ordered by Request Cycle, newest first. The header shows the Brief, scope, type, other party, labelled Request status and visible last-update event. The current cycle stays expanded, showing immutable recorded context and either its submitted response with labelled handling status or a compact current state. When the requestor deliberately opens fully rendered current-response content for the first time, its handling status changes automatically to Acknowledged; expanding and fully rendering an earlier response does the same for that response. A list row, notification, compact preview or loading state does not acknowledge it. This read-state change does not change Last updated, reorder the list or appear in the lifecycle milestones. Private human response drafts stay private. For AI requests, In Progress and On Hold show that compact state only; the owner never sees streaming or incomplete assistant response text. Incomplete assistant working state may be retained privately only for a best-effort resume and is neither response content nor a lifecycle-history item. Earlier cycles are collapsed summaries, newest first, with terminal outcome, prior Brief snapshot and response status. Expanding a prior cycle shows its summary immediately and then loads the full immutable snapshot—Brief, recorded context and response beneath it—inline. The UI provides a compact loading state and retry on failure, and caches the expanded snapshot for the current detail session only. It never reassembles historical context from current Project State. Lifecycle presentation remains a concise milestone record—submission, start, response, decline, cancellation, On Hold, resume, reopen and explicit Acted On handling—not an activity feed or chat surface.

A submitted response is one surface, not a separate response workspace. When present, its Summary is a compact overview; its discrete items follow in contributor order with visible Response Shape labels and, for Findings, Finding Type labels. Related Suggested Edits or Proposals visibly link to the Finding they address without being hidden, nested into a task flow or removed from that sequence. This body never becomes a Findings inbox, priority list, assignment surface or per-item completion tracker.

The Project Owner as requestor may dismiss an individual item as not pursued. The item remains visible as dismissed evidence, with an optional rationale; dismissal does not delete it, reject its contributor, mark the response Acted On or alter Product Knowledge. From an item, the owner may open an appropriate ordinary private creation or editing draft—such as reviewing a Suggested Edit in its target content, or starting a draft for a proposed Artifact, Relationship, Decision or Open Question. The draft remains private and no Product Knowledge is created or applied until the owner explicitly saves through the ordinary flow. A Project Collaborator recipient can submit the response but has no canonical editing or saving action. At that save, the owner may explicitly link one whole Contribution Response to the resulting Revision as a Response Source Link. This is optional and must not be preselected from opening a response or draft; it records no item-level acceptance or disposition and makes no authorship claim. The requestor explicitly chooses **Act On** only for the containing response, after any mix of consideration, dismissal or separate drafts/saves; it requires neither an item-by-item disposition nor a linked Revision.

The owner can start **New request** from this workspace. This path begins with scope: the whole Specification is the default, and the owner may deliberately choose a Section or Product Artifact through the outline. Selected-content scope begins only from a selected-content action. The lower-priority Conversation-to-request capability is not an MVP entry point. This is a Project-scoped workspace, not a separate global request workplace. A future home or cross-project surface may show a compact, non-actionable attention summary and route the user into the relevant Project, but it must not offer an unscoped request composer, independent request board or separate global **My requests** and **Requests for me** pages.

Creation is a local, non-modal, document-first progressive-disclosure flow rather than a task-creation form or a modal dialog. After scope, it guides the owner through Assistance Request Type, one recipient, Request Brief and a read-only, explainable context preview before final submission. The preview identifies sufficient, partial or insufficient context for that specific request, not a general judgment of the source. Its ordinary assembled context contains only Primary and Supporting material; Optional material appears only when the Brief explicitly calls for it before submission. Nearby or graph-related material that does not support the request stays excluded, while material constraints and missing anchors remain visible. After submission, the recipient cannot expand immutable recorded context; they return a Question or caveated response when more material is needed, and the owner may Reopen and resubmit with revised context. Partial and insufficient states remain explicitly submittable with their stated limits; neither changes the chosen lens, scope or recipient. Back navigation keeps earlier choices visible as a compact local summary.

Recipient selection distinguishes eligibility, availability and capability. Eligibility is the structural boundary: **People** contains Project Collaborators rather than the owner, while **My assistants** contains only the owner's assistants permitted by Project settings. Availability determines which eligible candidates are selectable now: people become available through accepted Project collaboration, and assistants must be enabled and usable. Capability is explainable, non-binding guidance about known fit for the type, scope and optional Review Lens; it may identify an exact, related or unstated fit without automatically ranking, routing or excluding a candidate. Availability does not represent online presence, calendar time, willingness, capacity or workload.

The selector shows accepted Project Collaborators under **People** and the owner's enabled, usable assistants under **My assistants**, with concise capability guidance where known. A configured but unusable assistant may be shown non-selectably as `AI assistance unavailable`; it never exposes provider, model, credential, credit or detailed failure information. Pending invitees, non-collaborators, the owner as a human recipient and another user's assistants are not selectable. Initial **Request collaboration** and **New request** actions are enabled only when at least one eligible and available candidate exists. Otherwise they show a compact generic explanation and do not open a composer, so no scope or type choice, Request Brief, Draft, queue, broadcast, fallback assignment, inline invitation or inline assistant-configuration flow is created.

Scope, type and recipient are provisional choices. A private Draft is created and persisted only when the owner writes or edits the Request Brief; it remains private until submission and may be discarded. Before the first submission, the owner may revise the selected type, recipient and brief, and may revise a scope chosen through the Project request-list path; a contextually pinned scope remains fixed to its source. If the selected recipient becomes unavailable after the Draft begins, the Draft remains private but the submission action is disabled until availability returns or the owner selects another eligible available recipient. The preview derives and explains context from the chosen scope; it is read-only rather than a second editable request payload. The final action is explicit: **Submit request** for a human recipient or **Submit and ask _assistant name_** for an AI recipient.

Before submission, the requestor provides a required **Request brief** that frames the specific help, question or desired outcome within the selected scope. The Assistance Request Type identifies the kind of help sought; the brief identifies what this contributor should address. An initial private **Draft** offers **Continue editing**, **Discard draft** and submission. **Submit request** sends a human-targeted request to its recipient and makes its status **Submitted**. The recipient may choose **Start response**, making it **In progress** while they retain a private response draft, then continue it, submit one bounded response or choose **Decline**. Declining after response work discards that private draft and makes the request Declined. The requestor may choose **Cancel request** while it is Submitted or In progress; there is no automatic expiry, acceptance or delivery-management state.

For an AI-targeted request, only the requestor's own enabled Personal AI Assistants appear as selectable recipients. **Submit and ask Alfred** is the owner's explicit invocation: the request records Submitted, then shows **In progress** only after Alfred has actually begun work. While In progress, the owner sees the compact request state rather than streaming or incomplete response text. If AI assistance becomes unavailable before work begins, or processing is technically interrupted, the request becomes **On Hold**. The ordinary request surface says only that AI assistance is unavailable; provider, model, credential, credit and detailed technical-failure information remain in the owner's private settings. When eligibility is restored, the request remains On Hold and does not update or reorder until the owner explicitly chooses **Resume Alfred**. This invokes the assistant again, updates Last updated, retries or makes a best-effort continuation from private incomplete assistant working state, and moves it through Submitted to In progress when work starts. That working state is never shown as partial response text or retained as a response or history item. An AI assistant cannot Decline, cancel or resume autonomously; when it lacks sufficient product context, it returns a bounded Question or caveated response instead. The requestor may also cancel an On Hold request.

After a request is Responded, the requestor may choose **Reopen request** only while its fixed recipient remains eligible and available. This is a recorded action, not a status: it returns the request to a private Draft. The selected human recipient keeps a frozen, read-only view of the previously shared request and response evidence; the revised Brief and any draft-context changes are private until **Resubmit request** returns it to Submitted for the same recipient. Recipient, Assistance Request Type, scope and recorded context are read-only; only the Request brief can change.

After a request is Declined, the requestor may also choose **Reopen request** only when at least one eligible and available human collaborator or Personal AI Assistant exists. The prior recipient keeps their frozen read-only Declined cycle in **Requests for you**, with its decline event as Last updated. While that reopened Draft is private, the owner may revise the Brief and select any eligible available human recipient or their own eligible available Personal AI Assistant; the replacement sees only the new submitted cycle and never the prior recipient, decline or retained history. Reassignment, resubmission and later new-cycle activity do not appear in or reorder the former recipient's record. **Discard reopened draft** restores the immediately preceding terminal cycle without erasing its history. A Cancelled request cannot be reopened: renewed work starts a new request. Request status and Contribution Response status are displayed with their object labels, so request `Submitted` is not confused with response `Submitted`.

In request detail, the owner may dismiss individual response items, open ordinary private drafts from them, explicitly **Act On** or, when its fixed recipient remains eligible and available, Reopen a Responded request. Acknowledgement is automatic only on deliberate fully rendered response access. A recipient sees submitted response handling read-only. Both parties retain Declined or Cancelled evidence read-only. An AI request offers only its owner **Cancel request** while active and **Resume assistant** or cancel while On Hold; no other user can act on that request.

Human collaborators should participate through this asynchronous request and response flow. AI Contributors may return responses more immediately, but their contributions should still be treated as scoped assistance that the project owner can review before canonical product knowledge changes.

The project owner should see a submitted response become Acknowledged automatically when they deliberately open fully rendered response content for the first time. A list row, notification, compact preview or loading state does not count as access. Automatic acknowledgement remains visibly read but not acted on, does not update Last updated, reorder the list or create a lifecycle-history event. The requestor explicitly marks the containing response Acted On after dealing with its content.

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

When Workbench disclosure is enabled, collaborators see one discrete project-level **Known AI activity** entry near project information or the document outline. It opens the scoped trace without adding persistent AI-use badges to artifact prose or implying exact word-level authorship. That collaborator-facing disclosure does not show Response Source Links, their target Revisions or raw response content. When disclosure is off or Handoff only, that entry is not automatically shown to collaborators. The project owner can inspect the trace directly through project governance/settings for every disclosure destination and may reach an explicitly recorded Response Source Link only through the relevant owner-visible Revision history. A handoff includes disclosure only when its selected destination includes handoff; this applies equally to every handoff recipient, including the project owner.

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
  design.md (when UX/UI design context is included)
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
  design.md (when UX/UI design context is included)
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

When an included scope contains Shared Design Guidance or relevant UX/UI knowledge, the package may include a derived top-level `design.md`. It represents only available canonical knowledge: shared direction and named values or conventions, relevant Screen / Views and their Resource References, User Flows, UI Requirements, and applicable responsive or accessibility expectations. It is a portable design-context companion, not the canonical source, a full design system, or a substitute for behavioral requirements and Acceptance Criteria.

Stable artifact IDs should be embedded in `SPECIFICATION.md` and in section Markdown files so humans can understand relationships without constantly navigating to metadata files.

Functional Requirements and Non-Functional Requirements should additionally render their immutable readable references, such as `FR-001` and `NFR-001`. The generated document outline may use familiar hierarchical numbering for scanning, but that numbering is derived from the prepared composition rather than serving as the requirement reference. A prepared handoff preserves both the references and the outline as rendered at that point in time.

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

A data-model-centered handoff is meaningful only when it includes active Domain Concepts and their explicit relationships, at least one active Domain Rule governing the selected concepts or relationships, active Functional Requirement(s) explicitly related to those elements or rules, and active Acceptance Criteria that explicitly validate every included Functional Requirement. The scope selector presents these deterministic checks: domain structure, Domain Rule, related Functional Requirements, and acceptance coverage. Implementation-level schema details, storage technology, migrations, indexes, database ownership and physical data types are not universal minimum elements. Privacy, retention, security classification, integration ownership and technical constraints are included or surfaced as caveats when explicitly relevant, but must not be invented.

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

When the project's selected AI-use disclosure destination includes handoff, that same preview includes an owner-only **AI disclosure** section. It summarizes whether the package includes known activity entries or no known activity recorded for included scope, lists the manifest-equivalent scope, assistance/declaration type, Assistance Request Type when known, response/status and explicit Provenance references, and presents the fixed trace-limit caveat. It does not include Response Source Links or their target Revision information. The project owner may open the scoped trace or navigate to change the disclosure setting, but cannot manually edit the derived disclosure entries. If handoff disclosure is excluded, the owner sees a compact read-only statement that the package will not include AI disclosure and identifies the selected destination. The preview changes neither meaningful-definition checks nor readiness, does not itself create Handoff History and is regenerated from the current scope and settings.

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
