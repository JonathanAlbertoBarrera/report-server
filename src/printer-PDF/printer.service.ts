import { Injectable } from '@nestjs/common';
import PdfPrinter from 'pdfmake'
import type { BufferOptions, TDocumentDefinitions } from 'pdfmake/interfaces';

const fonts = {
        Roboto: {
            normal: 'src/printer-PDF/fonts/RobotoSerif_120pt-Thin.ttf',
            bold: 'src/printer-PDF/fonts/RobotoSerif_28pt-Bold.ttf',
            italics: 'src/printer-PDF/fonts/RobotoSerif_28pt-BlackItalic.ttf',
            bolditalics: 'src/printer-PDF/fonts/RobotoSerif_28pt-BoldItalic.ttf',
        }
};

@Injectable()
export class PrinterService {
    private printer=new PdfPrinter(fonts);

    createPdf(docDefinition:TDocumentDefinitions, options:BufferOptions={}):PDFKit.PDFDocument{

        return this.printer.createPdfKitDocument(docDefinition,options);
    }

}
