---
name: handoff
description: Write the handoff of a factory pull request so a reviewer can judge it without asking: what changed, the decisions taken, what is uncertain and where to start. Use as the last step before review, after verify.
---

# Handoff

The reader is the reviewer and, later, the gardeners reading how the work went. You are done when every section of the pull request template is filled, with "None." where nothing applies.

## Sections

- **Scope**: the paths changed. They match the ticket's files in scope; anything else is under **Scope added** with why the ticket needed it.
- **Risks**: what could break, and the ticket's risk tier.
- **Rollback**: how to undo it, usually reverting the pull request, and anything a revert does not undo.
- **Decisions**: each choice the ticket and plan did not settle, and why you made it.
- **Handoff**: what changed in two or three sentences; anything still uncertain, said plainly; and the file or function where a reviewer should start reading.

## Writing

- Write for someone who has not seen the ticket today.
- State what is true now. Name what is not done or not checked as such.
- Keep it short: the evidence is under **Evidence**, so refer to it rather than repeat it.
