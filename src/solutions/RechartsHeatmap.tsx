
import React from 'react';
import { heatMapData } from '../data';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ZAxis, Label } from 'recharts';

export type RechartsHeatmapProps = {

    data: typeof heatMapData;
};


function processData(data: typeof heatMapData) {



    // First we'll assign an integer to each of the x/y values 
    const usersMap: Record<string, number> = {};
    const foodMap: Record<string, number> = {};

    let minValue = Infinity; 
    let maxValue = -1* Infinity; 

    data.values.forEach((v) => {

        if (usersMap[v.user] === undefined) {
            usersMap[v.user] = Object.keys(usersMap).length;
        }

        if (foodMap[v.food] === undefined) {
            foodMap[v.food] = Object.keys(foodMap).length;
        }

        if (v.numTimesEaten > maxValue) {
            maxValue = v.numTimesEaten; 
        }

        if (v.numTimesEaten < minValue) {
            minValue = v.numTimesEaten
        }; 
    })

    const newData = data.values.map((v) => {
        return {
            y: foodMap[v.food],
            x: usersMap[v.user], 
            z: v.numTimesEaten,
        }
    });


    const reversedFoodMap = [ ...Object.keys(foodMap)];
    const reversedUserMap = [ ...Object.keys(usersMap)];

    const opacityAdjustingFunction = (value: number) => {

        // This calculation will fail if the range spans negative nubmers, but
        return (value/maxValue); 
    }

    return { newData, reversedFoodMap, reversedUserMap, opacityAdjustingFunction };


}




export const RechartsHeatmap = (props: RechartsHeatmapProps) => {
    const { data } = props;

    const { newData, reversedFoodMap, reversedUserMap, opacityAdjustingFunction} = processData(data);

    console.log(newData);
    console.log(reversedFoodMap);

    console.log(reversedUserMap);
    return (<>

        <ResponsiveContainer width={500} height={500}>
            <ScatterChart
                width={400}
                height={400}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }}
            >


                <XAxis 
                tickCount={reversedUserMap.length}
                type ="number" dataKey="x"  name="Users"
                padding={{
                    left: 75,
                    right: 75, 
                }}
                

                    allowDecimals={false}
                

                    tick={(props) => {
                        const { x, y, index, } = props;


                        console.log(props);


                        return <g transform={`translate(${x},${y})`}>
                            <text
                                x={0}
                                y={0}
                                dy={16}

                                textAnchor="middle"
                                fill="#666"
                                stroke="red"
                            >
                                {reversedUserMap[index]}            </text>
                        </g>;
                    }} 
                    
                    
                    
                    >
                            <Label value="Users" offset={0} position="bottom" />


                    </XAxis>
                <YAxis type ="number" dataKey="y" name="Food"
                                tickCount={reversedFoodMap.length}
                                padding={{
                                    top: 50, 
                                    bottom: 50,
                                }}

                    allowDecimals={false}
                    label ="Foods"
  
                    tick={(props) => {
                        const { x, y, index, } = props;

                        console.log(props)

                        return <g transform={`translate(${x},${y})`}>
                            <text
                                x={0}
                                y={0}
                                textAnchor="end"
                                alignment-baseline="middle"
                                fill="#666"
                                stroke="red"
                            >
                                {reversedFoodMap[index]}</text>
                        </g>;
                    }}

                >                            <Label value="Users" offset={0} position="left" />
                </YAxis>

                <ZAxis dataKey="numTimesEaten"/>
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />

                <Scatter name="A school" data={newData} fill="#8884d8" 
                
                shape={(props) => {
                    const PADDING_AMOUNT = 20; 

                    const a = props.yAxis.scale(props.payload.y); 
                    const b = props.yAxis.scale(props.payload.y + 1); 

                    const diff = a-b - PADDING_AMOUNT; 
                    const diff2 = diff/2; 

                    const xa = props.xAxis.scale(props.payload.x); 
                    const xb = props.xAxis.scale(props.payload.x + 1); 

                    const xdiff = xb-xa - PADDING_AMOUNT; 
                    const xdiff2 = xdiff/2; 
                    const o = opacityAdjustingFunction(props.payload.z); 
                    return <rect x={xa-xdiff2} y={a-diff2} width={xdiff} height={diff} fill="red" fillOpacity={o} stroke ="red" ></rect>
                }}/>
            </ScatterChart>
        </ResponsiveContainer>
    </>
    );
};
