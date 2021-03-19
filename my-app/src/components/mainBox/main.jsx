import React, { Component } from 'react';
import Card from '../card'

class Main extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
               <Card name="fidosh" surname="naghiyeva" age="20"/>
               <Card name="fidosh" surname="naghiyeva" age="20"/>
            </div>
         );
    }
}
 
export default Main;