import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('USER CRUD OPERATIONS')
    .setDescription('USER apis')
    .setVersion('1.0')
    .addTag('Users')
    .build();

    const document=SwaggerModule.createDocument(app,config)  
    SwaggerModule.setup('api-docs', app, document);  //need to hit /api-docs to access swagger
    app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
