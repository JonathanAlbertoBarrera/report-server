import type { TDocumentDefinitions } from 'pdfmake/interfaces';
import { headerSection } from 'src/printer-PDF/sections/header.section';
import { Country } from '../../../countries/countries.model';
import { footerSection } from 'src/printer-PDF/sections/footer.section';

interface ReportEmployeeByIdOptins {
  countries: Country[];
}

export const definitionAllCountriesReport = (
  options: ReportEmployeeByIdOptins,
): TDocumentDefinitions => {
  const dataCountries: Country[] = options.countries;

  const docDefinition: TDocumentDefinitions = {
    pageOrientation: 'landscape', //ORIENTACION
    header: headerSection({
      showLogo: true,
      showDate: true,
      title: 'Countries Report',
      subTitle: 'List of all countries',
    }), //HEADER PERSONALIZADO

    //MARGENES RESPECTO AL CONTENT. LEFT, TOP, RIGHT AND BOTTOM
    //LO QUE TIENE TOP DEBE CONSIDERARSE SEGUN TAMAÑO DEL HEADER
    //LO QUE TIENE BOTTOM DEBE CONSIDERARSE SEGUN EL TAMAÑO DEL BOTTOM
    pageMargins: [40, 110, 40, 60],

    content: [
      {
        layout: 'customLayout01',
        table: {
          headerRows: 1,
          widths: [50, 50, 50, '*', 'auto', '*'],

          body: [
            [{text:'ID',color:'white',bold:true}, {text:'ISO2',color:'white',bold:true},{text:'ISO3',color:'white',bold:true}, {text:'Name',color:'white',bold:true},{text:'Name',color:'Continent',bold:true} ,{text:'Local Name',color:'Continent',bold:true}],
            ...dataCountries.map((country) => [
              country.id.toString(),
              country.iso2,
              country.iso3,
              { text: country.name, bold: true },
              country.continent,
              country.localName,
            ]),
            ['', '', '', '', '', ''],
            [
              '',
              '',
              '',
              '',
              'Total',
              { text: `${dataCountries.length} países`, bold: true },
            ],
          ],
        },
      },

      // Tabla de totales
      {
        text: 'Totales',
        style: {
          fontSize: 18,
          bold: true,
          margin: [0, 40, 0, 0],
        },
      },

      {
        layout: 'noBorders',
        table: {
          headerRows: 1,
          widths: [50, 50, 70, '*', 'auto', '*'],
          body: [
            [
              {
                text: 'Total de países',
                colSpan: 2,
                bold: true,       
              },{},
              {
                text: `${dataCountries.length} países`,
                bold: true,
              },{},{},{},
            ],
          ],
        },
      },

    ],

    footer: footerSection,
  };

  return docDefinition;
};
