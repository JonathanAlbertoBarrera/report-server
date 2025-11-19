import type { Content, Column } from 'pdfmake/interfaces';
import { DateFormatter } from 'src/helpers';

interface HeaderOptions {
  title?: string;
  subTitle?: string;
  showLogo?: boolean;
  showDate?: boolean;
}

export const headerSection = (options: HeaderOptions): Content => {
  const { title, subTitle, showLogo = true, showDate = true } = options;

  return {
    columns: [
      // Columna 1 - Logo
      {
        width: '25%',
        stack: showLogo ? [{
          image: 'src/printer-PDF/assets/Logo-utez.png',
          width: 120,
          height: 100,
          alignment: 'left',
          margin: [0, 0, 0, 5],
        }] : [{ text: '' }]
      } as Column,
      
      // Columna 2 - Título + SUBTITULO
      {
        width: '50%',
        stack: [
          {
            text: title || '',
            alignment: 'center',
            style: {
              bold: true,
              fontSize: 22,
            },
            margin: [0, 15, 0, 0],
          },
          ...(subTitle ? [{
            text: subTitle,
            alignment: 'center',
            style: {
              fontSize: 16,
              bold: true,
            },
            margin: [0, 2, 0, 0],
          }] : [])
        ],
        alignment: 'center' //  Centrar toda la columna
      } as Column,
      
      // Columna 3 - Fecha
      {
        width: '25%',
        stack: showDate ? [{
          text: DateFormatter.getCurrentDateFormatted(),
          alignment: 'right',
          margin: [0, 40, 10, 0],
        }] : [{ text: '' }]
      } as Column
    ],
    // espacio entre columnas
    columnGap: 10
  };
};