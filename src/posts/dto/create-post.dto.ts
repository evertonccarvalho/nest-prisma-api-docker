import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({ description: 'Título do post' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ description: 'Conteúdo do post' })
  @IsString()
  @IsOptional()
  content?: string;

  @ApiProperty({ description: 'Email do Autor do post' })
  @IsEmail()
  @IsNotEmpty()
  authorEmail: string;
}
