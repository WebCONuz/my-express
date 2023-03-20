import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { CurrencyType } from '../../currency_type/entity/currency_type.entity';

interface OrderCreationAttr {
  order_unique_id: string;
  full_name: string;
  phone_number: string;
  product_link: string;
  price: string;
  currency_type_id: number;
  truck: string;
}

@Table({ tableName: 'orders' })
export class Order extends Model<Order, OrderCreationAttr> {
  @ApiProperty({ example: '1', description: 'Unikal ID' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: '1001', description: 'Unique order ID' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  order_unique_id: string;

  @ApiProperty({ example: 'John Doe', description: 'Admin full name' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  full_name: string;

  @ApiProperty({ example: '+998991234567', description: 'Order phone number' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone_number: string;

  @ApiProperty({ example: 'https://...', description: 'Order link' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  product_link: string;

  @ApiProperty({ example: '50$', description: 'Order price' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  price: string;

  @ApiProperty({ example: '1', description: 'Currency_type id' })
  @ForeignKey(() => CurrencyType)
  @Column({
    type: DataType.INTEGER,
  })
  currency_type_id: number;

  @BelongsTo(() => CurrencyType)
  currency_type: CurrencyType;

  @ApiProperty({ example: 'Airvaice 5123', description: 'Order truck' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  truck: string;

  @ApiProperty({
    example: 'Lorem ipsum dolor ...',
    description: 'Order description',
  })
  @Column({
    type: DataType.STRING,
  })
  description: string;
}
