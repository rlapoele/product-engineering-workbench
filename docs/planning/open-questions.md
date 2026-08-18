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
- User Profiles;
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

Artifacts need lifecycle states so users and contributors can distinguish ordinary active knowledge, knowledge with a known upstream impact, and knowledge retained only for history without turning revision or review evidence into competing status labels.

## Current Candidate

- Active
- Stale
- Archived

## Question

Which statuses are required initially?

## Decision

The MVP artifact lifecycle states are:

- Active
- Stale
- Archived

## State Meanings

Active means ordinary canonical Product Knowledge. Creation and update history belongs in Revisions; it makes no claim that an Artifact is new, reviewed, complete or permanently correct.

Stale means the artifact may no longer be accurate because related upstream knowledge changed.

Archived means the artifact is no longer active but is preserved for history and traceability.

An edit-in-progress draft is private working input rather than lifecycle status. Review results, validation confirmations, coverage/readiness warnings, blockers and detected inconsistencies are evidence or attention signals. A Project Owner may confirm a Stale Artifact remains current, but `Validated` is not a lifecycle status or content lock.

The lifecycle transitions are:

- a Project Owner creates or updates an Artifact as Active; content creation or update creates a Revision;
- the system may mark an Active Artifact Stale after a semantically relevant upstream change and records the causal path without creating a content Revision;
- a Project Owner may update a Stale Artifact to return it to Active with a new Revision, or confirm it remains current to return it to Active with a recorded confirmation;
- a Project Owner may archive an Active or Stale Artifact; an Archived Artifact may later be restored to Active;
- a Project Owner may later hard-delete an Archived Artifact through a separate retention operation. Hard deletion is not a soft status; its retention, relationship and recovery rules remain deferred.

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
- Open Question resolution should mark blocked Artifacts Stale when existing content relied on an assumption changed by the answer; otherwise it should create a coverage/readiness warning.

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
- Confirming a Stale Artifact remains current returns only the reviewed Artifact to Active. The system may suggest review of active Artifacts whose recorded impact paths pass through it, but must not automatically clear their states.

## Consequences

Review does not need to be human-only. A human contributor, AI contributor or capability-specific reviewer may supply non-canonical evidence, while only the Project Owner may make a canonical update, lifecycle transition or confirmation.

Rejected is not an MVP Artifact lifecycle state or Contribution Response status. A recipient may decline a Collaboration Request before submitting a response. After submission, the Project Owner may dismiss an individual response item as not pursued; dismissal retains evidence and does not reject the contributor or the whole response. An Artifact that should no longer be active can be archived.

---

# DATA-005 — How should Resource References evolve and participate in partial handoffs?

**Category:** Data Model

**Status:** 🟢 Resolved

## Context

The MVP Resource and Resource Reference model supports managed uploaded files and external URLs attached directly to a Specification, Specification Section or Product Artifact. Resource References are not Product Artifacts, Context References or Artifact Relationships, and they do not expand handoff scope automatically.

The first decision intentionally defers several lifecycle and scope details that have direct user consequences. They should be resolved before implementation, without turning Resource References into a general activity log or an unbounded file-management product.

## Question

How should Resource References behave when their attachment target, source or handoff scope changes?

## Decision

- A Resource may be shared by several independent Resource References. Each reference keeps its own target, purpose, description and location-specific metadata.
- Once referenced, a Resource source is effectively immutable. Replacing a managed file or changing an external URL creates a new Resource and updates only explicitly selected Resource References; no global replacement occurs.
- Adding, removing, replacing or materially changing a Resource Reference creates a Revision of its attached Specification, Specification Section or Product Artifact. Ordinary relationship-specific impact propagation applies from that target; Resource References add no generic propagation rule.
- A Specification-level Resource Reference is excluded from a partial handoff unless explicitly included as Supporting Context. References on included Sections or Product Artifacts follow their attached target.
- A managed Resource used by multiple included references is copied once into a package, while every included reference and its target-specific meaning remain represented. An external Resource remains a labeled link and becomes a caveat when availability cannot be established.
- For an included `Visual reference` on a Screen / View, `manifest.json` is authoritative for Visual Context metadata. The human-readable Screen / View export also includes a concise mention beside the named reference when represented state and/or viewport is supplied; it does not state unspecified values or turn the metadata into canonical Screen / View behavior.
- The manifest stores a shared external Resource URL or managed package-relative file path once, never a consumer-machine-specific `file://` URI; each Resource Reference identifies that Resource and retains its own target-local metadata. Sharing is structurally detectable but not a semantic inconsistency. A possible mismatch in free-text Visual Context requires human review or an explicitly requested, caveated AI Review or Find Inconsistencies Finding; it does not automatically make knowledge Stale or block preparation.
- A changed remote document behind an unchanged external URL is an availability or version caveat, not an inferred Revision. Unavailable links, access restrictions or preview failures remain explainable feedback and do not block ordinary editing. Retention or cleanup after a final detachment is implementation policy and must not silently destroy supporting material.

## Consequences

The user can reuse a screenshot, contract or other source without turning edits in one location into hidden changes everywhere else. Partial-handoff and AI consumers retain the local meaning of every Resource Reference while avoiding duplicate transfer of the same managed source.

Storage limits, malware scanning, fine-grained permissions, link checking and preview rendering remain implementation and security work. They must preserve the decided visible behaviors rather than redefine the Resource and Resource Reference model.

---

# DATA-006 — How should a Project be exported and imported for portability?

**Category:** Data Model

**Status:** 🟢 Resolved

## Context

Implementation Handoff Packages are intentional, potentially partial one-way representations for implementation consumers. They cannot safely serve as a backup, cross-deployment transfer or reusable Project import format.

## Decision

The product will support a distinct, versioned, machine-oriented Project Archive for one complete transferable Project. It supports backup and restore-as-a-new-Project, a user-directed move between accounts or deployments, and an independent reusable Project copy. The archive uses structured text data and managed Resource files; its exact archive container and physical file layout remain a later format-specification decision.

An archive retains transferable canonical Project knowledge and history, including Project and Specification composition, artifacts, relationships, Revisions, provenance, reviews, collaboration-request records, Handoff History, known AI activity records and managed Resources. It excludes Conversations and Conversation Outcome Links; authentication, sessions and credentials; live collaborator access and invitations; operational records and command outcomes; deployment configuration; and personal drafts or preferences. External Resources remain their link and metadata, not a downloaded remote copy.

Import validates the archive format/version and complete structure, then creates a new Project owned by the importing authenticated user. Destination records receive new local identifiers and preserve only opaque source identifiers for lineage and historical attribution. Imported collaborators do not regain access. Import neither overwrites nor merges with an existing Project, and a move is user-directed copy-and-verify rather than an atomic cross-deployment operation. A standalone Specification import, in-place restore and clean history-free template/fork mode remain deferred.

Implementation Handoff Packages remain one-way and are never accepted as Project Archive input.

## Consequences

The future interchange contract requires compatibility validation, structural and resource safety validation, and no partial visible Project on failure. Archives contain confidential Product Knowledge and must not enter logs, telemetry or operational evidence. The future architecture needs a separate Project Archive/import boundary, not a persistence shortcut or an extension of the Handoff Profile renderer.

---

# DATA-007 — How should the Data or Domain Model represent concepts, rules and relationships?

**Category:** Data Model

**Status:** 🟡 Exploring

## Context

Domain Concept and Domain Rule are now independent Product Artifacts. A Domain Rule has one required kind: Business Rule or Invariant. Domain Relationships are structured, first-class Artifact Relationship records between Domain Concepts rather than separate Product Artifacts. This establishes independently traceable domain structure and governing knowledge without making the Data or Domain Model a database-design surface.

## Current Direction

A Domain Concept has a required title and plain-language definition. It may include an optional `Key business attributes` list whose entries name and explain business-meaningful attributes. Important states may appear in that list until a more structured state model is justified. The list must not prescribe database tables, column names, storage technology, physical data types, nullability, indexes or other schema choices.

A Domain Relationship has a required source Domain Concept, readable relationship statement and target Domain Concept. It may record cardinality at either end. Cardinality is optional but must be supported when known; it clarifies domain structure and does not prescribe a database relationship.

A Domain Rule has a required title, kind, canonical rule statement and `Governs` list containing one or more Domain Concepts and/or Domain Relationships. Its statement expresses the complete rule, including conditions and exceptions; no separate exceptions field is introduced initially.

## Open Decisions

- Should a Domain Rule receive an immutable readable reference?
- How should the document-first authoring and contextual related-knowledge flows work?
- Which explicit relationships, validation targets and impact-propagation rules apply to Domain Concepts and Domain Rules?

## Boundary

The section defines product-domain structure and governing policies. Database schemas, storage technology, physical data types, migrations, indexes and database ownership remain outside its scope.

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
- supporting knowledge such as Decisions, Risks, Assumptions, Open Questions, Reviews, Conversations, Provenance and project metadata.

Candidate Context should be filtered and weighted according to:

- the Assistance Request Type;
- the requested scope;
- relevant Artifact Relationships;
- the expected Response Shape;
- the contributor capability or Review Lens;
- contributor permissions and availability;
- known context limits.

For the MVP, Context Relevance is a request-specific inclusion decision represented as primary, supporting, optional or excluded. Primary context is required to make the requested contribution; supporting context directly explains, constrains, validates or could materially change it. Optional context may add useful detail but enters only when the Brief explicitly calls for it before submission. Excluded context does not support the stated contribution even when structurally nearby or related. Relevance is not a score, graph-distance rule or instruction to include every related item. A recipient cannot expand immutable recorded context after submission; they return a Question or caveated response when more material is needed, and the Project Owner may Reopen and resubmit with revised context. Inferred context may guide inspection but cannot satisfy missing Primary evidence or silently become evidence. A Context Explanation identifies included Primary and Supporting context and material exclusions or missing anchors without listing every excluded candidate.

The system should assess Context Sufficiency as sufficient, partial or insufficient for the specific Assistance Request Type, Review Lens and stated focus, rather than as a general source-quality score. Sufficient context supports all requested checks or feedback focus. Partial context has enough substantive content for at least one useful bounded contribution but not every requested dimension. Insufficient context has no substantive basis for even a bounded contribution.

Partial and insufficient context do not silently alter compatibility, lens, scope, recipient fit or routing. A partial request proceeds with a visible Context Explanation and grounded caveated response. An insufficient request may still be explicitly submitted with a warning, but returns Questions and an explanation of missing basis rather than invented Findings, edits, proposals or a positive conclusion. The workbench may suggest creating or linking missing artifacts but does not do so automatically.

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

For Suggest Alternatives on a Core Feature, the primary context should include the selected feature, the User Needs and Goals it addresses, the stated alternatives prompt or decision focus, applicable constraints, Scope and Non-Goals. The request should optimize for the intended outcome rather than preserve the feature by default. It may propose a feature variant, outcome-preserving substitute, scope or timing change such as deferment, or reframing that questions whether the feature addresses the right need or goal. A partial-context request may suggest local variants, but must identify strategic alternatives as constrained when outcome links or boundaries are missing. Each Alternative Proposal remains non-canonical unless the Project Owner separately changes Product Knowledge after considering it.

For Ask Question on an Open Question, the primary context should include the selected Open Question, the requestor's stated question or framing prompt, the question's rationale and scope, and artifacts it blocks or directly relates to. Supporting context may include related Goals, User Needs, Features, Requirements, Constraints, Decisions, Assumptions, Risks, other Open Questions, Conversations and known evidence in the Project State. The expected Response Shapes are Answer, Question, Finding, Proposed Decision and Summary. An Answer is a conversational Contribution Response: it does not automatically resolve the Open Question or change Product Knowledge.

Contribution Responses should use separate statuses. A response is Submitted when sent, automatically becomes Acknowledged when the requestor deliberately opens fully rendered response content, and may be explicitly marked Acted On when the requestor has dealt with its content. A list row, notification, compact preview or loading state does not acknowledge it. Automatic acknowledgement does not update Last updated, reorder the request list or create a lifecycle-history event. These statuses have no direct effect on the specification, do not require a linked Revision or note, and must not trigger automation.

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

The initial template defines an ordered, optional Product Engineering Stage catalogue: **Explore**, **Discover**, **Define**, **Design**, **Specify**, **Validate readiness** and **Handoff**. Stages are template-defined orientation metadata rather than Product Artifact fields or lifecycle states. Every initial Section Catalog entry has one primary stage and may have contributing stages; contained Product Artifacts derive that attribution from their canonical section. Stages do not impose a work sequence, create workflow gates, affect readiness validation or alter handoff eligibility.

The first Project Presets will classify sections as follows:

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

Prepare Handoff should generate the best available package for a meaningful selected scope even when active artifacts are Stale or implementation caveats remain. The result should be identified as `Prepared` or `Prepared with Caveats`, which is a package-level result rather than an artifact lifecycle state. A direct handoff retains the `Prepared` result and separately records `Readiness validation not run`; History and preparation confirmation render the two fields as `Prepared - readiness validation not run`, without adding a third package-result value. When the selected scope has insufficient product definition to prepare responsibly, no package should be prepared; this boundary applies even when `Validate Readiness` is disabled.

The caveat summary should include relevant Stale artifacts, Risks, Assumptions, Open Questions, blockers, missing or external UX/UI design guidance, and direct active dependencies outside the selected scope. Dependencies outside the scope should be labeled as external dependencies.

Prepare Handoff should enable deterministic readiness validation by default, while allowing the user to disable it for a direct handoff. When enabled, readiness validation applies only to the selected handoff scope plus direct external dependencies. It produces `Ready`, `Ready with Caveats` or `Not Ready` from explicit Project State. This outcome does not block preparation of a meaningful caveated package.

When the user disables validation, the workbench must not run a hidden reduced readiness assessment, generate a readiness outcome or include `READINESS_REPORT.md`. The package-boundary preview and package README state `Readiness validation was not run`. Included Risks, Assumptions, Open Questions, Direct External Dependencies and other selected Product Knowledge remain in their ordinary package representations; this is not a substitute caveat summary or readiness judgment. When validation ran, the README instead states the evaluated readiness outcome. Scope eligibility and meaningful-product-definition gates remain non-optional.

If handoff AI disclosure is also enabled and no known activity is recorded for the included scope, the same README additionally shows the conditional `Known AI activity` section stating `No known AI activity is recorded for the included scope` with the standard known-activity, non-authorship and non-detection limitation. This disclosure is independent of `Readiness validation was not run`; neither statement is evidence of the other.

If known included-scope activity exists instead, the conditional README section states `Known AI activity is recorded for the included scope`, gives the included entry count and links to `manifest.json`. It retains the standard limitation without exposing individual trace details. The direct readiness statement remains unchanged and independent.

The same disclosure behavior applies to evaluated handoffs. `Not Ready` and `Ready with Caveats` may both have package result `Prepared with Caveats`, but their immediately adjacent Readiness outcomes and explanations distinguish blocking from non-blocking conditions. Known AI activity is separately disclosed by count and manifest link; no known activity uses the caveated zero-entry statement. Package result, readiness outcome and AI disclosure remain independent.

Each resulting Handoff History event records whether readiness validation ran. A validated handoff retains its immutable readiness outcome; a direct handoff explicitly retains `Readiness validation not run`, never a blank field, inferred `Ready` result or retrospective caveat summary.

`manifest.json` carries the equivalent machine-readable state: package result; readiness-validation state of `evaluated` with a readiness outcome, or `not_run` with no outcome; and whether `READINESS_REPORT.md` is included. This lets machine consumers distinguish a direct handoff from a validated one without inferring meaning from absent data.

For every evaluated readiness outcome, report inclusion remains owner-selectable. It changes neither readiness outcome nor package result. The README links to the report only when included and otherwise uses its same concise outcome statement; the manifest and Handoff History explicitly record whether the report was included.

The first handoff for a Project/Specification and Handoff Profile should select the entire Specification. The user may modify the outline-based scope, and the last choice should be remembered per user, Project/Specification and Handoff Profile. Selecting a section selects its active contained content by default, while individual artifacts may be deselected. This preference is personal and does not alter shared Project Knowledge. Scope eligibility is separate from readiness and applies even when validation is disabled. The Handoff Profile owns eligibility rules, while the Specification Document Template provides the sections and containment structure. For the MVP `Implementation Handoff` profile, the entire Specification or at least one selected section with non-whitespace section content or an active contained Product Artifact is an eligible root scope; individual artifacts may narrow a section but cannot be the sole handoff root. An ineligible selection explains its missing structural context and disables Prepare Handoff until corrected. Direct external dependencies remain external unless explicitly selected.

Scope eligibility does not itself establish meaningful product definition. Meaningful-definition rules are deterministic and profile-specific. For the MVP `Implementation Handoff` profile, a selected `Core Features` scope containing only a high-level Feature statement, with no included behavioral detail or validation coverage, is insufficient. A feature-centered scope is meaningful only when it includes an active Feature with non-whitespace title and content, at least one explicitly related active Functional Requirement, and one or more active Acceptance Criteria such that every included Functional Requirement is explicitly validated by at least one criterion. User Stories and Use Cases may support the package but do not replace the Functional Requirement in this first rule. Goals, User Needs, Non-Goals, UX/UI guidance, technical constraints and external integrations are not universal minimum elements; they become caveats only when an explicit relationship or profile rule makes them relevant. With validation enabled, the workbench reports Not Ready and does not prepare a package; disabling validation does not bypass the no-package boundary. The user receives a concrete explanation and ordinary navigation or contextual actions rather than a prescribed workflow. The scope selector displays the three minimum-definition elements deterministically and does not allow package preparation until they are present.

A UX/UI-centered scope is meaningful only when it includes active Screen/View artifact(s) defining the interface boundary, an active User Flow explicitly including those views, active UI Requirement(s) explicitly related to an included view or flow, and active Functional Requirement(s) underlying the interaction with Acceptance Criteria validating every included requirement. The scope selector displays interface boundary, user flow, UI behavior, and system behavior with acceptance coverage as deterministic checks. Until all four elements are present, the workbench does not prepare a package. This rule is specific to UX/UI-centered implementation handoffs and does not make its elements universal requirements for other Handoff Profiles.

An integration-centered scope is meaningful only when it includes active `External Integrations` section content identifying the external system and its purpose; explicit integration behavior defining the known trigger, direction of data or control, and expected outcome; active Functional Requirement(s) explicitly related to that behavior; and Acceptance Criteria validating every included requirement. The scope selector displays external system and purpose, integration behavior, related Functional Requirements, and acceptance coverage as deterministic checks. Known external contracts, technical constraints, ownership and dependency details are included when available, but are caveats rather than universal minimum elements. The workbench must not require the user to invent unknown failure paths or technical protocol details. An explicit blocking external dependency makes readiness Not Ready but does not make an otherwise meaningful integration scope ineligible for a caveated package.

A data-model-centered scope is meaningful only when it includes active `Data or Domain Model` section content identifying the relevant domain entities and their explicit relationships; at least one explicit domain rule or invariant governing the selected entities or relationships; active Functional Requirement(s) explicitly related to those elements or rules; and Acceptance Criteria validating every included requirement. The scope selector displays domain structure, domain rule or invariant, related Functional Requirements, and acceptance coverage as deterministic checks. Implementation-level schema details, storage technology, migrations, indexes, database ownership and physical data types are not universal minimum elements. Privacy, retention, security classification, integration ownership and technical constraints are included or surfaced as caveats when explicitly relevant, but must not be invented.

For a mixed-scope handoff, the user explicitly designates selected knowledge as Definition Scope or Supporting Context. Definition Scope is knowledge the implementation consumer is being asked to implement, and each Definition Scope activates its applicable meaningful-product-definition rule. Supporting Context explains, constrains or caveats Definition Scope without activating another rule. The workbench must not infer the designation or silently promote supporting knowledge into Definition Scope. Multiple Definition Scope rules compose conjunctively: every applicable rule must pass before package preparation. A Functional Requirement or Acceptance Criterion may satisfy more than one Definition Scope only through explicit relationships. The package distinguishes Definition Scope, Supporting Context and Direct External Dependencies, and the workbench does not auto-add missing knowledge.

For a partial package, this boundary must be explicit throughout the export. After title and compact preparation metadata, `README.md` presents Package boundary, Readiness, conditional Known AI activity and Start here in that order. `IMPLEMENTATION_BRIEF.md` explains Definition Scope, intentionally outside scope and caveats; and `manifest.json` is the authoritative machine-readable record of Definition Scope, Supporting Context, Direct External Dependencies and directly related intentionally out-of-package knowledge. `specification/SPECIFICATION.md` is complete for the handoff scope, not necessarily for the whole Project Specification. Section Markdown files include only selected Definition Scope and Supporting Context, labeled by role. The package must not enumerate the whole Project Specification as omitted; it names only directly related out-of-package knowledge that is necessary to understand the boundary.

For an evaluated `Not Ready` handoff with `READINESS_REPORT.md`, the README metadata says `Package result: Prepared with Caveats`; its separate Readiness section says `Readiness outcome: Not Ready`, explains that the selected scope is meaningful enough to hand off but known blocking conditions remain, and links to the report. The README does not duplicate individual blockers, caveats or recommended follow-up actions from the report.

For evaluated `Ready`, README metadata says `Package result: Prepared`; Readiness says `Readiness outcome: Ready` and `No blockers or implementation caveats were identified for the selected scope.` For evaluated `Ready with Caveats`, metadata says `Package result: Prepared with Caveats`; Readiness says `Readiness outcome: Ready with Caveats` and `No blocking conditions were identified, but known caveats require attention during implementation.` Each links to `READINESS_REPORT.md` only when it is included; neither lists individual caveats in the README.

The four readiness states retain the same README layout and differ only in package result, concise Readiness text and whether a report link exists. `Ready` is `Prepared`; `Ready with Caveats` and `Not Ready` are `Prepared with Caveats`; and validation not run is `Prepared` with `Readiness validation was not run`. Package boundary, conditional AI disclosure and Start here remain in their fixed positions.

Prepare Handoff uses a scope panel over the document outline. The first handoff starts with the entire Specification as Definition Scope and enabled readiness validation and report inclusion; preparing it confirms that scope. Customization exposes explicit actions to add selected knowledge to Definition Scope or Supporting Context, mark directly related knowledge as outside the handoff, or remove it. Direct External Dependencies are derived, shown separately and cannot be relabeled as included knowledge. The panel shows deterministic minimum-definition checks per Definition Scope, labels shared evidence with the scopes it serves, does not auto-add missing knowledge, and offers a package-boundary preview before preparation. Exact interaction controls and visual design remain prototype work.

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

Project Owners will create scoped Collaboration Requests for recipients. Requests may target the whole specification, a document section, a Product Artifact, selected content or another explicit scope.

Each MVP Collaboration Request has one selected available recipient. Recipient selection distinguishes eligibility, availability and capability. Eligibility is the structural boundary: a human candidate is a Project Collaborator rather than the Project Owner; an AI candidate is the requestor's own assistant and is permitted by Project settings. Availability determines whether an eligible candidate can be selected now: a human becomes available through accepted Project collaboration, while an assistant must be enabled and usable. Capability gives explainable, non-binding guidance about known fit for the type, scope and optional Review Lens; it may identify exact, related or unstated fit but never automatically routes, ranks, assigns or excludes a candidate.

The selector groups selectable accepted collaborators as **People** and the requestor's enabled, usable assistants as **My assistants**. A configured but unusable assistant may show only a non-selectable `AI assistance unavailable` state. Pending invitees, non-collaborators, the owner as human recipient and another user's assistant are not selectable. Initial **Request collaboration** and **New request** actions are enabled only when at least one eligible and available candidate exists. Otherwise they give a compact generic explanation and do not open a composer, so no scope or type selection, Request Brief, Draft, queue, broadcast, fallback assignment, inline invitation or assistant setup is created. If a recipient becomes unavailable after a private Draft begins, the Draft remains private but submission is disabled until availability returns or the owner selects another eligible available recipient. Availability is not presence, calendar time, willingness, capacity, workload or response-time tracking. Multiple perspectives and evolving shared context belong in a Conversation.

A request has a required Request Brief framing the specific help, question or desired outcome. Its lifecycle is Draft, Submitted, In Progress, Responded, Declined and Cancelled. A human recipient may work in private while In Progress and then submit one bounded Contribution Response or decline; the requestor may cancel an active request. No acceptance, automatic expiry or delivery-management state is needed.

`On Hold` is an AI-specific request status for technical interruption or loss of the assistant owner's AI eligibility. Only the requestor's own enabled, usable Personal AI Assistant may receive a new AI request. The owner's explicit Submit and ask or Resume assistant action invokes it; restored eligibility never resumes, updates or reorders it automatically. While an AI request is In Progress or On Hold, its owner sees only a compact request state, never streaming or incomplete assistant response text. Incomplete assistant working state may be retained privately only for a best-effort resume; it is neither response content nor lifecycle history. The assistant cannot Decline, cancel or resume by itself, and its provider/model, credential, credit and detailed failure information remain private to its owner.

Paired MeatLoop scenarios validate the lifecycle: a human billing reviewer moves from Submitted through In Progress to one bounded response, whose handling and any resulting Revision remain separate; Declined is a short alternate human outcome. A Personal AI Assistant moves from explicit submission through In Progress, may enter On Hold after technical interruption or lost eligibility, and resumes only through the owner's explicit action. Both scenarios preserve the single-recipient rule, response/request status distinction, private drafts and the non-canonical response boundary.

Standalone request creation is scope-led and local. The Project owner starts **Request collaboration** from the Specification, a Section, a Product Artifact or selected content, each establishing its matching pinned contextual scope. The Collaboration Requests workspace offers a scope-first **New request** path, defaulting to the whole Specification and allowing deliberate outline selection of a Section or Product Artifact; selected content is available only from its contextual action. It remains the canonical Project-scoped request workplace. Its one paginated list is role-aware: **Requests you created** for the Project Owner, including private Drafts, and **Requests for you** for a Project Collaborator selected as the human recipient. After Reopen, that collaborator retains a frozen read-only prior view until resubmission. If a Declined request is reassigned, the former recipient instead retains the frozen Declined cycle in **Requests for you**, while the replacement sees only the new cycle. Its default has no lifecycle or response-handling filter and uses **Last updated — newest first**. For the owner, Last updated changes for a Brief edit, submission, lifecycle transition including AI On Hold or resume, response submission or response-handling change. For a collaborator, it is the newest meaningful event visible to that collaborator: private Brief edits do not update or reorder their list, while Reopen and resubmission do. The former recipient's frozen Declined record remains at its decline event and does not display or reorder for reassignment or later new-cycle activity. Viewing does not change it. Search covers the Brief, type, scoped-source label and participant names. Its filters are Request status, response handling, type and scope kind, plus recipient for the owner; its sort choices are Last updated newest or oldest first, creation newest first and Brief A–Z. Compact rows show the Brief, type, scoped source, other party, labelled Request status and concise last-update event. A current-cycle Contribution Response remains within its request and exposes separately labelled handling status on that row, not as an independent list item or workspace. An earlier response retained after Reopen is labelled **Previous response** to keep its evidence visible without implying it belongs to the reopened cycle; the recipient cannot see the revised Draft Brief or draft-context changes. The request detail keeps the full Brief, immutable recorded context, lifecycle history, response content and handling actions together. This list has no priority, due date, assignee, lifecycle grouping or needs-action worklist. A future home or cross-project surface may show only a compact attention summary and route the user into the relevant Project; it does not become a global request workplace or offer an unscoped composer. A non-modal progressive flow gathers type, one recipient and Request Brief, then presents derived read-only context before explicit human **Submit request** or AI **Submit and ask**. Scope, type and recipient are provisional until the brief is written or edited, which creates the private Draft. No inline invitation, assistant configuration or core-MVP Conversation-to-request entry is needed.

List processing applies the role boundary first, then search and all selected filters, then sorting and finally pagination. The MVP shows 25 requests per page. A search or filter change returns the user to page one and shows the matching-result count. Search covers only the current request surface visible to that user; it excludes response bodies, retained prior-cycle content and private reopened-Draft changes. Response-handling filters apply only to the current Request Cycle, while retained history remains in the request detail and never creates a history-filter match. Equal visible sort values use creation time and then an internal stable identifier.

Request detail is one structure ordered by Request Cycle, newest first. The current cycle is expanded, showing immutable recorded context and either its submitted response with labelled handling status or a compact current state. Private human response drafts remain private. An AI request shows its owner only the compact In Progress or On Hold state until a bounded response is submitted; incomplete assistant output may remain private only for a best-effort resume and never becomes response content or lifecycle history. Earlier cycles are collapsed summaries by default. Expanding one immediately shows its summary and then loads its stored immutable Brief, recorded context and response inline beneath it. The detail shows a compact loading state and retry on retrieval failure, and caches expanded history only for the current detail session. Historical content must never be reconstructed from current Project State. The lifecycle record is limited to submission, start, response, decline, cancellation, On Hold, resume, reopen and response-handling changes; it is not an activity-feed or chat surface.

A submitted Contribution Response is one response-detail surface, not a separate workspace: an optional Summary precedes the contributor's discrete items in order, each with its Response Shape and, for a Finding, its Finding Type. Related Suggested Edits or Proposals visibly link to the Finding they address without becoming tasks, priorities, assignments or item-completion tracking. The Project Owner as requestor may dismiss an item as not pursued while keeping it visible with an optional rationale, or may open an ordinary private creation or editing draft from an item. Neither action applies Product Knowledge. The requestor explicitly marks the containing response Acted On after any mix of consideration, dismissal or separately saved revisions; it requires neither every item to have a disposition nor a linked Revision or note.

The requestor may Reopen a Responded or Declined request only when its next cycle has a valid recipient path. Reopen is an action, not a status: it returns the request to a private Draft. The selected human recipient retains a frozen read-only view of prior shared request and response evidence, while the revised Brief and draft-context changes stay private until resubmission. On a Responded request, the fixed recipient must remain eligible and available; recipient, Assistance Request Type, scope and recorded context are read-only, and only the Request Brief may change. On a Declined request, at least one eligible and available human collaborator or the owner's Personal AI Assistant must exist; the owner may select either kind of recipient before resubmission. The replacement sees only the new current cycle, while the original recipient retains their frozen Declined cycle in **Requests for you**, at the decline event and without reassignment or later new-cycle activity. The owner may discard a reopened Draft to restore the preceding terminal cycle without erasing history. A recipient who Declines after starting response work discards their private draft. A Cancelled request cannot be reopened; renewed work requires a new request.

Conversations and Collaboration Requests are separate optional paths. A Conversation supports evolving multi-party exploration, including direct participation by eligible collaborators; a Collaboration Request is appropriate when a bounded asynchronous response is needed. Owner-led Conversation outcome capture is a core MVP priority. Creating or linking a scoped Collaboration Request from a Conversation is a lower-priority MVP stretch capability, so neither path implicitly creates or links to the other.

Each Collaboration Request should include an Assistance Request Type that describes the kind of help being requested.

Initial MVP Assistance Request Types are Draft, Improve, Request Feedback, Review, Find Gaps, Find Inconsistencies, Analyze Impact, Suggest Alternatives, Validate Readiness, Ask Question and Prepare Handoff.

`Validate Readiness` is available for the whole Specification, an eligible Specification Section or an active Product Artifact. It assesses the selected Product Knowledge locally—its available evidence, gaps, risks, dependencies and next actions—for that scope's stated purpose. An eligible Section has non-whitespace section content or an active contained Product Artifact. Selected content is not a valid readiness scope because a text fragment lacks the required structural boundary; the requestor may select its containing Artifact or Section instead. With insufficient context, the contributor may identify missing knowledge or ask questions but cannot make a positive local-readiness claim.

This non-canonical Readiness Result is distinct from deterministic Implementation Handoff Readiness. Only Prepare Handoff evaluates the Handoff Profile's eligible selected scope and direct external dependencies against explicit Project State, producing `Ready`, `Ready with Caveats` or `Not Ready`. Neither assessment certifies implementation, delivery workflow, implementation conformance or a package, and neither automatically changes Product Knowledge.

Selecting Validate Readiness and an eligible scope derives a non-persistent Readiness Fact Check Set preview. It reports only explicit Project State facts for scope structure, template-declared content expectations, active or Stale status, explicit relationships and validation coverage, known blockers and direct dependencies. Each check identifies the applicable rule and affected knowledge as `Satisfied`, `Attention needed`, `Not applicable` or `Cannot determine`. The workbench reruns the set immediately before explicit submission and includes the resulting immutable snapshot in the Request Cycle's recorded context for the selected human or AI recipient. It does not silently rerun after submission; explicit Reopen and resubmission create a new snapshot while preserving prior-cycle evidence. The set is recipient evidence, not a readiness outcome, score, routing or blocking rule, Product Knowledge update, task, delivery workflow or Handoff Profile evaluation.

Request Feedback is open-ended and comment-oriented. Review is structured and criteria-oriented.

Review is a composite Assistance Request Type. It may include multiple Check Types, while focused Assistance Request Types such as Find Gaps or Find Inconsistencies may expose individual checks directly.

Each MVP Review has one explicit Review Lens. The lens is visible and confirmed before submission; a contextual entry may preselect a compatible default only when the initial lens catalog declares one, while Whole-Specification and Specification Section Reviews require deliberate lens selection. A Review may combine multiple Check Types within that lens, but different lenses require separate Collaboration Requests. The lens determines the primary and supporting context, applicable checks and lens-qualified conclusions.

Review is available for the whole Specification, an eligible Specification Section and an active Product Artifact. At Artifact scope, it assesses specification coverage for the Artifact's stated role; at Section scope, active content and relevant connections for the Section's template purpose; and at whole-Specification scope, cross-section coverage. Existing selected-content Review availability remains a narrow fragment review and is otherwise unchanged. A Review returns Findings, Questions, Suggested Edits, Proposals and a Summary—not a Readiness Result—even under an Implementation Readiness Lens. It may conclude only that coverage appears adequate for the named lens at the current scope, that findings or risks were identified, or that available context is insufficient. It neither approves Product Knowledge nor certifies implementation, conformance, security, accessibility or readiness, and it does not automatically change Product Knowledge or create delivery workflow. The Readiness Fact Check Set remains specific to Validate Readiness.

Recipient selection considers requested capability and availability after applying the eligibility boundary. For human recipients, MVP availability is invitation-gated: an invited person becomes a Project Collaborator on acceptance. A Project Owner and Project Collaborator are mutually exclusive within the same Project. For AI Contributors, availability is personal to the human user invoking assistance: that user must have enabled usable Bring Your Own AI credentials, and the requested action must be permitted by applicable Project settings. One collaborator's AI configuration does not make AI available to another collaborator. These are not presence, workload or assignment signals.

Contributors will respond asynchronously by submitting Contribution Responses.

Initial MVP Response Shapes are Answer, Comment, Question, Finding, Suggested Edit, Proposed Artifact, Proposed Relationship, Proposed Decision, Readiness Result, Summary and Handoff Material.

Findings may use Finding Types such as Gap, Inconsistency, Ambiguity, Risk, Blocker, Dependency, Recommendation and Readiness Warning.

Contributors will not directly alter canonical Product Knowledge through a Collaboration Request. In the MVP, the Project Owner as requestor manually reviews responses and may acknowledge them, mark them acted on, or separately create or revise Product Knowledge through the owner's private draft and explicit save. Project Collaborators, including recipients, submit non-canonical contributions and do not receive canonical write authority.

If a manual action informed by a Contribution Response changes product knowledge, the resulting saved change will be recorded as a Revision.

Known AI assistance should remain traceable and governable through Contribution records, owner-saved Revisions, Provenance, Context Explanations and project settings. Its automatic disclosure within the workbench or handoff follows the project-owner AI-use disclosure setting.

The workbench can govern AI assistance that occurs inside the product through personally configured Bring Your Own AI support, as well as AI-assisted Contribution Responses disclosed by human contributors.

The workbench cannot reliably prevent or prove undisclosed external AI use by a human collaborator.

The MVP should therefore support a project-owner-inspectable known AI activity trace, review and provenance for known AI-assisted work rather than claiming full AI-use prevention, detection or authorship attribution.

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

**Status:** 🟢 Resolved

## Context

The workbench can make known in-product AI assistance visible and governable.

However, the workbench cannot reliably prevent a document owner or human contributor from using external AI assistance outside the product and then copying or rewriting that output into the workbench.

This limitation raises a separate product question: if external AI use cannot be reliably prevented or proven, should the product require, request, encourage or avoid AI-use disclosure?

## Question

Should the workbench require contributors to disclose AI assistance, or should AI usage disclosure remain optional, policy-driven or omitted from the product experience?

## Decision

The workbench must retain a **known AI activity trace** for AI assistance it knows occurred inside the product and for any external AI use a contributor voluntarily discloses. The project owner can inspect this trace to understand the request, scope, response, context explanation, status and any explicit resulting provenance or Revision link.

This trace is not a claim of exact authorship. It can establish that known AI assistance occurred for a scope and what response it produced, but it cannot reliably establish which final words remain from an AI response after human editing, or prove that external AI was or was not used.

AI-use disclosure is off by default. When it is off, the workbench does not automatically show AI-use markers in the ordinary workbench experience or generated handoffs; the project owner's ability to inspect the known AI activity trace remains available.

The project owner may enable AI-use disclosure. When enabled, the owner selects one disclosure destination:

- **Workbench only** — the default enabled destination; known AI assistance is disclosed within the workbench but not in a handoff.
- **Workbench and handoff** — known AI assistance is disclosed within the workbench and included in the handoff.
- **Handoff only** — known AI assistance is included in the handoff but is not automatically disclosed to ordinary workbench collaborators.

When disclosure includes handoff, `README.md` provides a concise human-readable disclosure and `manifest.json` is the authoritative structured record. They include only known AI activity whose declared scope is included in the package, do not expose raw prompts, assembled context or raw responses by default, and state that the disclosure is neither final-text authorship attribution nor comprehensive AI-use detection. When no known AI activity is recorded for the included scope, the handoff says so with the same caveat. Exact visual treatment in the workbench remains UX work.

Before preparation, the existing package-boundary preview lets the project owner inspect this derived disclosure, open its scoped trace or navigate to change the disclosure setting. It does not permit manual disclosure editing, alter readiness or meaningful-definition outcomes, or create a Handoff History event.

After successful preparation, Handoff History retains only a compact immutable disclosure summary: selected destination, inclusion state, disclosed-entry count, no-known-activity state and standard trace-limit caveat. It does not retain entry-level trace data, raw prompts, raw responses or a live link to later trace state; the manifest snapshot remains authoritative for what that package disclosed.

## Consequences

The product supports a compliance or policy need for disclosure without imposing it as a universal judgment on AI use. Project owners retain the governance evidence needed to make an informed setting choice, while the default experience remains focused on product knowledge quality and review.

The workbench must not claim comprehensive AI-use detection, authorship attribution or proof of non-use. Voluntary external-AI declarations can be represented as known trace information, but undisclosed external use remains outside the workbench's reliable knowledge.

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

**Status:** 🟢 Resolved

## Context

Conversations are working memory, but important conclusions should eventually become stable product knowledge such as artifacts, decisions, updates or Open Questions.

## Established Foundation

- `Conversation` is the canonical term for a project-scoped, multi-party working-memory exchange; `Discussion` is not a separate product concept.
- A Conversation is not a Collaboration Request or an Assistance Request Type. It may later link to a request, but it never changes Product Knowledge directly.
- Conversations have explicit source/scope, topic and participants, and live in a dedicated Conversations workspace outside the Specification while retaining links to their source context.
- Any human with Conversation access may copy an entire Conversation, individual messages or selected text. In the MVP, only the Project owner may crystallize entire-Conversation or selected-message source material into new or updated Product Knowledge, a Decision or an Open Question through ordinary reviewed creation or editing flows.
- Successful crystallization creates a bidirectional Conversation Outcome Link, with optional selected-message provenance. Links remain internal to the workbench, distinguish Archived from genuinely Broken targets, may be removed only by their creator or the Project owner, and are never included in handoffs. They never imply agreement, alter the thread or close it. Text-range outcome capture and formal non-owner crystallization requests are deferred.
- A newly captured Product Artifact is placed at the end of the deterministic canonical section for its type, without a placement picker. An unselected canonical section requires an explicit add-section or cancel choice: cancel returns to destination choice with selected messages intact and no outline change, while an explicitly added section remains if the later unsaved artifact draft is discarded. Section-local reordering is a separate document-composition Revision and does not change Conversation provenance or Outcome Links.
- A complete owner-facing journey has validated selected-message capture into an Open Question: destination choice, missing-section cancellation and return, explicit section addition, draft review and save, bidirectional Outcome Link, and later within-section reorder all retain their separate boundaries.

## Decision

For the MVP, the Project owner alone uses explicit judgment to decide whether and when a Conversation warrants outcome capture. The product provides no Conversation-ready status, capture prompt, recommendation or participant signal.

The workbench must not infer or signal capture readiness from message activity, inactivity, apparent agreement, assistant analysis or Conversation closure. These are not reliable evidence that a discussion has reached a durable conclusion, and a signal would introduce a misleading quasi-workflow state or obligation.

Any participant may raise a possible outcome through an ordinary Conversation message. This remains conversational input: it does not express consensus, mark the Conversation as ready, notify or oblige the owner, or change Product Knowledge. A future non-binding suggestion action may be considered only if ordinary messages and owner-led capture prove insufficient.

## Consequences

- Conversations remain working memory until the owner deliberately starts the existing capture flow and explicitly saves an outcome.
- Capture readiness remains separate from Conversation openness, closure and participant agreement.
- The MVP avoids extra states, history events, notifications and authorization rules for a capture-suggestion mechanism.
