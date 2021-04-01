import { Injectable } from '@nestjs/common';
import { generateKeyPair } from 'crypto';

@Injectable()
export class RSAService {

  
  getId(id): void {
    return (
      generateKeyPair('rsa', {modulusLength: 4096,
      publicKeyEncoding: {type: 'spki',format: 'pem'},
      privateKeyEncoding: {type: 'pkcs8',format: 'pem',cipher: 'aes-256-cbc',passphrase: 'top secret'}
      },
      (err, publicKey, privateKey) => {
        publicKey;
        privateKey;
        if(err) console.log(err);
      })
  )}
}
