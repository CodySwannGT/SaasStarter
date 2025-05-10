# Performance Recommendations for NestJS Serverless Backend

This document outlines best practices and recommendations for optimizing performance in our NestJS serverless backend.

## Table of Contents

1. [Database Query Optimization](#database-query-optimization)
2. [AWS Lambda Cold Start Mitigation](#aws-lambda-cold-start-mitigation)
3. [Connection Pooling Best Practices](#connection-pooling-best-practices)
4. [Caching Strategies](#caching-strategies)
5. [Memory Usage Optimization](#memory-usage-optimization)
6. [Request/Response Payload Optimization](#requestresponse-payload-optimization)
7. [GraphQL Resolver Optimization](#graphql-resolver-optimization)
8. [Batch Processing Guidelines](#batch-processing-guidelines)
9. [Monitoring and Profiling](#monitoring-and-profiling)

## Database Query Optimization

### Use DataLoader for N+1 Query Prevention

Always use DataLoader to batch and cache database queries, especially for nested GraphQL resolvers.

```typescript
// UserService
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  createUserLoader(): DataLoader<string, User> {
    return new DataLoader<string, User>(async (ids: string[]) => {
      const users = await this.userRepository.findByIds(ids);
      const userMap = new Map(users.map(user => [user.id, user]));
      return ids.map(id => userMap.get(id));
    });
  }
}
```

### Use Proper Indexing

Ensure your database tables have appropriate indexes for common query patterns.

```typescript
@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Index() // Add index for frequently queried fields
  @Column()
  email: string;

  @Column()
  name: string;
}
```

### Select Only Required Fields

Only retrieve the fields you need from the database.

```typescript
// Bad
const users = await this.userRepository.find();

// Good
const users = await this.userRepository.find({
  select: ["id", "name", "email"],
  where: {
    /* conditions */
  },
});
```

### Use Pagination

Always paginate results when returning lists.

```typescript
async findAll(page = 1, limit = 10): Promise<[User[], number]> {
  return this.userRepository.findAndCount({
    take: limit,
    skip: (page - 1) * limit,
    order: { createdAt: 'DESC' },
  });
}
```

## AWS Lambda Cold Start Mitigation

### Optimize Imports

Only import what's needed and be cautious with heavy dependencies.

```typescript
// Bad
import * as lodash from "lodash";

// Good
import { pick, omit } from "lodash";
```

### Use Serverless Warmup Plugin

Configure the `serverless-plugin-warmup` to keep functions warm.

```yaml
# serverless.yml
plugins:
  - serverless-plugin-warmup

custom:
  warmup:
    enabled: true
    concurrency: 5
```

### Lazy-Load Heavy Dependencies

```typescript
let heavyClient: HeavyClient;

function getHeavyClient() {
  if (!heavyClient) {
    heavyClient = new HeavyClient(config);
  }
  return heavyClient;
}
```

### Use AWS SDK v3 with Individual Clients

```typescript
// Bad
import { AWS } from "aws-sdk";

// Good
import { S3Client } from "@aws-sdk/client-s3";
```

## Connection Pooling Best Practices

### Reuse Database Connections

Configure TypeORM for connection reuse in serverless environments.

```typescript
// typeorm.config.ts
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + "/../**/*.entity{.ts,.js}"],
  migrations: [__dirname + "/../database/migrations/**/*{.ts,.js}"],
  // Connection pooling settings
  keepConnectionAlive: true,
  pool: {
    max: 5,
    min: 1,
    // How long to keep connections alive (ms)
    idleTimeoutMillis: 60000,
  },
};
```

### Use RDS Proxy

For production environments, consider using RDS Proxy to manage database connections.

## Caching Strategies

### Use Redis Cache for Frequent Queries

```typescript
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private cacheManager: Cache
  ) {}

  async findById(id: string): Promise<User> {
    const cacheKey = `user:${id}`;
    let user = await this.cacheManager.get<User>(cacheKey);

    if (!user) {
      user = await this.userRepository.findOne({ where: { id } });
      await this.cacheManager.set(cacheKey, user, { ttl: 3600 });
    }

    return user;
  }
}
```

### Use NestJS Cache Decorator

```typescript
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  @Cacheable("users")
  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
}
```

### Implement Cache Invalidation

```typescript
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private cacheManager: Cache
  ) {}

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    Object.assign(user, updateUserDto);
    const updatedUser = await this.userRepository.save(user);

    // Invalidate cache
    await this.cacheManager.del(`user:${id}`);
    await this.cacheManager.del("users");

    return updatedUser;
  }
}
```

## Memory Usage Optimization

### Use Streams for Large Files

```typescript
async uploadToS3(file: Buffer, key: string): Promise<void> {
  const s3 = new S3Client({ region: 'us-east-1' });

  const uploadParams = {
    Bucket: process.env.S3_BUCKET,
    Key: key,
    Body: file,
  };

  const command = new PutObjectCommand(uploadParams);
  await s3.send(command);
}
```

### Clean Up Temporary Files

```typescript
async processFile(filePath: string): Promise<void> {
  try {
    // Process file
    const content = await fs.readFile(filePath);
    // Do something with content
  } finally {
    // Clean up
    await fs.unlink(filePath);
  }
}
```

### Avoid Memory Leaks

- Properly dispose of event listeners
- Be careful with closures
- Use WeakMap for caching that respects garbage collection

## Request/Response Payload Optimization

### Use GraphQL Field Selection

Only return the fields that the client requested.

```typescript
@ResolveField('posts', returns => [Post])
async getPosts(
  @Parent() user: User,
  @Info() info: GraphQLResolveInfo
) {
  const fields = getFieldsFromInfo(info);
  return this.postService.findByUser(user.id, fields);
}
```

### Use Compression

```typescript
// main.ts
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(compression());
  await app.listen(3000);
}
```

### Implement Response Pagination

```typescript
@ObjectType()
class PostsResponse {
  @Field(() => [Post])
  items: Post[];

  @Field()
  totalCount: number;

  @Field()
  hasMore: boolean;
}

@Query(() => PostsResponse)
async posts(
  @Args('page') page: number,
  @Args('limit') limit: number
): Promise<PostsResponse> {
  const [items, totalCount] = await this.postService.findAndCount(page, limit);
  return {
    items,
    totalCount,
    hasMore: page * limit < totalCount,
  };
}
```

## GraphQL Resolver Optimization

### Use DataLoader for Batch Loading

See the DataLoader example in Database Query Optimization section.

### Implement Query Complexity

Use graphql-query-complexity to limit complex queries.

```typescript
// main.ts
import {
  fieldExtensionsEstimator,
  simpleEstimator,
} from "graphql-query-complexity";

const server = new ApolloServer({
  schema,
  plugins: [
    {
      requestDidStart: () => ({
        didResolveOperation({ request, document }) {
          const complexity = getComplexity({
            schema,
            operationName: request.operationName,
            query: document,
            variables: request.variables,
            estimators: [
              fieldExtensionsEstimator(),
              simpleEstimator({ defaultComplexity: 1 }),
            ],
          });

          if (complexity > 20) {
            throw new Error(
              `Query is too complex: ${complexity}. Maximum allowed complexity: 20`
            );
          }
        },
      }),
    },
  ],
});
```

### Use Field Resolvers Wisely

Don't create unnecessary field resolvers when the data is already available.

## Batch Processing Guidelines

### Process SQS Messages in Batches

```typescript
async processSQSMessages(records: SQSRecord[]): Promise<void> {
  const userIds = records.map(record => {
    const body = JSON.parse(record.body);
    return body.userId;
  });

  // Batch load all users at once
  const users = await this.userRepository.findByIds(userIds);
  const userMap = new Map(users.map(user => [user.id, user]));

  // Process each record with the preloaded data
  for (const record of records) {
    const body = JSON.parse(record.body);
    const user = userMap.get(body.userId);
    if (user) {
      await this.processUserData(user, body.data);
    }
  }
}
```

### Use Promise.all for Parallel Processing

```typescript
async processItems(items: Item[]): Promise<void> {
  const chunks = this.chunkArray(items, 10); // Process in chunks of 10

  for (const chunk of chunks) {
    await Promise.all(
      chunk.map(item => this.processItem(item))
    );
  }
}

private chunkArray<T>(array: T[], size: number): T[][] {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}
```

## Monitoring and Profiling

### Use AWS X-Ray for Tracing

```typescript
// main.ts
import * as AWSXRay from "aws-xray-sdk";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Use X-Ray in production
  if (process.env.NODE_ENV === "production") {
    AWSXRay.captureHTTPsGlobal(require("http"));
    AWSXRay.capturePromise();
    app.use(AWSXRay.express.openSegment("MyApp"));
    // Enable middleware after all other middleware
    app.use(AWSXRay.express.closeSegment());
  }

  await app.listen(3000);
}
```

### Use Custom Metrics with CloudWatch

```typescript
@Injectable()
export class MetricsService {
  private cloudwatch: CloudWatchClient;

  constructor() {
    this.cloudwatch = new CloudWatchClient({ region: "us-east-1" });
  }

  async recordMetric(name: string, value: number, unit: string): Promise<void> {
    const command = new PutMetricDataCommand({
      Namespace: "MyApp",
      MetricData: [
        {
          MetricName: name,
          Value: value,
          Unit: unit,
          Dimensions: [
            {
              Name: "Environment",
              Value: process.env.STAGE || "dev",
            },
          ],
        },
      ],
    });

    await this.cloudwatch.send(command);
  }
}
```

### Set Up Alarms for Key Metrics

Configure CloudWatch alarms for:

- Error rates
- Latency
- Database connection issues
- Lambda throttling and errors

### Use Sentry for Error Tracking

```typescript
// main.ts
import * as Sentry from "@sentry/node";

async function bootstrap() {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    environment: process.env.STAGE || "dev",
  });

  const app = await NestFactory.create(AppModule);
  app.use(Sentry.Handlers.requestHandler());
  app.useGlobalFilters(new SentryExceptionFilter());

  await app.listen(3000);
}
```

### Create a Performance Testing Suite

Develop a dedicated performance testing suite using tools like:

- Serverless Artillery
- k6
- Apache JMeter

These tests should run in a staging environment that mirrors production and be part of your CI/CD pipeline.
