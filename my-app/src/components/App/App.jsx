import React, { Component } from 'react';
import Header from '../header';
import Main from '../mainBox';
import './style.css';

class App extends Component {
    render() { 
        return ( 
            <React.Fragment>
              <Header/>
              <Main/>
            </React.Fragment>
         );
    }
}
 
export default App;