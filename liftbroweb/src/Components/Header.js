import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {} from 'react-bootstrap';
import { Link } from 'react-router-dom'
class Header extends React.Component {
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
        <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
    <Link to="/">App</Link>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="#">
    <Link to="/Einar">Einar</Link>
    </NavItem>
  </Nav>
</Navbar>
      );
    }
  }

  export default Header;