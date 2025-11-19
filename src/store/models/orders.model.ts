import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Customers } from './customers.model';
import { OrderDetails } from './order_details.model';

@Table({
  tableName: 'orders',
  timestamps: false
})
export class Orders extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true
  })
  order_id: number;

  @ForeignKey(() => Customers)
  @Column({
    type: DataType.INTEGER,
    allowNull: true
  })
  customer_id: number;

  @Column({
    type: DataType.DATE,
    allowNull: true
  })
  order_date: Date;

  @BelongsTo(() => Customers)
  customer: Customers;

  @HasMany(() => OrderDetails)
  order_details: OrderDetails[];
}