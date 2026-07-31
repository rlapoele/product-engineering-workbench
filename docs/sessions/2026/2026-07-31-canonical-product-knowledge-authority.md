# Session — Canonical Product Knowledge Authority

**Session ID:** 2026-07-31-07  
**Date:** 2026-07-31  
**Status:** Crystallized

## Context

The collaboration model already kept Contribution Responses non-canonical and reserved Conversation crystallization to the Project Owner. However, phrases such as “authorized requestor” left unclear whether a Project Collaborator could create, edit or save canonical Product Knowledge, or record a Response Source Link.

## Decision

In the MVP, canonical Product Knowledge authority belongs only to the Project Owner. The owner alone may create a private Product Knowledge draft, edit an existing private draft, explicitly save a new canonical record or Revision, and, while saving a Revision, optionally record one whole-response Response Source Link.

A Project Collaborator may participate in Conversations and may prepare and submit a non-canonical Contribution Response when selected as a human recipient. Collaboration does not grant the ability to create, edit or save canonical Product Knowledge, or to record a Response Source Link.

Requestor and recipient describe a Collaboration Request relationship, not a Product Knowledge authority. In the core MVP, the Project Owner is the requestor. The request recipient, whether a Project Collaborator or Personal AI Assistant, contributes evidence only. A recipient’s Suggested Edit, Proposal, Finding, Answer or other Response Item never creates a canonical draft, changes Product Knowledge or grants a right to save it.

When a response informs a change, the Project Owner may separately open the ordinary private draft, review and explicitly save it. At that same save, the owner may choose one whole Contribution Response as the optional Response Source Link for the resulting Revision. The link is not inferred and does not imply acceptance, agreement, correctness, item adoption, exact wording origin, sole causation or exclusive human authorship.

Collaborator write delegation, per-artifact permissions, request-specific editing grants and any approval or certification workflow are deferred.

## Consequences

- Human control has one clear accountable locus without treating collaboration as shared live editing.
- Contribution Responses remain useful retained evidence without becoming indirect write permissions.
- Response Source Link recording follows the same explicit owner save boundary as canonical Revision creation.
- The model avoids an MVP permissions, acceptance, assignment, authorship or certification subsystem.

## Documentation Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/ai/ai-orchestration.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/decisions/ADR-003-asynchronous-transactional-collaboration.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Topic

Validate the owner-only authority boundary through a representative response-to-revision journey, including what the Project Collaborator can see before and after the owner saves a related Revision.
