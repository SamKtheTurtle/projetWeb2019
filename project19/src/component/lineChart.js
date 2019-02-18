import React, { Component } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const data = 
[{name: 'Page A', uv: 400, pv: 2400, amt: 2400},
{name: 'Page B', uv: 800, pv: 2800, amt: 2900},
{name: 'Page C', uv: 300, pv: 2000, amt: 2100},
{name: 'Page D', uv: 100, pv: 2600, amt: 2200}];

export default class LineChartWidget extends Component {
    render() {
        
      return ( 
        <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
      );
    }
  }
  


