import type { StyleDictionary, TDocumentDefinitions } from 'pdfmake/interfaces';
import { headerSection } from 'src/printer-PDF/sections/header.section';
import { Country } from '../countries.model';

const styles: StyleDictionary = {
    title: {
        fontSize: 22,
        bold: true,
        alignment: 'center',
        margin:[0,60,0,60],
    },
    body:{
        alignment:'justify',
        margin:[0,0,0,70],
    },
    signature:{
        fontSize:14,
        bold:true,
        alignment:'left',
    },
    footer: {
        fontSize: 10,
        italics: true,
        alignment: 'center',
        margin:[0,0,0,20],
    },
};
   

interface ReportEmployeeByIdOptins{
    countries:Country[];
}

export const definitionAllCountriesReport = (options: ReportEmployeeByIdOptins): TDocumentDefinitions => {
    
    const dataCountries:Country[] = options.countries;
    

    // Crear el texto con partes en negrita
    const contentText = [
        'Yo, ',
        { text: 'VARIABLE', bold: true },
        ', en mi calidad de ',
        { text: 'variable', bold: true },
    ];

    const docDefinition: TDocumentDefinitions = {
        styles: styles,
        pageMargins: [40, 60, 40, 60],
        header: headerSection({ showLogo: true, showDate: true }),
        content: [
            {
                text: 'REPORTE DE PAISES',
                style: 'title',
            },
            {
                text: contentText,
                style: 'body'
            },
             {
                text: dataCountries[0].name,
                style: 'body'
            },
        ],
        footer: {
            text: 'Footer countries',
            style: 'footer',
        }
    };

    return docDefinition;
};