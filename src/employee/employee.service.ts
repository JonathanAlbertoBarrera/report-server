import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Employee } from './employee.model';
import { PrinterService } from 'src/printer-PDF/printer.service';
import { definitionHelloWorldReport, definitionLetterEmployeeByIdReport, definitionLetterReport } from 'src/printer-PDF/reports';


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

        async employmentLetterById(id:number){
            //validar si el id es correcto
            const employeeSearch=await this.employeeModel.findOne({
                where:{id}
            })

            if(!employeeSearch){
                throw new NotFoundException('Empleado no encontrado');
            }

            const docDefinition=definitionLetterEmployeeByIdReport({empleado:employeeSearch});
            const doc=this.printerService.createPdf(docDefinition);
            return doc;
        }
}
