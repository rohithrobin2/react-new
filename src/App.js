
import './App.css';
import React, {Component} from 'react';
import "./components/menu.css"
import { ProjectItem } from './components/Project_Activities';
import { Documentation } from './components/Documentation';
import {Date} from './components/Date'
import { Activities } from './components/Activities';
import { Time } from './components/Time';
import { Status } from './components/Status';
import {Team} from './components/Members'
import { Projects } from './components/Projects';
import { Dairy } from './components/Dairy';
import { Archive } from './components/Archive';
import { Reference } from './components/Reference';
import { UIDN } from './components/UIDN';
import { Sign } from './components/Sign_Register';
import { DocumentsIn } from './components/Documents_out';
import { DocumentsOut } from './components/Documents_In';
import { ProjectEdit } from './components/Project_Edit';
import { Billing } from './components/Billing';







class App extends Component{
  constructor(){
    super();
    this.state={
    name:"Project Specifies"
    };

  
  
 
  }
  render(){
    
  
  return (
    <div className="App">
      <header className="tff   k" >
     
      <div className="Style" >
        <div className="Container">
      <h3 className="color">Menu</h3>
      {/*Menu Items */}
     <div >
            <p onClick={()=>{this.setState({name:'Project Activities'})} }>Project Specifies </p>
            <p onClick={()=>{this.setState({name:'Documentation'})} } >Documentation </p>
            <p onClick={()=>{this.setState({name:'Date'})} }>Update due date </p>
            <p onClick={()=>{this.setState({name:'Activities'})} }>Add specific activity </p>
            <p onClick={()=>{this.setState({name:'Time'})} }>Book time </p>
            <p onClick={()=>{this.setState({name:'Status'})} }>Update Status </p>
            <p onClick={()=>{this.setState({name:'Members'})} }>Team Members </p>
            <p onClick={()=>{this.setState({name:'Projects'})} }>Related projects </p>
            <p onClick={()=>{this.setState({name:'Dairy'})} }>Project Diary </p>
            <p onClick={()=>{this.setState({name:'Archive'})} }>Archive</p>
            <p onClick={()=>{this.setState({name:'Reference'})} }>Internal Reference</p>
            <p onClick={()=>{this.setState({name:'UIDN Details'})} }>UDIN </p>
            <p onClick={()=>{this.setState({name:'Sign Register'})} }>DSC Sign Register</p>
            <p onClick={()=>{this.setState({name:'Document In'})} }>Document In </p>
            <p onClick={()=>{this.setState({name:'Document Out'})} }>Document Out </p>
            <p onClick={()=>{this.setState({name:'Project Edit'})} }>Project Edit</p>
             <p onClick={()=>{this.setState({name:'Billing Details'})} }>Billing </p>
     

      </div>
      </div>
      {/*Header Contents */}
      <div className="Style3">
      <h3 >Project </h3>
      <h3>{"<<"} Project name{">>"}</h3>
      <h3>Client </h3>
      <h3>{"<<"} Client name{">>"}</h3>
      <h3>Due date </h3>
      <h3>{"<<"} Due date{">>"} </h3>
      <h3>{"<<"} Partner{">>"} </h3>
      <h3>Team Lead</h3>
      <h3>{"<<"} Team Lead{">>"} </h3>
      
      
      </div>
     
      
      </div>

      </header>

      {(() => {

  
      switch  (this.state.name) {
      case 'Project Activities':
        return <ProjectItem/>
      
      case 'Documentation':
         return <Documentation/>
      
      case 'Date':
         return <Date/>
      
      case 'Activities':
         return <Activities/>
      
       case 'Time':
          return <Time/> 
          
       case 'Status':
         return <Status/>  
         
       case 'Members':
          return <Team/>
        
       case 'Projects':
            return <Projects/>
            
        case 'Dairy':
           return <Dairy/>
  
        case 'Archive':
           return <Archive/>
           
        case 'Reference':
           return <Reference/>
           
       case 'UIDN Details':
           return <UIDN/>

           case 'Sign Register':
            return <Sign/>
            
           case 'Documents In':
              return <DocumentsIn/>
              
           case 'Documents Out':
                return <DocumentsOut/>

            case 'Project Edit':
              return <ProjectEdit/>

            case 'Billing':
               return <Billing/>

                default:
                 return("")
     }
     
     })()}
      <body className="jkhhg">
      <div className="">
        
        <h3>{this.state.name}</h3>
        
       
      </div>
      </body>
    </div>
    
   
    
  );
  
   
    
  }
  }


export default App;
