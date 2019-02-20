import React, { Component } from 'react';
import LineChartWidget from '../component/lineChart';
import AreaChartWidget from '../component/areaChart';
import PieChartWidget from '../component/pieChart';
import BarChartWidget from '../component/barChart';
import RadarChartWidget from '../component/radarChart';
import ScatterChartWidget from '../component/scatterChart';
import {Container, Row, Col} from 'reactstrap';
import './widgetsHandler.css';

export default class WidgetsHandler extends Component {
  render() {
    return (
      <div className="WidgetLand container-fluid">
    
        <Row>
        <Col lg="auto" className="colWidget">
          <LineChartWidget />
        </Col>
        <Col lg="auto" className="colWidget">
        <ScatterChartWidget/>
        </Col>
        <Col  lg="auto" className="colWidget">
          <PieChartWidget/>
        </Col>
        <Col  lg="auto" className="colWidget">
         <AreaChartWidget/>
        </Col>
        <Col  lg="auto" className="colWidget">
          <BarChartWidget/>
        </Col>
        <Col  lg="auto" className="colWidget">
          <RadarChartWidget/>
        </Col>
        </Row>

        </div>
    );
  }
}
