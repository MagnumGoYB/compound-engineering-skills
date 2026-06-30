---
name: compound-compound
description: "Compound Engineering compound phase: capture solutions as reusable knowledge. Use after completing a feature or fixing a bug."
---

# Compound

> Extract solutions into reusable knowledge and write them back into the system. This step produces no code — it produces the system's ability to auto-avoid the same class of problems next time.

## Goal

Crystallize what was learned this cycle into system knowledge so the next cycle benefits automatically.

## Two Tracks

A learning is one of two tracks. Pick the track first — it decides the document structure.

| Track | When | Captures |
|-------|------|----------|
| **Bug** | A concrete problem was diagnosed and fixed | Symptoms → root cause → fix → prevention |
| **Knowledge** | A reusable practice, convention, or decision emerged | Context → guidance → when to apply |

## Four Actions

### 1. Record the Solution

Ask yourself:
- What worked? (successful approaches)
- What didn't work? (failed attempts — these are as valuable as the fix)
- What's the reusable insight? (core takeaway)

### 2. Add Metadata

Tag with YAML frontmatter for future searchability:

```yaml
---
title: Generic Pattern for Avoiding N+1 Queries
track: bug
problem_type: performance-issue
tags: [database, query-optimization, n+1]
date: 2025-01-15
related: [docs/solutions/performance-issues/db-optimization.md]
---
```

### 3. Update the Playbook

Write new patterns into the project's agent startup file (e.g., `CLAUDE.md`):

```markdown
## Database Query Standards

### Avoid N+1 Queries
- Use `includes` or `preload` to eager-load relations
- Batch queries instead of looping single-row queries
- See: docs/solutions/performance-issues/n-plus-one-query.md
```

### 4. Validate What Was Learned

Next time a similar problem arises:
- Can the agent auto-detect it?
- Can it auto-apply the solution?
- Does the context need more detail?

## Solution Document Templates

### Bug track

```markdown
---
title: [Problem summary]
track: bug
problem_type: [build-error|test-failure|runtime-error|performance-issue|security-issue|data-issue|logic-error]
tags: [tag1, tag2, tag3]
date: YYYY-MM-DD
severity: [p0|p1|p2|p3]
related: [related doc paths]
---

## Problem
[Description including symptoms and impact]

## What Didn't Work
[Failed attempts and why — saves the next person from repeating them]

## Root Cause
[The underlying cause]

## Solution
[Specific solution with code examples]

## Prevention
[Preventive measures, test cases, and checkpoints]
```

### Knowledge track

```markdown
---
title: [Practice summary]
track: knowledge
problem_type: [architecture-pattern|design-pattern|tooling-decision]
tags: [tag1, tag2, tag3]
date: YYYY-MM-DD
related: [related doc paths]
---

## Context
[What situation or friction prompted this guidance]

## Guidance
[The practice or recommendation with examples]

## Why This Matters
[Rationale and impact]

## When to Apply
[Conditions where this applies]
```

## Storage Locations

Solution docs live under a category directory so the store stays searchable as it grows:

```
docs/solutions/
  build-errors/        runtime-errors/      security-issues/
  test-failures/       performance-issues/  data-issues/
  architecture-patterns/  design-patterns/  tooling-decisions/
```

- Solution docs: `docs/solutions/<category>/<topic-slug>.md` (the `date:` field is the creation date; no date prefix on the filename)
- Playbook: the project's agent startup file at the repository root
- Plans: `docs/plans/`

## Pattern Docs

When several Bug-track learnings point at the same underlying rule, generalize them into one **pattern doc** under `docs/solutions/patterns/`. A pattern doc is higher-leverage than any single incident — and higher-risk when stale, since future work treats it as broadly applicable. Cite the source learnings it generalizes, and refresh it when one of them changes.

## Discoverability Check

The knowledge store only compounds value when agents can find it. After writing a learning, verify the project's startup file (`CLAUDE.md`/`AGENTS.md`) would lead an agent to discover and search `docs/solutions/` before working in a documented area.

If the file doesn't surface the store, add the smallest possible mention — a single line in an existing architecture or conventions section is better than a new section. Keep the tone informational, not imperative:

```
docs/solutions/  # documented solutions to past problems, by category with YAML frontmatter (track, problem_type, tags)
```

## Where the Compounding Comes From

```
Without accumulation, every fix is ad-hoc:
  agent doesn't know the pitfall → you debug together → fix it

System remembers:
  agent reads the rule at startup → Plan phase avoids it → never reaches a bug
```

The time spent recording last time pays compound interest here.

## Checklist

- [ ] Track chosen (bug or knowledge)
- [ ] Recorded what worked and what didn't
- [ ] Extracted core reusable insights
- [ ] Solution doc has YAML frontmatter (track + problem_type)
- [ ] Saved to correct category under `docs/solutions/`
- [ ] Updated playbook (CLAUDE.md or equivalent)
- [ ] Discoverability check: startup file surfaces the store
- [ ] Considered whether a pattern doc should generalize this learning
- [ ] Verified it can be auto-applied next cycle
