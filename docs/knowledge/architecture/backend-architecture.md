# Backend Architecture

The first-slice backend is the server application and canonical-persistence boundary of the online modular monolith.

## Responsibilities

The backend receives the current authenticated user's stable, opaque identity, resolves Project ownership, and permits only the Project Owner to read or change their selected first-slice Project State. It derives that identity from the authenticated session rather than accepting an owner identifier from the browser. It executes the explicit Project commands and returns authoritative saved state.

Every Project view and command requires authentication. Project creation records the authenticated user as the immutable owner. Listing is limited to that user's Projects; load and write operations require a matching owner. A request for a non-owned Project returns a privacy-preserving not-found result without confirming the Project's existence.

Creating a Project atomically records the Project, its owner, the fixed starter and its default Specification composition. Saving the first Goal atomically records the canonical Draft Goal and its first Revision. Commands must be retry-safe and return saved state with Revision or version information suitable for the future offline-evolvable posture.

Every write carries an Operation ID. The backend retains the completed command outcome and returns it for a matching retry, so transient network failure cannot create duplicate Projects, Goals or Revisions. A repeated Operation ID with different command content is rejected. Project creation creates no Revision; the first Goal save creates the first Revision as an immutable complete Goal snapshot.

## Limits

The backend does not prescribe the browser presentation, require a particular identity provider, expose a database-specific contract, or implement local synchronization, conflict resolution, collaboration, AI assistance, handoff generation or impact propagation in the first slice.

The first slice does not choose API style, application framework, database, ORM, queue, cache, deployment platform or event-sourcing model.
