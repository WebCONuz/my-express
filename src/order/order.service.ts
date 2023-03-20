import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entity/order.entity';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order) private orderRepository: typeof Order) {}

  // Create Order Service
  async create(createBody: CreateOrderDto) {
    try {
      return await this.orderRepository.create(createBody);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  // Get all Order Service
  async getAll() {
    try {
      return await this.orderRepository.findAll({ include: { all: true } });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  // Get one Order by Id Service
  async getOne(id: number) {
    try {
      return await this.orderRepository.findOne({
        where: { id },
        include: { all: true },
      });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  // Update Order Service
  async update(id: number, updateBody: UpdateOrderDto) {
    try {
      return this.orderRepository.update(updateBody, {
        where: { id },
        returning: true,
      });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  // Delete Order Service
  async delete(id: number) {
    try {
      return await this.orderRepository.destroy({ where: { id } });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
