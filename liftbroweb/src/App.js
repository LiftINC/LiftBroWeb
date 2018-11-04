import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Workouts from './Components/Workouts.js'
import {Panel} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import {PanelGroup} from 'react-bootstrap';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
    };
}
  render() {
    return (<div id = "App">
      <Workouts name = "BRO" />
      </div>);
    ;
  }
  updateModal(isVisible) {
    this.state.isVisible = isVisible;
    this.forceUpdate();
  }
}

export default App;
