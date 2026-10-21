# Mobile App Template — Work Plan

## 1. Current Project Status

**Current Phase:** Phase 1 — Foundation

**Phase Status:** Not started

**Completed Setup**
- GitHub repository created.
- `AGENTS.md` committed.

**Next Action**

Approve the Phase 1 implementation scope, then initialize Expo, React Native, TypeScript, and Expo Router.

---

## 2. Project Goal

Build a modular, reusable, cross-platform application template using Expo, React Native, and TypeScript.

The template must support iOS, Android, and web equally.

Authentication, persistent storage, automated testing, and GitHub automation are required capabilities.

Follow `AGENTS.md` for development standards, architecture, approval requirements, and continuous improvement.

## 3. Development Roadmap

| Phase | Focus | Status |
|---|---|---|
| 1 | Foundation | Not started |
| 2 | UI & Navigation | Not started |
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
