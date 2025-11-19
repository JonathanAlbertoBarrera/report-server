import type { Content, Column } from 'pdfmake/interfaces';
import { DateFormatter } from 'src/helpers';

const logo: Content = {
  image: 'src/printer-PDF/assets/Logo-utez.png',
  width: 120,
  height: 100,
  alignment: 'left',
  margin: [0, 0, 0, 5],
};

const date: Content = {
  text: DateFormatter.getCurrentDateFormatted(),
  alignment: 'right',
  margin: [20, 40],
};

interface HeaderOptions {
  title?: string;
  subTitle?: string;
  showLogo?: boolean;
  showDate?: boolean;
}

export const headerSection = (options: HeaderOptions): Content => {
  const { title, subTitle, showLogo = true, showDate = true } = options;

  const headerLogo: Content = showLogo ? logo : { text: '' };

  const headerSubTitle: Content = subTitle
    ? {
        text: subTitle,
        alignment: 'center',
        margin: [0, 2, 0, 0],
        style: {
          fontSize: 16,
          bold: true,
        },
      }
    : { text: '' };

  const headerTitle: Content = title
    ? {
        stack: [
          {
            text: title,
            alignment: 'center',
            margin: [0, 15, 0, 0],
            style: {
              bold: true,
              fontSize: 22,
            },
          },
          headerSubTitle,
        ],
      }
    : { text: '' };

  const headerDate: Content = showDate ? date : { text: '' };

  return {
    columns: [
      {
        width: 'auto',
        ...(headerLogo),
      } as Column,
      {
        width: '*',
        ...(headerTitle),
      } as Column,
      {
        width: 'auto',
        ...(headerDate),
      } as Column,
    ],
  };
};