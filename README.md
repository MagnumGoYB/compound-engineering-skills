# Compound Engineering Skills

Skills for AI coding agents based on the [Compound Engineering](https://every.to/guides/compound-engineering) methodology by Every.

> Every unit of engineering work should make future work easier, not harder.

## Quickstart

```bash
npx skills@latest add <your-username>/compound-engineering-skills
```

## Why These Skills Exist

Traditional engineering stops at Review. Compound Engineering adds a fourth step — **Compound** — that captures solutions as reusable knowledge so the system avoids the same class of problems automatically next time.

### The Four-Step Loop

```
Plan → Work → Review → Compound → Repeat
```

| Step | Purpose | Time Allocation |
|------|---------|-----------------|
| **Plan** | Turn ideas into blueprints: understand requirements, research codebase, design solutions | 40% |
| **Work** | Execute in isolated environment (git worktree), run tests/lint/typecheck after each change | 10% |
| **Review** | Multi-dimensional parallel review by specialized agents, triage by P1/P2/P3 | 40% |
| **Compound** | Extract reusable knowledge back into the system | 10% |

### Key Insight

- **Traditional**: Stops at Review → same problems recur
- **Compound Engineering**: Adds Compound → system gets smarter over time

## Skills

### Engineering

| Skill | Type | Description |
|-------|------|-------------|
| [compound-engineering](skills/engineering/compound-engineering/SKILL.md) | User-invoked | Main skill: orchestrates the 4-step loop |
| [compound-plan](skills/engineering/compound-engineering/compound-plan.md) | Model-invoked | Planning phase: requirements → research → design |
| [compound-work](skills/engineering/compound-engineering/compound-work.md) | Model-invoked | Implementation phase: execute plan in isolated workspace |
| [compound-review](skills/engineering/compound-engineering/compound-review.md) | Model-invoked | Review phase: multi-dimensional parallel review |
| [compound-compound](skills/engineering/compound-engineering/compound-compound.md) | Model-invoked | Compound phase: capture solutions as knowledge |

## Time Allocation

```
80%  Plan + Review (thinking)
20%  Work + Compound (doing + learning)
```

Most thinking happens **before** and **after** code is written.

## Knowledge Artifacts

| File | Purpose |
|------|---------|
| `CLAUDE.md` | Agent startup playbook: preferences, conventions, learned lessons |
| `docs/solutions/` | Searchable solution documents with YAML frontmatter |
| `docs/plans/` | Planning outputs |
| `todos/` | Review findings with priority and status |

## Related

- [Every's Compound Engineering Guide](https://every.to/guides/compound-engineering)
- [Every's Plugin](https://github.com/EveryInc/compound-engineering-plugin)

## License

MIT

---

[中文版 (Chinese)](README.zh-CN.md)
