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

    const newData2= newData.newData.map((v) =>{
        const {x,y,z} = v; 
        return {
            x: x+1, y: y+1, v: z
        }
    }).sort((a, b) => {
        if (a.x > b.x) {
            return 1; 
        }
        if (a.x < b.x) {
            return -1; 
        }

        if (a.x === b.x) {

            if (a.y > b.y) {
                return 1; 
            }

            if (a.y < b.y) {
                return -1; 
            }
        }

        return 0; 
    }); 

    return <div style = {{width: 800, height: 800}}>
                <Chart
        id="foo"
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

                    type:"category", 
                    ticks: {
                        display: true
                    },
                    grid: {
                      display: false
                    },
                    
                    labels: newData.reversedUserMap, 
                  },
                  y: {

                    type:"category", 

                    offset: true,
                    ticks: {
                      display: true
                    },
                    grid: {
                      display: false
                    }, 

                    labels: newData.reversedFoodMap

                  }
            }
        }}
        data={{
            datasets: [{
                label: 'Basic matrix',

                data: props.data.values.map((v) => {
                    return {
                        x: v.user, 
                        y: v.food,
                        v: v.numTimesEaten
                    }
                }), 


                borderWidth: 1,
                borderColor: 'pink',
                backgroundColor: (context) => {
                    //@ts-ignore
                    const value = context.dataset.data[context.dataIndex].v; 
                    const opacity= newData.opacityAdjustingFunction(value); 

                    console.log(opacity); 
                    const o2 = Math.floor(opacity * 100); 
                    return `rgba(255, 0, 0, ${opacity}`; 

                },
                width: ({chart}) => ((chart.chartArea || {}).width /newData.reversedUserMap.length - 1) -10,
                height: ({chart}) =>((chart.chartArea || {}).height / newData.reversedFoodMap.length  - 1) -10
            }]
        }
        }

    />
    </div>
}