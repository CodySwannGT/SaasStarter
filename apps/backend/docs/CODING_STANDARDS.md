# NestJS (GraphQL) Coding Standards

These guidelines define architecture, style, and workflows for the NestJS GraphQL service deployed via the Serverless Framework alongside auxiliary micro‑services (SQS callbacks, webhooks, scheduled jobs).

The goal is to incrementally adopt these and to automate enforcement through:

- Automation
- Linters/Formatters
- CI/CD Checks
- AI Tools
- IDE Settings
- Commit Hooks

---

## 1. Architecture & Module Structure

- **Feature‑Module Pattern.** Place domain code under `src/<feature>` with a `<feature>.module.ts` that bundles resolvers, services, DTOs, entities, and guards.
- **GraphQL Resolvers** reside in `resolvers/` directories; each resolver delegates to services only.
- **Serverless Functions.** Every GraphQL handler or background worker is declared in `serverless.yml`; handler files bootstrap a Nest application instance.
- **Public API Directory.** Only `index.ts` files at each feature root re‑export public classes.
- **Flat Folders.** Limit sub‑folders to `resolvers`, `services`, `entities`, `dto`, `guards`, `providers`.
- **File‑Size Limit.** Max **300 lines** per `.ts`; refactor when exceeded.

---

## 2. GraphQL Conventions

- **Relay Specification.** Schema follows Relay conventions (global object identification, `edges / node`, and `pageInfo` fields).
- **Cursor‑Based Pagination** is mandatory for every list‑returning query; `first`, `after`, `last`, and `before` arguments are required.
- **DataLoader Everywhere.** All relationships are batched via `DataLoader` instances scoped per‑request to eliminate N + 1 queries.

---

## 3. Resolvers vs. Services

- **Resolvers**: Pure orchestration—translate GraphQL operations to business logic, never call the ORM directly.
- **Services**: Encapsulate reusable domain logic and database access via repositories.
- **Response DTOs**: Resolvers return DTOs mapped from entities, never raw ORM objects.

---

## 4. Data Transfer Objects & Validation

- DTOs live in `dto/` with `<action>.input.ts` or `<action>.output.ts` suffixes.
- Decorate inbound DTO properties with **class‑validator** rules.
- Mark DTO properties `readonly` to signal immutability.

---

## 5. Persistence Layer (TypeORM)

- Implement `<Entity>Repository` classes that extend `Repository<Entity>` from **TypeORM**, isolating ORM specifics.
- All data access goes through repositories—services never call `EntityManager` directly.
- Migrations created with `typeorm migration:*` commands and committed to version control.

---

## 6. Dependency Injection & Providers

- Use constructor injection exclusively.
- Mark widely shared stateless helpers with `@Global()` modules.

---

## 7. Configuration Management

- Manage environment variables with `@nestjs/config` and `zod` schemas in `src/config/`.

---

## 8. Error Handling

- Throw **HttpException** or custom **GraphQLError** subclasses in services; global filters translate uncaught errors.
- Production errors never expose stack traces to clients.

---

## 9. Logging & Observability

- Inject `nestjs‑pino` `Logger` into every provider.
- Attach `requestId` via an interceptor using `AsyncLocalStorage` for distributed tracing.

---

## 10. Security

- Implement auth & role checks in **Guards**.
- Enable `helmet`, CORS, and throttling globally.
- Sanitize input with `ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })`.

---

## 11. Interceptors & Pipes

- Use interceptors for caching, timing, and tracing.
- Keep them stateless and reusable.

---

## 12. Testing Strategy

- **Unit Tests**: Jest with auto mocks; each class has a matching `*.spec.ts`.
- **Integration Tests**: Boot Nest app in memory and hit GraphQL operations via `supertest` with an in‑memory database or mocks.
- **Coverage Gate**: ≥80 % statement coverage required in CI.

---

## 13. Code Organisation Within Files

1. Imports (external then internal)
2. Decorators & class declaration
3. Static properties
4. Constructor & DI
5. Public methods
6. Private helpers

---

## 14. Style & Formatting

- Adopt **@typescript‑eslint/recommended** + `@nestjs/eslint‑plugin`.
- Run **Prettier** on pre‑commit via Husky; no inline overrides.
- Never disable lint rules without an explanatory comment.

---

## 15. Version Control

- **Conventional Commits** (feat, fix, chore…) with semantic scopes.
- Branch naming: `<type>/<jira‑id>-<slug>` (e.g., `feat/BAR‑101-add-orders-module`).
- Smart commits: commits should tag the JIRA issue they relate to (automate this to pull from the branch name)

---

## 16. Performance Optimisation

- Cache read‑heavy queries with `@CacheKey` + `@CacheTTL` or DataLoader.
- Avoid N + 1 queries through DataLoader and typed relation loading strategies in repositories.
- Profile cold‑start times and keep function bundles under 5 MB.

---

## 17. Documentation & Schema Contracts

- Treat **GraphQL SDL** as the source of truth; document types and fields inline using SDL comments and `@deprecated` directives when necessary.
- Expose interactive docs via GraphQL Playground or GraphiQL endpoints in non‑production stages.
- Enforce naming conventions and breaking‑change checks with **graphql‑schema‑lint** and **graphql‑schema‑diff** in CI.
