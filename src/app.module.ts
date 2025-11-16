import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BasicReportsModule } from './basic-reports/basic-reports.module';
import { PrinterModule } from './printer/printer.module';

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
      BasicReportsModule,
      PrinterModule,
  ],
})
export class AppModule {}
