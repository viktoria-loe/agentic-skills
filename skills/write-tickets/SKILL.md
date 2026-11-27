---
name: write-tickets
description: Turn a grilled feature plan into factory tickets, one per pull request, each holding everything an agent needs to build it, filed for a person to triage. Use after grill-plan has settled a feature.
---

# Write tickets

Each ticket is the plan for one piece of work: an agent should build it from the ticket alone. You are done when every piece of the plan is a filed sub-issue of the feature issue, in `status:triage`, and the feature issue lists them.

## Steps

1. Read the feature issue and the plan grilling settled: scope, acceptance criteria, risks, the breakdown and its order.
2. Cut the work into tickets that each fit one pull request. A ticket that would touch unrelated areas, or needs more than a day of work, is two tickets.
3. Write each ticket with the "Agent task" sections:
   - **Problem**: what is wrong or missing, and for whom.
   - **Acceptance criteria**: one line each, every one checkable by a test, a check or a short manual step.
   - **Tests expected**, **Files in scope**, and **Feature**: the feature issue's number.
   - **Notes**: what blocks it (other tickets by number), and anything the builder needs.
   - **Suggested risk tier**, **Suggested route** and **Suggested track**, each with a one-line reason, drawn from the grilling.
4. File each as a sub-issue of the feature issue, with only the `status:triage` label. A person turns the suggestions into labels at triage.
5. On the feature issue, list the tickets in build order.

## Writing a criterion

A criterion names an observable result: "`GET /orders` returns 404 for an unknown id", not "handles missing orders". If you cannot say how a reviewer would check it, it is not a criterion yet: take it back to grilling.
