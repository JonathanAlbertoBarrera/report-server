import { Injectable } from '@nestjs/common';
import { definitionHelloWorldReport } from 'src/employee/reports';
import { PrinterService } from 'src/printer-PDF/printer.service';
import { definitionSvgBasicReport } from './reports';

@Injectable()
export class StoreService {

    constructor(private readonly printerService:PrinterService) {}

    async getSvgChart(){
        const docDefinition=definitionSvgBasicReport();
                    const doc=this.printerService.createPdf(docDefinition);
                    return doc;
    }
}
