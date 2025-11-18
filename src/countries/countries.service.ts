import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PrinterService } from 'src/printer-PDF/printer.service';
import { Country } from './countries.model';
import { definitionAllCountriesReport } from './reports';

@Injectable()
export class CountriesService {

    constructor(private readonly printerService:PrinterService, @InjectModel(Country) private countryModel:typeof Country){}

    //todos los paises
     async allCountriesReport(){
                //obtener la lista de paises
                const countries:Country[]=await this.countryModel.findAll();

                //mandar la lista al doc definition
                const docDefinition=definitionAllCountriesReport({countries:countries});
                const doc=this.printerService.createPdf(docDefinition);
                return doc;
    }
}
