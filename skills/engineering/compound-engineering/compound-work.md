---
name: compound-work
description: "Compound Engineering implementation phase: execute the plan in an isolated workspace. Use after a plan is ready."
---

# Compound Work

> Execute the plan in isolation. Focus on implementation — don't re-decide.

## Goal

Turn the Plan blueprint into working code, verifying every step without introducing regressions.

## Process

### 1. Create Isolated Environment

- [ ] Create a git worktree for isolation
- [ ] Confirm the workspace is clean (no uncommitted changes)

```bash
git worktree add -b <feature-branch> ../<worktree-name> <base-branch>
```

### 2. Implement Step by Step

- [ ] Read the Plan phase implementation spec
- [ ] Follow each step in order
- [ ] Run tests after each completed step

### 3. Verify After Every Change

After each change, always run:

- [ ] `npm run lint` or equivalent linter
- [ ] `npm run typecheck` or equivalent type checker
- [ ] Relevant tests pass
- [ ] Fix any issues found before continuing

### 4. Self-Test

After full implementation:

- [ ] Run the full test suite
- [ ] Verify edge cases from the Plan
- [ ] Confirm no regressions introduced

## Isolation Principles

| Principle | Explanation |
|-----------|-------------|
| **Don't pollute main** | git worktree ensures main branch stays clean |
| **Every step is reversible** | Frequent commits allow partial rollback |
| **Verification-driven** | Verify immediately after each change — don't defer |

## Interface With Plan

- The Plan output is the sole input to Work
- Work implements, does not redesign
- If a design issue surfaces, return to Plan — don't drift in Work

## Checklist

- [ ] git worktree environment created
- [ ] Plan spec read and understood
- [ ] Implementation completed step by step
- [ ] Tests/typecheck passed after each step
- [ ] Full test suite passes
- [ ] Edge cases verified
- [ ] No regressions
- [ ] Worktree cleaned up (worktree remove)
