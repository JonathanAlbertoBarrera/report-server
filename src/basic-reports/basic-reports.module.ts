import { Module } from '@nestjs/common';
import { BasicReportsService } from './basic-reports.service';
import { BasicReportsController } from './basic-reports.controller';
import { Employee } from './employee.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { PrinterModule } from 'src/printer/printer.module';

@Module({
  imports: [SequelizeModule.forFeature([Employee]),PrinterModule],
  controllers: [BasicReportsController],
  providers: [BasicReportsService],
})
export class BasicReportsModule {}
