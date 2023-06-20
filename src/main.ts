import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true, // pour filtrer les éléments qui ne sont pas dans la classe de départ
    forbidNonWhitelisted: true, // pour indiquer qu'un élément ne fait pas partie d'une classe et provoque une erreur avec un message
  }));
  await app.listen(3000);
}
bootstrap();
