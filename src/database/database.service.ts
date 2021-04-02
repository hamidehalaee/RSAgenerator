import { Client } from 'pg';
import { Injectable } from '@nestjs/common';


@Injectable()
export class DatabaseService{

  async databaseConnection(){
     //name of database is rsa 
     const client = new Client({
          user: process.env.USER,
          host: process.env.HOST,
          database: process.env.DATABASE,
          password: process.env.PASSWORD,
          port: process.env.PORT,
     });
     await client.connect();
     await client.end();
  }

   databaseValueInser(){
     const client = new Client();
     const query = {
          text: 'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *',
          value: ['brianc', 'brian.m.carlson@gmail.com'],
       }
     client
          .query(query)
          .then(res => {console.log(res.rows[0])
          }).catch(e => console.error(e.stack))
          // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
      }  
}
