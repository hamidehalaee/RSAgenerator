import { Injectable } from '@nestjs/common';
import { generateKeyPair } from 'crypto';

@Injectable()
export class RSAService {

 
  getId(): any {
    return (
      generateKeyPair('rsa', {modulusLength: 4096,
      publicKeyEncoding: {type: 'spki',format: 'pem'},
      privateKeyEncoding: {type: 'pkcs8',format: 'pem',cipher: 'aes-256-cbc',passphrase: 'top secret'}
      },
      (err, publicKey, privateKey) => {
        console.log(publicKey);
        console.log(privateKey);
        if(err) console.log(err);
      })
  )}
}
