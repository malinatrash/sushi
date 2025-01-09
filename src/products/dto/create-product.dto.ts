import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'Филадельфия' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 599.99 })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  price: number;

  @ApiProperty({ example: 'Лосось, сыр, огурец' })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ example: 'https://example.com/sushi.jpg' })
  @IsNotEmpty()
  @IsString()
  imageUrl: string;

  @ApiProperty({ example: 250 })
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  weight: number;
}
