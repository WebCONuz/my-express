import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface StatusCreationAttr {
  name: string;
}

@Table({ tableName: 'status' })
export class Status extends Model<Status, StatusCreationAttr> {
  @ApiProperty({ example: '1', description: 'Unikal ID' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'In progress', description: 'Status name' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({
    example: 'Lorem ipsum dolor ...',
    description: 'Status description',
  })
  @Column({
    type: DataType.STRING,
  })
  description: string;
}
