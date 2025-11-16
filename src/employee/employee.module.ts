import { Module } from '@nestjs/common';
import { BasicReportsService } from './employee.service';
import { BasicReportsController } from './employee.controller';
import { Employee } from './employee.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { PrinterModule } from 'src/printer-PDF/printer.module';

@Module({
  imports: [SequelizeModule.forFeature([Employee]),PrinterModule],
  controllers: [BasicReportsController],
  providers: [BasicReportsService],
})
export class EmployeeModule {}
