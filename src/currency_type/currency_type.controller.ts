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
import { CurrencyTypeService } from './currency_type.service';
import { CreateCurrencyTypeDto } from './dto/create-currency_type.dto';
import { UpdateCurrencyTypeDto } from './dto/update-currency_type.dto';
import { CurrencyType } from './entity/currency_type.entity';

@ApiTags('Currency Type')
@Controller('currency-type')
export class CurrencyTypeController {
  constructor(private readonly CurrencyType: CurrencyTypeService) {}

  // Create CurrencyType Controller
  @ApiOperation({ summary: 'Create CurrencyType' })
  @ApiResponse({ status: 201, type: CurrencyType })
  @Post()
  create(@Body() createBody: CreateCurrencyTypeDto) {
    return this.CurrencyType.create(createBody);
  }

  // Get all CurrencyType Controller
  @ApiOperation({ summary: 'Get all CurrencyType' })
  @ApiResponse({ status: 200, type: [CurrencyType] })
  @Get()
  getAll() {
    return this.CurrencyType.getAll();
  }

  // Get one CurrencyType Controller
  @ApiOperation({ summary: 'Get one CurrencyType' })
  @ApiResponse({ status: 200, type: CurrencyType })
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.CurrencyType.getOne(+id);
  }

  // Update CurrencyType Controller
  @ApiOperation({ summary: 'Update CurrencyType' })
  @ApiResponse({ status: 200, type: CurrencyType })
  @Put(':id')
  update(@Param('id') id: number, @Body() updateBody: UpdateCurrencyTypeDto) {
    return this.CurrencyType.update(+id, updateBody);
  }

  // Delete CurrencyType Controller
  @ApiOperation({ summary: 'Delete CurrencyType' })
  @ApiResponse({ status: 200, type: CurrencyType })
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.CurrencyType.delete(+id);
  }
}
