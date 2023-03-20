import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entity/order.entity';
import { OrderService } from './order.service';

@ApiTags('Payment Method')
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  // Create Order Controller
  @ApiOperation({ summary: 'Create Order' })
  @ApiResponse({ status: 201, type: Order })
  @Post()
  create(@Body() createBody: CreateOrderDto) {
    return this.orderService.create(createBody);
  }

  // Get all Order Controller
  @ApiOperation({ summary: 'Get all Order' })
  @ApiResponse({ status: 200, type: [Order] })
  @Get()
  getAll() {
    return this.orderService.getAll();
  }

  // Get one Order Controller
  @ApiOperation({ summary: 'Get one Order' })
  @ApiResponse({ status: 200, type: Order })
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.orderService.getOne(+id);
  }

  // Update Order Controller
  @ApiOperation({ summary: 'Update Order' })
  @ApiResponse({ status: 200, type: Order })
  @Put(':id')
  update(@Param('id') id: number, @Body() updateBody: UpdateOrderDto) {
    return this.orderService.update(+id, updateBody);
  }

  // Delete Order Controller
  @ApiOperation({ summary: 'Delete Order' })
  @ApiResponse({ status: 200, type: Order })
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.orderService.delete(+id);
  }
}
