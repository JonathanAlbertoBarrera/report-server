import { TDocumentDefinitions } from 'pdfmake/interfaces';
import fs from 'fs';
import * as Utils from '../../helpers/chart-utils';

const svgContent = fs.readFileSync('src/printer-PDF/assets/ford.svg', 'utf8');

const generateChartImage = async () => {
  const chartConfig = {
    type: 'bar', // Show a bar chart
    data: {
      labels: [2012, 2013, 2014, 2015, 2016], // Set X-axis labels
      datasets: [
        {
          label: 'Users', // Create the 'Users' dataset
          data: [120, 60, 50, 180, 120], // Add data to the chart
        },
      ],
    },
  };

  return Utils.chartJsToImage(chartConfig);
};

const generateDonut = async () => {

    // data que se manejara
  const DATA_COUNT = 5;
  const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

  const data = {
    labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
    datasets: [
      {
        label: 'Dataset 1',
        data: Utils.numbers(NUMBER_CFG),
        backgroundColor: Object.values(Utils.CHART_COLORS),
      },
    ],
  };

  //configuracion del grafico de chartsjs
  const config = {
    type: 'doughnut',
    data: data,
    options: {
        title: {
            display: true,
            text: 'TITULO DONUT PRO',
          },
    },
  };

    return Utils.chartJsToImage(config);
};

export const definitionSvgBasicReport =
  async (): Promise<TDocumentDefinitions> => {
    
    const [chart,chartDonut]=await Promise.all([generateChartImage(),generateDonut()]);
    //const chart = await generateChartImage();
    //const chartDonut=await generateDonut();

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
            {
              text: 'Grafica barras',
              alignment: 'center',
            },
            {
              image: chart,
              width: 250,
              alignment: 'center',
            },
            {
                text: 'Grafica DONUT',
                alignment: 'center',
            },
            {
                image: chartDonut,
                width: 250,
                alignment: 'center',
              },
          ],
        },
      ],
    };

    return docDefinition;
  };
