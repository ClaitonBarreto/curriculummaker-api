import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/user')
  getUsers(): Object {
    return {
      name: 'A'
    }
  }

  @Get('/user/:userId')
  getUser(@Param('userId') userId:string): Object {
    return {
      userId,
      name: `Claiton-${userId}`
    }
  }
}
