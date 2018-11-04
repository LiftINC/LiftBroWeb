import React, { Component } from 'react';

import {Panel} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import {PanelGroup} from 'react-bootstrap';
import Exercise from './Exercise.js'
class Workout extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
      this.eventKey = props.eventKey
      this.name = props.name
      this.exercises = props.exercises
    }
  
    
  
    render() {
      return(<Panel eventKey={this.eventKey}>
      <Panel.Heading>
        <Panel.Title toggle>{this.name}</Panel.Title>
      </Panel.Heading>
      <Panel.Body collapsible>
      <Table responsive>
    <thead>
      <tr>
        <th>#</th>
        <th>Exercise</th>
        <th>Sets</th>
        <th>Repetitions</th>
        <th>Pause Time</th>
        <th>Weight</th>
      </tr>
    </thead>
    <tbody>
      {this.exercises.map(ex =>
        (<Exercise exercise={ex} />))}
    </tbody>
  </Table>
      </Panel.Body>
    </Panel>)
    }
  }

  export default Workout