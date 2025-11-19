import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Orders } from './orders.model';
import { Products } from './products.model';

@Table({
  tableName: 'order_details',
  timestamps: false
})
export class OrderDetails extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true
  })
  order_detail_id: number;

  @ForeignKey(() => Orders)
  @Column({
    type: DataType.INTEGER,
    allowNull: true
  })
  order_id: number;

  @ForeignKey(() => Products)
  @Column({
    type: DataType.INTEGER,
    allowNull: true
  })
  product_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true
  })
  quantity: number;

  @BelongsTo(() => Orders)
  order: Orders;

  @BelongsTo(() => Products)
  product: Products;
}