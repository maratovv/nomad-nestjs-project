import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('calc')
  calcAvg() {
    return this.appService.calcAvg()
  }
}
