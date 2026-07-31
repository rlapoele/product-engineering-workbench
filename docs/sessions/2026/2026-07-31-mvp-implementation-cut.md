# Session — MVP Implementation Cut

**Session ID:** 2026-07-31-11  
**Date:** 2026-07-31  
**Status:** Crystallized

## Context

Implementation-entry guidance identified five future decision packages, but did not choose the first usable vertical slice. The foundation is sufficiently coherent to select that boundary as inactive planning without beginning implementation or turning the selection into a delivery plan.

The initially proposed slice began at Project creation. The discussion established that this would omit the first-use entry experience and leave identity, ownership and returning-user behavior outside the value loop. Onboarding therefore belongs in the slice, but only as minimal user-visible entry and orientation; it must not pull broad account management or collaboration into the cut.

## Decision

The selected MVP implementation cut is the following owner-controlled first-use journey:

1. A new person establishes access, or a returning person enters using their existing authenticated identity.
2. A first-time user sees a calm home empty state with **Create your first Project** as the primary action. A returning user can reach their existing Projects.
3. The user creates a Project with a required title and optional short description.
4. The Project uses the fixed `Implementation-Ready Web App Specification` / `Standard Web App` starter. It creates the owner-controlled Project, default Specification and default section composition.
5. The owner enters the continuous Specification, opens the local action menu in `Goals and Success Criteria`, selects **Add Goal**, and enters a required title and content.
6. The owner selects **Done editing**. The Goal becomes canonical Product Knowledge in the `Draft` lifecycle state and its first Revision is recorded.
7. The owner can later return to the saved Project and its rendered Goal.

The cut's success criterion is: a new user can establish access, create and revisit their own Project, and turn an initial product outcome into a saved Goal in its Specification.

## Explicit Deferrals

The cut does not decide or implement:

- authentication mechanism, account verification, recovery or profile policy;
- alternative templates or presets, a template/preset picker, or section customization;
- tutorials beyond lightweight optional getting-started guidance;
- persistent unsaved-draft resumption, Goal relationships, success indicators, review-state changes or impact propagation;
- Conversations, Collaboration Requests, invitations, Bring Your Own AI, AI disclosure, Resources or Resource References;
- readiness evaluation, handoff preparation or export; or
- delivery-management functionality.

## Consequences

- The first slice crosses identity, ownership, Project State, document composition, Product Artifact creation and Revision persistence without attempting the complete MVP.
- Technical architecture, concrete data and lifecycle contracts, UX prototyping and engineering-quality decisions can now be scoped against one explicit journey rather than an unbounded MVP.
- The selection remains inactive planning. It does not alter the Repository Foundation milestone, authorize application scaffolding, create delivery tasks, set a schedule or replace ongoing analysis.

## Documentation Updated

- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Topic

Define the technical-architecture decision model for this selected slice, beginning with the required system boundaries and evaluation criteria rather than selecting technologies.
