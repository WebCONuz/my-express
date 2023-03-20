import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface CurrencyTypeCreationAttr {
  name: string;
}

@Table({ tableName: 'currency_type' })
export class CurrencyType extends Model<
  CurrencyType,
  CurrencyTypeCreationAttr
> {
  @ApiProperty({ example: '1', description: 'Unikal ID' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Credit cart', description: 'CurrencyType name' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({
    example: 'Lorem ipsum dolor set ...',
    description: 'CurrencyType description',
  })
  @Column({
    type: DataType.STRING,
  })
  description: string;
}
