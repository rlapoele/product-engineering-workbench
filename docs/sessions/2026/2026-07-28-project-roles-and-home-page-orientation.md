# Session — Project Roles and Home Page Orientation

**Session ID:** 2026-07-28-09

**Date:** 2026-07-28

**Status:** Crystallized

---

## Context

Before defining the Project-level Collaboration Requests workspace, the product needed a clear distinction between durable Project roles and temporary request responsibility. It also needed a high-level answer to what users first see after sign-in without creating a global request-management workplace.

---

## Decision

A **Project Owner** is the user who created the Project. A **Project Collaborator** is a person invited to participate in the Project who has accepted that invitation. These roles are mutually exclusive within the same Project: a user can own one Project and collaborate on another, but cannot be both its owner and collaborator.

A **Collaboration Request recipient** is not a Project role. It is the person or Personal AI Assistant selected to provide the bounded response for one request. A human recipient must be an accepted Project Collaborator. A Project Owner cannot select themself as the human recipient; the owner either works directly or explicitly invokes one of their own eligible Personal AI Assistants.

The home page is an orientation and routing surface, not a second Project workspace. It may offer:

- **Continue**, for recently opened Project work;
- **Needs your attention**, for compact cross-Project signals such as invitations, requests awaiting the user's response or owner-only AI-resume attention; and
- **Your Projects**, grouped as **Projects you own** and **Projects you collaborate on**.

Each Project appears in exactly one group. A pending invitation is neither an accepted collaboration relationship nor a Project list entry. Request recipient responsibility remains request-specific and is surfaced only as attention when relevant. The home page routes users into the applicable Project; it has no unscoped request composer, global request board or duplicate request workplace.

For a new user with no owned or collaborated-on Projects, the home page shows a calm empty state: create a first Project, wait for or respond to an invitation and optionally consult getting-started guidance. It does not show empty request panels. **Create Project** remains available wherever the user has permission to create one, and optional Personal AI setup stays in personal settings.

---

## Consequences

- Project membership, invitation state and request responsibility are no longer conflated.
- The owner has unambiguous governance authority and cannot create a self-addressed human request lifecycle.
- Accepted collaborators remain eligible for Project participation even when no request currently awaits their reply.
- The home page gives cross-Project orientation without weakening the Project as the canonical workplace.

---

## Documentation Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/decisions/ADR-003-asynchronous-transactional-collaboration.md`
- `docs/planning/open-questions.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

---

## Recommended Next Topic

Define the Project-level Collaboration Requests workspace: role-aware views, lifecycle grouping and row/detail information, while preserving private drafts and avoiding delivery-board behavior.
