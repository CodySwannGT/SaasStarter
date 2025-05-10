import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const command = process.argv[2];

  console.log("command", command, app);

  // switch (command) {
  //   case "delete-openai-files":
  //     const assistantServiceStart = app.get(AssistantService);
  //     await assistantServiceStart.deleteAllFiles();
  //     break;
  // }
}

bootstrap();
