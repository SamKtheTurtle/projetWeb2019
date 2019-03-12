import React, { Component } from 'react';
import { ScatterChart,Scatter, CartesianGrid, XAxis, YAxis, ZAxis, Legend, Tooltip } from 'recharts';
import './scatterChart.css';
const data01 = 
[{'x': 170, 'y': 72, 'z': 100},
{'x': 150, 'y': 54, 'z': 70},
{'x': 160, 'y': 60, 'z': 120},
{'x': 175, 'y': 80, 'z': 140}];

const data02 = 
[{'x': 180, 'y': 120, 'z': 80},
{'x': 190, 'y': 89, 'z': 90},
{'x': 150, 'y': 148, 'z': 110},
{'x': 155, 'y': 45, 'z': 135}];

export default class ScatterChartWidget extends Component {
    render() {
        
      return ( 
<ScatterChart className="scatterChart" width={300} height={250}
  margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="x" name="stature" unit="cm" />
  <YAxis dataKey="y" name="weight" unit="kg" />
  <ZAxis dataKey="z" range={[64, 144]} name="score" unit="km" />
  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
  <Legend />
  <Scatter name="A school" data={data01} fill="#8884d8" />
  <Scatter name="B school" data={data02} fill="#82ca9d" />
</ScatterChart>
     );
    }
  }