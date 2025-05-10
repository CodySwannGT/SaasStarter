# API Design Standards

This document outlines the API design standards for our NestJS backend, covering both GraphQL and REST API approaches, versioning strategy, error handling, and authentication/authorization patterns.

## Table of Contents

1. [GraphQL API Design](#graphql-api-design)
2. [REST API Design](#rest-api-design)
3. [Versioning Strategy](#versioning-strategy)
4. [Error Response Format](#error-response-format)
5. [Authentication and Authorization](#authentication-and-authorization)

## GraphQL API Design

### Schema Organization

- Use schema-first approach with `.graphql` files
- Organize schema by feature/domain
- Place schema files next to resolvers
- Use a global schema registry to combine schemas

### Type Definitions

- Follow Relay specification for connections/pagination
- Use clear and descriptive field names
- Include documentation comments for all types and fields
- Group related fields together
- Use semantic naming conventions

```graphql
"""
A user in the system
"""
type User {
  """
  Unique identifier for the user
  """
  id: ID!

  """
  The user's full name
  """
  name: String!

  """
  Email address (unique)
  """
  email: String!

  """
  Optional profile information
  """
  profile: Profile

  """
  When the user account was created
  """
  createdAt: DateTime!

  """
  When the user account was last updated
  """
  updatedAt: DateTime
}
```

### Query Design

- Follow RESTful resource-oriented naming
- Use plural nouns for collections, singular for individual resources
- Implement proper cursor-based pagination
- Support filtering by relevant attributes
- Allow field selection through GraphQL's standard selection sets

```graphql
type Query {
  """
  Get a user by ID
  """
  user(id: ID!): User

  """
  Get a paginated list of users with optional filtering
  """
  users(
    """
    Filter users by status
    """
    status: UserStatus

    """
    Number of results to return
    """
    first: Int = 10

    """
    Cursor for pagination
    """
    after: String
  ): UserConnection!
}

"""
Relay-style connection for users
"""
type UserConnection {
  edges: [UserEdge!]!
  pageInfo: PageInfo!
}

type UserEdge {
  node: User!
  cursor: String!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}
```

### Mutation Design

- Use verb-noun naming convention (e.g., `createUser`, `updateUserProfile`)
- Group related inputs into input objects
- Return the modified resource as part of mutation response
- Include error details in the response
- Consider using a consistent mutation response interface

```graphql
type Mutation {
  """
  Create a new user
  """
  createUser(input: CreateUserInput!): CreateUserPayload!

  """
  Update an existing user
  """
  updateUser(id: ID!, input: UpdateUserInput!): UpdateUserPayload!

  """
  Delete a user
  """
  deleteUser(id: ID!): DeleteUserPayload!
}

input CreateUserInput {
  name: String!
  email: String!
  password: String!
}

type CreateUserPayload {
  user: User
  errors: [Error!]
}

type Error {
  path: [String!]!
  message: String!
  code: String!
}
```

### Subscriptions

- Use for real-time events and updates
- Name based on the event (e.g., `userCreated`, `messageReceived`)
- Allow filtering subscription events
- Consider security implications of subscriptions

```graphql
type Subscription {
  """
  Emitted when a user is created
  """
  userCreated: User!

  """
  Emitted when a message is received by a specific user
  """
  messageReceived(userId: ID!): Message!
}
```

## REST API Design

Though GraphQL is our primary API style, we may need REST endpoints for certain scenarios.

### URL Structure

- Use plural nouns for resource collections
- Use clear hierarchical resource paths
- Keep URLs simple and intuitive
- Include API version in path

```
/api/v1/users              # List users
/api/v1/users/:id          # Get user by id
/api/v1/users/:id/profile  # Get user profile
```

### HTTP Methods

- Use appropriate HTTP methods for operations:
  - `GET`: Retrieve resources
  - `POST`: Create resources
  - `PUT`: Update/replace resources completely
  - `PATCH`: Update resources partially
  - `DELETE`: Remove resources

### Request Parameters

- Use query parameters for filtering, sorting, and pagination
- Use path parameters for resource identification
- Use request body for resource data in POST, PUT, PATCH

```
GET /api/v1/users?status=active&sort=name&page=2&limit=10
GET /api/v1/users/123
POST /api/v1/users
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "secure123"
}
```

### Response Structure

- Use consistent envelope format
- Include pagination metadata
- Use appropriate HTTP status codes
- Include error details in error responses

```json
// Success response
{
  "data": [
    {
      "id": "1",
      "name": "John Doe",
      "email": "john@example.com"
    }
  ],
  "meta": {
    "total": 100,
    "page": 2,
    "limit": 10,
    "totalPages": 10
  }
}

// Error response
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": [
      {
        "field": "email",
        "message": "Invalid email format"
      }
    ]
  }
}
```

## Versioning Strategy

### GraphQL Versioning

GraphQL APIs can evolve without breaking changes:

1. **Field Deprecation**: Mark fields as deprecated before removal

   ```graphql
   type User {
     id: ID!
     name: String!
     email: String!
     username: String @deprecated(reason: "Use email instead")
   }
   ```

2. **Type Extensions**: Add new fields without breaking existing queries
3. **Nullable Fields**: Make new required fields nullable initially

### REST API Versioning

For REST APIs, use explicit versioning in the URL path:

```
/api/v1/users
/api/v2/users
```

### Version Lifecycle

1. **Development**: Internal testing, not stable
2. **Beta**: External testing, may change
3. **Stable**: Production-ready, follows semver
4. **Deprecated**: Still works but marked for removal
5. **Removed**: No longer available

Include version sunset policy in API documentation, with at least 6 months notice before removing deprecated versions.

## Error Response Format

### GraphQL Errors

GraphQL errors should be handled at three levels:

1. **GraphQL-level Errors**: Syntax, validation, and execution errors
2. **Business Logic Errors**: Domain-specific errors
3. **Server Errors**: Internal server errors

Format GraphQL errors consistently:

```graphql
{
  "errors": [
    {
      "message": "User not found",
      "path": ["user"],
      "extensions": {
        "code": "NOT_FOUND",
        "classification": "DataFetchingException"
      }
    }
  ],
  "data": {
    "user": null
  }
}
```

### REST API Errors

For REST API errors:

1. Use appropriate HTTP status codes
2. Include detailed error information
3. Use consistent error structure

```json
{
  "error": {
    "status": 400,
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": [
      {
        "field": "email",
        "message": "Invalid email format",
        "rule": "email"
      }
    ],
    "timestamp": "2023-06-15T10:30:45Z",
    "requestId": "req-12345"
  }
}
```

### Error Codes

Define a set of standard error codes to use across API:

- `VALIDATION_ERROR`: Input validation failed
- `AUTHENTICATION_ERROR`: Authentication required or failed
- `AUTHORIZATION_ERROR`: Insufficient permissions
- `RESOURCE_NOT_FOUND`: Requested resource not found
- `CONFLICT`: Resource conflict (e.g., duplicate email)
- `RATE_LIMIT_EXCEEDED`: Too many requests
- `INTERNAL_ERROR`: Unspecified server error

## Authentication and Authorization

### Authentication Methods

Support multiple authentication methods:

1. **JWT Authentication**:

   - Issue JWTs after successful login
   - Short expiration (15-60 minutes)
   - Use refresh tokens for re-authentication

2. **API Keys**:
   - For service-to-service communication
   - Long-lived but revocable
   - Assign to specific clients

### JWT Structure

```json
{
  "header": {
    "alg": "RS256",
    "typ": "JWT"
  },
  "payload": {
    "sub": "1234567890",
    "name": "John Doe",
    "email": "john@example.com",
    "roles": ["user"],
    "permissions": ["read:users", "write:users"],
    "iat": 1516239022,
    "exp": 1516242622
  }
}
```

### Authorization Patterns

#### Role-Based Access Control (RBAC)

Define roles (e.g., admin, user, guest) with associated permissions:

```typescript
// Guard implementation
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!requiredRoles) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();
    return requiredRoles.some(role => user.roles.includes(role));
  }
}

// Usage
@Get('admin-dashboard')
@Roles('admin')
getAdminDashboard() {
  // ...
}
```

#### Attribute-Based Access Control (ABAC)

For more complex authorization logic:

```typescript
@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly permissionService: PermissionService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredPermissions = this.reflector.get<string[]>(
      "permissions",
      context.getHandler()
    );
    if (!requiredPermissions) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();
    return this.permissionService.hasPermissions(user, requiredPermissions);
  }
}
```

#### GraphQL-Specific Authorization

For GraphQL resolvers:

```typescript
@Resolver(() => User)
export class UsersResolver {
  @Query(() => User)
  @Roles("admin")
  async user(@Args("id") id: string): Promise<User> {
    // ...
  }

  @ResolveField(() => [Post])
  async posts(@Parent() user: User, @Context() context: any): Promise<Post[]> {
    // Custom field-level authorization
    const currentUser = context.req.user;
    if (currentUser.id !== user.id && !currentUser.roles.includes("admin")) {
      return [];
    }
    return this.postsService.findByUser(user.id);
  }
}
```

### Security Best Practices

1. **HTTPS Only**: Enforce HTTPS for all API endpoints
2. **CORS Configuration**: Restrict to trusted domains
3. **Rate Limiting**: Implement per-client rate limits
4. **Input Validation**: Validate all input data
5. **Audit Logging**: Log authentication/authorization events
6. **Token Security**:
   - Store tokens securely (HttpOnly cookies)
   - Implement token revocation
   - Use refresh token rotation
