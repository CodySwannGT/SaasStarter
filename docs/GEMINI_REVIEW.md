# Code Review: Library and Framework Conformance

This document outlines the findings of a code review focused on how well the project conforms to the best practices and standards of its core third-party libraries and frameworks, as listed in [`docs/archive/REVIEW.md`](docs/archive/REVIEW.md).

## 1. Turborepo

-   **Configuration:**
    -   [`turbo.json`](turbo.json) defines pipelines for `build`, `test`, `lint`, `dev`, `clean`, `format`, and `deploy`. Cache outputs are generally well-defined.
    -   The `deploy` pipeline depends on `build`, `test`, and `lint`, which is a good practice.
    -   Individual `package.json` scripts in `apps/backend`, `apps/frontend`, and `packages/config` align with these pipeline tasks.
-   **Conformance & Review Points:**
    -   **Good:** Standard Turborepo setup with clear pipeline definitions.
    -   **Docker Integration:** See section on "Turborepo and Docker" below. The primary `Dockerfile` for the backend does not currently leverage `turbo prune`.

## 2. Serverless Framework (for `apps/backend`)

-   **Configuration (`apps/backend/serverless.yml`):**
    -   Defines a service named `saas-starter-api`.
    -   Uses `serverless-offline` and `serverless-plugin-typescript` plugins.
    -   Specifies Node.js 20 runtime.
    -   Configures AWS provider with region, stage, and basic IAM permissions for Lambda execution and S3 access (though S3 permissions are very broad: `s3:*` on `*`).
    -   Defines environment variables, some sourced from CloudFormation outputs of the `CognitoStack` (e.g., `COGNITO_USER_POOL_ID`, `COGNITO_CLIENT_ID`).
    -   Functions are defined, including a `graphql` handler and an `authorizer` function.
    -   The `graphql` function handles HTTP API Gateway events (`ANY /graphql`, `ANY /`).
    -   The `authorizer` function is configured as a `REQUEST` type authorizer for API Gateway, caching for 300 seconds.
-   **Conformance & Review Points:**
    -   **Good:**
        -   Standard Serverless Framework structure.
        -   Use of plugins for offline development and TypeScript.
        -   Environment variables are parameterized.
        -   Separation of `graphql` handler and `authorizer`.
    -   **Needs Review/Improvement:**
        -   **IAM Permissions:** The S3 permissions (`s3:*` on `*`) are overly permissive. Permissions should follow the principle of least privilege.
        -   **Authorizer Implementation:** The actual logic of the `authorizer` function (presumably in `src/main-serverless.authorizer`) needs review to ensure it correctly validates tokens (likely Cognito JWTs) and returns the appropriate IAM policy.
        -   **GraphQL Handler:** The `graphql` handler in `src/main-serverless.graphql` needs to correctly bootstrap the NestJS application for a serverless environment.
        -   **Cold Starts:** For the `graphql` Lambda, consider strategies to mitigate cold starts if performance is critical (e.g., provisioned concurrency, Lambda warming).

## 3. AWS CDK (for `infrastructure/`)

-   **`AppStage` ([`infrastructure/lib/app-stage.ts`](infrastructure/lib/app-stage.ts)):**
    -   Defines a deployable stage for different environments.
    -   Instantiates `CognitoStack`.
    -   Placeholders for `SesStack` and `ApiStack` (commented out).
    -   **Good:** Modular stack design.
    -   **Review:** Implement or remove commented-out stacks.
-   **`CognitoStack` ([`infrastructure/lib/cognito-stack.ts`](infrastructure/lib/cognito-stack.ts)):**
    -   Detailed User Pool configuration: self-sign-up, MFA (optional), password policies, custom attributes.
    -   Conditional SES integration for emails (relies on `SesStack`).
    -   App client created with admin, user password, and custom auth flows.
    -   Exports important identifiers as CfnOutputs.
    -   **Good:** Detailed Cognito setup.
    -   **Review Points:**
        -   **SES Integration:** Ensure `SesStack` is implemented if SES is intended for production.
        -   **Removal Policy:** `RETAIN` for all stages; consider `DESTROY` for non-prod.
        -   **Custom Auth Flow:** If `custom: true` auth flow is used, the associated Lambda triggers (not defined in this stack) are critical to review.
-   **Overall CDK Conformance:**
    -   The project uses CDK v2.
    -   The structure with a main pipeline file ([`infrastructure/bin/infrastructure.ts`](infrastructure/bin/infrastructure.ts)) and separate stack definitions is standard.
    -   Configuration management (`shared-config.ts`, `environment-config.ts`) is good.

## 4. Expo & EAS (for `apps/frontend`)

-   **Configuration:**
    -   Dynamic configuration via [`apps/frontend/app.config.ts`](apps/frontend/app.config.ts) merges with static [`apps/frontend/app.json`](apps/frontend/app.json).
    -   Environment-specific app name, bundle IDs, versioning, and EAS Update URL.
    -   [`eas.json`](apps/frontend/eas.json) defines build and submit profiles for different environments with appropriate inheritance and environment variables.
    -   Plugins like `expo-router`, `expo-notifications` are configured.
    -   New Architecture (`newArchEnabled: true`) and Expo Router typed routes are enabled.
-   **Conformance & Review Points:**
    -   **Good:** Robust multi-environment setup for Expo and EAS.
    -   **Critical:** Placeholder EAS `projectId` in [`apps/frontend/app.config.ts`](apps/frontend/app.config.ts:7) **must be updated**.
    -   **Hardcoded Dark Mode:** Theme is hardcoded to dark in [`apps/frontend/app/_layout.tsx`](apps/frontend/app/_layout.tsx:102). Consider dynamic theme switching.

## 5. GitHub Actions

-   No workflow files found in `.github/workflows/`.
-   If CI/CD is handled by EAS Build's GitHub integration or another system, this is fine. If custom GitHub Actions are intended, they need to be created.
-   Turborepo caching and token environment variables (`TURBO_TOKEN`, `TURBO_TEAM`) would be relevant for custom GitHub Actions workflows.

## 6. Turborepo and Docker

-   **Backend (`apps/backend/Dockerfile`):**
    -   Uses a standard Node.js Docker setup.
    -   **Does not use `turbo prune --docker`**. This is a key Turborepo optimization for smaller and faster-building production images. The Dockerfile should be refactored into a multi-stage build using `turbo prune`.
    -   `CMD ["npm", "run", "dev"]` ([`apps/backend/Dockerfile:25`](apps/frontend/app/_layout.tsx:25)) is suitable for local development (as used in [`apps/backend/docker-compose.yml`](apps/backend/docker-compose.yml)) but not for production images. A production `CMD` should run the built application (e.g., `node dist/main.js`).
    -   Use of `npm install --legacy-peer-deps` ([`apps/backend/Dockerfile:13`](apps/backend/Dockerfile:13)) might indicate underlying peer dependency issues to resolve.
-   **Frontend (`apps/frontend`):**
    -   No `Dockerfile` found. This is typical if relying on EAS Build for native app builds. If a web version is deployed via Docker, a Dockerfile would be needed.
-   **Nginx (`apps/backend/nginx.Dockerfile`):**
    -   Sets up an Nginx reverse proxy.
    -   Uses `envsubst` for dynamic backend address configuration.
    -   **Path for Nginx configs:** The `COPY` paths for Nginx configuration files ([`apps/backend/nginx.Dockerfile:10-11`](apps/backend/nginx.Dockerfile:10-11)) (e.g., `infrastructure/nginx/nginx.conf`) seem to assume a build context that might not align if built from `apps/backend/`. This needs verification if Nginx is used. The `nginx` service is currently commented out in [`apps/backend/docker-compose.yml`](apps/backend/docker-compose.yml).

## 7. Apollo Client (in `apps/frontend`)

-   **Setup:** Likely initialized within a provider in the frontend. The exact setup file for Apollo Client (e.g., creating `ApolloClient` instance, configuring links like HTTPLink, AuthLink, errorLink, and cache) was not explicitly reviewed but is crucial.
-   **Common Practices:**
    -   Wrapping the app in `<ApolloProvider>`.
    -   Using hooks like `useQuery`, `useMutation`, `useSubscription`.
    -   GraphQL operations defined using `gql`.
    -   Cache management (e.g., `InMemoryCache`, type policies, cache updates after mutations).
    -   Error handling.
    -   Optimistic UI updates.
-   **Review Points (General, based on typical usage):**
    -   Ensure proper cache normalization and update strategies are in place, especially for lists and after mutations.
    -   Verify error handling (network and GraphQL errors).
    -   Check if an auth link is used to attach JWTs (from Cognito via `AuthService` on the backend) to requests.
    -   The GraphQL endpoint URI should be configurable per environment (likely via `EXPO_PUBLIC_GRAPHQL_BASE_URL` from `eas.json`).

## 8. Apollo Server (in `apps/backend`, via NestJS)

-   **Integration:** Uses `@nestjs/graphql` with `ApolloDriver` as seen in [`apps/backend/src/app.module.ts`](apps/backend/src/app.module.ts).
-   **Approach:** Code-first (`autoSchemaFile` generating [`apps/backend/src/schema.gql`](apps/backend/src/schema.gql)).
-   **Context:** Basic context `({ req }) => ({ req })` ([`apps/backend/src/app.module.ts:26`](apps/backend/src/app.module.ts:26)).
-   **Conformance & Review Points:**
    -   **Good:** Standard NestJS integration.
    -   **Critical:**
        -   The `me` query in `AuthResolver` ([`apps/backend/src/auth/auth.resolver.ts:11`](apps/backend/src/auth/auth.resolver.ts:11)) lacks an authentication guard.
        -   `AuthService` ([`apps/backend/src/auth/auth.service.ts`](apps/backend/src/auth/auth.service.ts)) is mocked and needs Cognito integration.
    -   **GraphQL Context:** Needs to be populated with authenticated user data by an auth guard.
    -   **Schema Path:** Verify the `autoSchemaFile` path ([`apps/backend/src/app.module.ts:22`](apps/backend/src/app.module.ts:22)) ensures the schema is generated in the intended location (likely `apps/backend/src/schema.gql`).

## 9. NestJS (for `apps/backend`)

-   **Structure:** Follows standard NestJS patterns (modules, controllers/resolvers, services).
    -   [`AppModule`](apps/backend/src/app.module.ts) configures `ConfigModule` and `GraphQLModule`.
    -   [`AuthModule`](apps/backend/src/auth/auth.module.ts) provides `AuthService` and `AuthResolver`.
-   **Conformance & Review Points:**
    -   **Good:** Modular structure.
    -   **Critical (Authentication/Authorization):**
        -   Implement real authentication in `AuthService` using Cognito.
        -   Add guards (e.g., `JwtAuthGuard`) to protected resolvers/endpoints.
        -   Populate GraphQL context with user information from validated tokens.
    -   **Input Validation:** Ensure DTOs (e.g., [`SignInInput`](apps/backend/src/dto/sign-in.input.ts)) use validation decorators and that a global `ValidationPipe` is registered or pipes are applied at the resolver level.
    -   **Configuration Management:** Uses `@nestjs/config` with a custom `configuration` function ([`apps/backend/src/config/configuration.ts`](apps/backend/src/config/configuration.ts)), which is good.
    -   **Error Handling:** Implement global exception filters for consistent error responses.

## 10. AWS Cognito

-   **Infrastructure Setup:** Defined in [`infrastructure/lib/cognito-stack.ts`](infrastructure/lib/cognito-stack.ts) with comprehensive configuration:
    -   Self-sign-up enabled with email verification.
    -   Optional MFA configuration.
    -   Strong password policies.
    -   Custom attributes for user profiles.
    -   App client with appropriate OAuth flows.
-   **Backend Integration:** Currently missing in the codebase:
    -   `AuthService` ([`apps/backend/src/auth/auth.service.ts`](apps/backend/src/auth/auth.service.ts)) contains mock implementations that need to be replaced with actual Cognito integration.
    -   No JWT validation middleware/guard is implemented for protected routes/resolvers.
-   **Frontend Integration:** Not explicitly visible in the reviewed code, but would typically involve:
    -   Authentication UI flows (sign-up, sign-in, password reset, MFA).
    -   Token management (storing, refreshing, and using JWTs).
    -   User profile management.
-   **Conformance & Review Points:**
    -   **Good:** Comprehensive Cognito stack configuration in CDK.
    -   **Critical:**
        -   **Backend Integration:** Implement proper Cognito authentication in `AuthService` using AWS SDK or libraries like `amazon-cognito-identity-js`.
        -   **JWT Validation:** Create a guard/middleware to validate Cognito JWTs for protected routes/resolvers.
        -   **Token Refresh:** Implement token refresh logic to handle expired JWTs.
    -   **Security Considerations:**
        -   Store tokens securely (e.g., secure HTTP-only cookies for web, secure storage for mobile).
        -   Implement proper token revocation on logout.
        -   Consider implementing PKCE for mobile/SPA authentication flows.
    -   **User Experience:**
        -   Handle MFA flows gracefully if enabled.
        -   Provide clear error messages for authentication failures.
        -   Consider implementing social login if needed (supported by Cognito).

## 11. Gluestack UI, NativeWind, and Tailwind CSS (for `apps/frontend`)

-   **Setup:**
    -   [`GluestackUIProvider`](apps/frontend/components/ui/gluestack-ui-provider/index.tsx) is used at the root ([`apps/frontend/app/_layout.tsx:102`](apps/frontend/app/_layout.tsx:102)).
    -   Theme tokens are defined as CSS variables in [`apps/frontend/components/ui/gluestack-ui-provider/config.ts`](apps/frontend/components/ui/gluestack-ui-provider/config.ts) using `nativewind/vars`.
    -   [`tailwind.config.js`](apps/frontend/tailwind.config.js) includes `@gluestack-ui/nativewind-utils/tailwind-plugin` and `nativewind/preset`. Colors are configured to use CSS variables from the Gluestack UI config.
    -   [`global.css`](apps/frontend/global.css) includes `@tailwind` directives.
-   **Conformance & Review Points:**
    -   **Good:** Core setup for Gluestack UI v2 with NativeWind is present. Theming via CSS variables is correctly configured between Gluestack and Tailwind configs.
    -   **Review Points:**
        -   **CSS Variable Injection (Web):** The mechanism for injecting CSS variables from `config.ts` into the web document needs confirmation. The custom provider at [`apps/frontend/components/ui/gluestack-ui-provider/index.tsx`](apps/frontend/components/ui/gluestack-ui-provider/index.tsx:18) applies styles directly to a `View`, which might not be sufficient for web. This could be handled by `setFlushStyles` or style tag injection elsewhere (e.g., in a Next.js `_document.js` or root `layout.tsx` if Next.js is used for web).
        -   **Hardcoded Dark Mode:** Theme is hardcoded to dark in [`apps/frontend/app/_layout.tsx`](apps/frontend/app/_layout.tsx:102).
        -   **Tailwind Safelist:** The broad safelist in [`apps/frontend/tailwind.config.js`](apps/frontend/tailwind.config.js:15-20) should be reviewed for necessity.
        -   **Commented Code:** Large commented section in [`apps/frontend/components/ui/gluestack-ui-provider/config.ts`](apps/frontend/components/ui/gluestack-ui-provider/config.ts:1-309) should be removed.

## Overall Summary & Key Recommendations

The project demonstrates a sophisticated setup leveraging a modern monorepo structure with Turborepo, IaC with CDK, a NestJS backend with GraphQL, and an Expo frontend with Gluestack UI and NativeWind.

**High-Priority Recommendations:**

1.  **Implement Real Authentication (Backend):** Replace mock authentication in `AuthService` with actual AWS Cognito integration.
2.  **Secure GraphQL Endpoints (Backend):** Add authentication guards (e.g., `JwtAuthGuard`) to protected GraphQL queries/mutations, especially the `me` query.
3.  **Update EAS Project ID (Frontend):** Replace the placeholder EAS `projectId` in [`apps/frontend/app.config.ts`](apps/frontend/app.config.ts:7) with the actual project ID.
4.  **Optimize Backend Dockerfile:** Implement `turbo prune --docker` in [`apps/backend/Dockerfile`](apps/backend/Dockerfile) for production builds and change `CMD` to run the production build.
5.  **Verify CSS Variable Injection for Web (Frontend):** Ensure CSS variables from Gluestack UI's theme config are correctly injected for web builds to work with NativeWind/Tailwind.
6.  **Implement Proper Cognito JWT Validation:** Create a robust authentication guard for NestJS that validates Cognito JWTs and extracts user information.

**Other Important Review Points:**

-   Refine overly permissive IAM roles in `serverless.yml`.
-   Review and implement (or remove) commented-out CDK stacks (`SesStack`, `ApiStack`).
-   Consider dynamic theme switching for the frontend.
-   Review and potentially narrow the Tailwind CSS safelist.
-   Clean up commented-out code in configuration files.
-   Ensure robust input validation and error handling in the NestJS backend.
-   Implement token refresh logic for handling expired Cognito JWTs.