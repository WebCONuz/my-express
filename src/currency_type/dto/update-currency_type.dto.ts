import { PartialType } from '@nestjs/mapped-types';
import { CreateCurrencyTypeDto } from './create-currency_type.dto';

export class UpdateCurrencyTypeDto extends PartialType(CreateCurrencyTypeDto) {}
