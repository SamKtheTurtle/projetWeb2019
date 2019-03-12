import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';
import WidgetsHandler from './widgetsHandler';
import {Navbar, Nav} from 'react-bootstrap/Navbar'
import './header.css';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
        };
        this._onButtonClick = this._onButtonClick.bind(this);
      }
    
      _onButtonClick() {
        this.setState({
            showComponent: true,
        });
      }
    render() {
        
      return ( 
<div class="head">
    <Row>
        <Col lg={6} sm={6} xs={6}>
        <button onClick={this._onButtonClick}>WIDGETS</button>
        {this.state.showComponent ?
           <WidgetsHandler/> :
           null
        } 
        
        </Col>
        <Col lg={6} sm={6} xs={6}>
        <button onClick={this._onButtonClick}>DATA FORMS</button>
        {this.state.showComponent ?
           <WidgetsHandler/> :
           null
        } 
        </Col>
    </Row>
</div>
      );
    }
  }


