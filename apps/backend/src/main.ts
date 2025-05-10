import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { useContainer } from "class-validator";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: "*", // Allows all origins
    methods: "*", // Allows all HTTP methods
    allowedHeaders: "*", // Allows all headers
  });

  // Add validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  );

  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  await app.listen(4000);
}
bootstrap();
