import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //habilitamos swager
  const config = new DocumentBuilder()
    .setTitle('CRUD Productos')
    .setDescription('Api de productos')
    .setVersion('1.0')
    .addTag('producto')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory); 
  
  //habilta la habilitacion de la validacion
  app.useGlobalPipes(new ValidationPipe({
    // disableErrorMessages: true
    whitelist: true,
    forbidNonWhitelisted: true
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
