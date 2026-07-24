# Current Focus

**Status:** Active

**Last Updated:** 2026-07-22

---

# Current Objective

Establish a solid and coherent knowledge foundation for the Product Engineering Workbench before beginning implementation.

The current priority is to validate the initial Product Knowledge Model and use it to guide the next UX, AI and architecture knowledge documents.

---

# Current Milestone

**Repository Foundation**

The repository is being established as the project's long-term memory.

Initial foundation work has defined the product vision, core principles, repository organization, product scope and initial Project Model.

Current work focuses on resolving the open model questions needed to make the foundation coherent enough for specification work.

Recent clarification established the first target user as an AI-assisted developer and strengthened the MVP direction around a document-first, template-driven specification experience.

---

# Completed Foundation Work

- Product vision and goals have been documented.
- Core product and UX principles have been documented.
- Product Engineering has been distinguished from Product Delivery.
- Repository organization has been established.
- The initial Project Model and Product Knowledge Model have been defined.
- Product Artifact has been established as canonical terminology.
- Initial concepts for relationships, workflow templates, contributors, decisions, reviews, revisions, provenance, context and readiness have been documented.
- Open questions from the Project Model have been moved into the planning register.
- The first target user has been clarified as an AI-assisted developer.
- Specification Document Template has been introduced as the user-facing term for project-start templates.
- The MVP has been clarified to start with one `Implementation-Ready Web App Specification` template backed by a reusable Section Catalog and multiple Project Presets.
- The first Section Catalog and initial Project Preset classification have been accepted as a first pass.
- The MVP minimum Product Artifact set and common artifact fields have been accepted.
- The initial artifact relationship types and artifact lifecycle states have been accepted.
- The MVP default Handoff Profile has been clarified as `Implementation Handoff`, a human-readable and AI-useful export profile.
- The MVP direction has been clarified as document-first, template-driven and implementation-handoff oriented.
- Capability-based collaboration with human and AI contributors has been clarified as a core product concept.
- Contributor availability has been clarified for the MVP: human collaborators are invitation-gated, while application-provided AI collaborators are available by default when their capabilities are enabled and usable.
- The initial MVP Assistance Request Type set has been clarified as a compact user-facing set, including Request Feedback and Review as distinct interaction intents.
- Review has been clarified as a composite Assistance Request Type that may include multiple checks, while focused request types may expose individual checks directly.
- Initial MVP Contribution Response Shapes and Finding Types have been clarified.
- The first-pass conceptual Context Assembly model has been clarified: context starts from requested scope, expands through structural, explicit and inferred context, filters by request intent and remains explainable.
- The Context Assembly model has been validated against initial examples for Improve selected text, Find Gaps on a User Story, Find Inconsistencies on a Feature, Analyze Impact on a Requirement and Validate Readiness on the whole Specification.
- The Context Assembly model has been validated for Prepare Handoff: it composes a caveated package for a meaningful scope, makes direct external dependencies and current knowledge limits visible, and includes available UX/UI design guidance.
- The Context Assembly model has been validated for Review UI Requirement with Accessibility Lens: it assesses accessibility specification coverage, risks and testability without claiming implementation conformance.
- The Context Assembly model has been validated for Request Feedback on Product Overview: it uses strategic context to support open-ended, caveated feedback without turning the request into a structured Review or readiness judgment.
- The Context Assembly model has been validated for Draft Product Overview: it grounds a first version in explicit source material and template guidance, makes assumptions and questions visible, and does not manufacture product facts.
- The Context Assembly model has been validated for Suggest Alternatives on a Core Feature: it optimizes for the intended User Need and Goal, permits substitutes and deferment, and makes strategic limits visible when outcome context is incomplete.
- The Context Assembly model has been validated for Ask Question on an Open Question: answers remain conversational responses, while requestor-controlled acknowledgment and acted-on statuses provide visibility without changing the specification.
- The Context Assembly model has been validated for Improve a Functional Requirement: it improves clarity, precision and testability without silently changing established behavior or scope.
- The Context Assembly model has been validated for Review a Functional Requirement with Requirements Quality Lens: it assesses specification quality, gaps and testability without editing the requirement or certifying implementation conformance.
- The Context Assembly model has been validated for Find Gaps on Acceptance Criteria: it compares criteria with known behavior and sibling coverage, returns grounded non-canonical proposals, and does not manufacture generic edge cases.
- AI assistance traceability and governance have been clarified: a project-owner-inspectable known AI activity trace records in-product assistance and voluntary external-AI declarations; disclosure is off by default and, when enabled, may be directed to the workbench, handoff or both without claiming exact authorship or comprehensive external-AI detection.
- Enabled workbench disclosure is project-level rather than artifact-badged: collaborators receive one entry to the scoped trace, while owner trace access stays independent of disclosure destinations and handoff disclosure applies uniformly to all recipients.
- Handoff disclosure is now bounded: when enabled for handoff, README provides a concise caveated statement and manifest is authoritative, representing only included-scope known activity without raw prompts, context or responses.
- The handoff package-boundary preview now includes a derived owner-only AI disclosure section when applicable; it is inspectable and settings-navigable but never manually edited, readiness-affecting or history-creating.
- Prepared Handoff History events retain only a compact immutable AI-disclosure summary, preserving what the package disclosed without becoming a trace browser, package diff or archive-retention feature.
- Screen/View visual-reference context is optional and compact: represented state is free text, while Viewport uses an orientation-aware prescribed list with a required custom `Other` value when needed.
- Artifact change impact propagation has been clarified: when an upstream artifact is updated or archived, deterministic system logic should mark potentially impacted downstream artifacts as Stale and may offer contextual AI assistance afterward.
- The first-pass propagation rules have been validated against concrete scenarios for Goal changes, Requirement changes, Acceptance Criteria archival, User Story changes and archival, Decision changes and Open Question resolution.
- Propagation edge cases have been clarified: semantic multi-hop traversal, cycles, multiple causal paths, archived artifacts, `relates_to`, distance-based review priority and conservative revalidation behavior.
- The first-pass document editing and impact-feedback flow has been clarified: contextual section and artifact action menus, inline artifact editing, persistent private edit-in-progress drafts, explicit `Done editing` revisions, and non-modal impact feedback with persistent document and outline cues.
- The first-pass `What next?` guidance model has been clarified as deterministic, user-invoked and optional, prioritizing the user's unfinished drafts, explicit blockers, active impact outcomes and empty required selected sections.
- The initial deterministic guidance priority order has been validated against a competing-state scenario: an Edit-in-progress Draft ranks ahead of an explicit blocker, which ranks ahead of active Stale artifacts; required-but-empty sections remain available in the full guidance list.
- The readiness-aware handoff flow has been clarified: deterministic scope-level validation is enabled by default but optional; personal handoff preferences are remembered; and an optional default `READINESS_REPORT.md` makes the readiness result available to implementation consumers.
- The initial readiness outcome rules have been validated: a partial scope with Stale knowledge and a non-blocking external dependency is Ready with Caveats; an explicitly blocking external dependency is Not Ready; and an included required-but-empty section is Not Ready. Meaningful scopes still produce caveated handoffs when not ready.
- Multiple simultaneous readiness blockers have been validated: any explicit blocker makes the scope Not Ready; the readiness report groups affected artifacts and dependencies by their originating Open Question, provides one follow-up action per blocker and uses deterministic non-semantic ordering.
- Handoff scope eligibility has been clarified as a deterministic precondition separate from readiness: the MVP `Implementation Handoff` profile requires a whole-Specification or section-rooted scope, while individual artifacts may only narrow a selected section.
- The no-package boundary has been validated: an eligible scope can still lack enough product definition for responsible handoff; this produces Not Ready when validated and prevents package preparation even when validation is disabled.
- The first meaningful-definition rule for a feature-centered handoff has been validated: an active Feature needs explicitly related Functional Requirement(s) and Acceptance Criteria validating each included requirement; other context is profile- or relationship-specific rather than universally required.
- The first meaningful-definition rule for a UX/UI-centered handoff has been validated: Screen/View, User Flow, UI Requirements, underlying Functional Requirements and Acceptance Criteria are all required as an explicitly linked implementation bundle.
- The first meaningful-definition rule for an integration-centered handoff has been validated: external system and purpose, known integration behavior, related Functional Requirements and acceptance coverage are required; unavailable external contract context remains a caveat rather than invented knowledge.
- The first meaningful-definition rule for a data-model-centered handoff has been validated: explicit domain structure, at least one governing rule or invariant, related Functional Requirements and acceptance coverage are required; implementation-specific schema choices remain out of scope.
- Mixed-scope handoff composition has been clarified: user-designated Definition Scopes each apply their minimum rule conjunctively, while Supporting Context informs or caveats the package without activating additional rules.
- Partial handoff package boundaries have been clarified: README and implementation brief explain the boundary for humans, manifest is authoritative for machines, and the specification files contain only labeled included scope rather than claiming to be the whole Project Specification.
- A concrete mixed partial-handoff scenario has validated the combined rules: shared evidence may serve Feature and UX/UI Definition Scopes through explicit relationships; Supporting Context and related omissions remain bounded; and a blocking Direct External Dependency yields Not Ready with a Prepared with Caveats package.
- The first-pass handoff scope-selector interaction has been clarified: whole-Specification default, explicit Handoff Package Role actions, derived read-only external dependencies, per-scope checks and a pre-preparation package-boundary preview.
- A realistic scope-selector journey has validated the transition from the default whole-Specification handoff to a mixed partial handoff: explicitly created Definition Scopes keep Feature and UX/UI checks understandable, shared evidence remains relationship-grounded, and a meaningful package is prepared with caveats when a direct external dependency is blocked.
- A contrasting scope-selector journey has validated the no-package recovery flow: an eligible but insufficient Feature scope retains its selection while ordinary document actions add or include explicit missing definition, and saved Revisions deterministically re-evaluate checks without auto-creating knowledge or tasks.
- Handoff Package Role terminology has been clarified: Definition Scope, Supporting Context and intentionally outside knowledge are user-assigned package roles, while Direct External Dependencies are derived and cannot be assigned or relabeled as included knowledge.
- Handoff history has been scoped deliberately: successful preparations record immutable manifest-derived summaries alongside Product Knowledge Revisions, while MVP excludes built-in package diffs, ambiguous major-action logging and required archive retention.
- Handoff evolution after preparation has been validated: changing current Supporting Context into a new Integration Definition Scope activates new checks without altering earlier Handoff History; a newly meaningful scope produces a separate preparation event.
- General Resource and Resource Reference support has been clarified: managed files and external links may be attached directly to a Specification, Section or Product Artifact, while Screen/View visual references are the first specialized use; resources remain distinct from Product Artifacts, Context References and Artifact Relationships.
- Resource Reference lifecycle and partial-handoff behavior has been resolved: shared Resources have independent target-level references and effectively immutable sources; replacements create new Resources without hidden global updates; target-level reference changes create ordinary Revisions; partial packages exclude Specification-level references by default and de-duplicate shared managed sources while retaining every reference's local meaning.
- The first document-first Resource Reference interaction has been validated: attach from the local contextual actions, describe the target-specific meaning, preview inline when available, and replace through an explicit reuse-or-start-fresh choice for the reference details before saving.
- Resource Reference controls have been refined as a compact contextual wizard: target-aware first-level actions advance to source selection and then reference details, with the current step replacing the prior controls rather than adding persistent document buttons or nested hover menus.
- Local non-modal progressive disclosure has been established as the default for contextual document interactions, preserving the user's place while steps replace or expand nearby content with ordinary back navigation.
- Resource Reference draft preservation has been bounded: source selection alone is transient; edited details or an explicit reuse choice begin a private local draft that persists until saved or discarded.
- Resource Reference draft resumption is contextual rather than permanently flagged: the target action surface offers continuation or discard, temporarily replacing a competing new-reference action until the draft is resolved.
- The MVP limits unsaved Resource Reference authoring to one active draft per attachment target, avoiding a draft picker while allowing independent drafts at different targets.
- The MVP Resource Reference Purpose catalog has been fixed as a compact prescribed list with `Other` for a short custom purpose; administrative metadata configuration is explicitly deferred.
- Resource Reference explanation uses one canonical Description field; downstream consumers may render it as a caption without creating a second field or divergent meaning.
- Visual Context handoff representation is now bounded: the manifest remains authoritative Resource Reference metadata, while Screen / View export content gives implementation consumers a concise, reference-local mention when represented state or viewport is supplied; neither representation promotes it to canonical behavior.
- Shared-Resource handoff semantics are now bounded: the manifest records each source once by URL or package-relative path, references retain local meaning, and only human or requested AI review may assess semantic mismatch in free-text Visual Context; no automatic error, Stale state or readiness block follows from sharing alone.
- Direct handoff semantics are now bounded: disabling readiness validation produces no hidden reduced assessment, readiness outcome or report; the preview states that validation was not run, while ordinary included risk and dependency knowledge remains visible and eligibility and meaningful-definition safeguards still apply.
- Handoff History now distinguishes direct handoffs truthfully: its immutable summary records `Readiness validation not run` instead of a blank or inferred positive outcome, while validated handoffs retain their actual readiness result.
- Direct-handoff presentation now preserves two dimensions: package result remains `Prepared`, validation state is `Readiness validation not run`, and History or confirmation combines them as `Prepared - readiness validation not run` without adding a third result value.
- The manifest now mirrors direct-handoff readiness state for machine consumers: it distinguishes evaluated outcomes from `not_run`, records report inclusion and never relies on a blank value or inferred `Ready` state.
- Package-level readiness disclosure is now symmetric: the README states the evaluated outcome when validation ran and `Readiness validation was not run` for a direct handoff, without generating a substitute report or assessment.
- README entry-point presentation is now ordered for scanning: package metadata, Package boundary, Readiness, conditional Known AI activity and Start here; detailed material remains in the implementation brief, report and manifest.
- A validated `Not Ready` README now separates its `Prepared with Caveats` package result from the readiness outcome, explains that meaningful scope remains but blockers exist, and links to the report instead of repeating blocker detail.
- Evaluated README wording now forms a coherent set: `Ready` reports no blockers or caveats, `Ready with Caveats` reports non-blocking caveats, and both retain separate package results and optional report links without duplicating details.
- README readiness scannability is validated across all four states: a fixed package layout varies only its package result, concise Readiness copy and report link, while boundary, conditional disclosure and navigation stay stable.
- Direct-handoff README disclosure is validated when no included-scope AI activity is known: `Readiness validation was not run` and the caveated no-known-AI statement appear independently, with manifest and Handoff History retaining matching compact state.
- Direct-handoff README disclosure is also bounded when known activity exists: it gives only an included-scope entry count and manifest link, keeping request-level trace detail and authorship claims out of the README while readiness remains independent.
- Evaluated-handoff AI-disclosure scenarios are validated as a batch: `Not Ready` and `Ready with Caveats` remain distinguishable despite the shared caveated package result, while known or no-known activity is separately and concisely disclosed.
- Readiness-report inclusion is now aligned across evaluated handoffs: owner choice affects only the report file and README link, while manifest and Handoff History retain immutable inclusion state without changing outcome or package result.

---

# Current Activities

- Validate the first-pass document editing and impact-feedback flow through prototypes and concrete specification exercises.
- Validate accessibility, keyboard behavior and visual density of the Resource Reference attach, preview and replacement controls through a low-fidelity prototype.
- Validate deterministic next-step guidance through prototypes and concrete specification exercises.
- Validate additional readiness-aware handoff edge cases through concrete specification exercises.
- Validate detailed context assembly rules for remaining generation and feedback examples.
- Clarify how discussions crystallize into stable product knowledge.
- Validate the first Section Catalog and Project Preset classification through concrete specification exercises.
- Clarify the MVP export package structure for implementation handoff.
- Detail the resolved asynchronous Collaboration Request and Contribution Response flow for human and AI contributors.
- Detail contributor selection using both capability and availability.
- Validate the first-pass Assistance Request Type matrix through concrete specification exercises.
- Validate the initial Response Shape and Finding Type model through concrete review and feedback examples.
- Validate additional Context Relevance and Context Sufficiency rules through concrete assistance request examples.
- Use the clarified AI assistance governance stance when refining provenance, contribution review and export visibility.
- Define remaining artifact-type-specific propagation exceptions and future implementation constraints for the deterministic propagation engine.
- Use the Project Model to inform the next UX, AI and architecture documents.

---

# Current Priorities

1. Resolve the open Product Knowledge Model questions.
2. Keep terminology coherent across glossary, knowledge and planning documents.
3. Use the Project Model as the source for upcoming UX, AI and architecture knowledge.
4. Minimize ambiguity before specification or implementation planning begins.
5. Delay implementation until sufficient knowledge has been crystallized.

---

# Explicitly Out of Scope

The following activities are intentionally deferred until the repository foundation is considered sufficiently mature:

- Application scaffolding
- Technology selection refinement
- User interface implementation
- Backend implementation
- Database implementation
- AI integration implementation
- Delivery management functionality

---

# Success Criteria

The current milestone will be considered complete when:

- The product vision is stable.
- Core principles have been documented.
- The repository organization is stable.
- The Product Knowledge Model is coherent.
- The minimum Product Artifact set has been validated.
- Initial artifact relationships and lifecycle states have been validated.
- Initial workflow templates have been identified.
- The glossary contains the project's canonical terminology.
- Important architectural and product decisions have been documented.

---

# Open Questions Driving This Milestone

See:

- `docs/planning/open-questions.md`

Current emphasis:

- DATA — minimum artifact set, common fields, relationships and lifecycle states
- UX — document-first experience over structured product knowledge
- AI — context assembly for AI contributors
- ARCH — canonical product state representation
- PROC — crystallization of discussions into stable knowledge

---

# Next Expected Knowledge Areas

The following areas are expected to receive significant attention next:

- Document-First UX
- Workflow Templates
- Specification Document Templates
- AI Context Assembly
- Capability-Based Collaboration
- Assistance Request Types
- Contribution Response Shapes
- Implementation Handoff Package
- Knowledge Provenance
- Product Knowledge Graph
- Readiness Evaluation
- Conversation Crystallization

---

# Working Philosophy

During this phase, prefer:

Explore

↓

Discuss

↓

Challenge

↓

Crystallize Knowledge

↓

Specify

↓

Implement

Implementation should begin only when the team has sufficient confidence that the knowledge foundation is coherent and stable.

The objective is to reduce unnecessary rework while remaining open to learning and refinement.
