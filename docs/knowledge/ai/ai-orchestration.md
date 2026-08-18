# AI Orchestration

This document describes how artificial intelligence should participate in the Product Engineering Workbench.

The objective is to define AI as an optional contributor to product knowledge, not as the foundation of the product.

---

# 1. Purpose

Artificial intelligence should help users produce clearer, more complete and more implementation-ready product specifications.

AI should assist with thinking, drafting, reviewing, analysis and handoff preparation while leaving the user in control.

AI assistance should operate on structured context whenever possible rather than isolated text.

## Bring Your Own AI

The MVP uses **Bring Your Own AI (BYO-AI)**. Provider and model credentials are owned by an individual human user. A user who supplies valid usable credentials may enable AI support for themselves; that enablement does not make AI support, credentials, provider access or associated usage available to the project owner or any other collaborator.

AI availability is therefore evaluated for the current human user. The user's configured AI may be used only when their personal AI support is enabled, their provider and model are usable, and the requested action is permitted by applicable Project settings. The workbench must not treat a Project as owning a shared AI credential or an AI Contributor as independently available because another human has enabled AI support.

Each human user may configure multiple **Personal AI Assistants** and mark one as their default. A Personal AI Assistant has a user-chosen display name and uses a selected provider/model configuration owned by that human user. The default display name is possessive and generic, such as `Alex's assistant`; the user may rename it, for example to `Alfred`. A default assistant is preselected for convenience only and never authorizes automatic AI activity.

Provider and model details are available only in the owning user's AI settings/configuration. The product may use Assistance Request Types, capabilities, Review Lenses, Context Assembly and bounded internal workflows to shape AI behavior without exposing those configuration details or presenting behavior modes as separate AI identities.

For an AI-targeted Collaboration Request, only the requestor's own enabled, usable Personal AI Assistants are eligible. The requestor's explicit `Submit and ask` action invokes the selected assistant; merely selecting it or preparing a request Draft does not. The request records Submitted and moves to In Progress only after the assistant has actually started work. If AI assistance becomes unavailable before start, or processing is technically interrupted, the request enters the AI-specific `On Hold` status. Eligibility restoration never resumes processing automatically: only the assistant owner may explicitly invoke `Resume assistant`, which resumes or retries the same private response work. `On Hold` does not promise a provider-side checkpoint; resumption may use an available private draft or retry from retained request context. Provider, model, credit, credential and detailed technical-failure information remain private to the owner. The assistant never declines, cancels or resumes a request autonomously; insufficient context produces a bounded Question or caveated response rather than a Declined state.

---

# 2. AI Contributor

An AI Contributor is a Personal AI Assistant acting as a participant in a Project.

AI Contributors may:

- ask clarifying questions;
- generate draft content;
- review Product Artifacts;
- identify inconsistencies;
- propose missing requirements;
- analyze risks;
- check implementation readiness;
- suggest acceptance criteria;
- summarize discussions;
- help prepare export or handoff materials.

AI-generated contributions should begin as non-canonical drafts, suggestions or reviews until the Project Owner explicitly reviews and saves any resulting Product Knowledge change.

AI assistance inside the workbench should be visible and governable.

When an AI Contributor participates through a scoped request, the Project Owner should be able to inspect:

- that the contribution came from an AI Contributor;
- the assistant's display name;
- the Assistance Request Type and scope;
- the capability or Review Lens used;
- the assembled context when available;
- its visible response-handling status; and
- any explicit Response Source Link to a resulting Revision, as an owner-only reference to the existing Revision history.

The workbench should not silently convert AI output into canonical product knowledge.

An assistant is not a separately authenticated User or an independently available Project member. Its owner alone may invoke it. A visible AI contribution records the invoking human for traceability, but the conversation surface shows the assistant's display name with a compact assistant cue; the owner is available through the assistant profile rather than repeated beside every contribution. Provider and model details are not exposed outside the owner's AI settings/configuration.

---

# 3. Capability-Based Assistance

AI assistance should be modeled through capabilities.

A capability describes the kind of contribution a human or AI contributor can provide.

This allows the project owner to request help based on the action they want to perform rather than based only on a fixed role.

Example AI capabilities include:

- Requirements Generation
- Requirements Review
- UX Review
- Architecture Review
- Security Review
- Accessibility Review
- QA Review
- Risk Analysis
- Consistency Analysis
- Implementation Readiness Review
- Export Preparation

The same capability model should apply to both human contributors and AI contributors wherever possible. Capability is explainable, non-binding guidance about known fit for a request; it may help the Project Owner choose but never automatically routes, ranks, assigns or excludes a candidate by itself.

For the MVP, AI Contributor eligibility and availability are personal rather than invitation-gated. An AI recipient must be the requestor's own assistant and applicable Project settings must permit the requested assistance; it is selectable only when its owner's BYO-AI configuration is enabled and usable. Another collaborator's credentials and configured AI are not available to them. A configured but unusable assistant may be identified only as `AI assistance unavailable`; provider, model, credential, credit and detailed failure information remain private. An AI Contributor does not need a human-collaborator invitation.

An initial Collaboration Request cannot begin unless at least one eligible and available recipient exists. If an AI assistant becomes unavailable after a private Draft has begun but before explicit submission, the Draft remains private and submission is disabled until availability returns or the owner selects another eligible available recipient. After a human request is Declined, its reopened Draft may select the owner's eligible, available Personal AI Assistant; the assistant receives only that new Request Cycle and is still invoked only by the owner's explicit `Submit and ask` action.

AI Contributor availability should still respect project settings, permissions and enabled capabilities.

---

# 4. Assistance Scope

The project owner should be able to request AI assistance at different scopes.

Possible scopes include:

- entire project;
- entire specification document;
- document section;
- Product Artifact;
- selected content;
- open question;
- export package.

The requested scope should determine which context is assembled for the AI Contributor.

AI assistance may feel more immediate than human collaboration, but it should remain scoped and request-driven. AI Contributors should not silently change canonical Product Knowledge; in the MVP, only the Project Owner may explicitly save a resulting change.

---

# 5. Assistance Request Types

AI assistance should support the same compact set of user-facing Assistance Request Types used for human collaboration where possible.

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

The selected Assistance Request Type should help determine:

- which AI capability is needed;
- which scope is relevant;
- which context should be assembled;
- which response format is expected;
- whether the result should be presented as comments, findings, suggested edits, proposed artifacts, proposed decisions or handoff material.

Request Feedback should produce open-ended observations, comments, questions and suggestions.

Review should produce a more structured evaluation against one explicit lens or standard, such as requirements quality, UX quality, accessibility, security, testability or implementation readiness.

Review should be treated as a composite Assistance Request Type. It may run several Check Types within its one selected Review Lens; multiple lenses require separate requests.

An AI Review may orchestrate multiple Check Types, such as:

- Gap Check
- Inconsistency Check
- Ambiguity Check
- Testability Check
- Feasibility Check
- Alignment Check
- Risk Check
- Readiness Check

Focused request types may run one check directly, while Review may run several checks together.

For example, Find Gaps may run a Gap Check, while a Requirements Quality Review may include gap, inconsistency, ambiguity and testability checks.

Some checks may be safely run in parallel, while others may depend on earlier results. For example, a readiness judgment may depend on gaps, inconsistencies, risks, blockers and unresolved open questions.

An AI Review workflow may eventually:

1. assemble relevant context;
2. choose the review lens;
3. run relevant checks;
4. consolidate findings;
5. deduplicate overlapping results;
6. summarize the review result;
7. suggest next actions.

Review orchestration may use one AI Contributor or multiple AI agents in the future, but the MVP should not require multi-agent orchestration.

The requestor must see and confirm a Review Lens before submission. A contextual entry may preselect a compatible default when an initial lens catalog declares one, but must not apply it invisibly. Whole-Specification and Specification Section Reviews require a deliberate lens selection. The lens determines primary and supporting context, applicable Check Types and lens-qualified response language. A Review produces Findings, Questions, Suggested Edits, Proposed Artifacts, Proposed Relationships, Proposed Decisions and Summaries; even an Implementation Readiness Lens uses Findings and Summary rather than a Readiness Result.

The initial Review Lens catalog is Requirements Quality, UX Quality, Accessibility, Security, Testability and Implementation Readiness. Their focus is respectively requirement and acceptance-definition quality; user outcomes, flows, states and interaction guidance; accessible outcomes, risks and verification needs; security-relevant outcomes, boundaries, assumptions, risks and verification needs; observable behavior and acceptance evidence; and implementation-relevant behavior, constraints, dependencies and gaps. Accessibility may be standards-informed but never certifies conformance; Security never certifies security; and Implementation Readiness never produces a Readiness Result or deterministic handoff outcome.

The catalog declares structural compatibility, not context sufficiency, capability fit or routing. Requirements Quality is compatible with requirement- or acceptance-oriented artifacts and sections containing that content; UX Quality with experience-oriented content; Accessibility with interaction-oriented content; Security with boundary- or constraint-oriented content; Testability with behavior- or verification-oriented content; and Implementation Readiness with implementation-bearing content. Every initial lens is available for a whole-Specification Review. Selected content inherits compatibility from its containing Artifact or Section, but reviews only the fragment and immediately relevant host context. Missing related knowledge may make a compatible Review partial or insufficient; it does not silently switch lenses, select a recipient, route the request or create a readiness verdict.

For example, an active User Flow is UX Quality-compatible when it defines a user journey, states or interaction guidance. Its Review may assess available flow clarity, transition, feedback, recovery and continuity coverage using related User Needs, User Stories, Screens/Views, UI Requirements, Functional Requirements, Acceptance Criteria and applicable design guidance. Missing knowledge is a context limit or Finding; the result never certifies usability, accessibility, implementation or readiness.

Initial MVP Response Shapes:

| Response Shape | Expected Use |
|---|---|
| Answer | Direct response to a question in the request, including known basis and limits. |
| Comment | General observation or reaction. |
| Question | Clarification needed from the requestor. |
| Finding | Structured result from a review or check. |
| Suggested Edit | Proposed change to existing content. |
| Proposed Artifact | Suggested new Product Artifact. |
| Proposed Relationship | Suggested relationship between Product Artifacts. |
| Proposed Decision | Suggested decision or option. |
| Readiness Result | Readiness judgment with blockers, warnings or next actions. |
| Summary | Condensed explanation of content, context or results. |
| Handoff Material | Generated or refined implementation handoff content. |

Findings may use Finding Types such as Gap, Inconsistency, Ambiguity, Risk, Blocker, Dependency, Recommendation and Readiness Warning.

One bounded Contribution Response may contain multiple discrete response items. Each item has one primary Response Shape; each Finding item has exactly one Finding Type. A Summary may synthesize the items but does not replace them. A Finding and a separately shaped Suggested Edit or Proposal may address the same concern, but neither changes Product Knowledge automatically. Finding Type is not severity, priority, workflow state, task, recipient assignment or a deterministic readiness outcome.

The Project Owner as requestor sees an optional Summary as a compact overview, then the response items in contributor order with their Response Shape labels, Finding Type where applicable and visible links between related concerns and remedies. The owner may dismiss one item as not pursued, retaining it visibly with an optional rationale, or open an ordinary private creation or editing draft from an item. Dismissal is not rejection or deletion, and opening a draft does not apply it; only the owner's ordinary explicit save can create Product Knowledge and a Revision. At that save, the owner may explicitly add one optional whole-response Response Source Link to the resulting Revision. This link means only that the response informed the saved change; it does not record item-level adoption, acceptance, agreement or authorship. The requestor may explicitly mark the whole response Acted On after any mix of consideration, dismissal or separate crystallization; this does not require each item to have a disposition or a linked Revision.

For example, a Requirements Quality Review may return an `Ambiguity` Finding for unclear wording, a `Gap` Finding for missing known acceptance coverage, a Question for unresolved intent, a Suggested Edit for safe clarity improvement, a Proposed Relationship for missing traceability and a Summary. A Security Review may distinguish a grounded `Risk` from an external `Dependency`, while a Request Feedback response remains comment-oriented and uses Comments, Questions, Suggested Edits, Proposals and Summary rather than Findings or Finding Types.

---

# 6. General AI Assistant

The MVP may include a lightweight general AI Assistant in addition to scoped assistance requests.

The general AI Assistant should help users think, navigate the application, understand terminology, ask questions and decide what to do next.

The general AI Assistant should be clearly distinct from scoped Assistance Request Types.

It may help the user choose or initiate a scoped assistance request. For example, after a user asks about missing requirements, the assistant might suggest running a Find Gaps request on the current section.

The general AI Assistant should not become the primary product model and should not silently edit canonical product knowledge.

---

# 7. Context Assembly

AI Contributors should receive context that is relevant to the requested action.

Context Assembly should be relationship-aware rather than based only on nearby document text.

The system should start from the requested scope and gather Candidate Context from:

- Structural Context implied by the Specification Document Template, document structure, section composition, artifact type expectations or artifact hierarchy;
- Explicit Context from manually created, imported or accepted Artifact Relationships and Context References;
- available Resource References attached to the requested scope or relevant selected context;
- Inferred Context suggested by analysis, AI assistance or system inference;
- supporting knowledge such as Decisions, Risks, Assumptions, Open Questions, Reviews, Discussions, Provenance and project metadata.

Candidate Context should then be filtered and weighted according to the Assistance Request Type, requested scope, expected Response Shape, contributor capability, Review Lens and known context limits.

Resource References do not automatically enter every AI request. The workbench should include an attached file or external link only when it is relevant to the requested scope and action, available to the contributor, and permitted by project access rules. When the same Resource is relevant through several selected Resource References, its source may be supplied once, but the Context Explanation must retain each included reference's target and purpose. The explanation should also identify unavailable or excluded material that limits the result.

For the MVP, context can be treated as primary, supporting, optional or excluded.

Primary Context is the context required to make the central judgment for the selected Assistance Request Type and lens.

Supporting Context explains, constrains or validates that judgment.

The same artifact type may be primary for one request and supporting for another. For example, Goals and Target Users may support an Implementation Handoff Readiness review but become primary for a Product Strategy review.

Context Relevance is a request-specific inclusion decision rather than a score, proximity rule or instruction to include every related item. Primary Context is required to make the requested contribution. Supporting Context directly explains, constrains, validates or could materially change it. Optional Context may add detail but is not necessary for a grounded response, so it enters only when the Request Brief explicitly calls for it before submission. Excluded Context does not support the stated contribution even when structurally nearby or related.

Current active Product Knowledge is preferred. Stale knowledge stays visibly caveated; archived knowledge is excluded unless historical comparison or impact reasoning needs it. Directly related contradictory or constraining evidence is Supporting rather than omitted for convenience. Prior Conversations, Reviews and Contribution Responses are Supporting only for comparison, follow-through or prior reasoning. A Resource Reference is included only when its target-local purpose supports the request, while relevant unavailable material becomes a stated limit. Inferred context may guide inspection but cannot satisfy missing Primary context or silently become evidence.

Only Primary and Supporting context enter ordinary assembly by default. A recipient cannot expand a Request Cycle's immutable recorded context after submission; if more material is needed, they return a Question or caveated response and the Project Owner may Reopen and resubmit with revised context. The Context Explanation identifies included Primary and Supporting context and material exclusions or missing anchors; it does not need to inventory every excluded candidate.

For the MVP, the default lens for Validate Readiness should be Implementation Handoff Readiness. This lens guides a contributor's local knowledge-quality assessment; it does not produce the deterministic Implementation Handoff Readiness outcome used by Prepare Handoff.

The system should assess whether context is sufficient, partial or insufficient for the specific Assistance Request Type, Review Lens and stated focus before fulfilling an AI assistance request. It is not a general quality score for the selected scope: the same Product Artifact may be sufficient for one request and partial or insufficient for another.

Context is sufficient when relevant evidence supports all requested checks or the stated feedback focus. It is partial when substantive selected content supports at least one useful bounded contribution but required context for some requested dimensions is absent. It is insufficient when no substantive basis exists for even a bounded contribution to that request. Structural compatibility, recipient fit and routing remain separate and must not change silently because context is partial or insufficient.

A partial request proceeds with a visible Context Explanation, grounded local observations and clear limits on unsupported dimensions. An insufficient request may still be explicitly submitted with a visible warning, but should return Questions and an explanation of missing basis rather than invented Findings, edits, proposals or a positive quality conclusion. The system may suggest creating or linking missing artifacts but does not create them automatically.

For example, an AI Contributor reviewing a User Story may need:

- the User Story;
- related Acceptance Criteria;
- parent Feature;
- related User Needs;
- related Goals;
- relevant Decisions;
- related Risks;
- unresolved Open Questions;
- prior review comments or discussions.

The system should be able to explain which context was provided so that users can understand and trust AI contributions.

Validated example context patterns:

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
| Prepare Handoff | requested export scope, Handoff Profile, active included sections and artifacts, Functional and Non-Functional Requirements, Acceptance Criteria, UX/UI design guidance, Screen/Views, User Flows, technical constraints, external integrations, implementation and validation guidance, artifact statuses, Decisions, Risks, Assumptions, Open Questions, relationship and dependency information, direct active dependencies outside the scope | Vision, Goals, Non-Goals, Target Users, User Needs, data/domain model, prior readiness results and Reviews, relevant Discussions, known Provenance when required by project policy or Handoff Profile | Handoff Material, Summary, Finding, Question, Readiness Result |
| Review UI Requirement with Accessibility Lens | selected UI Requirement; related Screen/View and User Flow; interaction and state behavior; linked Functional Requirements and Acceptance Criteria; applicable UX/UI design guidance; explicit accessibility expectations; declared accessibility target when present | related User Story and User Need; external design references; Decisions, Risks, Assumptions and Open Questions; related UI Requirements; technical constraints; prior UX or accessibility Reviews | Finding, Suggested Edit, Question, Proposed Artifact, Summary |
| Review selected UI Requirement content with Accessibility Lens | selected text and its immediately relevant host UI Requirement context; related Screen/View and User Flow; relevant interaction and state behavior; linked Functional Requirements and Acceptance Criteria; explicit accessibility expectations and declared target when present | related User Story and User Need; external design references; Decisions, Risks, Assumptions, Open Questions, technical constraints and prior UX or accessibility Reviews | Finding, Suggested Edit, Question, Proposed Artifact, Summary |
| Review integration behavior Product Artifact with Security Lens | selected active Product Artifact that defines the integration behavior and system boundary; external-system purpose; directly related Functional Requirements and Acceptance Criteria; explicit authentication, data-handling, constraint, Decision and Risk knowledge; available contract Resource References | related User Stories, User Needs, Screen/Views or User Flows; data/domain rules; dependencies; Assumptions, Open Questions, technical constraints and prior Reviews | Finding, Suggested Edit, Question, Proposed Artifact, Proposed Relationship, Proposed Decision, Summary |
| Review eligible External Integrations Section with Implementation Readiness Lens | selected eligible Section; its implementation-bearing integration content and template purpose; related Functional Requirements and Acceptance Criteria; known dependency, contract and ownership knowledge; technical constraints, Decisions, Risks, Assumptions and Open Questions | adjacent or related Sections; relevant data/domain and user-facing behavior; available Resource References and prior Reviews | Finding, Question, Suggested Edit, Proposed Artifact, Proposed Relationship, Proposed Decision, Summary |
| Review whole Specification with Testability Lens | active behavior-defining Product Knowledge across the Specification; linked Acceptance Criteria and relationships; User Stories, Requirements, UI flows, data/domain rules, integrations, constraints, Risks and Open Questions | Goals, User Needs, Non-Goals, Decisions, Assumptions, Resource References and prior Reviews | Finding, Question, Suggested Edit, Proposed Artifact, Proposed Relationship, Summary |
| Request Feedback on Product Overview | selected Product Overview; stated feedback prompt or focus when provided; product name and current overview content | Problem or Opportunity; Target Users or Personas; Goals and Success Criteria; Scope and Non-Goals; User Needs and Core Features when they clarify the overview; relevant Decisions, Risks, Assumptions, Open Questions and prior feedback | Comment, Question, Suggested Edit, Summary, Proposed Artifact, Proposed Decision |
| Draft Product Overview | stated drafting prompt or source material; selected Product Overview when it contains existing content; section and template guidance; product name | Problem or Opportunity; Target Users or Personas; Goals and Success Criteria; Scope and Non-Goals; User Needs and Core Features when available; relevant Decisions, Constraints, Risks, Assumptions and Open Questions | Suggested Edit, Question, Summary, Proposed Artifact |
| Suggest Alternatives on Core Feature | selected Core Feature; linked User Needs and Goals; stated alternatives prompt, decision focus and constraints; Scope and Non-Goals | Target Users or Personas; related Features, User Stories, Use Cases, Requirements and Acceptance Criteria; dependencies; Decisions; technical constraints; Risks, Assumptions, Open Questions and prior feedback or Reviews | Proposed Decision, Proposed Artifact, Suggested Edit, Summary, Question |
| Ask Question on an Open Question | selected Open Question; requestor's question or framing prompt; the question's rationale, scope, linked and blocked artifacts | related Goals, User Needs, Features, Requirements, Constraints, Decisions, Assumptions, Risks, Open Questions, Discussions and known evidence in the Project State | Answer, Question, Finding, Proposed Decision, Summary |
| Improve Functional Requirement | selected Functional Requirement; stated improvement focus; directly related Feature or User Need; direct Acceptance Criteria | related User Stories, Use Cases, Screen/Views or User Flows; Non-Functional Requirements; technical constraints; Decisions; integrations; Risks, Assumptions, Open Questions and related Requirements | Suggested Edit, Question, Finding, Summary |
| Review Functional Requirement with Requirements Quality Lens | selected Functional Requirement; Requirements Quality Lens; stated review focus; directly related Feature or User Need; direct Acceptance Criteria | User Stories, Use Cases, Screen/Views or User Flows; related Requirements; Non-Functional Requirements; technical constraints; Decisions; integrations; Risks, Assumptions, Open Questions and prior Reviews | Finding, Question, Suggested Edit, Proposed Artifact, Proposed Relationship, Summary |
| Find Gaps on Acceptance Criteria | selected Acceptance Criterion or Criteria; artifact or behavior each criterion validates; sibling Acceptance Criteria that validate the same behavior | related Functional Requirements, User Stories, Use Cases, Features, User Needs, Screen/Views or User Flows; Non-Functional Requirements; Decisions, constraints, integrations, Risks, Assumptions and Open Questions | Finding, Question, Suggested Edit, Proposed Artifact, Proposed Relationship, Summary |

For Find Gaps, missing related artifacts may be useful output rather than a reason to block the request.

For Find Inconsistencies, the request needs comparison targets. If no related context is available, the system may still review internal wording, but the Context Explanation should state that no comparable related context was available.

For Analyze Impact on a Requirement, the request should inspect both upstream and downstream context. Upstream context explains why the requirement exists, such as Goals, User Needs, parent Features or Decisions. Downstream context identifies what the requirement affects, such as Acceptance Criteria, UI Requirements, User Flows, Screen/Views, related Requirements, Risks, Open Questions, integrations or implementation guidance.

If a Requirement has few or no relationships, impact analysis may still produce a limited response based on the requirement text and containing section, but the Context Explanation should state that relationship-based impact could not be fully assessed. Missing relationships may become Findings or Proposed Relationships.

Request Feedback on Product Overview is open-ended and comment-oriented, rather than a structured Review, a gap check or a readiness judgment. It should invite reactions on whether the overview communicates the intended product, problem, audience, value and boundaries clearly enough for the feedback focus. A stated prompt from the requestor should guide the response without narrowing it into an unstated Review Lens.

The request has sufficient context when the overview and enough strategic orientation are available to support a meaningful reaction. It has partial context when some of the Problem or Opportunity, Target Users or Personas, Goals, Scope or Non-Goals are absent; it may still proceed with caveated comments and questions. It is insufficient when the overview contains too little substantive product definition to react to responsibly. The Context Explanation should identify the strategic anchors used and any missing anchors that limited feedback.

Unrelated detailed requirements, screens, implementation guidance and historical material should be excluded unless they directly clarify the overview or the stated feedback prompt. Feedback may identify concerns, uncertainties and improvement opportunities, but it must not present an implementation-readiness result or a structured Review conclusion unless the user separately requests one.

Draft Product Overview is generative assistance that creates or refines a first version of the section from explicit source material and applicable template guidance. It should use the stated drafting prompt, available overview content and the section's structural guidance as primary context. Problem or Opportunity, Target Users or Personas, Goals, Scope and Non-Goals anchor the draft; User Needs, Core Features, Decisions, Constraints, Risks, Assumptions and Open Questions should be included only when they materially shape the overview.

The request has sufficient context when it contains a meaningful product intent, audience or problem and enough scope or outcome information to draft a bounded overview. It has partial context when one or more of those anchors are absent; it may return a limited draft that makes its assumptions and open questions visible. It is insufficient when no substantive product input or drafting prompt exists, in which case the contributor should ask clarifying questions rather than fabricate product claims.

The draft should distinguish accepted knowledge from assumptions, questions and suggestions. It must not imply that generated content is validated or silently add new product facts to canonical knowledge. The Context Explanation should identify the source material and template guidance used, together with missing anchors that constrained the draft.

Suggest Alternatives on a Core Feature should optimize for the intended User Need and Goal rather than preserve the current feature by default. Its primary context includes the selected Core Feature, the User Needs and Goals it addresses, any stated alternatives prompt or decision focus, applicable constraints, Scope and Non-Goals. The request may produce four kinds of Alternative Proposal: a feature variant, an outcome-preserving substitute, a scope or timing change such as deferment, or a reframing that questions whether the feature addresses the right need or goal.

Each Alternative Proposal should identify the intended outcome it supports or reassesses, its rationale, benefits and trade-offs, assumptions and Open Questions, and likely affected product knowledge when known. It may express a recommendation with its conditions, but must not make a decision or change canonical knowledge. The expected Response Shapes are Proposed Decision, Proposed Artifact, Suggested Edit, Summary and Question.

The request has sufficient context when the feature, its intended outcome and relevant boundaries or constraints are available. It has partial context when outcome links or constraints are incomplete; it may still suggest local feature variants, but must label strategic alternatives such as deferment or substitution as constrained by the missing outcome context. It is insufficient when the selected feature has too little substantive definition and no meaningful source material or prompt exists. The Context Explanation should identify the outcome links, constraints and boundaries used, together with missing context that limits the alternatives.

Ask Question on an Open Question should help the requestor formulate, understand or seek a response to the selected question without treating the contributor's response as a decision. Its primary context includes the selected Open Question, the requestor's stated question or framing prompt, the question's rationale and scope, and artifacts it blocks or directly relates to. The expected Response Shapes are Answer, Question, Finding, Proposed Decision and Summary.

An Answer should distinguish known product knowledge from assumptions, limits and unresolved dependencies. The request has sufficient context when the Open Question is clear and bounded and relevant context is available to reason about it. It has partial context when related knowledge or constraints are missing; the contributor may still answer from the available context while making those limits visible. It is insufficient when the Open Question or requestor prompt is too ambiguous to understand. A contributor must not present an Answer as an automatic resolution or modify product knowledge.

Contribution Responses are conversation records. When a contributor submits an Answer, it is Submitted. It becomes Acknowledged when the requestor deliberately opens fully rendered response content for the first time, and the requestor may later explicitly mark it Acted On to indicate that they have dealt with its content. A list row, notification, compact preview or loading state does not acknowledge it. Automatic acknowledgement does not update Last updated, reorder the request list or create a lifecycle-history event. These statuses have no direct effect on Product Knowledge, do not apply the Answer and do not require a linked Revision or note. Any subsequent update, Decision or other Product Knowledge change remains a separate, manual action by the requestor.

Improve Functional Requirement should make the requirement clearer, more precise or more testable while preserving its established behavioral intent. Its primary context includes the selected Functional Requirement, any stated improvement focus, the directly related Feature or User Need, and direct Acceptance Criteria. Supporting context may include User Stories, Use Cases, Screen/Views or User Flows, Non-Functional Requirements, technical constraints, Decisions, integrations, Risks, Assumptions, Open Questions and related Requirements.

The expected Response Shapes are Suggested Edit, Question, Finding and Summary. The Suggested Edit must not silently introduce behavior, expand scope, resolve an assumption or choose an implementation approach that is not established in the assembled context. When the contributor identifies a needed behavior or scope change, it should return a Question or Finding rather than include that change in the edit.

The request has sufficient context when the Functional Requirement and enough behavioral context are available to preserve its intent. It has partial context when relationships, validation coverage or constraints are missing; it may still improve wording or structure, but the Context Explanation must state that alignment or testability could not be fully assessed. It is insufficient when the requirement is too vague or empty and no linked scope or behavioral context is available. In that case, the contributor should ask clarifying questions rather than rewrite the requirement.

Review Functional Requirement with Requirements Quality Lens is a Requirements Quality Review. It is a structured assessment of specification quality, not an editing request or an implementation-conformance claim. The default Requirements Quality Lens may combine clarity and ambiguity, completeness of actor, trigger, behavior and outcome, consistency with linked knowledge, testability and Acceptance Criteria coverage, traceability, dependencies, assumptions, constraints and avoidable unsupported implementation prescription. The requestor may add a narrower review focus, such as testability or ambiguity.

Primary context includes the selected Functional Requirement, Requirements Quality Lens, any stated review focus, directly related Feature or User Need, and direct Acceptance Criteria. Supporting context includes User Stories, Use Cases, Screen/Views or User Flows, related Requirements, Non-Functional Requirements, technical constraints, Decisions, integrations, Risks, Assumptions, Open Questions and prior Reviews. The expected Response Shapes are Finding, Question, Suggested Edit, Proposed Artifact, Proposed Relationship and Summary.

Missing Acceptance Criteria or relationships should normally become Findings rather than block the review. Context is sufficient when the Functional Requirement contains meaningful behavior and enough related knowledge is available for the requested checks. It is partial when alignment, traceability or testability cannot be assessed; the review may still assess internal clarity and make its limits visible. It is insufficient when the requirement has too little substantive content to assess. The review should conclude that requirements-quality coverage appears sufficient for the current scope, that findings were identified, or that quality cannot yet be assessed from the available specification. These conclusions do not validate the requirement's implementation.

Find Gaps on Acceptance Criteria assesses whether the selected Acceptance Criterion, selected set or Acceptance Criteria section supplies the necessary acceptance evidence for known intended behavior. It is distinct from a Requirements Quality Review, which assesses a Functional Requirement; this request focuses on the coverage and verifiability of the criteria themselves. It does not create test results or certify implementation conformance.

Primary context includes the selected Acceptance Criterion or Criteria, the artifact or behavior each criterion validates, and sibling Acceptance Criteria that validate the same behavior. Sibling criteria are primary comparison context even when a single criterion is selected, so that the contributor does not propose duplicate coverage. Supporting context includes related Functional Requirements, User Stories, Use Cases, Features, User Needs, Screen/Views or User Flows, Non-Functional Requirements, Decisions, constraints, integrations, Risks, Assumptions and Open Questions.

The contributor should report only gaps grounded in available product knowledge. It may identify a missing trigger, precondition, actor or observable outcome; known behavior without coverage; an untestable criterion; or a missing validation relationship. It may identify error, boundary, alternate-state, permission or transition coverage only when the specification establishes that behavior as relevant. It must not invent generic edge cases merely because they are customary.

The expected Response Shapes are Finding, Question, Suggested Edit, Proposed Artifact, Proposed Relationship and Summary. A small addition to an existing criterion may be a Suggested Edit; a new criterion or traceability link remains a non-canonical Proposed Artifact or Proposed Relationship. Missing relationships should normally become Findings rather than block the request. Context is sufficient when the selected criteria, their validated behavior and enough known behavior are available to assess coverage. It is partial when the contributor can assess local clarity but not coverage fully, and must explain that limit. It is insufficient when the selected criteria have too little substantive content and no target behavior or source context is available. The conclusion should state that acceptance coverage appears sufficient for the current scope, that gaps were found, or that coverage cannot yet be assessed from the available specification.

Validate Readiness is available from the whole Specification, an eligible Specification Section, or an active Product Artifact. An eligible Section has non-whitespace section content or an active contained Product Artifact. It is unavailable from selected content because a text fragment cannot establish the structural boundary required for a readiness judgment; the contributor may instead assess its containing Artifact or Section. An incomplete active Artifact remains assessable, but the result must say that its basis is insufficient rather than make a positive local-readiness claim.

A Readiness Result assesses the selected scope only: whether its available Product Knowledge is clear, complete, coherent and adequately supported for that scope's stated purpose. It must state the scope and purpose, the evidence and Context Explanation, local strengths and gaps, risks, dependencies, and suggested follow-up. Context may be sufficient, partial or insufficient. With partial context, the contributor may assess what is observable but must name the limits. With insufficient context, it may identify missing knowledge or ask questions but must not make a positive readiness claim. The result is non-canonical and does not certify implementation, delivery workflow, implementation conformance or handoff readiness; it creates no Product Knowledge change, lifecycle state, task or preparation action.

When the requestor selects Validate Readiness and an eligible scope in the local composer, the workbench derives a non-persistent Readiness Fact Check Set preview. It checks only explicit Project State rules: structural eligibility, template-declared content expectations, active or Stale status, explicit relationships and validation coverage, known blockers and direct dependencies. Each result identifies its rule and affected knowledge as `Satisfied`, `Attention needed`, `Not applicable` or `Cannot determine`; it is evidence for the recipient, not an automated readiness conclusion. Immediately before the requestor explicitly submits, the workbench reruns the set and retains it with the Request Cycle's immutable recorded context for the human or AI recipient. It does not silently rerun after submission. An explicit Reopen and resubmission creates a fresh snapshot in the new cycle while the earlier result remains immutable. Fact checks do not score, rank, route, block a request, create work or change Product Knowledge, and do not run the Handoff Profile's meaningful-definition rules or produce `Ready`, `Ready with Caveats` or `Not Ready`.

Prepare Handoff is distinct from Validate Readiness. Prepare Handoff composes the best available implementation package for the requested export scope and Handoff Profile.

When deterministic readiness validation is enabled as part of Prepare Handoff, the MVP should use Implementation Handoff Readiness rules over explicit Project State rather than requiring an AI judgment. AI may later provide a clearly identified optional interpretation, but it must not replace the deterministic readiness outcome.

For the MVP, Prepare Handoff should use the default `Implementation Handoff` profile when no profile is selected. It should generate caveated Handoff Material whenever there is meaningful product definition, even when artifacts are Stale or Risks, Assumptions, Open Questions, blockers or missing UX/UI design guidance remain. The first meaningful-definition rule for a feature-centered scope requires an active Feature, at least one explicitly related active Functional Requirement and one or more active Acceptance Criteria such that every included Functional Requirement is explicitly validated by at least one criterion. User Stories and Use Cases may support the assembled context but do not replace the Functional Requirement in this rule. For a UX/UI-centered scope, the assembled context must include active Screen/View artifact(s), a User Flow explicitly including those views, related UI Requirement(s), and underlying Functional Requirement(s) with Acceptance Criteria validating each included requirement. For an integration-centered scope, it must include External Integrations section content identifying the external system and purpose, known integration behavior, related Functional Requirement(s), and Acceptance Criteria validating each included requirement. External contract, constraint, ownership and dependency details are included when known and must remain caveated rather than invented when unavailable. For a data-model-centered scope, it must include active Domain Concepts and their explicit relationships, at least one active Domain Rule governing them, related Functional Requirement(s), and Acceptance Criteria validating each included requirement. Implementation-level schema details must not be invented when unavailable.

The resulting package should make those caveats prominent in the implementation brief and verification guidance. It should include or reference direct active dependencies outside the requested export scope, clearly labeling them as external dependencies. It must not silently omit limitations or create false confidence.

For a mixed-scope request, the requestor explicitly distinguishes Definition Scope from Supporting Context. Each Definition Scope activates its applicable minimum-definition rule, and all active rules must pass. Supporting Context may explain, constrain or caveat Definition Scope but does not activate another rule. Shared Functional Requirements or Acceptance Criteria may satisfy multiple scopes only through explicit relationships; the workbench must not auto-add missing knowledge. The resulting package labels Definition Scope, Supporting Context and Direct External Dependencies separately.

For a partial package, the AI-generated material must preserve that boundary. The README and implementation brief summarize it for human consumers, while the manifest is the authoritative machine-readable record. Combined and section-level specification files contain only included Definition Scope and Supporting Context, labeled by role; they must not imply that they represent the full Project Specification. Directly related out-of-package knowledge is named only when useful to explain the boundary. Direct External Dependencies remain distinct from included knowledge.

The readiness check applies only to the requested export scope and its direct external dependencies. It can produce `Ready`, `Ready with Caveats` or `Not Ready`; this result is distinct from the package result. A meaningful scope may still produce `Prepared` or `Prepared with Caveats` when its readiness outcome is Not Ready.

The request should report insufficient product definition and not prepare a package only when the export scope is not meaningful or there is too little product definition to prepare responsibly. This boundary applies even when readiness validation is disabled. A preparation outcome such as `Prepared` or `Prepared with Caveats` describes the package, not the lifecycle state of any Product Artifact.

Review UI Requirement with Accessibility Lens is an Accessibility Specification Review. It evaluates whether the selected product knowledge defines accessible outcomes, risks and verification needs clearly enough to guide implementation and later evaluation.

The review may combine gap, ambiguity, inconsistency, testability and risk checks. It should assess available evidence for keyboard and focus behavior, assistive-technology expectations, labels and feedback, error and state handling, non-color cues and contrast where visual values are specified, responsive or reflow behavior, and dynamic-content or media implications when relevant.

The default lens is standards-informed but must not claim accessibility conformance. A declared target, such as WCAG 2.2 AA, becomes primary review context and may be used to map findings to relevant criteria. Without a declared target, the Context Explanation must say that the review applied general accessibility principles and cannot certify conformance.

The review should conclude that accessibility specification coverage appears sufficient, that gaps or risks were found, or that accessibility cannot yet be assessed from the available specification. These are conclusions about specification readiness; conformance requires evaluation of the implemented interface.

When an artifact update or archive marks downstream artifacts as Stale, the initial impact propagation should be deterministic system behavior over the Product Knowledge Graph.

AI should not be required to identify the initial set of potentially impacted artifacts.

AI assistance may be offered afterward as a contextual action on Stale artifacts. For example, the user may request recommendations, suggested edits, findings, proposed relationships, proposed artifacts, questions or summaries to help resolve the stale state.

This should use existing Assistance Request Types such as Analyze Impact, Review, Improve or Suggest Alternatives rather than adding a new MVP Assistance Request Type.

---

# 8. AI Implementation Environments

The workbench should distinguish AI Contributors from AI Implementation Environments.

An AI Contributor participates inside the workbench to help create, review or refine product knowledge.

An AI Implementation Environment consumes exported product knowledge outside the workbench in order to implement the specified software product.

Examples of AI Implementation Environments may include coding-agent environments, AI-assisted IDEs or autonomous implementation tools.

The workbench does not initially implement software delivery itself. Instead, it should prepare implementation-ready knowledge that external environments can consume.

---

# 9. Implementation Handoff

The exported specification should be usable as an implementation handoff package.

This package should provide enough context for:

- a human developer;
- an AI-assisted developer;
- an AI implementation agent;
- a combination of humans and AI agents.

The package should make the intended product, constraints, acceptance criteria, risks, open questions and implementation guidance explicit.

Future AI orchestration decisions should consider how exported specifications are consumed by external implementation environments.

For the MVP, the Implementation Handoff Package should include an `IMPLEMENTATION_BRIEF.md` generated by default.

The implementation brief should summarize:

- what should be built;
- target users;
- core scope;
- key features;
- technical constraints;
- acceptance and testing expectations;
- risks and unresolved open questions;
- suggested implementation order when available.

The export should also include a top-level `manifest.json` as the minimal required metadata file.

---

# 10. AI Assistance Visibility And Governance

The workbench should make known AI participation traceable, reviewable and governable without universally disclosing it.

Governance should focus on actions the product can actually control:

- whether a user's personal BYO-AI support is enabled and usable for a project action;
- which scopes can receive AI assistance;
- which Assistance Request Types are available;
- which context is assembled for the request;
- whether AI responses can directly change canonical product knowledge;
- how known AI activity is represented in Contribution, Revision and Provenance records;
- whether and where AI involvement is disclosed in the workbench or a handoff.

The workbench can govern AI assistance that occurs inside the product.

It cannot reliably prevent a human contributor from using external AI tools outside the workbench and submitting the result without disclosure.

The product should therefore avoid claims that it can prove content was or was not externally AI-assisted.

Instead, the MVP should retain a known AI activity trace for in-product AI assistance and voluntary external-AI declarations. The project owner can inspect its request, scope, response, context explanation, status and any explicit provenance or Revision link. An explicit Response Source Link may be reached there only when the owner recorded it at the ordinary Revision save; the trace must not infer a response-to-Revision relationship, represent an absent link or become a separate response-trace surface.

The trace does not establish exact final-text authorship after human editing, or prove whether undisclosed external AI was used.

AI-use disclosure is a project-owner setting and is off by default. When enabled, it has one selected destination: Workbench only, Workbench and handoff, or Handoff only. Workbench only is the default enabled destination. Disclosure controls automatic presentation to collaborators and handoff consumers; it does not remove the project owner's access to the known AI activity trace.

Contribution review remains required before canonical product knowledge changes. When disclosure includes handoff, `README.md` provides a concise human-readable known-AI disclosure and `manifest.json` is the authoritative structured record. They include only entries whose declared scope is included in the package, never raw prompts, assembled context, raw responses or Response Source Links by default, and state the known-activity, non-authorship and non-detection limits. Workbench disclosure likewise does not expose Response Source Links to collaborators. If no known activity relates to included scope, they state that limited absence with the same caveat.

Unknown external AI use should be treated as a governance and trust policy issue rather than a technical prevention problem.

---

# 11. Current Direction

AI should be optional, capability-based and context-aware.

The MVP should support AI assistance as contributions to the specification process while also producing exports that can be consumed by external AI implementation environments.

For the MVP, the default `Implementation Handoff` profile should be human-readable and AI-useful. It should support human developers, AI-assisted developers and AI implementation environments through the same generated package.

`IMPLEMENTATION_BRIEF.md` should include a suggested implementation sequence to help human and AI consumers choose an implementation order from the specification.

Future Handoff Profiles may include AI-oriented consumers such as Codex, Claude Code, Gemini or Cursor, but the Handoff Profile concept itself is not AI-specific. It should also support human, agency, client and QA handoff needs.

Known AI assistance should remain traceable through Contributions, Revisions and Provenance. Its automatic disclosure within the workbench or an export follows the project-owner disclosure setting.

External AI assistance used privately by human collaborators cannot be reliably prevented or proven by the workbench. Voluntary declarations may be included in the known AI activity trace; undisclosed external use remains a governance and trust limitation rather than a detection claim.
