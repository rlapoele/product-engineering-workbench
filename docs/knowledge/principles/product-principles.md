# Product Principles

The Product Engineering Workbench is guided by a set of fundamental principles.

These principles should influence every product decision, regardless of implementation details or technology choices.

Whenever multiple design alternatives exist, the solution that best aligns with these principles should generally be preferred.

---

# P-001 — Help Users Think

The primary purpose of the Product Engineering Workbench is to improve the quality of users' thinking.

The workbench should help users:

- understand problems;
- challenge assumptions;
- explore alternatives;
- identify inconsistencies;
- make informed decisions.

The objective is not to think for users, but to help them think better.

---

# P-002 — Knowledge Before Implementation

High-quality implementation begins with high-quality Product Knowledge and
depends on that knowledge remaining understandable as implementation evolves.

The workbench should encourage exploration, clarification and validation before
implementation begins, then continue to surface relevant learning and possible
misalignment afterward.

Reducing ambiguity early is generally preferable to correcting misunderstandings later.

---

# P-003 — Knowledge Before Documents

The workbench manages structured Product Knowledge rather than an unrelated
collection of documents or files.

Repository-resident files are its durable open representation. A coherent
Specification document is its primary human representation.

Knowledge should remain reusable, interconnected and independent of any particular document format.

---

# P-004 — Humans Remain in Control

The workbench assists decision making.

It does not replace human judgment.

Users remain responsible for creating, validating and maintaining the product knowledge that defines their products.

---

# P-005 — AI Is Optional by Design

Artificial intelligence should enhance the product engineering experience without becoming a prerequisite.

Users must remain capable of creating, reviewing and maintaining product knowledge without AI assistance.

---

# P-006 — Collaboration Is Optional

The workbench should support collaboration without imposing it.

Users should be able to work:

- individually;
- with human contributors;
- with AI contributors;
- or with both.

The product should adapt to different ways of working.

---

# P-007 — Product Engineering First

The Product Engineering Workbench focuses on Product Engineering.

Its responsibility is to help users form, maintain, validate and share Product
Knowledge and assess its alignment with available implementation evidence.

Software implementation and delivery management remain intentionally outside
the responsibility of the workbench.

---

# P-008 — Preserve Knowledge

Knowledge should remain understandable, traceable and reusable throughout the lifetime of a product.

Important discussions should eventually crystallize into stable knowledge rather than remaining buried within conversations.

---

# P-009 — Prefer Clarity Over Complexity

Whenever multiple solutions are possible, prefer the one that improves understanding while preserving capability.

Complexity should emerge only when required by the user's context.

---

# P-010 — Preserve Context

Product knowledge should never exist in isolation.

Artifacts, discussions, reviews and decisions should remain connected so that users understand not only *what* was decided, but also *why*.

---

# P-011 — Support Evolution

Products continuously evolve.

The workbench should support refinement, revision and learning without losing the history and rationale behind important decisions.

Knowledge should evolve deliberately rather than being repeatedly recreated.

The Workbench should remain useful throughout that evolution. A Specification
does not become finished merely because implementation has begun.

---

# P-012 — Integrate Rather Than Replace

The Product Engineering Workbench complements existing tools.

Where appropriate, it should integrate with delivery platforms, implementation environments and AI systems rather than attempting to replace them.

---

# P-013 — Make Known AI Assistance Traceable And Governable

Known AI assistance should be traceable when it participates in the workbench. It should not be universally disclosed by default.

The product should allow the project owner to understand when known AI contributed, what it was asked to do, what context was used and whether an explicit resulting contribution was accepted into canonical product knowledge.

The workbench should make AI assistance governable through project settings, enabled capabilities, scoped requests, contribution review, a known AI activity trace, provenance, revision history and policy-controlled disclosure destinations.

The workbench cannot reliably prevent a human collaborator from using external AI tools outside the system and then submitting the result as their own contribution.

The product should not claim to detect or prevent all external AI use. Instead, it should support voluntary disclosure, traceable provenance for known AI-assisted work, reviewable contributions and project-level governance expectations.

---

# P-014 — Repository Content Is Open But Not Automatically Trusted

Product Knowledge should use a portable repository-resident representation and
remain editable through supported external tools.

Opening a Workspace permits inspection of declared content. It does not make
repository text trusted instruction, authorize command execution or grant an
external agent permission to change canonical Product Knowledge.

External changes should be detected, validated and made understandable without
being silently overwritten.

---

# P-015 — Implementation Is Evidence, Not Intent

Code, tests, commits and runtime behavior may provide important evidence about
the product and its alignment with the Specification.

They must not silently redefine human-owned product intent. Deterministic facts
may affect validation, while interpretations and inferred discrepancies remain
reviewable Observations until humans decide whether Product Knowledge should
change.

---

# Summary

The Product Engineering Workbench exists to help individuals and teams produce better products by improving the quality of their product knowledge.

Every significant product decision should reinforce one or more of the following ideas:

- Help users think.
- Put knowledge before implementation.
- Keep humans in control.
- Make AI optional.
- Preserve context.
- Preserve knowledge.
- Prefer clarity over complexity.
- Focus on Product Engineering.
- Make AI assistance visible and governable.
- Keep repository content open, explicitly bounded and untrusted by default.
- Treat implementation as evidence rather than product authority.
