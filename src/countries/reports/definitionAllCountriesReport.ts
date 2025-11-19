import type { StyleDictionary, TDocumentDefinitions } from 'pdfmake/interfaces';
import { headerSection } from 'src/printer-PDF/sections/header.section';
import { Country } from '../countries.model';

interface ReportEmployeeByIdOptins {
    countries: Country[];
}

export const definitionAllCountriesReport = (options: ReportEmployeeByIdOptins): TDocumentDefinitions => {

    const dataCountries: Country[] = options.countries;


    const docDefinition: TDocumentDefinitions = {
        pageOrientation: 'landscape',//ORIENTACION
        header: headerSection({ showLogo: true, showDate: true ,title:"Countries Report",subTitle:"List of all countries"}),//HEADER PERSONALIZADO
        
        //MARGENES RESPECTO AL CONTENT. LEFT, TOP, RIGHT AND BOTTOM
        //LO QUE TIENE TOP DEBE CONSIDERARSE SEGUN TAMAÑO DEL HEADER
        //LO QUE TIENE BOTTOM DEBE CONSIDERARSE SEGUN EL TAMAÑO DEL BOTTOM
        pageMargins: [40, 110, 40, 60],
        
        content: [
            {
                layout: 'headerLineOnly',
                table: {
                    headerRows: 1,
                    widths: ['*', 'auto', 100, '*'],

                    body: [
                        ['First', 'Second', 'Third', 'The last one'],
                        ['Value 1', 'Value 2', 'Value 3', 'Value 4'],
                        [{ text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4']
                    ]
                }
            }
        ],

        footer: {
            text: 'Footer countries',
            style: 'footer',
        }
    };

    return docDefinition;
};