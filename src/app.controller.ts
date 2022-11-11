import { Controller, Get, Query } from "@nestjs/common";
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query() { branch }): string {
    console.log(branch);
    return this.appService.getHello(branch);
  }
  @Get()
  getHello2(): string {
    return "suka";
  }
}
