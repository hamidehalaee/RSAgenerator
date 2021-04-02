import { Controller, Get } from '@nestjs/common';
import { RSAService } from './rsa.service';

@Controller()
export class RSAController {
  constructor(private readonly rsaService: RSAService) {}

  
  getId(): number {
    return this.rsaService.getId();
  }
}
