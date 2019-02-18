import React, { Component } from 'react';
import LineChartWidget from '../component/lineChart';
import AreaChartWidget from '../component/areaChart';
import PieChartWidget from '../component/pieChart';
import BarChartWidget from '../component/barChart';
import RadarChartWidget from '../component/radarChart';
import {Container, Row, Col} from 'reactstrap';

export default class WidgetsHandler extends Component {
  render() {
    return (
        <Container>
        <Row>
          <Col lg={8}>
          <LineChartWidget/>
          </Col>
          <Col lg={4}>
          <AreaChartWidget/>
          </Col>
          </Row>
          <Row>
           <Col lg={6}>
          <PieChartWidget/>
          </Col>
          <Col lg={6}>
          <BarChartWidget/>
          </Col>
        </Row>
        <Row>
        <Col lg={6}>
        <RadarChartWidget/>
        </Col>
        </Row>
      </Container>
    );
  }
}
