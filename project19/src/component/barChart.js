import React, { Component } from 'react';
import { BarChart, Bar, Legend, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import './barChart.css';
const data = 
[{name: 'Page A', uv: 400, pv: 2400, amt: 2400},
{name: 'Page B', uv: 800, pv: 2800, amt: 2900},
{name: 'Page C', uv: 300, pv: 2000, amt: 2100},
{name: 'Page D', uv: 100, pv: 2600, amt: 2200}];

export default class BarChartWidget extends Component {
    render() {
        
      return ( 
<BarChart className="barChart" width={300} height={250} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="pv" fill="#8884d8" />
  <Bar dataKey="uv" fill="#82ca9d" />
</BarChart>
     );
    }
  }

