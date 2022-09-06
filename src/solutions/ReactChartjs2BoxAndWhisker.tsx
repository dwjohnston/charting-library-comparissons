
import React from 'react';
import { BoxPlotProps } from './RechartsBoxAndWhisker';
import { Chart } from 'react-chartjs-2';



export const ReactChartjsBoxAndWhisker = (props: BoxPlotProps) => {
  const { data } = props;


  const dataToUse = {


    labels: ["one", "two", "three"],

    datasets: [
      {

        label: "aaaa",
        backgroundColor: 'rgba(255,0,0,0.2)',
        borderColor: 'red',
        borderWidth: 1,
        padding: 10,
        itemRadius: 2,
        itemStyle: 'circle' as const,
        itemBackgroundColor: '#000',
        outlierBackgroundColor: '#000',

        data:  data.map((v) => {
          return {
            min: v.min, 
            q1: v.lowerQuartile, 
            median: v.median, 
            q3: v.upperQuartile, 
            max: v.max, 
            average: v.average, 
          }
        })
        
      
      }]
  } ; 


  return (

    <>
      <Chart
        type="boxplot"
        options={{
          responsive: true,

        }} 
        data={dataToUse}

      />
    </>



  );
};
