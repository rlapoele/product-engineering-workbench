# Prompt Strategies

**Status:** Deferred

No provider-specific or model-specific prompt strategy is currently part of
stable Product Knowledge.

AI operations are defined first through semantic Assistance Request Types,
authority, Context Views, expected response shapes and provenance. Prompt
construction is an adapter concern derived from those contracts; it must not
become hidden product policy or treat untrusted Workspace content as
instruction.

When concrete AI execution is selected, this document may define strategy
invariants such as context boundaries, instruction separation, output schemas,
failure behavior and evaluation evidence. It must not contain credentials,
provider secrets or a universal prompt assumed to work across models.
