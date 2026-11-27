---
name: work-ticket
description: Build one factory ticket into one pull request, goal by goal, test first, and hand it to review with evidence. Use when you are assigned a ticket, or a person starts a route:human ticket.
---

# Work a ticket

One ticket becomes one pull request. You are done when every acceptance criterion is a ticked goal with evidence, the checks are green, and the handoff is written.

## 1. Read

- The ticket: problem, acceptance criteria, files in scope, risk tier. It holds the plan for this piece of work.
- Its parent feature issue, if it names one.
- `AGENTS.md`, and the decision records in `docs/architecture/` that touch the files in scope.

If a criterion cannot be checked, or the ticket contradicts a decision record, stop here and say so (see Stuck).

## 2. Open the pull request

Open a draft pull request from the repository's template. Under **Goals**, write one unticked goal per acceptance criterion, in the ticket's words. Put `Closes #<ticket>` on the first line.

## 3. Build each goal

For each goal, in order:

1. Write the test that shows the criterion, and run it: it fails. (`test-first`; where the ticket says no tests are expected, write down the manual check instead.)
2. Change only files in scope until it passes.
3. Run the repository's checks (see "How to verify work" in `AGENTS.md`).
4. Tick the goal and commit, with the criterion in the commit message.

Work found outside the ticket goes to a new issue (`file-ticket`), not into this pull request, unless the ticket cannot be finished without it; then list it under **Scope added**.

## 4. Hand over

Run `verify`, then `handoff`. Leave the pull request as it is when they finish: the factory marks it ready for review.

## Stuck

When the same check fails twice, or a goal needs a decision the ticket and plan do not make: stop. Write in the pull request what you tried, what failed (the real output) and the decision you need, and ask for the ticket to move to `status:blocked`.

## Review

When review threads arrive, run `address-review`.
