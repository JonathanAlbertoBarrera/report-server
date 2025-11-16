import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Employee } from './employee.model';
import { PrinterService } from 'src/printer/printer.service';
import { getHelloWorldReport } from 'src/reports';

@Injectable()
export class BasicReportsService {

    constructor(@InjectModel(Employee) private employeeModel: typeof Employee, private readonly printerService:PrinterService){}
    

        hello(){
            const docDefinition=getHelloWorldReport({
                name:'Alberto Barrera'
            });
            const doc=this.printerService.createPdf(docDefinition);
            return doc;
        }
}
