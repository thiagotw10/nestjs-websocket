import { NestFactory } from '@nestjs/core';
import { AppModule } from './api/app.module';
import { WebSocketModule } from './websocket/websocket.module';

async function bootstrapApi() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

async function bootstrapWebSocket() {
  const app = await NestFactory.create(WebSocketModule);
  await app.listen(3001);
}

bootstrapApi();
bootstrapWebSocket();
