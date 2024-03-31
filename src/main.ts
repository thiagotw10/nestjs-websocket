import { NestFactory } from '@nestjs/core';
import { AppModule } from './api/app.module';
import { WebSocketModule } from './websocket/websocket.module';

async function bootstrapApi() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(3000);
}

async function bootstrapWebSocket() {
  const app = await NestFactory.create(WebSocketModule, { cors: true });
  await app.listen(3001);
}

bootstrapApi();
bootstrapWebSocket();
