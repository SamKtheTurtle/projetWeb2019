import React, { Component } from 'react';
import Switch from "react-switch";
import './header.css';

export default class SwitchLight extends Component {
    constructor() {
        super();
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
      }
     
      handleChange(checked) {
        this.setState({ checked });
      }
    render() {
      return ( 
<label>
<Switch onChange={this.handleChange} checked={this.state.checked} />
</label>

    );
}
}