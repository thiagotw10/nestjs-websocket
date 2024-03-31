import { Module } from '@nestjs/common';
import { ChatGateway } from './app.gateway';

@Module({
  providers: [ChatGateway],
})
export class WebSocketModule {}
