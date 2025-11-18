import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'countries', timestamps: false })
export class Country extends Model {
  @Column({
    type: DataType.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    field: 'id'
  })
  declare id: number;

  @Column({ type: DataType.STRING })
  declare name: string;

  @Column({ 
    type: DataType.STRING,
    allowNull: false
  })
  declare iso2: string;

  @Column({ type: DataType.STRING })
  declare iso3: string;

  @Column({ 
    type: DataType.STRING,
    field: 'local_name'
  })
  declare localName: string;

  @Column({
    type: DataType.ENUM(
      'Africa',
      'Antarctica',
      'Asia',
      'Europe',
      'Oceania',
      'North America',
      'South America'
    )
  })
  declare continent: string;
}