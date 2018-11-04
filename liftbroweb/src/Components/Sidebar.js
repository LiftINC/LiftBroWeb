import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
class SideBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          name: "Einar",
          error: null,
          isLoaded: false,
          workouts: []
        };
      };
      render(){
          return(){
        <Menu >
        <a className="menu-item" href="/">
          Home
        </a>
  
        <a className="menu-item" href="/laravel">
          Laravel
        </a>
  
        <a className="menu-item" href="/angular">
          Angular
        </a>
  
        <a className="menu-item" href="/react">
          React
        </a>
  
        <a className="menu-item" href="/vue">
          Vue
        </a>
  
        <a className="menu-item" href="/node">
          Node
        </a>
      </Menu>
      }}

}
export default SideBar;