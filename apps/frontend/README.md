# Universal Frontend App (apps/frontend)

This is a cross-platform frontend application built with React Native and Expo, targeting web, iOS, and Android. It consumes the GraphQL API provided by the `apps/backend` service.

## Tech Stack Highlights

- **UI Framework**: [React Native](https://reactnative.dev/docs/getting-started) with [Expo](https://docs.expo.dev/)
- **Routing**: [Expo Router](https://expo.github.io/router/docs/)
- **Component Library**: [Gluestack UI](https://gluestack.io/ui/docs/overview/introduction) (v2)
- **Styling**: [NativeWind](https://www.nativewind.dev/) (Tailwind CSS for React Native)
- **API Communication**: [GraphQL](https://graphql.org/learn/) with [Apollo Client](https://www.apollographql.com/docs/react/)
- **State Management**: [Apollo Reactive Variables](https://www.apollographql.com/docs/react/local-state/reactive-variables/) (primarily for global state, component state managed with React hooks)
- **Forms**: [React Hook Form](https://www.react-hook-form.com/)
- **Build & Submission**: [EAS (Expo Application Services)](https://docs.expo.dev/build/introduction/)
- **Language**: TypeScript

For overall project setup, monorepo commands, general development workflows, and contribution guidelines, please refer to the main project [README.md](../../README.md).
For specific frontend development standards, component patterns, and performance best practices, see [../../docs/development/FRONTEND_GUIDELINES.md](../../docs/development/FRONTEND_GUIDELINES.md) (to be created).

## Development Commands

Ensure you have run `bun install` at the monorepo root. All commands should be run from the monorepo root unless specified otherwise.

```bash
# Start the Expo development server (prompts for platform: web, iOS, Android)
bun run dev:frontend

# Start specifically for web
bun run dev:web

# Start specifically for iOS (requires macOS and Xcode setup)
bun run dev:ios

# Start specifically for Android (requires Android Studio/SDK setup)
bun run dev:android

# --- Environment-specific start commands ---
# These scripts typically set an environment variable (e.g., APP_ENV)
# which is then used by app.config.ts or other config files to load
# the correct backend URL and other settings.
# Ensure corresponding .env files (e.g., .env.local, .env.dev) are set up in apps/frontend.

# Example: Start frontend configured for local backend
bun start:local-frontend

# Example: Start frontend configured for development backend
bun start:dev-frontend

# Example: Start frontend configured for staging backend
bun start:staging-frontend
```

### Working with the Code

- **GraphQL Schema Changes**: After the backend GraphQL schema ([`apps/backend/src/schema.gql`](../../backend/src/schema.gql)) is updated, regenerate the frontend's GraphQL types and Apollo Client hooks:

  ```bash
  # From the monorepo root
  bun generate:types:frontend
  ```

  This command typically uses the GraphQL endpoint defined in your frontend's environment configuration (e.g., via `EXPO_PUBLIC_GRAPHQL_BASE_URL` in an `.env` file) to fetch the schema and generate types into [`apps/frontend/generated/graphql.ts`](generated/graphql.ts).

- **NativeWind CSS**: NativeWind v4+ generally works well with Expo's Metro bundler and updates styles automatically. If you encounter issues with styles not updating, ensure your `tailwind.config.js` and `global.css` are correctly set up. A manual watch command might be available if needed:
  ```bash
  # From the apps/frontend directory
  bun watch:css
  ```

## Backend Integration

This frontend interfaces with the `apps/backend` GraphQL API.

- **API Type**: GraphQL, consumed using Apollo Client.
- **Connection**: The API endpoint is typically configured via environment variables (e.g., `EXPO_PUBLIC_GRAPHQL_BASE_URL` in `.env` files like `.env.local`, `.env.dev`, `.env.staging`) which are loaded based on the `start:<env>-frontend` script used or the EAS build profile.
- **Authentication**: Authentication is handled via AWS Cognito. The frontend is responsible for:
  - Collecting user credentials (e.g., email/password for sign-up/sign-in).
  - Communicating with the backend's authentication mutations (e.g., `signIn`, `signUp`).
  - Storing and managing JWTs (access token, refresh token, ID token) received from the backend.
  - Attaching the access token to authenticated GraphQL requests using an Apollo Link.
  - Handling token refresh logic.
- **API Documentation**:
  - The primary source of truth for the API schema is the backend's generated [`schema.gql`](../../backend/src/schema.gql) file.
  - The `bun generate:types:frontend` command uses this schema (or introspection from a running endpoint) to create typed client-side utilities.
  - Deployed backend environments usually offer an Apollo Sandbox at their `/graphql` endpoint for interactive schema exploration.

## Project Structure

The `apps/frontend` directory is organized as follows:

```
frontend/
├── app/                     # App routes and layouts (Expo Router v3 structure)
│   ├── (root)/              # Main app stack (authenticated routes)
│   │   ├── (auth)/          # Authentication-related screens (e.g., login, signup)
│   │   └── _layout.tsx      # Layout for the main authenticated stack
│   ├── _layout.tsx          # Root layout of the app
│   ├── +html.tsx            # Custom HTML for web
│   └── +not-found.tsx       # Not found screen
├── assets/                  # Static assets (images, fonts)
├── components/              # UI components
│   ├── custom/              # Custom-built components, potentially composed of ui components
│   │   └── ui/              # Custom UI components specific to this app
│   └── ui/                  # Gluestack UI components (ejected or customized)
│       └── gluestack-ui-provider/ # Custom GluestackUIProvider and its config
├── config/                  # Application-wide configurations (colors, constants, feature flags)
├── features/                # Feature-based modules (e.g., auth, profile, etc.)
│   └── someFeature/
│       ├── components/      # Components specific to this feature
│       ├── hooks/           # React Hooks specific to this feature
│       ├── providers/       # React Context providers for this feature
│       ├── stores/          # State management stores (e.g., Zustand, Jotai) for this feature
│       ├── types.ts         # TypeScript types specific to this feature
│       ├── constants.ts     # Constants specific to this feature
│       └── operations.graphql # GraphQL queries, mutations, subscriptions for this feature
├── generated/               # Auto-generated files (e.g., GraphQL types from codegen)
│   └── graphql.ts
├── hooks/                   # Shared/global React Hooks
├── patches/                 # Patches for npm dependencies (applied by `bun patch-commit`)
├── public/                  # Static assets for web builds (e.g. favicons, canvaskit.wasm)
├── scripts/                 # Utility scripts specific to the frontend
├── stores/                  # Global state management stores
├── tasks/                   # Task definitions for Taskmaster AI (if used)
├── types/                   # Global TypeScript type definitions for the frontend
├── utils/                   # Shared utility functions
├── .env.local               # Local environment variables (gitignored)
├── .env.dev                 # Development environment variables (gitignored)
├── .env.staging             # Staging environment variables (gitignored)
├── .env.example             # Example environment variables
├── app.config.ts            # Expo app configuration (dynamic)
├── app.json                 # Expo app configuration (static base)
├── babel.config.js          # Babel configuration
├── codegen.ts               # GraphQL Code Generator configuration
├── eas.json                 # EAS Build and Submit configuration
├── expo-env.d.ts            # Expo environment variable type declarations
├── global.css               # Global CSS for NativeWind/Tailwind
├── metro.config.js          # Metro bundler configuration
├── nativewind-env.d.ts      # NativeWind type declarations
├── package.json             # Frontend dependencies and scripts
└── tailwind.config.js       # Tailwind CSS configuration for NativeWind
```

This structure promotes modularity and separation of concerns, making it easier to navigate and scale the application.
