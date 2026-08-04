# System Architecture

This document describes the emerging system architecture of the Product Engineering Workbench.

The architecture remains conceptual during the current knowledge-foundation phase. Technology choices and implementation details are intentionally deferred.

---

# 1. Canonical Project State

The canonical product state should be a structured Project State object.

Project State should contain both:

- document/specification composition;
- artifact and relationship records.

Conceptually, Project State may include:

- project metadata;
- Specification;
- Specification Sections;
- Product Artifacts;
- Artifact Relationships;
- Contributors;
- Contributions;
- Discussions;
- Reviews;
- Revisions;
- Provenance;
- Context References.

The Product Knowledge Graph is an interpretation of the Product Artifacts and Artifact Relationships inside Project State.

The graph does not need to be stored as a separate canonical graph object or graph database in the MVP.

Specification Sections should organize artifact references and section content rather than exclusively owning artifacts.

---

# 2. Architectural Implications

The document-first editing experience should read and write through the structured Project State.

The document view should use the specification composition and section ordering.

Graph reasoning should use Product Artifacts and Artifact Relationships.

Export generation should use both the document composition and the underlying artifact records.

When Product Artifacts are updated or archived, deterministic system logic should use Product Artifacts and Artifact Relationships to identify potentially impacted active artifacts and resolve either Stale status or coverage/readiness warnings.

AI context assembly should use the requested scope, relevant artifacts, relationships, provenance, discussions, reviews and context references.

Artifact Relationships should be first-class records with their own metadata, including source or provenance metadata.

Context Assembly should operate over Project State.

The system should start from the requested scope, expand through structural relationships, explicit Artifact Relationships and Context References, then filter and weight candidate context according to the Assistance Request Type, expected Response Shape, contributor capability and Review Lens.

The architecture should distinguish:

- Structural Context implied by document composition, templates, sections and artifact type expectations;
- Explicit Context from accepted Artifact Relationships and Context References;
- Inferred Context suggested by analysis or AI assistance but not yet accepted as canonical.

The system should be able to assess Context Sufficiency and produce a Context Explanation for the user.

Artifact change impact propagation should run before optional AI assistance.

The deterministic propagation step should follow only semantically eligible relationship paths, with no arbitrary depth limit. It must ignore archived artifacts as active targets or traversal intermediaries, and must not use `relates_to` as an automatic propagation bridge.

For each triggering Revision, the system should prevent cyclic re-propagation, resolve one relationship-specific impact outcome per artifact and retain the causal paths that explain it. When it competes with a coverage/readiness warning, Stale takes precedence; path distance may inform review priority but does not override relationship semantics.

Confirming a Stale artifact as valid clears that artifact's Stale status only. The system may suggest review of artifacts whose recorded impact paths passed through it, but must not automatically clear their states.

AI may then be offered as a contextual action to help users understand or resolve Stale artifacts, but AI should not be required to identify the initial impact set.

This decision does not require a specific database technology.

Storage technology remains intentionally undecided.

---

# 3. Online-First, Offline-Evolvable Posture

The selected first implementation slice is online-only. While online, the server-side application boundary remains authoritative for identity, Project ownership, canonical Project State, commands and persistence.

The product should nevertheless preserve the option to support offline authoring for a single Project Owner later. This is an architectural posture, not a commitment to deliver offline capability in the first slice or MVP.

The first slice should therefore:

- keep UI components behind a Project data and command boundary rather than coupling them directly to persistence details;
- use stable record identifiers that can later be safely client-originated or remapped during synchronization;
- model writes as explicit, retry-safe commands that return authoritative saved state and Revision or version information;
- keep unsaved local draft state distinct from canonical saved Project State; and
- keep identity and owner-only authorization authoritative outside the browser.

Later offline support may add a local Project store, an outbox, synchronization, retry and recovery behavior, and sync-state presentation behind those boundaries. A future sync state must communicate whether local changes are saved, awaiting synchronization or blocked; a browser online/offline hint alone is not a correctness signal.

The first slice deliberately does not implement local Project persistence, synchronization, conflict resolution, offline attachments, offline collaboration or online/offline status UI. It also does not require event sourcing, a local-first synchronization engine, a graph database or a specific client storage technology.

---

# 4. First-Slice System Boundaries

The selected first slice uses one deployable, online **modular monolith**. The term describes logical responsibilities inside one application deployment; it does not require microservices, separate deployment units or a distributed system.

The boundary model is:

| Boundary | Responsibility | Explicit limit |
|---|---|---|
| Browser presentation | Onboarding, Project home, Project creation, document rendering and private UI draft interaction. | Does not authorize Project access or become canonical Product State. |
| Identity boundary | Establishes the current authenticated user. | Does not decide Project ownership or permissions. |
| Server application | Enforces owner-only access, executes Project commands and assembles Project views. | Does not expose persistence details as a browser contract. |
| Canonical persistence | Durably records Projects, Specifications, Goals and Revisions. | Does not encode presentation behavior. |
| Fixed-starter definition | Supplies immutable, versioned selected template/preset definitions and default section composition. | Is not user-editable configuration in this slice, and existing Projects do not auto-upgrade. |

The minimum commands are: list the current user's Projects; create a Project and its default Specification composition atomically; load an owned Project; and create and save a Goal with its first Revision atomically.

The first slice requires an authenticated user for every Project view and command. The identity boundary supplies a stable, opaque user identifier; the server derives it from the authenticated session rather than accepting an owner identifier from the browser. Project creation records that identifier as the Project's immutable owner. List, load and write operations permit only a matching owner. A non-owner receives a privacy-preserving not-found result, which does not disclose whether a Project exists.

At application entry, the browser presentation resolves the current Interface Locale from the browser's highest-preference valid locale, with `en` as fallback. Project creation pre-fills its editable Content Language from that resolved value; the server validates and persists the owner's chosen Project `contentLocale`. Interface Locale is not Project authority or canonical Project State, and changing it later does not alter a saved Project.

For the first slice, the server selects the fixed starter `implementation-ready-web-app-specification.standard-web-app` at version `1` and records both values on the Project. A Starter Version is an immutable definition of the initial template/preset composition, including section identifiers, order and semantic label/guidance references. Future source changes that alter materialized starter output create the next positive integer version; existing Projects remain on their recorded version, and translation changes behind unchanged semantic keys do not create a new version.

If a session expires, the server does not execute the command. The browser keeps visible unsaved input available for the user to retry after reauthentication, but never presents it as saved. A retry may retain its Operation ID only when the same authenticated user resumes it.

Better Auth provides the first-slice identity mechanism through Google and GitHub OAuth. The server derives owner authority from Better Auth's authenticated user identity, never from an email address or provider identifier supplied by the browser. OAuth accounts are automatically associated only when Better Auth receives the same verified email; the configuration does not override an unverified provider claim as trusted. The first slice has no email/password authentication, anonymous Projects, sharing, invitations, collaborators, ownership transfer, roles beyond the owner, provider-account settings or manual account-linking UI. The UI framework, API style, database, deployment platform and client-storage technology remain undecided. The browser reaches Project data and commands through the client-facing boundary established by the online-first, offline-evolvable posture; a future local store and synchronization layer may sit behind that boundary.

---

# 5. First-Slice Quality And Operational Boundaries

The first slice may not rely on a successful happy path alone. Its command boundaries must be testable for atomicity, owner-only access and retry behavior. Browser-level validation must exercise the selected first-use and save-failure journeys, while manual keyboard and screen-reader-oriented checks cover the documented interaction states.

Operational telemetry must record privacy-safe command outcomes and failures without recording Project or Goal content, credentials or session secrets. Canonical persistence must have a verified recovery path before it holds real user content. Production configuration and secrets remain outside local development configuration, and a production-like environment must validate the full journey and recovery path before release.
