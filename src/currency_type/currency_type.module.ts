import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CurrencyTypeController } from './currency_type.controller';
import { CurrencyTypeService } from './currency_type.service';
import { CurrencyType } from './entity/currency_type.entity';

@Module({
  imports: [SequelizeModule.forFeature([CurrencyType])],
  controllers: [CurrencyTypeController],
  providers: [CurrencyTypeService],
})
export class CurrencyTypeModule {}
