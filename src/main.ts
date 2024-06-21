import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 4000;
  app.setGlobalPrefix('/api')
  app.enableCors();

  app.listen(port, "0.0.0.0");
}
bootstrap();
