# Agentic skills

The shared skills for the [Agentic SDLC factory](https://github.com/viktoria-loe/Agentic-SDLC): one source for every agent and developer.

## How a skill reaches a repository

1. A change to a skill lands on `main` by pull request. The `Check skills` workflow must pass.
2. A person promotes it: run the `Promote to stable` workflow with the commit to release. It checks the skills again and moves `stable` to that commit.
3. Each factory repository runs the shared `sync.yml` every hour. It copies `skills/` at `stable` into the repository's `.github/skills/`, records the release in `.github/skills/SKILLS_RELEASE`, and opens or updates one pull request. The repository's merge gate merges it after its hold, once it has checked that the files are exactly `stable`.

Rolling back is promoting an earlier commit (`allow-rollback: true`).

## Adding a repository

Add one workflow file, `.github/workflows/skills-sync.yml`:

```yaml
name: Skills sync
on:
  schedule:
    - cron: "17 * * * *"
  workflow_dispatch:
permissions: {}
jobs:
  sync:
    uses: viktoria-loe/agentic-skills/.github/workflows/sync.yml@stable
    secrets:
      token: ${{ secrets.FACTORY_USER_TOKEN }}
```

The token is a user token (in an organisation, the factory's service account) with contents and pull requests write on that repository. It has to be a user, not the workflow's own token, so the sync pull request starts the repository's checks.

## Layout

| Path | What it holds |
| --- | --- |
| `skills/<name>/SKILL.md` | One skill each; the folder name is the skill's `name` |
| `.github/workflows/check.yml` | Checks every skill's frontmatter on each pull request and push |
| `.github/workflows/promote.yml` | Moves `stable` to a checked commit |
| `.github/workflows/sync.yml` | The reusable sync each factory repository calls |
