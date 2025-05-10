/* eslint-disable @typescript-eslint/no-explicit-any -- this is a lib file */
import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { configure as serverlessExpress } from "@vendia/serverless-express";
import { useContainer } from "class-validator";
import { AppModule } from "./app.module";

let cachedServer: any;

export const handler = async (event: any, context: any) => {
  if (!cachedServer) {
    const nestApp = await NestFactory.create(AppModule, {
      cors: {
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        preflightContinue: false,
        optionsSuccessStatus: 204,
      },
    });

    // Add validation pipe
    nestApp.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      })
    );

    useContainer(nestApp.select(AppModule), { fallbackOnErrors: true });

    await nestApp.init();
    const app = nestApp.getHttpAdapter().getInstance();
    cachedServer = serverlessExpress({
      app,
    });
  }

  return cachedServer(event, context);
};

/* eslint-enable @typescript-eslint/no-explicit-any  -- this is a lib file */
