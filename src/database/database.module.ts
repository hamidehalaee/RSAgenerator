import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseController } from './database.controller';
import { DatabaseService } from './database.service';

@Module({
    imports:[ConfigModule.forRoot()],
    exports:[DatabaseService],
    providers:[DatabaseService],
    controllers:[DatabaseController]
})

export class DatabaseModule{}

