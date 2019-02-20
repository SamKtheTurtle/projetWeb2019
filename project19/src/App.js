import React, { Component } from 'react';
import WidgetsHandler from './container/widgetsHandler';
import Header from './container/header';
import {Container, Row, Col} from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="HomePage">
      <Header/>
        <body>
        
          <WidgetsHandler/>
        
        </body>
      </div>
    );
  }
}

export default App;


//https://www.creativebloq.com/how-to/create-a-dashboard-app-with-react
