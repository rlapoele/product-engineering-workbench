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
- AI assistance visibility and governance have been clarified: known in-product AI assistance should be visible, reviewable and governable, while undisclosed external AI use by human collaborators cannot be reliably prevented or proven by the workbench.
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

---

# Current Activities

- Validate the first-pass document editing and impact-feedback flow through prototypes and concrete specification exercises.
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
- Revisit whether AI assistance disclosure should be required, optional, policy-driven or omitted from the product experience.
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
