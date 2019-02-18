import React, { Component } from 'react';
import WidgetsHandler from './container/widgetsHandler';
import Header from './container/header';
import {Container, Row, Col} from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
          <Header/>
        <body>
        <Row>
          <Col lg={1}>
          </Col>
          <Col lg={11}>
          <WidgetsHandler/>
          </Col>
        </Row>
        </body>
      </Container>
    );
  }
}

export default App;


//https://www.creativebloq.com/how-to/create-a-dashboard-app-with-react
