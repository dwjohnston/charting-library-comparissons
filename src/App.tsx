import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { RechartsExample } from './solutions/RechartsExample';
import { boxPlots, heatMapData, simpleBarData, simpleBarData2, simpleBarData3 } from "./data";
import { ReactChart2Example } from './solutions/ReactCharts2Example';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { BoxPlotChart } from './solutions/RechartsBoxAndWhisker';
import { Example } from './solutions/RechartsTheirScattar';
import { RechartsHeatmap } from './solutions/RechartsHeatmap';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const data = [
  simpleBarData,
  simpleBarData2,
  simpleBarData3,
]

function App() {


  const [dataIndex, setDataIndex] = useState(0);

  return (
    <div className="App">

      <button onClick={() => {
        setDataIndex((dataIndex + 1) % data.length);
      }}>toggle data set</button>
      {/* <RechartsExample data ={data[dataIndex]}/>

      <ReactChart2Example data ={data[dataIndex]}/>
       */}

      {/* <BoxPlotChart data ={boxPlots}/> */}


      <RechartsHeatmap data ={heatMapData}/>


      <Example />
    </div>
  );
}

export default App;
