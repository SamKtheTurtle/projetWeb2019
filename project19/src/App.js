import React, { Component } from 'react';
import WidgetsHandler from './container/widgetsHandler';
import {Container, Row, Col} from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
          <WidgetsHandler/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
