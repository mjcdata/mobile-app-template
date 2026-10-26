# Mobile App Template — Work Plan

## 1. Current Project Status

**Current Phase:** Phase 3 — State & Storage

**Phase Status:** Scope proposed; awaiting approval for dependency addition

**Phase 1 verification (2026-10-26)**
- Expo, React Native, TypeScript, and Expo Router scaffold implemented.
- iPhone and web welcome screen user-verified; TypeScript passed as reported during Phase 1.
- Android runtime remains unverified.
- The 26 previously reported npm audit findings (7 moderate, 19 high) remain an open tracking item; no dependency fixes approved or applied. A fresh Phase 2 `npm ci --ignore-scripts` reported 8 findings (3 moderate, 5 high) with the unchanged lockfile. The count differs; no remediation or closure is claimed.
- Latest lockfile commit verified: `98308d9f645e835c2887b45f0489c80acdf6bdbd` — “expo application running successfully”. Package manifests and lockfile remain unchanged in Phase 2.

**Approved Phase 2 scope**
- Home → Details → Back using the existing Expo Router stack.
- Reusable accessible button and minimal shared colors/spacing.
- Shared responsive layout; no new dependencies.

**Next Action**

Approve the minimal Phase 3 scope and AsyncStorage dependency, then implement a persistent counter example. Current user priority is iPhone and web; Android runtime validation is deferred. Keep shared implementations compatible with Android.

---

## 2. Project Goal

Build a modular, reusable, cross-platform application template using Expo, React Native, and TypeScript.

The template must support iOS, Android, and web equally.

Authentication, persistent storage, automated testing, and GitHub automation are required capabilities.

Follow `AGENTS.md` for development standards, architecture, approval requirements, and continuous improvement.

## 3. Development Roadmap

| Phase | Focus | Status |
|---|---|---|
| 1 | Foundation | Completed (Android unverified) |
| 2 | UI & Navigation | Completed (iPhone/web user-verified) |
| 3 | State & Storage | Not started |
| 4 | Authentication | Not started |
| 5 | Testing & Quality | Not started |
| 6 | GitHub Automation | Not started |
| 7 | Cross-Platform Validation | Not started |
| 8 | Template Finalization | Not started |

## 4. Development Phases

### Phase 1 — Foundation

**Objective:** Establish a working cross-platform application.

**Deliverables**
- Initialize Expo and React Native.
- Configure TypeScript.
- Configure Expo Router.
- Create a minimal starter screen.
- Establish essential project configuration.
- Document setup instructions.

**Completion Criteria**
- Application starts successfully.
- Initial configuration checks pass.
- Available platform checks are documented.

### Phase 2 — UI & Navigation

**Progress (2026-10-26):** Completed for the current iPhone/web scope; user confirmed both platforms work. Android runtime validation is deferred at the user’s request.
- Added Home and Details stack routes, reusable Button and Screen components, and shared theme colors/spacing.
- Button has a readable label, button role, disabled state, visible keyboard focus, pressed feedback, and a minimum 48-point height. Text scaling remains enabled.
- Layout uses safe areas, scrolling, flexible width, and a 640-point content maximum for wider screens.
- Details returns through navigation history, with a Home fallback when opened without history.
- Checks passed: exact-lockfile install (`npm ci --ignore-scripts`), `npm run typecheck`, `npx expo export --platform all`, and `git diff --check`.
- iOS, Android, and web bundles exported successfully. These are bundle checks, not device/browser runtime verification.
- User verified Phase 2 on iPhone and web. Dedicated responsive layout, keyboard, VoiceOver, and TalkBack checks were not reported; Android runtime remains unverified. No lint or test scripts are configured.
- Platform behavior to verify: iOS stack back gesture/header; Android system Back/header; web browser history and keyboard navigation. The shared Back button is available on all three.
- No dependencies changed; `sources/` untouched.

**Objective:** Establish reusable UI patterns and navigation.

**Deliverables**
- Implement basic screen navigation.
- Create reusable UI components.
- Establish shared theme settings.
- Support responsive layouts.
- Apply accessibility fundamentals.

**Completion Criteria**
- Navigation works as intended.
- Reusable components demonstrate consistent styling.
- Platform-specific differences are documented.

### Phase 3 — State & Storage

**Proposed scope:** A counter on Home using React Hooks, persisted through AsyncStorage in a dedicated storage module, with loading/error handling and reset. Add only the AsyncStorage dependency after approval. Verify TypeScript and bundles; user checks persistence after reopening on iPhone and reloading web.

**Objective:** Implement application state and persistent local storage.

**Deliverables**
- Implement state management using React Hooks.
- Integrate AsyncStorage.
- Isolate storage operations in dedicated modules.
- Create a working persistent-data example.
- Implement appropriate storage error handling.

**Completion Criteria**
- Application state updates correctly.
- Stored data persists across application restarts.
- Storage logic remains independent of UI components.
- Verification results are documented by platform.

### Phase 4 — Authentication

**Objective:** Implement reusable, secure user authentication across iOS, Android, and web.

**Deliverables**
- Evaluate and select an authentication provider.
- Implement user registration.
- Implement sign-in and sign-out.
- Implement session management.
- Implement protected routes.
- Implement password recovery.
- Handle authentication errors.
- Implement appropriate secure session storage.
- Document provider configuration and platform differences.

**Completion Criteria**
- Users can register, sign in, and sign out.
- Authentication sessions persist appropriately.
- Protected screens enforce authentication requirements.
- Password recovery works.
- Sensitive authentication data is handled securely.
- Authentication behavior is verified and documented across platforms.

**Decision Required:** Authentication provider and supported sign-in methods must be approved before implementation.

### Phase 5 — Testing & Quality

**Objective:** Establish reliable automated testing and code-quality checks.

**Deliverables**
- Configure Jest.
- Add tests for important application logic.
- Test storage operations.
- Test authentication behavior.
- Add component tests where appropriate.
- Configure TypeScript validation.
- Configure linting.
- Document test commands.

**Completion Criteria**
- Automated tests execute successfully.
- TypeScript checks pass.
- Linting passes.
- Known testing limitations are documented.

### Phase 6 — GitHub Automation

**Objective:** Automate project validation through GitHub Actions.

**Deliverables**
- Create a GitHub Actions workflow.
- Automate TypeScript checks.
- Automate linting.
- Automate Jest tests.
- Document workflow behavior and failure handling.

**Completion Criteria**
- GitHub Actions runs automatically on configured events.
- Automated checks report accurate results.
- Workflow execution is verified on GitHub.

### Phase 7 — Cross-Platform Validation

**Objective:** Perform comprehensive validation across all supported platforms.

**Deliverables**
- Validate iOS functionality.
- Validate Android functionality.
- Validate web functionality.
- Review navigation and authentication.
- Review persistent storage.
- Review responsive layouts.
- Review accessibility.
- Document platform-specific limitations.

**Completion Criteria**
- Required functionality is verified on iOS, Android, and web.
- Known issues and limitations are documented.
- Unresolved blockers are addressed before finalization.

### Phase 8 — Template Finalization

**Objective:** Prepare the application foundation for reuse in future projects.

**Deliverables**
- Review project architecture and modularity.
- Remove unnecessary starter code and dependencies.
- Review security and configuration.
- Finalize setup instructions.
- Document project structure.
- Document authentication configuration.
- Verify the template can be initialized for a new application.
- Complete final quality checks.

**Completion Criteria**
- The template is reusable without unnecessary application-specific functionality.
- Documentation supports setup and development.
- Required capabilities are implemented and verified.
- No unresolved critical issues remain.

## 5. Architectural Requirements

Apply these requirements throughout every phase.

- Maintain separation of concerns.
- Keep UI, navigation, business logic, storage, and authentication logically separated.
- Give modules clear responsibilities.
- Minimize dependencies between unrelated modules.
- Favor simple functions and modules over unnecessary abstraction.
- Isolate platform-specific implementations when necessary.
- Avoid speculative infrastructure and unnecessary dependencies.
- Follow existing repository conventions unless improvements are justified.

Architecture is an ongoing development requirement, not a separate implementation phase.

## 6. Cross-Platform Requirements

iOS, Android, and web have equal priority.

- Consider all three platforms during implementation.
- Prefer shared code where practical.
- Identify and document platform-specific behavior.
- Run available platform checks throughout development.
- Perform comprehensive validation during Phase 7.
- Never report unexecuted checks as successful.

## 7. Security Requirements

Security applies throughout development, with additional attention during authentication.

- Never commit secrets or credentials.
- Use appropriate secure storage for authentication data.
- Keep sensitive information out of unencrypted AsyncStorage.
- Handle authentication and storage errors safely.
- Review third-party dependencies before adoption.
- Avoid exposing private configuration or user information.

## 8. Documentation and Progress Tracking

Maintain the development roadmap in this file.

Update progress as work is completed and verified.

**Status Definitions**

- **Not started:** Work has not begun.
- **In progress:** Implementation is underway.
- **Blocked:** Progress requires a decision or dependency.
- **Completed:** Required deliverables and verification criteria have been satisfied.

For each completed phase, record:
- Completion date
- Summary of changes
- Checks performed
- Platforms verified
- Outstanding limitations
- Relevant decisions

Keep documentation concise and avoid duplicating information across files.

## 9. Continuous Improvement

Evaluate opportunities to improve the project throughout development.

Areas include:
- Architecture and modularity
- Code quality and maintainability
- Testing and reliability
- Development tools and dependencies
- Git and GitHub workflows
- Documentation
- Project instructions and agent workflows

Recommendations should identify the observation, proposed improvement, expected benefit, priority, and timing.

Favor evidence-based, incremental improvements.

Do not implement optional improvements without approval.

## 10. Execution and Approval Rules

- Follow `AGENTS.md`.
- Discuss significant work before implementation.
- Request approval before major architectural changes.
- Request approval before adding or changing dependencies.
- Request approval before introducing external services.
- Request approval before publishing, deploying, or destructive operations.
- Handle routine changes independently after scope approval.
- Keep implementation focused on the approved phase.
- Update documentation when decisions or implementation status change.

## Guiding Principle

Build a simple, modular, secure, cross-platform application template that is easy to understand, maintain, test, extend, and reuse.

Introduce complexity only when it solves a demonstrated need.
