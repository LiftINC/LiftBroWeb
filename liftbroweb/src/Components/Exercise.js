import React, { Component } from 'react';

import {Panel} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import {PanelGroup} from 'react-bootstrap';
class Exercise extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
      this.exercise = props.exercise
      
    }
  
    
  
    render() {
      return(
          <tr>
              <td>1</td>
        <td>{this.exercise.activity.name}</td>
        <td>{this.exercise.sets}</td>
        <td>{this.exercise.repetitions}</td>
        <td>30 seconds</td>
        <td>{this.exercise.weight}</td>
        </tr>
      );
    }
  }

  export default Exercise;