# Mobile App Template

A minimal, reusable Expo + React Native + TypeScript starter targeting iOS, Android, and web.

## Prerequisites

- Node.js and npm
- For iOS simulator: macOS with Xcode
- For Android emulator: Android Studio
- For physical devices: Expo Go or an appropriate development build, depending on SDK support

## Getting started

```sh
npm install
npm start
```

Use the Expo CLI prompts to launch a target, or run:

```sh
npm run ios
npm run android
npm run web
```

Run the TypeScript check:

```sh
npm run typecheck
```

The lockfile is committed. Use `npm ci` for reproducible installs. See `WORK_PLAN.md` for verification and open audit findings.

## Structure

- `app/_layout.tsx`: Root Expo Router layout.
- `app/index.tsx` and `app/details.tsx`: Home and Details navigation.
- `components/`: Shared accessible button and responsive screen layout.
- `theme/`: Shared colors and spacing.
- `app.json`: Expo application configuration.
- `WORK_PLAN.md`: Roadmap and current project status.
- `AGENTS.md`: Development guidelines.

## Status

Phase 1 is complete with iPhone and web user verification; Android remains unverified. Phase 2 is user-verified on iPhone and web. Phase 3 scope is proposed; Android runtime validation is deferred. See `WORK_PLAN.md` for actual checks and remaining limitations.
