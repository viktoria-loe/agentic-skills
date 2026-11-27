---
name: verify
description: Prove every acceptance criterion of a factory pull request with real output before it goes to review, and write that evidence into the pull request. Use before handing a pull request over, or when asked whether work is done.
---

# Verify

Evidence is output you produced in this session, never a description of what should happen. You are done when every goal in the pull request has evidence under **Evidence** and every check the repository runs has passed on the last commit.

## Steps

1. Pull the latest commit of the branch, so you verify what reviewers will see.
2. Run the repository's build, lint, type check and tests (see "How to verify work" in `AGENTS.md`). Fix any failure; a failure is never skipped or silenced.
3. For each goal, show that its criterion holds: the command you ran and its real output, the test that proves it, or a screenshot for a change people see. Run the app where the criterion is about behaviour.
4. Under **Evidence**, give one entry per goal with that proof, and the commit it ran on.
5. Read your evidence against the criteria once more. A goal whose evidence does not show its criterion is unticked again.

## What counts

- A passing test that would fail without the change.
- A command and its output, copied, not retyped.
- A link to the workflow run, with the commit it ran on.

A sentence such as "works as expected" is not evidence.
