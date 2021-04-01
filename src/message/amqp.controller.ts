import { Controller, Get } from '@nestjs/common';
import { amqpService } from './amqp.service';

@Controller()
export class amqpController {
  constructor(private readonly appService: amqpService) {}

  @Get('/:id')
  send(): any {
    return this.amqpService.send();
  }
}