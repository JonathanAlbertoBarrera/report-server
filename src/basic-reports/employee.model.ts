import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'employees', timestamps: false })
export class Employee extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  declare id: number;

  @Column({ type: DataType.STRING(100), allowNull: false })
  name: string;

  @Column({ type: DataType.STRING(50), allowNull: false })
  position: string;

  @Column({ type: DataType.DATE, allowNull: false })
  start_date: Date;

  @Column({ type: DataType.TIME, allowNull: false })
  work_time: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  hours_per_day: number;

  @Column({ type: DataType.STRING(50), allowNull: false })
  work_schedule: string;
}