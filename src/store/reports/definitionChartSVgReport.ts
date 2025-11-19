import { TDocumentDefinitions } from 'pdfmake/interfaces';
import fs from 'fs';

const svgContent = fs.readFileSync('src/printer-PDF/assets/ford.svg', 'utf8');

export const definitionSvgBasicReport = (): TDocumentDefinitions => {
  const docDefinition: TDocumentDefinitions = {
    content: [
      {
        stack: [
          {
            text: 'SVG Chart Report',
            alignment: 'center',
          },
          {
            svg: svgContent,
            fit: [150, 100],
            alignment: 'center',
          },
        ],
      },
    ],
  };

  return docDefinition;
};
