import { Injectable } from '@nestjs/common';
import PdfPrinter from 'pdfmake'
import type { BufferOptions, TDocumentDefinitions } from 'pdfmake/interfaces';

const fonts = {
        Roboto: {
            normal: 'fonts/RobotoSerif_120pt-Thin.ttf',
            bold: 'fonts/RobotoSerif_28pt-Bold.ttf',
            italics: 'fonts/RobotoSerif_28pt-BlackItalic',
            bolditalics: 'fonts/RobotoSerif_28pt-BoldItalic',
        }
};

@Injectable()
export class PrinterService {
    private printer=new PdfPrinter(fonts);

    createPdf(docDefinition:TDocumentDefinitions, options:BufferOptions={}):PDFKit.PDFDocument{

        return this.printer.createPdfKitDocument(docDefinition,options);
    }

}
