import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { MessageModule } from './message/message.module';
import { RSAModule } from './rsa/rsa.module';



@Module({
  imports: [MessageModule,RSAModule,DatabaseModule,AuthModule],
})
export class AppModule {}
