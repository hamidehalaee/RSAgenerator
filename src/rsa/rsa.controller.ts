import { Controller, Get } from '@nestjs/common';
import { RSAService } from './rsa.service';

@Controller()
export class RSAController {
  constructor(private readonly appService: RSAService) {}

  @Get('/:id')
  getHello(): string {
    return this.appService.getHello();
  }
}
