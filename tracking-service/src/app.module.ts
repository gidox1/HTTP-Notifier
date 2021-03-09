import { Module } from '@nestjs/common';
import { TrackingController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [TrackingController],
  providers: [AppService],
})
export class AppModule {}
