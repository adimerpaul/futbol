import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { join } from 'path';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));
  console.log('listen on port: http://localhost:' + (process.env.PORT ?? 3000));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
