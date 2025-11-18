import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { EmployeeModule } from './employee/employee.module';
import { PrinterModule } from './printer-PDF/printer.module';
import { CountriesModule } from './countries/countries.module';

@Module({
  imports: [
      SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: '123456',
      database: 'postgres',
      models: [],
      autoLoadModels: true,
      synchronize: true,
      logging: console.log,
    }),
      EmployeeModule,
      PrinterModule,
      CountriesModule,
  ],
})
export class AppModule {}
