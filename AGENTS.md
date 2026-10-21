# AGENTS.md

## Purpose

Build and maintain a simple, modular, reusable application template using Expo, React Native, and TypeScript.

Support iOS, Android, and web equally.

Repository: https://github.com/mjcdata/mobile-app-template

## 1. Working Principles

- Inspect the repository and applicable instructions before making changes.
- Prefer simple, maintainable solutions over unnecessary complexity.
- Follow existing conventions unless there is a justified improvement.
- Keep the template broadly reusable rather than application-specific.
- Introduce dependencies and infrastructure only when needed.
- Treat files under `sources/` as read-only references.

## 2. Architecture

- Maintain clear separation of concerns.
- Separate navigation, UI, business logic, state management, storage, and external integrations.
- Give each module a clear responsibility.
- Minimize coupling and avoid duplicated logic.
- Favor simple functions and modules over unnecessary abstraction layers.
- Organize code by feature when appropriate.
- Keep platform-specific behavior isolated when necessary.
- Do not create empty folders or speculative architecture.

## 3. Technology

Initial direction:

- Expo and React Native
- TypeScript
- Expo Router
- React Hooks
- AsyncStorage for persistent storage
- Jest for testing
- GitHub Actions for automated checks

Add optional technologies only when justified and approved.

## 4. Implementation Workflow

1. Inspect relevant code, configuration, and documentation.
2. Identify the scope and potential impact.
3. Confirm scope before significant implementation.
4. Make focused changes consistent with existing conventions.
5. Run appropriate checks.
6. Review for modularity, maintainability, and cross-platform behavior.
7. Summarize results, limitations, and next steps.

Do not make unrelated changes.

## 5. Approval Requirements

Request approval before:

- Major architectural changes
- Adding, removing, or changing dependencies
- Introducing external services
- Publishing or deploying
- Destructive operations
- Significant changes to project instructions or established decisions

After scope is approved, handle routine implementation decisions independently.

## 6. Cross-Platform Requirements

- Treat iOS, Android, and web as equal targets.
- Prefer shared implementations when practical.
- Identify platform-specific limitations.
- Test affected platforms when the required environments are available.
- Never report a platform as verified unless it was actually tested.

## 7. Testing and Quality

- Use TypeScript, linting, and appropriate automated tests.
- Test important business logic and storage behavior.
- Keep tests proportional to project complexity.
- Run relevant checks after changes.
- Report failures and unverified behavior explicitly.
- Never claim a test, build, or deployment succeeded without evidence.

## 8. Documentation

- Keep durable plans and architectural decisions in the repository.
- Update relevant documentation when behavior or decisions change.
- Prefer updating existing documents over creating redundant files.
- Distinguish proposed, approved, implemented, and verified work.
- Keep documentation concise and useful.

## 9. Continuous Improvement

Proactively identify opportunities to improve:

- Architecture and modularity
- Code quality and maintainability
- Testing and reliability
- Development tools and dependencies
- Git and GitHub workflows
- Documentation
- Agent workflows and project instructions

Base recommendations on observed problems, concrete needs, or measurable benefits.

For meaningful recommendations, report:

- **Observation:** What needs improvement
- **Recommendation:** Proposed change
- **Benefit:** Expected value
- **Priority:** High, medium, or low
- **Timing:** Now or later

Do not automatically implement optional improvements.

## 10. Self-Improvement

Periodically evaluate whether `AGENTS.md` and related project instructions remain effective.

- Identify missing, outdated, conflicting, or redundant instructions.
- Recommend changes based on lessons learned.
- Explain the benefit of proposed changes.
- Request approval before modifying established instructions.
- Avoid adding rules that create unnecessary overhead.

## 11. Completion Reporting

After implementation work, report:

- Changes made
- Files affected
- Checks performed and their results
- Platforms actually verified
- Remaining limitations
- Meaningful improvement opportunities
- Recommended next step

## Guiding Principle

Build the simplest maintainable solution that meets current requirements while preserving modularity, cross-platform support, and future reusability.
