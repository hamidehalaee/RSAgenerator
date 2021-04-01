import { Controller } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Controller()
export class DatabaseController{
    constructor(private readonly databaseService: DatabaseService ) {}

    databaseConnection(){
        return this.databaseService.databaseConnection();
    }

    databaseValueInser() {
        return this.databaseService.databaseValueInser();
    }
}