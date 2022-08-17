
import React from 'react';
import { BoxPlotProps } from './RechartsBoxAndWhisker';
import { Chart } from 'react-chartjs-2';



export const ReactChartjsBoxAndWhisker = (props: BoxPlotProps) => {
    const { data } = props;


    const dataToUse = {


        datasets: [
            {

label: "aaaa",
backgroundColor: 'rgba(255,0,0,0.2)',
borderColor: 'red',
borderWidth: 1,
padding: 10,
itemRadius: 2,
itemStyle: 'circle',
itemBackgroundColor: '#000',
outlierBackgroundColor: '#000',

data: [
    [1, 2, 3, 4, 5],
    {
      min: 1,
      q1: 2,
      median: 3,
      q3: 4,
      max: 5,
    },
    {
      min: 1,
      q1: 2,
      median: 3,
      q3: 4,
      max: 5,
      items: [1, 2, 3, 4, 5],
    },
    {
      min: 1,
      q1: 2,
      median: 3,
      q3: 4,
      max: 5,
      outliers: [1, 2, 3, 4, 5],
    },
  ],
            }]
    }


    return (

        <>

        <div>I have been unable to get boxplot working so far</div>
        {/* @ts-ignore */}
        <Chart type="boxplot" data={dataToUse}

       
        />
        </>



    );
};
