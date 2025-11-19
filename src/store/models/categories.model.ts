import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Products } from './products.model';

@Table({
  tableName: 'categories',
  timestamps: false
})
export class Categories extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true
  })
  category_id: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: true
  })
  category_name: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: true
  })
  description: string;

  @HasMany(() => Products)
  products: Products[];
}