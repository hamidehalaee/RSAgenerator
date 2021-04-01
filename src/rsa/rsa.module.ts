import { Module } from '@nestjs/common';
import { RSAController } from './rsa.controller';
import {RSAService} from './rsa.service';

@Module({
    imports:[],
    exports:[RSAService],
    providers:[RSAService],
    controllers:[RSAController],
})

export class RSAModule{}