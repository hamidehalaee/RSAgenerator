import { Controller, Get, Post } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MessageService } from './message.service';

@Controller()
export class MessageController {
  constructor(private readonly messageService: MessageService) {}
  @Get('/')
  send(): any {
    return this.messageService.send();
  }
  @Post('/')
  receive(): any{
      return this.messageService.receive();
  }
}



/**
 * @MessagePattern('notifications')
getNotifications(@Payload() data: number[], @Ctx() context: RmqContext) {
  console.log(`Pattern: ${context.getPattern()}`);
}
 */