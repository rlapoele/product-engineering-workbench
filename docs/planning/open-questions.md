# Open Questions

This document tracks important product, architectural, methodological, and design questions that have not yet reached a stable decision.

The objective is not to answer these questions quickly, but to ensure they remain visible until sufficient exploration and evidence allow an informed decision.

When a question is resolved:

1. Its status should be changed to **Resolved**.
2. Its final decision and consequences should be recorded in this document.
3. The appropriate project knowledge documents should be updated.
4. When justified, a separate Architecture Decision Record or decision record may be created.

Decision records may reference the originating open-question identifiers as provenance. Open questions do not need to reference the documents subsequently derived from them.

---

## Status Legend

| Status | Meaning |
|---|---|
| 🟡 Exploring | Active discussion is ongoing. |
| 🟢 Resolved | A stable decision has been reached. |
| 🔵 Deferred | Intentionally postponed. |
| ⚪ Archived | No longer relevant. |

---

## Question Categories

| Prefix | Category |
|---|---|
| DOM | Product Domains and Concepts |
| UX | User Experience |
| AI | Artificial Intelligence |
| DATA | Data Model |
| ARCH | Architecture |
| PROC | Process and Methodology |
| TECH | Technology |
| SEC | Security |
| PERF | Performance |
| COLL | Collaboration |

---

# DOM-001 — Should the workbench explicitly distinguish Product Engineering from Product Delivery?

**Category:** Product Domains and Concepts

**Status:** 🟢 Resolved

## Context

Creating implementation-ready specifications and delivering working software are related but distinct activities.

Many existing tools combine product definition, requirements management, implementation planning, and delivery tracking within the same workspace. This can blur the boundary between defining what should be built and managing how implementation work is executed.

## Alternatives Considered

### Option 1 — Combined domain

Treat Product Engineering and Product Delivery as one integrated domain within the workbench.

This would allow the product to cover product definition, delivery planning, implementation tracking, and release management.

### Option 2 — Separate but connected domains

Explicitly distinguish Product Engineering from Product Delivery.

The workbench would specialize in Product Engineering while producing artifacts that external delivery tools, development teams, and AI implementation agents can consume.

## Decision

The Product Engineering Workbench explicitly distinguishes **Product Engineering** from **Product Delivery**.

The workbench focuses on the **Product Engineering** domain.

Product Delivery is intentionally outside the product's primary scope.

The workbench produces implementation-ready product knowledge that can be consumed by:

- human development teams;
- AI coding, testing, and reviewing agents;
- delivery-management platforms;
- other implementation tools and environments.

## Rationale

Separating the two domains:

- clarifies the purpose and responsibility of the workbench;
- separates knowledge production from implementation execution;
- keeps the product focused on producing implementation-ready specifications;
- avoids competing directly with established delivery platforms;
- reduces unnecessary product and implementation complexity;
- allows the workbench to remain compatible with different delivery methodologies and tools.

## Consequences

The workbench may support artifacts such as:

- Product Vision;
- Goals;
- Personas;
- User Needs;
- Epics;
- Features;
- User Stories;
- Acceptance Criteria;
- Functional and Non-Functional Requirements;
- Architecture;
- Risks;
- Implementation guidance;
- Exportable implementation packages.

The workbench will not initially provide delivery-management capabilities such as:

- Sprint Planning;
- Kanban execution boards;
- Task Assignment;
- Story Points;
- Velocity Tracking;
- Capacity Planning;
- Workload Management;
- Release Execution.

Integration with Product Delivery will instead be supported through structured exports and future integration points.

---

# DOM-002 — Is “Product Engineering” the right name for the knowledge-production domain?

**Category:** Product Domains and Concepts

**Status:** 🟢 Resolved

## Context

The current working name for the domain responsible for transforming ideas into implementation-ready product knowledge is **Product Engineering**.

The term is broad enough to encompass product thinking, requirements, UX, architecture, constraints, quality, and implementation readiness. However, it may also be interpreted as primarily referring to software implementation or to the responsibilities of product-oriented software engineers.

A clearer name may eventually communicate the domain's purpose more precisely.

## Alternatives Considered

### Product Engineering

Advantages:

- reflects a multidisciplinary and implementation-aware activity;
- covers more than UX or visual design;
- aligns with the current working name of the product;
- emphasizes rigor and implementation readiness.

Potential disadvantage:

- may be interpreted as including software implementation and delivery.

### Product Design

Advantages:

- clearly communicates intentional product creation;
- familiar within digital-product organizations.

Potential disadvantage:

- is commonly associated primarily with UX, UI, interaction, and visual design;
- may appear too narrow for requirements, architecture, business analysis, and engineering constraints.

### Product Definition

Advantages:

- emphasizes defining what should be built;
- clearly precedes implementation.

Potential disadvantage:

- may underrepresent iterative thinking, validation, review, and evolution.

### Product Specification

Advantages:

- directly communicates the production of implementation-ready specifications.

Potential disadvantage:

- may sound document-centric and overly formal;
- may underrepresent discovery, collaboration, and critical thinking.

### Other terminology

The appropriate name may emerge as the product vision and domain model become more mature.

## Current Thinking

**Product Engineering** remains the strongest working term currently available.

It captures the multidisciplinary scope more effectively than Product Design and feels broader than Product Specification.

However, the term should not yet be treated as permanently settled.

## Current Direction

Continue using **Product Engineering** as the working terminology for:

- the product name;
- the product's primary domain;
- repository documentation;
- ongoing discussions.

Revisit the naming decision after the product vision, scope, artifact model, and user experience have matured further.

No final decision has yet been recorded.

---

# DATA-001 — What is the minimum required artifact set?

**Category:** Data Model

**Status:** 🟢 Resolved

## Context

The Project Model proposes a small initial set of Product Artifacts so the workbench can represent a product from initial intent to implementation-ready specification without becoming too complex too early. Product Artifact is the canonical term; Artifact may be used as a short form after first use.

## Current Candidate

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

## Current Direction

The initial Section Catalog requires User Story, Use Case, Functional Requirement and Non-Functional Requirement to be represented as Product Artifact types.

User Story and Use Case are distinct artifact types but may appear together in the `User Stories and Use Cases` section.

Assumption is included because the first Section Catalog includes `Risks, Assumptions and Open Questions`, and assumptions provide important implementation handoff context.

Screen / View, User Flow and UI Requirement are included because implementation-ready web app specifications need enough UX/UI structure to describe screens, flows, interactions, visual expectations, states, responsive behavior and accessibility expectations.

## Question

Which artifact types are required for the first coherent version of the workbench?

## Decision

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

Specification Section is not a Product Artifact type for the MVP. It is a document/container structure within a Specification, used to organize and present Product Artifacts.

## Consequences

The first Section Catalog can be supported without requiring every section to map directly to a Product Artifact type.

Some sections are artifact-heavy. Other sections may be primarily section content or views over related artifacts.

---

# DATA-002 — What are the required common fields for every artifact?

**Category:** Data Model

**Status:** 🟢 Resolved

## Context

Product Artifacts need enough common structure to support review, traceability, AI assistance, export, provenance and revision history while remaining understandable to human users.

## Question

Which fields must every artifact share to support review, traceability, AI assistance and export?

## Decision

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

Artifact `title` is user-authored content. Artifact `type` is system-defined.

Artifact fields do not need localization fields for the MVP.

User-authored specification content should have one Project or Specification-level `contentLocale`.

Section Catalog and template-controlled text should be localization-ready through keys such as `labelKey`, `descriptionKey` and `guidanceKey`.

## Consequences

Artifacts have enough common structure to support identification, editing, review, traceability, provenance, relationships and export.

Fields such as `priority`, `owner`, `tags`, `comments`, `readinessScore` and artifact-level `contentLocale` are not common MVP fields.

Artifact-specific schemas may define additional fields.

Structured fields do not automatically become Product Artifacts. A field should become a Product Artifact only when it needs independent lifecycle, review, reuse, relationships, provenance or collaboration.

---

# DATA-003 — Which artifact relationship types are required initially?

**Category:** Data Model

**Status:** 🟢 Resolved

## Context

Artifact Relationships form the Product Knowledge Graph and allow the workbench to reason across product knowledge, including traceability, validation, impact analysis and AI context assembly.

## Current Candidate

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

## Question

Which relationship types are necessary for the first version of the Product Knowledge Graph?

## Decision

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

`belongs_to` is not included. `part_of` is preferred because it is clearer for artifact hierarchy and composition.

`derived_from` is included because derivation matters for provenance, AI generation, refinement and implementation handoff traceability.

## Consequences

The relationship set supports traceability, validation, dependency reasoning, impact analysis, rationale, blocking conditions and derivation.

`relates_to` remains available as a weak generic relationship when no stronger relationship type applies.

---

# DATA-004 — What lifecycle states should artifacts support?

**Category:** Data Model

**Status:** 🟢 Resolved

## Context

Artifacts need lifecycle states so users and contributors can understand whether knowledge is draft, ready for review, currently valid, stale or preserved for history.

## Current Candidate

- Draft
- Needs Review
- Validated
- Stale
- Archived

## Question

Which statuses are required initially?

## Decision

The MVP artifact lifecycle states are:

- Draft
- Needs Review
- Validated
- Stale
- Archived

## State Meanings

Draft means the artifact exists but has not yet been verified or accepted.

Needs Review means the artifact requires verification before it can be considered reliable.

Validated means the artifact has been verified and accepted as currently accurate.

Stale means the artifact may no longer be accurate because related upstream knowledge changed.

Archived means the artifact is no longer active but is preserved for history and traceability.

When an artifact is updated or archived, deterministic system logic should use Artifact Relationships to identify potentially impacted downstream artifacts and mark them Stale.

The Stale state means review is needed because upstream knowledge changed. It does not mean the downstream artifact is definitely incorrect.

The system should record why each downstream artifact was marked Stale, including the triggering artifact, triggering Revision and relationship path when available.

AI assistance may be offered afterward as a contextual action on Stale artifacts, but AI should not be required to identify the initial impact set.

First-pass propagation rules should distinguish Stale propagation from coverage or readiness warnings.

Stale propagation means the downstream artifact may no longer be accurate.

Coverage or readiness warning means an artifact may now be under-supported, unvalidated, unaddressed or blocked without necessarily being inaccurate.

Strong automatic Stale propagation should apply when the changed artifact is the target of `depends_on`, `derived_from`, `validates`, `addresses` or child-to-parent `part_of` relationships, and when the changed artifact is the source of an `affects` relationship.

`relates_to` should not automatically propagate Stale.

`supports`, `explains` and `blocks` should use more conservative rules because the correct result depends on artifact type, relationship direction and whether the changed artifact provides rationale, aggregation or a blocking condition.

The first-pass rules have been validated against concrete scenarios:

- Goal changes may mark downstream User Needs, Features, User Stories, Requirements or Acceptance Criteria Stale when their purpose or success meaning depends on the changed Goal.
- Requirement changes should mark validating, derived or dependent downstream artifacts Stale.
- Acceptance Criteria archival should usually create a coverage/readiness warning on the Requirement rather than marking the Requirement Stale.
- User Story changes should mark dependent downstream artifacts Stale and mark the parent Feature Stale only when the Feature content aggregates or depends on the changed story.
- User Story archival should usually create coverage/readiness warnings for the parent Feature and possibly upstream User Need or Goal rather than automatically marking those upstream artifacts Stale.
- Decision changes should mark explained or dependent artifacts Stale when their rationale, constraint or behavior may have changed.
- Open Question resolution should mark blocked artifacts Needs Review or Stale depending on whether existing content relied on an assumption changed by the answer.

Child artifact changes or archival may create upstream coverage impact.

The system should prefer coverage/readiness warnings for upstream artifacts unless the upstream artifact's own content aggregates, summarizes or depends on the changed child artifact.

Validated propagation edge-case rules:

- Propagation follows relationship-specific semantics at each hop. An intermediate Stale artifact does not create a generic new propagation rule.
- Reachability governs scope; there is no arbitrary depth limit. Path length may lower review priority or confidence, but it does not weaken a result required by relationship semantics.
- `relates_to` must not create an automatic impact result or act as a traversal bridge. It remains available for navigation, human review and AI context assembly.
- Archived artifacts remain historical evidence, but are ignored as active impact targets and traversal intermediaries. The archival event itself may still trigger propagation from the archived source.
- For each triggering Revision, cyclic re-propagation must stop. The system resolves one relationship-specific impact outcome per active artifact while retaining the distinct non-cyclic causal paths that explain it.
- When several paths reach one artifact, Stale takes precedence over a coverage/readiness warning.
- A Requirement change that makes Acceptance Criteria Stale should ordinarily create a coverage/readiness warning, rather than Stale status, on a parent User Story. The User Story becomes Stale only when another path indicates that its own content may be inaccurate.
- Confirming a Stale artifact as valid clears Stale only on the reviewed artifact. The system may suggest revalidation of active artifacts whose recorded impact paths pass through it, but must not automatically clear their states.

## Consequences

Review does not need to be human-only. Verification may be performed by a human contributor, AI contributor or capability-specific reviewer when that is appropriate.

Rejected is not an MVP artifact lifecycle state. Rejection belongs to contribution responses, suggestions or proposed changes. An artifact that should no longer be active can be archived.

---

# UX-001 — Is the document a canonical object or a view over artifacts?

**Category:** User Experience

**Status:** 🟢 Resolved

## Context

The Project Model currently treats the document-first user experience as a view over structured Product Artifacts and Artifact Relationships rather than as the canonical source of truth itself.

## Decision

The document is a view over structured Product Artifacts and Artifact Relationships, not the canonical source of truth itself. For the MVP, users experience the Specification as one coherent document created from a Specification Document Template.

An empty Specification begins as a selected section outline. Contextual action menus let users act at the appropriate scope without permanently filling the document with controls: blank section space invokes section actions, while an existing artifact invokes artifact actions. Actions are explicit in the menu, such as `Add Goal` in an empty goals section.

New Product Artifacts are inserted and edited inline. In reading mode, they render primarily as normal prose with subtle accessible cues. Selecting rendered artifact prose opens its action menu; selecting `Edit` enters editing rather than editing beginning implicitly.

An edit-in-progress draft is persistent and private to its editor. It is separate from Artifact lifecycle state, the current canonical Revision and shared Product Knowledge. Only `Done editing` creates a Revision, updates canonical knowledge and triggers deterministic impact evaluation. The user can otherwise preserve or discard the draft when returning to the artifact.

After a committed Revision, the workbench applies the change immediately and shows a transient, non-modal impact disclosure anchored to the edited artifact. Persistent document and outline cues remain on affected artifacts and their sections, and distinguish Stale from coverage/readiness warnings.

The document also provides optional, user-invoked deterministic `What next?` guidance. It is a derived view, not a task list, AI request or workflow gate. The first-pass priority order is the current user's Edit-in-progress Drafts, explicit Open Question blockers, active impact outcomes and empty required selected sections. Every item explains its basis and only navigates the user to the relevant scope or opens its ordinary contextual action menu.

## Consequences

The document-first experience remains readable while retaining explicit artifact identity, scope-aware actions, revision boundaries and impact visibility.

The interaction model is a first pass and should be validated through prototypes and concrete specification exercises. It does not determine storage technology or final visual design.

---

# AI-001 — What context should AI contributors receive for each action?

**Category:** Artificial Intelligence

**Status:** 🟢 Resolved

## Context

The Project Model distinguishes Context from Provenance and expects AI contributors to operate on structured context rather than isolated text whenever possible.

## Question

How should context be selected, limited and explained when AI contributors generate, review or analyze artifacts?

## Decision

The MVP should use a first-pass conceptual Context Assembly model.

Context Assembly starts from the requested scope, expands through relationships and then filters candidate context by request intent.

The requested scope may be selected content, a Product Artifact, a Specification Section, a set of Product Artifacts, the entire Specification or another explicit project scope.

Candidate Context may include:

- Structural Context implied by the Specification Document Template, document structure, section composition, artifact type expectations or artifact hierarchy;
- Explicit Context from manually created, imported or accepted Artifact Relationships and Context References;
- Inferred Context suggested by analysis, AI assistance or system inference;
- supporting knowledge such as Decisions, Risks, Assumptions, Open Questions, Reviews, Discussions, Provenance and project metadata.

Candidate Context should be filtered and weighted according to:

- the Assistance Request Type;
- the requested scope;
- relevant Artifact Relationships;
- the expected Response Shape;
- the contributor capability or Review Lens;
- contributor permissions and availability;
- known context limits.

For the MVP, Context Relevance may be represented conceptually as primary, supporting, optional or excluded.

The system should assess Context Sufficiency as sufficient, partial or insufficient.

Insufficient context should not always block a request. The system may submit with a warning, ask a clarifying question, suggest creating or linking missing artifacts or allow the user to proceed with limited context when appropriate.

The system should provide a Context Explanation that identifies what context was included and why.

Initial validated examples include:

- Improve selected text;
- Find Gaps on a User Story;
- Find Inconsistencies on a Feature;
- Analyze Impact on a Requirement;
- Validate Readiness on the whole Specification;
- Request Feedback on Product Overview;
- Draft Product Overview;
- Suggest Alternatives on a Core Feature;
- Ask Question on an Open Question;
- Improve a Functional Requirement;
- Review a Functional Requirement with Requirements Quality Lens;
- Find Gaps on Acceptance Criteria; and
- Review UI Requirement with Accessibility Lens.

Primary Context is the context required to make the central judgment for the selected Assistance Request Type and lens.

Supporting Context explains, constrains or validates that judgment.

For the MVP, the default lens for Validate Readiness should be Implementation Handoff Readiness.

For Find Gaps, missing related artifacts may be useful output rather than a reason to block the request.

For Find Inconsistencies, the request needs comparison targets. If no related context is available, the system may still review internal wording, but the Context Explanation should state that no comparable related context was available.

For Analyze Impact on a Requirement, the system should inspect both upstream context explaining why the Requirement exists and downstream context identifying what the Requirement affects. If few or no relationships are available, the request may still proceed with limited context, but the Context Explanation should make that limitation visible and missing links may become Findings or Proposed Relationships.

For Review UI Requirement with Accessibility Lens, the primary context should include the selected UI Requirement, related Screen/View and User Flow, interaction and state behavior, linked Functional Requirements and Acceptance Criteria, applicable UX/UI design guidance, explicit accessibility expectations and any declared accessibility target. The review should assess specification coverage, risks and testability rather than claim accessibility conformance. Without a declared target, the Context Explanation should say that the review applied general accessibility principles and cannot certify conformance.

For Request Feedback on Product Overview, the primary context should include the overview itself and any stated feedback focus. Problem or Opportunity, Target Users or Personas, Goals and Success Criteria, Scope and Non-Goals provide the usual strategic orientation; User Needs and Core Features should be supporting only when they clarify the overview. The request may proceed with caveated comments and questions when some strategic anchors are missing, but should ask a clarifying question when the overview contains too little substantive product definition to support a responsible reaction. It must not present an open-ended feedback response as a structured Review or readiness conclusion.

For Draft Product Overview, the primary context should include the stated drafting prompt or source material, existing overview content, product name and section or template guidance. Problem or Opportunity, Target Users or Personas, Goals, Scope and Non-Goals anchor the draft; User Needs, Core Features, Decisions, Constraints, Risks, Assumptions and Open Questions should support it only when they materially shape the intended product summary. A partial-context request may return a limited draft that identifies assumptions and open questions. When no substantive input or drafting prompt exists, it should ask clarifying questions rather than fabricate product claims or imply the resulting content is validated.

For Suggest Alternatives on a Core Feature, the primary context should include the selected feature, the User Needs and Goals it addresses, the stated alternatives prompt or decision focus, applicable constraints, Scope and Non-Goals. The request should optimize for the intended outcome rather than preserve the feature by default. It may propose a feature variant, outcome-preserving substitute, scope or timing change such as deferment, or reframing that questions whether the feature addresses the right need or goal. A partial-context request may suggest local variants, but must identify strategic alternatives as constrained when outcome links or boundaries are missing. Each Alternative Proposal remains non-canonical unless an authorized requestor separately changes Product Knowledge after considering it.

For Ask Question on an Open Question, the primary context should include the selected Open Question, the requestor's stated question or framing prompt, the question's rationale and scope, and artifacts it blocks or directly relates to. Supporting context may include related Goals, User Needs, Features, Requirements, Constraints, Decisions, Assumptions, Risks, other Open Questions, Discussions and known evidence in the Project State. The expected Response Shapes are Answer, Question, Finding, Proposed Decision and Summary. An Answer is a conversational Contribution Response: it does not automatically resolve the Open Question or change Product Knowledge.

Contribution Responses should use separate statuses. A response is Submitted when sent, then may be manually marked Acknowledged when read and Acted On when the requestor has dealt with its content. These statuses have no direct effect on the specification, do not require a linked Revision or note, and must not trigger automation.

For Improve a Functional Requirement, the primary context should include the selected Functional Requirement, the stated improvement focus, directly related Feature or User Need, and direct Acceptance Criteria. Supporting context may include User Stories, Use Cases, Screen/Views or User Flows, Non-Functional Requirements, technical constraints, Decisions, integrations, Risks, Assumptions, Open Questions and related Requirements. The request should make the requirement clearer, more precise or more testable while preserving its established behavioral intent. A Suggested Edit must not silently introduce behavior, expand scope, resolve an assumption or choose an implementation approach not established in the assembled context. Such changes should be returned as a Question or Finding instead.

For Review a Functional Requirement, Requirements Quality is the default Review Lens. Primary context should include the Functional Requirement, the lens, any stated review focus, directly related Feature or User Need, and direct Acceptance Criteria. Supporting context may include User Stories, Use Cases, Screen/Views or User Flows, related Requirements, Non-Functional Requirements, technical constraints, Decisions, integrations, Risks, Assumptions, Open Questions and prior Reviews. The Review should assess specification clarity, completeness, consistency, testability, traceability, dependencies, assumptions, constraints and unsupported implementation prescription. Missing Acceptance Criteria or relationships should become Findings rather than block the review. The result describes requirements-quality coverage for the current specification scope; it does not edit the requirement or certify implementation conformance.

For Find Gaps on Acceptance Criteria, primary context should include the selected Acceptance Criterion or Criteria, the artifact or behavior each validates, and sibling Acceptance Criteria that validate the same behavior. Related Functional Requirements, User Stories, Use Cases, Features, User Needs, Screen/Views or User Flows, Non-Functional Requirements, Decisions, constraints, integrations, Risks, Assumptions and Open Questions may provide supporting context. The request should assess coverage and verifiability only against known behavior, not invent generic edge cases. It may report a missing trigger, precondition, actor or observable outcome; known behavior without coverage; an untestable criterion; or a missing validation relationship. New criteria and relationships remain non-canonical proposals. The result should state that acceptance coverage appears sufficient for the current scope, that gaps were found, or that coverage cannot yet be assessed; it does not execute tests or certify implementation conformance.

## Consequences

Context Assembly becomes relationship-aware rather than based only on nearby document text.

Detailed relevance rules for remaining Assistance Request Types remain future validation work.

---

# UX-002 — What should the first Specification Document Template contain?

**Category:** User Experience

**Status:** 🟢 Resolved

## Context

The MVP should allow users to create projects from a Specification Document Template. The first target user is an AI-assisted developer who wants to produce specifications that can be implemented by humans, AI-assisted humans or AI implementation environments.

## Current Direction

The MVP should start with one initial Specification Document Template: `Implementation-Ready Web App Specification`.

This template should be backed by a reusable Section Catalog and should support multiple Project Presets rather than separate small, medium and complex templates.

Initial presets:

- Simple Web Presence
- Standard Web App
- Complex Product App

Each preset should classify sections as Required, Recommended or Optional.

Additional Specification Document Templates may be added later when the structure or purpose of the specification is meaningfully different, such as API services, mobile apps, design systems, AI features or migration projects.

## Decision

The MVP will use the following initial Section Catalog:

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

The `User Stories and Use Cases` section will contain items typed as either User Story or Use Case.

`UX/UI Design Requirements and Interaction Notes` is the place for application-specific visual and interaction guidance needed for faithful implementation. It may include shared visual guidance, component usage and states, responsive and accessibility expectations, and external design-source references without introducing lower-level design-system artifact types into the MVP.

The first Project Presets will classify sections as follows:

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

## Consequences

Core Features and Functional Requirements are distinct specification sections.

A Core Feature describes a user-visible capability or product area.

A Functional Requirement describes a specific behavior or obligation the system must satisfy.

The preset classification is a first pass and may be revised after future specification exercises.

---

# UX-003 — What should the MVP implementation handoff package contain?

**Category:** User Experience

**Status:** 🟢 Resolved

## Context

The MVP should allow users to export specifications, likely as a zip file containing a directory structure and multiple files representing the specification content.

The export should be usable by humans, AI-assisted developers and AI implementation environments.

## Question

What file structure, formats and metadata should the first Implementation Handoff Package contain?

## Decision

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

The MVP may initially defer the `artifacts/` folder and expanded `metadata/` folder as stretch items.

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

## Consequences

The MVP should generate:

- a complete combined `specification/SPECIFICATION.md` file;
- one Markdown file per included specification section;
- stable artifact IDs embedded in combined and section Markdown;
- a top-level `IMPLEMENTATION_BRIEF.md`;
- a top-level `manifest.json`.

The MVP should include unresolved open questions and known risks in the export.

Open questions should not block export by default, but the package should clearly indicate when unresolved questions may block or increase the risk of implementation.

Prepare Handoff should generate the best available package for a meaningful selected scope even when active artifacts are Stale or implementation caveats remain. The result should be identified as `Prepared` or `Prepared with Caveats`, which is a package-level result rather than an artifact lifecycle state. When the selected scope has insufficient product definition to prepare responsibly, no package should be prepared; this boundary applies even when `Validate Readiness` is disabled.

The caveat summary should include relevant Stale artifacts, Risks, Assumptions, Open Questions, blockers, missing or external UX/UI design guidance, and direct active dependencies outside the selected scope. Dependencies outside the scope should be labeled as external dependencies.

Prepare Handoff should enable `Validate Readiness` by default, while allowing the user to disable it for a direct handoff. When enabled, readiness validation is deterministic and applies only to the selected handoff scope plus direct external dependencies. It produces `Ready`, `Ready with Caveats` or `Not Ready` from explicit Project State. This outcome does not block preparation of a meaningful caveated package.

The first handoff for a Project/Specification and Handoff Profile should select the entire Specification. The user may modify the outline-based scope, and the last choice should be remembered per user, Project/Specification and Handoff Profile. Selecting a section selects its active contained content by default, while individual artifacts may be deselected. This preference is personal and does not alter shared Project Knowledge. Scope eligibility is separate from readiness and applies even when validation is disabled. The Handoff Profile owns eligibility rules, while the Specification Document Template provides the sections and containment structure. For the MVP `Implementation Handoff` profile, the entire Specification or at least one selected section with non-whitespace section content or an active contained Product Artifact is an eligible root scope; individual artifacts may narrow a section but cannot be the sole handoff root. An ineligible selection explains its missing structural context and disables Prepare Handoff until corrected. Direct external dependencies remain external unless explicitly selected.

Scope eligibility does not itself establish meaningful product definition. Meaningful-definition rules are deterministic and profile-specific. For the MVP `Implementation Handoff` profile, a selected `Core Features` scope containing only a high-level Feature statement, with no included behavioral detail or validation coverage, is insufficient. A feature-centered scope is meaningful only when it includes an active Feature with non-whitespace title and content, at least one explicitly related active Functional Requirement, and one or more active Acceptance Criteria such that every included Functional Requirement is explicitly validated by at least one criterion. User Stories and Use Cases may support the package but do not replace the Functional Requirement in this first rule. Goals, User Needs, Non-Goals, UX/UI guidance, technical constraints and external integrations are not universal minimum elements; they become caveats only when an explicit relationship or profile rule makes them relevant. With validation enabled, the workbench reports Not Ready and does not prepare a package; disabling validation does not bypass the no-package boundary. The user receives a concrete explanation and ordinary navigation or contextual actions rather than a prescribed workflow. The scope selector displays the three minimum-definition elements deterministically and does not allow package preparation until they are present.

A UX/UI-centered scope is meaningful only when it includes active Screen/View artifact(s) defining the interface boundary, an active User Flow explicitly including those views, active UI Requirement(s) explicitly related to an included view or flow, and active Functional Requirement(s) underlying the interaction with Acceptance Criteria validating every included requirement. The scope selector displays interface boundary, user flow, UI behavior, and system behavior with acceptance coverage as deterministic checks. Until all four elements are present, the workbench does not prepare a package. This rule is specific to UX/UI-centered implementation handoffs and does not make its elements universal requirements for other Handoff Profiles.

Including a standalone `READINESS_REPORT.md` in the handoff is enabled by default when readiness validation is enabled and is unavailable when validation is disabled. The preference is remembered using the same key. The report should include the readiness outcome, scope, Handoff Profile, evaluation time, blockers, Stale artifacts, coverage/readiness warnings, Risks, Assumptions, Open Questions, direct external dependencies and deterministic recommended follow-up actions. When multiple blockers apply, group them by their originating unresolved Open Question, list their affected selected-scope artifacts or direct external dependencies, and provide one follow-up action per originating blocker. Any explicit blocker produces Not Ready; selected-scope blockers appear before blocking direct external dependencies, with selected-outline order and stable artifact ID breaking ties. The workbench must not infer an importance ranking without explicit Project State.

---

# UX-004 — What Handoff Profiles should the MVP support?

**Category:** User Experience

**Status:** 🟢 Resolved

## Context

Implementation-ready does not only mean product-complete. It also means context-ready for the intended implementation consumer.

The Implementation Handoff Package may be consumed by humans, AI-assisted developers, AI implementation environments, agencies, clients, QA reviewers or other downstream users.

Different consumers may need different guidance files, summaries, emphasis, metadata and verification instructions.

## Decision

The MVP should support one default Handoff Profile: `Implementation Handoff`.

The default profile should be human-readable and AI-useful. It should serve human developers, AI-assisted developers and AI implementation environments without forcing the MVP to maintain separate profile variants.

A Handoff Profile defines the intended consumer of the package and shapes the generated files, guidance, emphasis and format.

Handoff Profiles are not AI-specific. They should support both human and AI consumers.

The default `Implementation Handoff` profile should generate:

- `README.md`;
- `IMPLEMENTATION_BRIEF.md`;
- `VERIFICATION_CHECKLIST.md`;
- `READINESS_REPORT.md` when readiness validation and report inclusion are selected;
- `manifest.json`;
- `specification/SPECIFICATION.md`;
- section-level Markdown files under `specification/`.

`IMPLEMENTATION_BRIEF.md` should include:

- product summary;
- target implementation consumer;
- scope;
- non-goals;
- key features;
- technical constraints;
- known risks and open questions;
- suggested implementation sequence;
- verification guidance;
- references to relevant specification files and artifact IDs.

Specialized profiles should be deferred until after the MVP.

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

# COLL-001 — How should capability-based collaboration work?

**Category:** Collaboration

**Status:** 🟢 Resolved

## Context

The workbench should support optional collaboration by allowing project owners to request assistance from human or AI contributors based on capabilities.

Assistance may apply to the whole specification, a document section, a Product Artifact or selected content.

## Question

How should project owners request assistance, match contributors by capability and accept or reject resulting contributions?

## Decision

MVP collaboration will be asynchronous and transactional.

Project owners will create scoped Collaboration Requests for contributors. Requests may target the whole specification, a document section, a Product Artifact, selected content or another explicit scope.

Each Collaboration Request should include an Assistance Request Type that describes the kind of help being requested.

Initial MVP Assistance Request Types are Draft, Improve, Request Feedback, Review, Find Gaps, Find Inconsistencies, Analyze Impact, Suggest Alternatives, Validate Readiness, Ask Question and Prepare Handoff.

Request Feedback is open-ended and comment-oriented. Review is structured and criteria-oriented.

Review is a composite Assistance Request Type. It may include multiple Check Types, while focused Assistance Request Types such as Find Gaps or Find Inconsistencies may expose individual checks directly.

Contributor matching should consider requested capability and contributor availability.

For human contributors, MVP availability is invitation-gated. For application-provided AI Contributors, MVP availability means the relevant capability is enabled and usable.

Contributors will respond asynchronously by submitting Contribution Responses.

Initial MVP Response Shapes are Answer, Comment, Question, Finding, Suggested Edit, Proposed Artifact, Proposed Relationship, Proposed Decision, Readiness Result, Summary and Handoff Material.

Findings may use Finding Types such as Gap, Inconsistency, Ambiguity, Risk, Blocker, Dependency, Recommendation and Readiness Warning.

Contributors will not directly alter canonical Product Knowledge through a Collaboration Request. The project owner or authorized requestor will manually review responses and may acknowledge them, mark them acted on, or separately update product knowledge after considering them.

If a manual action informed by a Contribution Response changes product knowledge, the resulting saved change will be recorded as a Revision.

Known AI assistance should remain visible and governable through Contribution records, accepted Revisions, Provenance, Context Explanations, project settings and export metadata when relevant.

The workbench can govern AI assistance that occurs inside the product, including built-in AI Contributors and AI-assisted Contribution Responses disclosed by human contributors.

The workbench cannot reliably prevent or prove undisclosed external AI use by a human collaborator.

The MVP should therefore support disclosure, review and provenance for known AI-assisted work rather than claiming full AI-use prevention or detection.

## Consequences

The MVP does not need to support:

- real-time co-editing;
- shared cursors;
- live presence;
- simultaneous editing conflict resolution;
- project chat as a core collaboration mechanism.

The MVP does need to support:

- user accounts;
- collaboration invitations or requests;
- pending request lists;
- scoped requests;
- Assistance Request Types;
- requested capabilities or actions;
- contributor availability rules;
- Response Shapes;
- Finding Types;
- submitted contribution responses;
- contribution response statuses;
- requestor acknowledgment and acted-on response statuses;
- known AI assistance visibility and provenance.

---

# COLL-002 — Should the workbench require disclosure of AI assistance?

**Category:** Collaboration

**Status:** 🟡 Exploring

## Context

The workbench can make known in-product AI assistance visible and governable.

However, the workbench cannot reliably prevent a document owner or human contributor from using external AI assistance outside the product and then copying or rewriting that output into the workbench.

This limitation raises a separate product question: if external AI use cannot be reliably prevented or proven, should the product require, request, encourage or avoid AI-use disclosure?

## Question

Should the workbench require contributors to disclose AI assistance, or should AI usage disclosure remain optional, policy-driven or omitted from the product experience?

## Current Direction

Do not assume that all AI usage must be disclosed as a universal product rule.

The current stable decision is narrower: known AI assistance should not be hidden when it occurs inside the workbench or when a contributor explicitly discloses it.

Future work should evaluate whether disclosure provides enough trust, governance or compliance value to justify its UX and collaboration cost.

## Considerations

Potential reasons to disclose AI assistance:

- transparency;
- review trust;
- provenance quality;
- compliance or organizational policy;
- export confidence for downstream implementation consumers.

Potential reasons not to require disclosure:

- external AI use cannot be reliably detected;
- required disclosure may create false confidence;
- users may experience disclosure as friction or surveillance;
- the important review question may be quality and accountability rather than whether AI was used.

---

# ARCH-001 — Should the canonical product state be stored as a document graph?

**Category:** Architecture

**Status:** 🟢 Resolved

## Context

The emerging model treats canonical product knowledge as structured artifacts and relationships, while the document-first experience presents that knowledge as an editable document view.

## Question

Should the canonical product state be stored as a document graph, another graph-like structure or a different representation?

## Decision

The canonical product state should be a structured Project State object.

The Project State object should contain both:

- document/specification composition;
- artifact and relationship records.

The Product Knowledge Graph is an interpretation of the artifact and relationship records inside the Project State object. It does not need to be stored as a separate canonical graph object or graph database in the MVP.

Specification Sections should organize artifact references and section content rather than exclusively owning artifacts.

Artifact Relationships should be first-class records with their own metadata, including source or provenance metadata.

## Consequences

The MVP can support document-first editing, artifact identity, graph reasoning, export generation and AI context assembly from one structured state model.

Storage technology remains undecided. This decision does not require a relational database, document database or graph database.

---

# PROC-001 — How should conversations crystallize into stable knowledge?

**Category:** Process and Methodology

**Status:** 🟡 Exploring

## Context

Discussions are working memory, but important conclusions should eventually become stable product knowledge such as artifacts, decisions, updates or open questions.

## Question

What rules or signals should help users decide when a discussion should become an artifact, decision, update or open question?
