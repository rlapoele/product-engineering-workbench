# Session — AI Disclosure Workbench Presentation Validation

**Date:** 2026-07-22

**Session ID:** 2026-07-22-29

**Status:** Crystallized

---

## Context

AI-use disclosure may be enabled for the workbench, handoff or both, while the project owner can always inspect the known AI activity trace. The workbench needs a discoverable disclosure surface that does not turn ordinary product knowledge into a field of unreliable AI-authorship badges.

---

## Validated Journey

With disclosure set to **Workbench only**, a collaborator opens a project and sees one discreet **Known AI activity** entry near project information or the document outline. Opening it reveals the scoped known-AI trace. Artifact prose has no persistent AI-use badge, and the trace does not claim which final words were authored by AI.

With disclosure set to **Off** or **Handoff only**, ordinary collaborators do not see that entry. The project owner can nevertheless open project governance/settings and inspect the trace.

With a destination that includes handoff, the generated handoff includes its selected disclosure representation. A destination without handoff disclosure omits it for every recipient, including the project owner; the owner continues to use the workbench trace for governance information.

---

## Decision

Workbench disclosure is project-level, not a permanent marker on Product Artifact prose.

When the selected disclosure destination includes Workbench, collaborators see one project-level **Known AI activity** entry near project information or the document outline. It opens scoped trace information. When the destination excludes Workbench, that entry is not automatically disclosed to collaborators.

Project-owner trace access is separate from disclosure and remains available for every disclosure destination. Handoff disclosure is determined only by whether the selected destination includes handoff, and it applies uniformly to all handoff recipients.

---

## Consequences

The workbench makes enabled disclosure discoverable without overstating provenance or disrupting document-first reading. The owner keeps governance access even when a project deliberately does not disclose AI activity to collaborators or handoff consumers.

Exact entry wording, trace filtering, authorization boundaries and minimal handoff disclosure representation remain UX, permissions and export-format work.

---

## Documents Updated

- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

---

## Recommended Next Step

Validate the minimum handoff disclosure representation for destinations that include handoff, ensuring it communicates known AI activity and trace limits without exposing response content or asserting final-text authorship.
