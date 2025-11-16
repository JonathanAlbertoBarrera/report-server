import { Controller, Get, Param, Res } from '@nestjs/common';
import { BasicReportsService } from './employee.service';
import type { Response } from 'express';

@Controller('basic-reports')
export class BasicReportsController {
  constructor(private readonly basicReportsService: BasicReportsService) {}

  @Get()
  async hello(@Res() response: Response){
    const pdfDoc= this.basicReportsService.hello();
    response.setHeader('Content-Type','application/pdf');
    pdfDoc.info.Title="PDF_PRO_JONA";
    pdfDoc.pipe(response);
    pdfDoc.end();
  }

  @Get('employment-letter')
  async employmentLetter(@Res() response: Response){
    const pdfDoc= this.basicReportsService.employmentLetter();
    response.setHeader('Content-Type','application/pdf');
      pdfDoc.info.Title="PDF_PRO_JONA";
    pdfDoc.pipe(response);
    pdfDoc.end();
  }

  @Get('employment-letter/:id')
  async employmentLetterID(@Res() response: Response,@Param('id') id:string){
    const pdfDoc= this.basicReportsService.employmentLetterById();
    response.setHeader('Content-Type','application/pdf');
    pdfDoc.info.Title="PDF_PRO_JONA";
    pdfDoc.pipe(response);
    pdfDoc.end();
  }
}
