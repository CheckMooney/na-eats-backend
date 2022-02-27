import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl } from 'class-validator';
import { Table, Column, DataType, BelongsToMany } from 'sequelize-typescript';
import { BaseModel } from 'src/common/entities/base.entity';
import { Category } from './category.entity';
import { FoodCategory } from './food-category.entitiy';

@Table
export class Food extends BaseModel {
  @ApiProperty({ description: '음식 이름' })
  @IsString()
  @Column(DataType.STRING)
  name: string;

  @ApiProperty({ description: '음식 썸네일' })
  @IsUrl()
  @Column({ type: DataType.STRING, validate: { isUrl: true } })
  thumbnail: string;

  @ApiProperty({ description: '음식 카테고리' })
  @BelongsToMany(() => Category, () => FoodCategory)
  categories: Array<Category & { FoodCategory: FoodCategory }>;
}
