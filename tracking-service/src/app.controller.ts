import { Controller, Logger, HttpException, HttpStatus, } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import {trackingDummyData} from './data';

 interface trackReqType {
    topic: string,
    data: trackingDetails
  }

  type trackingDetails = {
    waybillNumber: string
  }

  interface trackRespType {
    topic: string,
    data: trackingDataType
  }
  
  type destinationType = {
    address: string,
    city: string,
    state: string,
    postalCode: string,
    country: string,
  }
  
  type itemType = {
    name: string,
    qty: number
  }
  
  type packageType = {
    waybillNumber: string,
    items: itemType
  }
  
  interface trackingDataType {
    destination: destinationType,
    packages: packageType
  }


@Controller()
export class TrackingController {
  private logger: Logger;
  constructor() {
    this.logger = new Logger('Track.Controller')
  }

  @MessagePattern({ cmd: 'track' })
  trackPackage(data ?: trackReqType): trackRespType {
    this.logger.log(`[ACKNOWLEDGEMENT] - Got message from ${data.topic}`)
    return {
      topic: 'track',
      data: trackingDummyData
    };
  }
}