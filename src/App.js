// Repository:  nugatory-react
// Author:      Jeff Grissom
// Version:     1.xx
import React, { Component } from 'react';
import './App.css';
import Countries from './components/Countries';

class App extends Component {
  render() { 
    return ( 
      <div className="App">
        <Countries />
      </div>
     );
  }
}
 
export default App;
