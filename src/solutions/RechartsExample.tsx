import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend } from 'recharts';
import { SimpleBarData } from '../data';
export type RechartsExampleProps = {


  data: SimpleBarData; 
};



export const RechartsExample = (props: RechartsExampleProps) => {
  const {data} = props;


  const dataToUse = data.values.map((v, i) => {
    return {
      name: `${i}`,
      value: v
    }
  })

  return (
    <div>
      <LineChart width={400} height={400} data={dataToUse}>

        <Legend verticalAlign="top" height={36}/>

        <Line type="monotone" dataKey="value" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
{/* @ts-ignore */}
        <YAxis tick={(props) => {

          console.log(props);
          return <text x={props.x} y = {props.y}>foo</text>
        }}/>
      </LineChart>

    </div>
  );
};
