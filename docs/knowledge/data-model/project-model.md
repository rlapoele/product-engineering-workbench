# Project Model

This document defines the initial conceptual model for the Product Engineering Workbench.

The objective is not to define a database schema or implementation structure yet.

The objective is to define the minimum product knowledge concepts required to represent, structure, review and evolve a product from an initial idea to implementation-ready product knowledge.

---

# 1. Purpose

The Product Engineering Workbench helps users transform ideas into structured product knowledge.

To support this, the workbench needs a clear model for:

- what product knowledge is;
- how product knowledge is organized;
- how product knowledge artifacts relate to one another;
- how product knowledge is reviewed and validated;
- how product knowledge evolves over time;
- how human and AI contributors participate in the process.

This model provides the conceptual foundation for future UX, data model, AI orchestration and export decisions.

---

# 2. Core Concept

A project is the container for all product knowledge related to a product, feature, initiative or product area.

A project contains a structured body of product knowledge composed of artifacts, relationships, conversations, decisions, reviews and revisions.

The project is not simply a folder of documents.

It is a coherent product knowledge system.

---

# 3. Minimum Product Knowledge Model

The minimum Product Knowledge Model is the smallest set of concepts required to represent product knowledge in a coherent, traceable and reviewable way.

It includes:

- Project
- Product Knowledge
- Product Artifact
- Artifact Relationship
- Product Knowledge Graph
- Workflow Template
- Contributor
- Capability
- Contribution
- Conversation
- Decision
- Review
- Revision
- Provenance
- Context

This model should remain small enough to be understandable, but complete enough to support meaningful product engineering work.

---

# 3.1 Project State

Project State is the canonical structured state of a Project.

It should contain both document/specification composition and artifact relationship records.

Conceptually, Project State may include:

- project metadata;
- Specification;
- Specification Sections;
- Product Artifacts;
- Artifact Relationships;
- Contributors;
- Contributions;
- Conversations;
- Reviews;
- Revisions;
- Handoff History;
- Provenance;
- Context References;
- Resources;
- Resource References.

The Product Knowledge Graph is an interpretation of the Product Artifacts and Artifact Relationships inside Project State.

The graph does not need to be stored as a separate canonical graph object or graph database in the MVP.

Specification Sections should organize artifact references and section content rather than exclusively owning artifacts.

This preserves document-first UX while keeping artifact identity and graph reasoning available.

## 3.2 First-Slice Data And Lifecycle Contract

The selected first slice materializes only the records needed for its owner-controlled first-use journey. The broader Project State model remains authoritative for later scope but does not need to be implemented in this slice.

| Record | First-slice contract |
|---|---|
| Project | Stable identifier; owner identifier; required title; optional description; active status; content locale; fixed starter identifier and version. |
| Specification | Stable identifier; Project identifier; materialized default section identifiers and ordering from the fixed starter. |
| Goal | Stable identifier; Project, Specification and canonical-section reference; `Goal` type; required non-whitespace title and content; `Active` status; creator and timestamps; current Revision reference. |
| Revision | Stable identifier; Goal identifier; immutable complete snapshot of the saved Goal; per-Goal version; saving owner and time. |

Project creation atomically creates the Project and its empty fixed Specification. It records neither a Product Artifact nor a Revision: it instantiates system-defined starter composition rather than saving authored Product Knowledge.

The Project owner identifier comes only from the current authenticated user's server-derived identity; a browser command does not supply or select it. That owner is immutable in the first slice. Only the matching owner may list, load or change the Project; a non-owner receives a privacy-preserving not-found result. Collaboration, delegated authority and ownership transfer remain deferred.

In the first slice, `contentLocale` is a Project-level well-formed BCP 47 language tag. The browser pre-fills the editable Content Language value from the current resolved Interface Locale; the Project-creation command carries the owner's chosen value and the server validates and persists it atomically with the Project. The empty Specification and its first Goal inherit that Project value. As later authoring capabilities add document-facing template scaffolding—section headings, guidance, examples and generated structural wording—that scaffolding uses Content Locale, while workbench controls, form labels and validation remain Interface-Locale text. Content Locale never automatically translates user-authored content. The first slice does not offer later locale changes, mixed-language content or artifact-level locale fields; a later interface-locale change does not affect existing Projects.

The canonical Specification Document Template is language-neutral: stable section identifiers, ordering, selection rules, artifact rules and semantic text keys do not change by Content Locale. Locale resources resolve every document-facing section title, guidance, placeholder, fixed block label and structural sentence used by that template. Full document authoring offers only Content Locales supported by the selected template, unless it presents an explicit visible fallback warning. It must not silently render a mixture of localized and default-language document scaffolding. A translation update behind unchanged semantic keys changes neither the canonical template structure nor a recorded Starter Version.

The first slice records `starterId` as `implementation-ready-web-app-specification.standard-web-app` and `starterVersion` as positive integer `1`. The server selects this fixed active starter; the browser does not select or submit either field. A Starter Version is an immutable definition of the template/preset pair, included section identifiers, ordering and language-neutral semantic label/guidance references used for a new empty Specification. Locale resources resolve those references for the Project Content Locale. Source definitions for recorded versions remain available for Project explanation; existing Projects do not auto-upgrade. A later source change that changes materialized starter output creates the next integer version, not a Project Revision or semantic-version classification. Translation changes behind unchanged semantic keys do not create a new Starter Version.

The browser may hold a private in-progress Goal draft. That draft is not canonical Project State and does not create a Goal or Revision. `Done editing` atomically creates the canonical Active Goal and its first Revision. A failed request leaves neither a partial Goal nor a partial Revision.

Every first-slice write carries an Operation ID. The system retains each command's outcome so a retry with the same Operation ID returns the original outcome without applying another canonical change. The same Operation ID with changed command content is rejected rather than treated as a new command.

The contract deliberately defers Goal relationships, additional Product Artifact types, later Goal revisions, revision diffs, draft resumption, Project archiving, impact propagation, collaboration and conflict resolution.

---

## 3.3 Project Archive And Import

A Project Archive is the portable, versioned representation of one complete Project's transferable canonical state. It is designed for backup and restore-as-a-new-Project, a user-directed move between accounts or deployments, and sharing an independent reusable starting point. It is machine-oriented structured data with managed Resource files; it does not need to be human-readable.

The archive preserves transferable Project knowledge and history, including specification composition, Product Artifacts, relationships, Revisions, provenance, reviews, collaboration-request records, Handoff History, known AI activity records and managed Resources. It excludes Conversations and Conversation Outcome Links, authentication and session material, credentials, operational records, runtime command outcomes, deployment configuration, personal drafts and user-specific preferences. External Resources remain links with their retained metadata rather than copied remote content.

An archive import validates its declared format version and complete structure, then creates a new locally owned Project. The server derives the importing user from the current authenticated session; it never trusts an archive as current authorization. Destination records receive new local identifiers and relationships are remapped consistently. The package retains opaque source identifiers only for import lineage and historical attribution; imported collaborators do not regain access or authority. Import does not merge with, overwrite or mutate an existing Project. A standalone Specification import, in-place restore, cross-deployment destructive move and clean history-free template/fork mode remain future decisions.

An Implementation Handoff Package is a different, one-way generated representation for implementation consumers. It may be partial and is never a Project Archive or an import source.

---

# 4. Project

A Project represents a product engineering workspace.

It may describe:

- a complete product;
- a new product idea;
- a major feature;
- an initiative;
- a product area;
- a redesign effort;
- a discovery effort.

A Project contains the product knowledge needed to reason about that scope.

## A Project should include

- a title;
- a description;
- a status;
- a workflow template;
- a content locale;
- a body of product knowledge;
- contributors;
- Conversations;
- decisions;
- revision history;
- activity history.

## Example

A project could be:

- “Product Engineering Workbench”
- “Customer Onboarding Redesign”
- “AI-Assisted Requirements Generator”
- “Partner Search Experience Redesign”

---

# 5. Product Knowledge

Product Knowledge is the structured understanding of a product.

It describes:

- why the product exists;
- who it serves;
- what problems it addresses;
- what goals it supports;
- what features it provides;
- how those features should behave;
- what constraints or risks must be considered;
- what decisions have been made;
- why those decisions were made.

Product Knowledge is the primary asset managed by the workbench.

Documents, exports and AI prompts are generated representations or uses of this underlying knowledge.

The user-facing Specification is the complete project documentation the user works on. Internally, a Specification should be understood as a document-like composition or view over structured Product Artifacts and related product knowledge.

---

# 6. Product Artifact

A Product Artifact is an atomic unit of product knowledge.

Product Artifact is the canonical term. After first use, this document may use Artifact as a short form when the meaning is clear.

Each artifact represents one meaningful piece of the product definition.

Artifacts should be structured enough to support review, traceability, AI assistance and export, but understandable enough to be edited by humans.

## Examples of Product Artifacts

- Vision
- Goal
- User Profile
- User Need
- Domain Concept
- Domain Rule
- Epic
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
- Decision, when recorded as structured product knowledge
- Assumption
- Open Question
- Test Scenario

## Minimum Artifact Set

The initial minimum artifact set should probably include:

- Vision
- Goal
- User Profile
- User Need
- Domain Concept
- Domain Rule
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
- Decision
- Assumption
- Open Question

This set is small enough to remain manageable, but broad enough to represent a product from initial intent to implementation-ready specification.

A User Profile represents either a Target User or a Persona through a required profile-kind field. It has a required title and short description, with optional flexible relevant-context facts and lists of goals and motivations, frustrations or pain points, and needs from the product. These profile-local lists do not create independent Product Artifacts. In particular, needs from the product may inform later User Need artifacts but do not replace them; their relationships are explicit rather than inferred. The model must not require fabricated demographics, a fictional biography or research evidence before a User Profile can be saved.

A User Need has one or more required explicit User Profile links, a required user-centred need statement and a required expected outcome. It does not need a separate title: the need statement is its readable document heading. A User Need may not be saved or revised with no linked User Profile. A profile-local need from the product never silently creates, changes or replaces a User Need; it may only become one through the ordinary explicit creation and save flow.

A Domain Concept is an independent Product Artifact representing one important real-world or business concept the product must understand. It has a required title and plain-language definition. It may include an optional `Key business attributes` list, whose entries each name and explain a business-meaningful attribute. This list does not prescribe database tables, column names, storage technology, physical data types, nullability, indexes or other schema choices. A concept's important states may be expressed in its attribute list until a more structured state model is justified. A Domain Concept receives an immutable project-scoped readable reference when created, such as `DC-001`, in addition to its internal artifact identifier. The reference does not change when its title or document placement changes, and is retained after archival and in saved Implementation Handoff snapshots. Domain Concepts may be explicitly related to other Product Artifacts and to Domain Rules.

A Domain Rule is an independent Product Artifact that governs valid domain meaning, state or behavior. It has a required title, kind, canonical rule statement and `Governs` list containing one or more Domain Concepts and/or Domain Relationships. Its required kind is either Business Rule or Invariant. A Business Rule expresses a product policy governing allowed actions, decisions or state transitions. An Invariant expresses a condition that must always hold for valid domain state. The canonical statement expresses the complete rule, including any conditions or exceptions; no separate exceptions field is introduced initially. A Domain Rule receives an immutable project-scoped readable reference when created, such as `DR-001`, in addition to its internal artifact identifier. The reference neither encodes the rule kind nor changes with document placement; it is retained after archival and in saved Implementation Handoff snapshots. A Domain Rule may link to the Functional Requirements and Acceptance Criteria that implement and validate it. It is distinct from a Functional Requirement, which specifies a required system behavior; a Non-Functional Requirement, which specifies a quality expectation; and implementation-level database constraints or schema design.

A Core Feature has a required title, concise description and one or more explicit User Need relationships that it `addresses`. It may belong to zero or one optional Feature Groups, which are section-owned presentation headings with a required title and optional short description. A Feature Group is not a Product Artifact, technical module or relationship type. It may contain zero or more Features; its order and Feature membership are document composition rather than Feature meaning. A Core Feature remains an independently versioned Product Artifact, and detailed behavior belongs in later User Stories, Use Cases, Requirements and Acceptance Criteria.

A User Story has one primary Core Feature, one primary User Profile, required Intent and required Benefit fields. Its profile must be chosen from the Feature's explicitly linked User-Need context. The User Story does not need a separate title: it is rendered from the structured profile, intent and benefit using Content-Locale document scaffolding. A Use Case has one primary Core Feature plus a required title, primary actor, goal, trigger, ordered main flow and outcome; preconditions and alternate flows are optional. Its actor is either a User Profile or a plainly named external or system actor. A Use Case may optionally link a User Story, but neither artifact is a required expansion of the other.

An Acceptance Criterion has one required primary validation target and optional additional explicit targets. A Core Feature, User Story, Use Case, Functional Requirement, Non-Functional Requirement, Domain Rule, Screen / View, User Flow or UI Requirement may be a target. This permits early observable acceptance evidence for a Core Feature before more detailed artifacts exist, while allowing later links to reuse the same criterion rather than duplicate it. A criterion uses either a Direct form with a required observable pass condition, or a Scenario form with required Given, When and Then fields; Then is its observable pass condition. A Direct criterion has no duplicate title. The `validates` relationship represents its explicit validation targets.

A Non-Functional Requirement is an independent Product Artifact that defines a measurable quality, constraint or service characteristic for explicitly selected product scope. It has a concise title, quality category, measurable requirement statement, one required primary scope target and optional additional explicit targets. The statement remains canonical and independently interpretable. Optional Measurement context may clarify the measurement event, conditions, baseline, or relevant source or standard, but does not replace Acceptance Criteria or a test plan. Whole Specification, Core Feature, Functional Requirement, Use Case, Screen / View, User Flow and UI Requirement are the initial eligible target set. The primary target supplies the NFR's main authoring and document context; additional targets allow the same quality expectation to cover related knowledge without duplicate artifacts. The initial fixed quality-category vocabulary is Performance, Reliability and availability, Security, Privacy, Accessibility, Compatibility, Usability, Compliance and Other; Other requires a short author-provided category label. Category supports description, filtering and review only: it does not create a workflow, technical module or document subsection. A Non-Functional Requirement receives an immutable project-scoped readable reference at creation, such as `NFR-001`, in addition to its internal stable artifact identifier. The reference is retained on archival, never reused or renumbered, and does not encode the NFR's category or document position. Prepared handoffs preserve included NFR references and saved Revision snapshots as part of their immutable package representation. A Non-Functional Requirement is distinct from a Functional Requirement, which defines behavior, and from a Functional Requirement's local Conditions and constraints, which only qualify that behavior.

User Story and Use Case are distinct artifact types.

A Non-Functional Requirement may be an Acceptance Criterion validation target. Its Acceptance Criteria relationships are explicit: missing coverage does not prevent the NFR's initial save but remains a visible coverage cue. Starting `Add Acceptance Criterion` from an NFR preselects it as the primary validation target. A criterion may validate related Functional and Non-Functional Requirements only where its observable evidence genuinely covers every linked requirement.

A Domain Rule may be an Acceptance Criterion validation target. Missing coverage does not prevent its initial save but remains a visible coverage cue. Starting `Add Acceptance Criterion` from a Domain Rule preselects it as the primary validation target. A criterion may validate a Domain Rule and related Functional Requirement only where its observable evidence genuinely covers both. Domain Concepts and Domain Relationships are structural context, not Acceptance Criterion targets.

They may appear together in a single `User Stories and Use Cases` document section because both describe user-facing behavior and interaction intent.

Functional Requirement and Non-Functional Requirement should be included in the minimum artifact set because the first Specification Document Template needs to produce implementation-ready specifications.

Domain Concept and Domain Rule should be included in the minimum artifact set because the `Data or Domain Model` section needs independently traceable domain structure and governing knowledge. The detailed representation of domain relationships, required artifact fields and readable references remains to be decided.

Assumption should be included because the first Section Catalog includes `Risks, Assumptions and Open Questions`, and assumptions are important context for implementation handoff.

Screen / View, User Flow and UI Requirement should be included because implementation-ready web app specifications need enough UX/UI structure to describe user-facing surfaces, interaction sequences, visual expectations, states, responsive behavior and accessibility expectations.

The MVP should not introduce lower-level design-system artifact types such as Design Token, Color, Typography, UI Component, Wireframe or Prototype.

Users may still record implementation-relevant UX/UI design guidance, such as visual intent, layout, color use, typography, spacing, shapes, elevation, component usage and states, within `UX/UI Design Requirements and Interaction Notes` or through external design-source references. Shared Design Guidance is structured, section-owned knowledge with three blocks: required Design direction, optional Reusable design conventions and optional Application guidance. It is not a Product Artifact.

Design direction is short prose describing visual character, hierarchy and the product experience it should support. Each Reusable design convention has a name, a precise value or rule, and intended use. The initial fixed document-facing headings are Color and surfaces, Typography, Layout and spacing, Shape and elevation, and Component conventions. Application guidance records concise preferences and avoidances, plus shared responsive or accessibility principles only when genuinely cross-cutting. Specific interface behavior remains a UI Requirement; measurable quality remains a Non-Functional Requirement. Authors may save useful Shared Design Guidance with only Design direction and are never required to invent values, breakpoints or a type scale.

The containing UX/UI section presents the three blocks directly. Authors may start a private draft from any block: Define design direction, Add convention or Add application guidance. Saving the first convention or Application guidance requires Design direction; when it is missing, the workbench preserves the original private draft while the author explicitly creates Design direction, then resumes the original draft. Saved conventions are edited or removed as structured section content. Design direction and Application guidance are edited in place; clearing the latter requires local confirmation. Shared Design Guidance has no separate management workspace, Product Artifact lifecycle or generic relationship model.

An Implementation Handoff may render the available Shared Design Guidance together with relevant Screen / Views, User Flows, UI Requirements, Resource References and linked quality expectations as a derived `design.md` companion. The file makes implementation-facing design context portable for human or AI consumers; it is not canonical Product Knowledge, a design-system replacement, or a reason to invent unspecified visual values.

---

# 7. Artifact Structure

Every Product Artifact should share a common conceptual structure.

## Common fields

Each artifact should have:

- a stable identifier;
- a type;
- a title;
- a short description or body;
- a status;
- creation timestamp;
- update timestamp;
- creator;
- last updater;
- relationships to other artifacts;
- provenance information;
- review state;
- current revision or revision history.

Artifact `title` is user-authored content. Artifact `type` is system-defined.

Product Artifacts do not need artifact-level localization fields for the MVP. User-authored artifact content should inherit the Project or Specification content locale.

## Artifact-specific fields

Some artifacts may require additional fields.

For example:

A Goal may include:

- Goal Success Criteria;
- priority;
- related vision.

A Goal Success Criterion is a Goal-owned structured child, not a Product Artifact. It has a required plain-language measurable statement and optional structured `measure`, `target` and `timeframe` qualifiers. The plain-language statement remains canonical; the qualifiers clarify it. A mismatch is an explainable attention cue, never a silent rewrite.

A Goal may contain zero or more Goal Success Criteria. Each criterion belongs to exactly one Goal and cannot exist without it. Goal Success Criteria have no independent lifecycle, relationships, provenance, collaboration or Revision history. Saving or removing one changes the parent Goal's complete Revision snapshot; confirming that an affected criterion still fits records local review evidence without silently changing its content. Archiving a Goal removes it and its owned criteria from active document work; restoring the Goal returns its complete current set of criteria together.

Goals are Product Artifacts in the ordered `Goals and Success Criteria` section. New Goals append at the end of that section. The document renders Goals and each Goal's Success Criteria with derived ordinals based on their current order; those ordinals are presentation only and never replace stable identities. `Move Goal up` and `Move Goal down` change document composition and renumber the display, but do not alter Goal meaning, owned criteria or their review state.

Goal Success Criteria are distinct from Acceptance Criteria. They identify evidence that a product outcome has been achieved; Acceptance Criteria validate specified system behavior.

A User Story may include:

- actor;
- need;
- expected value;
- acceptance criteria.

A Use Case may include:

- primary actor;
- secondary actors;
- trigger;
- preconditions;
- main flow;
- alternate flows;
- postconditions;
- exceptions.

A Functional Requirement may include:

- related feature;
- required behavior;
- business rule or system obligation;
- acceptance criteria.

A Screen / View is an independent Product Artifact. It provides a stable user-facing interface boundary for related User Flows, UI Requirements, visual Resource References and implementation handoff; it is not an implementation route, component tree, wireframe or frontend page architecture.

A Screen / View has a required Title and Purpose. Purpose explains what a person should understand, decide or accomplish in that interface context. It may include:

- a Key content and actions list, identifying important information and actions without prescribing component structure or detailed UI behavior;
- a Key states list, identifying meaningful user-facing states such as empty, loading, validation error, confirmation or permission-limited, each with a short explanation;
- relevant User Profile context when that distinction matters;
- visual Resource References, such as screenshots, mockups, wireframes, prototypes or design-file references, with optional visual-reference context such as represented state or viewport.

Detailed interaction, visual, responsive and accessibility obligations remain UI Requirements; journeys across views remain User Flows. Explicit relationships to Features, Flows, UI Requirements, Functional Requirements and Acceptance Criteria are decided separately from this initial field shape.

Each Screen / View receives an immutable project-scoped readable reference when created, such as `SV-001`, in addition to its internal artifact identifier. The reference does not change when the Screen / View is renamed, reordered, related differently or archived. Prepared handoffs retain included references and saved artifact snapshots; references may be used in User Flows, UI Requirements, Acceptance Criteria and derived `design.md` output without implying an implementation route or URL.

A Screen / View may `support` a Core Feature when it provides part of that capability's user-facing experience, and may `depend_on` a Functional Requirement when its meaning or availability relies on that required behavior. Acceptance Criteria may directly `validate` a Screen / View. A User Flow may explicitly `include` a Screen / View. `includes` is distinct from `part_of`: the same Screen / View may appear in more than one flow, so a flow is not its parent container. `includes` may later carry flow-specific metadata such as sequence position or relevant view state without making that metadata part of the Screen / View itself. UI Requirement-to-Screen / View relationships remain a decision within the UI Requirement model.

The UX/UI section presents Screen / Views in their own block and exposes `Add Screen / View`. Its private draft collects the required Title and Purpose and the optional initial fields. No Feature, Functional Requirement, User Flow or visual reference is required to save. Starting from a Core Feature preselects a `supports` relationship; starting from a Functional Requirement preselects `depends_on`. A saved Screen / View exposes ordinary edit and archive actions, existing `Add reference`, and target-preselected `Add Acceptance Criterion`. User Flow inclusion is authored later from the User Flow model rather than requiring a not-yet-defined artifact.

When a Screen / View changes or is archived, User Flows that `include` it and Acceptance Criteria that directly `validate` it become Stale. Its supported Core Features receive coverage/readiness cues rather than becoming Stale: a capability may remain valid when its known interface representation changes or disappears. A changed or archived Core Feature or Functional Requirement makes an affected Screen / View Stale. A changed or archived User Flow does not automatically make an included Screen / View Stale, because the Screen / View may remain meaningful independently or appear in another flow. A changed visual Resource Reference is a Revision of its attached Screen / View and follows this same downstream propagation. UI Requirement propagation remains deferred with that artifact's relationship model.

A User Flow is an independent Product Artifact describing how a person reaches a meaningful outcome across one or more interface contexts. It holds the user-experience journey's entry, decisions, feedback, recovery and outcome, and explicitly `includes` Screen / Views. It is distinct from a Use Case, which describes a structured actor-and-system interaction for a Core Feature, and from a Screen / View, which describes a stable individual interface context.

A User Flow has a required Title, primary User Profile, Entry context, Intended outcome and one or more ordered Journey steps. Entry context identifies the user-facing place or condition where the journey begins, rather than a technical trigger. Intended outcome states what the person should achieve or understand.

Each Journey step has:

- required **Action**, describing the user action or decision; an entry step may instead describe the person arriving at the flow;
- required **Surface**, selected from Screen / Views;
- optional **Relevant state**, naming a specific user-facing configuration such as empty, loading, validation error or confirmation; and
- required **Feedback and continuation**, describing what the person observes and how the journey proceeds.

Each step records the flow's explicit `includes` relationship to its selected Screen / View, with sequence position and, when supplied, relevant state as relationship metadata. Action and Feedback and continuation remain Journey Step content because they are unique to that flow.

User Flow may additionally record two distinct optional unhappy-path structures:

- **Intentional exits** for user-initiated cancellation, back navigation or abandonment, including the action, relevant preservation or discard behavior and resulting destination or outcome; and
- **Error recovery paths** for system-initiated failures or constraints, including the known condition, user-visible feedback, recovery or retry option and resulting outcome.

The model records only established user-visible failure behavior; it does not invent technical edge cases merely to complete the structure.

Each Journey step necessarily creates an `includes` relationship from its User Flow to the selected Screen / View. A User Flow may `support` one or more Core Features when the journey realizes part of those capabilities, and may `depend_on` Functional Requirements when it relies on their required system behavior. Acceptance Criteria may directly `validate` a User Flow. Its primary User Profile remains a structured required field, rather than a generic relationship. A User Story or Use Case may use `relates_to` when it genuinely supplies supporting context; no specialized relationship is needed. UI Requirement-to-User Flow relationship semantics remain a decision within the UI Requirement model.

Each User Flow receives an immutable project-scoped readable reference when created, such as `UF-001`, in addition to its internal artifact identifier. The reference does not change when the Flow is renamed, its steps are reordered, its included Screen / Views or other relationships change, or it is archived. Prepared handoffs retain included references and saved Flow snapshots; the reference may be used by UI Requirements, Acceptance Criteria, UX reviews and derived `design.md` output without implying an implementation route, analytics event or test-case identifier.

The UX/UI section presents User Flows in their own block and exposes `Add User Flow`. Its private draft collects the required fields, ordered Journey steps, and optional Intentional exits or Error recovery paths. At least one Journey step with a selected Screen / View is required to save. If the required User Profile or first Screen / View is missing, the workbench preserves the draft while the author explicitly creates it, then resumes with it selected. Journey steps may be added, edited, removed and reordered in the draft; their order controls `includes` relationship sequence metadata. Starting from a Screen / View preselects the first Journey step Surface. Starting from a Core Feature or Functional Requirement preselects optional `supports` or `depends_on` relationships. A saved User Flow exposes ordinary edit and archive actions plus target-preselected `Add Acceptance Criterion`.

A UI Requirement may include:

- related screen or flow;
- interaction behavior;
- visual expectation;
- state behavior;
- responsive behavior;
- accessibility expectation;
- keyboard and focus behavior;
- assistive-technology expectations for names, roles, states or status changes when relevant;
- accessible error, feedback or notification behavior;
- accessibility verification guidance;
- acceptance criteria.

Project-wide visual design guidance may be held as Shared Design Guidance in the containing `UX/UI Design Requirements and Interaction Notes` section rather than repeated in each UI Requirement.

A Risk may include:

- likelihood;
- impact;
- mitigation;
- affected artifacts.

The common structure ensures consistency, while artifact-specific fields allow each artifact type to express its own meaning.

## Artifact fields and artifacts

Structured fields do not automatically become Product Artifacts.

A field should become a Product Artifact only when it needs an independent lifecycle, review state, reuse, relationships, provenance or collaboration.

For the MVP, User Story and Use Case internals and Goal Success Criteria should remain structured fields or Goal-owned children rather than separate artifacts.

## Artifact-specific schemas

The MVP should support artifact-specific schemas, but these schemas should remain lightweight.

User Story and Use Case should be the most structured artifact types because their structure is part of their meaning.

Other artifact types may use a smaller number of optional structured fields plus flexible content.

Resources and Resource References are general project records rather than additional fields duplicated across every artifact type. A Resource Reference may be attached to a Specification, Specification Section or Product Artifact; a Screen / View uses it as the first specialized visual-reference case.

## Artifact templates

Structured artifacts may be edited or rendered through artifact templates.

An artifact template is a user-facing representation of an artifact schema. It may present structured fields as placeholders or document-like text.

For example, a User Story artifact may be rendered as:

```text
As a [actor], I want to [need], so that [benefit].
```

The template does not replace the artifact schema. It provides a friendly editing or rendering surface over structured artifact data.

---

# 8. Artifact Lifecycle

Product Artifacts have three mutually exclusive lifecycle states:

- Active
- Stale
- Archived

## Active

Active is ordinary canonical Product Knowledge. It makes no claim that the Artifact is new, mature, reviewed, complete or permanently correct. Creation and subsequent updates are represented by `createdAt`, `updatedAt` and Revision history rather than status labels.

## Stale

Stale means that a semantically relevant upstream change may have made an active Artifact inaccurate. The system records the triggering Revision and causal relationship path where available. Stale does not mean the Artifact is definitely wrong, and it does not create a new content Revision.

After review, the Project Owner may update the Artifact, which returns it to Active with a new content Revision; confirm it remains current, which returns it to Active with a recorded confirmation; leave it Stale; archive it; or create related Product Knowledge or an Open Question. Clearing Stale affects only the reviewed Artifact and never clears related impacts automatically.

## Archived

Archived means the Artifact is no longer active but is retained as historical evidence. It is excluded from active work and ordinary handoff composition, and it does not receive or relay new impact propagation. The Project Owner may restore an Archived Artifact to Active or hard-delete it through a separate retention operation. Hard deletion is not a lifecycle state; its retention, relationship and recovery semantics remain deferred.

## Evidence and attention outside the lifecycle

An edit-in-progress draft is private working input, not an Artifact lifecycle state. Review results, validation confirmations, coverage/readiness warnings, blockers and detected inconsistencies are evidence or attention signals rather than lifecycle states. A Project Owner may record a validation confirmation after a review, but `Validated` is not a lifecycle status or an implicit content lock.

---

# 9. Artifact Relationships

Artifacts should not exist in isolation.

Artifact Relationships describe how product knowledge elements depend on, support, refine or explain one another.

Relationships are what allow the workbench to reason across the product knowledge model.

Artifact Relationships should be first-class records.

An Artifact Relationship should be able to carry metadata, including source or provenance metadata.

Possible relationship sources include:

- manually created;
- AI-suggested;
- inferred from document structure;
- imported;
- derived from another artifact or template.

## Domain Relationships

A Domain Relationship is a structured, first-class Artifact Relationship record connecting two Domain Concepts. It is not a separate Product Artifact. It has a required source Domain Concept, readable relationship statement and target Domain Concept.

A Domain Relationship may record cardinality at either end. Cardinality is optional because it should clarify known domain structure, not compel unsupported precision, but the product must support recording it when it is known. For example, a relationship may express that a Customer holds zero or more Subscriptions, while each Subscription belongs to exactly one Customer.

Domain Relationships express product-domain structure, not database tables, foreign keys, join tables or storage implementation. A Domain Rule may explicitly govern one or more Domain Relationships.

## Example relationships

- A Goal supports a Vision.
- A User Need supports a Goal.
- A Feature addresses a User Need.
- A User Story is part of a Feature.
- Acceptance Criteria validate a User Story.
- A Risk affects a Feature.
- A Decision explains why a direction was chosen.
- An Open Question blocks validation of an artifact.
- Acceptance Criteria may be derived from a Functional Requirement.
- A Functional Requirement enforces a Domain Rule.
- A Domain Rule governs a Domain Concept or Domain Relationship.

## Minimum relationship types

The initial relationship model should include:

- supports
- addresses
- part_of
- validates
- enforces
- governs
- includes
- depends_on
- affects
- explains
- blocks
- derived_from
- relates_to

These relationship types should remain understandable to users and useful for product reasoning.

## Relationship type meanings

`supports` means an artifact contributes to or supports another artifact.

Example: a Goal supports a Vision.

`addresses` means an artifact responds to a need, problem or opportunity.

Example: a Feature addresses a User Need.

`part_of` means an artifact is part of a larger artifact or grouping.

Example: a User Story is part of a Feature.

`validates` means an artifact defines validation for another artifact.

Example: Acceptance Criteria validate a Functional Requirement.

`enforces` means a Functional Requirement specifies the system behavior that upholds a Domain Rule.

Example: a Functional Requirement enforces a Domain Rule that a Customer may hold only one active Subscription for the same Service.

`governs` means a Domain Rule constrains valid meaning, state or behavior of a Domain Concept or Domain Relationship.

Example: a Domain Rule governs the Customer–Subscription relationship.

`includes` means a User Flow explicitly uses a Screen / View as part of its journey. It is not containment: one Screen / View may be included by multiple User Flows. The relationship may carry flow-specific metadata, such as sequence position or relevant view state.

`depends_on` means an artifact depends on another artifact being true, available, resolved or decided.

Example: a Feature depends on an integration decision.

`affects` means an artifact may influence, constrain or impact another artifact.

Example: a Risk affects a Feature.

`explains` means an artifact provides rationale for another artifact.

Example: a Decision explains a Technical Constraint.

`blocks` means an artifact prevents another artifact from being validated, completed or implemented.

Example: an Open Question blocks a Feature.

`derived_from` means an artifact was generated, refined or derived from another artifact.

Example: Acceptance Criteria are derived from a Functional Requirement.

`relates_to` is a weak generic relationship used when no stronger relationship type applies.

---

# 10. Product Knowledge Graph

The Product Knowledge Graph is the network formed by product artifacts and their relationships.

It allows the workbench to answer questions such as:

- Why does this feature exist?
- Which goal does this user story support?
- Which user needs are not addressed by any feature?
- Which acceptance criteria validate this user story?
- Which artifacts may be affected if this goal changes?
- Which risks affect this feature?
- Which decisions explain this requirement?

The graph does not need to be visually represented at first.

It is first a conceptual model.

Later, it may support visualizations, impact analysis, traceability views, document generation and AI context assembly.

---

# 10.1 Artifact Change Impact Propagation

When a Product Artifact is updated or archived, the system should deterministically evaluate whether downstream artifacts may have been impacted.

This should be handled through ordinary system logic over the Product Knowledge Graph, not by AI as the primary authority.

The system should:

- record the artifact change as a Revision;
- traverse active, semantically relevant Artifact Relationships from the changed or archived artifact;
- identify downstream artifacts that may depend on, validate, derive from, belong to, or otherwise be affected by the changed artifact;
- resolve either a Stale result or a coverage/readiness warning according to the relationship-specific propagation rules;
- record why each artifact received an impact result, including the triggering artifact, triggering Revision and relevant relationship path when available;
- avoid infinite loops or repeated automatic outcomes when relationships are cyclic or overlapping, while retaining the distinct causal paths that explain an outcome;
- preserve archived artifacts for history and traceability rather than deleting dependency context silently.

Impact propagation is a caution mechanism, not a semantic judgment.

Marking an artifact Stale means:

"Something upstream changed, so this artifact may need review."

It does not mean:

"This artifact is definitely incorrect."

After reviewing a Stale artifact, the user should be able to:

- update it;
- confirm that it remains valid;
- leave it Stale;
- archive it;
- create or update related Product Artifacts;
- create an Open Question when the impact cannot yet be resolved.

AI assistance may be offered as a contextual action on Stale artifacts, such as requesting recommendations for what may need to change.

This should use existing Assistance Request Types and Response Shapes rather than introducing a new top-level Assistance Request Type in the MVP.

For example, the user may request AI recommendations that internally use Analyze Impact, Review, Improve or Suggest Alternatives and return Suggested Edits, Findings, Proposed Relationships, Proposed Artifacts, Questions or Summaries.

## Propagation traversal boundaries

Propagation starts from the triggering Revision and follows relationship-specific rules at each hop. An artifact becoming Stale does not, by itself, create a new generic propagation rule.

The system should allow reachability to govern the propagation scope rather than imposing an arbitrary depth limit. Every traversed relationship must still be semantically eligible for propagation.

`relates_to` is not an eligible propagation relationship. It may remain visible for navigation, human review and AI context assembly, but it must not create an automatic impact result or serve as a bridge to further automatic propagation.

Archived artifacts remain available as historical evidence. Other than the archival event that triggered the evaluation, archived artifacts should be ignored by propagation: they should not receive a new impact result and should not be traversed as active intermediaries.

For a single triggering Revision, the system should resolve one impact result for each active artifact. It should retain each distinct non-cyclic causal path discovered for that result, but it must not re-propagate through an artifact already evaluated for that Revision. This prevents cycles from creating repeated work while preserving the evidence needed to explain an outcome.

When multiple paths reach the same artifact, the system should resolve the applicable relationship-specific outcome once. When the competing outcomes are Stale and a coverage/readiness warning, Stale takes precedence, while the recorded evidence retains every causal path. This rule does not redefine the separate relationship-specific choice between Stale and Needs Review.

Path length may inform review priority or confidence. Direct impacts will usually deserve earlier attention than more distant impacts, but distance must not weaken a result that the relationship semantics require. A multi-hop path composed of strong propagation relationships may still make an artifact Stale.

## First-pass propagation rules

The MVP should distinguish two deterministic outputs:

- Stale propagation, meaning an artifact may no longer be accurate because upstream knowledge changed.
- Coverage or readiness warning, meaning an artifact may now be under-supported, unvalidated, unaddressed or blocked without necessarily being inaccurate.

First-pass relationship propagation rules:

| Relationship | Example | If Source Changes | If Target Changes |
|---|---|---|---|
| `supports` | Goal supports Vision | Maybe mark target Stale when target content aggregates or depends on the support. | Mark source Stale. |
| `addresses` | Feature addresses User Need | Usually create coverage/readiness warning rather than marking target Stale. | Mark source Stale. |
| `part_of` | User Story part_of Feature | Maybe mark parent Stale when parent content aggregates child content. | Mark source Stale. |
| `validates` | Acceptance Criteria validates Requirement | Usually create coverage/readiness warning rather than marking target Stale. | Mark source Stale. |
| `enforces` | Functional Requirement enforces Domain Rule | Create coverage/readiness warning on the Domain Rule rather than marking it Stale. | Mark source Stale. |
| `governs` | Domain Rule governs Domain Concept or Relationship | No automatic Stale propagation to the governed structure. | Mark source Stale. |
| `depends_on` | Feature depends_on Integration Decision | Usually no Stale propagation from dependent to dependency. | Mark source Stale. |
| `affects` | Risk affects Feature | Mark target Stale. | Maybe mark source Stale. |
| `explains` | Decision explains Requirement | Mark target Stale. | Maybe mark source Stale. |
| `blocks` | Open Question blocks Feature | Mark target Stale or create a coverage/readiness warning, depending on whether its content may be inaccurate. | Usually no Stale propagation. |
| `derived_from` | Acceptance Criteria derived_from Requirement | Usually no Stale propagation from derived artifact to source. | Mark source Stale. |
| `relates_to` | weak generic link | No automatic Stale propagation. | No automatic Stale propagation. |

The strongest automatic Stale propagation rules are:

- when an artifact changes, mark artifacts that `depend_on` it as Stale;
- when an artifact changes, mark artifacts `derived_from` it as Stale;
- when an artifact changes, mark artifacts that `validate` it as Stale;
- when an artifact changes, mark artifacts that `address` it as Stale;
- when an artifact changes, mark child artifacts that are `part_of` it as Stale;
- when an artifact changes, mark artifacts it `affects` as Stale.

The system should be more conservative for `supports`, `explains` and `blocks` because the correct result may depend on artifact type, relationship direction and whether the changed artifact provides rationale, aggregation or a blocking condition.

The system should not automatically propagate Stale through `relates_to` or use it as a traversal bridge.

When a supporting or validating artifact is archived, the upstream artifact may remain accurate but become less complete or less ready.

For example, if Acceptance Criteria that validate a Requirement are archived, the Requirement may still be accurate but may now need a coverage or readiness warning because it is no longer validated.

## Validated propagation scenarios

The first-pass propagation rules have been validated against these concrete scenarios:

| Scenario | Relationship Pattern | Deterministic Result | Rationale |
|---|---|---|---|
| Goal changes | User Need `supports` Goal; Feature `addresses` User Need; User Story `part_of` Feature; Requirement or Acceptance Criteria linked downstream | Mark User Needs and downstream Features, User Stories, Requirements or Acceptance Criteria Stale where their purpose or content depends on the changed Goal. | A Goal change may alter why downstream work exists or what success means. |
| Requirement changes | Acceptance Criteria `validates` Requirement; UI Requirement, Screen/View, User Flow, implementation guidance or tests depend on or derive from Requirement | Mark validating, derived or dependent downstream artifacts Stale. | Downstream behavior, validation and implementation guidance may no longer match the Requirement. |
| Screen / View changes or archival | User Flow `includes` Screen / View; Acceptance Criteria `validates` Screen / View; Screen / View `supports` Core Feature | Mark including User Flows and directly validating Acceptance Criteria Stale; create a coverage/readiness cue on supported Core Features. | A changed interface context may invalidate known journeys and evidence, while the supported capability may remain valid despite weakened interface coverage. |
| Screen / View validation chain | Core Feature; Functional Requirement; Screen / View with purpose, content/actions, state and visual reference; Acceptance Criterion validates view and behavior | A changed Screen / View makes its direct evidence Stale and gives the Feature a coverage/readiness cue; a changed Functional Requirement makes the Screen / View Stale. | The model keeps capability, system behavior, interface context and observable evidence distinct without requiring a route, component tree or User Flow before the view is useful. |
| Acceptance Criteria archived | Acceptance Criteria `validates` Requirement | Create coverage/readiness warning on the Requirement rather than automatically marking the Requirement Stale. | The Requirement may still be accurate, but it may no longer be sufficiently validated. |
| Domain Rule changes or archival | Functional Requirement `enforces` Domain Rule; Acceptance Criterion `validates` Domain Rule | Mark enforcing Functional Requirements and directly validating Acceptance Criteria Stale. | A changed or removed policy may mean the required system behavior and its evidence no longer match the governing rule. |
| Functional Requirement changes or archival | Functional Requirement `enforces` Domain Rule | Create coverage/readiness warning on the Domain Rule rather than automatically marking it Stale. | The governing policy may remain correct even when the known system behavior that upholds it is changed or absent. |
| Domain Concept changes or archival | Domain Rule governs Domain Concept; Domain Relationship has Domain Concept endpoint | Mark governing Domain Rules Stale and show a review cue on connected Domain Relationships. | A changed concept may alter the meaning of the policies that govern it and the structure that connects it. A Domain Relationship is not a Product Artifact, so it receives a review cue rather than a lifecycle state. |
| Domain Relationship changes or removal | Domain Rule governs Domain Relationship | Mark governing Domain Rules Stale. | A changed connection may alter the policy that constrains it. Normal downstream propagation then reaches enforcing Functional Requirements and validation evidence. |
| Domain-model policy chain | Customer, Subscription and Service Concepts; Customer–Subscription Relationship; Domain Rule governs structure; Functional Requirement enforces Rule; Acceptance Criterion validates both | A changed Relationship makes the Rule, enforcing Requirement and validation evidence Stale. An archived enforcing Requirement instead creates a coverage/readiness warning on the Rule. | The complete domain chain remains readable and traceable without introducing database terminology or confusing missing behavior with an inaccurate governing policy. |
| User Story changes | User Story `part_of` Feature; Acceptance Criteria, Requirements or UX artifacts validate, depend on or derive from User Story | Mark downstream Acceptance Criteria, Requirements or UX artifacts Stale when their content depends on the changed User Story. Mark the parent Feature Stale only when the Feature content aggregates or depends on that story. | A User Story change may alter behavior and downstream validation, but it does not always change the upstream Feature, User Need or Goal. |
| User Story archived | User Story `part_of` Feature; Feature `addresses` User Need; User Need `supports` Goal | Create coverage/readiness warnings for the parent Feature and possibly upstream User Need or Goal rather than automatically marking them Stale. Mark dependent or derived downstream artifacts Stale or orphaned. | Removing a User Story may weaken behavioral coverage without changing the meaning of the Feature, User Need or Goal. |
| Decision changes | Decision `explains` Requirement or Technical Constraint; other artifacts depend on the decision | Mark explained or dependent artifacts Stale when their rationale, constraint or behavior may have changed. | A changed Decision may invalidate the reasoning behind downstream artifacts. |
| Open Question resolved | Open Question `blocks` Feature, Requirement or validation | Mark blocked Artifact Stale when existing content relied on an assumption changed by the answer; otherwise create a coverage/readiness warning. | Resolution removes a block, but the affected Artifact may still need confirmation or update. |

These examples reinforce the distinction between Stale propagation and coverage/readiness warnings.

When the changed artifact alters the meaning, rationale or expected behavior of another artifact, Stale is appropriate.

When the changed or archived artifact removes supporting evidence, validation or coverage without changing the artifact's own meaning, a coverage/readiness warning is usually more accurate.

Child artifact changes or archival may create upstream coverage impact.

For example, modifying or archiving a User Story can affect whether its parent Feature is sufficiently specified and whether upstream User Needs or Goals still have enough behavioral coverage.

This should not automatically mark every upstream artifact Stale.

The system should prefer coverage/readiness warnings for upstream artifacts unless the upstream artifact's own content aggregates, summarizes or depends on the changed child artifact.

## Multi-hop propagation and revalidation

Multi-hop outcomes should be determined by the meaning of each relationship in the path, not by a generic cascade from every artifact already marked Stale.

For example, when a Requirement changes, related Acceptance Criteria may become Stale. If those Acceptance Criteria are part of a User Story, the User Story should ordinarily receive a coverage/readiness warning: its validation coverage may need review, but the User Story itself is not necessarily inaccurate. The User Story should become Stale only when a separate relationship path indicates that its own content depends on, derives from or aggregates the changed knowledge.

When a Project Owner reviews a Stale Artifact and confirms it remains current, the system returns it to Active and clears Stale only on that reviewed Artifact. It must not automatically clear related Artifacts or their impact results.

The system may instead suggest that users review active Artifacts whose recorded impact paths pass through the newly confirmed Artifact. This is a contextual action, not an automatic state transition: confirming one Artifact does not prove that every related Artifact remains current.

---

# 11. Workflow Template

A Workflow Template defines how product knowledge is organized for a specific way of working.

It may define:

- stages;
- expected artifact types;
- required artifacts;
- optional artifacts;
- artifact relationships;
- validation rules;
- recommended sequencing;
- AI assistance strategies.

The workbench should support different workflow templates without forcing a single product methodology.

## Product Engineering Stages

A Workflow Template may define an ordered catalogue of Product Engineering Stages. A stage has a stable template-local identifier, user-facing label, short purpose and display order. The initial `Implementation-Ready Web App Specification` template defines these stages:

1. `explore` — frame initial ideas, the opportunity and product intent.
2. `discover` — understand users, needs, evidence and relevant context.
3. `define` — establish goals, scope, non-goals, outcomes and product decisions.
4. `design` — shape UX/UI, domain or data models, technical approach and constraints.
5. `specify` — describe implementation-ready behavior, requirements, acceptance criteria and integration detail.
6. `validate-readiness` — review completeness, consistency, risks, open questions and readiness for implementation.
7. `handoff` — deliberately prepare selected product knowledge for an external implementation consumer.

Stages are a non-blocking orientation and organization layer. They are not Product Artifact or Collaboration Request lifecycle states, task or delivery states, readiness criteria, handoff eligibility rules, approvals or an enforced sequence. Product engineering is iterative: users may revisit any stage, and a stage never creates, assigns or automatically advances work.

When a Workflow Template uses stages, each Section Catalog entry declares one `primaryWorkflowStageId` and zero or more `contributingWorkflowStageIds`. The primary stage gives a section its main orientation; contributing stages acknowledge that the same knowledge remains useful elsewhere in the journey. A contained Product Artifact derives that orientation from its canonical Specification Section. Neither a section nor an artifact receives a separate mutable stage field in Project State, and a stage mapping does not change artifact content, lifecycle, provenance, Revision behavior, readiness validation or handoff preparation.

Stage-aware navigation, filtering or alternate Specification views may be added later, but the canonical document remains organized by its selected sections. A template may omit stages entirely; stage support must not be required for a valid Specification Document Template or Project Preset.

## User-facing template terminology

In the user experience, the template selected during project creation should usually be called a Specification Document Template.

Specification Document Template is more concrete for users because it describes what they are choosing: the structure of the specification document they intend to produce.

Workflow Template may remain useful as an internal or conceptual term when discussing sequencing, required artifacts, validation rules, contributor assistance and export behavior.

For the MVP, the product should provide one initial Specification Document Template: `Implementation-Ready Web App Specification`.

This template should be composed from a reusable Section Catalog and support presets such as:

- Simple Web Presence
- Standard Web App
- Complex Product App

Presets should select and classify sections as Required, Recommended or Optional for a given project type or complexity.

Small, medium and complex project choices should initially be modeled as presets within the first template, not as separate templates.

Additional Specification Document Templates may be added later when the structure or purpose of the specification is meaningfully different.

The first Section Catalog includes `User Stories and Use Cases` as one section. This section may contain both User Story and Use Case artifacts.

Core Features and Functional Requirements are distinct:

- a Core Feature is a user-visible capability or product area;
- a Functional Requirement is a specific behavior or obligation the system must satisfy.

## Example workflow templates

- Product Discovery
- Feature Decomposition
- Full Product Definition
- MVP Planning
- Requirements Refinement

## Important distinction

A Workflow Template does not define the internal development process of this repository.

It defines how users of the workbench structure their product engineering work.

---

# 12. Document View

The document-first user experience should be understood as a view over structured product knowledge.

The canonical product knowledge should be composed of artifacts and relationships.

The document view presents that knowledge as a coherent editable product document.

For the MVP, users should be able to create a project from a Specification Document Template, customize the selected sections and work on the resulting specification as if it were one large coherent document.

This means the document is not merely static text.

It is a human-friendly representation of the underlying product knowledge model.

## Implication

Users should feel like they are editing a coherent document, while the system preserves structured artifacts, relationships, statuses, conversations and provenance behind the scenes.

## Document editing and working drafts

An artifact may have an edit-in-progress draft while its current canonical Revision remains the version presented as Product Knowledge. An edit-in-progress draft is persistent and owned by the user working on it; it is not an Artifact lifecycle state and is not visible to other contributors as accepted knowledge.

Leaving the editing surface must preserve the working draft without creating a Revision. The user may later keep editing it, discard it or explicitly complete it. Only `Done editing` promotes the working draft to a new Revision and makes it canonical Product Knowledge.

This boundary prevents ordinary typing, scrolling or temporary navigation from creating history entries or triggering Artifact Change Impact Propagation.

The same draft boundary applies to a new Goal Success Criterion. `Done editing` saves it within a new Revision of its parent Goal; `Discard` removes only that private child draft. Removing a saved Goal Success Criterion likewise creates a new parent-Goal Revision, retaining it in earlier snapshots. A saved Goal may be Archived under the Artifact Lifecycle rules, while a Goal Success Criterion is removed rather than independently archived.

`Archive Goal` is a secondary Goal action that requires local explicit confirmation. It archives the Goal without creating a content Revision and removes its owned Goal Success Criteria from the active document at the same time. The active document does not retain struck-through archived Goals; an explicit archived/history view provides `Restore Goal`, which returns the Goal and its complete current set of owned criteria together.

Some Specification Sections own concise canonical prose rather than a Product Artifact. The initial `Product Overview` is such a section: it summarizes what is being created, who it serves, the problem or opportunity, and intended value without duplicating detailed Goals, Scope, Requirements or other Product Knowledge held elsewhere. Its template guidance is non-canonical. Its private draft and explicit `Done editing` boundary create a Revision of section content; a saved change does not infer relationships or propagate Stale state. `Clear Product Overview` uses local explicit confirmation, creates a section-content Revision and restores the empty template guidance. Section-owned prose supports ordinary paragraphs; richer formatting remains a later document-wide decision.

`Problem or Opportunity` is a structured section with two optional section-owned prose blocks: Problem and Opportunity. A Problem describes a current pain, limitation or unmet need; an Opportunity describes the improvement or value that addressing it could unlock without selecting a solution. At least one block must contain saved content when the section is required. Each block has its own private draft, `Done editing` section-content Revision, `Edit` action and locally confirmed `Clear` action. The blocks are not Product Artifacts and do not independently own lifecycle, relationships, provenance, collaboration or inferred impact propagation. Clearing the final saved block restores the empty guided section and makes it eligible for ordinary required-section coverage guidance.

`Non-Goals` is a structured section containing an unordered list of section-owned Non-Goal statements. Each saved item has one required plain-language statement defining an intentional boundary; its display order has no semantic meaning. A required Non-Goals section needs at least one saved item. New and edited items use private drafts; `Done editing` and a locally confirmed `Remove Non-Goal` action each create a section-content Revision. Non-Goals are not Product Artifacts and have no independent lifecycle, relationships, provenance, collaboration or inferred impact propagation. Removing the final saved item restores the empty guided section and makes it eligible for ordinary required-section coverage guidance.

`Target Users or Personas` contains User Profile Product Artifacts. Each profile has a required `Target User` or `Persona` kind, title and short description; it may contain flexible relevant-context facts plus profile-local lists of goals and motivations, frustrations or pain points, and needs from the product. It follows ordinary Product Artifact drafts, Revisions, lifecycle and explicit relationship rules. Needs from the product remain profile context, not substitute User Need artifacts; their future links are explicit and use ordinary relationship-based impact rules only once saved. A required selected section needs at least one active User Profile and otherwise participates in ordinary required-section coverage guidance.

`User Needs` contains an ungrouped list of User Need Product Artifacts. Each need explicitly links one or more User Profiles, states what those users need to achieve or resolve, and records the expected outcome. The section offers both `Add User Need` and `Add User Profile` at all times. Starting a need from a User Profile preselects that profile; starting from User Needs asks the owner to select one or more profiles. If no profile exists, the flow offers `Add User Profile` or cancel, preserving the private need draft and returning to it after the Profile is saved. A required selected User Needs section needs at least one active User Need and otherwise participates in ordinary required-section coverage guidance. User Needs use ordinary Product Artifact drafts, Revisions, lifecycle and explicit relationship-based impact rules.

`Scope` is a structured section with fixed section-owned In Scope and Out of Scope blocks. In Scope records the high-level product areas and bounded capabilities included by the current specification; Out of Scope records specific nearby capabilities, modes, integrations, data boundaries or operational boundaries explicitly excluded from it. Non-Goals remains the broader strategic layer, so a Scope block may refer to an existing Non-Goal rather than duplicate it. In Scope has saved content when Scope is required; Out of Scope is optional. Each block has a private draft and an explicit section-content Revision boundary. The blocks are not Product Artifacts and have no independent lifecycle, relationships, provenance, collaboration or inferred impact propagation. They support short paragraphs, unordered lists and ordered lists only when order is meaningful; nested lists, arbitrary headings and a general rich-text editor remain out of scope.

`Core Features` contains Core Feature Product Artifacts, optionally presented under Feature Groups. A saved Feature must have a title, concise description and one or more explicit User Need relationships it `addresses`. The section always offers `Add Core Feature`, `Add Feature Group` and `Add User Need`. Creating a Feature requires choosing one or more User Needs; if none exists, the flow offers `Add User Need` or cancel, preserving the private Feature draft and resuming it with the new Need selected after save. A Feature Group has a required title and optional short description. A group may have zero or more Features; a Feature may belong to zero or one group. Creating or editing a group, reordering groups or Features, or moving a Feature between groups creates a document-composition Revision only. Creating, editing or archiving a Feature follows ordinary Product Artifact draft, Revision, lifecycle and explicit relationship-based impact rules.

Contextual Related-Knowledge Creation is the reusable document-first pattern behind such prerequisite paths. When an author explicitly creates related knowledge from a local draft, the workbench places it in its canonical section, preserves the original private draft and resumes it with the newly saved relationship preselected. It never silently creates Product Knowledge, infers a relationship from wording, creates a task or forces a user into a separate workflow.

`User Stories and Use Cases` contains both independent Product Artifact types. The section always offers `Add User Story`, `Add Use Case` and `Add Core Feature`. Each draft first requires a primary Core Feature; if none exists, the flow offers `Add Core Feature` or cancel, preserves the original draft and resumes it with the new Feature selected after save. A User Story then requires one primary User Profile selected from its Feature's explicit User-Need context, Intent and Benefit. A Use Case requires its title, primary actor, goal, trigger, ordered main flow and outcome, with optional preconditions, alternate flows and related User Story. Use Case flows are controlled structural content, not a general rich-text editor. Both types use ordinary Product Artifact drafts, Revisions, lifecycle and explicit relationship-based impact rules.

`Acceptance Criteria` contains each Acceptance Criterion once as its canonical list. `Add Acceptance Criterion` begins a private draft by selecting Direct or Scenario form, then a required primary target and optional additional targets. A Core Feature, User Story, Use Case, Functional Requirement, Non-Functional Requirement, Domain Rule, Screen / View, User Flow or UI Requirement may be selected. If no eligible target exists, the flow offers `Add Core Feature` or cancel; creating it preserves and resumes the criterion draft with the new Feature selected. From a target artifact, `Add Acceptance Criterion` preselects that artifact as primary. The canonical list renders target labels, while every target may render its linked criterion contextually without duplicating it. Acceptance Criteria use ordinary Product Artifact drafts, Revisions, lifecycle and explicit relationship-based impact rules.

`Non-Functional Requirements` offers `Add Non-Functional Requirement` and no grouping actions initially. Its private draft collects quality category, a required explicitly selected primary scope target, optional additional targets, title, measurable statement and optional Measurement context. Whole Specification is eligible, but is never silently preselected when the draft begins in the section. From an eligible target, `Add Non-Functional Requirement` preselects that target as primary. A saved NFR follows ordinary Product Artifact drafts, Revisions, lifecycle and explicit relationship-based impact rules, and exposes ordinary edit and archive actions plus its target-preselected `Add Acceptance Criterion` path.

`Data or Domain Model` presents three fixed document blocks: `Domain Concepts`, `Domain Relationships` and `Domain Rules`. They are section presentation blocks, not additional artifact types or separate documents. The section exposes `Add Domain Concept`, `Add Domain Relationship` and `Add Domain Rule`; an author may begin with any of them. A Domain Concept draft collects its title, definition and optional Key business attributes. A Domain Relationship draft collects its source Domain Concept, readable relationship statement, target Domain Concept and optional cardinality. A Domain Rule draft collects its title, kind, statement and one or more governed Domain Concepts and/or Domain Relationships. Its document-facing Governs list is the projection of required outbound `governs` relationships, not duplicated relationship data. The workbench enforces only the prerequisites needed to save the current item: an unfinished draft is preserved while the author explicitly creates missing Domain Concepts or Domain Relationships, then resumes with new knowledge preselected. Starting `Add Domain Relationship` from a Domain Concept preselects it as the source. Starting `Add Domain Rule` from a Domain Concept or Domain Relationship preselects it in the Rule's Governs list. Domain Concepts and Domain Rules follow ordinary Product Artifact edit and archive actions. Domain Relationships are first-class relationship records, so they expose explicit edit and remove actions rather than artifact lifecycle actions.

When a saved Goal with existing Goal Success Criteria is edited, the Project Owner explicitly identifies the change as either a wording-only correction or a change to the Goal's intended outcome. A wording-only correction leaves its criteria unchanged. An outcome change creates a local per-criterion review state: the owner must confirm each criterion still fits, edit it or remove it. This is review evidence within the Goal, not an Artifact Lifecycle transition or automatic Stale propagation.

For the MVP, each Product Artifact type has a deterministic canonical Specification Section. New artifacts, including those created from a Conversation, are placed at the end of that section; the creation flow does not offer a placement choice. If the canonical section is not selected in the current Specification, the flow explicitly asks the user to add that section or cancel creation. It must not silently enable a section or create an unplaced artifact. Canceling at this gate makes no Project State change; in Conversation capture, it returns to the destination choice with the selected source messages intact. Once the user explicitly adds the section, that outline choice remains even if they later discard the unsaved artifact draft.

The document may offer `Move up` and `Move down` for an artifact within its current section. A saved reorder creates an ordinary Revision of document composition but does not change the artifact's identity, provenance, Artifact Relationships, lifecycle or Conversation Outcome Links. Drag-and-drop and moves between sections are outside the MVP.

`Functional Requirements` may organize Functional Requirement Product Artifacts under optional Requirement Groups. A group has a required title and optional short purpose, may contain zero or more requirements, and is a section-owned presentation heading rather than a Product Artifact, technical module or relationship type. A requirement may remain ungrouped or belong to one group; nested groups are not supported initially. Creating, editing or reordering a group, reordering requirements, or assigning a requirement to a group changes document composition only. It does not change the requirement's identity, meaning, relationships, lifecycle, impact state or durable reference.

Each Functional Requirement is an independent leaf Product Artifact with a required primary Core Feature, concise title and one independently testable requirement statement. It may additionally link other Core Features explicitly where the same behavior genuinely supports more than one capability; those links are never inferred from similar wording or shared Requirement Groups. It may include a flat optional Conditions and constraints list only to qualify that same behavior. Entries have no separate Condition or Constraint classification, and no type is inferred from their wording. When an entry introduces independently changeable or testable behavior, a distinct outcome or a cross-cutting rule, it is saved as a separate Functional Requirement rather than nested content. A requirement follows ordinary drafts, Revisions, lifecycle and explicit relationship-based impact rules. Its Acceptance Criteria relationships are explicit; lack of linked acceptance coverage does not prevent its initial save, but remains visible as a coverage cue for later authoring and handoff readiness.

The `Functional Requirements` section offers `Add Functional Requirement`, `Add Requirement Group` and `Add Core Feature`. A requirement begun from the section is initially ungrouped; one begun from a Requirement Group is associated with that group. Every requirement draft requires a primary Core Feature. If no Core Feature exists, the flow offers `Add Core Feature` or cancel, preserving the private requirement draft and resuming it with the newly saved Feature selected. A saved requirement exposes its ordinary edit and archive actions plus `Add Acceptance Criterion`, which begins the ordinary criterion draft with that requirement preselected as its primary validation target.

Each Functional Requirement receives an immutable, project-scoped readable reference at creation, such as `FR-001`, in addition to its internal stable artifact identifier. The reference is retained on archival and never reused. Any requirement-group or document-outline numbering is derived from the current composition and may change when authors insert, move or reorganize content; it is not a requirement reference. A successful Implementation Handoff records the included requirements' stable references and saved Revision snapshots in its immutable package representation, alongside the outline as rendered at preparation time. Later composition or requirement changes do not alter that historical handoff event.

## Deterministic next-step guidance

The workbench may derive user-invoked next-step guidance from Project State. A Guidance Item is a derived view, not a persisted Product Artifact, task, workflow state or AI Contribution.

For the first pass, the derivation uses only explicit information: the current user's Edit-in-progress Drafts; active `blocks` relationships from Open Questions; active Stale and coverage/readiness impact outcomes; Goal Success Criteria awaiting local review after an owner-identified Goal outcome change; Goals with no Goal Success Criteria; and required selected sections with neither section content nor active contained Product Artifacts.

Guidance must identify its underlying basis, remain optional and never create, assign or apply work automatically. The priority order is draft, blocker, impact review, Goal Success Criterion coverage, then empty required-section coverage. A Goal with several affected criteria appears as one parent-level Guidance Item that navigates to its local review state. It should not infer other semantic gaps or missing relationships without an explicit template or validation rule.

## Handoff preparation and readiness

A Handoff Preparation Preference is user-specific application state remembered per user, Project/Specification and Handoff Profile. It may include the last selected handoff scope, the Handoff Package Role designation of selected knowledge, whether to validate readiness before preparation, and whether to include the resulting readiness report in the package. It is not shared Project Knowledge and does not alter canonical Project State.

When enabled for Prepare Handoff, Implementation Handoff Readiness is a deterministic assessment of the selected scope and its direct external dependencies. Its outcome is `Ready`, `Ready with Caveats` or `Not Ready`, based on explicit Project State rather than an AI judgment. The package preparation result remains separate: a meaningful scope may still produce `Prepared` or `Prepared with Caveats` when readiness is Not Ready. When readiness validation is not run, the package result remains `Prepared`; the distinct validation-state field records that no readiness assessment occurred. Human-readable History and preparation confirmation combine those fields as `Prepared - readiness validation not run`, without introducing a third package-result value. Insufficient product definition prevents preparation of a responsible package even when the user disables readiness validation. For the MVP `Implementation Handoff` profile, a meaningful feature-centered scope includes an active Feature, at least one explicitly related active Functional Requirement and one or more active Acceptance Criteria such that every included Functional Requirement is explicitly validated by at least one criterion. A meaningful UX/UI-centered scope includes active Screen/View artifact(s), an active User Flow explicitly including those views, related active UI Requirement(s), and active underlying Functional Requirement(s) with Acceptance Criteria validating each included requirement. A meaningful integration-centered scope includes active External Integrations section content identifying the external system and its purpose, explicit integration behavior, related active Functional Requirement(s), and Acceptance Criteria validating each included requirement. A meaningful data-model-centered scope includes Data or Domain Model section content identifying relevant entities and explicit relationships, at least one domain rule or invariant governing them, related active Functional Requirement(s), and Acceptance Criteria validating each included requirement.

When the user disables readiness validation, the workbench does not calculate or present a readiness outcome, generate `READINESS_REPORT.md`, or substitute a separate non-blocking caveat summary. The package-boundary preview instead states that readiness validation was not run. Every package README also includes a concise readiness statement: the evaluated outcome when validation ran, or `Readiness validation was not run` when it did not. This direct-handoff statement is disclosure of the omitted assessment, not a readiness outcome or substitute validation result. Ordinary package content still represents included Risks, Assumptions, Open Questions, Direct External Dependencies and other selected Product Knowledge; that truthful export is not a readiness judgment. Scope eligibility and meaningful-definition checks remain non-optional preparation safeguards.

The README begins with package title and compact preparation metadata, then presents its concise summaries in this order: Package boundary, Readiness, and—only when handoff disclosure is enabled—Known AI activity. A final `Start here` section directs consumers to the implementation brief, specification files and manifest. This ordering preserves a scannable package entry point without duplicating the readiness report or implementation brief.

For an evaluated `Not Ready` handoff with an included readiness report, the README presents package result `Prepared with Caveats` in its preparation metadata and `Readiness outcome: Not Ready` in its Readiness section. It states that the selected scope is meaningful enough to hand off but known blocking conditions remain, then links to `READINESS_REPORT.md` for blockers, caveats and recommended follow-up actions. It does not enumerate individual blockers in the README.

For evaluated `Ready` and `Ready with Caveats` handoffs, the README uses the same separation. `Ready` uses package result `Prepared` and states `Readiness outcome: Ready` followed by `No blockers or implementation caveats were identified for the selected scope.` `Ready with Caveats` uses package result `Prepared with Caveats` and states `Readiness outcome: Ready with Caveats` followed by `No blocking conditions were identified, but known caveats require attention during implementation.` When `READINESS_REPORT.md` is included, either outcome may link to it for the evaluated scope or details; when it is not included, the README omits the link. Individual caveats remain in the report or ordinary package content rather than being duplicated in the README.

The README uses the same fixed layout for every readiness state. Its compact preparation metadata contains package result, and its Readiness section contains at most the applicable state label and concise explanation. A `Ready` handoff is `Prepared` with no blockers or caveats; a `Ready with Caveats` handoff is `Prepared with Caveats` with non-blocking caveats; a `Not Ready` handoff is `Prepared with Caveats` with blocking conditions; and a direct handoff is `Prepared` with `Readiness validation was not run`. A report link appears only when `READINESS_REPORT.md` exists.

For a direct handoff whose disclosure destination includes handoff but whose included scope has no known AI activity, the README presents the independent statements `Readiness validation was not run` and `No known AI activity is recorded for the included scope.` The AI statement retains the standard limitation: it covers activity known to the workbench or voluntarily declared, and does not establish final-text authorship or detect undisclosed external AI use. The manifest records readiness state `not_run`, no readiness report and the included no-known-AI disclosure state; Handoff History retains the corresponding compact summaries.

For a direct handoff whose enabled handoff disclosure has known included-scope AI activity, the README instead states `Known AI activity is recorded for the included scope` with the included entry count and a link to `manifest.json` as the authoritative disclosure record. It retains the same standard limitation and does not name individual requests, contributors, prompts, assembled context or responses. The manifest carries scoped entry details already defined for handoff disclosure; Handoff History retains only the compact included entry count alongside its direct-handoff readiness state.

The same concise disclosure pattern applies to evaluated handoffs. An evaluated `Not Ready` and an evaluated `Ready with Caveats` handoff may both have package result `Prepared with Caveats`, but their immediately adjacent Readiness sections state their distinct outcomes and standard explanations. When enabled disclosure has known included-scope activity, both show the entry count and manifest link. An evaluated `Ready` handoff with no known included-scope activity instead says so with the standard limitation. Package result, readiness outcome and AI disclosure remain independent manifest and Handoff History fields.

An optional Readiness Report is an exported snapshot of that assessment. It is not a Product Artifact or lifecycle state.

Each successful package preparation creates an immutable Handoff History event. Its manifest-derived summary records whether readiness validation ran. When it ran, the event records the resulting readiness outcome; when it did not, the event explicitly records `Readiness validation not run` rather than a blank, inferred `Ready` result or a substitute caveat summary. The summary also includes the selected AI-use disclosure destination, whether a disclosure was included, disclosed-entry count, whether no known activity was recorded for included scope and the standard trace-limit caveat. It does not retain entry-level AI trace detail, raw prompts, raw responses or a live link to current trace state. Later scope changes, including moving integration knowledge from Supporting Context into a new Integration Definition Scope, are evaluated as current handoff state and never alter an earlier event. If the newly expanded scope satisfies every applicable meaningful-definition rule, a later preparation creates a new Handoff History event; if it does not, no new event is created. The MVP does not compare the events as package diffs.

For every evaluated outcome, readiness-report inclusion remains a project-owner preparation choice. It does not change package result or readiness outcome. The manifest records whether `READINESS_REPORT.md` was included, and Handoff History retains that compact immutable inclusion state. The README links to the report only when it exists; when omitted, it preserves the same concise readiness statement without additional omission prose.

For a mixed-scope handoff, the selected knowledge includes explicit Definition Scope or Supporting Context designations. Each Definition Scope activates its applicable meaningful-product-definition rule, while Supporting Context explains, constrains or caveats a Definition Scope without activating another rule. Definition Scope rules compose conjunctively. A shared Functional Requirement or Acceptance Criterion satisfies more than one Definition Scope only through explicit relationships.

For a partial handoff, the manifest is the authoritative machine-readable record of the package boundary. It identifies the Definition Scope and Supporting Context entries, Direct External Dependencies, and directly related knowledge intentionally outside the package. The combined specification and section files contain only the included scope, labeled by role. They must not claim to be the complete Project Specification. Omitted knowledge is recorded only when it is directly related and relevant to understanding the boundary; the model does not represent the rest of the Project as an exhaustive omission list.

---

# 13. Contributor

A Contributor is any human or AI participant that can contribute to the project.

A contributor may:

- create knowledge;
- edit artifacts;
- review artifacts;
- ask questions;
- answer questions;
- suggest improvements;
- identify inconsistencies;
- propose decisions;
- generate draft content.

Contributors may be human users or AI contributors.

The model should not assume that all contributors are human.

The project owner should be able to request assistance from contributors based on the capabilities required for the requested action.

For the MVP, human collaboration should be asynchronous and transactional rather than real-time. Contributors should respond to scoped requests instead of directly editing canonical project knowledge.

Contributor availability should be interpreted differently for human and AI contributors.

For human contributors in the MVP, availability is invitation-gated. A human contributor becomes available for project collaboration only after being invited, completing onboarding if needed and accepting the invitation.

For AI Contributors in the MVP, availability is personal to the human user invoking assistance. That user must have enabled usable Bring Your Own AI credentials and a selected Personal AI Assistant, and the requested action must be permitted by applicable Project settings. Another collaborator's AI credentials or configured assistants are not available to the current user. AI Contributors do not require the same invitation and acceptance flow as human collaborators.

Availability is deliberately not live presence, calendar time, willingness, capacity, workload or response-time information. The MVP neither labels people as online, busy or free nor ranks, assigns or redistributes requests from that information.

---

# 14. Capability

A Capability describes what a contributor can help with.

Capabilities are more precise than roles.

For example, a contributor may have capabilities such as:

- Product Strategy
- Requirements Analysis
- UX Review
- Accessibility Review
- Architecture Review
- Risk Analysis
- QA Review
- AI Draft Generation
- Consistency Analysis

Capabilities help the Project Owner select an appropriate available contributor, whether human or AI. They may provide an exact, related or unstated fit for the requested Assistance Request Type, scope and Review Lens, but remain explainable, non-binding guidance rather than an automatic routing or assignment rule.

## Example

Instead of asking:

“Send this to a reviewer.”

The workbench could ask:

“Request a UX Review and Requirements Analysis for this feature.”

Capabilities should support collaboration on different scopes, including a whole specification, a document section, a Product Artifact or selected content.

---

# 15. Contribution

A Contribution is any meaningful action performed by a contributor.

Examples include:

- comment;
- question;
- answer;
- review;
- suggestion;
- proposal;
- decision;
- artifact creation;
- artifact update;
- AI generation;
- AI analysis.

Contributions should be traceable so that users can understand how product knowledge evolved.

For the MVP, many contributions should originate from Collaboration Requests.

When a Contribution is submitted through a human user's configured AI Contributor, or when a human contributor voluntarily discloses that external AI assistance was used, that participation should be recorded in the known AI activity trace and remain inspectable by the project owner. Its automatic disclosure to other workbench users or handoff consumers follows the project-owner AI-use disclosure setting.

Undisclosed external AI use by a human contributor cannot be reliably detected or prevented by the workbench.

A Collaboration Request should include an Assistance Request Type.

An Assistance Request Type describes what kind of help the requestor wants. It is distinct from Capability:

- Assistance Request Type answers: "What kind of help is being requested?"
- Capability answers: "Who or what is qualified to provide that help?"

Initial MVP Assistance Request Types:

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

The available Assistance Request Types should depend on request scope, artifact type, artifact maturity, availability of an eligible recipient path and applicable Project settings. Known capabilities may guide recipient selection after a type is chosen, but do not by themselves determine which types appear or which eligible available candidate the owner may select.

`Validate Readiness` is available for the whole Specification, an eligible Specification Section or an active Product Artifact. An eligible Section has non-whitespace section content or an active contained Product Artifact. It is unavailable for selected content because a text fragment lacks the structural boundary needed for a readiness judgment; the requestor may instead select its containing Artifact or Section. An incomplete active Artifact remains a valid scope, but an insufficient-context result cannot make a positive local-readiness claim.

Selecting `Validate Readiness` and an eligible scope derives a non-persistent Readiness Fact Check Set preview in the local composer. The set checks only explicit Project State rules: scope structure, template-declared content expectations, active or Stale status, explicit relationships and validation coverage, known blockers and direct dependencies. Each result identifies the applied rule and affected knowledge as `Satisfied`, `Attention needed`, `Not applicable` or `Cannot determine`. Immediately before explicit submission, the system reruns the set and retains the resulting evidence in that Request Cycle's immutable recorded context for the selected human or AI recipient. It does not silently refresh after submission; an explicit Reopen and resubmission creates a new cycle snapshot while retaining earlier evidence. A Fact Check Set is not a Contribution Response, readiness verdict, score, routing or blocking rule, Product Knowledge change, task or Handoff Profile evaluation.

Request Feedback and Review should remain distinct.

Request Feedback is open-ended and comment-oriented. It asks a contributor to react, identify concerns, ask clarifying questions and suggest improvements.

Review is structured and criteria-oriented. It asks a contributor to evaluate the target against a specific lens, standard or capability.

Review should be treated as a composite Assistance Request Type.

A Review may include multiple Check Types. A Check Type is a focused evaluative activity, such as:

- Gap Check
- Inconsistency Check
- Ambiguity Check
- Testability Check
- Feasibility Check
- Alignment Check
- Risk Check
- Readiness Check

Some focused Assistance Request Types may correspond directly to Check Types.

For example:

- Find Gaps may run a Gap Check.
- Find Inconsistencies may run an Inconsistency Check.
- Analyze Impact may run an Impact Analysis.
- Validate Readiness may run a Readiness Check.

This allows users to request narrow assistance when they know what they need, while still allowing a broader Review to orchestrate multiple checks.

A Review may also have a Review Lens, such as Requirements Quality, UX Quality, Accessibility, Security, Testability or Implementation Readiness.

A Collaboration Request should identify:

- the requestor;
- one selected requested contributor, with relevant capability when applicable;
- the Assistance Request Type;
- the Request Brief;
- the scope of the request;
- the context needed to respond;
- the applicable availability or eligibility condition;
- the request status.

For the MVP, a Collaboration Request has exactly one selected recipient. Recipient selection evaluates three distinct dimensions. **Eligibility** is the structural boundary: a human candidate must be a Project Collaborator rather than the Project Owner, while an AI candidate must be the requestor's own assistant and permitted by Project settings. **Availability** determines whether an eligible candidate can be selected now: a human becomes available on accepted invitation, while an AI assistant must be enabled and usable. **Capability** describes known fit for the requested Assistance Request Type, scope and optional Review Lens. It may explain and guide the requestor's choice, including an exact, related or unstated fit, but does not automatically route, rank or exclude an otherwise available eligible candidate.

The recipient selector groups selectable candidates as **People**—accepted Project Collaborators—and **My assistants**—the requestor's enabled, usable Personal AI Assistants. It may show concise capability guidance beside each candidate. A configured but currently unusable assistant may appear as a non-selectable `AI assistance unavailable` state without revealing provider, model, credential, credit or detailed failure information. Pending invitees, non-collaborators, the owner as a human recipient and another user's assistant do not appear as selectable candidates. Initial request creation is available only when at least one eligible and available recipient exists. Otherwise **Request collaboration** and **New request** are disabled with a compact generic explanation; no composer, transient scope or type selection, Request Brief or Draft begins. Invitation and assistant configuration remain outside this flow.

Capability and availability may guide the requestor's choice, but they do not create a capability-only queue, broadcast or multi-recipient request. When multiple perspectives or an evolving shared context are needed, the requestor uses a Conversation instead.

The Request Brief is the requestor-authored framing of the specific help, question or desired outcome. It is required before a request may be submitted. The Assistance Request Type identifies the kind of help sought; the Request Brief identifies what the selected recipient should address within the request's scope.

A Project Owner may start a standalone request from the Specification, a Section, a Product Artifact or selected content only when at least one eligible and available recipient exists; each contextual entry then establishes a pinned corresponding scope. The Project's Collaboration Requests list likewise offers its scope-first `New request` path only under that condition, defaulting to the whole Specification and allowing deliberate Section or Product Artifact selection through the outline. This list is the request's canonical Project-scoped workplace. It is one role-aware, paginated list: **Requests you created** for the Project Owner, including their private Drafts, and **Requests for you** for a Project Collaborator, normally restricted to requests where they are the selected human recipient. After Reopen, a recipient continues to see the previously shared request as a frozen, read-only record until resubmission. If a Declined request is instead reassigned, its former recipient retains the frozen Declined cycle in **Requests for you** while the new cycle is visible only to the owner and replacement recipient.

The default list applies no lifecycle or response-handling filter beyond that role boundary and sorts by **Last updated — newest first**. For the owner, Last updated changes when the request has a meaningful update: Request Brief edit, submission, lifecycle transition including AI On Hold or resume, Contribution Response submission, or explicit Acted On handling. Automatic acknowledgement on deliberate response access is a read marker rather than a meaningful list update, so it does not change Last updated or reorder the request. For a collaborator, it is the newest meaningful request event visible to that collaborator. A private Brief edit in a reopened Draft therefore updates the owner's list only; Reopen and resubmission update both viewers' lists. For a former recipient's frozen Declined record, the displayed status and Last updated value remain Declined and the decline event; reassignment and later new-cycle activity do not appear or reorder it. Opening or viewing a request without fully rendered response content does not change it. The list supports search across the Request Brief, Assistance Request Type, scoped-source label and participant names. The compact MVP filter set is Request status, Contribution Response handling status, Assistance Request Type and scope kind; the owner may additionally filter by recipient. The available sort choices are Last updated newest first, Last updated oldest first, creation newest first and Request Brief A–Z. It is searchable, filterable and sortable rather than divided into separate status lists, lifecycle columns or a Contribution Response workspace.

The list resolves its role boundary first, then applies search and all selected filters together, sorts the resulting records and finally paginates them. The MVP page size is 25 requests. Changing search or filters returns the user to page one and shows the matching-result count. Search covers only the current request surface visible to that user; it does not search Contribution Response bodies, prior-cycle content or private reopened-Draft changes. Contribution Response handling filters apply only to the current Request Cycle; retained earlier responses remain available in request detail but do not create history-filter matches. Equal visible sort values are ordered deterministically by creation time and then an internal stable identifier.

Each compact row identifies the Request Brief, Assistance Request Type, scoped source, other party, labelled Request status and concise last-update event. When a Contribution Response exists for the current request cycle, its separately tracked handling status is a labelled field of that same row, for example `Request: Responded · Response: Submitted`; it may be combined with Request status to find responses needing review. If a request has been reopened and an earlier response is retained as evidence, the row labels that distinction explicitly, for example `Request: Draft · Previous response: Acted On`, rather than implying that the retained response belongs to the reopened cycle. The request detail keeps the full Brief, immutable recorded context, lifecycle history, response content and response-handling actions together. A future home or cross-project surface may summarize attention across Projects and route the user back to the relevant Project, but it does not create, manage or become an independent workplace for requests. The creation interaction locally and progressively collects Assistance Request Type, one recipient and Request Brief, then shows a derived, read-only and explainable context preview. Scope, type and recipient remain provisional until a Request Brief is written or edited; that event creates the private Draft. Contextual scopes stay fixed to their source, while a scope chosen from the request list may be revised before first submission. The selected recipient, type and brief may also be revised before first submission. The final explicit action is `Submit request` for an accepted Project Collaborator or `Submit and ask` for the owner's own assistant. Conversation-to-request creation or linking remains a lower-priority MVP stretch path.

Request detail presents Request Cycles newest first. Its header identifies the Brief, scope, type, other party, labelled Request status and visible last-update event. The current cycle is expanded and presents its immutable recorded context plus either its submitted Contribution Response and labelled handling status, or a compact current state such as awaiting response, response in progress, Declined, Cancelled or AI assistance unavailable. When the requestor deliberately opens fully rendered current-response content for the first time, the response becomes Acknowledged automatically; a retained response does so only when the requestor expands and fully renders that response. A list row, compact preview, notification or loading state does not acknowledge it. This automatic read marker does not alter Last updated, reorder the list or create a lifecycle-history event. Private human response drafts are never visible to another participant. For an AI request, the owner sees only that compact state while the request is In Progress or On Hold, never streaming or incomplete assistant output. Any incomplete assistant working state is private to the assistant solely for a best-effort resume; it is not response content, a lifecycle-history item or canonical Product Knowledge. Earlier cycles are collapsed summaries by default; each summary identifies the terminal outcome, prior Brief snapshot and response status when applicable. Expanding one immediately shows that summary and loads the complete immutable historical snapshot—Brief, recorded context and response beneath it—on demand. The detail shows an inline loading state and retry on retrieval failure, and caches an expanded snapshot only for the current detail session. Historical content is retrieved as that cycle's stored immutable snapshot, never reconstructed from current Project State.

A submitted Contribution Response appears as one response surface. An optional Summary is shown as a compact overview; its discrete items follow in contributor order, each labelled with its Response Shape and, for a Finding, its Finding Type. A related Suggested Edit or Proposal is visibly linked to the Finding it addresses without becoming a child workflow or being hidden from the response sequence. This presentation does not create a separate Findings inbox, proposal workspace, task, priority, assignee or per-item completion model.

The Project Owner as requestor may explicitly dismiss an individual response item as not pursued. The item remains visible as dismissed evidence, with an optional rationale; dismissal does not delete it, reject its contributor, alter Product Knowledge, create a lifecycle-history event or mark the containing response Acted On. From any item, the owner may open an appropriate ordinary private creation or editing draft—for example, reviewing a Suggested Edit in its target content, or starting a draft for a proposed Artifact, Relationship, Decision or Open Question. The item never creates or applies that draft automatically, and only the owner's ordinary explicit save creates a Revision. The requestor may explicitly mark the entire response Acted On after any mix of consideration, dismissal or separate crystallization; this remains a response-level handling judgment and does not require every item to be dismissed, a linked Revision or a note.

Request detail records concise lifecycle milestones only: submission, start, response, decline, cancellation, On Hold, resume, reopen and explicit Acted On handling. Automatic acknowledgement and item dismissal remain visible response-detail state rather than lifecycle-history events. The detail does not record per-keystroke Brief edits, become a general activity feed or create a chat surface.

A Collaboration Request has these MVP statuses: Draft, Submitted, In Progress, Responded, Declined and Cancelled. `On Hold` is an additional status only for an AI-targeted request that cannot currently proceed because assistant processing was technically interrupted or its owner's AI assistance became unavailable. An initial Draft is private to the requestor. After Reopen, the selected human recipient continues to see the previously shared request and response evidence as a frozen, read-only record while the new Draft Brief and any draft-context changes remain private until resubmission. Explicit submission makes the request Submitted and available to its selected recipient. A human recipient may mark it In Progress while preparing a private response draft, then submit one bounded Contribution Response to make the request Responded; no acceptance or delivery-management state is required. A human recipient may instead explicitly Decline. The requestor may explicitly Cancel a Submitted, In Progress or On Hold request. No request changes state through inactivity or elapsed time.

An AI-targeted request may select only the requestor's own enabled, usable Personal AI Assistant; another user's assistant is never available. `Submit and ask` is the requestor's explicit invocation. It records Submitted and moves to In Progress only when the assistant has actually begun work. If AI assistance becomes unavailable before work begins, or assistant processing is technically interrupted after it begins, the request moves to On Hold. Restoring eligibility does not resume or update the request automatically, so it does not change Last updated or list ordering. Only the assistant's owner may explicitly choose `Resume assistant`, which records a new invocation, updates Last updated, returns the request to Submitted and then to In Progress when work actually starts. Resume may use private incomplete assistant working state for a best-effort continuation or retry from the retained request and recorded context; it does not promise a provider-side processing checkpoint. That working state is never shown as partial response text or retained as response or lifecycle history. An AI assistant does not Decline: insufficient context should produce a bounded Question or caveated response, while technical inability produces On Hold.

The requestor remains the request owner; a recipient has active response responsibility while a request is Submitted or In Progress. A requestor may use Reopen only after the request is Responded or Declined; Cancelled is terminal, so renewed work requires a new request. Reopen is enabled only when its next Request Cycle has a valid recipient path. A Responded request requires its fixed recipient to remain eligible and available. A Declined request requires at least one eligible and available human collaborator or the owner's eligible and available Personal AI Assistant; the owner may select either kind of recipient before resubmission. Reopen is an action and history event, not a request status: it returns the request to a private Draft and begins a new Request Cycle. The selected human recipient retains a frozen, read-only view of the previously shared request, response and lifecycle evidence, while the revised Brief and any draft-context changes remain private. When reopening Responded, the recipient, Assistance Request Type, scope and recorded context remain read-only and only the Request Brief may be revised. When reopening Declined, the replacement sees only the new current cycle, while the original recipient retains their frozen Declined cycle in **Requests for you**. That record remains at Declined and its own decline timestamp; reassignment, resubmission and later new-cycle activity are not exposed to or used to reorder it. Explicit resubmission returns the request to Submitted and preserves prior response and lifecycle history as owner evidence. AI invocation, start, hold, resume and response events remain known AI activity trace records; ordinary request surfaces expose neither provider/model configuration nor detailed credential, credit or technical-failure data.

Current-cycle detail actions are role-specific. In an initial Draft, the owner can continue editing, discard the draft or submit it. If a selected recipient becomes unavailable before first submission, the private Draft persists but submission is disabled until availability returns or the owner selects another eligible available recipient; no replacement is automatic. In a reopened Draft, the owner can edit the permitted fields, resubmit, or discard the reopened draft to restore the immediately preceding terminal cycle without erasing its history. For a human request that is Submitted, the owner may cancel while the recipient may start a private response or decline; while In Progress, the owner may cancel while the recipient may continue, submit or decline, discarding any private response draft on decline. On Responded, the owner may dismiss individual response items, open ordinary private drafts from them, explicitly Act On the response or Reopen when the fixed recipient remains eligible and available; acknowledgement is automatic on deliberate fully rendered response access. The recipient sees the response and handling status read-only. On Declined, only the owner may Reopen when at least one eligible and available human collaborator or Personal AI Assistant exists. On Cancelled, both parties have read-only retained evidence. For AI requests, the owner may cancel while Submitted or In Progress and may resume or cancel while On Hold; no other user can act on an owner's assistant request.

A Contribution Response is the contributor's submitted input for a Collaboration Request.

Contribution Responses may include answers, comments, questions, findings, suggested edits, proposed artifacts, proposed relationships, proposed decisions, readiness results, summaries or handoff material.

One bounded Contribution Response may contain multiple discrete response items. Each item has one primary Response Shape. A Summary may synthesize items but does not replace them; a Finding may be accompanied by a separately shaped Suggested Edit or Proposal that addresses it. These relationships do not apply a change or create Product Knowledge.

Response Shapes describe the form of a response item and help determine how the requestor can understand and separately consider it.

Initial MVP Response Shapes:

| Response Shape | Meaning | Typical Requestor Action |
|---|---|---|
| Answer | Direct response to a question in the request, including known basis and limits. | Acknowledge, act on manually or ask a follow-up. |
| Comment | General note, observation or reaction. | Resolve, reply, ignore or convert into another action. |
| Question | Clarification requested from the requestor. | Answer, discuss or convert to an Open Question. |
| Finding | Structured issue, observation or result from a review or check. | Acknowledge, act on separately or request follow-up. |
| Suggested Edit | Proposed change to existing content. | Review, apply separately, reject or modify. |
| Proposed Artifact | Suggested new Product Artifact. | Review, create separately, reject or edit. |
| Proposed Relationship | Suggested relationship between Product Artifacts. | Review, create separately, reject or adjust. |
| Proposed Decision | Suggested decision, option or recommendation. | Review, decide separately, reject or discuss further. |
| Readiness Result | Non-canonical local assessment of the selected Product Knowledge's evidence, gaps, risks, dependencies and next actions. | Review, act on findings separately, defer or request Prepare Handoff. |
| Summary | Condensed explanation of content, context or results. | Use as reference or separately incorporate into Product Knowledge. |
| Handoff Material | Generated or refined implementation handoff content. | Review, include separately in the export package, edit or reject. |

Each Finding has exactly one Finding Type: Gap, Inconsistency, Ambiguity, Risk, Blocker, Dependency, Recommendation or Readiness Warning. Finding Type classifies the reported issue or observation; it is not a Response Shape, severity, priority, workflow state, task, recipient assignment or deterministic readiness outcome.

A Requirements Quality Review may combine an Ambiguity Finding for unclear wording, a Gap Finding for missing known Acceptance coverage, a Question for unresolved intent, a Suggested Edit for a safe clarity improvement, a Proposed Relationship for missing traceability and a Summary. A Security Review may distinguish a grounded Risk Finding from a Dependency Finding. Request Feedback remains comment-oriented and may use Comments, Questions, Suggested Edits, Proposals and Summary, but does not use Findings or Finding Types merely to give open-ended feedback a structured-review appearance.

Contributors should not directly alter canonical Product Knowledge through a Collaboration Request. In the MVP, only the Project Owner may manually consider a response, create or edit Product Knowledge in a separate private draft, and explicitly save the resulting canonical record or Revision; the response itself is not applied to the Project State. Requestor and recipient describe request-level relationships rather than Product Knowledge authority. A Project Collaborator, including a human request recipient, may submit non-canonical input but has no canonical create, edit, save or Response Source Link authority.

When a manual action informed by a Contribution Response changes product knowledge, the saved change should be recorded as a Revision.

Contribution Response Status is tracked separately from Product Artifact lifecycle state. A response is Submitted when the contributor sends it. It becomes Acknowledged automatically on the requestor's first deliberate opening of fully rendered response content; a list row, notification, compact preview or loading state does not qualify. The requestor may explicitly mark it Acted On to indicate they have dealt with its content. Automatic acknowledgement does not update Last updated, reorder the list or create a lifecycle-history event. These statuses do not apply, accept, validate or otherwise change Product Knowledge, and Acted On does not require a linked Revision or note.

---

# 16. Conversation

A Conversation is a topic-focused, multi-party exchange inside one Project. It supports exploration, clarification and collaboration, and belongs to the Project's working memory rather than its canonical Product Knowledge.

A Conversation has an initiating participant, at least one recipient, an initial message, a human-readable topic and an explicit Project ownership record. It may include accepted project collaborators, invited people whose participation is pending, and a Personal AI Assistant available through a participating human user's enabled Bring Your Own AI configuration. Invitation state belongs to each invited person: a Conversation remains active for its accepted participants while another invitation is pending or declined.

Conversation recipient selection is intentionally limited in the MVP. A human recipient must already be an accepted or pending Project collaborator; a Personal AI Assistant must already be configured and enabled by its owner. Adding a recipient neither invites a new human contributor to the Project nor creates or configures an assistant.

The Conversation initiator may add or remove human recipients and add or remove their own assistants. They cannot add, remove or invoke another participant's assistant. Other human Conversation participants may request that an existing eligible human be added, but the initiator approves or rejects the request. A Project owner may add or remove human recipients in a Conversation they did not initiate.

A participant may add or remove only their own assistants. If a human recipient is removed, every assistant that person added to the Conversation is removed as well. Apart from this removal cascade, no one else may remove an assistant. Removing any recipient ends future participation but preserves prior messages, assistant contributions, attribution and a concise recipient-change event in the Conversation history.

Human recipient status is Pending, Active, Declined, Left or Removed. An accepted human recipient may leave an Open Conversation; leaving has the same removal cascade for that person's assistants as a removal. A Personal AI Assistant is Included or Removed. It never leaves or declines by itself. If an assistant later becomes unavailable because its owner disables it or its credentials are no longer usable, it remains historically included but cannot be invoked.

A Conversation is Open or Closed. The initiator may close an Open Conversation instead of leaving it; a Project owner has the same safety override for a Conversation they did not initiate. A Conversation does not close automatically when no other active human recipient remains or after a fixed period. Closing records a concise history event and makes the Conversation read-only: it permits no new messages, recipient changes or assistant invocations. It does not create a Decision, resolve an Open Question or otherwise change Product Knowledge. Closed Conversations remain accessible and are not reopened or deleted in the MVP; new work starts a new related Conversation.

Every Conversation has an explicit scope/source. It may be attached to:

- the whole Project;
- the whole Specification;
- a Specification Section;
- a Product Artifact; or
- selected content within the Specification.

Only the Project owner or an accepted human Project collaborator may initiate a Conversation. A pending invitee and a Personal AI Assistant cannot initiate one. Initiation always occurs from inside a Project: a future home or cross-project surface may show existing Conversations but does not initiate an unscoped one.

The MVP offers these source-specific entry points:

| Entry point | Initial source/scope |
|---|---|
| Conversations workspace: **New conversation** | Project, by default |
| Specification action | Whole Specification |
| Section action | That Specification Section |
| Artifact action | That Product Artifact |
| Selected-content action | That selected Specification content |

A selected-content Conversation retains its containing Section or Artifact as structural context while keeping selected content as its explicit source. A workflow stage remains a potential future source only when the product exposes a meaningful stage surface; it has no MVP initiation entry point.

The source explains where the matter arises; the topic explains what the participants are discussing. Several Conversations may share a source without being the same Conversation.

Conversations are not Collaboration Requests and `Conversation` is not an Assistance Request Type. They are separate optional paths: a Conversation supports multi-party exploration and clarification, while a scoped Collaboration Request asks a contributor for a bounded asynchronous response. An owner may add an eligible collaborator to a Conversation when their judgment is useful in the evolving discussion; the existing request flow remains available independently when a bounded request is appropriate.

Owner-led Conversation outcome capture is a core MVP path from working memory to Product Knowledge. Creating or linking a scoped Collaboration Request from a Conversation is a lower-priority MVP stretch capability, not a prerequisite for either path. Until such an integration exists, neither a Conversation nor a Collaboration Request implicitly creates, links to or controls the other. Messages, participation and request responses never directly change Product Knowledge. A Personal AI Assistant may contribute only through an explicit invocation by its human owner; it does not respond autonomously. Adding an assistant as a recipient is not itself an invocation.

For the MVP, only the Project owner may crystallize Conversation material into Product Knowledge. The owner explicitly chooses an entire Conversation or one or more individual messages as source material, then chooses to create a new Product Artifact, record a Decision, track an Open Question or update existing Product Knowledge. The normal artifact creation or editing flow remains responsible for review and explicit save; only that save creates the canonical record or Revision.

The MVP provides no Conversation-ready status, capture prompt, recommendation or participant signal. The Project owner alone decides whether and when a Conversation warrants crystallization. Message activity, inactivity, apparent agreement, assistant analysis and Conversation closure must not infer or signal capture readiness. Participants may raise a possible outcome through ordinary messages, without creating a special workflow state or obligation for the owner.

Successful outcome capture creates a Conversation Outcome Link between the Conversation and the resulting record and, when applicable, its selected messages. It is visible from both endpoints for navigation and provenance. This linkage does not make the Conversation canonical, close it or imply participant agreement. It may be created from a Closed Conversation without reopening the Conversation or adding a message. Text-range capture as source material and a formal non-owner request-to-crystallize flow are deferred from the MVP.

A Conversation Outcome Link is distinct from an Artifact Relationship and is never included in an Implementation Handoff Package. If its target record is Archived, it remains a valid link labeled Archived. If the target is genuinely unavailable because it was deleted or otherwise removed by a future retention or recovery policy, the link remains visible but is labeled Broken using a retained target title and identifier snapshot. Only the link creator or Project owner may delete it; deletion removes the link, not the Conversation or target record, and records a concise history event.

Important conclusions from Conversations may eventually crystallize into stable Product Knowledge through separate, explicit user actions that create or update an artifact, record a Decision or track an Open Question. The resulting Revision or new record may retain provenance that it was based on a Conversation.

---

# 17. Decision

A Decision records an important choice made during the product engineering process.

Decision is both a general project concept and a possible Product Artifact type.

As a general project concept, a Decision preserves rationale for important choices.

As a Product Artifact, a Decision can be structured, related to other artifacts, reviewed, revised and included in the Product Knowledge Graph.

A decision should explain:

- what was decided;
- why it was decided;
- which alternatives were considered;
- which artifacts are affected;
- who or what contributed to the decision;
- when the decision was made.

Decisions help preserve rationale.

They allow future contributors to understand not only what the product is, but why it became that way.

---

# 18. Review

A Review is a structured, lens-qualified evaluation of selected Product Knowledge.

A review may be performed by a human contributor or an AI contributor.

A Review has exactly one explicit Review Lens in the MVP. It may combine multiple Check Types within that lens, such as:

- completeness;
- consistency;
- clarity;
- feasibility;
- alignment with goals;
- accessibility;
- testability;
- risk;
- implementation readiness.

Separate lenses require separate Collaboration Requests. The requestor must see and confirm the lens before submission. A contextual entry may preselect a compatible default only when the initial lens catalog declares one; Whole-Specification and Specification Section Reviews require the requestor to select a lens deliberately.

The selected lens determines the relevant Check Types, primary and supporting context, and how conclusions are qualified. A Review may return Findings, Questions, Suggested Edits, Proposed Artifacts, Proposed Relationships, Proposed Decisions and a Summary. It should conclude that specification coverage appears adequate for the named lens at the current scope, that findings or risks were identified, or that the available context cannot support a responsible assessment.

Review conclusions are non-canonical. They do not approve Product Knowledge; certify implementation, conformance, security, accessibility or readiness; or use a Readiness Result, even for an Implementation Readiness Lens. Response handling remains separate from Product Knowledge lifecycle and occurs through the ordinary Contribution Response statuses.

Review is available for the whole Specification, an eligible Specification Section with non-whitespace section content or an active contained Product Artifact, and an active Product Artifact. At Artifact scope, it evaluates that Artifact's coverage for the named lens and stated role; at Section scope, it evaluates active content and relevant connections for the Section's template purpose; and at whole-Specification scope, it evaluates cross-section coverage for the named lens. Existing selected-content Review availability is unchanged; it remains a narrow fragment review and does not represent the containing Artifact, Section or Specification as a whole.

The initial Review Lens catalog is Requirements Quality, UX Quality, Accessibility, Security, Testability and Implementation Readiness. It expresses structural compatibility only: Requirements Quality applies to requirement- or acceptance-oriented content; UX Quality to experience-oriented content; Accessibility to interaction-oriented content; Security to boundary- or constraint-oriented content; Testability to behavior- or verification-oriented content; and Implementation Readiness to implementation-bearing content. A compatible Artifact or Section may still have insufficient evidence for the lens, which is returned as a bounded, explainable limitation rather than a disabled request, changed lens or recipient-selection signal. Every lens is available for whole-Specification Review. A selected-content Review inherits compatibility from its containing Artifact or Section, and assesses only the fragment and immediately relevant host context. Accessibility may be standards-informed but never certifies conformance; Security never certifies security; and Implementation Readiness uses Findings and Summary rather than a Readiness Result or deterministic handoff outcome.

Reviews do not silently change Product Knowledge, create approval or delivery workflow, or certify an implemented product.

---

# 19. Revision

A Revision represents a saved change to an artifact or project knowledge item.

Revisions allow the workbench to track how knowledge evolves over time.

A revision should capture:

- what changed;
- when it changed;
- who or what changed it;
- why it changed, when known;
- whether the change was manual, AI-assisted or generated.

Revision history supports trust, accountability and recovery.

A Revision is distinct from a Contribution and from Provenance.

A Contribution records that a contributor performed a meaningful action.

A Revision records the saved change produced by an action.

For an interactive artifact edit, `Done editing` is the saved-change action that creates the Revision. Edit-in-progress drafts are not Revisions. Once the Revision is saved, the system immediately evaluates deterministic Artifact Change Impact Propagation and records the resulting impact outcomes.

If the Project Owner deliberately identifies one whole Contribution Response as informing that saved change, the Revision may retain one optional Response Source Link to the immutable response and its Request Cycle. It records the source response, target Revision and Product Knowledge, the owner who made the link and its time. It is an owner-visible Revision-history reference, not a separate response trace, collaborator disclosure or handoff field. It is not inferred from opening a response or draft, automatic acknowledgement, item dismissal or response-level Acted On handling. It does not select or disposition individual items, create a separate Provenance record, or imply acceptance, agreement, correctness, exact wording provenance, sole causation or exclusive human authorship. No link does not imply that the response was ignored.

Provenance explains where the resulting knowledge came from or how it was derived.

---

# 20. Provenance

Provenance explains where a piece of product knowledge came from.

It may indicate that an artifact was:

- created manually;
- generated by AI;
- assisted by known AI participation and later reviewed and explicitly saved by the Project Owner;
- derived from another artifact;
- based on a Conversation;
- created from an imported document;
- updated after a review;
- linked to a decision.

Provenance is important because users need to trust the product knowledge they rely on.

Provenance is distinct from Contribution and Revision.

Contribution answers: “Who or what participated?”

Revision answers: “What saved change occurred?”

Provenance answers: “Where did this knowledge come from?”

Provenance should record known origin and derivation, not make unverifiable claims.

For example, the workbench can record that content was generated by an in-product AI Contributor and later reviewed and explicitly saved by the Project Owner, refined from an AI-suggested edit or disclosed by a human contributor as externally AI-assisted.

The workbench cannot reliably prove that manually submitted human content was not assisted by an external AI tool.

An explicit Response Source Link is narrow supporting evidence that a Contribution Response informed an owner-saved Revision. It does not by itself make an exact authorship or derivation claim, and the MVP does not add a separate response-to-Provenance flow.

AI assistance traceability and governance should therefore be based on known in-product activity, voluntary contributor disclosure, review state, explicit Project Owner saves, provenance and project policy. The workbench may disclose those known records according to the project-owner AI-use disclosure setting, but must not claim exact final-text attribution or prove external AI non-use.

## Example

A User Story might have provenance such as:

- generated from Feature `FEAT-001`;
- based on User Need `NEED-003`;
- initially drafted by an AI Contributor and later reviewed and explicitly saved by the Project Owner;
- refined by human contributor;
- validated after review.

---

# 21. Context

Context is the relevant surrounding knowledge needed to understand or act on an artifact.

For example, the context for a User Story may include:

- the parent Feature;
- related User Needs;
- related Goals;
- prior Conversations;
- relevant Decisions;
- related Risks;
- existing Acceptance Criteria.

Context is especially important for AI assistance.

AI contributors should not operate on isolated text when structured context is available.

Context Assembly is the process of selecting, filtering, prioritizing and explaining the context provided to a human or AI contributor for a specific request.

Context Assembly should start from the requested scope, then expand through relationships before filtering by user intent.

The requested scope may be:

- selected content;
- a Product Artifact;
- a Specification Section;
- a set of Product Artifacts;
- the entire Specification;
- another explicit project scope.

The system should first collect Candidate Context from multiple sources:

- Structural Context implied by the Specification Document Template, document structure, section composition, artifact type expectations or artifact hierarchy;
- Explicit Context from manually created, imported or accepted Artifact Relationships and Context References;
- Inferred Context suggested by analysis, AI assistance or system inference;
- supporting knowledge such as Decisions, Risks, Assumptions, Open Questions, Reviews, Conversations, Provenance and project metadata.

Candidate Context should then be filtered and weighted according to:

- the Assistance Request Type;
- the requested scope;
- relevant Artifact Relationships;
- the expected Response Shape;
- the contributor capability or Review Lens;
- contributor permissions and availability;
- known context limits.

For the MVP, Context Relevance may be represented conceptually as:

- primary;
- supporting;
- optional;
- excluded.

Primary Context is the context required to make the central judgment for the selected Assistance Request Type and lens.

Supporting Context explains, constrains or validates that judgment.

Optional Context may improve the response but should not dominate the request.

Excluded Context is related knowledge that is not useful for the current request.

The same artifact type may be primary in one request and supporting in another.

Context Relevance is a request-specific inclusion decision, not a score, document-proximity rule or instruction to include every graph-related item. Primary Context is required to make the requested contribution. Supporting Context directly explains, constrains, validates or could materially change it. Optional Context may add detail but is not necessary for a grounded response; it enters only when the Request Brief explicitly calls for it before submission. Excluded Context does not support the stated contribution even when structurally nearby or related.

Current active Product Knowledge is preferred. Stale knowledge may remain relevant but must retain its visible limit; archived knowledge is excluded unless the request specifically needs historical comparison or impact reasoning. Directly related evidence that could contradict or materially constrain a response is Supporting rather than omitted for convenience. Prior Conversations, Reviews and Contribution Responses are Supporting only when the request seeks comparison, follow-through or earlier reasoning. Resource References are included only when their target-local purpose supports the request; a relevant unavailable Resource is a stated limit. Inferred context may guide inspection but cannot satisfy a missing Primary requirement or become unlabelled evidence.

Only Primary and Supporting context enter ordinary assembly by default. A recipient cannot expand a Request Cycle's immutable recorded context after submission; if more material is needed, they return a Question or caveated response and the Project Owner may Reopen and resubmit with revised context. A Context Explanation identifies included Primary and Supporting context and material exclusions or missing anchors; it need not enumerate every excluded Candidate Context item.

For example, Functional Requirements and Acceptance Criteria are primary for an Implementation Handoff Readiness review, while Goals and Target Users may be supporting context. For a Product Strategy review, Goals and Target Users may become primary.

For the MVP, the default lens for Validate Readiness should be Implementation Handoff Readiness. It guides a scoped contributor assessment of local Product Knowledge quality, not the deterministic readiness outcome produced only by Prepare Handoff.

The system should assess Context Sufficiency for the specific Assistance Request Type, Review Lens and stated focus before fulfilling the request. It is not a general quality score for the selected scope: the same Product Artifact may be sufficient for one request and partial or insufficient for another.

Possible Context Sufficiency states:

- sufficient;
- partial;
- insufficient.

Context is sufficient when relevant evidence supports all requested checks or the stated feedback focus. It is partial when substantive selected content supports at least one useful bounded contribution but required context for some requested dimensions is absent. It is insufficient when no substantive basis exists for even a bounded contribution to that request.

Structural compatibility, recipient fit and routing remain separate from Context Sufficiency. A partial or insufficient result does not silently change the lens, scope or recipient. The system should:

- submit the request normally when context is sufficient;
- submit the request with a visible Context Explanation when context is partial, returning only grounded local observations and clearly naming unsupported dimensions; and
- allow explicit submission with a visible warning when context is insufficient, returning Questions and an explanation of missing basis rather than invented Findings, edits, proposals or a positive quality conclusion.

The system should provide a Context Explanation that identifies what context was included and why.

For partial or insufficient context, the explanation must also identify the missing anchors, the resulting limits and, when applicable, the questions needed to continue. It may suggest creating or linking missing knowledge but does not create it automatically.

For example, a Context Explanation might say that a request used the selected User Story, its parent Feature, related Acceptance Criteria, linked Functional Requirements, unresolved Open Questions and blocking Risks.

Validated example patterns:

The Primary and Supporting columns identify candidate material, not automatic inclusion. Context Relevance still determines whether each candidate enters the assembled request. Prior Conversations, Reviews, feedback and Contribution Responses enter only when comparison, follow-through or earlier reasoning is requested or materially necessary.

| Request | Primary Context | Supporting Context | Typical Response Shapes |
|---|---|---|---|
| Improve selected text | selected text, containing artifact or section | product name, product vision, goals, target users, glossary terms | Suggested Edit, Comment |
| Find Gaps on User Story | User Story, parent Feature, existing Acceptance Criteria | related User Needs, Functional Requirements, Non-Functional Requirements, Screen/View or User Flow | Finding, Proposed Artifact, Question |
| Find Inconsistencies on Feature | Feature, directly related Requirements, Decisions, Acceptance Criteria | Goals, Non-Goals, constraints, related sections, Open Questions, Risks | Finding, Question, Proposed Decision, Suggested Edit |
| Analyze Impact on Requirement | selected Requirement, directly related artifacts, parent Feature, affected Acceptance Criteria, affected Screen/View or User Flow, dependencies and known constraints | Goals, User Needs, Non-Goals, Decisions, Risks, Open Questions, data/domain model, external integrations, implementation guidance, previous Reviews | Summary, Finding, Proposed Relationship, Proposed Artifact, Proposed Decision, Question |
| Validate Readiness on Product Artifact | selected active Product Artifact; its type and template expectations; directly related, validating or constraining knowledge; artifact status; Readiness Fact Check Set | containing Section, parent or child artifacts, Goals, Decisions, Risks, Assumptions, Open Questions, previous Reviews and relevant implementation or validation guidance | Readiness Result, Finding, Summary, Proposed Artifact, Proposed Relationship, Question |
| Validate Readiness on Specification Section | selected eligible Section; its template purpose; active contained artifacts and section content; relationships and coverage among that content; Readiness Fact Check Set | adjacent or related Sections, Goals, Decisions, Risks, Assumptions, Open Questions, previous Reviews and relevant implementation or validation guidance | Readiness Result, Finding, Summary, Proposed Artifact, Proposed Relationship, Question |
| Validate Readiness on whole Specification | included sections, required artifacts, artifact statuses, Acceptance Criteria, Functional and Non-Functional Requirements, Risks, Open Questions, technical constraints, validation/testing guidance; Readiness Fact Check Set | Goals, Non-Goals, Target Users, Decisions, Assumptions, UX Requirements, data/domain model, implementation guidance, previous Reviews | Readiness Result, Finding, Summary, Proposed Artifact, Question |
| Prepare Handoff | requested export scope, Handoff Profile, active included sections and artifacts, Functional and Non-Functional Requirements, Acceptance Criteria, UX/UI design guidance, Screen/Views, User Flows, technical constraints, external integrations, implementation and validation guidance, artifact statuses, Decisions, Risks, Assumptions, Open Questions, relationship and dependency information, direct active dependencies outside the scope | Vision, Goals, Non-Goals, Target Users, User Needs, data/domain model, prior readiness results and Reviews, relevant Conversations, known Provenance when required by project policy or Handoff Profile | Handoff Material, Summary, Finding, Question, Readiness Result |
| Review User Flow with UX Quality Lens | selected active User Flow; stated review focus; related User Need or User Story; linked Screen/Views, UI Requirements, Functional Requirements and Acceptance Criteria; applicable UX/UI design guidance | related Features, User Flows, Non-Functional Requirements, technical constraints, Decisions, Risks, Assumptions, Open Questions, Resource References and prior Reviews | Finding, Question, Suggested Edit, Proposed Artifact, Proposed Relationship, Summary |
| Review UI Requirement with Accessibility Lens | selected UI Requirement; related Screen/View and User Flow; interaction and state behavior; linked Functional Requirements and Acceptance Criteria; applicable UX/UI design guidance; explicit accessibility expectations; declared accessibility target when present | related User Story and User Need; external design references; Decisions, Risks, Assumptions and Open Questions; related UI Requirements; technical constraints; prior UX or accessibility Reviews | Finding, Suggested Edit, Question, Proposed Artifact, Summary |
| Request Feedback on Product Overview | selected Product Overview; stated feedback prompt or focus when provided; product name and current overview content | Problem or Opportunity; Target Users or Personas; Goals and Success Criteria; Scope and Non-Goals; User Needs and Core Features when they clarify the overview; relevant Decisions, Risks, Assumptions, Open Questions and prior feedback | Comment, Question, Suggested Edit, Summary, Proposed Artifact, Proposed Decision |
| Draft Product Overview | stated drafting prompt or source material; selected Product Overview when it contains existing content; section and template guidance; product name | Problem or Opportunity; Target Users or Personas; Goals and Success Criteria; Scope and Non-Goals; User Needs and Core Features when available; relevant Decisions, Constraints, Risks, Assumptions and Open Questions | Suggested Edit, Question, Summary, Proposed Artifact |
| Suggest Alternatives on Core Feature | selected Core Feature; linked User Needs and Goals; stated alternatives prompt, decision focus and constraints; Scope and Non-Goals | Target Users or Personas; related Features, User Stories, Use Cases, Requirements and Acceptance Criteria; dependencies; Decisions; technical constraints; Risks, Assumptions, Open Questions and prior feedback or Reviews | Proposed Decision, Proposed Artifact, Suggested Edit, Summary, Question |
| Ask Question on an Open Question | selected Open Question; requestor's question or framing prompt; the question's rationale, scope, linked and blocked artifacts | related Goals, User Needs, Features, Requirements, Constraints, Decisions, Assumptions, Risks, Open Questions, Conversations and known evidence in the Project State | Answer, Question, Finding, Proposed Decision, Summary |
| Improve Functional Requirement | selected Functional Requirement; stated improvement focus; directly related Feature or User Need; direct Acceptance Criteria | related User Stories, Use Cases, Screen/Views or User Flows; Non-Functional Requirements; technical constraints; Decisions; integrations; Risks, Assumptions, Open Questions and related Requirements | Suggested Edit, Question, Finding, Summary |
| Review Functional Requirement with Requirements Quality Lens | selected Functional Requirement; Requirements Quality Lens; stated review focus; directly related Feature or User Need; direct Acceptance Criteria | User Stories, Use Cases, Screen/Views or User Flows; related Requirements; Non-Functional Requirements; technical constraints; Decisions; integrations; Risks, Assumptions, Open Questions and prior Reviews | Finding, Question, Suggested Edit, Proposed Artifact, Proposed Relationship, Summary |
| Find Gaps on Acceptance Criteria | selected Acceptance Criterion or Criteria; artifact or behavior each criterion validates; sibling Acceptance Criteria that validate the same behavior | related Functional Requirements, User Stories, Use Cases, Features, User Needs, Screen/Views or User Flows; Non-Functional Requirements; Decisions, constraints, integrations, Risks, Assumptions and Open Questions | Finding, Question, Suggested Edit, Proposed Artifact, Proposed Relationship, Summary |

For Find Gaps, missing related artifacts may be useful output rather than a reason to block the request. For example, missing Acceptance Criteria may make context partial, while also becoming a gap finding.

For Find Inconsistencies, the request needs comparison targets. If no related context is available, the system may still review internal wording, but the Context Explanation should state that no comparable related context was available.

For Analyze Impact on a Requirement, the system should inspect both upstream and downstream context.

Upstream context explains why the Requirement exists. It may include Goals, User Needs, parent Features, Decisions, Assumptions and constraints.

Downstream context identifies what the Requirement affects. It may include Acceptance Criteria, Functional Requirements, Non-Functional Requirements, UI Requirements, Screen/Views, User Flows, Risks, Open Questions, integrations, implementation guidance and validation/testing guidance.

If the Requirement has few or no relationships, impact analysis may still proceed with limited context, but the Context Explanation should make the limitation visible. Missing relationships may be returned as Findings or Proposed Relationships.

Request Feedback on Product Overview is open-ended and comment-oriented rather than a structured Review, gap check or readiness judgment. Its primary context is the overview itself and any stated feedback focus. Problem or Opportunity, Target Users or Personas, Goals and Success Criteria, Scope and Non-Goals provide the strategic orientation needed for a useful reaction; User Needs and Core Features are supporting only when they clarify the overview.

The request is sufficient when the overview and enough strategic orientation are available for meaningful feedback. It is partial when some strategic anchors are absent; it may still proceed with caveated Comments and Questions. It is insufficient only when the overview contains too little substantive product definition to react to responsibly. The Context Explanation should name the strategic anchors used and missing anchors that limited the response. Unrelated detailed requirements, screens, implementation guidance and historical material should be excluded unless they directly clarify the overview or stated feedback focus.

Draft Product Overview is generative assistance, not a claim that the overview is complete or validated. The stated drafting prompt or source material, existing overview content and section or template guidance are primary context. Problem or Opportunity, Target Users or Personas, Goals, Scope and Non-Goals anchor the draft; User Needs, Core Features, Decisions, Constraints, Risks, Assumptions and Open Questions should be supporting only when they materially shape it.

The request is sufficient when it contains meaningful product intent, audience or problem and enough scope or outcome information to draft a bounded overview. It is partial when an anchor is absent and may return a limited draft that makes its assumptions and open questions visible. It is insufficient when no substantive product input or drafting prompt exists; the contributor should then ask clarifying questions rather than fabricate product claims. The Context Explanation should identify source material and template guidance used, and missing anchors that constrained the draft.

Suggest Alternatives on a Core Feature should optimize for the intended User Need and Goal rather than preserve the current feature by default. Its primary context includes the selected Core Feature, the User Needs and Goals it addresses, the stated alternatives prompt or decision focus, applicable constraints, Scope and Non-Goals. It may produce a feature variant, outcome-preserving substitute, scope or timing change such as deferment, or reframing that questions whether the feature addresses the right need or goal.

Each Alternative Proposal should identify its intended outcome, rationale, benefits and trade-offs, assumptions and Open Questions, and likely affected product knowledge when known. It may make a conditional recommendation, but does not make a decision or change canonical knowledge. The request is sufficient when the feature, intended outcome and relevant boundaries or constraints are available. It is partial when outcome links or constraints are incomplete: it may still suggest local variants, but must label strategic alternatives such as deferment or substitution as constrained by missing outcome context. It is insufficient when the selected feature has too little substantive definition and no meaningful source material or prompt exists. The Context Explanation should identify used outcome links, constraints and boundaries, as well as missing context that limits the alternatives.

Ask Question on an Open Question should help the requestor formulate, understand or seek a response to the selected question without treating the contributor's response as a decision. Its primary context includes the selected Open Question, the requestor's question or framing prompt, the question's rationale and scope, and artifacts it blocks or directly relates to. An Answer should distinguish known product knowledge from assumptions, limits and unresolved dependencies.

The request is sufficient when the Open Question is clear and bounded and relevant context is available to reason about it. It is partial when related knowledge or constraints are missing; the contributor may still answer from the available context while making limits visible. It is insufficient when the Open Question or requestor prompt is too ambiguous to understand. An Answer remains part of the Contribution Response record and cannot automatically resolve the Open Question or change Product Knowledge.

Improve Functional Requirement should make the requirement clearer, more precise or more testable while preserving its established behavioral intent. Primary context includes the selected Functional Requirement, any stated improvement focus, the directly related Feature or User Need, and direct Acceptance Criteria. Supporting context may include User Stories, Use Cases, Screen/Views or User Flows, Non-Functional Requirements, technical constraints, Decisions, integrations, Risks, Assumptions, Open Questions and related Requirements.

The expected Response Shapes are Suggested Edit, Question, Finding and Summary. A Suggested Edit must not silently introduce behavior, expand scope, resolve an assumption or choose an implementation approach that is not established in assembled context. A needed behavior or scope change should be returned as a Question or Finding. The request is sufficient when the Functional Requirement and enough behavioral context are available to preserve intent. It is partial when relationships, validation coverage or constraints are missing; it may still improve wording or structure, but the Context Explanation must state that alignment or testability could not be fully assessed. It is insufficient when the requirement is too vague or empty and no linked scope or behavioral context is available; the contributor should ask clarifying questions rather than rewrite it.

Review Functional Requirement with Requirements Quality Lens is a Requirements Quality Review. It is a structured assessment of specification quality, not an editing request or an implementation-conformance claim. The default Requirements Quality Lens may combine clarity and ambiguity, completeness of actor, trigger, behavior and outcome, consistency with linked knowledge, testability and Acceptance Criteria coverage, traceability, dependencies, assumptions, constraints and avoidable unsupported implementation prescription. The requestor may add a narrower review focus, such as testability or ambiguity.

Primary context includes the selected Functional Requirement, Requirements Quality Lens, any stated review focus, directly related Feature or User Need, and direct Acceptance Criteria. Supporting context includes User Stories, Use Cases, Screen/Views or User Flows, related Requirements, Non-Functional Requirements, technical constraints, Decisions, integrations, Risks, Assumptions, Open Questions and prior Reviews. The expected Response Shapes are Finding, Question, Suggested Edit, Proposed Artifact, Proposed Relationship and Summary.

Missing Acceptance Criteria or relationships should normally become Findings rather than block the review. Context is sufficient when the Functional Requirement contains meaningful behavior and enough related knowledge is available for the requested checks. It is partial when alignment, traceability or testability cannot be assessed; the review may still assess internal clarity and make its limits visible. It is insufficient when the requirement has too little substantive content to assess. The review should conclude that requirements-quality coverage appears sufficient for the current scope, that findings were identified, or that quality cannot yet be assessed from the available specification. These conclusions do not validate the requirement's implementation.

Find Gaps on Acceptance Criteria assesses whether the selected Acceptance Criterion, selected set or Acceptance Criteria section supplies the necessary acceptance evidence for known intended behavior. It is distinct from a Requirements Quality Review, which assesses a Functional Requirement; this request focuses on the coverage and verifiability of the criteria themselves. It does not create test results or certify implementation conformance.

Primary context includes the selected Acceptance Criterion or Criteria, the artifact or behavior each criterion validates, and sibling Acceptance Criteria that validate the same behavior. Sibling criteria are primary comparison context even when a single criterion is selected, so that the contributor does not propose duplicate coverage. Supporting context includes related Functional Requirements, User Stories, Use Cases, Features, User Needs, Screen/Views or User Flows, Non-Functional Requirements, Decisions, constraints, integrations, Risks, Assumptions and Open Questions.

The contributor should report only gaps grounded in available product knowledge. It may identify a missing trigger, precondition, actor or observable outcome; known behavior without coverage; an untestable criterion; or a missing validation relationship. It may identify error, boundary, alternate-state, permission or transition coverage only when the specification establishes that behavior as relevant. It must not invent generic edge cases merely because they are customary.

The expected Response Shapes are Finding, Question, Suggested Edit, Proposed Artifact, Proposed Relationship and Summary. A small addition to an existing criterion may be a Suggested Edit; a new criterion or traceability link remains a non-canonical Proposed Artifact or Proposed Relationship. Missing relationships should normally become Findings rather than block the request. Context is sufficient when the selected criteria, their validated behavior and enough known behavior are available to assess coverage. It is partial when the contributor can assess local clarity but not coverage fully, and must explain that limit. It is insufficient when the selected criteria have too little substantive content and no target behavior or source context is available. The conclusion should state that acceptance coverage appears sufficient for the current scope, that gaps were found, or that coverage cannot yet be assessed from the available specification.

For Prepare Handoff, the default Handoff Profile is `Implementation Handoff`. The request should compose the best available package even when context is partial, artifacts are Stale or implementation caveats remain. It should not silently omit these limitations or present the package as more certain than the available product knowledge supports.

The handoff result should present a preparation outcome such as `Prepared` or `Prepared with Caveats`. This is a package-level result, not a new Product Artifact lifecycle state.

Stale active artifacts, Risks, Assumptions, Open Questions, blockers and direct active dependencies outside the requested export scope should be included or referenced as implementation caveats. External dependencies should be clearly labeled as outside the scope rather than being silently treated as exported knowledge.

Prepare Handoff should report insufficient product definition and not prepare a package when there is no meaningful export scope or too little product definition to prepare responsibly. This boundary applies even when readiness validation is disabled. The first profile rule defines a feature-centered scope as meaningful only when it includes an active Feature with non-whitespace title and content, at least one explicitly related active Functional Requirement, and one or more active Acceptance Criteria such that every included Functional Requirement is explicitly validated by at least one criterion. User Stories and Use Cases may support the package but do not replace the Functional Requirement in this first rule. Otherwise, it should generate caveated Handoff Material and explain the limits of the assembled context.

Reviewing an active User Flow with the UX Quality Lens is a UX specification-coverage assessment. A User Flow that defines a user journey, its states or interaction guidance is structurally compatible because it is experience-oriented. Primary context includes the selected flow, stated review focus, related User Need or User Story, linked Screen/Views and UI Requirements, related Functional Requirements and Acceptance Criteria, and applicable UX/UI design guidance. Related Features or flows, Non-Functional Requirements, technical constraints, Decisions, Risks, Assumptions, Open Questions, Resource References and prior Reviews may be supporting context.

The Review may identify unclear journey steps, state transitions, feedback, recovery or continuity only where available Product Knowledge makes those concerns relevant. Missing user, interaction, state or acceptance knowledge is a stated partial-context limit or a grounded Finding when the available flow establishes it as relevant; if the missing basis makes the request insufficient, the response asks Questions and explains that limit instead. It does not make the User Flow structurally incompatible. The result remains non-canonical and may return Findings, Questions, Suggested Edits, Proposals or Summary only when its context supports them. It does not certify usability, accessibility, implementation or readiness, produce a Readiness Result, invoke the Readiness Fact Check Set or create a handoff outcome.

Review UI Requirement with Accessibility Lens is an Accessibility Specification Review. It should assess whether the specification defines accessible outcomes, risks and verification needs clearly enough to guide implementation and later evaluation.

The review may use gap, ambiguity, inconsistency, testability and risk checks. It should examine keyboard and focus behavior, semantic and assistive-technology expectations, labels and feedback, error and state handling, non-color cues and contrast where visual values are specified, responsive or reflow behavior, and dynamic-content or media implications when relevant to the selected interaction.

The default Accessibility Lens is standards-informed but must not claim accessibility conformance. When the project declares an accessibility target, such as WCAG 2.2 AA, that target becomes primary review context and findings may identify relevant criteria or missing evidence. Without a declared target, the Context Explanation should state that the review applied general accessibility principles and cannot certify conformance.

The review conclusion should be one of:

- accessibility specification coverage appears sufficient;
- accessibility specification gaps or risks found;
- accessibility cannot yet be assessed from the available specification.

These conclusions describe specification readiness, not the accessibility conformance of an implemented application. Conformance evaluation requires evidence from the actual interface and its complete applicable scope.

Reviewing selected content inside an interaction-oriented UI Requirement with the Accessibility Lens inherits structural compatibility from that containing Artifact. Primary context includes the selected text and immediately relevant host behavior, related Screen/View and User Flow, linked Functional Requirements and Acceptance Criteria, explicit accessibility expectations and a declared target when present. The Review may identify missing accessible error identification, focus behavior or assistive-technology feedback only where the documented interaction makes those concerns relevant.

The conclusion is limited to the selected fragment's accessibility specification coverage. It may return a Finding, Question, Suggested Edit, Proposal or Summary, but cannot conclude that the containing UI Requirement, Screen/View, Section or implemented interface is accessible or inaccessible. It remains standards-informed when a target is declared, but never certifies accessibility conformance or produces a readiness outcome.

Reviewing an active Product Artifact that defines integration behavior with the Security Lens is a Security specification-coverage assessment. Its integration behavior and external-system purpose establish the relevant system boundary, so the scope is structurally compatible even when the available documentation is incomplete. Primary context includes the selected Artifact, stated boundary, directly related Functional Requirements and Acceptance Criteria, explicit authentication and data-handling behavior, technical constraints, Decisions, Risks and any available contract Resource References. User-facing behavior, data/domain rules, dependencies, Assumptions, Open Questions and prior Reviews may be supporting context when relevant.

The Review may identify unclear trust boundaries, authentication or authorization assumptions, sensitive-data handling, webhook or callback verification, failure or replay behavior, and missing security verification evidence only when the available Product Knowledge makes them relevant. Missing contract, constraint or verification knowledge is a stated partial-context limit or a grounded Finding when the available boundary establishes it as relevant; if the missing basis makes the request insufficient, the response asks Questions and explains that limit instead. It does not make the Artifact structurally incompatible, create a security certification, invoke the Readiness Fact Check Set or produce a Readiness Result or handoff outcome.

Reviewing an eligible `External Integrations` Section with the Implementation Readiness Lens assesses whether the active Section content and relevant connections define implementation-relevant behavior, constraints, dependencies and gaps for that template purpose. The Section is structurally compatible when it has implementation-bearing active content; unresolved webhook contract or account-ownership dependency knowledge may make the assessment partial or become a Finding. Primary context includes the Section's template purpose and active content, related Functional Requirements and Acceptance Criteria, known dependency and contract material, technical constraints, Decisions, Risks, Assumptions and Open Questions. Adjacent or related Sections, data/domain and user-facing behavior, Resource References and prior Reviews may be supporting context.

The result is limited to non-canonical Findings and Summary about the available specification coverage. It does not use a Readiness Result, calculate `Ready`, `Ready with Caveats` or `Not Ready`, run a Readiness Fact Check Set or Handoff Profile meaningful-definition checks, create a report or package, or determine whether a dependency blocks a handoff. Those deterministic rules remain exclusive to `Prepare Handoff`.

Reviewing the whole Specification with the Testability Lens assesses the available cross-section coverage of documented observable behavior and verification evidence. Primary context includes active behavior-defining Product Knowledge, linked Acceptance Criteria and their relationships, User Stories, Functional and Non-Functional Requirements, UI flows, data/domain rules, integrations, technical constraints, Risks and Open Questions. Goals, User Needs, Non-Goals, Decisions, Assumptions, Resource References and prior Reviews may be supporting context.

The Review may identify an explicitly documented behavior that lacks observable acceptance evidence or an explicit validation relationship—for example, a known pending-cancellation state whose available Acceptance Criteria verify only the success state. It does not invent generic edge cases unrelated to known Product Knowledge. Its conclusion is limited to whether whole-Specification testability coverage appears adequate, whether Findings or risks were identified, or whether context is insufficient. It does not execute tests, create a test result, certify the implemented product or produce a Readiness Result, report or handoff outcome.

---

# 22. Context References

Context References are explicit links that identify which artifacts or knowledge items should be considered when performing a task.

They help the workbench assemble the right information for:

- AI generation;
- AI review;
- consistency checks;
- impact analysis;
- export generation;
- document rendering.

Context References are not the same as Provenance.

Context References are also distinct from Resource References. A Resource Reference identifies a file or external link attached to a Specification, Section or Product Artifact. It does not by itself cause that resource to be included in every AI request, review, export or rendering operation; Context Assembly decides whether an available Resource Reference is relevant to the requested action.

## Difference

Provenance answers:

“Where did this knowledge come from?”

Context answers:

“What knowledge is needed to understand or work on this?”

---

# 22.1 Resources and Resource References

A Resource is reusable supporting material for a Project. It may be a managed uploaded file or an external URL. A Resource is not a Product Artifact by default.

A Resource Reference attaches a Resource to a Specification, Specification Section or Product Artifact and explains why it is relevant at that location. It may include a user-authored purpose or type, one user-authored Description and location-specific metadata such as a represented Screen / View state or viewport. A downstream representation may render the Description as a caption, but Caption is not a separate MVP Resource Reference field.

The MVP should support both managed uploaded files and external links. Users create a Resource Reference directly while working on the Specification, Section or Product Artifact; they do not need to first place an external link in a separate external-links section. A Resource may be reused through multiple Resource References. Each reference retains its own target, purpose, description and location-specific metadata.

Once a Resource is referenced, its source is effectively immutable. Replacing a managed file or changing an external URL creates a new Resource and explicitly updates only the Resource References the user selects. It must not silently change every other reference to the original Resource. Removing a Resource Reference detaches only that reference; retention or cleanup of a Resource with no remaining references is an implementation policy and must not silently destroy supporting material.

Adding, removing, replacing or materially changing a Resource Reference is a Revision of its attached Specification, Specification Section or Product Artifact. Any deterministic impact outcome follows the normal relationship-specific propagation rules for that attached target; a Resource Reference does not introduce a new generic propagation rule. Content behind an unchanged external URL may change outside the workbench's control. That is an availability or version caveat, not an inferred Revision; editing the URL follows the new-Resource rule.

For the MVP, Resource Reference Purpose uses a compact prescribed list: `Visual reference`, `Prototype`, `Source material`, `Contract`, `Research`, `Example` and `Other`. Selecting `Other` requires a short user-authored purpose. For a Screen / View, `Visual reference` is the initial Purpose but remains editable. Visual references may include screenshots, mockups, wireframes, prototypes and design-file references.

For a `Visual reference` attached to a Screen / View, optional Visual Context metadata may record a represented state and viewport. Represented state is optional free text, such as a default, confirmation, validation-error or empty state. Viewport is optional and uses a compact prescribed list: `Mobile portrait`, `Mobile landscape`, `Tablet portrait`, `Tablet landscape`, `Desktop` or `Other`. No selection means viewport is unspecified. Selecting `Other` requires a free-text viewport value, such as a named device, exact dimensions or breakpoint.

Visual Context is interpretive reference metadata. It does not alter the Screen / View's canonical behavior, create an Artifact Relationship or become a separate device-specification model.

Administrative roles, metadata-catalog configuration and Purpose-list customization are deferred. They must not be inferred from the MVP's fixed Purpose list.

A Resource becomes a Product Artifact only when it needs independent lifecycle, review state, relationships, provenance or collaboration. A Resource Reference remains distinct from an Artifact Relationship and does not create a Product Knowledge Graph edge by itself.

---

# 23. Readiness

Readiness describes whether a product knowledge area is mature enough to support implementation or downstream use.

Readiness may depend on:

- required artifacts being present;
- required relationships being defined;
- open questions being resolved;
- risks being identified;
- acceptance criteria being testable;
- reviews being completed;
- stale artifacts being updated.

Readiness should be evaluated at different levels:

- artifact readiness;
- feature readiness;
- project readiness;
- export readiness.

---

# 24. Minimum Implementation-Ready Path

A minimum implementation-ready path describes the smallest coherent chain of product knowledge that can justify implementation.

A possible initial path is:

Vision

↓

Goal

↓

User Need

↓

Feature

↓

User Story

↓

Acceptance Criteria

This does not mean every project must always follow this exact path.

It means this chain provides an initial traceable backbone from intent to implementable behavior.

Risks, Decisions and Open Questions can attach to any part of this path.

---

# 25. Relationship to Functional Requirements

Functional requirements should emerge from the Product Knowledge Model.

For example:

If the workbench must allow users to define Features, then the model must define what a Feature is.

If the workbench must show whether a User Story is ready for implementation, then the model must define readiness.

If the workbench must allow AI to generate Acceptance Criteria, then the model must define the context needed for that generation.

If the workbench must show impact when a Goal changes, then the model must define artifact relationships and stale-state propagation.

Functional requirements should therefore be derived from the conceptual model rather than invented independently.

---

# 26. Export Representation

The Implementation Handoff Package is an exported representation of Product Knowledge.

The MVP export should preserve stable artifact identifiers in human-readable Markdown files.

Stable IDs should appear in:

- `specification/SPECIFICATION.md`;
- section-level Markdown files;
- `manifest.json`.

The target export model may also include artifact-level files and expanded metadata.

The MVP may defer the `artifacts/` folder and expanded `metadata/` folder as stretch items, but should still generate `manifest.json` as the minimal required metadata file.

The manifest should identify the project, template, preset, included sections, artifact IDs, export timestamp and export format version. For a partial package, it is also the authoritative record of Definition Scope, Supporting Context, Direct External Dependencies and directly related intentionally out-of-package knowledge. It records the package result and readiness-validation state: `evaluated` with an outcome when readiness validation ran, or `not_run` with no readiness outcome when it did not. It also records whether `READINESS_REPORT.md` was included. A `not_run` state must not be represented as `Ready`, an empty ambiguous outcome or a substituted caveat summary. When the project's selected AI-use disclosure destination includes handoff, the manifest is also the authoritative machine-readable record of the package's known-AI disclosure.

A handoff AI disclosure includes only known AI activity whose declared scope is included in the package. Each disclosed entry identifies the included scope or stable artifact/section ID, whether it is in-workbench assistance or a voluntary external-AI declaration, the Assistance Request Type when known, its response/status and any explicit Provenance reference. It must not include raw prompts, assembled context, raw AI responses, Response Source Links or their target Revision information by default. If handoff disclosure is enabled but the included scope has no known AI activity, the manifest records that no known activity is recorded for the included scope while preserving the trace limits.

An included Resource Reference travels with the Specification, Section or Product Artifact to which it is attached; a Resource never expands handoff scope by itself. A Specification-level Resource Reference is excluded from a partial handoff unless the user explicitly includes it as Supporting Context. The manifest represents one included Resource source once: an external Resource by its URL, or a managed uploaded Resource by a package-relative file path. It must not use a machine-specific absolute path or `file://` URI. Each included Resource Reference separately identifies that Resource and retains its target-specific meaning. If one included Resource has several included references, its managed source is copied once while every reference and its local purpose remain represented in the package. An external Resource remains a labeled link in the package and should be surfaced as a caveat when its availability cannot be established.

The workbench can deterministically identify that a Resource is shared across references, but sharing does not itself establish an inconsistency. Because represented state is free text and Visual Context is interpretive, semantic mismatch between a reference and its target Screen / View requires human judgment or an explicitly requested AI Review or Find Inconsistencies request. Such assistance returns a caveated, non-canonical Finding and must not automatically mark Product Knowledge Stale or block handoff preparation.

For an included `Visual reference` on a Screen / View, `manifest.json` is authoritative for its Visual Context metadata. Human-readable Screen / View export content also includes a compact, reference-local Visual Context mention when that metadata is present. The mention identifies the specific reference and may state its represented state and/or viewport; it does not repeat unspecified fields, become a top-level Screen / View state summary or redefine canonical interface behavior.

---

# 27. Initial Model Summary

The initial Project Model can be summarized as follows:

A Project contains Product Knowledge.

Product Knowledge is composed of Product Artifacts.

Product Artifact is the canonical term; Artifact may be used as a short form after first use.

Product Artifacts are connected by Artifact Relationships.

Those relationships form a Product Knowledge Graph.

Workflow Templates define which artifacts and relationships are expected for a given way of working.

Contributors, human or AI, create Contributions.

Contributions may produce artifacts, Conversations, reviews, decisions or revisions.

Conversations support exploration.

Decisions preserve rationale.

Reviews evaluate quality and readiness.

Revisions preserve history.

Provenance explains where knowledge came from.

Context identifies what knowledge is needed to act intelligently.

Resources and Resource References provide supporting files and links without making those materials Product Artifacts by default.

---

# 28. Open Questions

Open questions related to the Project Model are tracked in:

- `docs/planning/open-questions.md`

Relevant question categories include:

- DATA — Data Model
- UX — User Experience
- AI — Artificial Intelligence
- PROC — Process and Methodology

---

# 28. Non-Goals for This Document

This document does not define:

- database tables;
- JSON schema;
- API endpoints;
- UI components;
- AI prompts;
- storage strategy;
- authorization rules;
- implementation architecture.

Those should be defined later, once the conceptual model is stable.

---

# 29. Next Steps

After reviewing this document, the next expected steps are:

1. Validate the core vocabulary.
2. Confirm the minimum artifact set.
3. Confirm the minimum relationship types.
4. Confirm the artifact lifecycle states.
5. Add unresolved questions to `open-questions.md`.
6. Use this model to inform `document-first-ui.md`.
7. Use this model to inform future data model and architecture documents.
