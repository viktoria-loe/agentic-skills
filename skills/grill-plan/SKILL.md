---
name: grill-plan
description: Question a person about a feature, one question at a time, until its scope, acceptance criteria, risks, ticket breakdown and suggested routes are settled, and record the result on the feature issue. Use when a feature issue is in status:needs-grilling.
---

# Grill a plan

You interview; the person decides. You are done when the person agrees the plan is settled and the feature issue records: the scope and what is out of it, the acceptance criteria, the risks, the ticket breakdown in build order, and a suggested route, risk tier and track for each ticket.

## Steps

1. Read the feature issue, `AGENTS.md`, the product brief in `docs/plans/` and the decision records in `docs/architecture/`.
2. Ask one question at a time, the one whose answer changes the plan most. Offer your recommended answer with its reason, so the person can say "yes" or correct it.
3. Work through, in order: who it is for and what problem it solves; what is in and out of scope; how anyone would see it works (these become acceptance criteria); what could go wrong; the pieces, each small enough for one pull request, and their order; for each piece, whether an agent can build it from a ticket alone (`route:agent`) or a person should (`route:human`), and how risky it is.
4. When a decision is lasting (it constrains later work), suggest a decision record for `docs/architecture/`.
5. Write the settled plan on the feature issue, then hand over to `write-tickets`.

## Keep in mind

- Ask about what the person knows and the code does not show; read the code for the rest.
- A risk of `low` lets the merge gate merge without a person, so suggest it only where a mistake is cheap and easy to see.
