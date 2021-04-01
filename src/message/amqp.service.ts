import { Injectable } from '@nestjs/common';
import { amqp } from 'amqplib/callback_api';

@Injectable()
export class amqpService {

  send(): void {
    //connect tp rabbitMQ server
    amqp.connect(process.env.HOST, function(error0, connection) {

    });

  }
}