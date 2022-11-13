import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../users/services/users.service';

@Injectable()
export class SeedsService {
  private logger = new Logger(SeedsService.name);

  constructor(
    private readonly usersService: UsersService,
    private configService: ConfigService,
  ) {}

  async start() {
    this.logger.log(`Iniciando o seed`);
    await this.addAdmin();

    this.logger.log(`Finalizando o seed, usuário administrado adicionado`);
  }

  async addAdmin() {
    const email = this.configService.get('USER_ADMIN_EMAIL');
    const superUser = await this.usersService.findByEmail(email);

    if (!superUser) {
      await this.usersService.create({
        name: 'Admin',
        email,
        password: this.configService.get('USER_ADMIN_PASS'),
      });
      this.logger.log(`Adicionado o e-mail: ${email} como super admin`);
    }
  }
}
