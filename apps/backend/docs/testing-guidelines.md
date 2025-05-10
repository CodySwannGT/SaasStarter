# Testing Guidelines for NestJS Backend

This document outlines our approach to testing in the NestJS backend application, covering solitary unit testing, sociable integration testing, test data management, mocking strategies, and performance testing.

## Table of Contents

1. [Testing Principles](#testing-principles)
2. [Unit Testing](#unit-testing)
3. [Integration Testing](#integration-testing)
4. [Test Data Management](#test-data-management)
5. [Mocking Strategies](#mocking-strategies)
6. [Performance Testing](#performance-testing)
7. [Code Coverage](#code-coverage)
8. [Test Organization](#test-organization)
9. [Continuous Integration](#continuous-integration)

## Overview of Test Types

This project uses two primary types of tests:

1. **Solitary Unit Tests**:

   - Located in `*.spec.ts` files
   - Use Jest as the test framework
   - Mock all dependencies
   - Focus on testing a single unit in isolation
   - Run with `yarn test:unit` command

2. **Sociable Integration Tests**:
   - Located in `*.integration-spec.ts` files
   - Use NestJS Test module
   - Test how multiple units work together
   - Verify connections between modules, services, and repositories
   - Test database integrations using TestingModule
   - Run with `yarn test:integration` command

Note: End-to-end (E2E) testing is handled in the frontend repository using Playwright.

## Testing Principles

- **Test Pyramid**: Follow the test pyramid approach with many unit tests and fewer integration tests.
- **Test Independence**: Tests should be independent and not rely on the state from other tests.
- **Test Readability**: Tests should be easy to read and understand.
- **Test Reliability**: Tests should be reliable and not flaky.
- **Test Speed**: Tests should be fast to run.
- **Test Coverage**: Aim for high test coverage, but focus on critical paths first.

## Unit Testing

Unit tests are "solitary" tests that focus on testing a single unit in isolation, with all dependencies mocked.

### Framework and Tools

- Jest is our primary test framework for unit tests
- We use Jest's mocking capabilities to isolate units from their dependencies

### File Naming and Location

- Unit test files should be named `*.spec.ts` and placed in the same directory as the file they test.

  ```
  src/
  ├── users/
  │   ├── users.service.ts
  │   └── users.service.spec.ts
  ```

### When to Write Unit Tests

Unit tests are ideal for:

- Testing business logic in isolation
- Testing transformations and calculations
- Testing error handling
- Testing edge cases

### Testing Services

Services are the core of our business logic and should have comprehensive unit tests.

```typescript
// users.service.spec.ts
import { Test, TestingModule } from "@nestjs/testing";
import { UsersService } from "./users.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";

describe("UsersService", () => {
  let service: UsersService;
  let mockRepository: any;

  beforeEach(async () => {
    mockRepository = {
      findOne: jest.fn(),
      find: jest.fn(),
      save: jest.fn(),
      create: jest.fn(),
      delete: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  describe("findOne", () => {
    it("should return a user if found", async () => {
      const mockUser = { id: "1", name: "Test User" };
      mockRepository.findOne.mockResolvedValue(mockUser);

      const result = await service.findOne("1");
      expect(result).toEqual(mockUser);
      expect(mockRepository.findOne).toHaveBeenCalledWith({
        where: { id: "1" },
      });
    });

    it("should return null if user not found", async () => {
      mockRepository.findOne.mockResolvedValue(null);

      const result = await service.findOne("999");
      expect(result).toBeNull();
    });
  });

  // Add tests for other methods...
});
```

### Testing Resolvers

GraphQL resolvers should be tested with mocked service dependencies.

```typescript
// users.resolver.spec.ts
import { Test, TestingModule } from "@nestjs/testing";
import { UsersResolver } from "./users.resolver";
import { UsersService } from "./users.service";

describe("UsersResolver", () => {
  let resolver: UsersResolver;
  let mockUsersService: any;

  beforeEach(async () => {
    mockUsersService = {
      findAll: jest.fn(),
      findOne: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      remove: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersResolver,
        {
          provide: UsersService,
          useValue: mockUsersService,
        },
      ],
    }).compile();

    resolver = module.get<UsersResolver>(UsersResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });

  describe("findAll", () => {
    it("should return an array of users", async () => {
      const mockUsers = [
        { id: "1", name: "User 1" },
        { id: "2", name: "User 2" },
      ];
      mockUsersService.findAll.mockResolvedValue(mockUsers);

      const result = await resolver.findAll();
      expect(result).toEqual(mockUsers);
      expect(mockUsersService.findAll).toHaveBeenCalled();
    });
  });

  // Add tests for other methods...
});
```

### Testing Guards, Pipes, and Filters

Custom guards, pipes, and filters should also have unit tests.

```typescript
// auth.guard.spec.ts
import { AuthGuard } from "./auth.guard";
import { ExecutionContext } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

describe("AuthGuard", () => {
  let guard: AuthGuard;
  let jwtService: JwtService;

  beforeEach(() => {
    jwtService = new JwtService({ secret: "test-secret" });
    guard = new AuthGuard(jwtService);
  });

  it("should be defined", () => {
    expect(guard).toBeDefined();
  });

  describe("canActivate", () => {
    it("should return true for valid token", async () => {
      const token = jwtService.sign({ userId: "1", username: "test" });
      const mockContext = {
        switchToHttp: () => ({
          getRequest: () => ({
            headers: {
              authorization: `Bearer ${token}`,
            },
          }),
        }),
      } as ExecutionContext;

      const result = await guard.canActivate(mockContext);
      expect(result).toBe(true);
    });

    it("should throw for invalid token", async () => {
      const mockContext = {
        switchToHttp: () => ({
          getRequest: () => ({
            headers: {
              authorization: "Bearer invalid-token",
            },
          }),
        }),
      } as ExecutionContext;

      await expect(guard.canActivate(mockContext)).rejects.toThrow();
    });
  });
});
```

## Integration Testing

Integration tests (or "sociable" tests) verify that different components work together correctly. These tests focus on how multiple units interact and are especially useful for verifying database interactions and module connections.

### File Naming and Location

- Integration test files should be named `*.integration-spec.ts` and placed in the same directory as the file they test.

  ```
  src/
  ├── users/
  │   ├── users.service.ts
  │   ├── users.service.spec.ts            # Unit test
  │   └── users.service.integration-spec.ts # Integration test
  ```

### When to Write Integration Tests

Integration tests are ideal for:

- Testing database interactions
- Testing how multiple services work together
- Testing GraphQL resolvers with actual services
- Testing API endpoints
- Testing complete features

### Using NestJS Testing Module

Integration tests should use the NestJS Testing module, which makes it easy to create testing modules with real dependencies.

```typescript
// users.service.integration-spec.ts
import { Test, TestingModule } from "@nestjs/testing";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersService } from "./users.service";
import { User } from "./entities/user.entity";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Repository } from "typeorm";

describe("UsersService Integration", () => {
  let service: UsersService;
  let repository: Repository<User>;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: "sqlite",
          database: ":memory:",
          entities: [User],
          synchronize: true,
        }),
        TypeOrmModule.forFeature([User]),
      ],
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  beforeEach(async () => {
    // Clear the database before each test
    await repository.clear();
  });

  it("should create a user", async () => {
    const user = await service.create({
      name: "Test User",
      email: "test@example.com",
    });

    expect(user).toBeDefined();
    expect(user.id).toBeDefined();
    expect(user.name).toBe("Test User");
    expect(user.email).toBe("test@example.com");

    // Verify the user was actually saved to the database
    const savedUser = await repository.findOne({ where: { id: user.id } });
    expect(savedUser).toBeDefined();
    expect(savedUser.name).toBe("Test User");
  });

  // Add more integration tests...
});
```

### Module Integration

Test how multiple modules work together using NestJS Test module.

```typescript
// auth.module.integration-spec.ts
import { Test, TestingModule } from "@nestjs/testing";
import { AuthModule } from "./auth.module";
import { UsersModule } from "../users/users.module";
import { AuthService } from "./auth.service";
import { JwtService } from "@nestjs/jwt";

describe("AuthModule Integration", () => {
  let authService: AuthService;
  let jwtService: JwtService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AuthModule, UsersModule],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    jwtService = module.get<JwtService>(JwtService);
  });

  it("should validate a user", async () => {
    // Test that AuthService correctly integrates with UsersService
    const result = await authService.validateUser("testuser", "password");
    expect(result).toBeDefined();
  });

  // Add more integration tests...
});
```

## Test Data Management

### Test Fixtures

Create reusable test fixtures for common test data.

```typescript
// fixtures/users.fixture.ts
import { User } from "../src/users/entities/user.entity";

export const userFixture = (overrides?: Partial<User>): User => {
  return {
    id: "1",
    name: "Test User",
    email: "test@example.com",
    password: "hashedpassword",
    createdAt: new Date(),
    updatedAt: new Date(),
    ...overrides,
  };
};

export const usersArrayFixture = (count: number = 3): User[] => {
  return Array.from({ length: count }, (_, i) =>
    userFixture({
      id: String(i + 1),
      name: `Test User ${i + 1}`,
      email: `test${i + 1}@example.com`,
    })
  );
};
```

### Test Data Setup and Cleanup

Always clean up test data after tests to ensure test isolation.

```typescript
describe("UsersService", () => {
  // ...

  beforeEach(async () => {
    // Set up test data
    await repository.save(usersArrayFixture());
  });

  afterEach(async () => {
    // Clean up test data
    await repository.clear();
  });

  // ...
});
```

## Mocking Strategies

### Mock Repositories

```typescript
const mockRepository = () => ({
  findOne: jest.fn(),
  find: jest.fn(),
  save: jest.fn(),
  create: jest.fn(dto => dto),
  delete: jest.fn(),
  update: jest.fn(),
});
```

### Mock Services

```typescript
const mockUsersService = () => ({
  findOne: jest.fn(),
  findAll: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
});
```

### Mock External APIs

```typescript
jest.mock("axios", () => ({
  get: jest.fn(),
  post: jest.fn(),
}));

// In your test
const axios = require("axios");
axios.get.mockResolvedValue({ data: { result: "success" } });
```

### Mock AWS Services

```typescript
// Mock S3 client
jest.mock("@aws-sdk/client-s3", () => {
  return {
    S3Client: jest.fn().mockImplementation(() => ({
      send: jest
        .fn()
        .mockImplementation(() => Promise.resolve({ success: true })),
    })),
    PutObjectCommand: jest.fn().mockImplementation(params => params),
  };
});
```

## Performance Testing

### Load Testing Tools

- Use k6, Artillery, or JMeter for load testing
- Define performance benchmarks for critical endpoints

### Performance Test Suite

Create a dedicated performance test suite that runs in a controlled environment.

```typescript
// performance/load-test.js (using k6)
import http from "k6/http";
import { sleep, check } from "k6";

export const options = {
  vus: 10, // 10 virtual users
  duration: "30s", // 30 seconds test
  thresholds: {
    http_req_duration: ["p(95)<500"], // 95% of requests should be below 500ms
    http_req_failed: ["rate<0.01"], // Less than 1% of requests should fail
  },
};

export default function () {
  const url = "https://api-dev.example.com/graphql";
  const payload = JSON.stringify({
    query: `
      {
        users {
          id
          name
        }
      }
    `,
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = http.post(url, payload, params);
  check(res, {
    "is status 200": r => r.status === 200,
    "has data": r => JSON.parse(r.body).data !== undefined,
  });

  sleep(1); // Sleep for 1 second between iterations
}
```

### Performance Monitoring

Set up continuous performance monitoring in your production environment.

## Code Coverage

### Coverage Goals

- Aim for at least 80% overall code coverage
- Critical paths should have 90%+ coverage
- Focus on business logic coverage rather than boilerplate code
- Maintain separate coverage reports for unit tests and integration tests

### Coverage Configuration

For unit tests:

```typescript
// jest.config.js or package.json
{
  "coverageThreshold": {
    "global": {
      "branches": 80,
      "functions": 80,
      "lines": 80,
      "statements": 80
    },
    "src/users/**/*.ts": {
      "branches": 90,
      "functions": 90,
      "lines": 90,
      "statements": 90
    },
    "src/auth/**/*.ts": {
      "branches": 90,
      "functions": 90,
      "lines": 90,
      "statements": 90
    }
  },
  "collectCoverageFrom": [
    "src/**/*.ts",
    "!src/**/*.spec.ts",
    "!src/**/*.integration-spec.ts",
    "!src/**/*.module.ts",
    "!src/main.ts",
    "!src/database/migrations/**"
  ],
  "testMatch": ["**/*.spec.ts"]
}
```

For integration tests:

```typescript
// jest.integration.config.js
{
  "coverageThreshold": {
    "global": {
      "branches": 70,
      "functions": 70,
      "lines": 70,
      "statements": 70
    }
  },
  "collectCoverageFrom": [
    "src/**/*.ts",
    "!src/**/*.spec.ts",
    "!src/**/*.integration-spec.ts",
    "!src/**/*.module.ts",
    "!src/main.ts",
    "!src/database/migrations/**"
  ],
  "testMatch": ["**/*.integration-spec.ts"]
}
```

## Test Organization

### Test Structure

Use Jest's `describe` and `it` functions to organize tests into logical groups.

```typescript
describe("UsersService", () => {
  describe("findAll", () => {
    it("should return an array of users", async () => {
      // Test implementation
    });
  });

  describe("findOne", () => {
    it("should return a user if found", async () => {
      // Test implementation
    });

    it("should return null if not found", async () => {
      // Test implementation
    });
  });

  // More test groups...
});
```

### Test Naming Conventions

Use descriptive test names that explain what is being tested and what is expected.

- Good: `should return null when user not found`
- Bad: `test findOne`

## Continuous Integration

### CI Workflow

```yaml
# .github/workflows/test.yml
name: Test
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js
        uses: actions/setup-node@v1
        with:
          node-version: "20.x"
      - name: Install dependencies
        run: yarn install
      - name: Run linting
        run: yarn lint
      - name: Run unit tests
        run: yarn test:unit --coverage
      - name: Run integration tests
        run: yarn test:integration --coverage
      - name: Upload unit test coverage
        uses: codecov/codecov-action@v1
        with:
          token: ${{ secrets.CODECOV_TOKEN }}
          flags: unit
          file: ./coverage-unit/coverage-final.json
      - name: Upload integration test coverage
        uses: codecov/codecov-action@v1
        with:
          token: ${{ secrets.CODECOV_TOKEN }}
          flags: integration
          file: ./coverage-integration/coverage-final.json
```

### Test Results Reporting

- Configure Jest to output JUnit XML reports for both unit and integration tests
- Integrate with your CI system to display test results
- Set up notifications for test failures

```typescript
// jest.config.js
module.exports = {
  // ... other config
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "./test-results/jest/unit",
        outputName: "results.xml",
      },
    ],
  ],
};

// jest.integration.config.js
module.exports = {
  // ... other config
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "./test-results/jest/integration",
        outputName: "results.xml",
      },
    ],
  ],
};
```
