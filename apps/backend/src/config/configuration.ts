export const configuration = () => ({
  NODE_ENV: process.env.NODE_ENV || "development",
  port: parseInt(process.env.PORT || "4000", 10),

  database: {
    host: process.env.DATABASE_HOST || "localhost",
    port: parseInt(process.env.DATABASE_PORT || "5432", 10),
    username: process.env.DATABASE_USERNAME || "postgres",
    password: process.env.DATABASE_PASSWORD || "password",
    database: process.env.DATABASE_NAME || "main",
  },

  redis: {
    host: process.env.REDIS_HOST || "localhost",
    port: parseInt(process.env.REDIS_PORT || "6379", 10),
  },

  auth: {
    cognitoUserPoolId: process.env.COGNITO_USER_POOL_ID,
    cognitoAppClientId: process.env.COGNITO_APP_CLIENT_ID,
    jwtSecret: process.env.JWT_SECRET || "your-secret-key-for-development",
  },
});
