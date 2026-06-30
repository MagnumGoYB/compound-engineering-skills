---
name: compound-engineering
description: "Compound Engineering: Plan → Work → Review → Compound loop. Capture solutions into the system so future work gets easier. Use when building features or fixing bugs."
---

# Compound Engineering

> Every unit of engineering work should make future work easier, not harder.

## The Four-Step Loop

```
Plan → Work → Review → Compound → Repeat
```

| Step | Purpose | Time |
|------|---------|------|
| **Plan** | Turn ideas into blueprints: understand requirements and constraints, research the codebase, consult best practices, design and validate solutions | 40% |
| **Work** | Execute in an isolated git worktree: implement per the plan, run tests/lint/typecheck after each change | 10% |
| **Review** | Multi-dimensional parallel review by specialized agents, flag issues as P1/P2/P3, fix and record findings | 40% |
| **Compound** | Extract solutions into reusable knowledge written back into the system | 10% |

## Key Distinction

- **Traditional engineering**: stops at Review
- **Compound Engineering**: adds the Compound step, carrying what was learned into the next round

## Mindset Shifts

| Old Mindset | New Mindset |
|-------------|-------------|
| Code must be hand-written | Who types doesn't matter — good output does |
| First version should be great | V1 is 95% throwaway; speed of iteration matters |
| You only learn by typing | Reviewing 10 AI implementations teaches more than hand-writing 2 |
| Code is self-expression | Code belongs to the team, product, and user |

## Workflow Triggers

Invoke the corresponding sub-skill based on task type:

| Task | Invoke |
|------|--------|
| New feature / requirement | `compound-engineering:compound-plan` |
| Implement from a plan | `compound-engineering:compound-work` |
| Code review / PR | `compound-engineering:compound-review` |
| After completing a cycle | `compound-engineering:compound-compound` |

## Example

Adding user login:

1. **Plan** — invoke `compound-plan`: analyze requirements, research existing auth code, design approach
2. **Work** — invoke `compound-work`: implement in git worktree, verify each step
3. **Review** — invoke `compound-review`: parallel review across security, performance, architecture dimensions
4. **Compound** — invoke `compound-compound`: write the auth pattern into the system knowledge base

## Checklist

Every development cycle must complete:

- [ ] Plan phase produced a clear implementation spec
- [ ] Work phase executed in an isolated environment (git worktree)
- [ ] Review phase performed multi-dimensional parallel review
- [ ] Compound phase crystallized solutions into system knowledge
- [ ] Updated CLAUDE.md or equivalent playbook
- [ ] Solution doc with YAML frontmatter saved to `docs/solutions/`

## Knowledge Artifacts

| File | Purpose |
|------|---------|
| `CLAUDE.md` | Agent startup playbook: preferences, conventions, lessons learned |
| `docs/solutions/` | Searchable solution documents with YAML tags |
| `docs/plans/` | Planning outputs |
| `todos/` | Review findings with priority and status |
