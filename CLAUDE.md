# CLAUDE.md

This file contains instructions for AI coding agents working on this repository.

## Project Structure

```
skills/
  engineering/           # Code-related skills
    compound-engineering/
      SKILL.md           # Main skill
      compound-plan.md   # Planning phase
      compound-work.md   # Implementation phase
      compound-review.md # Review phase
      compound-compound.md # Compound phase
  productivity/          # General workflow skills (future)
docs/                    # Documentation
scripts/                 # Build/validation scripts
```

## Skill File Format

Each skill is a markdown file with YAML frontmatter:

```yaml
---
name: skill-name
description: "Short description of when to use this skill."
---
```

## Conventions

- Skills should be small, focused, and composable
- Use checkboxes (`- [ ]`) for actionable items
- Include concrete examples and templates
- Write in English for skill content

## Validation

Run `npm run validate` to check skill file format.
