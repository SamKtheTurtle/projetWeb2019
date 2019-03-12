import React, { Component } from 'react';
import { RadarChart, PolarGrid , Legend, PolarAngleAxis, PolarRadiusAxis, Radar} from 'recharts';
import './radarChart.css';

const data = 
[{'subject': 'Mécanique', 'A': 85, 'B': 63, 'fullmark': 100},
{'subject': 'Physique', 'A': 92, 'B': 71, 'fullmark': 100},
{'subject': 'Mathématiques', 'A': 57, 'B': 44, 'fullmark': 100},
{'subject': 'Sport', 'A': 33, 'B': 77, 'fullmark': 100},
{'subject': 'Biologie', 'A': 20, 'B': 51, 'fullmark': 100}];
export default class RadarChartWidget extends Component {
    render() {
      return ( 
        <RadarChart className="radarChart" outerRadius={90} width={300} height={250} data={data}>
  <PolarGrid />
  <PolarAngleAxis dataKey="subject" />
  <PolarRadiusAxis angle={30} domain={[0, 150]} />
  <Radar name="Sujet A" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
  <Radar name="Sujet B" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
  <Legend />
</RadarChart>
      );
    }
  }
  
