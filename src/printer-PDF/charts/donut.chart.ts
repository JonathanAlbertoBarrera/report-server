import * as Utils from 'src/helpers/chart-utils';
import { PositionLegend } from './chart-types';

interface DonutEntry {
  label: string;
  value: number;
}

interface DonutOptions {
    ListEntries: DonutEntry[];
    positionLegend?: PositionLegend;
    titleChart?:string | null;
}

export const generateDonutChart = async (options: DonutOptions): Promise<string> => {
  //obtener ListEntries que es una lista de DonutEntry[]
  const ListEntries = options.ListEntries;

  //DATA CON LA CUAL TRABAJARA LA GRAFICA
  const data = {
    labels: ListEntries.map((DonutEntry) => DonutEntry.label),
    datasets: [
      {
        data: ListEntries.map((DonutEntry) => DonutEntry.value),
        //backgroundColor: Object.values(Utils.CHART_COLORS),
      },
    ],
  };

  //CONFIGURACION DEL GRAFICO DE CHARTJS
  const positionLegendReceived = options.positionLegend || PositionLegend.RIGHT;
  const title=options.titleChart || null;
  const showTitle= title ? true : false;

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
