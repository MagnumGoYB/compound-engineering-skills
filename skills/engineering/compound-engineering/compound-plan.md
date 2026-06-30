---
name: compound-plan
description: "Compound Engineering planning phase: requirements → research → solution design. Think before coding. Use when starting a new feature, before writing any code."
---

# Compound Plan

> 80% of thinking happens before code is written. Plan figures out how to solve — not write code yet.

## Goal

Produce a clear, executable implementation spec so the Work phase can execute without re-deciding.

## Process

### 1. Understand Requirements

- [ ] Identify the real problem (not what the user asked for, but what they need)
- [ ] Clarify constraints (time, tech, resources)
- [ ] Define success criteria

### 2. Research the Codebase

- [ ] Find existing implementations of similar features
- [ ] Understand current architecture and design patterns
- [ ] Identify reusable components and utilities

### 3. Consult Documentation

- [ ] Framework best practices
- [ ] API docs and type definitions
- [ ] Relevant ADRs (Architecture Decision Records)

### 4. Design Solutions

- [ ] List 2-3 viable approaches
- [ ] Analyze tradeoffs for each
- [ ] Recommend one with rationale

### 5. Validate the Design

- [ ] Does it solve the core problem?
- [ ] Is it consistent with existing architecture?
- [ ] Are edge cases covered?
- [ ] Is it testable?

## Output Format

```markdown
# [Feature Name] Implementation Plan

## Background
[Problem description and motivation]

## Constraints
[Technical limits, time constraints, dependencies]

## Design Comparison
| Approach | Pros | Cons | Recommended |
|----------|------|------|-------------|
| A        | ...  | ...  | ✓           |
| B        | ...  | ...  |             |

## Recommended Approach: [Name]
[Detailed design: file structure, interfaces, data flow]

## Edge Cases
[Exceptions and edge cases to handle]

## Testing Strategy
[How to verify correctness]
```

## Checklist

- [ ] Requirements are unambiguous
- [ ] Constraints are clear
- [ ] Existing implementations researched
- [ ] Relevant docs consulted
- [ ] Multiple approaches compared
- [ ] Recommended approach fully designed
- [ ] Design validated for feasibility
- [ ] Plan saved to `docs/plans/`
