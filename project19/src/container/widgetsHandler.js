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
        <Col lg={4} sm={6} xs={12} className="colWidget">
          <LineChartWidget />
        </Col>
        <Col lg={4} sm={6} xs={12} className="colWidget">
        <ScatterChartWidget/>
        </Col>
        <Col  lg={4} sm={6} xs={12} className="colWidget">
          <PieChartWidget/>
        </Col>
        <Col  lg={4} sm={6} xs={12} className="colWidget">
         <AreaChartWidget/>
        </Col>
        <Col  lg={4} sm={6} xs={12} className="colWidget">
          <BarChartWidget/>
        </Col>
        <Col  lg={4} sm={6} xs={12} className="colWidget">
          <RadarChartWidget/>
        </Col>
        </Row>

        </div>
    );
  }
}
