import { Module } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CountriesController } from './countries.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Country } from './countries.model';
import { PrinterModule } from 'src/printer-PDF/printer.module';

@Module({
  imports: [SequelizeModule.forFeature([Country]),PrinterModule],
  controllers: [CountriesController],
  providers: [CountriesService],
})
export class CountriesModule {}
