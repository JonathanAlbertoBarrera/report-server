import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Employee } from './employee.model';
import { PrinterService } from 'src/printer-PDF/printer.service';
import { definitionHelloWorldReport, definitionLetterReport } from './reports';

@Injectable()
export class BasicReportsService {

    constructor(@InjectModel(Employee) private employeeModel: typeof Employee, private readonly printerService:PrinterService){}
    

        hello(){
            const docDefinition=definitionHelloWorldReport({name:'Alberto Barrera'});
            const doc=this.printerService.createPdf(docDefinition);
            return doc;
        }

        employmentLetter(){
            const docDefinition=definitionLetterReport();
            const doc=this.printerService.createPdf(docDefinition);
            return doc;
        }

        employmentLetterById(){
            const docDefinition=definitionLetterReport();
            const doc=this.printerService.createPdf(docDefinition);
            return doc;
        }
}
