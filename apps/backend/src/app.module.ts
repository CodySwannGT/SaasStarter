import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { AuthModule } from "./auth/auth.module";
import { configuration } from "./config/configuration";

@Module({
  imports: [
    // Config module for environment variables
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    // GraphQL configuration
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        autoSchemaFile: join(process.cwd(), "src/schema.gql"),
        sortSchema: true,
        playground: configService.get("NODE_ENV") !== "production",
        debug: configService.get("NODE_ENV") !== "production",
        context: ({ req }) => ({ req }),
      }),
    }),
    // Feature modules
    AuthModule,
  ],
})
export class AppModule {}
