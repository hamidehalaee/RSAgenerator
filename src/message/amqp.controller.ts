import { Controller } from '@nestjs/common';
import { amqpService } from './amqp.service';

@Controller()
export class amqpController {
  constructor(private readonly appService: amqpService) {}

  send(): any {
    return this.amqpService.send();
  }

  receive(): any{
      return this.amqpServer.receive();
  }
}