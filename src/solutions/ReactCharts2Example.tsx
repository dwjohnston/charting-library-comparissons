
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { SimpleBarData } from '../data';
import { Chart } from 'react-chartjs-2';

export type ReactChart2ExampleProps = {

    data: SimpleBarData; 
};


export const ReactChart2Example = (props: ReactChart2ExampleProps) => {
  const { data } = props;


  const dataToUse = {
    labels: data.values.map((v,i) => `${i}`), 
    datasets: [
        {
            data: data.values
        }
    ], 
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 12,
          boxHeight: 12
        },
        reverse: true
      }
    }
  }

  return (
    <div>

      <Chart type ="bar" data={dataToUse}/>
    </div>
  );
};
