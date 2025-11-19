import { Controller, Get, Res } from '@nestjs/common';
import { StoreService } from './store.service';
import type { Response } from 'express';

@Controller('store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Get('svg-report')
      async svgReport(@Res() response: Response) {
        const pdfDoc= await this.storeService.getSvgChart();
        response.setHeader('Content-Type','application/pdf');
        pdfDoc.info.Title="Reporte getSvgChart";
        pdfDoc.pipe(response);
        pdfDoc.end();
  }
}
