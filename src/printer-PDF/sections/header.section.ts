import type { Content } from "pdfmake/interfaces";
import { DateFormatter } from "src/helpers";

const logo: Content = {
    image: 'src/printer-PDF/assets/Logo-utez.png',
    width: 150,
    height: 100,
    alignment: 'center',
    margin: [0, 0, 0, 100],
}

interface HeaderOptions {
    title?: string;
    subtitle?: string;
    showLogo?: boolean,
    showDate?: boolean
}

export const headerSection = (options: HeaderOptions): Content => {
    const { title, subtitle, showLogo=true, showDate=true } = options;

    const headerLogo:Content=showLogo ? logo : '';

    const headerDate:Content=showDate ? {
        text:DateFormatter.getCurrentDateFormatted(),
        alignment: 'right',
        margin: [20, 20],
    } : '';

    const headerTitle:Content=title ? {
        text:title,
        style:{bold:true},
        alignment:'center',
    } : '';

    return {
        columns: [headerLogo,headerTitle,headerDate],
    }
}