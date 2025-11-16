import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Employee } from './employee.model';

@Injectable()
export class BasicReportsService {

    constructor(@InjectModel(Employee) private employeeModel: typeof Employee){}

    async hello(){
        return this.employeeModel.findOne({
            where:{
                id:1,
            },
        });
    }
}
