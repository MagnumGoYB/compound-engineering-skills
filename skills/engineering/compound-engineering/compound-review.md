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

## Priority Levels

| Level | Meaning | Action |
|-------|---------|--------|
| **P1** | Must fix | Block merge, fix immediately |
| **P2** | Should fix | Fix this cycle, does not block merge |
| **P3** | Nice to fix | Record as backlog, handle later |

## Output Format

```markdown
# Code Review Report

## Summary
- Files reviewed: [file list]
- Dimensions: [dimension list]
- Findings: P1: X, P2: Y, P3: Z

## P1 · Must Fix
- [ ] **[Dimension]** Issue description
  - File: `path/to/file:line`
  - Suggestion: fix approach

## P2 · Should Fix
- [ ] **[Dimension]** Issue description
  - File: `path/to/file:line`
  - Suggestion: fix approach

## P3 · Nice to Fix
- [ ] **[Dimension]** Issue description
  - File: `path/to/file:line`
  - Suggestion: fix approach

## Highlights
[Things done well, worth keeping]
```

## Review Process

Use parallel orchestration: dispatch multiple sub-agents, each reviewing from a single dimension. They run independently without cross-contaminating context. The main agent aggregates results.

1. **Dispatch parallel agents** — create one sub-agent per review dimension, each reads the diff and reviews from its single lens
2. **Collect results** — wait for all sub-agents to finish, gather findings per dimension
3. **Deduplicate and merge** — remove duplicate findings, unify into P1/P2/P3 format
4. **Prioritize** — P1 > P2 > P3
5. **Write to todos/** — save findings to `todos/YYYY-MM-DD-review.md` with priority and status
6. **Fix in order** — fix P1s first, then P2s
7. **Verify fixes** — ensure fixes don't introduce new issues

## Checklist

- [ ] Security dimension reviewed
- [ ] Performance dimension reviewed
- [ ] Architecture dimension reviewed
- [ ] Code quality reviewed
- [ ] Findings classified by priority
- [ ] P1 issues fixed
- [ ] P2 issues fixed or planned
- [ ] P3 issues recorded in `todos/`
