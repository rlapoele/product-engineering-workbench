# Current Focus

**Status:** Active

**Last Updated:** 2026-08-18

---

# Current Objective

Maintain a solid and coherent knowledge foundation while validating the next document-first UX and product-specification decisions.

The authorized authenticated Project-to-first-Goal technical slice is complete. Current work returns to product discovery and specification; no additional implementation scope is implied.

---

# Current Milestone

**Repository Foundation and First-Slice Validation**

The repository is being established as the project's long-term memory.

Initial foundation work has defined the product vision, core principles, repository organization, product scope and initial Project Model.

Current work focuses on resolving the remaining model questions and validating the interaction models needed for subsequent specification work.

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
- Product Engineering Stages are now defined as optional, template-owned orientation metadata: the initial template maps its Section Catalog to Explore, Discover, Define, Design, Specify, Validate readiness and Handoff, while preserving non-linear work and leaving lifecycle, readiness and handoff behavior unchanged.
- The MVP minimum Product Artifact set and common artifact fields have been accepted.
- The initial artifact relationship types and artifact lifecycle states have been accepted.
- The MVP default Handoff Profile has been clarified as `Implementation Handoff`, a human-readable and AI-useful export profile.
- The MVP direction has been clarified as document-first, template-driven and implementation-handoff oriented.
- Capability-based collaboration with human and AI contributors has been clarified as a core product concept.
- Contributor availability has been clarified for the MVP: human collaborators are invitation-gated, while AI assistance is personally enabled through each human user's valid Bring Your Own AI credentials and is not shared with other collaborators.
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
- The `Goals and Success Criteria` authoring model is now validated: the prepared document exposes a direct `Add Goal` action for an empty section, Goals own optional Goal Success Criteria as structured children, and those criteria retain readable measurable statements plus optional Measure, Target and Timeframe qualifiers. Goal Success Criteria are distinct from Acceptance Criteria and are not independent Product Artifacts.
- Goal outcome edits now use explicit owner judgment rather than inferred semantics: `Wording only` preserves criteria, while `Goal meaning changed` creates a local, per-criterion review state. Optional `What next?` guidance ranks that review after general impact outcomes and lists Goals with no Success Criteria before empty required sections.
- Goal archival is now bounded: `Archive Goal` has local explicit confirmation, removes the Goal and its owned Success Criteria from active document work without a content Revision, and retains the complete set for restoration through an explicit archived/history view.
- Multiple Goals now use a lightweight ordered-document presentation: derived Goal and Success Criterion numbering supports scanning, while `Move Goal up` and `Move Goal down` change only document composition and never replace stable identities or alter Goal meaning.
- The `Product Overview` is now bounded as section-owned canonical prose rather than a Product Artifact: its template guidance leads to a direct `Write Product Overview` action, a private multi-paragraph draft and an explicit section-content Revision. It summarizes product orientation without duplicating detailed knowledge, does not infer impact, and defers rich-text formatting to a later document-wide capability decision.
- `Problem or Opportunity` now uses optional section-owned Problem and Opportunity prose blocks: either or both may be authored through explicit local actions, while at least one satisfies required-section coverage. The blocks explain pain and unlocked value without choosing solutions, have private drafts and locally confirmed clearing, and defer rich-text formatting to the same later document-wide decision.
- `Non-Goals` is now bounded as an unordered list of lightweight section-owned statements. Each explicitly records an intentional boundary, has its own draft and section-content Revision boundary, and avoids independent artifact lifecycle, relationship and impact-propagation complexity.
- `Target Users or Personas` now contains canonical User Profile Product Artifacts. A profile is deliberately either a broad Target User or an evidence-informed Persona, with flexible relevant context and profile-local goals, pain points and product needs that may later be explicitly linked to User Need artifacts.
- `User Needs` now uses independent, user-centred artifacts that explicitly identify one or more User Profiles, the need to achieve or resolve, and the expected outcome. The document supports both need-first and profile-first creation without silent synchronization from profile-local notes.
- `Scope` now has fixed section-owned In Scope and Out of Scope blocks. It makes the specification boundary readable without duplicating broader Non-Goals, supports tightly constrained prose and list blocks, and never infers artifact impact from text alone.
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
- The README/readiness/report/AI-disclosure representation thread is closed: a representative matrix covers every readiness state, report inclusion or omission, and disclosure state while preserving consistent README, manifest and Handoff History semantics.
- Project Conversations are now bounded as a dedicated, topic-led working-memory workspace: they are scoped multi-party exchanges, distinct from Collaboration Requests and canonical Product Knowledge, retain source context without becoming inline specification chat, and may be initiated only by accepted human collaborators from within a Project.
- Bring Your Own AI has been established: provider and model credentials belong to an individual human user, so enabling AI support is personal and does not make that user's provider access, usage or configured AI available to project collaborators.
- Personal AI Assistants are now defined for the MVP: users may configure multiple named assistants and select a default; contributions use the assistant name and a compact assistant cue, while ownership is discoverable through its profile and provider/model details remain in the owner's settings.
- Conversation recipients are now bounded for the MVP: users add existing Project collaborators or their already configured assistants; invitations and assistant setup remain outside the Conversation flow, and assistants contribute only after an explicit owner invocation.
- Conversation recipient management is now bounded: the initiator controls human recipients, participants control only their own assistants, the Project owner has a human-recipient safety override, and removals preserve history while removing a former participant's assistants.
- Conversation completion is now bounded: people may leave, assistants never leave autonomously, initiators close rather than leave, and closed Conversations are retained read-only without reopening, deletion or inactivity-based automatic closure in the MVP.
- Conversation workspace navigation is now bounded: Active Conversations are the default list, while Closed Conversations remain searchable and readable in a separate collapsed group or filter.
- Conversation initiation is now bounded: the workspace defaults new threads to Project scope, while whole-Specification, Section, Product Artifact and selected-content entry points carry progressively narrower scope; pending invitees and assistants do not initiate Conversations.
- Conversation outcome capture is now bounded: any human with access may copy conversation material, while only the Project owner may create or update canonical knowledge from an entire Conversation or selected messages through ordinary reviewed save flows.
- Conversation Outcome Links are now bounded as internal bidirectional navigation/provenance: they distinguish Archived from genuinely Broken targets, are removable only by their creator or the Project owner, and never enter a handoff.
- Artifact placement is now bounded for the MVP: a new artifact is placed deterministically at the end of its canonical section, an unselected destination section requires explicit enablement or cancellation, and saved reordering remains within that section as a document-composition Revision.
- The complete owner-facing Conversation outcome-capture journey has been validated: selected-message source, destination choice, missing-section recovery, explicit save, Outcome Link and separate section-local reorder remain coherent.
- Conversation outcome-capture readiness is now bounded: the MVP relies entirely on the Project owner's explicit judgment and adds no ready status, prompt, recommendation or participant signal; activity, inactivity, apparent agreement, assistant analysis and closure never infer readiness.
- Conversations and scoped Collaboration Requests are now prioritized as separate optional paths: direct recipient participation supports evolving discussion, while requests seek bounded asynchronous responses; owner-led outcome capture is core MVP, and creating or linking a request from a Conversation is a stretch capability.
- Standalone Collaboration Requests now have one explicit recipient: capability and availability guide selection but never create a queue, broadcast or group request; multi-party context belongs in a Conversation.
- The standalone Collaboration Request lifecycle is now bounded: a required Request Brief and explicit Draft, Submitted, In Progress, Responded, Declined and Cancelled states preserve one bounded response cycle; Reopen applies only to Responded or Declined requests, while Cancelled is terminal. A reopened Declined request may change recipient privately before resubmission; its former recipient retains a frozen Declined list record while the reassigned cycle stays private to the owner and new recipient.
- AI-targeted Collaboration Requests now have a bounded interruption path: explicit owner invocation starts or resumes only the owner's usable Personal AI Assistant; technical interruption or lost eligibility moves the request to AI-specific On Hold, which never auto-resumes, reorders on restored eligibility, or exposes private provider/model, credential, credit or failure details.
- Paired MeatLoop journeys validate standalone Collaboration Requests: human review exercises In Progress, response handling and the Declined alternative, while personal-AI review exercises explicit invocation, On Hold and owner-only resume without changing Product Knowledge.
- Standalone Collaboration Request creation is now defined as a scope-led, local progressive-disclosure flow: contextual Specification, Section, Product Artifact and selected-content entries establish scope, while the request list starts scope-first; writing the Request Brief creates the private Draft, derived context is read-only, and human versus personal-AI submission remains explicit.
- Collaboration Requests remain Project-scoped in the MVP: their Project request list is the canonical workplace, while any future cross-project home summary is limited to orientation and routing back into a Project rather than creating a global request-management surface.
- Project roles and home-page orientation are now bounded: a Project Owner is its creator, an accepted invited person is a Project Collaborator, and the roles are mutually exclusive within one Project; the home page routes users through Projects and compact attention only, with recipient responsibility remaining request-specific.
- The Project Collaboration Requests workspace now has one role-aware, paginated list: **Requests you created** for the owner and **Requests for you** for the selected collaborator recipient. It is searchable, filterable and sortable; responses remain in their parent request as a separately labelled handling-status field rather than a distinct list or area.
- The Project Collaboration Requests list defaults are now defined: no lifecycle or response-handling filter; **Last updated — newest first** based only on meaningful updates visible to the viewer; a compact filter and sort set; compact request-oriented rows; parent-contained response handling; and explicit Previous response labelling after Reopen.
- A complete role-aware list journey is now validated: role boundary, search and filters apply before sorting and 25-item pagination; filters reset to page one; search and response filters exclude private and retained-history content; and deterministic tie-breaking keeps pages stable.
- Collaboration Request detail is now defined as one newest-first Request Cycle structure: current context and response remain prominent; earlier immutable snapshots load on demand beneath immediate summaries; and concise milestone history avoids an activity-feed or chat surface.
- Compact current-cycle states and role-specific actions are now defined: owner draft, handling, cancellation and reopening controls; human response drafting and decline; and bounded AI cancellation or resume actions.
- The complete human decline-and-reassignment journey is now validated: a private response draft is discarded on decline, a discarded reopened draft restores the original Declined cycle without exposing a tentative replacement, and the former recipient's frozen list record does not reveal or reorder for the reassigned cycle.
- The complete AI request-detail journey is now validated: explicit invocation, actual start, interruption, non-reordering restored eligibility, explicit best-effort resume, bounded response handling and terminal cancellation remain legible without exposing incomplete assistant output.
- Collaboration Request recipient selection is now defined: eligibility sets Project-role, assistant-ownership and Project-setting boundaries; invitation-gated human and usable personal-AI availability determine what is selectable; and capability provides explainable, non-binding fit guidance without automatic routing, ranking, presence, workload or delivery-management behavior.
- Recipient-selection scenarios are now validated: no recipient path disables initial request creation; an already-started Draft survives later unavailability but cannot submit until corrected; and a reopened Declined request may select an eligible available human or the owner's Personal AI Assistant while preserving the former recipient's frozen cycle.
- The first Assistance Request Type matrix boundary is validated: `Prepare Handoff` is available only from whole-Specification and eligible Section roots, never an individual Product Artifact or selected-content scope; an eligible but insufficient section retains its scope and exposes deterministic missing-definition checks without preparing a package.
- The `Validate Readiness` matrix boundary is validated: whole-Specification, eligible Section and active Product Artifact scopes produce non-canonical local knowledge-quality assessments with explicit context limits; selected content is unavailable; and no result substitutes for deterministic Implementation Handoff Readiness inside `Prepare Handoff`.
- `Validate Readiness` now derives explicit deterministic fact checks for its recipient: a transient composer preview becomes an immutable per-cycle context snapshot on submission, remains separate from assessment and handoff outcomes, and does not silently refresh, score, route, block work or change Product Knowledge.
- The `Review` matrix boundary is validated: whole-Specification, eligible Section and active Product Artifact scopes use one visible, confirmed Review Lens; composite checks stay within that lens; and non-canonical coverage findings never become approval, certification or readiness results.
- The initial Review Lens catalog is defined as Requirements Quality, UX Quality, Accessibility, Security, Testability and Implementation Readiness. Compatibility is structural and non-routing: it filters lenses by the source's declared content role, makes all lenses available to whole-Specification Review, and limits selected-content Review to the fragment and immediately relevant compatible host context. Compatibility never establishes context sufficiency, recipient fit, certification or a deterministic readiness outcome.
- Security Lens compatibility is validated for an active Product Artifact that defines integration behavior: the system boundary makes the scope compatible, while missing contract, authentication, data-handling or verification detail becomes explicit context limits or Findings rather than structural ineligibility, certification or a readiness outcome.
- Implementation Readiness Lens compatibility is validated for an eligible `External Integrations` Section with incomplete dependency knowledge: implementation-bearing active content makes the Section compatible, while missing webhook contract or account ownership remains a context limit or Finding and never becomes a deterministic handoff result, report or package action.
- Accessibility Lens compatibility is validated for selected text inside an interaction-oriented UI Requirement: it inherits the compatible host's immediate context but yields only fragment-level accessibility coverage Findings, never a conclusion about the host, implementation or accessibility conformance.
- Whole-Specification Testability Review is validated as a cross-section specification-coverage assessment: it identifies only documented behavior lacking observable acceptance evidence or validation links, and never executes tests, creates test results, certifies implementation or produces a readiness outcome.
- UX Quality Lens compatibility is validated for an active User Flow: its experience-oriented journey, states and interaction guidance support grounded flow-clarity, transition, feedback, recovery and continuity Findings, while missing knowledge remains a context limit and the Review never certifies usability, accessibility, implementation or readiness.
- The initial Review Lens catalog now has focused validated coverage for all six lenses across active Artifact, eligible Section, selected-content and whole-Specification exercises.
- The initial Contribution Response model is validated through review and feedback examples: one bounded response may contain discrete one-shape items; only Findings use Finding Types; summaries synthesize rather than replace items; and any related edit or proposal remains a separate non-canonical response item.
- Contribution Response presentation and follow-through are now bounded: request detail keeps response items together with shape/type labels and linked remedies; acknowledgement is automatic only on deliberate fully rendered response access and never reorders the list; dismissal remains retained item evidence; and Act On or separate drafts/saves remain explicit requestor judgments.
- Context Sufficiency is now request-specific and validated across review and feedback: sufficient supports the requested contribution, partial supports caveated grounded local work, and insufficient returns Questions and missing-basis explanation without changing compatibility, lens, scope or recipient.
- Canonical Product Knowledge authority is owner-only in the MVP: only the Project Owner may create or edit a private draft, explicitly save a canonical record or Revision, and optionally record one whole-response Response Source Link at that save. Project Collaborator, requestor and recipient describe participation or request roles rather than write authority; collaborator delegation is deferred.
- Response-to-Revision traceability is deliberately minimal: when the Project Owner saves a Revision, they may explicitly link one whole Contribution Response as its source; the optional link remains owner-visible Revision-history evidence, never a separate response trace, collaborator disclosure, handoff field, automatic acceptance, item disposition or authorship claim.
- Context Relevance is now a request-specific inclusion rule: ordinary assembly contains only Primary and Supporting context; Optional material requires an explicit Brief need before submission; structurally nearby but non-supporting material remains excluded without a global relevance score or graph-distance rule; and a recipient who needs more material returns a Question or caveated response until the owner explicitly Reopens and resubmits revised context.
- The inactive MVP implementation cut is now selected: a new or returning authenticated user reaches a calm Project home, creates and later revisits an owner-controlled Project using the fixed `Implementation-Ready Web App Specification` / `Standard Web App` starter, then creates and explicitly saves one Active Goal with its first Revision. This is a planning boundary only; it does not authorize implementation or resolve the remaining technical, contract, prototype or quality packages.
- The selected first slice now has an online-first, offline-evolvable architectural posture: the slice remains server-authoritative and online-only, while its Project data and command boundaries, stable identifiers, retry-safe writes, saved-state version information and private-draft distinction preserve the option for later single-owner offline authoring. Local storage, synchronization, conflict resolution and offline collaboration remain deferred.
- The selected first slice now has a technology-neutral system-boundary model: one deployable online modular monolith separates browser presentation, identity, server application commands, canonical persistence and the fixed starter. The browser never authorizes ownership or owns canonical state; Project creation and first Goal save are explicit atomic command boundaries.
- The selected first slice now has its baseline data and lifecycle contracts: Project creation server-selects and records fixed starter `implementation-ready-web-app-specification.standard-web-app` at immutable version `1`, materializes its empty Specification without a Revision, captures an owner-editable Project `contentLocale` pre-filled from the resolved Interface Locale, and returns retry-safe authoritative state; explicit Goal save atomically creates canonical Active Product Knowledge and immutable Revision 1. Relationships, expanded history and all collaboration or synchronization behavior remain deferred.
- The MVP Artifact lifecycle is simplified to Active, Stale and Archived. Revision history records creation and updates; private edit-in-progress drafts plus review, validation and coverage evidence are separate from lifecycle. System-detected semantic impacts mark active Artifacts Stale with causal paths; owner update or confirmation returns only that Artifact to Active. Archive retains history, while a future owner-only hard delete is a separate Archived-only retention operation rather than a soft status.
- The selected first slice now has a low-fidelity UX prototype and completed solo Prototype Review: its saved Goal is presented as canonical knowledge without a Draft status; simulated recovery, 320px/1440px layout and preliminary accessibility semantics were reviewed without contradiction or unsafe recovery path. Automated keyboard injection could not traverse the local browser harness, so that limitation is explicitly recorded rather than treated as conformance evidence; the Project Owner's earlier browser walkthrough remains the manual interaction evidence. Independent first-time-user and broader accessibility input remain execution-stage recommendations for the working product, alongside the engineering-quality baseline. Browser-locale detection, interface-language settings, visual design, authentication mechanics and broader MVP capability remain deferred.
- The selected first slice now has a proportionate five-gate engineering-quality baseline covering core correctness, owner-only authority and privacy, journey/accessibility validation, recovery/observability and release discipline. It treats Product Knowledge as confidential by default while deferring enterprise-scale availability, performance and compliance commitments.
- The five first-slice decision packages are coherent: the chosen scope, online modular-monolith boundaries, atomic data contracts, completed proportionate interaction review and quality gates describe the same owner-controlled journey. The Project Owner granted Implementation Authorization for the named ADR-026 slice after accepting the Dependency Verification Record. The accepted access/identity contract requires authenticated, server-derived owner identity, owner-only Project access and privacy-preserving non-owner results; the accepted content-locale contract defaults editable Project Content Language from the resolved Interface Locale; and the starter contract fixes immutable server-selected starter version `1` without auto-upgrade.
- The first-slice identity mechanism is now Better Auth with Google and GitHub OAuth only. It derives server-side owner authority from the authenticated session, permits automatic provider association only for verified same-email identities and never trusts a browser-submitted email or provider identifier as ownership. Password authentication, anonymous access, account recovery and account-linking UI remain deferred.
- The first-slice browser interaction architecture is Astro server-rendered pages with bounded React Islands. React component state and hooks hold only local interaction state; reads and explicit commands remain behind the Project data and command boundary and canonical state stays server-authoritative. A separate state library, client-side router, TC39 Signals polyfill and Web Component extraction are deferred.
- The first-slice persistence and migration model is Railway-hosted PostgreSQL through `pg` and parameterized SQL, with explicit transactions for atomic commands. `node-pg-migrate` runs committed forward-only SQL migrations in a separate private, terminating Railway migration job; its distinct credential owns schemas while the application runtime credential has least privilege. A successful migration release gates the application release from the same source revision; application auto-deployment may not bypass it. Railway's database service is unmanaged, so real content requires a rehearsed recovery procedure with point-in-time recovery when available. Node 22 is the minimum supported runtime baseline; the exact supported LTS major remains implementation verification.
- The first-slice environment, observability and release-evidence model is local disposable development/testing plus isolated persistent Railway staging with synthetic data and Railway production with real Product Knowledge. Staging and production use separate database, identity and OAuth configuration. Each applies the two-gate migration/application release model. Pino JSON logs, Railway health/resource metrics, and a content-free PostgreSQL operational ledger provide proportionate diagnosis and durable release evidence; no external telemetry vendor, PR environment, pager, SLO or automatic alerting is selected. Staging restoration is required before real content, then quarterly and before data-moving or destructive migrations.
- The first-slice Project command boundary now uses owner-scoped `GET` reads and dedicated same-origin JSON `POST` Astro endpoints for Project creation and first-Goal save. Each bounded, server-validated Zod envelope carries an Operation ID and command input; it returns authoritative saved state or a narrow safe error result. Commands independently require the configured same-origin `Origin`, JSON and a non-simple command header, offer no CORS, use no-store Project responses, and keep Better Auth's authentication-route CSRF protection separate. A generic command endpoint, cross-origin API and browser-supplied authority remain out of scope.
- The first-slice verification stack is now selected: `astro check` and production build; Vitest with React Testing Library/user-event for unit and component coverage; Testcontainers PostgreSQL with actual migrations and a Better Auth test-only factory for integration coverage; and Playwright with axe scans for the built Node application. Chromium is mandatory for automated journeys and Firefox/WebKit provide release-candidate smoke coverage. The committed suite and source-revision evidence records retain the automated result; manual VoiceOver/Safari validation and its scenario template are planned as broader MVP work progresses. Staging OAuth uses dedicated synthetic accounts at first release and after identity configuration changes; automated browser tests never introduce a production auth bypass.
- The first-slice PostgreSQL schema is now selected: application-generated UUIDv7 IDs; `app` canonical Project, Specification, Goal, immutable Goal Revision and idempotent command-outcome tables; `auth` Better Auth tables; `ops` content-free operational tables; and `migration` ledger. Explicit constraints, foreign keys, append-only runtime grants and atomic transactions preserve ownership, Revision immutability and exact same-owner Operation-ID retries. This is a first-slice-complete schema, not a premature MVP-wide Product Artifact storage decision; the later general artifact persistence strategy remains open.
- Project portability now has a distinct future contract: a versioned machine-oriented Project Archive, separate from the partial one-way Implementation Handoff Package, retains transferable canonical Project knowledge and history plus managed Resource files. Import validates the archive and creates a newly owned Project with remapped local IDs and retained import lineage; it never restores authority, overwrites or merges a Project. Conversations, sessions, credentials, operational data and personal state are excluded. The archive format and its later implementation remain deferred.
- The modular-monolith code organization is now defined as capability-oriented Application Modules with proportionate task-shaped Ports and concrete adapters that depend inward. The Project and Fixed Starter modules are the initial core; future Implementation Handoff and Project Archive modules consume public Project contracts rather than persistence internals. Astro, React, Better Auth, PostgreSQL/`pg`, archive/resource handling, Pino/operational evidence and Railway are adapters/runtime composition, not domain authority. No generic repository/event bus/DI/CQRS framework or microservice split is selected; dependency direction is initially maintained by module design and code review.
- The first-slice executable specification now fixes the minimal source layout, public Project read/command contracts, thin Astro UI/API adapter routes, browser Project client, two separate Composition Root configuration contracts, dependency-boundary checklist and implementation sequence. It remains a build blueprint for the accepted first slice only: it selects no additional product behavior, package versions or environment-variable spellings.
- The accepted Dependency Verification Record establishes Node `24.14.1`, the exact compatible Astro/React, Better Auth/PostgreSQL and verification-tool package set, a reviewed Better Auth `auth`-schema generation path and a Testcontainers PostgreSQL migration exercise. It rejects TypeScript `7` in favor of `6.0.3` for the selected Astro check tooling, keeps the Better Auth generation CLI isolated from the application runtime because its development-only graph has advisory findings, and records the version-pinned Kysely dependency required solely for Better Auth PostgreSQL composition. The authorized ADR-026 implementation is complete, including retry, discard, request-boundary, OAuth/sign-out and content-locale hardening. Railway migration gating, staging OAuth, recovery and production checks remain later release-readiness gates, while manual VoiceOver/Safari validation is planned as broader MVP work progresses.

---

# Current Activities

- Validate the first-pass document editing and impact-feedback flow through prototypes and concrete specification exercises.
- Validate accessibility, keyboard behavior and visual density of the Resource Reference attach, preview and replacement controls through a low-fidelity prototype.
- Validate deterministic next-step guidance through prototypes and concrete specification exercises.
- Validate additional readiness-aware handoff edge cases through concrete specification exercises.
- Validate detailed context assembly rules for remaining generation and feedback examples.
- Validate the first Section Catalog, Project Preset classification and Product Engineering Stage attribution through concrete specification exercises.
- Validate remaining export-format details and package-generation constraints beyond the resolved README, readiness, report and AI-disclosure representations.
- The Project Collaboration Requests list defaults have been clarified: no lifecycle or response-handling filter; **Last updated — newest first** based on meaningful events visible to the viewer; a compact filter and sort set; compact request-oriented rows; parent-contained response handling; and an explicit Previous response label after Reopen.
- Owner, collaborator, AI On Hold and reopened-request scenarios validate the Collaboration Requests list: the collaborator keeps a frozen read-only prior view after Reopen, viewer-visible events determine list ordering, and restored AI eligibility does not reorder an On Hold request before explicit Resume.
- The complete role-aware list journey is validated: search, filters, sorting, 25-item pagination and retained response history preserve role visibility and current-cycle boundaries.
- Validate additional Context Relevance rules through concrete assistance request examples.
- Use the clarified AI assistance governance stance when refining provenance, contribution review and export visibility.
- Define remaining artifact-type-specific propagation exceptions and future implementation constraints for the deterministic propagation engine.
- Use the selected first-slice system boundaries, data contracts, interaction-validation model and engineering-quality baseline when evaluating future implementation readiness.
- Preserve the completed ADR-026 slice as a bounded, verified reference; do not broaden its product scope without new product knowledge and specification.
- Use the Project Model to inform the next UX, AI and architecture documents.

---

# Current Priorities

1. Resolve the open Product Knowledge Model questions.
2. Keep terminology coherent across glossary, knowledge and planning documents.
3. Use the Project Model as the source for upcoming UX, AI and architecture knowledge.
4. Use the completed first slice as evidence and a constraint while validating the next product and UX decisions.
5. Select any later implementation increment only after its necessary knowledge and interaction model have been crystallized.

---

# Implementation Entry Guidance

**Status:** Historical planning record — first slice complete

This section records the decision packages that were needed before the intentionally selected first implementation slice began. Those packages informed the completed ADR-026 slice; they do not authorize a further increment, create delivery tasks, establish a schedule or require future product work to follow the same sequence.

This record illustrates how the project chose a deliberately narrow vertical slice rather than attempting the complete MVP at once.

| Future decision package | Intended outcome | Indicative discussion effort |
|---|---|---:|
| MVP implementation cut | **Selected (inactive planning):** authenticated entry; first-use orientation; Project creation with title, optional description and the fixed `Implementation-Ready Web App Specification` / `Standard Web App` starter; continuous Specification entry; one Goal created and explicitly saved as Active Product Knowledge with its first Revision; later return to the Project. Template/preset choice, section customization, AI, collaboration, Resources, propagation and handoff are deferred. | Completed through focused discussions |
| Technical architecture | Frontend, backend, persistence, authentication, API boundaries and technology choices. | 3–4 focused discussions |
| Data and lifecycle contracts | Concrete schema and behavior for Projects, Specifications, Product Artifacts, Revisions and owner-only authority. | 2–3 focused discussions |
| First-slice UX prototype | Validate document navigation, editing, save/revision, empty/loading/error states and keyboard behavior. | 3–4 prototype or specification exercises |
| Engineering quality baseline | Test strategy, security and privacy baseline, observability, deployment and environment assumptions. | 2–4 focused discussions |

The initial estimate was 12–18 focused discussions or exercises before starting that first slice. The selected package was implemented without broadening its scope. Collaboration Requests, Bring Your Own AI integration, AI disclosure, Resource References, impact propagation and full handoff generation remain deferred behind stable boundaries; they do not imply the next implementation increment.

---

# Explicitly Out of Scope

The following activities remain intentionally deferred beyond the completed first slice:

- Additional Product Artifact creation and editing beyond the first Goal
- Later revisions, lifecycle actions, relationships and impact propagation
- Starter selection, alternate presets and section customization
- Collaboration, Conversations and AI integration
- Resources, implementation-handoff generation and Project Archive/import
- Offline synchronization and delivery-management functionality

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
- PROC — crystallization of Conversations into stable knowledge

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
