import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateStatusDto {
  @ApiProperty({ example: 'In progress', description: 'Status name' })
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({
    example: 'Lorem ipsum dolor ...',
    description: 'Status description',
  })
  @IsString()
  @IsOptional()
  readonly description: string;
}
