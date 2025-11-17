import type { StyleDictionary, TDocumentDefinitions } from 'pdfmake/interfaces';
import { headerSection } from '../../../printer-PDF/sections/header.section';
import { DateFormatter } from 'src/helpers';
import { Employee } from 'src/employee/employee.model';

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

/*
interface ReportEmployeeByIdOptins{
    employerName:string;
    employerPosition:string;
    employeeName:string;
    employeePosition:string;
    employeeStartDate:Date;
    employeeHours:number;
    employeeWorkSchedule:string;
    employerCompany:string;
}*/
//const {employerName,employeePosition,employeeName,employerPosition,employeeStartDate,employeeHours,employeeWorkSchedule,employerCompany}=options;
   

interface ReportEmployeeByIdOptins{
    empleado:Employee;
}

export const definitionLetterEmployeeByIdReport = (options: ReportEmployeeByIdOptins): TDocumentDefinitions => {
    
    const empleado = options.empleado;
    
    const employerName = "Yan Itzel";
    const employerPosition = "Gerente General";
    const employerCompany = "UTEZ";

    // Crear el texto con partes en negrita
    const contentText = [
        'Yo, ',
        { text: employerName, bold: true },
        ', en mi calidad de ',
        { text: employerPosition, bold: true },
        ' de ',
        { text: employerCompany, bold: true },
        ', por medio de la presente certifico que ',
        { text: empleado.name, bold: true },
        ' ha sido empleado en nuestra empresa desde el ',
        { text: DateFormatter.getDDMMMMYYYYFromDB(empleado.start_date), bold: true },
        '. \n\n',
        'Durante su empleo, el Sr./Sra. ',
        { text: empleado.name, bold: true },
        ' ha desempeñado el cargo de ',
        { text: empleado.position, bold: true },
        ', demostrando responsabilidad, compromiso y habilidades profesionales en sus labores.\n\n',
        'La jornada laboral del Sr./Sra. ',
        { text: empleado.name, bold: true },
        ' es de ',
        { text: `${empleado.hours_per_day} horas diarias`, bold: true },
        ', con un horario de ',
        { text: empleado.work_schedule, bold: true },
        ', cumpliendo con las políticas y procedimientos establecidos por la empresa.\n\n',
        'Esta constancia se expide a solicitud del interesado para los fines que considere conveniente. \n\n'
    ];

    const docDefinition: TDocumentDefinitions = {
        styles: styles,
        pageMargins: [40, 60, 40, 60],
        header: headerSection({ showLogo: true, showDate: true }),
        content: [
            {
                text: 'CONSTANCIA DE EMPLEO',
                style: 'title',
            },
            {
                text: contentText,
                style: 'body'
            },
            { text: `Atentamente,`, style: 'signature' },
            { text: employerName, style: 'signature' },
            { text: employerPosition, style: 'signature' },
            { text: employerCompany, style: 'signature' },
            { text: DateFormatter.getCurrentDateFormatted(), style: 'signature' },
        ],
        footer: {
            text: 'Este documento es una constancia de empleo y no representa un compromiso laboral.',
            style: 'footer',
        }
    };

    return docDefinition;
};