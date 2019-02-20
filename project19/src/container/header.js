import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';
import './header.css';

export default class Header extends Component {
    render() {
        
      return ( 
<div class="head">
    <Row>
        <Col lg={6}>
        WIDGETS
        </Col>
        <Col lg={6}>
        DATA FORMS
        </Col>
    </Row>
</div>
     );
    }
  }


