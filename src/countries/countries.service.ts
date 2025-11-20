import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PrinterService } from 'src/printer-PDF/printer.service';
import { Country } from './countries.model';
import { Op } from 'sequelize';
import { definitionAllCountriesReport } from 'src/printer-PDF/reports';

@Injectable()
export class CountriesService {

    constructor(private readonly printerService:PrinterService, @InjectModel(Country) private countryModel:typeof Country){}

    //todos los paises
     async allCountriesReport(){
                //obtener la lista de paises
                const countries:Country[]=await this.countryModel.findAll({
                    where:{
                        
                        //continent no sea null                        }
                        continent:{
                            [Op.not]:null
                        },

                        localName:{
                            [Op.not]:null,
                            [Op.ne]:''
                        }
                    }
                });

                //mandar la lista al doc definition
                const docDefinition=definitionAllCountriesReport({countries:countries});
                const doc=this.printerService.createPdf(docDefinition);
                return doc;
    }
}
