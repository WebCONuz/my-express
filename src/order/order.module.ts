import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CurrencyType } from '../currency_type/entity/currency_type.entity';
import { Order } from './entity/order.entity';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

@Module({
  imports: [SequelizeModule.forFeature([Order, CurrencyType])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
