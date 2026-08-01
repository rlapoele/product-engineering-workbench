# Frontend Architecture

The first-slice frontend is the browser presentation boundary of the online modular monolith.

## Responsibilities

The frontend renders authenticated entry, the first-use Project home, Project creation, the fixed-starter Specification and inline Goal authoring. It owns transient interaction state, including the private in-progress Goal draft before `Done editing`.

It accesses Project reads and writes through a client-facing Project data and command boundary. This keeps components independent of remote persistence details and preserves a future insertion point for local Project storage and synchronization.

## Limits

The frontend does not decide whether a user owns a Project, write canonical Project State directly or create a Revision merely because a user types. It submits explicit commands and renders the authoritative saved Project and Revision state returned by the server application.

The first slice does not choose a UI framework, client state-management library, routing library, local database, service-worker approach or offline-status presentation.
