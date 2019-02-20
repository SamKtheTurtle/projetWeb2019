import React, { Component } from 'react';
import { AreaChart, Area, linearGradient, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import './areaChart.css';
const data = 
[{name: 'A', uv: 400, pv: 2400, amt: 2400},
{name: 'B', uv: 800, pv: 2800, amt: 2900},
{name: 'C', uv: 300, pv: 2000, amt: 2100},
{name: 'D', uv: 100, pv: 2600, amt: 2200}];

export default class AreaChartWidget extends Component {
    render() {
        
      return ( 
<AreaChart className="areaChart" width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
     );
    }
  }