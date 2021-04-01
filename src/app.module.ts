import { Module } from '@nestjs/common';
import { MessageModule } from './message/amqp.module';
import { RSAModule } from './rsa/rsa.module';



@Module({
  imports: [MessageModule,RSAModule],
})
export class AppModule {}
