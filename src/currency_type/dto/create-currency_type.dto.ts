import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCurrencyTypeDto {
  @ApiProperty({ example: 'Credit cart', description: 'CurrencyType name' })
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({
    example: 'Lorem ipsum dolor set ...',
    description: 'CurrencyType description',
  })
  @IsString()
  @IsOptional()
  readonly description: string;
}
