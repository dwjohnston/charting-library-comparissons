import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { RechartsExample } from './solutions/RechartsExample';
import { boxPlots, heatMapData, simpleBarData, simpleBarData2, simpleBarData3 } from "./data";
import { ReactChart2Example } from './solutions/ReactCharts2Example';
import { BoxPlotController, BoxAndWiskers } from '@sgratzl/chartjs-chart-boxplot';


import { MatrixController, MatrixElement } from "chartjs-chart-matrix";
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
import { ReactChartjsBoxAndWhisker } from './solutions/ReactChartjs2BoxAndWhisker';
import { ReactChartsHeatmap } from './solutions/ReactCharts2Heatmap';

const plugin = {

  id: "increase-legend-spacing",
  beforeInit(chart: any) {
    // Get reference to the original fit function
    const originalFit = chart.legend.fit;

    // Override the fit function
    chart.legend.fit = function fit() {
      // Call original function and bind scope in order to use `this` correctly inside it
      originalFit.bind(chart.legend)();
      // Change the height as suggested in another answers
      this.height += 20;
    }
  }
};




ChartJS.register(
  BoxAndWiskers,
  BoxPlotController,
  MatrixController,
  MatrixElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  plugin,
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
      {/* <RechartsExample data ={data[dataIndex]}/>*/}


      <ReactChartsHeatmap data={heatMapData}/>
      <RechartsHeatmap data={heatMapData} />

      <ReactChartjsBoxAndWhisker data={boxPlots} />
      <ReactChart2Example data={data[dataIndex]} />

      <BoxPlotChart data ={boxPlots}/>




      <Example />
    </div>
  );
}

export default App;
