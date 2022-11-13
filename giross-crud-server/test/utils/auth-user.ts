import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../src/app.module';
import { INestApplication } from '@nestjs/common';
import { SeedsService } from '../../src/seeds/seeds.service';
import { ConfigService } from '@nestjs/config';

export async function authAdmin() {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();

  const app: INestApplication = moduleFixture.createNestApplication();
  await app.init();
  await app.get<SeedsService>(SeedsService).start();
  const configService = app.get(ConfigService) as ConfigService<any>;

  const token = await request(app.getHttpServer())
    .post('/auth')
    .send({
      email: configService.get('USER_ADMIN_EMAIL'),
      password: configService.get('USER_ADMIN_PASS'),
    })
    .then((response) => {
      return response.body.access_token;
    });

  return { token };
}
