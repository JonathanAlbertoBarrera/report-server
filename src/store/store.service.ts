import { Injectable } from '@nestjs/common';
import { PrinterService } from 'src/printer-PDF/printer.service';
import { definitionSvgBasicReport } from './reports';
import { InjectModel } from '@nestjs/sequelize';
import { Customers } from './models/customers.model';

@Injectable()
export class StoreService {

    constructor(@InjectModel(Customers) private customerModel: typeof Customers,private readonly printerService:PrinterService) {}

    async getSvgChart(){
        const docDefinition=await definitionSvgBasicReport();
        const doc=this.printerService.createPdf(docDefinition);
        return doc;
    }

    async getStatistics(){

        const topCountries=await this.customerModel.findAll();
        const docDefinition=await definitionSvgBasicReport();
        const doc=this.printerService.createPdf(docDefinition);
        return doc;
    }
}
