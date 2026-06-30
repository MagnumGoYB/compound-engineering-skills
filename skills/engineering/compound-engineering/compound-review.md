---
name: compound-review
description: "Compound Engineering review phase: multi-dimensional parallel review producing prioritized improvement lists. Use when reviewing code changes or PRs."
---

# Compound Review

> Review from multiple specialized perspectives in parallel, classify findings by priority.

## Goal

Comprehensively review code across security, performance, architecture, and quality dimensions, producing an actionable improvement checklist.

## Review Dimensions

Run these reviews concurrently (pick dimensions relevant to the project):

### Risk
| Dimension | Focus |
|-----------|-------|
| **Security** | OWASP Top 10, injection, auth bypass, sensitive data exposure |
| **Data Integrity** | Transaction boundaries, referential integrity, safe migrations, rollback capability |

### Performance
| Dimension | Focus |
|-----------|-------|
| **Performance** | N+1 queries, missing indexes, caching opportunities, algorithmic bottlenecks |
| **Operations** | Deployment risk, monitoring coverage, rollback plan |

### Architecture
| Dimension | Focus |
|-----------|-------|
| **Architecture** | System design, component boundaries, dependency direction |
| **Design Patterns** | Pattern recognition, anti-patterns, code smells |

### Quality
| Dimension | Focus |
|-----------|-------|
| **Code Quality** | YAGNI, readability, naming, complexity |
| **Framework Conventions** | Project conventions, best practices, idiomatic usage |

## Severity Levels

| Level | Meaning | Action |
|-------|---------|--------|
| **P0** | Critical breakage, exploitable vulnerability, data loss | Block merge, fix before anything else |
| **P1** | High-impact defect hit in normal use, broken contract | Block merge, fix immediately |
| **P2** | Moderate issue with real downside (edge case, perf regression) | Fix this cycle if straightforward |
| **P3** | Low-impact, narrow scope, minor improvement | Record as backlog, handle later |

## Confidence Gating

Severity answers *how bad*. Confidence answers *how sure*. Score each finding and use it to gate the report — a low-confidence finding needs corroboration before it blocks merge.

| Confidence | Criterion |
|------------|-----------|
| **High** | Reproduced, or the diff line plainly shows the defect |
| **Medium** | Strong reasoning from the diff, not yet reproduced |
| **Low** | Plausible concern, would need investigation to confirm |

When two dimensions independently flag the same finding, promote it one confidence level. Report low-confidence findings as advisory rather than blocking.

## Action Routing

Severity is urgency; the action class describes *how the fix gets applied*. It is not an apply gate — it tells the next step what shape the follow-up takes.

| Action class | Owner | Meaning |
|--------------|-------|---------|
| **auto** | agent | Safe, mechanical fix the agent applies and verifies |
| **gated** | agent + human | Concrete fix proposed; apply after human confirms |
| **advisory** | human | Report-only: rollout note, residual risk, judgement call |

## Output Format

```markdown
# Code Review Report

## Summary
- Files reviewed: [file list]
- Dimensions: [dimension list]
- Findings: P0: W, P1: X, P2: Y, P3: Z

## P0 · Critical
- [ ] **[Dimension]** Issue description `[confidence: high]` `[action: gated]`
  - File: `path/to/file:line`
  - Suggestion: fix approach

## P1 · Must Fix
- [ ] **[Dimension]** Issue description `[confidence: high]` `[action: auto]`
  - File: `path/to/file:line`
  - Suggestion: fix approach

## P2 · Should Fix
- [ ] **[Dimension]** Issue description `[confidence: medium]` `[action: gated]`
  - File: `path/to/file:line`
  - Suggestion: fix approach

## P3 · Nice to Fix
- [ ] **[Dimension]** Issue description `[confidence: low]` `[action: advisory]`
  - File: `path/to/file:line`
  - Suggestion: fix approach

## Highlights
[Things done well, worth keeping]
```

## Review Process

Use parallel orchestration: dispatch multiple sub-agents, each reviewing from a single dimension. They run independently without cross-contaminating context. The main agent aggregates results.

1. **Dispatch parallel agents** — create one sub-agent per review dimension, each reads the diff and reviews from its single lens
2. **Collect results** — wait for all sub-agents to finish, gather findings per dimension
3. **Deduplicate and merge** — remove duplicate findings; promote confidence one level when two dimensions agree
4. **Classify** — assign severity (P0–P3), confidence, and action class to each finding
5. **Write to todos/** — save findings to `todos/YYYY-MM-DD-review.md` with priority and status
6. **Fix in order** — P0 first, then P1, then P2; apply `auto` fixes, confirm `gated` ones, leave `advisory` for the human
7. **Verify fixes** — ensure fixes don't introduce new issues

## Checklist

- [ ] Security dimension reviewed
- [ ] Performance dimension reviewed
- [ ] Architecture dimension reviewed
- [ ] Code quality reviewed
- [ ] Findings classified by severity, confidence, and action class
- [ ] P0 issues fixed
- [ ] P1 issues fixed
- [ ] P2 issues fixed or planned
- [ ] P3 issues recorded in `todos/`
