# Frontend Architecture

The first-slice frontend is the browser presentation boundary of the online modular monolith. Astro provides the server-rendered page composition; React Islands provide the bounded interactive areas.

## Responsibilities

The frontend renders authenticated entry, the first-use Project home, Project creation, the fixed-starter Specification and inline Goal authoring. It owns transient interaction state, including the private in-progress Goal draft before `Done editing`.

It accesses Project reads and writes through a client-facing Project data and command boundary. This keeps components independent of remote persistence details and preserves a future insertion point for local Project storage and synchronization.

## Limits

The frontend does not decide whether a user owns a Project, write canonical Project State directly or create a Revision merely because a user types. It submits explicit commands and renders the authoritative saved Project and Revision state returned by the server application.

React component state and hooks are the first-slice reactivity mechanism. An Island owns only the interaction state needed for its rendered boundary, such as form input, pending state, validation feedback and recovery presentation. It must not treat local state as canonical Project State, cache private Project content for offline use or infer that an explicit command succeeded before the server returns authoritative saved state.

The first slice does not choose a separate client state-management library, client-side routing library, local database, service-worker approach or offline-status presentation. React components may later be extracted into Web Components where that creates a justified reusable platform boundary; this is not an MVP requirement or constraint.
