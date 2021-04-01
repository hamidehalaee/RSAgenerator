//import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
    imports:[ConfigModule.forRoot(),
      ClientsModule.register([
        {
          name: 'RSA_SRVICE',
          transport: Transport.RMQ,
          options:{
            urls: [process.env.URLL],
            queue: 'RSA_queue',
            queueOptions:{
              durable: false
            },  
          },
        },
      ]),
    ],
    providers:[MessageService],
    exports: [MessageService],
    controllers:[MessageController],
})
export class MessageModule{}

// RabbitMQModule.forRoot(RabbitMQModule, {
//   exchanges: [
//     {
//       name: 'exchange1',
//       type: 'topic',
//     },
//   ],
//   uri: process.env.URI,
//   connectionInitOptions: { wait: false },
// })