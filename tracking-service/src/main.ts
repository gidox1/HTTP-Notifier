import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from 'src/app.module';

async function bootstrap() {
  const port = process.env.PORT ? Number(process.env.PORT) : 3010;
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.REDIS,
    options: {
      host: '127.0.0.1',
      port: 6380,
    },
  });
  await app.listen(() => console.log('Microservice listening on port:', port));
}
bootstrap();