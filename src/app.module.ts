import { Module } from '@nestjs/common';
import { MessageModule } from './message/amqp.module';
import { AppController } from './rsa/app.controller';
import { AppService } from './rsa/app.service';

@Module({
  imports: [MessageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
