# Session Active Work

**Status:** Active Working Notes

**Purpose:** Capture questions and draft answers during an active specification session before crystallizing stable conclusions into project knowledge.

## Current AI and Conversation Foundation

- `Conversation` is the canonical term for a project-scoped, multi-party working-memory exchange. It is distinct from a Collaboration Request and Assistance Request Type, requires recipients, carries source/scope and topic, and may include accepted human collaborators, pending invitees and Personal AI Assistants available to a participating human user.
- Conversations live in a dedicated topic-led workspace, presented beside the document in a reflowing right-side pane when width allows. They retain source links and support explicit owner-led outcome capture, but never alter Product Knowledge directly. Conversations and scoped Collaboration Requests are separate optional paths: a recipient may join an evolving discussion directly, while a request seeks a bounded asynchronous response. Creating or linking a request from a Conversation is a lower-priority MVP stretch capability.
- A standalone Collaboration Request has exactly one selected available contributor. Capability and availability may guide selection but do not create a capability-only queue, broadcast or group request; multiple perspectives and evolving shared context belong in a Conversation.
- A standalone Collaboration Request has a required Request Brief and the explicit lifecycle Draft, Submitted, In Progress, Responded, Declined and Cancelled. A recipient may prepare one bounded response privately while In Progress, then submit or decline; the requestor may cancel an active request. Reopen is a requestor action after Responded, Declined or Cancelled, returning the request to private Draft; recipient, type, scope and recorded context stay read-only while only the brief may be revised before resubmission.
- An AI-targeted Collaboration Request may select only the requestor's own enabled, usable Personal AI Assistant. `Submit and ask` and `Resume assistant` are explicit owner invocations; the request becomes In Progress only when the assistant starts work. AI-specific On Hold records technical interruption or lost AI eligibility and never resumes automatically. An AI assistant does not Decline, cancel or resume by itself, while provider/model, credential, credit and detailed failure information remain private to its owner.
- Paired MeatLoop scenarios validate the complete standalone Collaboration Request journey. The human-review path exercises Submitted, In Progress, one bounded response, response handling and a separate Revision, with Declined as an alternate outcome. The personal-AI path exercises explicit invocation, In Progress, On Hold after technical interruption and explicit owner-only resume. Both preserve one recipient, private drafts, distinct request/response statuses and non-canonical responses.
- The MVP adopts Bring Your Own AI: each human user supplies and enables their own provider/model credentials. AI support, provider access and usage are personal to that human and are not made available to other collaborators or the Project simply because one user enables them.
- A human user may configure multiple named Personal AI Assistants and mark one default. Contributions use the assistant's name and a compact assistant cue; ownership is available through its profile, provider/model details stay in the owner's settings, and every visible reply requires explicit invocation by its owner.
- `Invite contributor` is reserved for Project-level human collaboration. A Conversation uses **Add recipient**, grouping existing accepted or pending people and the current user's preconfigured **My assistants**. It does not create Project invitations or configure assistants; adding an assistant does not invoke it.
- The initiator controls human recipients; other human participants may request an addition for approval. Participants control only their own assistants, except that removing a human recipient also removes their assistants. The Project owner has a human-recipient safety override. Every change is retained as a concise history event and never erases prior contributions.
- Accepted human recipients may leave; assistants cannot leave themselves. The initiator closes an Open Conversation rather than leaving it, while the Project owner has a safety override. Closure makes the Conversation read-only, retains it without reopening, deletion or inactivity-based automation, and never changes Product Knowledge. The workspace defaults to Active Conversations; Closed Conversations are retained in a separate collapsed group or filter.
- Only a Project owner or accepted human collaborator may initiate a Conversation, always from a Project context. The workspace defaults to Project scope; whole Specification, Section, Product Artifact and selected-content actions define narrower source scope. Pending invitees and assistants do not initiate Conversations.
- Any human with Conversation access may copy the entire Conversation, individual messages or selected text. Only the Project owner may create or update canonical knowledge from an entire Conversation or selected messages; the owner reviews and saves through ordinary flows, while text-range outcome capture and formal contributor requests remain deferred.
- Conversation Outcome Links provide internal bidirectional navigation and provenance between captured outcomes and their source Conversations. Archived targets remain linked; genuinely unavailable targets are Broken; only the link creator or Project owner may remove a link; and these links never enter a handoff.
- A new Product Artifact is placed at the end of the deterministic canonical section for its type. The MVP offers no placement picker: if that section is not selected, its creator must explicitly add the section or cancel. In Conversation capture, cancel returns to destination choice with selected messages intact and no outline change; an explicitly added section remains if its later unsaved artifact draft is discarded. `Move up` and `Move down` reorder only within a section and create a document-composition Revision without changing artifact identity, provenance, relationships or Conversation Outcome Links.
- A complete owner-facing outcome-capture journey has been validated: selected-message source, destination choice, missing-section cancellation and return, explicit section addition, draft review and save, bidirectional Outcome Link, and later section-local reorder preserve their separate boundaries. The MVP relies entirely on the Project owner's explicit judgment of whether and when to capture an outcome: it provides no ready status, prompt, recommendation or participant signal, and never infers readiness from activity, inactivity, apparent agreement, assistant analysis or closure. Participants may raise a possible outcome in ordinary messages without creating a special state or obligation. Comments and private notes remain separate, deferred concepts.

See `2026-07-24-project-conversations-workspace.md`, `2026-07-24-bring-your-own-ai.md`, `2026-07-24-personal-ai-assistants.md`, `2026-07-24-conversation-recipients-and-assistant-terminology.md`, `2026-07-24-conversation-recipient-management.md`, `2026-07-24-conversation-completion.md`, `2026-07-24-conversation-closure-and-list-organization.md`, `2026-07-24-conversation-initiation-matrix.md`, `2026-07-24-conversation-outcome-capture.md`, `2026-07-24-conversation-outcome-links.md`, `2026-07-25-artifact-placement-and-section-reordering.md`, `2026-07-25-conversation-outcome-capture-journey-validation.md`, `2026-07-28-conversation-outcome-capture-readiness.md`, `2026-07-28-conversation-and-collaboration-request-priorities.md`, `2026-07-28-collaboration-request-single-recipient.md`, `2026-07-28-collaboration-request-lifecycle.md`, `2026-07-28-ai-collaboration-request-interruption.md` and `2026-07-28-collaboration-request-journey-validation.md`.

Use the `Answer` blocks to reply directly in this file. Answers can be rough, partial or exploratory.

When the answers are ready, ask Codex to update the project documents based on this file.

---

# 1. MVP User Workflow

This section explores the exact end-to-end MVP flow from project creation to implementation handoff export.

## Questions

### 1.1

What is the exact end-to-end MVP flow from "create project" to "export implementation handoff package"?

**Answer:**

The full end-to-end flow remains to be detailed. Its initial document-authoring slice has been crystallized in `2026-07-21-document-editing-and-impact-feedback-flow.md`.

The document should also offer optional, user-invoked deterministic `What next?` guidance. It does not force workflow order or create tasks. The first-pass priority order is: the user's Edit-in-progress Drafts, explicit Open Question blockers, active Stale or coverage/readiness impact outcomes, and empty required selected sections. See `2026-07-21-deterministic-next-step-guidance.md`.

The priority order was validated against a competing-state scenario. With an Edit-in-progress Goal draft, an Open Question blocking a Feature, two Stale Requirements and an empty required UX/UI section, the top three items are: continue the Goal draft, resolve the Open Question blocker and review the Stale Requirements. The required-but-empty section remains in the full guidance list. See `2026-07-21-deterministic-next-step-guidance-priority-validation.md`.


### 1.2

What does the user see immediately after creating a project?

**Answer:**
An empty document showing the selected specification outline: the user sees the titles of selected sections and subsections, but no substantive content or Product Artifacts exist yet.

### 1.3

Does the user work section-by-section, artifact-by-artifact, or directly in a single continuous document?

**Answer:**

From the user experience standpoint, the user sees one continuous document and may act on a specific section or a specific Product Artifact without being forced into a particular order.

Specification Sections are document/container structures, not Product Artifacts. They may contain section-level prose and multiple Product Artifacts. Blank section space invokes section actions; selecting an existing artifact invokes artifact actions.

New artifacts are inserted and edited inline, then render primarily as normal prose with subtle accessible cues until selected again. Edit-in-progress drafts are persistent but separate from canonical Product Knowledge; only `Done editing` creates a Revision and evaluates impact.

### 1.4

Where does AI assistance appear: always available, requested explicitly, or triggered by readiness gaps?

**Answer:**

I think that the AI assistance should always be available but at different levels:

- artifact level
- section level
- entire document level
- the application level

Depending on the level, the type of AI assistance available will vary.
One important thing to remember here: all types of assistance must correspond to a request a human can help with. The opposite may not be true; we can imagine an assistance only a human (at least at first or for some time) has the capability(ies) to provide.

"Identify inconsistencies", "Identify gaps", "Identify contradictions", "Reword", "Simplify wording", "Tell me the dependencies" are examples of assistance types.

### 1.5

What is the minimum useful version of collaboration for the MVP?

**Answer:**

MVP collaboration should be asynchronous and transactional, not real-time.

A human collaboration will mostly consist of inviting another human to collaborate on a specific document and, possibly, on a specific topic such as an artifact or section.

The MVP should allow:

- a connected user to invite other users to collaborate at project creation time or later;
- a collaboration request to be scoped to the whole project, a specific section, a specific artifact, selected content or a specific set of sections/artifacts;
- an invited user without an account to complete onboarding before accepting or rejecting the invitation;
- an invited user with an active account to accept or reject the invitation;
- an invited user who accepted an invitation to submit a contribution response;
- users to sign up, sign in, sign out and edit their profile, including declaring the capabilities they believe they have;
- contributors to see pending collaboration requests, open one, provide input and submit it;
- submitted contribution responses to be stored with a status indicating they have not yet been acted upon by the requestor;
- the requestor to see updates in a collaboration request list and possibly receive a notification if online.

The MVP should not include real-time co-editing, shared cursors, live presence or simultaneous editing conflict resolution.

Additional clarification:

Contributor availability differs between human and AI collaborators.

Human collaborators are invitation-gated. A human collaborator becomes available after being invited, completing onboarding if needed and accepting the invitation.

AI assistance is available to a human user only through that user's enabled, usable Bring Your Own AI credentials. It does not need a human-collaborator invitation, but one user's enablement does not make AI available to another collaborator.

Both human and AI collaborators should still participate through scoped assistance requests, and canonical product knowledge should change only after the project owner or authorized requestor accepts or acts on the resulting contribution.

---

# 2. First Specification Document Template

This section explores the first implementation-ready specification template.

Related open question: `UX-002`

## Questions

### 2.1

Are all candidate sections truly required for the first template?

**Answer:**

The objective with this project and at first, is to allow users to create specifications which will truly allow them to create small to medium size applications/products.
It's a bit hard to decide and define what are a small and/or medium size application/product.
Having said that, the first template could perhaps represent what would be used in a modern SDLC with a focus around user-(human or ai)centered design and agile methodologies.
We could also consider that the applications one will want to produce specs for initially are web applications only.
We could also think about the possibility of having a few other (simpler or more complex or even very different) templates.
In all cases, it is important to remember that a user, once he/she/it has selected a template, will be able to decide which sections he/she/it wants for his/her/its project; by default, all the sections of the selected template will be "selected" but the user will be able to change such a selection.
We might consider that certain sections of the template are mandatory and cannot be unselected.
We also need to remember that even if a section is unselected at the time of project creation, the user will be able to re-select it later on and at any time and vice-et-versa.

Decision after discussion:

The MVP should start with one initial Specification Document Template: `Implementation-Ready Web App Specification`.

This template should be backed by a reusable Section Catalog and should support multiple presets rather than separate small, medium and complex templates.

Initial presets:

- Simple Web Presence
- Standard Web App
- Complex Product App

Each preset should select and classify sections as:

- Required
- Recommended
- Optional

Small, medium and complex project choices should be presets inside the initial web app template, not separate templates.

Later, the product may support additional templates when the structure or purpose of the specification is meaningfully different, such as API services, mobile apps, design systems, AI features or migration projects.

Additional decision after discussion:

The first Section Catalog and Project Preset classification are accepted as a first pass.

The section previously described as `User Stories or Use Cases` should be named `User Stories and Use Cases`.

This will be one section containing multiple items. Each item must have a type:

- User Story
- Use Case

User Stories and Use Cases are distinct artifact types with different structures, but they belong in one section because both describe user-facing behavior and interaction intent.

Initial Project Preset classification:

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

Core Feature vs Functional Requirement:

- A Core Feature is a user-visible capability or product area. It answers what major thing the product lets users do.
- A Functional Requirement is a specific behavioral rule or obligation the system must satisfy. It answers what exactly the system must do.

### 2.2

Which sections are mandatory vs optional?

**Answer:**
This question, we'll have to ask it ourselves before "publishing" a template. Our choice should be driven by: make all the sections absolutely required to have a workable specification, mandatory.
Imagine a template containing "user goals" and "user pain-points": we could decide/imagine that the user goals section is mandatory but the user pain-points section is optional.

### 2.3

Which sections are mostly for humans, mostly for AI implementation environments, or both?

**Answer:**


### 2.4

Should the template support nested sections?

**Answer:**
I believe it should unless we know that we will always be able to flatten the sections of a template and/but ensure that there is a mechanism to connect them.

### 2.5

Should sections correspond directly to Product Artifacts, or can a section contain multiple artifact types?

**Answer:**
I believe a section can be a composite artifact and therefore contain nonetheless other artifacts but also other artifacts of different types.

---

# 3. Implementation Handoff Package

This section explores the exported package consumed by humans, AI-assisted developers or AI implementation environments.

Related open question: `UX-003`

## Questions

### 3.1

What should the exported zip contain?

**Answer:**

The exported zip should contain a root folder (maybe called "docs" or "specifications"?) and a folder for each section of the specification. Additionally, each (filled out) section should contain one or more file corresponding to the content of the artifact(s).

Decision after discussion:

The intended target Implementation Handoff Package should be a complete structured export containing human-readable specification files, artifact-level files, metadata and an implementation brief.

Target package structure:

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

MVP implementation may start with a smaller export and treat the `artifacts/` and expanded `metadata/` folders as stretch items.

MVP minimum package:

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

Rules:

- `SPECIFICATION.md` is a complete combined version of the specification.
- Each included section also has its own Markdown file.
- Stable artifact IDs should be embedded in `SPECIFICATION.md` and in section Markdown files.
- `IMPLEMENTATION_BRIEF.md` should be generated by default.
- `manifest.json` should be generated by default and treated as the minimal required metadata file.
- The expanded `metadata/` folder is a stretch item.
- The `artifacts/` folder is a stretch item.
- The package should include unresolved open questions and known risks.
- Open questions should not block export by default, but the package should clearly indicate when implementation may be blocked or risky because unresolved questions remain.

Follow-up insight:

Implementation-ready does not only mean product-complete. It also means context-ready for the intended implementation consumer.

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

### 3.2

Should each section become one Markdown file?

**Answer:**

Yes.

Each included section should become one Markdown file inside the `specification/` folder.

The package should also include `specification/SPECIFICATION.md`, a complete combined version of the full specification.

### 3.3

Should there be a `manifest.json` describing the spec structure?

**Answer:**

Yes.

`manifest.json` should be generated by default and treated as the minimal required metadata file for the MVP export.

It should describe the project, template, preset, included sections, artifact IDs, export timestamp and export format version.

### 3.4

Should artifacts have stable IDs in the export?

**Answer:**

Yes.

Stable artifact IDs should be included in the export.

They should be embedded in `SPECIFICATION.md`, in section Markdown files and in `manifest.json`.

### 3.5

Should the export include unresolved open questions and known risks?

**Answer:**

Yes.

The export should include unresolved open questions and known risks.

Open questions should not block export by default, but the package should clearly indicate when unresolved questions may block or increase the risk of implementation.


### 3.6

Should there be a top-level `IMPLEMENTATION_BRIEF.md` optimized for tools like Codex or Claude Code?

**Answer:**

Yes.

`IMPLEMENTATION_BRIEF.md` should be generated by default and optimized for human developers, AI-assisted developers and AI implementation environments.

It should include a suggested implementation sequence to help human and AI consumers choose a practical implementation order.

Readiness-aware handoff decision:

- `Validate Readiness` is selected by default when the user requests Prepare Handoff, but may be disabled for a direct handoff.
- The deterministic readiness check applies only to the selected scope and its direct external dependencies.
- The first scope defaults to the entire Specification. The user may modify it through the outline; the last selection is remembered per user, Project/Specification and Handoff Profile.
- Section selection includes active contained content by default; individual artifacts may be deselected.
- `Include readiness report in handoff` is selected by default when validation is enabled, and unavailable when validation is disabled. This preference uses the same key.
- When included, `READINESS_REPORT.md` is a standalone handoff file, not part of the implementation brief.
- Readiness outcomes are deterministic: Ready, Ready with Caveats or Not Ready. A Not Ready outcome does not prevent preparation of a meaningful caveated handoff.

Validated readiness scenarios:

- A partial handoff for a Feature and its Requirements, with a non-blocking direct external dependency and one Stale Acceptance Criterion, is Ready with Caveats. Intentionally excluded required sections do not count against the selected scope.
- A direct external dependency explicitly blocked by an unresolved Open Question makes the selected scope Not Ready, while a meaningful caveated handoff is still prepared.
- An included required `Goals and Success Criteria` section with no section content and no active contained artifacts makes the selected scope Not Ready even when other selected content is complete.
- Multiple simultaneous explicit blockers make the scope Not Ready without creating a further outcome. `READINESS_REPORT.md` groups selected-scope artifacts and direct external dependencies by their originating unresolved Open Question, offers one follow-up action per blocker, and orders selected-scope blockers before external blockers; selected-outline order and stable artifact ID break ties. It must not infer relative blocker importance without explicit Project State.
- Handoff scope eligibility is separate from readiness and applies even when readiness validation is disabled. The Handoff Profile owns the eligibility rules; the Specification Document Template provides the sections and containment structure. For the MVP `Implementation Handoff` profile, the entire Specification or at least one selected section with non-whitespace section content or an active contained Product Artifact is an eligible root scope. Individual artifacts can narrow a selected section, but cannot be the sole root; an ineligible selection explains the missing structural context and disables Prepare Handoff until corrected. Direct external dependencies remain external unless explicitly selected.
- Scope eligibility does not establish meaningful product definition. For the MVP `Implementation Handoff` profile, a selected `Core Features` scope that contains only a high-level Feature statement, with no included behavioral detail or validation coverage, has insufficient product definition. With validation enabled, it is Not Ready and no package is prepared. Disabling validation does not bypass this no-package boundary; the workbench explains the concrete insufficiency and only offers ordinary navigation or contextual actions.
- The first meaningful-definition rule for a feature-centered scope requires an active Feature with non-whitespace title and content, at least one explicitly related active Functional Requirement, and one or more active Acceptance Criteria such that every included Functional Requirement is explicitly validated by at least one criterion. User Stories and Use Cases may support but do not replace the Functional Requirement. Goals, User Needs, Non-Goals, UX/UI guidance, technical constraints and external integrations are not universal minimum elements; an explicit relationship or profile rule may make them caveats. The scope selector displays Feature definition, related Functional Requirement and Acceptance coverage as deterministic checks; no package is prepared until all are present.
- The first meaningful-definition rule for a UX/UI-centered scope requires active Screen/View artifact(s), an active User Flow explicitly including those views, active UI Requirement(s) related to the included view or flow, and active underlying Functional Requirement(s) with Acceptance Criteria validating every included requirement. The scope selector displays interface boundary, user flow, UI behavior, and system behavior with acceptance coverage as deterministic checks; no package is prepared until all four elements are present. This is specific to UX/UI-centered implementation handoffs, not a universal requirement for other Handoff Profiles.
- The first meaningful-definition rule for an integration-centered scope requires active `External Integrations` section content identifying the external system and purpose, known integration behavior with trigger, direction and expected outcome, related active Functional Requirement(s), and Acceptance Criteria validating every included requirement. The scope selector displays those four elements as deterministic checks. Known external contracts, technical constraints, ownership and dependency details are caveats rather than universal minimum elements; unknown failure paths or technical protocol details must not be invented. An explicit blocking external dependency makes readiness Not Ready without making an otherwise meaningful scope ineligible for a caveated package.
- The first meaningful-definition rule for a data-model-centered scope requires active `Data or Domain Model` section content identifying relevant domain entities and explicit relationships, at least one explicit domain rule or invariant governing the selected elements, related active Functional Requirement(s), and Acceptance Criteria validating every included requirement. The scope selector displays domain structure, domain rule or invariant, related Functional Requirements, and acceptance coverage as deterministic checks. Implementation-level schema details, storage technology, migrations, indexes, database ownership and physical data types are not universal minimum elements. Privacy, retention, security classification, integration ownership and technical constraints are caveats when explicitly relevant and must not be invented.
- For a mixed-scope handoff, the user explicitly designates selected knowledge as Definition Scope or Supporting Context. Every Definition Scope activates its applicable meaningful-product-definition rule, and all active rules compose conjunctively. Supporting Context explains, constrains or caveats Definition Scope without activating another rule. Shared Functional Requirements or Acceptance Criteria satisfy more than one Definition Scope only through explicit relationships. The workbench never infers the designation, silently promotes Supporting Context or auto-adds missing knowledge. The package distinguishes Definition Scope, Supporting Context and Direct External Dependencies.
- A partial package makes that boundary explicit in every generated representation. `README.md` gives a concise summary; `IMPLEMENTATION_BRIEF.md` explains Definition Scope, intentionally outside scope and caveats; and `manifest.json` is authoritative for Definition Scope, Supporting Context, Direct External Dependencies and directly related intentionally out-of-package knowledge. `specification/SPECIFICATION.md` and section Markdown files contain only selected scope, labeled by Handoff Package Role, and do not claim to be the full Project Specification. The package names only directly related omitted knowledge needed to explain the boundary, not the whole Project Specification.
- A concrete MealLoop `Pause subscription` mixed handoff validates the composition: Feature and UX/UI Definition Scopes share explicitly related Functional Requirements and Acceptance Criteria; a Subscription data-model excerpt is Supporting Context; cancellation behavior is directly related but intentionally outside the package; and an Open Question blocking a Stripe direct external dependency makes readiness Not Ready while the meaningful package is Prepared with Caveats.
- The first-pass scope-selector interaction uses a panel over the document outline. The first handoff defaults to the entire Specification as Definition Scope; customization provides explicit Handoff Package Role actions to add Definition Scope or Supporting Context, mark directly related knowledge as outside the handoff, or remove it. Direct External Dependencies are derived and read-only rather than a user-assigned package role. Deterministic checks appear per Definition Scope; shared evidence is labeled; no missing knowledge is auto-added; and a package-boundary preview appears before preparation. Exact controls and visual design remain prototype work.
- A realistic MealLoop `Pause subscription` journey validates the path from that default to a customized mixed partial handoff. The user explicitly creates separate Feature and UX/UI Definition Scopes, adds a Subscription data-model excerpt as Supporting Context, marks cancellation as directly related out of package, and sees Stripe as a derived external dependency. The shared Functional Requirements and Acceptance Criteria serve both Definition Scopes only through explicit relationships. Both meaningful-definition rule sets pass, while the Open Question blocking Stripe makes readiness Not Ready; Prepare Handoff still produces Prepared with Caveats. Separately displayed, explicitly created Definition Scopes make the per-scope checks understandable without inferring scope membership.
- A contrasting `Pause subscription` Feature journey validates recovery from insufficient product definition. An eligible Core Features section-rooted selection containing only the Feature fails the related Functional Requirement and acceptance-coverage checks; the panel preserves the partial scope while ordinary document actions let the user include existing knowledge or create and explicitly relate the missing Functional Requirement and Acceptance Criteria. Each saved Revision deterministically re-evaluates the checks. The panel neither auto-creates Product Knowledge or relationships nor turns missing definition into tasks; disabling readiness validation does not bypass the unavailable Prepare Handoff action.
- Handoff Package Role means an item's package-specific participation, not a user, contributor, permission or organizational role. Adding Stripe integration knowledge as a Definition Scope asks the consumer to implement it and activates the integration rule; adding it as Supporting Context for the `Pause subscription` Feature or UX/UI scope does not. Stripe itself remains a derived Direct External Dependency in the latter case and cannot be relabeled as included knowledge.
- A minimal Handoff History is sufficient for prepared-package visibility. Each successful preparation records an immutable manifest-derived snapshot of preparation time, Handoff Profile, package boundary, whether readiness validation ran, its outcome when it did, package result and caveat or blocker summary. A direct handoff keeps the package result `Prepared` and explicitly records `Readiness validation not run`, not a blank or inferred `Ready` result; History and preparation confirmation render the two fields as `Prepared - readiness validation not run` without creating a third package-result value. It complements explicit Product Knowledge Revisions, but does not record every scope-selection action or rely on an ambiguous major-action category. The MVP does not provide a package-diff UI or require archive retention; users can inspect current eligibility, boundary and caveats directly when preparing the next package.
- A prepared handoff can evolve without rewriting its history. When Alex changes Stripe integration knowledge from Supporting Context to a new Integration Definition Scope, the current panel activates and evaluates the integration checks while the earlier Handoff History event remains unchanged. Missing integration behavior or evidence prevents the expanded handoff from being prepared; once the new rule passes, the current readiness and boundary apply to a new `Prepared` or `Prepared with Caveats` package and create a separate event. The workbench shows each event's own summary but does not provide a package diff.
- When Alex deliberately disables readiness validation for a direct handoff, the workbench does not run a hidden reduced readiness assessment, calculate a readiness outcome or create `READINESS_REPORT.md`. The package-boundary preview explicitly says that validation was not run. Included Risks, Assumptions, Open Questions and Direct External Dependencies remain visible as ordinary package knowledge, not as a replacement caveat summary. Eligibility and meaningful-definition checks still prevent an irresponsible package.
- The prepared package manifest records the same readiness distinction as Handoff History. It carries the package result, `evaluated` readiness state with an outcome or `not_run` state with no outcome, and whether `READINESS_REPORT.md` is included. A machine consumer therefore does not infer a direct handoff from a blank field or mistake it for `Ready`.
- The package README carries the matching human-readable readiness statement: the evaluated outcome when validation ran, or `Readiness validation was not run` for a direct handoff. The latter discloses that validation was omitted; it is neither a readiness result nor a replacement report.
- The package README is an intentional entry point, not a second implementation brief. After its title and compact preparation metadata, it presents Package boundary, Readiness, conditional Known AI activity and Start here in that order. The AI section appears only when handoff disclosure is enabled; Start here directs consumers to the implementation brief, specification files and manifest.
- A validated `Not Ready` package with `READINESS_REPORT.md` keeps README dimensions explicit: preparation metadata says `Package result: Prepared with Caveats`, while Readiness says `Readiness outcome: Not Ready`. It says the selected scope is meaningful enough to hand off but blocking conditions remain and links to the report; it does not repeat individual blockers, caveats or follow-up actions.
- Evaluated README wording is parallel across outcomes. `Ready` uses `Package result: Prepared`, `Readiness outcome: Ready` and states that no blockers or implementation caveats were identified for selected scope. `Ready with Caveats` uses `Package result: Prepared with Caveats`, `Readiness outcome: Ready with Caveats` and states that no blocking conditions were identified but known caveats require implementation attention. A report link appears only when `READINESS_REPORT.md` is included; neither state lists individual caveats in the README.
- A compact four-state MeatLoop comparison validates README scanning. `Ready` is `Prepared` with no blockers or caveats; `Ready with Caveats` and `Not Ready` are `Prepared with Caveats` with non-blocking caveats or blocking conditions respectively; and a direct handoff is `Prepared` with `Readiness validation was not run`. The layout remains fixed, detailed causes stay out of the README and no report link appears when a report is absent.
- A direct MeatLoop handoff may enable handoff AI disclosure while having no known AI activity in its included scope. Its README independently says `Readiness validation was not run` and, in the conditional Known AI activity section, `No known AI activity is recorded for the included scope` with the standard caveat against authorship or non-use claims. The manifest records `not_run` readiness, no report and included zero-entry AI disclosure; Handoff History retains the corresponding compact summaries.
- The counterpart direct MeatLoop handoff with known included-scope AI activity keeps the same readiness statement. Its Known AI activity section says that activity is recorded, gives the included entry count and links to `manifest.json`; it does not name requests, contributors, prompts, context or responses. The manifest holds the scoped entry details, and Handoff History retains only the count.
- An evaluated MeatLoop batch confirms the same separation. A Stripe-blocked `Not Ready` handoff and a non-blocking-contract `Ready with Caveats` handoff both use `Prepared with Caveats`, but their adjacent Readiness outcome and explanation distinguish them; both disclose two known activity entries by count and manifest link. A `Ready` handoff is `Prepared` and discloses no known activity with the standard limitation. Neither disclosure changes readiness or package result.
- For every evaluated MeatLoop outcome, Alex may include or omit `READINESS_REPORT.md`. The readiness outcome and package result remain unchanged; the README links to the report only when included and otherwise uses the same concise outcome wording. The manifest and compact Handoff History event record report inclusion explicitly, including when a `Not Ready` report was omitted.
- The README/readiness/report/AI-disclosure representation thread is complete. A closure matrix covers `Ready`, `Ready with Caveats`, `Not Ready` and validation-not-run states; included and omitted readiness reports; and handoff disclosure disabled, enabled with no known activity and enabled with known activity. It confirms stable README ordering, explicit manifest fields and compact immutable Handoff History summaries without inferred readiness, AI non-use or trace detail.
- Resources and Resource References generalize file attachment and link reference beyond Screen/View. A Resource is a managed uploaded file or external URL; a Resource Reference attaches it directly to a Specification, Section or Product Artifact with a user-authored purpose and description. It is not a Product Artifact, Context Reference or Artifact Relationship by default. Screen/View visual references are the first specialized use and may identify screenshots, mockups, wireframes, prototypes or design-file references, with optional represented-state and viewport context. Included managed Resources are copied into a handoff package; external Resources remain labeled links and become caveats when unavailable. Resource References never automatically expand handoff scope or enter every AI request.
- Resource References have independent target-level meaning when they share a Resource. Once referenced, a Resource source is effectively immutable: replacing a managed file or changing an external URL creates a new Resource and explicitly updates only chosen references. Resource Reference changes create ordinary Revisions on their attached targets; unchanged external URLs whose remote content changes produce availability or version caveats, not inferred Revisions. Partial handoffs exclude Specification-level references unless added as Supporting Context, and copy a shared included managed source once while preserving every included reference's metadata.
- The first document-first Resource Reference interaction is validated. A user attaches a Resource from the contextual actions at its Specification, Section or Product Artifact target, selects or supplies the source, then enters its target-specific purpose and Description before saving; a Screen / View may add represented-state and viewport context. The reference renders inline with its source type and a compact available preview. Replacing it first selects the new source, then offers an explicit choice to reuse the current reference details or start fresh. Reuse copies the details into an editable draft; starting fresh requires re-entry. Nothing changes until the user saves, and an unavailable external preview remains explainable feedback rather than an editing blocker.
- Resource Reference controls are a short contextual wizard, not persistent document buttons or nested hover menus. The existing generic contextual control opens first-level actions: `Edit` and `Add reference` for an artifact, or `Edit section` and `Add reference` for a section. `Add reference` replaces that control set with source choices and a back action to the original target-aware controls; choosing a source replaces the source choices with the reference-details draft.
- Contextual document interactions should default to local, non-modal progressive disclosure. Each step replaces or expands nearby content while preserving the user's document position and offering ordinary back navigation; this avoids dialog-driven interruption, particularly on mobile. A modal or dialog requires a specific later justification rather than being the default interaction container.
- Resource Reference source selection is provisional and does not begin a preserved draft by itself. A private local reference draft starts when the user changes reference details or explicitly chooses `Reuse details` during replacement. It includes the selected source and current details, creates no Revision and persists through ordinary navigation until saved or explicitly discarded; returning to the target offers `Continue reference draft` and `Discard draft`.
- A preserved Resource Reference draft has no permanent document badge. Reopening the target's contextual control shows `Edit`, `Continue reference draft` and `Discard draft`; continuation temporarily replaces `Add reference` to prevent a competing flow. Continuing resumes the last meaningful wizard step, while discarding restores ordinary actions.
- The MVP permits at most one active unsaved Resource Reference draft per attachment target. The user saves or discards it before adding another reference at that target; drafts at different targets remain independent.
- The MVP Resource Reference Purpose control is a compact prescribed list: `Visual reference`, `Prototype`, `Source material`, `Contract`, `Research`, `Example` and `Other`. `Other` requires a short custom purpose; Screen / View starts on the editable `Visual reference` choice. Administration roles and metadata-list configuration are deferred rather than implied by this fixed MVP list.
- A Resource Reference has one canonical Description field, including for visual references. Downstream package or UI representations may render it as a caption, but Caption is not a second field and does not create separate user-authored meaning.
- Known in-workbench AI assistance and voluntary external-AI declarations are recorded in a project-owner-inspectable AI Activity Trace. This trace records the request, scope, response, Context Explanation, status and any explicit Provenance or Revision link; it does not claim exact final-text authorship after human editing or comprehensive external-AI detection. AI-use disclosure is off by default. When a project owner enables it, one destination is selected: Workbench only (the default enabled destination), Workbench and handoff, or Handoff only. The selected destination controls automatic disclosure, not the project owner's trace access.
- When workbench disclosure is enabled, collaborators see a single project-level `Known AI activity` entry near project information or the document outline. It opens scoped trace information without persistent artifact badges. When workbench disclosure is off or Handoff only, collaborators do not see that automatic entry; the project owner can inspect the trace directly for every setting. A handoff includes disclosure only when its destination includes handoff, uniformly for all recipients including the owner.
- A handoff disclosure is package-level and caveated. When its destination includes handoff, `README.md` supplies a concise human-readable statement and `manifest.json` is authoritative. It includes only known trace entries whose declared scope is in the package, identifies scope, assistance/declaration type, Assistance Request Type when known, response/status and explicit Provenance or Revision link, and excludes raw prompts, assembled context and raw responses by default. It states the limits of known activity, non-authorship and non-detection; when no known activity is recorded for included scope, it says so with the same caveat.
- The existing package-boundary preview includes an owner-only `AI disclosure` section when disclosure is destined for handoff. It previews the derived summary, entries and caveat; lets the owner open the scoped trace or change the project setting; and cannot be manually edited. When handoff disclosure is excluded, it states that outcome and the selected destination. This preview does not affect definition checks or readiness and creates no Handoff History event.
- Each successful Handoff History event retains only a compact immutable AI-disclosure summary: selected destination, whether disclosure was included, disclosed-entry count, whether no known activity was recorded for included scope and the standard trace-limit caveat. It stores neither entry-level trace detail, raw prompts, raw responses nor a live link to current trace state; the manifest snapshot remains authoritative for what the package disclosed.
- A `Visual reference` on a Screen / View may optionally add local Visual Context: free-text represented state and an optional Viewport. Viewport uses `Mobile portrait`, `Mobile landscape`, `Tablet portrait`, `Tablet landscape`, `Desktop` or `Other`; an unselected value means unspecified and `Other` requires a free-text device, dimensions or breakpoint. This metadata helps interpret a visual without altering canonical Screen / View behavior or creating a device model.
- An included Screen / View visual reference carries Visual Context in both package representations with distinct roles: `manifest.json` is authoritative metadata, while the human-readable Screen / View export gives a concise, reference-local mention only when represented state and/or viewport is supplied. The human-readable mention identifies its reference, omits unspecified fields and remains interpretive rather than a canonical Screen / View state or behavior declaration.
- In a mixed MeatLoop handoff, one shared checkout-prototype Resource appears once in the manifest—by URL for an external source or package-relative path for a managed file, never by a consumer-machine-specific `file://` URI—while its Order review and Order confirmation references retain separate Descriptions and Visual Context. Reuse is structurally visible but is not an automatic ambiguity or error: free-text represented state needs human judgment or an explicitly requested AI Review or Find Inconsistencies request. Any resulting Finding is caveated and non-canonical; it does not automatically alter metadata, mark artifacts Stale or block a handoff.

See `2026-07-22-readiness-aware-handoff-outcome-validation.md`.
See `2026-07-22-multiple-readiness-blockers-validation.md`.
See `2026-07-22-handoff-scope-eligibility.md`.
See `2026-07-22-insufficient-product-definition-boundary.md`.
See `2026-07-22-feature-centered-handoff-definition.md`.
See `2026-07-22-ux-ui-centered-handoff-definition.md`.
See `2026-07-22-integration-centered-handoff-definition.md`.
See `2026-07-22-data-model-centered-handoff-definition.md`.
See `2026-07-22-mixed-scope-handoff-composition.md`.
See `2026-07-22-partial-handoff-package-boundary.md`.
See `2026-07-22-mixed-partial-handoff-validation.md`.
See `2026-07-22-handoff-scope-selector-interaction.md`.
See `2026-07-22-handoff-scope-selector-journey-validation.md`.
See `2026-07-22-insufficient-handoff-scope-recovery-validation.md`.
See `2026-07-22-integration-handoff-package-role-validation.md`.
See `2026-07-22-handoff-history-without-package-diffs.md`.
See `2026-07-22-post-preparation-handoff-evolution.md`.
See `2026-07-22-resource-references-and-screen-view-visuals.md`.
See `2026-07-22-resource-reference-lifecycle-and-reuse-validation.md`.
See `2026-07-22-resource-reference-document-interaction-validation.md`.
See `2026-07-22-resource-reference-contextual-wizard-validation.md`.
See `2026-07-22-contextual-document-disclosure-validation.md`.
See `2026-07-22-resource-reference-draft-preservation-validation.md`.
See `2026-07-22-resource-reference-draft-resumption-validation.md`.
See `2026-07-22-single-resource-reference-draft-per-target-validation.md`.
See `2026-07-22-resource-reference-purpose-catalog-validation.md`.
See `2026-07-22-resource-reference-description-field-validation.md`.
See `2026-07-22-ai-use-disclosure-governance-validation.md`.
See `2026-07-22-ai-disclosure-workbench-presentation-validation.md`.
See `2026-07-22-ai-disclosure-handoff-representation-validation.md`.
See `2026-07-22-ai-disclosure-preparation-preview-validation.md`.
See `2026-07-22-ai-disclosure-handoff-history-validation.md`.
See `2026-07-22-screen-view-visual-context-validation.md`.
See `2026-07-23-screen-view-visual-context-handoff-representation-validation.md`.
See `2026-07-23-shared-visual-resource-handoff-validation.md`.
See `2026-07-23-direct-handoff-without-readiness-validation.md`.
See `2026-07-23-handoff-history-readiness-validation-state.md`.
See `2026-07-23-direct-handoff-result-presentation.md`.
See `2026-07-23-manifest-readiness-validation-state.md`.
See `2026-07-23-package-readiness-statement.md`.
See `2026-07-23-readme-handoff-summary-layout.md`.
See `2026-07-23-not-ready-readme-statement.md`.
See `2026-07-23-evaluated-readiness-readme-wording.md`.
See `2026-07-24-four-state-readme-scannability-validation.md`.
See `2026-07-24-direct-handoff-no-known-ai-disclosure-validation.md`.
See `2026-07-24-direct-handoff-known-ai-disclosure-validation.md`.
See `2026-07-24-evaluated-handoff-ai-disclosure-batch-validation.md`.
See `2026-07-24-evaluated-readiness-report-inclusion-validation.md`.
See `2026-07-24-handoff-representation-closure-validation.md`.

---

# 4. Capability-Based Collaboration

This section explores how project owners request assistance from human or AI contributors.

Related open question: `COLL-001` — resolved for MVP as asynchronous, transactional collaboration.

## Questions

### 4.1

What are the first capabilities the system should support?

**Answer:**

Before defining specific capabilities, the MVP should define a compact set of user-facing Assistance Request Types.

The user should not be overwhelmed by many similar request types. The interface should offer a small, understandable set of ways to ask for help, then use capabilities, scope, context and contributor availability behind the scenes.

Initial Assistance Request Types:

- Draft
- Improve
- Request Feedback
- Review
- Find Gaps
- Find Inconsistencies
- Analyze Impact
- Suggest Alternatives
- Validate Readiness
- Ask Question
- Prepare Handoff

Request Feedback and Review should both exist because they express different user intents.

Request Feedback means: "Please tell me what you think of this."

It is open-ended, judgment-based and conversational. It should usually produce comments, observations, questions and suggestions.

Review means: "Please check this carefully against a specific lens or standard."

It is structured, deliberate and criteria-based. It should usually produce findings, issues, severity or priority, pass/fail indicators, readiness judgment or suggested fixes.

Review should be understood as a composite Assistance Request Type.

Some focused Assistance Request Types, such as Find Gaps and Find Inconsistencies, can also operate as checks inside a broader Review.

Useful hierarchy:

- Assistance Request Type: what the user asks for.
- Review Lens: the perspective or standard used.
- Check Type: the focused activity performed.
- Finding Type: the kind of issue or result produced.
- Response Shape: how the contribution comes back.

Example Review composition:

```text
Review
  includes checks:
    - Gap Check
    - Inconsistency Check
    - Ambiguity Check
    - Testability Check
    - Feasibility Check
    - Alignment Check
    - Risk Check
    - Readiness Check
```

Focused Assistance Request Types can map to specific checks:

- Find Gaps -> Gap Check
- Find Inconsistencies -> Inconsistency Check
- Analyze Impact -> Impact Analysis
- Validate Readiness -> Readiness Check

This supports both narrow assistance and fuller review/check activities without overwhelming the user-facing request menu.

Review may eventually run checks in sequence or in parallel. Some checks may be independent, while others may depend on previous findings. For example, a readiness judgment may depend on gaps, inconsistencies, blockers, unresolved open questions and risks.

Some Assistance Request Types should be available at the whole-document level, not only at section or artifact level.

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

The matrix is a first pass and should be validated through concrete specification exercises.

AI support may also include a lightweight general AI Assistant.

The general AI Assistant is not the same thing as a scoped assistance request. It should help the user think, navigate the application, understand terminology, ask questions and decide what to do next.

The general AI Assistant may suggest or initiate a scoped Assistance Request Type when the user's conversation becomes actionable.

The general AI Assistant should not silently modify canonical product knowledge.

### 4.2

Are capabilities attached to users, AI contributors, or both?

**Answer:**

Capabilities are attached to both.
One could imagine the concept of role where a contributor (user or AI) being assigned a role would be able to perform the set of capabilities associated with the assigned role.

For the MVP, capabilities should be combined with availability when deciding which collaborators can receive a request.

Human collaborator availability depends on invitation and acceptance.

AI collaborator availability depends on whether the current human user has enabled usable Bring Your Own AI support and whether the requested action is permitted by applicable Project settings.


### 4.3

How does a project owner request help?

**Answer:**

Generically speaking, by inviting a user to collaborate. Having said that, if a user requests assistance to "Reword" a section, then the type of contribution is "Reword". 
So the generic mechanism is "by invitation" but it will be by invitation for a specific thing to do.

Refinement after discussion:

The user requests help by choosing a scope and an Assistance Request Type.

The scope may be the entire specification, a section, a Product Artifact, selected content or another explicit project scope.

The Assistance Request Type describes the user's intent, such as Request Feedback, Review, Find Gaps or Validate Readiness.

The system should then use the request type, scope, required capabilities and contributor availability to determine which human or AI contributors are eligible.

### 4.4

Does a contribution produce comments, suggested edits, review results, new artifacts, or decisions?

**Answer:**

A contribution will probably produce comments, suggested edits, review results, new artifacts, or decisions.
Certain types of contribution will however require the acceptance (or rejection) of the contribution by the requestor; based on that acceptance/rejection, suggested edits will be persisted, new artifacts will be created, action(s) will be taken based on a decision.
Comments and review results will probably not require acceptance.
One thing to understand here is that contributors cannot directly alter a project. They can only provide feedback/review results/comment or suggest changes, which may or may not be accepted by the project owner.

Refinement after discussion:

Contribution Responses should have Response Shapes.

Initial MVP Response Shapes:

| Response Shape | Meaning | User Action |
|---|---|---|
| Answer | Direct response to a question in the request, including known basis and limits. | Acknowledge, act on manually or ask a follow-up. |
| Comment | General note, observation or reaction. | Resolve, reply, ignore or convert into another action. |
| Question | Clarification needed from the requestor. | Answer, discuss or convert to an Open Question. |
| Finding | Structured issue, observation or result from a review or check. | Accept, dismiss, create a follow-up artifact or request changes. |
| Suggested Edit | Proposed change to existing content. | Accept, reject or modify before accepting. |
| Proposed Artifact | Suggested new Product Artifact. | Accept, reject or edit before accepting. |
| Proposed Relationship | Suggested relationship between Product Artifacts. | Accept, reject or adjust. |
| Proposed Decision | Suggested decision, option or recommendation. | Accept as Decision, reject or discuss further. |
| Readiness Result | Assessment of readiness, blockers, warnings and next actions. | Accept, act on blockers, defer or export with warnings. |
| Summary | Condensed explanation of content, context or results. | Use as reference or insert into project knowledge if accepted. |
| Handoff Material | Generated or refined implementation handoff content. | Accept into the export package, edit or reject. |

Findings may have Finding Types.

Initial Finding Types:

- Gap
- Inconsistency
- Ambiguity
- Risk
- Blocker
- Dependency
- Recommendation
- Readiness Warning

Response Shapes should help the UI decide which actions are available to the requestor.

### 4.5

What does "accepting" a contribution mean?

**Answer:**

I'm assuming here that by "accepting" a contribution, it means that the requestor will accept the contribution and take action based on it. This could involve persisting suggested edits, creating new artifacts, or taking specific actions based on a decision.

Further refinement:

Contribution Responses, including Answers, remain part of the request conversation and never directly alter the specification. Response handling is tracked independently through three per-response statuses:

- Submitted: the contributor sent the response;
- Acknowledged: the requestor explicitly indicates it has been read; and
- Acted On: the requestor explicitly indicates they have dealt with its content.

Acknowledged and Acted On have no direct effect on product knowledge. Acted On does not require a linked Revision or note and must not trigger automation. If the requestor updates the specification after considering a response, that is a separate manual action with its own Revision when applicable.

### 4.6

Should MVP collaboration include real multi-user collaboration, or only AI contributors first?

**Answer:**

It will include asynchronous multi-user collaboration.

For the MVP, this means collaboration requests and contribution responses rather than real-time co-editing.

Users should be able to log in, view pending collaboration requests, provide input, submit that input and let the requestor review the contribution later.

---

# 5. Product Artifact Model

This section explores the minimum artifact model required for the MVP.

Related open questions: `DATA-001`, `DATA-002`, `DATA-003`, `DATA-004`

## Questions

### 5.1

Is the current minimum artifact set enough?

Current candidate:

- Vision
- Goal
- User Need
- Feature
- User Story
- Use Case
- Acceptance Criteria
- Functional Requirement
- Non-Functional Requirement
- Screen / View
- User Flow
- UI Requirement
- Risk
- Assumption
- Decision
- Open Question

**Answer:**

The MVP minimum Product Artifact set is:

- Vision
- Goal
- User Need
- Feature
- User Story
- Use Case
- Acceptance Criteria
- Functional Requirement
- Non-Functional Requirement
- Screen / View
- User Flow
- UI Requirement
- Risk
- Assumption
- Decision
- Open Question

This set supports the first Section Catalog without requiring every section to map directly to a Product Artifact type.

Some sections are artifact-heavy. Other sections may be primarily section content or views over related artifacts.

Assumption is included because the Section Catalog contains `Risks, Assumptions and Open Questions`, and assumptions provide important implementation handoff context.

Screen / View, User Flow and UI Requirement are included because implementation-ready web app specifications need enough UX/UI structure to describe screens, flows, interactions, visual expectations, states, responsive behavior and accessibility expectations.

The MVP should not introduce lower-level design-system artifact types such as Design Token, Color, Typography, UI Component, Wireframe or Prototype.

### 5.2

Should `Specification Section` itself be an artifact type?

**Answer:**

No, not for the MVP.

From the user experience standpoint, the Specification is the complete project documentation the user works on.

Internally, a Specification is a document-like composition or view over structured Product Artifacts and related product knowledge.

A Specification Section is a document/container structure within a Specification. It organizes and presents Product Artifacts but is not itself a Product Artifact type initially.

### 5.3

Should `Functional Requirement` and `Non-Functional Requirement` be added to the minimum set?

**Answer:**

Yes.

Functional Requirement and Non-Functional Requirement should be included in the MVP minimum artifact set because the first Specification Document Template needs to produce implementation-ready specifications.

### 5.4

What fields does every artifact need?

**Answer:**

Every MVP Product Artifact should include:

- `id`
- `type`
- `title`
- `content`
- `status`
- `createdAt`
- `updatedAt`
- `createdBy`
- `updatedBy`
- `relationships`
- `provenance`
- `reviewState`
- `currentRevision` or `revisionHistory`

Clarifications:

- `title` is user-authored content.
- `type` is system-defined.
- Artifact fields do not need localization fields for the MVP.
- User-authored specification content should have one Project or Specification-level `contentLocale`.
- Section Catalog and template-controlled text should be localization-ready through keys such as `labelKey`, `descriptionKey` and `guidanceKey`.

Fields such as `priority`, `owner`, `tags`, `comments`, `readinessScore` and artifact-level `contentLocale` are not common MVP fields.

Artifact-specific schemas may define additional fields.

Structured fields do not automatically become Product Artifacts.

A field should become a Product Artifact only when it needs independent lifecycle, review, reuse, relationships, provenance or collaboration.

For MVP, User Story and Use Case internals can remain structured fields rather than separate artifacts.

The MVP should support artifact-specific schemas, but keep them lightweight.

User Story and Use Case should be the most structured artifact types.

Use Case should include optional `secondaryActors`.

Structured artifacts may be edited or rendered through artifact templates. An artifact template is a user-facing representation of the artifact schema, not a replacement for the schema.

### 5.5

Are the current statuses enough: Draft, Needs Review, Validated, Stale, Archived?

**Answer:**

Yes.

The MVP artifact lifecycle states are:

- Draft
- Needs Review
- Validated
- Stale
- Archived

State meanings:

- Draft: artifact exists but has not yet been verified or accepted.
- Needs Review: artifact requires verification before it can be considered reliable.
- Validated: artifact has been verified and accepted as currently accurate.
- Stale: artifact may no longer be accurate because related upstream knowledge changed.
- Archived: artifact is no longer active but is preserved for history and traceability.

Review does not need to be human-only. Verification may be performed by a human contributor, AI contributor or capability-specific reviewer when that is appropriate.

Rejected is not an MVP artifact lifecycle state. Rejection belongs to contribution responses, suggestions or proposed changes.

### 5.6

What relationships are essential for the MVP?

Current candidate:

- supports
- addresses
- part_of
- validates
- depends_on
- affects
- explains
- blocks
- derived_from
- relates_to

**Answer:**

The MVP relationship types are:

- `supports`
- `addresses`
- `part_of`
- `validates`
- `depends_on`
- `affects`
- `explains`
- `blocks`
- `derived_from`
- `relates_to`

`belongs_to` is replaced by `part_of` because `part_of` is clearer for artifact hierarchy and composition.

`derived_from` is included because derivation matters for provenance, AI generation, refinement and implementation handoff traceability.

Relationship meanings:

- `supports`: an artifact contributes to or supports another artifact.
- `addresses`: an artifact responds to a need, problem or opportunity.
- `part_of`: an artifact is part of a larger artifact or grouping.
- `validates`: an artifact defines validation for another artifact.
- `depends_on`: an artifact depends on another artifact being true, available, resolved or decided.
- `affects`: an artifact may influence, constrain or impact another artifact.
- `explains`: an artifact provides rationale for another artifact.
- `blocks`: an artifact prevents another artifact from being validated, completed or implemented.
- `derived_from`: an artifact was generated, refined or derived from another artifact.
- `relates_to`: a weak generic relationship used when no stronger relationship type applies.

---

# 6. Document vs Graph Architecture

This section explores the canonical product state representation.

Related open question: `ARCH-001`

## Questions

### 6.1

Is the canonical state an artifact graph, a document tree, or both?

**Answer:**

The canonical state should be a structured Project State object.

It should contain both document/specification composition and artifact relationship records.

The Product Knowledge Graph is an interpretation of the artifact and relationship records inside Project State, not necessarily a separate canonical graph object or graph database for the MVP.

The Project State object may include:

- project metadata;
- Specification;
- Specification Sections;
- Product Artifacts;
- Artifact Relationships;
- Contributors;
- Contributions;
- Discussions;
- Reviews;
- Revisions;
- Provenance;
- Context References.

This preserves document-first UX while supporting artifact identity, graph reasoning, export generation and AI context assembly.

### 6.2

Can a document section be a view over multiple artifacts?

**Answer:**

Yes.

Specification Sections should organize artifact references and section content rather than exclusively owning artifacts.

### 6.3

Can one artifact appear in multiple document views?

**Answer:**

Yes, conceptually.

Because sections should organize artifact references rather than exclusively owning artifacts, one artifact may later appear in multiple specifications, document views or exports.

### 6.4

What happens when the user edits prose that corresponds to structured artifacts?

**Answer:**

The editor should write back to the structured Project State.

If prose corresponds to an artifact field, the artifact should be updated.

If prose is section-level content, the section composition/content should be updated.

The exact editing mechanics remain a future UX and implementation detail.

### 6.5

How much structure is needed for MVP before it becomes too heavy?

**Answer:**

Enough structure to preserve artifact identity, section composition, relationships, provenance, revisions, review state and export generation.

The MVP does not need to decide storage technology or implement a separate graph database.

Artifact Relationships should be first-class records with metadata, including source or provenance metadata.

Possible relationship sources include:

- manually created;
- AI-suggested;
- inferred from document structure;
- imported;
- derived from another artifact or template.

---

# Notes

Use this section for additional thoughts that do not fit neatly into the questions above.

## Context Assembly

Context Assembly should be relationship-aware rather than based only on nearby document text.

The system should start from the requested scope, gather Candidate Context through relationships and supporting knowledge, filter by request intent and explain what was used.

Requested scope may be:

- selected content;
- a Product Artifact;
- a Specification Section;
- a set of Product Artifacts;
- the entire Specification;
- another explicit project scope.

Candidate Context may include:

- Structural Context implied by the Specification Document Template, document structure, section composition, artifact type expectations or artifact hierarchy;
- Explicit Context from manually created, imported or accepted Artifact Relationships and Context References;
- Inferred Context suggested by analysis, AI assistance or system inference;
- supporting knowledge such as Decisions, Risks, Assumptions, Open Questions, Reviews, Discussions, Provenance and project metadata.

Candidate Context should be filtered and weighted according to:

- Assistance Request Type;
- requested scope;
- relevant Artifact Relationships;
- expected Response Shape;
- contributor capability or Review Lens;
- contributor permissions and availability;
- known context limits.

For the MVP, Context Relevance may be represented as:

- primary;
- supporting;
- optional;
- excluded.

Context Sufficiency may be:

- sufficient;
- partial;
- insufficient.

Insufficient context should not always block a request. The system may submit with a warning, ask a clarifying question, suggest creating or linking missing artifacts or allow the user to proceed with limited context.

The system should provide a Context Explanation that identifies what context was included and why.

Example:

"This request used the selected User Story, its parent Feature, related Acceptance Criteria, linked Functional Requirements, unresolved Open Questions and blocking Risks."

Detailed relevance rules per Assistance Request Type remain future validation work.

Validated example patterns:

| Request | Primary Context | Supporting Context | Typical Response Shapes |
|---|---|---|---|
| Improve selected text | selected text, containing artifact or section | product name, product vision, goals, target users, glossary terms | Suggested Edit, Comment |
| Find Gaps on User Story | User Story, parent Feature, existing Acceptance Criteria | related User Needs, Functional Requirements, Non-Functional Requirements, Screen/View or User Flow | Finding, Proposed Artifact, Question |
| Find Inconsistencies on Feature | Feature, directly related Requirements, Decisions, Acceptance Criteria | Goals, Non-Goals, constraints, related sections, Open Questions, Risks | Finding, Question, Proposed Decision, Suggested Edit |
| Analyze Impact on Requirement | selected Requirement, directly related artifacts, parent Feature, affected Acceptance Criteria, affected Screen/View or User Flow, dependencies and known constraints | Goals, User Needs, Non-Goals, Decisions, Risks, Open Questions, data/domain model, external integrations, implementation guidance, previous Reviews | Summary, Finding, Proposed Relationship, Proposed Artifact, Proposed Decision, Question |
| Validate Readiness on whole Specification | included sections, required artifacts, artifact statuses, Acceptance Criteria, Functional and Non-Functional Requirements, Risks, Open Questions, technical constraints, validation/testing guidance | Goals, Non-Goals, Target Users, Decisions, Assumptions, UX Requirements, data/domain model, implementation guidance, previous Reviews | Readiness Result, Finding, Summary, Proposed Artifact, Question |

Primary Context is the context required to make the central judgment for the selected Assistance Request Type and lens.

Supporting Context explains, constrains or validates that judgment.

For the MVP, the default lens for Validate Readiness should be Implementation Handoff Readiness.

For Find Gaps, missing related artifacts may be useful output rather than a reason to block the request.

For Find Inconsistencies, the request needs comparison targets. If no related context is available, the system may still review internal wording, but the Context Explanation should state that no comparable related context was available.

For Analyze Impact on a Requirement, the system should inspect both upstream context explaining why the Requirement exists and downstream context identifying what the Requirement affects.

Upstream context may include Goals, User Needs, parent Features, Decisions, Assumptions and constraints.

Downstream context may include Acceptance Criteria, Functional Requirements, Non-Functional Requirements, UI Requirements, Screen/Views, User Flows, Risks, Open Questions, integrations, implementation guidance and validation/testing guidance.

If the Requirement has few or no relationships, impact analysis may still proceed with limited context, but the Context Explanation should make that limitation visible. Missing relationships may become Findings or Proposed Relationships.

## AI Assistance Visibility And Governance

Known AI assistance should be traceable, reviewable and governable without being universally disclosed.

Inside the workbench, known AI participation should be recorded through scoped Assistance Requests, AI Contributor identity, requested capability or Review Lens, Contribution Responses, Context Explanations, acceptance status, resulting Revisions and Provenance. Automatic disclosure follows the project-owner AI-use disclosure setting.

AI-generated or AI-assisted material should not silently become canonical product knowledge.

The project owner or another authorized contributor should manually review the response, then may acknowledge it, mark it acted on or separately update Product Knowledge after considering it.

The workbench can govern AI assistance that occurs inside the product through personally configured Bring Your Own AI support and disclosed AI-assisted human submissions.

The workbench cannot reliably prevent or prove undisclosed external AI use by a human collaborator.

The product should therefore support a project-owner-inspectable known AI activity trace, provenance, review and project governance expectations rather than claiming full AI-use prevention, detection or authorship attribution.

Resolved follow-up:

AI-use disclosure is off by default. When a project owner enables it, disclosure is directed to the workbench only, the workbench and handoff, or the handoff only. The trace remains available to the project owner regardless of the disclosure destination.

## Artifact Change Impact Propagation

When an artifact is updated or archived, the initial impact propagation should be deterministic system behavior over the Product Knowledge Graph.

The system should use Artifact Relationships to identify downstream artifacts that may have been impacted and mark them Stale.

Stale means the artifact may need review because upstream knowledge changed. It does not mean the artifact is definitely wrong.

The system should record why each artifact was marked Stale, including the triggering artifact, triggering Revision and relationship path when available.

After propagation, the user should be able to review a Stale artifact and update it, confirm it remains valid, leave it Stale, archive it or create a follow-up Open Question.

AI assistance may be offered afterward as a contextual action on Stale artifacts, such as requesting recommendations for what may need to change.

This should use existing Assistance Request Types and Response Shapes rather than introducing a new top-level Assistance Request Type for the MVP.

First-pass propagation rules should distinguish:

- Stale propagation, meaning an artifact may no longer be accurate because upstream knowledge changed.
- Coverage or readiness warning, meaning an artifact may now be under-supported, unvalidated, unaddressed or blocked without necessarily being inaccurate.

Strong automatic Stale propagation should apply when the changed artifact is the target of `depends_on`, `derived_from`, `validates`, `addresses` or child-to-parent `part_of` relationships, and when the changed artifact is the source of an `affects` relationship.

`relates_to` should not automatically propagate Stale.

`supports`, `explains` and `blocks` should use more conservative rules because the correct result depends on artifact type, relationship direction and whether the changed artifact provides rationale, aggregation or a blocking condition.

Validated concrete scenarios:

| Scenario | Relationship Pattern | Deterministic Result | Rationale |
|---|---|---|---|
| Goal changes | User Need `supports` Goal; Feature `addresses` User Need; User Story `part_of` Feature; Requirement or Acceptance Criteria linked downstream | Mark User Needs and downstream Features, User Stories, Requirements or Acceptance Criteria Stale where their purpose or content depends on the changed Goal. | A Goal change may alter why downstream work exists or what success means. |
| Requirement changes | Acceptance Criteria `validates` Requirement; UI Requirement, Screen/View, User Flow, implementation guidance or tests depend on or derive from Requirement | Mark validating, derived or dependent downstream artifacts Stale. | Downstream behavior, validation and implementation guidance may no longer match the Requirement. |
| Acceptance Criteria archived | Acceptance Criteria `validates` Requirement | Create coverage/readiness warning on the Requirement rather than automatically marking the Requirement Stale. | The Requirement may still be accurate, but it may no longer be sufficiently validated. |
| User Story changes | User Story `part_of` Feature; Acceptance Criteria, Requirements or UX artifacts validate, depend on or derive from User Story | Mark downstream Acceptance Criteria, Requirements or UX artifacts Stale when their content depends on the changed User Story. Mark the parent Feature Stale only when the Feature content aggregates or depends on that story. | A User Story change may alter behavior and downstream validation, but it does not always change the upstream Feature, User Need or Goal. |
| User Story archived | User Story `part_of` Feature; Feature `addresses` User Need; User Need `supports` Goal | Create coverage/readiness warnings for the parent Feature and possibly upstream User Need or Goal rather than automatically marking them Stale. Mark dependent or derived downstream artifacts Stale or orphaned. | Removing a User Story may weaken behavioral coverage without changing the meaning of the Feature, User Need or Goal. |
| Decision changes | Decision `explains` Requirement or Technical Constraint; other artifacts depend on the decision | Mark explained or dependent artifacts Stale when their rationale, constraint or behavior may have changed. | A changed Decision may invalidate the reasoning behind downstream artifacts. |
| Open Question resolved | Open Question `blocks` Feature, Requirement or validation | Mark blocked artifact Needs Review or Stale depending on whether existing content relied on an assumption now changed by the answer. | Resolution removes a block, but the affected artifact still needs confirmation or update before being considered valid. |

Child artifact changes or archival may create upstream coverage impact.

For example, modifying or archiving a User Story can affect whether its parent Feature is sufficiently specified and whether upstream User Needs or Goals still have enough behavioral coverage.

This should not automatically mark every upstream artifact Stale.

The system should prefer coverage/readiness warnings for upstream artifacts unless the upstream artifact's own content aggregates, summarizes or depends on the changed child artifact.

## Propagation Edge Cases And Revalidation

Propagation should follow relationship-specific semantics at every hop; an intermediate Stale artifact does not itself create a generic propagation rule.

Reachability governs scope without an arbitrary depth limit. Distance may lower review priority or confidence, but it does not weaken an impact result required by the semantics of the relationship path.

`relates_to` must not create an automatic impact result or be used as a bridge to further automatic propagation. It remains useful for navigation, human review and AI context assembly.

Archived artifacts remain historical evidence, but should be ignored as active impact targets and traversal intermediaries. The archival event itself can still trigger the evaluation.

For one triggering Revision, the system should prevent cyclic re-propagation, resolve one relationship-specific outcome per active artifact and retain distinct non-cyclic causal paths. Stale takes precedence over a coverage/readiness warning when several paths reach the same artifact.

For the ordinary Requirement -> Acceptance Criteria -> parent User Story path, the User Story receives a coverage/readiness warning. It becomes Stale only when another relationship path shows its own content may be inaccurate.

Confirming a Stale artifact as valid clears only that artifact's Stale status. The system may suggest review or revalidation of active artifacts whose recorded impact paths passed through it, but must not automatically clear their states.

## Prepare Handoff Context Assembly

Prepare Handoff is distinct from Validate Readiness. Validate Readiness assesses whether product knowledge is ready for implementation; Prepare Handoff composes the best available implementation package for a requested scope and Handoff Profile.

Prepare Handoff should always generate a caveated package when the scope contains meaningful product definition. It should use the default `Implementation Handoff` profile when the user does not choose another profile.

Primary context includes the selected export scope, active included sections and artifacts, requirements, Acceptance Criteria, UX/UI design guidance, Screens/Views, User Flows, constraints, integrations, implementation and validation guidance, status, Decisions, Risks, Assumptions, Open Questions, relationship and dependency information, and direct active dependencies outside the selected scope.

The package should surface Stale artifacts, blockers, missing or external UX/UI design guidance and direct outside-scope dependencies as implementation caveats. It should identify the result as `Prepared` or `Prepared with Caveats`; this is not a Product Artifact lifecycle state.

`UX/UI Design Requirements and Interaction Notes` should allow application-specific visual and interaction guidance, including visual intent, layout, color and typography use, spacing, shapes, elevation, component usage and states, responsive behavior, accessibility expectations and external design-source references. This is not design-system authoring: lower-level design values remain section content, structured fields or external references in the MVP.

## Accessibility Specification Review

Review UI Requirement with Accessibility Lens is an Accessibility Specification Review. It evaluates whether the specification describes accessible outcomes, risks and verification needs clearly enough to guide implementation and later evaluation.

Primary context includes the selected UI Requirement, related Screen/View and User Flow, interaction and state behavior, linked Functional Requirements and Acceptance Criteria, applicable UX/UI design guidance, explicit accessibility expectations and any declared accessibility target. Supporting context includes related User Stories and User Needs, external design references, technical constraints, Decisions, Risks, Assumptions, Open Questions, related UI Requirements and prior Reviews.

The review may examine keyboard and focus behavior, assistive-technology expectations, labels and feedback, error and state handling, non-color cues and contrast where visual values are specified, responsive or reflow behavior, and dynamic-content or media implications.

The default lens is standards-informed but must not claim accessibility conformance. When a target such as WCAG 2.2 AA is declared, it becomes primary review context. Without a declared target, the Context Explanation should state that general accessibility principles were applied and that conformance cannot be certified.

The result should conclude that accessibility specification coverage appears sufficient, that gaps or risks were found, or that accessibility cannot yet be assessed from the available specification. These are specification-readiness conclusions, not claims about an implemented application.

## Request Feedback On Product Overview

Request Feedback on Product Overview is open-ended, comment-oriented assistance. It is not a structured Review, a gap check or a readiness judgment.

Primary context includes the selected Product Overview, its current content, the product name and any feedback prompt or focus supplied by the requestor. Supporting context includes the Problem or Opportunity, Target Users or Personas, Goals and Success Criteria, Scope, Non-Goals, and User Needs or Core Features only when they clarify the overview. Relevant Decisions, Risks, Assumptions, Open Questions and prior feedback may support the response when they bear on the stated feedback focus.

Unrelated detailed requirements, screens, implementation guidance and historical material should be excluded unless they directly clarify the overview or feedback focus.

The expected Response Shapes are Comment, Question, Suggested Edit, Summary, Proposed Artifact and Proposed Decision. Feedback may identify concerns, uncertainties and improvement opportunities, but should not present an implementation-readiness result or structured Review conclusion unless separately requested.

Context is sufficient when the overview and enough strategic orientation are available to support a meaningful reaction. It is partial when one or more of the Problem or Opportunity, Target Users or Personas, Goals, Scope or Non-Goals are unavailable; the request may proceed with caveated comments and questions. It is insufficient only when the overview contains too little substantive product definition to support a responsible reaction. The Context Explanation should identify the strategic anchors used and any missing anchors that limited feedback.

## Draft Product Overview

Draft Product Overview is generative assistance for creating or refining an initial Product Overview. It is not a completeness, readiness or validation result.

Primary context includes the stated drafting prompt or source material, any existing overview content, product name, and the Product Overview section or Specification Document Template guidance. Supporting context includes the Problem or Opportunity, Target Users or Personas, Goals and Success Criteria, Scope, Non-Goals, and User Needs or Core Features when available. Decisions, constraints, Risks, Assumptions and Open Questions should be included only when they materially shape the intended summary.

The expected Response Shapes are Suggested Edit, Question, Summary and Proposed Artifact. The proposed content should distinguish accepted knowledge from assumptions, questions and suggestions. It must not silently add new product facts to canonical knowledge or imply that generated text is validated.

Context is sufficient when it contains meaningful product intent, audience or problem plus enough scope or outcome information to draft a bounded overview. It is partial when one or more of those anchors are absent; the contributor may still produce a limited draft while making assumptions and open questions visible. It is insufficient when there is no substantive product input or drafting prompt; the contributor should ask clarifying questions rather than fabricate content. The Context Explanation should identify source material and template guidance used, along with missing anchors that constrained the draft.

## Suggest Alternatives On A Core Feature

Suggest Alternatives on a Core Feature should optimize for the intended User Need and Goal rather than preserve the current feature by default. It may return four kinds of Alternative Proposal:

- feature variant: a different way to implement the current feature;
- outcome-preserving substitute: a different feature or approach that meets the same User Need;
- scope or timing change: defer, phase, simplify or remove the feature; or
- reframing: question whether the feature addresses the right User Need or Goal.

Primary context includes the selected Core Feature, the User Needs and Goals it addresses, the stated alternatives prompt or decision focus, applicable constraints, Scope and Non-Goals. Supporting context includes Target Users or Personas, related Features, User Stories, Use Cases, Requirements, Acceptance Criteria and dependencies, Decisions, technical constraints, Risks, Assumptions, Open Questions and prior feedback or Reviews.

Each Alternative Proposal should identify the intended outcome it supports or reassesses, its rationale, benefits and trade-offs, assumptions and Open Questions, and likely affected product knowledge when known. The expected Response Shapes are Proposed Decision, Proposed Artifact, Suggested Edit, Summary and Question. A proposal may express a recommendation with its conditions, but must not make a decision or change canonical product knowledge.

Context is sufficient when the feature, its intended outcome and relevant boundaries or constraints are available. It is partial when outcome links or constraints are incomplete; the contributor may still suggest local variants, but must label strategic alternatives such as deferment or substitution as constrained by the missing outcome context. It is insufficient when the selected feature has too little substantive definition and no meaningful source material or prompt exists. The Context Explanation should identify the outcome links, constraints and boundaries used, along with missing context that limits the alternatives.

## Ask Question On An Open Question

Ask Question on an Open Question helps the requestor formulate, understand or seek a response to the selected question. It does not automatically resolve the Open Question or make a decision.

Primary context includes the selected Open Question, the requestor's question or framing prompt, the question's rationale and scope, and artifacts it blocks or directly relates to. Supporting context includes related Goals, User Needs, Features, Requirements, Constraints, Decisions, Assumptions, Risks, Open Questions, Discussions and known evidence in the Project State.

The expected Response Shapes are Answer, Question, Finding, Proposed Decision and Summary. An Answer should distinguish known product knowledge from assumptions, limits and unresolved dependencies. It remains a conversation record and must not alter Product Knowledge or trigger automation.

Context is sufficient when the Open Question is clear and bounded and relevant context is available to reason about it. It is partial when related knowledge or constraints are missing; the contributor may still answer from available context while making limits visible. It is insufficient when the Open Question or requestor prompt is too ambiguous to understand. The Context Explanation should identify the question, linked and blocked artifacts, relevant knowledge used and missing context that limited the response.

## Improve A Functional Requirement

Improve a Functional Requirement should make the requirement clearer, more precise or more testable while preserving its established behavioral intent. It is not a way to silently add behavior, expand scope, resolve an assumption or choose an implementation approach.

Primary context includes the selected Functional Requirement, any stated improvement focus, directly related Feature or User Need, and direct Acceptance Criteria. Supporting context includes User Stories, Use Cases, Screen/Views or User Flows, Non-Functional Requirements, technical constraints, Decisions, integrations, Risks, Assumptions, Open Questions and related Requirements.

The expected Response Shapes are Suggested Edit, Question, Finding and Summary. If a needed behavior or scope change is identified, the contributor should return a Question or Finding instead of including the change in the Suggested Edit.

Context is sufficient when the Functional Requirement and enough behavioral context are available to preserve intent. It is partial when relationships, validation coverage or constraints are missing; the contributor may still improve wording or structure, but the Context Explanation should state that alignment or testability could not be fully assessed. It is insufficient when the requirement is too vague or empty and no linked scope or behavioral context is available. The contributor should then ask clarifying questions rather than rewrite it.

## Requirements Quality Review On A Functional Requirement

Review a Functional Requirement with Requirements Quality Lens is a structured assessment of specification quality. It is not an editing request or an implementation-conformance claim.

The default Requirements Quality Lens may assess clarity and ambiguity, completeness of actor, trigger, behavior and outcome, consistency with linked knowledge, testability and Acceptance Criteria coverage, traceability, dependencies, assumptions, constraints and unsupported implementation prescription. The requestor may add a narrower focus such as testability or ambiguity.

Primary context includes the selected Functional Requirement, Requirements Quality Lens, any stated review focus, directly related Feature or User Need, and direct Acceptance Criteria. Supporting context includes User Stories, Use Cases, Screen/Views or User Flows, related Requirements, Non-Functional Requirements, technical constraints, Decisions, integrations, Risks, Assumptions, Open Questions and prior Reviews.

The expected Response Shapes are Finding, Question, Suggested Edit, Proposed Artifact, Proposed Relationship and Summary. Missing Acceptance Criteria or relationships should become Findings rather than block the review.

Context is sufficient when the Functional Requirement contains meaningful behavior and enough related knowledge is available for the requested checks. It is partial when alignment, traceability or testability cannot be assessed; the contributor may still assess internal clarity and make limits visible. It is insufficient when the requirement has too little substantive content to assess. The review should conclude that requirements-quality coverage appears sufficient for the current scope, that findings were identified, or that quality cannot yet be assessed from the available specification. These conclusions do not validate the requirement's implementation.

## Find Gaps On Acceptance Criteria

Find Gaps on Acceptance Criteria assesses whether a selected Acceptance Criterion, selected set or Acceptance Criteria section supplies the necessary acceptance evidence for known intended behavior. It is a coverage and verifiability check, distinct from a Functional Requirement Requirements Quality Review; it does not execute tests or certify implementation conformance.

Primary context includes the selected Acceptance Criterion or Criteria, the artifact or behavior each validates, and sibling Acceptance Criteria that validate the same behavior. Siblings are primary comparison context even for a single selected criterion, preventing duplicate proposals. Supporting context includes related Functional Requirements, User Stories, Use Cases, Features, User Needs, Screen/Views or User Flows, Non-Functional Requirements, Decisions, constraints, integrations, Risks, Assumptions and Open Questions.

Only gaps grounded in known product knowledge should be returned: a missing trigger, precondition, actor or observable outcome; known behavior without coverage; an untestable criterion; or a missing validation relationship. Error, boundary, alternate-state, permission and transition coverage should be considered only where the specification establishes relevance. Generic edge cases must not be invented.

The expected Response Shapes are Finding, Question, Suggested Edit, Proposed Artifact, Proposed Relationship and Summary. A small addition to an existing criterion may be a Suggested Edit; new criteria and traceability links remain non-canonical proposals. Missing relationships should normally become Findings rather than block the request. Context is sufficient when the selected criteria, their validated behavior and enough known behavior are available to assess coverage; partial when local clarity can be assessed but coverage cannot; and insufficient when there is too little criterion content and no target behavior or source context. The conclusion should state that acceptance coverage appears sufficient for the current scope, that gaps were found, or that coverage cannot yet be assessed.
