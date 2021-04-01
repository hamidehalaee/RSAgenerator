import { Module } from '@nestjs/common';
import {RSAService} from './rsa.service';

@Module({
    imports:[RSAService],
})

export class RSAModule{}