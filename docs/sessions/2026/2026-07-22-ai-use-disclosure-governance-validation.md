# Session — AI Use Disclosure Governance Validation

**Date:** 2026-07-22

**Session ID:** 2026-07-22-28

**Status:** Crystallized

---

## Context

The workbench can reliably record AI assistance that occurs inside the product, but it cannot reliably detect external AI use or determine which final content remains from an AI response after human revision. COLL-002 asks whether AI-use disclosure should be universally required, optional, policy-driven or absent.

---

## Decision

The workbench records a **known AI activity trace** for in-workbench AI assistance and any external AI use a contributor voluntarily discloses. The project owner can inspect the request, scope, response, Context Explanation, status and any explicit Provenance or Revision link.

The trace is evidence of known assistance for a scope and of the response it produced. It is not an exact authorship claim: it cannot reliably establish which final words remain from that response after human editing, prove that external AI was not used or detect undisclosed external use.

AI-use disclosure is **off by default**. When off, the workbench does not automatically disclose known AI assistance in the ordinary workbench experience or a handoff. This does not remove the project owner's access to the trace.

A project owner may enable disclosure and selects exactly one destination:

- **Workbench only** — the default enabled destination;
- **Workbench and handoff**; or
- **Handoff only**.

The selected destination controls automatic disclosure to ordinary workbench collaborators and/or handoff consumers. Exact visual markers and exact handoff representation remain UX and export-format work.

---

## Consequences

The product supports compliance or policy needs without imposing AI-use disclosure as a universal product judgment. The default remains focused on product knowledge quality, review and accountability, while the project owner retains the evidence needed for a deliberate disclosure choice.

Voluntary external-AI disclosures may become known trace information. Undisclosed external use remains a governance and trust limitation, not an invitation to claim prevention, detection or proof of non-use.

---

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/ai/ai-orchestration.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/principles/product-principles.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

---

## Recommended Next Step

Validate the minimum workbench and handoff presentation for each disclosure destination, including how a handoff can disclose known AI assistance without implying final-text authorship or exposing more trace detail than its consumer needs.
