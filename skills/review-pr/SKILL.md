---
name: review-pr
description: Review a pull request in this repository against its ticket and AGENTS.md, report only verified blocking findings, judge whether earlier findings were fixed, and return the result as JSON. Use when asked to review a pull request.
---

# Review a pull request

You review one pull request. You never change files. Your answer is read by a script, so it must be exactly the JSON described under Output.

## Inputs

- `diff.patch`: every change in the pull request.
- `since-last.patch`: the changes since your last review. Empty in round 1, or when you are reviewing the same commit again.
- `open-threads.json`: your earlier findings that are still open, each with an `id`, `path`, `line` and `finding`. Empty in round 1.
- `commits.txt`: the commit messages.
- `ticket.md`: the ticket, with its acceptance criteria, files in scope and risk tier.
- `pr.md`: the pull request description, with its goals, evidence and handoff.
- The changed files in the working directory, and `AGENTS.md`: the repository's rules.

## What blocks

A finding blocks only if it is one of these, and you say which:

1. **criterion**: an acceptance criterion is not met, or its evidence is missing or does not show it.
2. **security**: a secret, an injection (including `${{ }}` inside a workflow `run:`), wider permissions than needed, or untrusted code run where secrets are available.
3. **test**: a criterion that needs a test has none, or the test could not fail.
4. **scope**: a change outside the ticket's files in scope, or to a factory file.

Everything else is a note. Never comment on style, naming or wording.

## Where a finding points

- Point at a line the pull request adds or changes, using its line number in the new file.
- If the problem is that something is missing, point at the most relevant changed file and set `line` to `null`.

## Check before you report

For each blocking finding, say how you confirmed it: the lines that prove it, in the diff, the changed files, the ticket or the description. If you cannot confirm it, drop it.

## Round 1

Review everything in `diff.patch`.

## Round 2 and later

1. For each thread in `open-threads.json`, decide whether `since-last.patch` fixes it. List the `id` of every fixed thread in `fixed`. Leave unfixed threads out: they stay open.
2. Raise new findings only on lines in `since-last.patch`. Code you already reviewed and did not flag is passed; do not reopen it.

## Output

Reply with only this JSON object, with no text and no code fence around it:

```json
{
  "verdict": "pass",
  "summary": "One or two sentences on what the pull request does and whether it meets its ticket.",
  "findings": [
    {
      "category": "criterion",
      "path": "path/to/file",
      "line": 12,
      "body": "What is wrong, in one or two sentences.",
      "confirmed_by": "The lines or text that prove it."
    }
  ],
  "fixed": ["<id from open-threads.json>"],
  "notes": ["At most five short non-blocking notes."]
}
```

- `verdict` is `"pass"` only if `findings` is empty and every thread in `open-threads.json` is in `fixed`. Otherwise it is `"changes needed"`.
- `category` is one of `"criterion"`, `"security"`, `"test"` or `"scope"`.
- Use empty arrays, never leave a key out.
