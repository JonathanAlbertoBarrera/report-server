import { Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { StoreController } from './store.controller';
import { PrinterModule } from 'src/printer-PDF/printer.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Customers } from './models/customers.model';
import { Categories } from './models/categories.model';
import { Products } from './models/products.model';
import { Orders } from './models/orders.model';
import { OrderDetails } from './models/order_details.model';

@Module({
  imports:  [
    SequelizeModule.forFeature([
      Categories,
      Customers,
      Products,
      Orders,
      OrderDetails
    ]),
    PrinterModule
  ],
  controllers: [StoreController],
  providers: [StoreService],
})
export class StoreModule {}
