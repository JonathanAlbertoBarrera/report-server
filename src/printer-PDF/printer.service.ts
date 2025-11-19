import { Injectable } from '@nestjs/common';
import PdfPrinter from 'pdfmake'
import type { BufferOptions, CustomTableLayout, TDocumentDefinitions } from 'pdfmake/interfaces';

const fonts = {
        Roboto: {
            normal: 'src/printer-PDF/fonts/RobotoSerif_120pt-Thin.ttf',
            bold: 'src/printer-PDF/fonts/RobotoSerif_28pt-Bold.ttf',
            italics: 'src/printer-PDF/fonts/RobotoSerif_28pt-BlackItalic.ttf',
            bolditalics: 'src/printer-PDF/fonts/RobotoSerif_28pt-BoldItalic.ttf',
        }
};

const customTableLayouts: Record<string, CustomTableLayout> = {
  customLayout01: {
    hLineWidth: function (i, node) {
      if (i === 0 || i === node.table.body.length) {
        return 0;
      }
      return i === node.table.headerRows ? 2 : 1;
    },
    vLineWidth: function (i) {
      return 0;
    },
    hLineColor: function (i) {
      return i === 1 ? 'black' : '#cccccc';
    },
    paddingLeft: function (i) {
      return i === 0 ? 8 : 8; // ← Mismo padding para todas las filas
    },
    paddingRight: function (i, node) {
      return 8; 
    },
    paddingTop: function (i) {
      return 4;
    },
    paddingBottom: function (i) {
      return 4;
    },
    fillColor: function (i, node) {
      if (i === 0) { 
        // Encabezado - verde
        return '#1e5631'; 
      }

      // Filas alternas
      return i % 2 === 0 ? '#f8f9fa' : 'white';
    },
  },
};


@Injectable()
export class PrinterService {
    private printer=new PdfPrinter(fonts);

    createPdf(docDefinition:TDocumentDefinitions, options:BufferOptions={
        tableLayouts:customTableLayouts,
    }):PDFKit.PDFDocument{

        return this.printer.createPdfKitDocument(docDefinition,options);
    }

}
