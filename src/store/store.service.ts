import { Injectable } from '@nestjs/common';
import { PrinterService } from 'src/printer-PDF/printer.service';
import { definitionStatisticsReport, definitionSvgBasicReport } from './reports';
import { InjectModel } from '@nestjs/sequelize';
import { Customers } from './models/customers.model';
import { PositionLegend } from 'src/printer-PDF/charts';

@Injectable()
export class StoreService {

    constructor(@InjectModel(Customers) private customerModel: typeof Customers,private readonly printerService:PrinterService) {}

    async getSvgChart(){
        const docDefinition=await definitionSvgBasicReport();
        const doc=this.printerService.createPdf(docDefinition);
        return doc;
    }

    async getStatistics() {
        const sequelize = this.customerModel.sequelize;
        
        if (!sequelize) {
            throw new Error('Database connection not available');
        }
    
        const topCountries = await this.customerModel.findAll({
            attributes: [
                'country',
                [sequelize.fn('COUNT', sequelize.col('country')), 'count']
            ],
            group: ['country'],
            order: [[sequelize.literal('count'), 'DESC']],
            limit: 10,
            raw: true
        });
        
        const ListCountriesReport = topCountries.map((tc: any) => ({
            country: tc.country || 'Unknown',
            customers: Number(tc.count) || 0
        }));
    
        //const docDefinition = await definitionStatisticsReport({entriesChart: ListCountriesReport});
        const docDefinition = await definitionStatisticsReport({entriesChart: ListCountriesReport,titleReport:'Top 10 Countries by Customers',subTitleReport:'Generated Statistics Report',titleChart:'Customers by Country',positionLegendChart:PositionLegend.BOTTOM});
        const doc = this.printerService.createPdf(docDefinition);
        return doc;
    }
}
