# Session — README Handoff Summary Layout

**Date:** 2026-07-23

**Session ID:** 2026-07-23-08

**Status:** Crystallized

---

## Context

The Implementation Handoff README is the package entry point. It must make package scope, readiness and selected AI-use disclosure understandable at a glance without duplicating detailed information held in the implementation brief, readiness report or manifest.

---

## Decision

After package title and compact preparation metadata, the README presents concise sections in this order:

1. **Package boundary** — Definition Scope, Supporting Context, directly related outside scope and Direct External Dependencies.
2. **Readiness** — evaluated outcome when validation ran, or `Readiness validation was not run` for a direct handoff.
3. **Known AI activity** — included only when the project disclosure destination includes handoff; it gives the concise caveated summary and points to `manifest.json` as authoritative.
4. **Start here** — links to `IMPLEMENTATION_BRIEF.md`, the included specification files and `manifest.json`.

The README omits the Known AI activity section entirely when handoff disclosure is disabled. Detailed blockers, warnings and follow-up actions remain in `READINESS_REPORT.md` when that report is included.

---

## Validated Example

For Alex's direct MeatLoop checkout handoff, the README starts with `Package result: Prepared`, then identifies the checkout Definition Scope, menu-pricing Supporting Context, cancellation behavior outside scope and Stripe as an external dependency. Its Readiness section says `Readiness validation was not run`. If handoff AI disclosure is enabled, the next section gives its fixed caveat and links to the manifest; otherwise it is absent. The final Start here section directs the implementation consumer to the detailed package material.

---

## Consequences

Consumers can scan the package boundary before interpreting readiness and disclosure. The entry point avoids a verbose duplicate report while keeping the manifest authoritative for structured package and disclosure records.

Exact Markdown formatting, visual hierarchy and line-level wording remain export-format and UX implementation work.

---

## Documents Updated

- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

---

## Recommended Next Step

Validate how a README presents a validated `Not Ready` handoff with an included `READINESS_REPORT.md`, especially whether its concise statement should link to the report and how it remains distinct from the package result.
