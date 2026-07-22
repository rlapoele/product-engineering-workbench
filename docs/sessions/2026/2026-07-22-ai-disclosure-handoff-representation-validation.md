# Session — AI Disclosure Handoff Representation Validation

**Date:** 2026-07-22

**Session ID:** 2026-07-22-30

**Status:** Crystallized

---

## Context

When a project's AI-use disclosure destination includes handoff, the Implementation Handoff Package needs a useful disclosure for humans and an authoritative representation for machines. It must explain known activity without exposing unnecessary trace detail or claiming final-text authorship.

---

## Decision

When handoff disclosure is enabled, the package uses two representations:

- `README.md` contains a concise human-readable known-AI disclosure; and
- `manifest.json` contains the authoritative machine-readable disclosure record.

The disclosure includes only known AI activity whose declared scope is included in the package. Each manifest entry identifies:

- the included scope or stable artifact/section ID;
- whether it records in-workbench assistance or a voluntary external-AI declaration;
- the Assistance Request Type when known;
- response/status; and
- any explicit Provenance or Revision link.

The disclosure excludes raw prompts, assembled context and raw AI responses by default.

Both representations state that they record activity known to the workbench or voluntarily declared by a contributor. They do not establish final-text authorship, detect undisclosed external AI use or cover knowledge excluded from the package.

If handoff disclosure is enabled but no known AI activity relates to the included scope, the README and manifest state: no known AI activity is recorded for the included scope. This is accompanied by the same caveat and must not be presented as proof that no AI was used.

---

## Consequences

Handoff consumers receive the information necessary to understand the project's selected disclosure policy without receiving a complete internal AI trace or sensitive request content. Machine consumers can rely on the manifest, while human consumers receive an understandable summary in the package entry point.

The handoff respects its explicit scope: unrelated project activity and knowledge excluded from the package do not appear as disclosure entries. Exact manifest schema, README wording and user controls for reviewing disclosure before preparation remain export and UX work.

---

## Documents Updated

- `docs/knowledge/ai/ai-orchestration.md`
- `docs/knowledge/data-model/project-model.md`
- `docs/knowledge/ux/document-first-ui.md`
- `docs/planning/current-focus.md`
- `docs/planning/open-questions.md`
- `docs/sessions/session-active-work.md`
- `docs/sessions/index.md`

---

## Recommended Next Step

Validate the pre-preparation disclosure preview: how the project owner sees the exact included-scope disclosure summary and caveat before generating a handoff, without opening a package-diff or archive-retention workflow.
