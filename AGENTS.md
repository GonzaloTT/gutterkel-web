# AGENTS.md

## Project

Gutterkel website built with React and Vite.

Main technologies:
- React
- JavaScript
- React Router
- CSS
- Vite
- ESLint

## General development rules

- Reuse existing components before creating new ones.
- Preserve the current visual identity and design system.
- Keep the website responsive on desktop, tablet, and mobile.
- Avoid unnecessary dependencies.
- Prefer small, focused changes over large rewrites.
- Do not refactor unrelated code while working on a specific task.
- Preserve existing functionality unless explicitly asked to change it.
- Follow the existing project structure and naming conventions.

## Debugging workflow

Before modifying code:

1. Inspect the relevant files.
2. Identify the root cause using evidence.
3. Check console errors, build errors, Git diff, browser behavior, or other available diagnostics.
4. Avoid speculative changes.

## Implementation workflow

For each task:

1. Identify the relevant file or files.
2. Inspect the existing implementation.
3. Make the smallest appropriate change.
4. Verify that related components are not negatively affected.
5. Run the appropriate validation commands.

## Validation

After source-code changes, run:

```bash
npm run build
```

When relevant, also run:

```bash
npm run lint
```

Do not claim a task is complete if validation fails.

## Git rules

Never work directly on main for feature development.
Do not create branches unless explicitly requested.
Do not commit automatically.
Do not push automatically.
Do not merge automatically.
Do not rebase automatically.
Do not reset or clean the repository unless explicitly requested.
Never use git push --force unless explicitly requested.

Before changing code, confirm the current branch and repository status.

## Commits

When a unit of work is complete, suggest a Conventional Commit message.

Do not create the commit unless explicitly requested.

## Final task report

When finishing a task, report:

What changed
Files modified
Validation performed
Any remaining risks or open decisions
Suggested Conventional Commit

Keep the report concise.

## UI and responsive behavior

When modifying visual components:

Check desktop and mobile behavior.
Avoid aggressive image cropping unless required by the design.
Preserve visual hierarchy.
Reuse existing spacing, typography, button, and layout patterns.
Avoid introducing one-off styles when an existing reusable style can be used.

## Scope control

If the requested change would require modifying unrelated architecture or several unrelated components, stop and explain why before proceeding.

Do not silently expand the scope of a task.