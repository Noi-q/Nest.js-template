import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(val) {
    return val;
  }
}
