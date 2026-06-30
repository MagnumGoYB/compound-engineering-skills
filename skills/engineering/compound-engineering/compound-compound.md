---
name: compound-compound
description: "Compound Engineering compound phase: capture solutions as reusable knowledge. Use after completing a feature or fixing a bug."
---

# Compound

> Extract solutions into reusable knowledge and write them back into the system. This step produces no code — it produces the system's ability to auto-avoid the same class of problems next time.

## Goal

Crystallize what was learned this cycle into system knowledge so the next cycle benefits automatically.

## Four Actions

### 1. Record Solutions

Ask yourself:
- What worked? (successful approaches)
- What didn't work? (failed attempts)
- What's the reusable insight? (core takeaway)

### 2. Add Metadata

Tag with YAML frontmatter for future searchability:

```yaml
---
title: Generic Pattern for Avoiding N+1 Queries
category: performance
tags: [database, query-optimization, n+1]
date: 2025-01-15
related: [docs/solutions/db-optimization.md]
---
```

### 3. Update the Playbook

Write new patterns into the project's agent startup file (e.g., `CLAUDE.md`):

```markdown
## Database Query Standards

### Avoid N+1 Queries
- Use `includes` or `preload` to eager-load relations
- Batch queries instead of looping single-row queries
- See: docs/solutions/n-plus-one-query.md
```

### 4. Validate What Was Learned

Next time a similar problem arises:
- Can the agent auto-detect it?
- Can it auto-apply the solution?
- Does the context need more detail?

## Solution Document Template

```markdown
---
title: [Problem summary]
category: [security|performance|architecture|quality|data]
tags: [tag1, tag2, tag3]
date: YYYY-MM-DD
severity: [p1|p2|p3]
related: [related doc paths]
---

## Problem

[Description including symptoms and impact]

## Root Cause

[The underlying cause]

## Solution

[Specific solution with code examples]

```code
// Example code
```

## Prevention

[Preventive measures and checkpoints]

## Verification

[How to confirm the problem is resolved]
```

## Storage Locations

- Solution docs: `docs/solutions/YYYY-MM-DD-<topic>.md`
- Playbook: the project's agent startup file at the repository root
- Plans: `docs/plans/`

## Where the Compounding Comes From

```
Without accumulation, every fix is ad-hoc:
  agent doesn't know the pitfall → you debug together → fix it

System remembers:
  agent reads the rule at startup → Plan phase avoids it → never reaches a bug
```

The time spent recording last time pays compound interest here.

## Checklist

- [ ] Recorded what worked and what didn't
- [ ] Extracted core reusable insights
- [ ] Solution doc has YAML frontmatter
- [ ] Updated playbook (CLAUDE.md or equivalent)
- [ ] Saved to correct location (`docs/solutions/`)
- [ ] Verified it can be auto-applied next cycle
