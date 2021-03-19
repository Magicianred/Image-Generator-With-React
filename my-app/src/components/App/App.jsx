import React, { Component } from 'react';
import Header from '../header';
import Main from '../mainBox';
import './style.css';

class App extends Component {
    render() { 
        return ( 
            <div className="app">
              <Header/>
              <Main/>
            </div>
         );
    }
}
 
export default App;