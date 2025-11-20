import { PositionLegend } from '../chart-types';
import * as Utils from '../chart-utils';

export interface DonutEntry {
  label: string;
  value: number;
}

export interface DonutOptions {
  ListEntries: DonutEntry[];
  positionLegend?: PositionLegend;
  titleChart?: string | null;
}

export const generateDonutChart = async (options: DonutOptions): Promise<string> => {
  //obtener ListEntries que es una lista de DonutEntry[]
  const ListEntries = options.ListEntries;

  //CONFIGURACION DEL GRAFICO DE CHARTJS
  const positionLegendReceived = options.positionLegend || PositionLegend.RIGHT;
  const title=options.titleChart || null;
  const showTitle= title ? true : false;

  //DATA CON LA CUAL TRABAJARA LA GRAFICA
  const data = {
    labels: ListEntries.map((DonutEntry) => DonutEntry.label),
    datasets: [
      {
        data: ListEntries.map((DonutEntry) => DonutEntry.value),
        backgroundColor: Object.values(Utils.CHART_COLORS),
      },
    ],
  };

  const config = {
    type: 'doughnut',
    data: data,
    options: {
      legend: {
        position: positionLegendReceived,
      },
      title: {
        text: title,
        display: showTitle,
      },
      responsive: true,
      plugins: {
        datalabels: {
          color: '#fff',
        },
      },
    },
  };

  return Utils.chartJsToImage(config);
};
