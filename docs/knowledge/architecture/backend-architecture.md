# Backend Architecture

The first-slice backend is the server application and canonical-persistence boundary of the online modular monolith.

## Responsibilities

The backend receives the authenticated user identity, resolves Project ownership, and permits only the Project Owner to read or change their selected first-slice Project State. It executes the explicit Project commands and returns authoritative saved state.

Creating a Project atomically records the Project, its owner, the fixed starter and its default Specification composition. Saving the first Goal atomically records the canonical Draft Goal and its first Revision. Commands must be retry-safe and return saved state with Revision or version information suitable for the future offline-evolvable posture.

## Limits

The backend does not prescribe the browser presentation, require a particular identity provider, expose a database-specific contract, or implement local synchronization, conflict resolution, collaboration, AI assistance, handoff generation or impact propagation in the first slice.

The first slice does not choose API style, application framework, database, ORM, queue, cache, deployment platform or event-sourcing model.
