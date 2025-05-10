# Database Access Patterns

This document outlines the database access patterns to be used in our NestJS backend application, covering ORM usage, query optimization, transaction management, and migration strategy.

## Table of Contents

1. [ORM Usage Guidelines](#orm-usage-guidelines)
2. [Query Optimization Principles](#query-optimization-principles)
3. [Transaction Management](#transaction-management)
4. [Migration Strategy](#migration-strategy)
5. [Entity Design](#entity-design)
6. [Repository Pattern](#repository-pattern)
7. [Database Schema Design](#database-schema-design)

## ORM Usage Guidelines

We use TypeORM as our primary data access layer for PostgreSQL.

### Entity Definition

- Use TypeORM decorators to define entities
- Follow proper column typing
- Set up appropriate relations
- Use UUIDs for primary keys when possible
- Include audit columns (createdAt, updatedAt)

```typescript
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
  Index,
} from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 100 })
  name: string;

  @Column({ unique: true })
  @Index()
  email: string;

  @Column({ select: false }) // Sensitive data not selected by default
  password: string;

  @Column({
    type: "enum",
    enum: UserStatus,
    default: UserStatus.ACTIVE,
  })
  status: UserStatus;

  @OneToMany(() => Post, post => post.author)
  posts: Post[];

  @ManyToOne(() => Organization, organization => organization.users)
  @JoinColumn({ name: "organization_id" })
  organization: Organization;

  @Column({ nullable: true })
  organizationId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
```

### Relation Configuration

- Define bidirectional relations with proper cascade options
- Be careful with circular relations
- Use eager loading only when absolutely necessary
- Prefer explicit loading for most relations

```typescript
// Post entity with relations
@Entity("posts")
export class Post {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column("text")
  content: string;

  @ManyToOne(() => User, user => user.posts, {
    onDelete: "CASCADE", // If user is deleted, delete their posts
  })
  @JoinColumn({ name: "author_id" })
  author: User;

  @Column()
  authorId: string;

  @OneToMany(() => Comment, comment => comment.post, {
    cascade: true, // Auto-save comments when saving post
  })
  comments: Comment[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
```

### Repository Usage

- Use TypeORM repositories for data access
- Create custom repository classes for complex queries
- Avoid direct entity manager usage in services
- Keep repository methods focused on single responsibilities

```typescript
@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findByEmailWithProfile(email: string): Promise<User | null> {
    return this.createQueryBuilder("user")
      .leftJoinAndSelect("user.profile", "profile")
      .where("user.email = :email", { email })
      .getOne();
  }

  async findActiveWithinOrganization(
    organizationId: string,
    options: { skip?: number; take?: number } = {}
  ): Promise<[User[], number]> {
    const query = this.createQueryBuilder("user")
      .where("user.organizationId = :organizationId", { organizationId })
      .andWhere("user.status = :status", { status: UserStatus.ACTIVE });

    if (options.skip !== undefined) {
      query.skip(options.skip);
    }

    if (options.take !== undefined) {
      query.take(options.take);
    }

    return query.getManyAndCount();
  }
}
```

## Query Optimization Principles

### Indexing Strategy

- Add indexes for all foreign keys
- Add indexes for frequently queried columns
- Add composite indexes for columns queried together
- Use unique indexes for uniqueness constraints
- Review index usage periodically

```typescript
@Entity("orders")
export class Order {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  @Index() // Indexed for frequent queries
  customerId: string;

  @Column()
  @Index() // Indexed for frequent queries
  status: string;

  @Column("timestamp")
  @Index() // Indexed for sorting and filtering
  orderDate: Date;

  // Composite index for queries that filter by both status and date
  @Index(["status", "orderDate"])
  statusAndDate: string;
}
```

### Query Builder Usage

- Use query builder for complex queries
- Apply proper WHERE clauses early
- Select only required columns
- Use pagination for large result sets
- Add proper ordering

```typescript
async findUserOrders(
  userId: string,
  status?: OrderStatus,
  pagination?: { page: number; limit: number },
): Promise<[Order[], number]> {
  const query = this.createQueryBuilder('order')
    .innerJoin('order.customer', 'customer')
    .where('customer.id = :userId', { userId });

  if (status) {
    query.andWhere('order.status = :status', { status });
  }

  query.orderBy('order.orderDate', 'DESC');

  if (pagination) {
    const { page, limit } = pagination;
    query
      .skip((page - 1) * limit)
      .take(limit);
  }

  return query.getManyAndCount();
}
```

### N+1 Query Prevention

- Use JOIN operations for related data
- Implement DataLoader pattern for GraphQL resolvers
- Use QueryBuilder's leftJoinAndSelect/innerJoinAndSelect
- Avoid lazy loading in loops

```typescript
// BAD: N+1
async function getPostsWithAuthors() {
  const posts = await postRepository.find();

  // This causes N additional queries!
  for (const post of posts) {
    post.author = await userRepository.findOne(post.authorId);
  }

  return posts;
}

// GOOD: Single query with JOIN
async function getPostsWithAuthors() {
  return postRepository.find({
    relations: ["author"],
  });
}

// BETTER: With query builder and selective columns
async function getPostsWithAuthors() {
  return postRepository
    .createQueryBuilder("post")
    .innerJoinAndSelect("post.author", "author")
    .select([
      "post.id",
      "post.title",
      "post.createdAt",
      "author.id",
      "author.name",
    ])
    .getMany();
}
```

### Performance Monitoring

- Log slow queries
- Use query execution plan analysis for complex queries
- Monitor database metrics (connection pool, query times)
- Set up alerts for performance degradation

## Transaction Management

### Transaction Boundaries

- Use transactions for operations that need atomicity
- Keep transaction boundaries close to business operations
- Be mindful of transaction isolation levels
- Handle transaction errors properly

```typescript
@Injectable()
export class OrderService {
  constructor(
    private readonly connection: Connection,
    private readonly orderRepository: OrderRepository,
    private readonly inventoryRepository: InventoryRepository
  ) {}

  async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
    // Start a transaction
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      // Get repositories from transaction
      const orderRepo = queryRunner.manager.getRepository(Order);
      const inventoryRepo = queryRunner.manager.getRepository(Inventory);

      // Create order
      const order = orderRepo.create({
        customerId: createOrderDto.customerId,
        items: createOrderDto.items.map(item => ({
          productId: item.productId,
          quantity: item.quantity,
          price: item.price,
        })),
        status: OrderStatus.CREATED,
      });

      await orderRepo.save(order);

      // Update inventory for each item
      for (const item of createOrderDto.items) {
        const inventory = await inventoryRepo.findOne({
          where: { productId: item.productId },
        });

        if (!inventory || inventory.stock < item.quantity) {
          // Roll back if insufficient stock
          throw new Error(`Insufficient stock for product ${item.productId}`);
        }

        inventory.stock -= item.quantity;
        await inventoryRepo.save(inventory);
      }

      // Commit transaction
      await queryRunner.commitTransaction();
      return order;
    } catch (err) {
      // Rollback transaction on error
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      // Release query runner
      await queryRunner.release();
    }
  }
}
```

### Transaction Decorators

For simpler cases, use the `@Transaction` and `@TransactionManager` decorators:

```typescript
@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly profileRepository: ProfileRepository
  ) {}

  @Transaction()
  async createUserWithProfile(
    createUserDto: CreateUserDto,
    @TransactionManager() manager?: EntityManager
  ): Promise<User> {
    // Create user
    const userRepo = manager.getRepository(User);
    const user = userRepo.create({
      name: createUserDto.name,
      email: createUserDto.email,
      password: await this.hashPassword(createUserDto.password),
    });
    await userRepo.save(user);

    // Create profile
    const profileRepo = manager.getRepository(Profile);
    const profile = profileRepo.create({
      userId: user.id,
      bio: createUserDto.bio,
    });
    await profileRepo.save(profile);

    return user;
  }
}
```

## Migration Strategy

### Migration Generation

- Generate migrations for all schema changes
- Name migrations descriptively
- Review generated migrations before committing
- Include migration rollback logic

```bash
# Generate new migration
yarn migration:generate ./src/database/migrations/AddUserProfile
```

```typescript
// Sample migration
import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class AddUserProfile1623456789012 implements MigrationInterface {
  name = "AddUserProfile1623456789012";

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Create profiles table
    await queryRunner.createTable(
      new Table({
        name: "profiles",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            default: "uuid_generate_v4()",
          },
          {
            name: "user_id",
            type: "uuid",
            isNullable: false,
            isUnique: true,
          },
          {
            name: "bio",
            type: "text",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
        ],
      }),
      true
    );

    // Add foreign key
    await queryRunner.createForeignKey(
      "profiles",
      new TableForeignKey({
        columnNames: ["user_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Drop foreign key first
    const table = await queryRunner.getTable("profiles");
    const foreignKey = table.foreignKeys.find(
      fk => fk.columnNames.indexOf("user_id") !== -1
    );
    await queryRunner.dropForeignKey("profiles", foreignKey);

    // Drop table
    await queryRunner.dropTable("profiles");
  }
}
```

### Migration Testing

- Test migrations in development environment before production
- Create test data to verify migrations maintain data integrity
- Test rollback procedures
- Test migration performance with realistic data volumes

### Deployment Process

- Apply migrations as part of CI/CD pipeline
- Run migrations before deploying new application code
- Have rollback plan for failed migrations
- Use feature flags to decouple schema changes from code changes when needed

```yaml
# CI/CD pipeline stage for migrations
migration:
  stage: deploy
  script:
    - yarn migration:run
  environment:
    name: $CI_ENVIRONMENT_NAME
  only:
    - main
    - staging
    - production
```

## Entity Design

### Entity Inheritance

Use TypeORM inheritance patterns when appropriate:

```typescript
// Single table inheritance
@Entity("notifications")
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Notification {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  userId: string;

  @Column()
  read: boolean;

  @CreateDateColumn()
  createdAt: Date;
}

@ChildEntity("email")
export class EmailNotification extends Notification {
  @Column()
  emailAddress: string;

  @Column()
  subject: string;

  @Column("text")
  body: string;
}

@ChildEntity("sms")
export class SmsNotification extends Notification {
  @Column()
  phoneNumber: string;

  @Column("text")
  message: string;
}
```

### Soft Deletes

Implement soft deletes for entities that should maintain history:

```typescript
@Entity("documents")
export class Document {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column("text")
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: true })
  deletedAt: Date;

  @Column({ default: false })
  isDeleted: boolean;
}

// In repository
@EntityRepository(Document)
export class DocumentRepository extends Repository<Document> {
  async softDelete(id: string): Promise<void> {
    await this.update(id, {
      deletedAt: new Date(),
      isDeleted: true,
    });
  }

  async findAll(): Promise<Document[]> {
    return this.find({
      where: {
        isDeleted: false,
      },
    });
  }
}
```

## Repository Pattern

### Custom Repository Methods

Implement custom repository methods for common queries:

```typescript
@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findByEmail(email: string): Promise<User | null> {
    return this.findOne({ where: { email } });
  }

  async findWithRoles(id: string): Promise<User | null> {
    return this.createQueryBuilder("user")
      .leftJoinAndSelect("user.roles", "role")
      .where("user.id = :id", { id })
      .getOne();
  }

  async searchUsers(
    query: string,
    options?: PaginationOptions
  ): Promise<[User[], number]> {
    const queryBuilder = this.createQueryBuilder("user").where(
      "user.name ILIKE :query OR user.email ILIKE :query",
      {
        query: `%${query}%`,
      }
    );

    if (options?.skip) {
      queryBuilder.skip(options.skip);
    }

    if (options?.take) {
      queryBuilder.take(options.take);
    }

    return queryBuilder.getManyAndCount();
  }
}
```

### Repository Injection

Inject repositories into services using TypeORM's decorator:

```typescript
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: UserRepository
  ) {}

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findByEmail(email);
  }
}
```

## Database Schema Design

### Naming Conventions

- Table names: lowercase, plural, snake_case (e.g., `user_profiles`)
- Column names: lowercase, snake_case (e.g., `first_name`)
- Foreign keys: singular entity name + `_id` (e.g., `user_id`)
- Junction tables: combine both table names (e.g., `user_roles`)
- Indexes: `idx_table_column(s)` (e.g., `idx_users_email`)
- Constraints: `pk_table` (primary), `fk_table_reference` (foreign), `uq_table_column` (unique)

### Column Types

Use appropriate column types for data:

- Text: `varchar` with length constraint where possible, `text` for unlimited
- Numbers: `int`, `smallint`, `bigint`, `decimal`, `float` as appropriate
- Booleans: `boolean`
- Dates: `timestamp with time zone`
- JSON: `jsonb` preferred over `json` for indexing and performance
- Enums: Database enums or varchar with application constraints

### Database Constraints

Implement proper constraints:

- Primary keys on all tables
- Foreign keys with appropriate ON DELETE/UPDATE actions
- Unique constraints for business uniqueness rules
- Check constraints for data validation where appropriate
- Not null constraints for required fields

### Indexing Strategy

- Index foreign key columns
- Index columns used in WHERE clauses
- Index columns used in ORDER BY
- Consider partial indexes for filtered queries
- Use composite indexes for multi-column conditions
- Consider functional indexes for transformed queries
