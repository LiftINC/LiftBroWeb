import React, { Component } from 'react';

import {Panel} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import {PanelGroup} from 'react-bootstrap';
class User extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "Einar",
        error: null,
        isLoaded: false,
        workouts: []
      };
    }
  
    render() {
      return(
        <h1>Einar</h1>
      )
    }
  }

  export default User;