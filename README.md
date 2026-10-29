# Mobile App Template

A minimal, reusable Expo + React Native + TypeScript starter with Expo Router navigation.

## Status and scope

The current minimal template is complete by user decision on 2026-10-28. It includes Home → Details → Back navigation, a reusable accessible button, shared colors/spacing, and a responsive screen layout.

The user verified the app on iPhone and web. Android remains configured and its bundle exported successfully, but Android runtime validation is deferred. Dedicated accessibility and responsive-layout testing remains unverified.

Accounts, sign-in, persistent storage, cloud databases, linting, automated tests, and GitHub Actions are outside the completed scope. No backend service was selected or connected. See [WORK_PLAN.md](WORK_PLAN.md) for decisions, historical checks, and open limitations.

## Prerequisites

- Node.js and npm compatible with the versions in `package.json`.
- For physical iPhone testing: Expo Go or an appropriate development build, depending on SDK support.
- For the iOS simulator: macOS with Xcode.
- For optional Android testing: Android Studio/emulator or a compatible physical-device setup.

## Getting started

From the repository directory:

```sh
npm ci
npm start
```

The committed lockfile provides reproducible dependency versions. Use the Expo CLI prompts to open a target, or run:

```sh
npm run ios
npm run web
# Optional; runtime unverified:
npm run android
```

## Checks

```sh
npm run typecheck
npx expo export --platform all
```

Exporting bundles does not verify device or browser runtime behavior. No lint or automated-test scripts are configured. Historical dependency audit findings remain unresolved; see the work plan. No dependency remediation is implied by template completion.

## Structure

- `app/_layout.tsx`: Expo Router stack and header styling.
- `app/index.tsx`: Home screen.
- `app/details.tsx`: Details screen with Back and a Home fallback.
- `components/Button.tsx`: Shared button with accessibility role/state and focus/pressed feedback.
- `components/Screen.tsx`: Safe-area, scrollable, width-constrained layout.
- `theme/index.ts`: Shared colors and spacing.
- `app.json`: Expo configuration for iOS, Android, and web.
- `WORK_PLAN.md`: Scope decisions, completed work, verification, and deferred work.
- `AGENTS.md`: Development guidelines.

## Reuse

Adapt the screens, theme, and Expo app identity for a new app. Discuss additional capabilities before adding them. Keep the template small; introduce storage, accounts, services, and infrastructure only when a concrete use case requires them.
