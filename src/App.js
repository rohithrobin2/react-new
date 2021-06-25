
import './App.css';
import React, {Component} from 'react';
import {MenuItem} from './components/menu';
import "./components/menu.css"

class App extends Component{
  constructor(){
    super();
    this.state={
    
    };
  }
  render(){
  return (
    <div className="App">
      <header className="gfh" >
     
      <div className="Style" >
        <div className="Container">
      <h3 className="color">Menu</h3>
     
   <MenuItem name=""/>
      </div>
      <div className="Style3">
      <h3 >Project </h3>
      <h3>{"<<"} Project name{">>"}</h3>
      <h3>Client </h3>
      <h3>{"<<"} Client name{">>"}</h3>
      <h3>Due date </h3>
      <h3>{"<<"} Due date{">>"} </h3>
      <h3>Status </h3>
      <h3>{"<<"} Status{">>"} </h3>
      <h3>Engagement partner</h3>
      <h3>{"<<"} Partner{">>"} </h3>
      <h3>Team Lead</h3>
      <h3>{"<<"} Team Lead{">>"} </h3>
      
      
      </div>
     
      
      </div>

      </header>
      <body className="">
      <div className="">
        <h3>Project Specifies</h3>
      </div>
      </body>
    </div>
  );
}
}
export default App;
