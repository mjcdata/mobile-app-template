# Agent Guide

## Purpose and scope

Maintain a minimal, reusable Expo + React Native + TypeScript template with Expo Router.

Repository: https://github.com/mjcdata/mobile-app-template

The current template is complete. It includes Home/Details navigation, a reusable button, shared theme values, and responsive layout basics. Do not resume the original roadmap automatically.

Accounts, authentication, persistent storage, backend services, linting, automated tests, and GitHub Actions are outside the completed scope. Add capabilities only for an agreed, concrete need.

Read `README.md` for setup and structure and `WORK_PLAN.md` for decisions, historical verification, deferred work, and known limitations.

## Starting a new app from this template

Apply this section when the user asks to start a new app using this template. It does not reopen development of the template itself.

- Confirm the new app’s purpose, intended users, repository/checkout, initial scope, and target platforms from the user’s request and available context. Ask only for missing decisions; do not invent requirements.
- Before implementing app features, adapt `AGENTS.md`, `README.md`, and `WORK_PLAN.md` in the new app’s checkout to the agreed purpose and scope. A request to start a new app authorizes these routine documentation adaptations; retain approval requirements for dependencies, services, architecture, and other significant decisions.
- Replace the template repository URL, completion status, old roadmap, template-only reuse restrictions, and deferred-capability statements with the new app’s actual information. Update platform priorities and setup/structure descriptions as appropriate.
- Record a small initial plan and agreed decisions. Do not automatically add accounts, storage, services, tests, or infrastructure from the template’s former roadmap.
- Preserve the general development, accessibility, approval, verification, and reporting rules unless the user directs otherwise.
- Treat inherited verification as historical template evidence, not proof that the new app passes. Record new checks against the new app. Preserve unresolved inherited dependency findings until rechecked or resolved; do not silently discard them.
- Modify only the new app’s checkout during adaptation. Do not change this source template or its remote unless explicitly requested. If the intended checkout is unclear, clarify before making changes.

## Working with the user

- Discuss intended scope before significant implementation. Once approved, handle routine implementation choices independently.
- Keep responses concise and focused on decisions, results, and next steps.
- Assume familiarity with JavaScript, TypeScript, and React. Explain mobile development or Git concepts when asked.
- Keep this repository broadly reusable. Discuss app-specific features before adding them.

## Before making changes

- Inspect the current checkout, Git status, applicable instructions, and relevant code and documentation.
- Verify the repository and remote before Git operations; do not assume a separate checkout is current.
- Preserve existing user changes and avoid unrelated edits.
- Treat any `sources/` files as read-only references; never edit, rename, move, or delete them.

## Implementation principles

- Follow existing conventions and make focused changes.
- Prefer simple functions and components over speculative abstractions or infrastructure.
- Keep navigation in `app/`, shared UI in `components/`, and shared colors/spacing in `theme/` unless a concrete need warrants a change.
- Separate responsibilities and isolate platform-specific behavior when necessary.
- Preserve accessibility fundamentals: readable labels, appropriate roles/states, visible keyboard focus, sufficient touch targets, text scaling, and scrollable layouts.
- Never commit secrets or private credentials.

## Approval boundaries

Ask before:

- Major architectural changes or significant changes to established project instructions/decisions.
- Adding, removing, or changing dependencies.
- Introducing external services.
- Publishing, deploying, or destructive operations.

An explicit user request authorizing one of these changes is sufficient approval for that scope. Do not request the same approval again. Propose optional improvements separately; do not implement them automatically.

## Platform and verification expectations

- Prioritize iPhone and web. Keep shared code compatible with Android; Android runtime verification is deferred until requested.
- Distinguish user-reported verification from checks performed by the agent.
- Run `npm run typecheck` for code changes. Use `npx expo export --platform all` when changes affect routes, imports, configuration, dependencies, or platform bundling.
- Exercise affected behavior on available runtime targets when practical. Bundle exports do not verify runtime navigation, layout, or accessibility.
- For documentation-only changes, review accuracy and run `git diff --check`; app tests are unnecessary.
- Lint and automated-test scripts are not configured. Do not claim they passed or introduce tooling without required approval.
- Report actual results, failures, and unverified behavior. Do not infer Android runtime success from shared code or a successful bundle.
- Historical audit findings remain open in `WORK_PLAN.md`. Do not claim they are resolved or run dependency remediation without approval.

## Documentation and handoff

- Update existing documentation when behavior, scope, setup, or durable decisions change.
- Keep `README.md` focused on using the template, `WORK_PLAN.md` on decisions/status/evidence, and this file on future agent behavior.
- Distinguish implemented, verified, and deferred work. Preserve material limitations when closing work.
- Summarize what changed, checks actually performed, affected platform verification, and remaining limitations.
- State whether changes are uncommitted, committed, or pushed when relevant. Never claim local/GitHub synchronization without checking current remote state.
