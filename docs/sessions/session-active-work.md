# Session Active Work

**Status:** Active Working Notes

**Purpose:** Capture questions and draft answers during an active specification session before crystallizing stable conclusions into project knowledge.

Use the `Answer` blocks to reply directly in this file. Answers can be rough, partial or exploratory.

When the answers are ready, ask Codex to update the project documents based on this file.

---

# 1. MVP User Workflow

This section explores the exact end-to-end MVP flow from project creation to implementation handoff export.

## Questions

### 1.1

What is the exact end-to-end MVP flow from "create project" to "export implementation handoff package"?

**Answer:**


### 1.2

What does the user see immediately after creating a project?

**Answer:**
An "document" showing the outline of the specification; in other words, the user sees the title of each section/sub-section/etc... but no content in it yet.

### 1.3

Does the user work section-by-section, artifact-by-artifact, or directly in a single continuous document?

**Answer:**

From a user experience standpoint, the user sees one single continuous document however, the user can choose to work on/in a specific section or a specific artifact.
If we consider that a section is, in fact, a composite artifact (so an artifact made of other artifacts), then the user can work on/in a specific artifact.
If that is the case, then the user will probably and behind the scene, work artifact-by-artifact?!...
An important thing to note or remember here is that the user will not be forced to work in a specific order; for example, a user may have some ideas about a specific use case that they want to work on first.

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
| UX Requirements and Interaction Notes | Required | Required | Required |
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

---

# 4. Capability-Based Collaboration

This section explores how project owners request assistance from human or AI contributors.

Related open question: `COLL-001` — resolved for MVP as asynchronous, transactional collaboration.

## Questions

### 4.1

What are the first capabilities the system should support?

**Answer:**


### 4.2

Are capabilities attached to users, AI contributors, or both?

**Answer:**

Capabilities are attached to both.
One could imagine the concept of role where a contributor (user or AI) being assigned a role would be able to perform the set of capabilities associated with the assigned role.


### 4.3

How does a project owner request help?

**Answer:**

Generically speaking, by inviting a user to collaborate. Having said that, if a user requests assistance to "Reword" a section, then the type of contribution is "Reword". 
So the generic mechanism is "by invitation" but it will be by invitation for a specific thing to do.

### 4.4

Does a contribution produce comments, suggested edits, review results, new artifacts, or decisions?

**Answer:**

A contribution will probably produce comments, suggested edits, review results, new artifacts, or decisions.
Certain types of contribution will however require the acceptance (or rejection) of the contribution by the requestor; based on that acceptance/rejection, suggested edits will be persisted, new artifacts will be created, action(s) will be taken based on a decision.
Comments and review results will probably not require acceptance.
One thing to understand here is that contributors cannot directly alter a project. They can only provide feedback/review results/comment or suggest changes, which may or may not be accepted by the project owner.

### 4.5

What does "accepting" a contribution mean?

**Answer:**

I'm assuming here that by "accepting" a contribution, it means that the requestor will accept the contribution and take action based on it. This could involve persisting suggested edits, creating new artifacts, or taking specific actions based on a decision.

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
- Risk
- Assumption
- Decision
- Open Question

This set supports the first Section Catalog without requiring every section to map directly to a Product Artifact type.

Some sections are artifact-heavy. Other sections may be primarily section content or views over related artifacts.

Assumption is included because the Section Catalog contains `Risks, Assumptions and Open Questions`, and assumptions provide important implementation handoff context.

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


### 5.6

What relationships are essential for the MVP?

Current candidate:

- supports
- addresses
- belongs_to
- validates
- depends_on
- affects
- explains
- blocks
- relates_to

**Answer:**


---

# 6. Document vs Graph Architecture

This section explores the canonical product state representation.

Related open question: `ARCH-001`

## Questions

### 6.1

Is the canonical state an artifact graph, a document tree, or both?

**Answer:**


### 6.2

Can a document section be a view over multiple artifacts?

**Answer:**


### 6.3

Can one artifact appear in multiple document views?

**Answer:**


### 6.4

What happens when the user edits prose that corresponds to structured artifacts?

**Answer:**


### 6.5

How much structure is needed for MVP before it becomes too heavy?

**Answer:**


---

# Notes

Use this section for additional thoughts that do not fit neatly into the questions above.
