import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'É necessário informar o nome.' })
  name: string;

  @ApiProperty()
  @IsEmail({}, { message: 'É Necessário informar um e-mail válido' })
  @IsNotEmpty({ message: 'É necessário informar o e-mail.' })
  email: string;

  @ApiProperty()
  // @IsNotEmpty({ message: 'É necessário informar a senha.' })
  password: string;

  @ApiProperty()
  phone?: string;

  @ApiProperty()
  sex?: string;
}
