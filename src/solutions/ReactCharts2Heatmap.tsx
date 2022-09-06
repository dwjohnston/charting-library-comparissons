import { stringify } from "querystring";
import { Chart } from "react-chartjs-2"
import { ZAxis } from "recharts";
import { heatMapData } from "../data";
import { processData } from "./RechartsHeatmap";



type ReactChartsHeatmapProps = {
    data: typeof heatMapData;
}

export const ReactChartsHeatmap = (props: ReactChartsHeatmapProps) => {


    const newData = processData(props.data); 

    return <div style = {{width: 800, height: 800}}>
        
     {/* <pre> {JSON.stringify(newData, null,2)}</pre>  */}
        <Chart
        type="matrix"
        options={{
            plugins: {
                tooltip: {
                  callbacks: {
                    title() {
                      return '';
                    },
                    label(context) {
                      const v = context.dataset.data[context.dataIndex];
                      //@ts-ignore
                      return ['x: ' + v.x, 'y: ' + v.y, 'v: ' + v.v];
                    }
                  }
                }, 
            }, 
            scales: {
                x: {
                    display: false,
                    min: 0,
                    max: 5,
                    offset: false
                },
                y: {
                    display: false,
                    min: 0,
                    max: 5
                }
            }
        }}
        data={{
            datasets: [{
                label: 'Basic matrix',
                //data: [{ x: 1, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 2 }, { x: 2, y: 2 }],
                data: newData.newData.map((v) =>{
                    const {x,y,z} = v; 
                    return {
                        x, y, v: z
                    }
                }),
                borderWidth: 1,
                borderColor: 'rgba(0,0,0,0.5)',
                backgroundColor: (context) => {
                    //@ts-ignore
                    const value = context.dataset.data[context.dataIndex].v; 
                    const opacity= newData.opacityAdjustingFunction(value); 

                    console.log(opacity); 
                    const o2 = Math.floor(opacity * 100); 
                    return `rgba(255, 0, 0, ${opacity}`; 
                },
                width: ({ chart }) => (chart.chartArea || {}).width / 2 - 1,
                height: ({ chart }) => (chart.chartArea || {}).height / 2 - 1,
            }]
        }
        }

    />
    </div>
}