# NestJS Architecture Patterns

This document outlines the architectural patterns and design principles to follow in our NestJS backend application. It covers module organization, controller design, service design, data access patterns, error handling, and request/response formatting.

## Table of Contents

1. [Module Organization](#module-organization)
2. [Controller Design](#controller-design)
3. [Service Design](#service-design)
4. [Data Access Layer](#data-access-layer)
5. [Error Handling](#error-handling)
6. [Request/Response Formatting](#requestresponse-formatting)
7. [GraphQL Specifics](#graphql-specifics)
8. [Dependency Injection](#dependency-injection)

## Module Organization

### Module Structure

- **Feature-based Organization**: Group code by feature/domain rather than by technical role
- **Module Boundaries**: Keep clear module boundaries with well-defined public APIs

```
feature-name/
├── feature-name.module.ts        # Module definition
├── feature-name.service.ts       # Business logic
├── feature-name.resolver.ts      # GraphQL resolvers (preferred API)
├── feature-name.controller.ts    # REST controllers (if needed)
├── feature-name.graphql          # GraphQL schema definitions
├── dto/                          # Data Transfer Objects
│   ├── create-entity.dto.ts      # Input DTOs
│   └── entity-response.dto.ts    # Output DTOs
├── entities/                     # Entity definitions
│   └── entity.entity.ts
└── interfaces/                   # TypeScript interfaces
    └── feature-interface.ts
```

### Module Composition

Each module should:

1. Be focused on a single feature or domain concept
2. Expose a minimal public API
3. Encapsulate its internal implementation details
4. Declare its dependencies explicitly

### Multi-Module Communication

- Prefer using dependency injection to share services between modules
- Include only the minimum necessary modules in imports
- Avoid circular dependencies between modules
- Use events for loose coupling between modules that don't directly depend on each other

```typescript
// users.module.ts
@Module({
  imports: [TypeOrmModule.forFeature([User]), AuthModule],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService], // Only export what other modules need
})
export class UsersModule {}
```

## Controller Design

### API Endpoints

- Keep controllers thin - they should only handle HTTP/request-specific concerns
- Delegate all business logic to services
- Focus on request validation, response transformation, and HTTP concerns
- Don't implement business logic in controllers

```typescript
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(":id")
  async findOne(
    @Param("id", new ParseUUIDPipe()) id: string
  ): Promise<UserResponseDto> {
    const user = await this.usersService.findOne(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return this.mapToResponseDto(user);
  }

  @Post()
  @HttpCode(201)
  async create(@Body() createUserDto: CreateUserDto): Promise<UserResponseDto> {
    const user = await this.usersService.create(createUserDto);
    return this.mapToResponseDto(user);
  }

  private mapToResponseDto(user: User): UserResponseDto {
    // Transform entity to response DTO
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
    };
  }
}
```

### Request Validation

- Use validation pipes and class-validator decorators for input validation
- Create dedicated DTO classes for request/response data
- Define clear validation rules in DTOs

```typescript
// create-user.dto.ts
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 100)
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(8)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/, {
    message:
      "Password must contain at least one uppercase letter, one lowercase letter, and one number",
  })
  password: string;
}
```

## Service Design

### Business Logic Encapsulation

- Services should contain all business logic
- Keep services focused on a single domain/feature
- Implement domain logic independent of delivery mechanism (HTTP, GraphQL, etc.)
- Use interfaces to define service contracts

```typescript
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly authService: AuthService
  ) {}

  async findOne(id: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { id } });
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    // Business logic: check if user already exists
    const existingUser = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });

    if (existingUser) {
      throw new ConflictException(
        `User with email ${createUserDto.email} already exists`
      );
    }

    // Business logic: hash password
    const hashedPassword = await this.authService.hashPassword(
      createUserDto.password
    );

    // Create and save user
    const user = this.userRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });

    return this.userRepository.save(user);
  }
}
```

### Service Responsibility Segregation

- Split large services into smaller, focused ones
- Services should follow Single Responsibility Principle
- Use composition to combine services for complex operations

```typescript
// Instead of one large UserService, split by domain responsibility
@Injectable()
export class UserAuthenticationService {
  // Auth-related methods
}

@Injectable()
export class UserProfileService {
  // Profile-related methods
}

@Injectable()
export class UserService {
  constructor(
    private readonly authService: UserAuthenticationService,
    private readonly profileService: UserProfileService
  ) {}

  // Compose operations using the specialized services
}
```

## Data Access Layer

### Repository Pattern

- Use TypeORM repositories to encapsulate data access logic
- Extend repositories only when needed for complex queries
- Keep DB-specific code isolated in repositories
- Don't expose ORM entities directly to controllers

```typescript
// user.repository.ts
@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findByEmail(email: string): Promise<User | null> {
    return this.findOne({ where: { email } });
  }

  async findActiveUsers(): Promise<User[]> {
    return this.find({
      where: { status: UserStatus.ACTIVE },
      order: { createdAt: "DESC" },
    });
  }
}
```

### Query Optimization

- Use QueryBuilder for complex queries
- Eagerly load related entities only when needed
- Always implement pagination for list endpoints
- Use proper indexing in database tables

```typescript
async findWithRelations(id: string): Promise<User | null> {
  return this.createQueryBuilder('user')
    .leftJoinAndSelect('user.profile', 'profile')
    .leftJoinAndSelect('user.roles', 'role')
    .where('user.id = :id', { id })
    .getOne();
}

async findPaginated(page = 1, limit = 10): Promise<[User[], number]> {
  return this.findAndCount({
    skip: (page - 1) * limit,
    take: limit,
    order: { createdAt: 'DESC' },
  });
}
```

## Error Handling

### Error Types

Use specific exception types for different error scenarios:

1. **HTTP Exceptions**: For REST API errors

   - `BadRequestException` - 400
   - `UnauthorizedException` - 401
   - `ForbiddenException` - 403
   - `NotFoundException` - 404
   - `ConflictException` - 409
   - `InternalServerErrorException` - 500

2. **GraphQL Errors**: For GraphQL API errors
   - Create custom GraphQL error classes
   - Implement proper error codes and extensions

### Error Filtering and Transformation

- Use exception filters to standardize error responses
- Transform database/external service errors into application-specific errors
- Never expose sensitive information in error messages

```typescript
// http-exception.filter.ts
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse();

    const errorResponse = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message:
        typeof exceptionResponse === "string"
          ? exceptionResponse
          : (exceptionResponse as any).message || "Internal server error",
    };

    response.status(status).json(errorResponse);
  }
}
```

### Centralized Error Handling

- Log all errors with proper context
- Include request IDs in errors for traceability
- Use consistent error structure across the application

```typescript
// app.module.ts
@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: GraphQLExceptionFilter,
    },
  ],
})
export class AppModule {}
```

## Request/Response Formatting

### Response Standardization

- Create consistent response structures
- Use envelope pattern for REST APIs when appropriate
- Always include appropriate HTTP status codes
- Transform entities to DTOs before returning to clients

```typescript
// response-envelope.dto.ts
export class ResponseEnvelope<T> {
  data: T;
  meta?: Record<string, any>;
  timestamp: string = new Date().toISOString();

  constructor(data: T, meta?: Record<string, any>) {
    this.data = data;
    this.meta = meta;
  }
}

// users.controller.ts
@Get()
async findAll(
  @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
): Promise<ResponseEnvelope<UserResponseDto[]>> {
  const [users, total] = await this.usersService.findAll(page, limit);

  const responseData = users.map(user => this.mapToResponseDto(user));
  const meta = {
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
  };

  return new ResponseEnvelope(responseData, meta);
}
```

### Pagination

- Implement cursor-based pagination for GraphQL
- Use page/limit pagination for REST APIs
- Always include metadata about pagination (total, pages, etc.)

```typescript
// For GraphQL (using Relay specification)
@ObjectType()
class UserConnection extends Connection(UserType) {}

@Query(() => UserConnection)
async users(
  @Args() args: ConnectionArgs
): Promise<ConnectionType<User>> {
  return this.usersService.findAllPaginated(args);
}
```

## GraphQL Specifics

### Schema Organization

- Define GraphQL schema in dedicated `.graphql` files
- Organize schema by feature/domain
- Use code-first or schema-first approach consistently

```graphql
# users.graphql
type User {
  id: ID!
  name: String!
  email: String!
  profile: Profile
  createdAt: DateTime!
  updatedAt: DateTime
}

type Query {
  user(id: ID!): User
  users(first: Int, after: String): UserConnection!
}

type Mutation {
  createUser(input: CreateUserInput!): User!
  updateUser(id: ID!, input: UpdateUserInput!): User!
  deleteUser(id: ID!): Boolean!
}

input CreateUserInput {
  name: String!
  email: String!
  password: String!
}

input UpdateUserInput {
  name: String
  email: String
}
```

### Resolver Design

- Keep resolvers focused on GraphQL-specific concerns
- Use field resolvers for related data
- Implement DataLoader for N+1 query prevention
- Use proper authorization in resolvers

```typescript
@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly usersLoader: UsersLoader
  ) {}

  @Query(() => User, { nullable: true })
  async user(@Args("id", { type: () => ID }) id: string): Promise<User | null> {
    return this.usersService.findOne(id);
  }

  @ResolveField(() => Profile, { nullable: true })
  async profile(@Parent() user: User): Promise<Profile | null> {
    return this.usersLoader.batchProfiles.load(user.id);
  }
}
```

## Dependency Injection

### Constructor Injection

- Always use constructor injection
- Make dependencies explicit
- Use interfaces for service contracts when beneficial

```typescript
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly configService: ConfigService,
    private readonly eventEmitter: EventEmitter2
  ) {}
}
```

### Circular Dependencies

- Avoid circular dependencies
- Use forwardRef() only when absolutely necessary
- Prefer event-based communication for bidirectional module interaction

```typescript
// When circular dependency can't be avoided:
@Module({
  imports: [forwardRef(() => AuthModule)],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService
  ) {}
}
```

### Provider Scopes

- Be mindful of provider scopes (default, request, transient)
- Use request scope for services that need request context
- Remember that request-scoped providers require more resources

```typescript
@Injectable({ scope: Scope.REQUEST })
export class RequestContextService {
  constructor(@Inject(REQUEST) private readonly request: Request) {}

  getUserFromRequest(): User | null {
    return this.request.user;
  }
}
```
