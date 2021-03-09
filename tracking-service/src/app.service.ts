import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  trackPackage(data): object {
    return {message: data};
  }
}
