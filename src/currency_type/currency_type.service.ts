import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCurrencyTypeDto } from './dto/create-currency_type.dto';
import { UpdateCurrencyTypeDto } from './dto/update-currency_type.dto';
import { CurrencyType } from './entity/currency_type.entity';

@Injectable()
export class CurrencyTypeService {
  constructor(
    @InjectModel(CurrencyType)
    private CurrencyTypeRepository: typeof CurrencyType,
  ) {}

  // Create CurrencyType Service
  async create(createBody: CreateCurrencyTypeDto) {
    try {
      return await this.CurrencyTypeRepository.create(createBody);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  // Get all CurrencyType Service
  async getAll() {
    try {
      return await this.CurrencyTypeRepository.findAll({
        include: { all: true },
      });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  // Get one CurrencyType by Id Service
  async getOne(id: number) {
    try {
      return await this.CurrencyTypeRepository.findOne({
        where: { id },
        include: { all: true },
      });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  // Update CurrencyType Service
  async update(id: number, updateBody: UpdateCurrencyTypeDto) {
    try {
      return this.CurrencyTypeRepository.update(updateBody, {
        where: { id },
        returning: true,
      });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  // Delete CurrencyType Service
  async delete(id: number) {
    try {
      return await this.CurrencyTypeRepository.destroy({ where: { id } });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
