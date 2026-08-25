# Frontend Architecture

The first-slice frontend is the browser presentation boundary of the online modular monolith. Astro provides the server-rendered page composition; React Islands provide the bounded interactive areas.

## Responsibilities

The frontend renders authenticated entry, the first-use Project home, Project creation, the fixed-starter Specification and inline Goal authoring. It owns transient interaction state, including the private in-progress Goal draft before `Done editing`.

It accesses Project reads and writes through a client-facing Project data and command boundary. For the first slice, the boundary uses owner-scoped `GET` requests and two dedicated same-origin JSON `POST` endpoints: Project creation and first-Goal save. Each write submits a caller-generated Operation ID with command-specific input, then replaces local presentation state only with the authoritative saved result returned by the server. This keeps components independent of remote persistence details and preserves a future insertion point for local Project storage and synchronization.

The browser-side Project client is an HTTP adapter to those public contracts. Astro pages and React Islands may depend on that client-facing boundary and shared transport contracts, but never import server application internals, Better Auth, PostgreSQL, Railway configuration or archive/resource adapters.

The executable first-slice layout places thin Astro UI and JSON adapters in `src/pages/`, React Islands in `src/islands/`, and the browser Project client in `src/adapters/browser/project-http-client.ts`. The framework-required page files delegate into the server Composition Root rather than owning application policy.

## Limits

The frontend does not decide whether a user owns a Project, write canonical Project State directly or create a Revision merely because a user types. It submits explicit commands with `credentials: "same-origin"`, JSON content and the required command header, and renders the authoritative saved Project and Revision state returned by the server application. It does not call cross-origin command endpoints.

React component state and hooks are the first-slice reactivity mechanism. An Island owns only the interaction state needed for its rendered boundary, such as form input, pending state, validation feedback and recovery presentation. It may reuse the shared command schema for immediate feedback, but server validation remains authoritative. It must not treat local state as canonical Project State, cache private Project content for offline use or infer that an explicit command succeeded before the server returns authoritative state.

The first slice does not choose a separate client state-management library, client-side routing library, local database, service-worker approach or offline-status presentation. React components may later be extracted into Web Components where that creates a justified reusable platform boundary; this is not an MVP requirement or constraint.
