import React, { Component } from 'react';
import { PieChart, Pie} from 'recharts';
import './pieChart.css';
const data01 = 
[{name: 'Page A', value: 400},
{name: 'Page B', value: 800},
{name: 'Page C', value: 1800},
{name: 'Page D', value: 700}];

const data02 = 
[{name: 'Page A', value: 1400},
{name: 'Page B', value: 500},
{name: 'Page C', value: 700},
{name: 'Page D', value: 1000}];
export default class PieChartWidget extends Component {
    render() {
        
      return ( 
<PieChart className="pieChart" width={300} height={250}>
  <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
  <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
</PieChart>
     );
    }
  }




