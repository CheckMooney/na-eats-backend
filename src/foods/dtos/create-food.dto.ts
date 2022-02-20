import { ApiProperty, PickType } from '@nestjs/swagger';
import { ArrayNotEmpty, IsArray } from 'class-validator';
import { Food } from '../entities/food.entity';

export class CreateFoodDto extends PickType(Food, ['name', 'thumbnail']) {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  categories: string[];
}
