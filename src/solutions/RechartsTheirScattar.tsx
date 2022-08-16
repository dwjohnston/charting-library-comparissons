import React, { PureComponent } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { x: 100, y: 200, z: 200 },
  { x: 100, y: 100, z: 260 },
  { x: 100, y: 300, z: 400 },
  { x: 100, y: 250, z: 280 },
  { x: 100, y: 400, z: 500 },
  { x: 100, y: 280, z: 200 },
];


const data2= [
    {
        "x": 0,
        "y": 0,
        "z": 60
    },
    {
        "x": 1,
        "y": 0,
        "z": 14
    },
    {
        "x": 2,
        "y": 0,
        "z": 23
    },
    {
        "x": 0,
        "y": 1,
        "z": 85
    },
    {
        "x": 1,
        "y": 1,
        "z": 80
    },
    {
        "x": 2,
        "y": 1,
        "z": 2
    },
    {
        "x": 0,
        "y": 2,
        "z": 18
    },
    {
        "x": 1,
        "y": 2,
        "z": 42
    },
    {
        "x": 2,
        "y": 2,
        "z": 21
    },
    {
        "x": 0,
        "y": 3,
        "z": 28
    },
    {
        "x": 1,
        "y": 3,
        "z": 68
    },
    {
        "x": 2,
        "y": 3,
        "z": 94
    }
]; 

export class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
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
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="stature" unit="cm" />
          <YAxis type="number" dataKey="y" name="weight" unit="kg" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="A school" data={data2} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    );
  }
}
