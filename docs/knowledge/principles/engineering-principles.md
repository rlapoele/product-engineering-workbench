# Engineering Principles

The Product Engineering Workbench should protect the product knowledge users entrust to it. Engineering quality is therefore part of preserving human control and trust, not a later implementation concern.

## First-Slice Engineering-Quality Baseline

Before the selected first slice is used for real user content, it must satisfy five quality gates:

| Gate | Required evidence |
|---|---|
| Core correctness | Automated tests prove fixed-starter Project creation without a Revision; atomic Goal/Revision 1 save; exact Operation-ID retry behavior; and rejection of mismatched Operation-ID reuse. |
| Authority and privacy | Integration tests prove owner-only Project reads and writes. Product content, credentials and session secrets do not appear in ordinary logs, telemetry or error messages. |
| Journey and accessibility | Browser-level coverage of the essential journey and simulated creation/save failure; manual keyboard and screen-reader-oriented checks for focus, labels, errors and saved-state feedback. |
| Recovery and observability | Privacy-safe structured command outcomes and failure metrics for Project creation and Goal save; tested backup restoration before real user content is relied upon. |
| Release discipline | Automated checks before release; production configuration and secrets separate from local development; a production-like full-journey and recovery check; and tested rollback or recovery for schema/data changes. |

User-authored Project knowledge is confidential by default. The first slice must not use analytics or third-party telemetry that captures Project or Goal content by default. If the product is expected to hold regulated or especially sensitive data, a separate security and privacy decision is required before launch.

The baseline does not require an availability SLA, horizontal scaling, a performance benchmark, penetration-test certification, compliance certification or a dedicated staging environment. It does require enough production-like validation to establish that the trusted value loop and recovery path work before users rely on them.
