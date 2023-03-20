import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty({ example: '1001', description: 'Unique order ID' })
  @IsString()
  @IsNotEmpty()
  readonly order_unique_id: string;

  @ApiProperty({ example: 'John Doe', description: 'Admin full name' })
  @IsString()
  @IsNotEmpty()
  readonly full_name: string;

  @ApiProperty({ example: '+998991234567', description: 'Order phone number' })
  @IsString()
  @IsNotEmpty()
  readonly phone_number: string;

  @ApiProperty({ example: 'https://...', description: 'Order link' })
  @IsString()
  @IsNotEmpty()
  readonly product_link: string;

  @ApiProperty({ example: '50$', description: 'Order price' })
  @IsString()
  @IsNotEmpty()
  readonly price: string;

  @ApiProperty({ example: '1', description: 'Currency_type id' })
  @IsNumber()
  @IsNotEmpty()
  readonly currency_type_id: number;

  @ApiProperty({ example: 'Airvaice 5123', description: 'Order truck' })
  @IsString()
  @IsNotEmpty()
  readonly truck: string;

  @ApiProperty({
    example: 'Lorem ipsum dolor ...',
    description: 'Order description',
  })
  @IsString()
  @IsOptional()
  readonly description: string;
}
