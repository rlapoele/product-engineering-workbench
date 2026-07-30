# Session — Selected-Content Accessibility Review Validation

**Session ID:** 2026-07-30-11  
**Date:** 2026-07-30  
**Status:** Crystallized

## Context

Selected-content Review is intentionally narrower than Artifact, Section and whole-Specification Review. This exercise validates that it can use the Accessibility Lens through a compatible host without representing that host or the implementation as a whole.

## Exercise

MeatLoop has an active checkout UI Requirement. The owner selects the sentence: “When a field is invalid, show an error message,” then creates a `Review` request with the Accessibility Lens.

## Decision

The selected text is Accessibility-compatible because its containing UI Requirement is interaction-oriented. The requestor explicitly confirms the Accessibility Lens. Primary context includes the fragment and immediately relevant host behavior, related Screen/View and User Flow, linked Functional Requirements and Acceptance Criteria, explicit accessibility expectations and a declared accessibility target when present.

The Review may identify missing accessible error identification, focus behavior or assistive-technology feedback only where the documented interaction makes those concerns relevant. It returns non-canonical Findings, Questions, Suggested Edits, Proposals or Summary.

Its conclusion is limited to the selected text's accessibility specification coverage. It cannot conclude that the containing UI Requirement, Screen/View, Section or implemented checkout is accessible or inaccessible; it never certifies accessibility conformance, produces a Readiness Result or invokes deterministic handoff readiness.

## Consequences

- Selected-content Review remains useful for focused wording and behavior gaps without overstating its scope.
- Host compatibility supplies relevant context without promoting the fragment into an Artifact or Section assessment.
- Accessibility review remains standards-informed when an explicit target is present, while preserving the implementation-conformance boundary.

## Documentation Updated

- `docs/glossary/glossary.md`
- `docs/knowledge/ai/ai-orchestration.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

## Recommended Next Topic

Validate a whole-Specification Testability Review, including its cross-section context boundary and non-certification conclusion.
