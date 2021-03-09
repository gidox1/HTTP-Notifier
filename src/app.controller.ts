import { Controller, Post, Inject, Param, Body } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('/publish')
export class Publisher {
  private topic:string;
  constructor(@Inject('CLIENT_SERVICE') private client: ClientProxy) {}

  /**
   * Topic for publishing package tracking data
   * @param data 
   */
  @Post('track')
  publishTrackingData(@Body() data: object) {
    this.topic = 'track'
    return this.client.send({ cmd: this.topic }, data);
  }

  /**
   * Topic for publishing status update data
   * @param data 
  */
  @Post('status-update')
  publishSTatusUpdate(@Body() data: object) {
    this.topic = 'update'
    return this.client.send({ cmd: this.topic}, data);
  }
}