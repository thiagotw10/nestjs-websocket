// chat.gateway.ts
import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
    credentials: true,
  },
  transports: ['websocket', 'polling'],
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  private storedPayload: any;

  handleConnection(client: any) {
    console.log('Cliente conectado:', client.id);
    if (this.storedPayload) {
      client.emit('chatMessage', this.storedPayload);
    }
  }

  handleDisconnect(client: any) {
    console.log('Cliente desconectado:', client.id);
  }

  @SubscribeMessage('chatMessage')
  handleChatMessage(client: any, payload: { message: string }) {
    // Lógica para tratar a mensagem recebida
    console.log('chegou', payload);
    this.storedPayload = payload;
    this.server.emit('chatMessage', payload);
  }
}
