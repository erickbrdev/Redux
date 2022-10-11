import React from 'react'
import './App.css';
import Sidebar from './Components/Sidebar';
import Trailler from './Components/Trailler';

export default class App extends React.Component {
  render(){
    return(
      <div className='container-main'>
        <Sidebar />
        <Trailler />
      </div>
    )
  }
}

