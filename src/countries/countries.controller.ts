import { Controller, Get, Res } from '@nestjs/common';
import { CountriesService } from './countries.service';
import type{ Response } from 'express';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService,private readonly countryService:CountriesService) {}
   
  @Get()
    async allCountries(@Res() response: Response){
      const pdfDoc= await this.countryService.allCountriesReport();
      response.setHeader('Content-Type','application/pdf');
      pdfDoc.info.Title="PDF_PRO_JONA";
      pdfDoc.pipe(response);
      pdfDoc.end();
    }
}
