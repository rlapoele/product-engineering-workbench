# Session — Screen / View Impact Propagation

**Session ID:** 2026-08-19-14

**Date:** 2026-08-19

**Status:** Crystallized

## Context

Screen / View now has explicit Feature, Functional Requirement, Acceptance Criterion and User Flow relationships. The model needs deterministic change-impact behavior that distinguishes potentially inaccurate downstream knowledge from weakened coverage of upstream product capability.

## Decision

A changed or archived Screen / View makes each User Flow that `includes` it and each Acceptance Criterion that directly `validates` it Stale. Its supported Core Features receive coverage/readiness cues rather than becoming Stale.

A changed or archived Core Feature or Functional Requirement makes an affected Screen / View Stale. A changed or archived User Flow does not automatically make its included Screen / Views Stale, because a view may remain meaningful independently or appear in another flow.

A material visual Resource Reference change is a Revision of its attached Screen / View and follows the same downstream propagation.

## Deferred Detail

UI Requirement propagation remains deferred until that artifact's relationship semantics are decided.

## Documents Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/index.md`
