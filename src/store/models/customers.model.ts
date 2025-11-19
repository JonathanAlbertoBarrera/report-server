import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Orders } from './orders.model';

@Table({
  tableName: 'customers',
  timestamps: false
})
export class Customers extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true
  })
  customer_id: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: true
  })
  customer_name: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: true
  })
  contact_name: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: true
  })
  address: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: true
  })
  city: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: true
  })
  postal_code: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: true
  })
  country: string;

  @HasMany(() => Orders)
  orders: Orders[];
}