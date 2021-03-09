import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  intjectedService(): string {
    return 'Service injected!';
  }
}
