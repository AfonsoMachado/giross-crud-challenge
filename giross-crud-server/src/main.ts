import { INestApplication, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { GlobalExceptionFilter } from './common/errors/global-exception.filter';
import { SeedsService } from './seeds/seeds.service';

function swaggerConfig(
  app: INestApplication,
  configService: ConfigService<any>,
) {
  if (configService.get('APP_EXPOSE_DOCS') === 'true') {
    const swaggerConfig = new DocumentBuilder()
      .setTitle(configService.get('APP_NAME'))
      .setDescription(configService.get('APP_DESCRIPTION'))
      .setVersion(configService.get('APP_VERSION'))
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup(configService.get('APP_DOCS_PATH'), app, document);
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new GlobalExceptionFilter());

  app.enableCors();

  const configService = app.get(ConfigService) as ConfigService<any>;
  swaggerConfig(app, configService);

  await app.get<SeedsService>(SeedsService).start();

  const port = configService.get('PORT');
  if (!port) throw new Error('A porta da aplicação não foi configurada.');

  await app.listen(port);

  console.info(`Servidor executando na porta ${port}`);
}
bootstrap();
