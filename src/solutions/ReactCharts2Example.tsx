
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { SimpleBarData } from '../data';

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
    ]
  }

  return (
    <div>
      <Bar
        data = {dataToUse}
      />
    </div>
  );
};
