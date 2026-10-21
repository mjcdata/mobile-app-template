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

**Initial setup note:** The lockfile could not be generated in the repository-authoring environment. After `npm install`, commit the generated `package-lock.json` so future installs can use `npm ci`. Dependency installation and platform launches are not yet verified.

## Structure

- `app/_layout.tsx`: Root Expo Router layout.
- `app/index.tsx`: Minimal welcome screen.
- `app.json`: Expo application configuration.
- `WORK_PLAN.md`: Roadmap and current project status.
- `AGENTS.md`: Development guidelines.

## Status

Phase 1 is in progress. The source scaffold is committed, but dependency installation, type checking, and iOS/Android/web runtime checks remain unverified.
