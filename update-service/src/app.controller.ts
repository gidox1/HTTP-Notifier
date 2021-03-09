import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

const updateDummyData: statusData = {
  waybillNumber: 'FOO-BAR-0011',
  statusId: 4,
  code: 'out for delivery',
  status: 'out_for_delivery'
}

type reqType = {
  topic: string,
  data: reqBody
}

type reqBody = {
  waybillNumber: string,
  statusId: number
}

interface resDataType {
  topic: string,
  data: statusData
}

type statusData = {
  waybillNumber: string,
  statusId: number,
  code: string,
  status: string
}

@Controller()
export class AppController {
  private logger: Logger;
  constructor() {
    this.logger = new Logger('Track.Controller')
  }

  @MessagePattern({ cmd: 'update' })
  updateOrderStatus(data ?: reqType): resDataType {
    this.logger.log(`[ACKNOWLEDGEMENT] - Got message from ${data.topic}`);

    return {
      topic: 'track',
      data: updateDummyData
    };
  }
}