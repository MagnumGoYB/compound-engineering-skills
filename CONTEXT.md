# Context

[中文版](CONTEXT.zh-CN.md)

## Domain Terms

| Term | Definition |
|------|------------|
| Compound Engineering | Philosophy: Plan → Work → Review → Compound loop |
| Compound | The 4th step: capture solutions as reusable system knowledge |
| P0/P1/P2/P3 | Severity levels: critical / must-fix / should-fix / nice-to-fix |
| Confidence | How sure a finding is (high/medium/low); gates whether it blocks merge |
| Action class | How a fix is applied: auto (agent) / gated (agent+human) / advisory (human) |
| Learning | A documented solution stored in `docs/solutions/`; the unit of compounded knowledge |
| Bug track | A learning capturing symptoms → root cause → fix → prevention |
| Knowledge track | A learning capturing a reusable practice: context → guidance → when to apply |
| Pattern doc | Guidance generalized from several learnings into one broader rule |

## Architecture Decisions

- Skills stored as markdown with YAML frontmatter
- Each skill is self-contained and independently usable
- Main skill orchestrates, sub-skills handle specific phases
- Solution docs organized by category under `docs/solutions/<category>/`
- Knowledge store must be discoverable from the project's startup file
