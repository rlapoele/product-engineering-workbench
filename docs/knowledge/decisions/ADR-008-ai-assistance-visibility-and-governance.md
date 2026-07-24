# ADR-008 — AI Assistance Visibility And Governance

**Status:** Accepted

**Date:** 2026-07-20

---

## Context

The Product Engineering Workbench treats AI as an optional contributor to product knowledge.

Recent model work clarified Assistance Request Types, Contribution Response Shapes, Context Assembly, Provenance, Revisions and asynchronous Collaboration Requests.

The remaining governance question is what the workbench can honestly make visible and controllable when AI participates, especially when human collaborators may use external AI tools outside the product.

---

## Decision

The workbench should make known AI assistance visible, reviewable and governable.

Inside the workbench, AI participation should be represented through scoped Assistance Requests, AI Contributors, Contribution Responses, Context Explanations, Revisions and Provenance.

AI-generated or AI-assisted material should not silently become canonical product knowledge.

Canonical product knowledge should change only when the project owner or another authorized contributor accepts, edits or otherwise acts on the contribution.

The workbench may support Project-level governance settings that limit where personally enabled Bring Your Own AI assistance may be used. Provider and model credentials, enablement and associated usage remain personal to the individual human user; a Project setting does not create shared AI access.

Known AI-assisted product knowledge should be represented in Provenance when accepted into canonical project knowledge.

The workbench cannot reliably prevent a human collaborator from using external AI tools outside the product and submitting the result as their own work.

The product should not claim to prove that human-submitted content was not externally AI-assisted.

Undisclosed external AI use should be treated as a collaboration trust and governance policy issue, not as a technical prevention guarantee.

---

## Rationale

This decision preserves the principle that humans remain in control while acknowledging the practical limits of AI-use detection.

The workbench can reliably govern:

- known assistance invoked through personally configured Bring Your Own AI;
- which Project actions permit personally enabled AI assistance;
- scoped assistance requests;
- assembled context;
- submitted AI Contribution Responses;
- acceptance or rejection of AI output;
- known provenance of accepted AI-assisted content;
- export visibility for known AI-assisted knowledge.

The workbench cannot reliably govern:

- private external AI use before a human submits content;
- undisclosed copy-and-paste from external AI systems;
- whether every manually entered sentence was independently written by a human.

Clear governance is therefore stronger than false enforcement.

The product should help teams establish trust by making known AI assistance explicit and reviewable, while avoiding unverifiable claims.

---

## Consequences

Future UX, AI, data model and export design should expose known AI assistance without overwhelming the document-first experience.

Contribution, Revision and Provenance records should remain distinct:

- Contribution records who or what participated.
- Revision records the saved change.
- Provenance records known origin or derivation.

Human collaborators may disclose external AI assistance, and the product may preserve that disclosure as provenance.

If external AI use is not disclosed, the workbench should not represent manually submitted content as proven human-only work.

Implementation Handoff Packages may eventually include known AI-assistance provenance when useful for downstream trust, review or compliance.

The MVP does not need advanced AI detection, policy enforcement or compliance reporting.

This ADR does not permanently decide whether AI assistance disclosure should be required, optional, policy-driven or omitted from the product experience.

That question should be revisited separately because external AI use by human contributors cannot be reliably prevented or proven.

---

## Alternatives Considered

### Treat all AI assistance as invisible

This would simplify the product experience but would undermine trust, traceability and user control.

It would also conflict with the workbench's emphasis on provenance and deliberate knowledge evolution.

### Attempt to prevent all AI use

This would create an unrealistic product promise.

Human collaborators can use external AI tools outside the workbench, and the product cannot reliably detect or prevent that behavior.

### Make known AI assistance visible and governable

This approach focuses on what the product can honestly control.

It supports transparency, project governance, provenance and human review without making unverifiable claims about external behavior.
