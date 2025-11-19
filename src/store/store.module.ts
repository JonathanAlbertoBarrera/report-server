import { Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { StoreController } from './store.controller';
import { PrinterModule } from 'src/printer-PDF/printer.module';

@Module({
  imports: [PrinterModule],
  controllers: [StoreController],
  providers: [StoreService],
})
export class StoreModule {}
