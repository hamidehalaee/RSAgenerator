import { Injectable } from '@nestjs/common';
import { amqp } from 'amqplib/callback_api';

@Injectable()
export class MessageService {

   send(): void {
    //connect tp rabbitMQ server
    amqp.connect(process.env.HOST, function(error0, connection) {
        if (error0) {
            throw error0;
          }

          connection.createChannel(function(error1, channel) {
            if (error1) {
              throw error1;
            }

            var queue = 'hello';
            var msg = 'Hello world';
        
            channel.assertQueue(queue, {
              durable: false
            });

            channel.sendToQueue(queue, Buffer.from(msg));
            console.log(" [x] Sent %s", msg);
          });
           setTimeout(function() {
            connection.close();
            process.exit(0);
        }, 500);
    });

  }

  receive(): any{
    amqp.connect(process.env.HOST, function(error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function(error1, channel) {
            if (error1) {
                throw error1;
            }
    
            var queue = 'hello';
    
            channel.assertQueue(queue, {
                durable: false
            });
    
            console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
    
            channel.consume(queue, function(msg) {
                console.log(" [x] Received %s", msg.content.toString());
            }, {
                noAck: true
            });
        });
    });
  }
}