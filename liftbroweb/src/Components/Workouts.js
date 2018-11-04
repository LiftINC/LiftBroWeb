import React, { Component } from 'react';

import {Panel} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import {PanelGroup} from 'react-bootstrap';
import Workout from './Workout.js'
class Workouts extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
      this.name = props.name
      this.items = []
      for (var i = 0;i<20;i++){
        this.items.push(i);
      }
      this.data = JSON.parse('[{"id":1,"exercises":[{"id":2,"activity":{"id":1,"name":"Barbell Rows"},"repetitions":5,"sets":3,"weight":50.0},{"id":2,"activity":{"id":2,"name":"BenchPress"},"repetitions":5,"sets":3,"weight":50.0},{"id":1,"activity":{"id":3,"name":"Pushups"},"repetitions":5,"sets":3,"weight":0.0}],"name":"Workout 1"},{"id":2,"exercises":[{"id":1,"activity":{"id":1,"name":"Squats"},"repetitions":5,"sets":3,"weight":50.0},{"id":1,"activity":{"id":2,"name":"BenchPress"},"repetitions":5,"sets":3,"weight":50.0},{"id":1,"activity":{"id":3,"name":"Pushups"},"repetitions":5,"sets":3,"weight":0.0}],"name":"Workout 2"}]')
      
    }
  
    
    
  
    render() {
      
      return(
        <PanelGroup accordion id="accordion-example">
        {this.data.map(item => (
              <Workout eventKey={item.id} name = {item.name} exercises = {item.exercises}/>  
            ))}
    
      </PanelGroup>);
      ;
    }
  }

  export default Workouts;
/*
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("https://api.example.com/items")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.items
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {items.map(item => (
              <li key={item.name}>
                {item.name} {item.price}
              </li>
            ))}
          </ul>
        );
      }
    }
  }
  */