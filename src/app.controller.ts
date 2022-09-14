import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly config:ConfigService
  ) {}

  @Get()
  getHello() {
    console.log(process)
    return this.appService.getHello(this.config.get('location'));
  }
}
