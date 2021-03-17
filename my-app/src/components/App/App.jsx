import React, { Component } from 'react';
import MyFunction from '../header';
import './style.css';

class App extends Component {
    render() { 
        return ( 
            <React.Fragment>
              <MyFunction/>
            </React.Fragment>
         );
    }
}
 
export default App;