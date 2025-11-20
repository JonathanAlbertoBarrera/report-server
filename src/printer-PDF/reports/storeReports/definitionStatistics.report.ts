import type { TDocumentDefinitions } from 'pdfmake/interfaces';
import { generateDonutChart, PositionLegend } from 'src/printer-PDF/charts';

interface TopCountry {
    country: string;
    customers: number;
}

interface ReportOptions {
    entriesChart: TopCountry[];
    titleReport?: string;
    subTitleReport?: string;
    positionLegendChart?: PositionLegend;
    titleChart?: string;
}

export const definitionStatisticsReport = async (
    options: ReportOptions,
): Promise<TDocumentDefinitions> => {
    //----options del reporte general
    const titleReport = options.titleReport || 'Reporte de Estadísticas';
    const subTitleReport = options.subTitleReport || 'Subtitle de Estadísticas';
    //----options respecto al grafico
    const titleChart = options.titleChart || null; //podria ser que no venga titulo ya que la fuente es de chart.js y puede utilizarse mejor un text para usar nuestras tipografias
    const positionLegendChart =
        options.positionLegendChart || PositionLegend.RIGHT;
    const entriesChart = options.entriesChart;

    //para generar donut chart ocupamos de las opciones: entriesChart, positionLegendChart, titleChart
    const donutGraphic = await Promise.resolve(
        generateDonutChart({
            ListEntries: entriesChart.map((tc) => ({
                label: tc.country,
                value: tc.customers,
            })),
            positionLegend: positionLegendChart,
            titleChart: titleChart,
        }),
    );

    const docDefinition: TDocumentDefinitions = {
        content: [
            {
                columns: [
                    {
                        stack: [
                            {
                                text: '10 países con más clientes',
                                alignment: 'center',
                                margin: [0, 0, 0, 10],
                            },
                            {
                                image: donutGraphic,
                                width: 320,
                            },
                        ],
                    },
                    {
                        layout: 'lightHorizontalLines',
                        width: 'auto',
                        table: {
                            headerRows: 1,
                            widths: [100, 'auto'],
                            body: [
                                ['País', 'Clientes'],
                                ...entriesChart.map((c) => [c.country, c.customers]),
                            ],
                        },
                    },
                ],
            },
        ],
    };
    return docDefinition;
};
