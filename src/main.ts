import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json } from "body-parser";
import * as bodyParser from 'body-parser'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {bodyParser: false});

  await app.listen(54444);
}
bootstrap();
