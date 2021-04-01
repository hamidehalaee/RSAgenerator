import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { amqpService } from './amqp.service';
import { amqpController } from './amqp.controller';
@Module({
    imports:[ConfigModule.forRoot(),
        RabbitMQModule.forRoot(RabbitMQModule, {
        exchanges: [
          {
            name: 'exchange1',
            type: 'topic',
          },
        ],
        uri: process.env.URI,
        connectionInitOptions: { wait: false },
      })],
    providers:[amqpService],
    controllers:[amqpController],
})
export class MessageModule{}