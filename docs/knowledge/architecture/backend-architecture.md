# Backend Architecture

The first-slice backend is the server application and canonical-persistence boundary of the online modular monolith.

## Responsibilities

The backend receives the current authenticated user's stable, opaque identity, resolves Project ownership, and permits only the Project Owner to read or change their selected first-slice Project State. It derives that identity from the authenticated session rather than accepting an owner identifier from the browser. It executes the explicit Project commands and returns authoritative saved state.

Every Project view and command requires authentication. Project creation records the authenticated user as the immutable owner. Listing is limited to that user's Projects; load and write operations require a matching owner. A request for a non-owned Project returns a privacy-preserving not-found result without confirming the Project's existence.

Creating a Project atomically records the Project, its owner, the server-selected fixed starter `implementation-ready-web-app-specification.standard-web-app` at version `1`, and its default Specification composition. The starter definition is immutable for its version; existing Projects never auto-upgrade when a future version becomes active. Saving the first Goal atomically records the canonical Active Goal and its first Revision. Commands must be retry-safe and return saved state with Revision or version information suitable for the future offline-evolvable posture.

Every write carries an Operation ID. The backend retains the completed command outcome and returns it for a matching retry, so transient network failure cannot create duplicate Projects, Goals or Revisions. A repeated Operation ID with different command content is rejected. Project creation creates no Revision; the first Goal save creates the first Revision as an immutable complete Goal snapshot.

## Limits

The backend does not prescribe the browser presentation or expose a database-specific contract. In the first slice it receives authenticated identity through Better Auth's Google and GitHub OAuth sessions, but does not implement local synchronization, conflict resolution, collaboration, AI assistance, handoff generation or impact propagation.

The backend uses Railway-hosted PostgreSQL as canonical persistence through the `pg` driver and parameterized SQL. Commands requiring multiple canonical writes use explicit database transactions; no ORM is selected. The runtime database role has only the schema, table and sequence permissions required to serve the application, while a separate migration role owns the relevant schemas and performs schema changes. The running application receives the runtime credential only.

The migration runner executes in a separately configured, private, terminating Railway job. It receives the migration credential only, applies reviewed migrations and emits a content-free outcome before the application deployment for the same source revision may proceed.

The first slice does not choose API style, queue, cache or event-sourcing model. Astro/Node, Railway deployment and the SQL migration mechanism are selected separately; local synchronization, conflict resolution, collaboration, AI assistance, handoff generation and impact propagation remain deferred.
