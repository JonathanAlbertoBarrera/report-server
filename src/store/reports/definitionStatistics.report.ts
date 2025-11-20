import type { TDocumentDefinitions } from "pdfmake/interfaces"
import * as Utils from '../../helpers/chart-utils'

interface TopCountry{
    country:string;
    customers:number;
 }

 interface ReportOptions{
    title?:string;
    subTitle?:string;
    topCountries:TopCountry[];
}

const generateTopCountryDonut=async(topCountries:TopCountry[]):Promise<string>=>{
    const data = {
        labels: topCountries.map(tc=>tc.country),
        datasets: [
          {
            label: 'Paises con mayor cantidad de clientes',
            data: topCountries.map(tc=>tc.customers),
            //backgroundColor: Object.values(Utils.CHART_COLORS),
          }
        ]
      };

      const config = {
        type: 'doughnut',
        data: data,
        options: {
            legend: {
                position: 'right',
              },
              title:{
                text:'Paises con mayor cantidad de clientes',
                display:true,	
              },
          responsive: true,
          plugins: {
            datalabels:{
                color:'#fff',
            }
          }
        },
      };

      return Utils.chartJsToImage(config);

}


export const definitionStatisticsReport= async (options:ReportOptions): Promise<TDocumentDefinitions> =>{
    const donutGraphic=await Promise.resolve(generateTopCountryDonut(options.topCountries));
    const docDefinition:TDocumentDefinitions={
                content:[
                    {
                        stack:[
                            {
                                text:options.title || 'Reporte de Estadísticas',alignment:'center',
                            },
                            {
                                text:options.subTitle || 'Subtitle de Estadísticas',alignment:'center',
                            },
                            {
                                image: donutGraphic,
                                width: 250,
                                alignment: 'center',
                            },
                        ]
                    }
                ],
    }
    return docDefinition;
}