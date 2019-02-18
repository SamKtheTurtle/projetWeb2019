import React, { Component } from 'react';
import LineChartWidget from '../component/lineChart';
import AreaChartWidget from '../component/areaChart';
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
      </Container>
    );
  }
}
