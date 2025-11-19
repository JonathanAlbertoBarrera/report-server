import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Categories } from './categories.model';
import { OrderDetails } from './order_details.model';

@Table({
  tableName: 'products',
  timestamps: false
})
export class Products extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true
  })
  product_id: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: true
  })
  product_name: string;

  @ForeignKey(() => Categories)
  @Column({
    type: DataType.INTEGER,
    allowNull: true
  })
  category_id: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: true
  })
  unit: string;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: true
  })
  price: number;

  @BelongsTo(() => Categories)
  category: Categories;

  @HasMany(() => OrderDetails)
  order_details: OrderDetails[];
}