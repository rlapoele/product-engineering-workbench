# AI Orchestration

This document describes how artificial intelligence should participate in the Product Engineering Workbench.

The objective is to define AI as an optional contributor to product knowledge, not as the foundation of the product.

---

# 1. Purpose

Artificial intelligence should help users produce clearer, more complete and more implementation-ready product specifications.

AI should assist with thinking, drafting, reviewing, analysis and handoff preparation while leaving the user in control.

AI assistance should operate on structured context whenever possible rather than isolated text.

---

# 2. AI Contributor

An AI Contributor is an artificial intelligence participant that can contribute to a project.

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

AI-generated contributions should usually begin as drafts, suggestions or reviews until accepted by a human project owner or authorized contributor.

AI assistance inside the workbench should be visible and governable.

When an AI Contributor participates through a scoped request, users should be able to see:

- that the contribution came from an AI Contributor;
- the Assistance Request Type and scope;
- the capability or Review Lens used;
- the assembled context when available;
- whether the response has been accepted, rejected, ignored or superseded;
- any resulting Revision or Provenance update.

The workbench should not silently convert AI output into canonical product knowledge.

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

The same capability model should apply to both human contributors and AI contributors wherever possible.

For the MVP, AI Contributors provided by the application should be available by default when their capabilities are enabled and usable. Unlike human collaborators, built-in AI Contributors do not need to be invited into a project before the user can request assistance from them.

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

AI assistance may feel more immediate than human collaboration, but it should remain scoped and request-driven. AI Contributors should not silently change canonical product knowledge without the project owner or authorized contributor accepting or acting on the contribution.

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

Review should produce a more structured evaluation against a specific lens or standard, such as requirements quality, UX quality, accessibility, security, testability or implementation readiness.

Review should be treated as a composite Assistance Request Type.

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

Initial MVP Response Shapes:

| Response Shape | Expected Use |
|---|---|
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
- Inferred Context suggested by analysis, AI assistance or system inference;
- supporting knowledge such as Decisions, Risks, Assumptions, Open Questions, Reviews, Discussions, Provenance and project metadata.

Candidate Context should then be filtered and weighted according to the Assistance Request Type, requested scope, expected Response Shape, contributor capability, Review Lens and known context limits.

For the MVP, context can be treated as primary, supporting, optional or excluded.

Primary Context is the context required to make the central judgment for the selected Assistance Request Type and lens.

Supporting Context explains, constrains or validates that judgment.

The same artifact type may be primary for one request and supporting for another. For example, Goals and Target Users may support an Implementation Handoff Readiness review but become primary for a Product Strategy review.

For the MVP, the default lens for Validate Readiness should be Implementation Handoff Readiness.

The system should assess whether context is sufficient, partial or insufficient before fulfilling an AI assistance request.

Insufficient context should not always block the request. The system may ask a clarifying question, warn that the response will be limited, suggest linking or creating missing artifacts or allow the user to proceed with limited context.

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

| Request | Primary Context | Supporting Context | Typical Response Shapes |
|---|---|---|---|
| Improve selected text | selected text, containing artifact or section | product name, product vision, goals, target users, glossary terms | Suggested Edit, Comment |
| Find Gaps on User Story | User Story, parent Feature, existing Acceptance Criteria | related User Needs, Functional Requirements, Non-Functional Requirements, Screen/View or User Flow | Finding, Proposed Artifact, Question |
| Find Inconsistencies on Feature | Feature, directly related Requirements, Decisions, Acceptance Criteria | Goals, Non-Goals, constraints, related sections, Open Questions, Risks | Finding, Question, Proposed Decision, Suggested Edit |
| Analyze Impact on Requirement | selected Requirement, directly related artifacts, parent Feature, affected Acceptance Criteria, affected Screen/View or User Flow, dependencies and known constraints | Goals, User Needs, Non-Goals, Decisions, Risks, Open Questions, data/domain model, external integrations, implementation guidance, previous Reviews | Summary, Finding, Proposed Relationship, Proposed Artifact, Proposed Decision, Question |
| Validate Readiness on whole Specification | included sections, required artifacts, artifact statuses, Acceptance Criteria, Functional and Non-Functional Requirements, Risks, Open Questions, technical constraints, validation/testing guidance | Goals, Non-Goals, Target Users, Decisions, Assumptions, UX Requirements, data/domain model, implementation guidance, previous Reviews | Readiness Result, Finding, Summary, Proposed Artifact, Question |
| Prepare Handoff | requested export scope, Handoff Profile, active included sections and artifacts, Functional and Non-Functional Requirements, Acceptance Criteria, UX/UI design guidance, Screen/Views, User Flows, technical constraints, external integrations, implementation and validation guidance, artifact statuses, Decisions, Risks, Assumptions, Open Questions, relationship and dependency information, direct active dependencies outside the scope | Vision, Goals, Non-Goals, Target Users, User Needs, data/domain model, prior readiness results and Reviews, relevant Discussions, known Provenance when required by project policy or Handoff Profile | Handoff Material, Summary, Finding, Question, Readiness Result |

For Find Gaps, missing related artifacts may be useful output rather than a reason to block the request.

For Find Inconsistencies, the request needs comparison targets. If no related context is available, the system may still review internal wording, but the Context Explanation should state that no comparable related context was available.

For Analyze Impact on a Requirement, the request should inspect both upstream and downstream context. Upstream context explains why the requirement exists, such as Goals, User Needs, parent Features or Decisions. Downstream context identifies what the requirement affects, such as Acceptance Criteria, UI Requirements, User Flows, Screen/Views, related Requirements, Risks, Open Questions, integrations or implementation guidance.

If a Requirement has few or no relationships, impact analysis may still produce a limited response based on the requirement text and containing section, but the Context Explanation should state that relationship-based impact could not be fully assessed. Missing relationships may become Findings or Proposed Relationships.

Prepare Handoff is distinct from Validate Readiness. Validate Readiness judges whether product knowledge is ready for implementation. Prepare Handoff composes the best available implementation package for the requested export scope and Handoff Profile.

For the MVP, Prepare Handoff should use the default `Implementation Handoff` profile when no profile is selected. It should generate caveated Handoff Material whenever there is meaningful product definition, even when artifacts are Stale or Risks, Assumptions, Open Questions, blockers or missing UX/UI design guidance remain.

The resulting package should make those caveats prominent in the implementation brief and verification guidance. It should include or reference direct active dependencies outside the requested export scope, clearly labeling them as external dependencies. It must not silently omit limitations or create false confidence.

The request should be blocked or ask a clarifying question only when the export scope is not meaningful or there is too little product definition to prepare a responsible package. A preparation outcome such as `Prepared` or `Prepared with Caveats` describes the package, not the lifecycle state of any Product Artifact.

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

The workbench should make known AI participation visible, reviewable and governable.

Governance should focus on actions the product can actually control:

- whether built-in AI capabilities are enabled for a project;
- which scopes can receive AI assistance;
- which Assistance Request Types are available;
- which context is assembled for the request;
- whether AI responses can directly change canonical product knowledge;
- how AI-generated or AI-assisted content is represented in Contribution, Revision and Provenance records;
- how AI involvement is surfaced in exports when relevant.

The workbench can govern AI assistance that occurs inside the product.

It cannot reliably prevent a human contributor from using external AI tools outside the workbench and submitting the result without disclosure.

The product should therefore avoid claims that it can prove content was or was not externally AI-assisted.

Instead, the MVP should support:

- explicit disclosure when a contributor marks their contribution as AI-assisted;
- visible Provenance when AI-generated or AI-assisted content is accepted;
- contribution review before canonical product knowledge changes;
- project settings that define whether built-in AI assistance is enabled;
- export metadata or notes that identify known AI-assisted knowledge when useful.

Unknown external AI use should be treated as a governance and trust policy issue rather than a technical prevention problem.

---

# 11. Current Direction

AI should be optional, capability-based and context-aware.

The MVP should support AI assistance as contributions to the specification process while also producing exports that can be consumed by external AI implementation environments.

For the MVP, the default `Implementation Handoff` profile should be human-readable and AI-useful. It should support human developers, AI-assisted developers and AI implementation environments through the same generated package.

`IMPLEMENTATION_BRIEF.md` should include a suggested implementation sequence to help human and AI consumers choose an implementation order from the specification.

Future Handoff Profiles may include AI-oriented consumers such as Codex, Claude Code, Gemini or Cursor, but the Handoff Profile concept itself is not AI-specific. It should also support human, agency, client and QA handoff needs.

Known AI assistance should be visible through Contributions, Revisions, Provenance and exports when relevant.

External AI assistance used privately by human collaborators cannot be reliably prevented or proven by the workbench, so it should be handled through disclosure, review and project governance expectations.
