import { NestFactory } from '@nestjs/core';
import { AppModule } from './api/app.module';
import { WebSocketModule } from './websocket/websocket.module';

async function bootstrapApi() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(3000);
}

async function bootstrapWebSocket() {
  const app = await NestFactory.create(WebSocketModule);
  app.enableCors({
    origin: '*', // Allow requests from all origins,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
  });
  await app.listen(3001);
}

bootstrapApi();
bootstrapWebSocket();
