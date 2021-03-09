import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { Publisher } from './app.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [Publisher],
  providers: [
    {
      provide: 'CLIENT_SERVICE',
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        ClientProxyFactory.create({
          transport: Transport.REDIS,
          options: {
            host: '127.0.0.1',
            port: 6380,
          },
        }),
    },
  ],
})  
export class AppModule {}