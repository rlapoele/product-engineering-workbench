# ADR-013 — First-Slice Engineering-Quality Baseline

**Status:** Accepted

**Date:** 2026-08-01

---

## Context

The selected first slice creates and persists users' product knowledge. Its architecture, data contracts and UX validation model establish behavior, but users cannot reasonably trust the slice without explicit evidence for correctness, access control, recovery, accessibility and safe operation.

The quality baseline must be proportionate to one online modular monolith. It must avoid turning the first slice into a full enterprise reliability, compliance or scaling program.

## Decision

Before the first slice holds real user content, require five quality gates:

1. **Core correctness:** automated coverage of fixed-starter Project creation without a Revision, atomic Goal/Revision 1 save, exact Operation-ID retry behavior and mismatched-ID rejection.
2. **Authority and privacy:** integration coverage of owner-only Project reads and writes; no Product content, credentials or session secrets in ordinary logs, telemetry or error messages.
3. **Journey and accessibility:** browser-level coverage of the essential journey and simulated creation/save failure; manual keyboard and screen-reader-oriented checks for focus, labels, errors and saved-state feedback.
4. **Recovery and observability:** privacy-safe structured command outcomes and failure metrics for Project creation and Goal save; tested backup restoration before real user content is relied upon.
5. **Release discipline:** automated checks before release; production configuration and secrets separated from local development; a production-like full-journey and recovery check; and tested rollback or recovery for schema/data changes.

User-authored Project knowledge is confidential by default. The first slice does not use analytics or third-party telemetry that captures Project or Goal content by default. Regulated or especially sensitive data requires a separate security and privacy decision before launch.

The baseline does not require an availability SLA, horizontal scaling, a performance benchmark, penetration-test certification, compliance certification or a dedicated staging environment.

## Rationale

The first slice's value is durable, owner-controlled Product Knowledge. These gates directly protect that value from silent data loss, duplicate writes, unauthorized access, inaccessible critical interactions and opaque failures, while leaving unvalidated scale and compliance requirements for later decisions.

## Consequences

- Engineering work cannot treat a passing happy path as enough evidence for first-user use.
- Observability and recovery are privacy-constrained parts of the slice, rather than post-launch additions.
- The project retains technology freedom while defining the behavior that tools and deployment choices must support.
- Higher-assurance security, privacy, availability and regulatory requirements remain separate decisions triggered by the intended user/data context.

## Alternatives Considered

### Minimal happy-path testing only

This would be insufficient for a product whose first value is persisting user-authored knowledge and explicit Revisions.

### Enterprise-grade reliability and compliance baseline

This would overbuild the first slice before there is evidence of scale, regulation or high-assurance needs.

### Proportionate five-gate quality baseline

This was selected because it directly protects user trust in the first value loop while remaining appropriate for a small online application.

## Related Documents

- `docs/knowledge/principles/engineering-principles.md`
- `docs/knowledge/architecture/system-architecture.md`
- `docs/knowledge/decisions/ADR-011-first-slice-data-and-lifecycle-contracts.md`
- `docs/knowledge/decisions/ADR-012-first-slice-ux-prototype-validation.md`
